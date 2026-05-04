export const SITE_NAME = "Prestons Run Club";

export const INSTAGRAM_URL = "https://www.instagram.com/prestonsrunclub";

export const WAIVER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdk4AwQSWYHN2HK_zP6ers6ej9HAoBNFESiNta4JdzIBYAWeA/viewform";

export const WAIVER_EMBED_URL = `${WAIVER_FORM_URL}?embedded=true`;

export const ETSY_MERCH_URL = "https://www.etsy.com/au/listing/4434966516/";

export const MERCH_PRODUCT = {
  id: "prc-tee-1",
  name: "Prestons Run Club T-shirt",
  price: 45,
  currency: "AUD",
  description:
    "Soft everyday run club tee for training, coffee runs and community days.",
  etsyUrl: ETSY_MERCH_URL,
} as const;
