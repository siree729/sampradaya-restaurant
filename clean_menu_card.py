"""
Cleans Sri Sampradaya Menu Card images:
1. Removes the Enquire button and Phone pill from the top-right header using seamless bilinear background interpolation.
2. Removes the green WhatsApp Enquiry button from the bottom footer.
Preserves:
- All authentic menu items and prices in ultra-sharp 4K resolution (2400x4931).
- Outer gold decorative border frame.
- Bottom 'SRI SAMPRADAYA · JAGTIAL' brand footer.
- Fish Fried Rice correction.
"""
from PIL import Image

def clean_card(source_path, dest_paths):
    img = Image.open(source_path).convert('RGB')
    w, h = img.size

    # 1. Bilinear background inpaint for top-right header (phone pill + enquire button)
    # Box: x from 1680 to 2355, y from 75 to 230
    x1, x2 = 1680, 2355
    y1, y2 = 75, 230

    left_col = [img.getpixel((x1 - 1, y)) for y in range(y1, y2 + 1)]
    right_col = [img.getpixel((x2 + 1, y)) for y in range(y1, y2 + 1)]
    top_row = [img.getpixel((x, y1 - 1)) for x in range(x1, x2 + 1)]
    bottom_row = [img.getpixel((x, y2 + 1)) for x in range(x1, x2 + 1)]

    for y in range(y1, y2 + 1):
        v = (y - y1) / float(y2 - y1)
        c_left = left_col[y - y1]
        c_right = right_col[y - y1]
        for x in range(x1, x2 + 1):
            u = (x - x1) / float(x2 - x1)
            c_top = top_row[x - x1]
            c_bottom = bottom_row[x - x1]

            h_r = (1 - u) * c_left[0] + u * c_right[0]
            h_g = (1 - u) * c_left[1] + u * c_right[1]
            h_b = (1 - u) * c_left[2] + u * c_right[2]

            v_r = (1 - v) * c_top[0] + v * c_bottom[0]
            v_g = (1 - v) * c_top[1] + v * c_bottom[1]
            v_b = (1 - v) * c_top[2] + v * c_bottom[2]

            final_r = int(round(0.5 * (h_r + v_r)))
            final_g = int(round(0.5 * (h_g + v_g)))
            final_b = int(round(0.5 * (h_b + v_b)))

            img.putpixel((x, y), (final_r, final_g, final_b))

    # 2. Erase bottom green WhatsApp pill
    # Box: x from 850 to 1550, y from 4770 to 4865
    footer_bg = (34, 18, 16)
    for y in range(4770, 4865):
        for x in range(850, 1550):
            img.putpixel((x, y), footer_bg)

    for dp in dest_paths:
        img.save(dp, "PNG")
        print(f"Saved cleaned card to: {dp}")

if __name__ == "__main__":
    edited_src = r"src/assets/menu/sri_sampradaya_menu_card_edited.png"
    targets = [
        r"src/assets/menu/sri_sampradaya_menu_card_edited.png",
        r"src/assets/menu/sri_sampradaya_menu_card.png",
        r"src/assets/menu/sri_sampradaya_menu_card_original.png"
    ]
    clean_card(edited_src, targets)
    print("All menu card images successfully updated.")
