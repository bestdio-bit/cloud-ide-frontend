import os
from PIL import Image, ImageDraw, ImageFont

def create_icon(size, filename):
    # Create an RGBA image
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw rounded rectangle (squircle background)
    padding = int(size * 0.05)
    radius = int(size * 0.25)
    
    # We draw a gradient or solid rich cyber background
    # Let's draw a solid rich obsidian blue/cyan background with a glowing cyan border
    bg_color = (14, 23, 42, 255) # #0e172a dark slate/obsidian
    border_color = (56, 189, 248, 255) # #38bdf8 cyan
    
    draw.rounded_rectangle(
        [(padding, padding), (size - padding, size - padding)],
        radius=radius,
        fill=bg_color,
        outline=border_color,
        width=max(2, int(size * 0.02))
    )
    
    # Draw Tilde '~' in center
    # Try to load a nice font or default
    font_size = int(size * 0.55)
    try:
        font = ImageFont.truetype("arialbd.ttf", font_size)
    except:
        try:
            font = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", font_size)
        except:
            font = ImageFont.load_default()
            
    text = "~"
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    
    x = (size - w) / 2 - bbox[0]
    y = (size - h) / 2 - bbox[1] - int(size * 0.05) # slight upward adjustment for tilde
    
    # Draw cyan shadow/glow then text
    draw.text((x + 2, y + 2), text, font=font, fill=(129, 140, 248, 180)) # indigo glow
    draw.text((x, y), text, font=font, fill=(56, 189, 248, 255)) # bright cyan
    
    img.save(filename, "PNG")
    print(f"Generated {filename}")

if __name__ == "__main__":
    public_dir = os.path.dirname(os.path.abspath(__file__))
    create_icon(192, os.path.join(public_dir, "icon-192.png"))
    create_icon(512, os.path.join(public_dir, "icon-512.png"))
    
    # Create logo.svg as well
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="tilde-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#c084fc" />
    </linearGradient>
  </defs>
  <rect width="460" height="460" x="26" y="26" rx="120" ry="120" fill="#0e172a" stroke="url(#tilde-grad)" stroke-width="20" />
  <text x="256" y="300" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="300" fill="url(#tilde-grad)" text-anchor="middle" dominant-baseline="middle">~</text>
</svg>'''
    with open(os.path.join(public_dir, "logo.svg"), "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Generated logo.svg")
