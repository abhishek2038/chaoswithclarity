"""
CWC Logo Generator — v2
Options A and E, with and without URL, straight text, all backgrounds
"""
import math, os, zipfile
from PIL import Image, ImageDraw, ImageFont

LORA    = "/usr/share/fonts/truetype/google-fonts/Lora-Variable.ttf"
POPPINS = "/usr/share/fonts/truetype/google-fonts/Poppins-Regular.ttf"

def font(path, size):
    try:    return ImageFont.truetype(path, size)
    except: return ImageFont.load_default()

# Colours
GOLD        = (184, 136, 30)
GOLD_BRIGHT = (212, 164, 50)
GOLD_DARK   = (122, 92, 20)
INK         = (14, 12, 20)
CREAM       = (228, 221, 208)
FAINT       = (58, 54, 80)
LIGHT       = (245, 236, 224)
PARCHMENT   = (237, 227, 208)

BG_MAP = {'dark': INK, 'light': LIGHT, 'parchment': PARCHMENT}
TEXT_MAP = {'dark': CREAM, 'light': (14,12,20), 'parchment': (14,12,20)}
URL_MAP  = {'dark': FAINT, 'light': (176,160,136), 'parchment': (176,160,136)}
GB_MAP   = {'dark': GOLD_BRIGHT, 'light': GOLD_DARK, 'parchment': GOLD_DARK}

def rgba(rgb, a=255): return rgb + (a,)

# ── Spiral ───────────────────────────────────────────────
def draw_spiral(draw, cx, cy, max_r, turns=2.75, gold=GOLD, gold_bright=GOLD_BRIGHT):
    steps   = 1200
    total_a = turns * 2 * math.pi
    split   = 0.60

    # Outer dashed
    for i in range(int(steps * split)):
        if i % 7 < 3: continue
        t, t2 = i/steps, (i+1)/steps
        a1, a2 = t*total_a, t2*total_a
        r1 = max_r * (1-t)**0.80
        r2 = max_r * (1-t2)**0.80
        alpha = int(255 * (0.08 + (t/split)*0.50))
        draw.line(
            [(cx+r1*math.cos(a1), cy+r1*math.sin(a1)),
             (cx+r2*math.cos(a2), cy+r2*math.sin(a2))],
            fill=rgba(gold, alpha),
            width=max(1, int(max_r*0.022))
        )

    # Inner solid
    pts = []
    for i in range(int(steps*(split-0.05)), steps+1):
        t = i/steps
        r = max_r * (1-t)**0.80
        pts.append((cx + r*math.cos(t*total_a), cy + r*math.sin(t*total_a)))
    if len(pts) > 1:
        draw.line(pts, fill=rgba(gold), width=max(2, int(max_r*0.032)), joint='curve')

    # Centre dot
    dr = max(4, int(max_r*0.10))
    draw.ellipse([cx-dr, cy-dr, cx+dr, cy+dr], fill=rgba(gold))
    dr2 = max(2, int(dr*0.45))
    draw.ellipse([cx-dr2, cy-dr2, cx+dr2, cy+dr2], fill=rgba(gold_bright))

# ── Spaced text ──────────────────────────────────────────
def text_width(text, fnt, spacing):
    total = 0
    for ch in text:
        bb = fnt.getbbox(ch)
        total += (bb[2]-bb[0]) + spacing
    return total - spacing

def draw_spaced(draw, text, x, y, fnt, fill, spacing=0):
    cx = x
    for ch in text:
        draw.text((cx, y), ch, font=fnt, fill=fill)
        bb = fnt.getbbox(ch)
        cx += (bb[2]-bb[0]) + spacing

# ── Single logo image ─────────────────────────────────────
def make_logo(option, bg_name, show_url, scale=2):
    bg       = BG_MAP[bg_name]
    text_col = TEXT_MAP[bg_name]
    url_col  = URL_MAP[bg_name]
    gb       = GB_MAP[bg_name]
    S        = scale

    # Canvas
    W, H     = 900*S, 320*S
    img      = Image.new('RGB', (W, H), bg)
    draw     = ImageDraw.Draw(img)

    # Spiral on left
    spiral_r = 110*S
    sx, sy   = 175*S, H//2
    draw_spiral(draw, sx, sy, spiral_r, gold=GOLD, gold_bright=gb)

    # Divider
    div_x = 310*S
    draw.line([(div_x, sy-50*S), (div_x, sy+50*S)], fill=rgba(GOLD, 35), width=max(1,S))

    # Text
    tx = 335*S

    if option == 'A':
        fnt_main = font(LORA, 52*S)
        fnt_url  = font(POPPINS, 18*S)
        word     = "chaoswithclarity"
        bb       = fnt_main.getbbox(word)
        tw, th   = bb[2]-bb[0], bb[3]-bb[1]
        ty       = sy - th//2 - (14*S if show_url else 0)
        draw.text((tx, ty), word, font=fnt_main, fill=rgba(text_col))
        if show_url:
            url_y = ty + th + 12*S
            draw.text((tx, url_y), "chaoswithclarity.com", font=fnt_url, fill=rgba(url_col))

    elif option == 'E':
        fnt_main = font(LORA, 40*S)
        fnt_url  = font(POPPINS, 18*S)
        sp       = 9*S
        line1    = "CHAOS"
        line2    = "WITH CLARITY"
        bb1      = fnt_main.getbbox("A")
        lh       = bb1[3]-bb1[1]
        gap_l    = 10*S
        total_h  = lh*2 + gap_l + (0 if not show_url else 0)
        ty1      = sy - total_h//2 - (10*S if show_url else 0)
        draw_spaced(draw, line1, tx, ty1, fnt_main, rgba(text_col), sp)
        draw_spaced(draw, line2, tx, ty1+lh+gap_l, fnt_main, rgba(text_col), sp)
        if show_url:
            rule_y = ty1 + lh*2 + gap_l + 14*S
            draw.line([(tx, rule_y), (tx+60*S, rule_y)], fill=rgba(GOLD,70), width=max(1,S))
            draw.text((tx, rule_y+10*S), "chaoswithclarity.com", font=fnt_url, fill=rgba(url_col))

    return img


