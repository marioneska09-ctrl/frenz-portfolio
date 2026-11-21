import os
import glob
from PIL import Image
from rembg import remove, new_session

input_dir = r"C:\Users\Gagabuan\.gemini\antigravity\scratch\portfolio-website\frames_raw"
output_dir = r"C:\Users\Gagabuan\.gemini\antigravity\scratch\portfolio-website\frames"

os.makedirs(output_dir, exist_ok=True)

# Find all jpg files
files = sorted(glob.glob(os.path.join(input_dir, "ezgif-frame-*.jpg")))
print(f"Found {len(files)} frames to process.")

session = new_session("u2net")

for idx, file_path in enumerate(files):
    base_name = os.path.splitext(os.path.basename(file_path))[0]
    out_png = os.path.join(output_dir, f"{base_name}.png")
    out_webp = os.path.join(output_dir, f"{base_name}.webp")
    
    print(f"[{idx+1}/{len(files)}] Removing background from {base_name}...")
    with Image.open(file_path) as img:
        # Remove background using rembg
        result = remove(img, session=session)
        # Save as PNG
        result.save(out_png, "PNG")
        # Save as optimized WebP for web performance
        result.save(out_webp, "WEBP", quality=90)
    print(f"Saved: {out_png} and {out_webp}")

print("All frames processed successfully!")
