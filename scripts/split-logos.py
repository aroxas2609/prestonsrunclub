from PIL import Image

SRC = r"C:\Users\antho\.cursor\projects\d-prestonsRunClub\assets\c__Users_antho_AppData_Roaming_Cursor_User_workspaceStorage_a264ca42ec3a9284f27376dbb6bd38eb_images_picsrunclub-a37fb4b5-27ce-4d82-b602-c1457a63cedc.png"
OUT_DIR = r"d:\prestonsRunClub\public"
NAMES = [
    "logo-wordmark-mascots.png",
    "logo-badge.png",
    "logo-mascots.png",
]
SCALE = 3
PADDING_RATIO = 0.08


def make_transparent(crop: Image.Image) -> Image.Image:
    pixels = crop.load()
    cw, ch = crop.size
    for y in range(ch):
        for x in range(cw):
            r, g, b, _a = pixels[x, y]
            if r < 30 and g < 30 and b < 30:
                pixels[x, y] = (0, 0, 0, 0)
    return crop


def padded_bbox(crop: Image.Image) -> Image.Image:
    bbox = crop.getbbox()
    if not bbox:
        return crop

    left, top, right, bottom = bbox
    cw, ch = crop.size
    pad_x = max(12, int((right - left) * PADDING_RATIO))
    pad_y = max(12, int((bottom - top) * PADDING_RATIO))

    left = max(0, left - pad_x)
    top = max(0, top - pad_y)
    right = min(cw, right + pad_x)
    bottom = min(ch, bottom + pad_y)
    return crop.crop((left, top, right, bottom))


def main() -> None:
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    third = w // 3
    dimensions: list[tuple[str, int, int]] = []

    for i, name in enumerate(NAMES):
        left = i * third
        right = (i + 1) * third if i < 2 else w
        part = img.crop((left, 0, right, h))
        part = make_transparent(part)
        part = padded_bbox(part)

        out_w = part.size[0] * SCALE
        out_h = part.size[1] * SCALE
        part = part.resize((out_w, out_h), Image.Resampling.LANCZOS)

        path = f"{OUT_DIR}/{name}"
        part.save(path, compress_level=1)
        dimensions.append((name, out_w, out_h))
        print(f"{name}: {out_w}x{out_h} -> {path}")

    print("\nDimensions for components:")
    for name, out_w, out_h in dimensions:
        print(f"  {name}: {out_w}, {out_h}")


if __name__ == "__main__":
    main()