# ── Stacked version ───────────────────────────────────────
def make_stacked(option, bg_name, show_url, scale=2):
    bg       = BG_MAP[bg_name]
    text_col = TEXT_MAP[bg_name]
    url_col  = URL_MAP[bg_name]
    gb       = GB_MAP[bg_name]
    S        = scale

    W, H     = 600*S, 520*S
    img      = Image.new('RGB', (W, H), bg)
    draw     = ImageDraw.Draw(img)

    # Spiral
    spiral_r = 120*S
    sx, sy   = W//2, 185*S
    draw_spiral(draw, sx, sy, spiral_r, gold=GOLD, gold_bright=gb)

    # Text
    if option == 'A':
        fnt_main = font(LORA, 50*S)
        fnt_url  = font(POPPINS, 18*S)
        word     = "chaoswithclarity"
        bb       = fnt_main.getbbox(word)
        tw, th   = bb[2]-bb[0], bb[3]-bb[1]
        ty       = sy + spiral_r + 36*S
        draw.text((W//2 - tw//2, ty), word, font=fnt_main, fill=rgba(text_col))
        # rule
        rule_y = ty + th + 14*S
        draw.line([(W//2-30*S, rule_y), (W//2+30*S, rule_y)], fill=rgba(GOLD,70), width=max(1,S))
        if show_url:
            bb_u = fnt_url.getbbox("chaoswithclarity.com")
            uw   = bb_u[2]-bb_u[0]
            draw.text((W//2-uw//2, rule_y+12*S), "chaoswithclarity.com",
                      font=fnt_url, fill=rgba(url_col))

    elif option == 'E':
        fnt_main = font(LORA, 42*S)
        fnt_url  = font(POPPINS, 18*S)
        sp       = 10*S
        line1, line2 = "CHAOS", "WITH CLARITY"
        bb1      = fnt_main.getbbox("A")
        lh       = bb1[3]-bb1[1]
        gap_l    = 12*S
        ty1      = sy + spiral_r + 36*S
        w1 = text_width(line1, fnt_main, sp)
        w2 = text_width(line2, fnt_main, sp)
        draw_spaced(draw, line1, W//2-w1//2, ty1, fnt_main, rgba(text_col), sp)
        draw_spaced(draw, line2, W//2-w2//2, ty1+lh+gap_l, fnt_main, rgba(text_col), sp)
        rule_y = ty1 + lh*2 + gap_l + 16*S
        draw.line([(W//2-35*S, rule_y), (W//2+35*S, rule_y)], fill=rgba(GOLD,70), width=max(1,S))
        if show_url:
            bb_u = fnt_url.getbbox("chaoswithclarity.com")
            uw   = bb_u[2]-bb_u[0]
            draw.text((W//2-uw//2, rule_y+12*S), "chaoswithclarity.com",
                      font=fnt_url, fill=rgba(url_col))

    return img


# ── Icon only ─────────────────────────────────────────────
def make_icon(bg_name, size_px=400, scale=2):
    bg = BG_MAP[bg_name]
    gb = GB_MAP[bg_name]
    S  = scale
    W  = H = size_px * S
    img  = Image.new('RGB', (W, H), bg)
    draw = ImageDraw.Draw(img)
    draw_spiral(draw, W//2, H//2, int(W*0.42), gold=GOLD, gold_bright=gb)
    # Resize to actual size
    img = img.resize((size_px, size_px), Image.LANCZOS)
    return img


# ── Generate all ──────────────────────────────────────────
OUT = "/sessions/elegant-lucid-bell/cwc-logo-export"
os.makedirs(OUT, exist_ok=True)

files = []

for opt in ['A', 'E']:
    for bg in ['dark', 'light', 'parchment']:
        for url in [True, False]:
            url_tag = 'with-url' if url else 'no-url'

            # Horizontal
            img = make_logo(opt, bg, url)
            name = f"cwc-{opt}-horizontal-{bg}-{url_tag}.png"
            img.save(os.path.join(OUT, name), 'PNG', dpi=(144,144))
            files.append(name); print(f"  ✓ {name}")

            # Stacked
            img = make_stacked(opt, bg, url)
            name = f"cwc-{opt}-stacked-{bg}-{url_tag}.png"
            img.save(os.path.join(OUT, name), 'PNG', dpi=(144,144))
            files.append(name); print(f"  ✓ {name}")

# Icons (no URL)
for bg in ['dark', 'light', 'parchment']:
    img = make_icon(bg, size_px=400, scale=2)
    name = f"cwc-icon-{bg}.png"
    img.save(os.path.join(OUT, name), 'PNG')
    files.append(name); print(f"  ✓ {name}")

# Favicons
for px in [32, 64, 128, 256]:
    img = make_icon('dark', size_px=px, scale=2)
    name = f"cwc-favicon-{px}px.png"
    img.save(os.path.join(OUT, name), 'PNG')
    files.append(name); print(f"  ✓ {name}")

# Zip
ZIP = "/sessions/elegant-lucid-bell/mnt/Claude/cwc-logo-assets.zip"
with zipfile.ZipFile(ZIP, 'w', zipfile.ZIP_DEFLATED) as zf:
    for f in files:
        zf.write(os.path.join(OUT, f), f)

print(f"\n✓ {len(files)} files → {ZIP}")
