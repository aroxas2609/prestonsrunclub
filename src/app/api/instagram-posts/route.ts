import { NextResponse } from "next/server";
import { INSTAGRAM_URL } from "@/lib/constants";

type InstaPost = {
  id: string;
  caption: string;
  permalink: string;
  mediaUrl: string;
  timestamp?: string;
};

const fallbackPosts: InstaPost[] = [
  {
    id: "fallback-1",
    caption: "Prestons Run Club",
    permalink: INSTAGRAM_URL,
    mediaUrl: "/runclub-wordmark.png",
  },
  {
    id: "fallback-2",
    caption: "Run day vibes",
    permalink: INSTAGRAM_URL,
    mediaUrl: "/runclub-mascot.png",
  },
  {
    id: "fallback-3",
    caption: "Club merch",
    permalink: INSTAGRAM_URL,
    mediaUrl: "/merch-tee-cream.png",
  },
  {
    id: "fallback-4",
    caption: "All paces welcome",
    permalink: INSTAGRAM_URL,
    mediaUrl: "/merch-tee-white.png",
  },
];

async function fromGraphApi(): Promise<InstaPost[] | null> {
  const businessId = process.env.INSTAGRAM_BUSINESS_ID;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!businessId || !token) return null;

  const endpoint = new URL(`https://graph.facebook.com/v20.0/${businessId}/media`);
  endpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
  );
  endpoint.searchParams.set("limit", "8");
  endpoint.searchParams.set("access_token", token);

  const res = await fetch(endpoint.toString(), { next: { revalidate: 900 } });
  if (!res.ok) return null;

  const payload = (await res.json()) as {
    data?: Array<{
      id: string;
      caption?: string;
      media_type?: string;
      media_url?: string;
      thumbnail_url?: string;
      permalink?: string;
      timestamp?: string;
    }>;
  };

  if (!payload.data?.length) return null;

  return payload.data
    .map((p) => ({
      id: p.id,
      caption: p.caption ?? "Prestons Run Club",
      permalink: p.permalink ?? INSTAGRAM_URL,
      mediaUrl:
        p.media_type === "VIDEO"
          ? (p.thumbnail_url ?? p.media_url ?? "")
          : (p.media_url ?? ""),
      timestamp: p.timestamp,
    }))
    .filter((p) => Boolean(p.mediaUrl));
}

async function fromPublicPage(): Promise<InstaPost[] | null> {
  const endpoint = `${INSTAGRAM_URL}/?__a=1&__d=dis`;
  const res = await fetch(endpoint, {
    next: { revalidate: 900 },
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "x-ig-app-id": "936619743392459",
      accept: "application/json",
    },
  });

  if (!res.ok) return null;

  const data = (await res.json()) as {
    graphql?: {
      user?: {
        edge_owner_to_timeline_media?: {
          edges?: Array<{
            node?: {
              id?: string;
              shortcode?: string;
              display_url?: string;
              edge_media_to_caption?: {
                edges?: Array<{ node?: { text?: string } }>;
              };
              taken_at_timestamp?: number;
            };
          }>;
        };
      };
    };
  };

  const edges =
    data.graphql?.user?.edge_owner_to_timeline_media?.edges?.slice(0, 8) ?? [];

  if (!edges.length) return null;

  const parsed = edges
    .map((edge) => {
      const node = edge.node;
      if (!node?.id || !node.display_url || !node.shortcode) return null;
      return {
        id: node.id,
        caption:
          node.edge_media_to_caption?.edges?.[0]?.node?.text ??
          "Prestons Run Club",
        permalink: `https://www.instagram.com/p/${node.shortcode}/`,
        mediaUrl: node.display_url,
        timestamp: node.taken_at_timestamp
          ? new Date(node.taken_at_timestamp * 1000).toISOString()
          : undefined,
      } as InstaPost;
    })
    .filter((p): p is InstaPost => Boolean(p));

  return parsed.length ? parsed : null;
}

export async function GET() {
  try {
    const graphPosts = await fromGraphApi();
    if (graphPosts?.length) {
      return NextResponse.json({ source: "graph-api", posts: graphPosts });
    }

    const publicPosts = await fromPublicPage();
    if (publicPosts?.length) {
      return NextResponse.json({ source: "public-page", posts: publicPosts });
    }
  } catch {
    // ignore and fallback
  }

  return NextResponse.json({ source: "fallback", posts: fallbackPosts });
}
