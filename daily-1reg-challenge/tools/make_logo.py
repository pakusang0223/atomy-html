"""로고 원본(검은 배경 + 흰 글씨)을 애터미 블루(#00B5EF) 투명 PNG로 바꿔요.

사용법:  python3 tools/make_logo.py
필요:    pip install pillow numpy
결과:    design/atomy-logo-blue.png, design/atomy-logo-blue.b64.txt
"""
import base64
import io
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "design" / "atomy-logo-original.jpg"
OUT_PNG = ROOT / "design" / "atomy-logo-blue.png"
OUT_B64 = ROOT / "design" / "atomy-logo-blue.b64.txt"
BRAND_BLUE = (0, 181, 239)  # #00B5EF

gray = np.asarray(Image.open(SRC).convert("L")).astype(float)
alpha = np.clip((gray - 40) / (220 - 40), 0, 1)  # 밝기를 투명도로(가장자리 부드럽게)

ys, xs = np.where(alpha > 0.15)
pad = 6
y0, y1 = max(0, ys.min() - pad), min(gray.shape[0] - 1, ys.max() + pad)
x0, x1 = max(0, xs.min() - pad), min(gray.shape[1] - 1, xs.max() + pad)
alpha = alpha[y0 : y1 + 1, x0 : x1 + 1]

rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
rgba[..., 0], rgba[..., 1], rgba[..., 2] = BRAND_BLUE
rgba[..., 3] = (alpha * 255).astype(np.uint8)
img = Image.fromarray(rgba, "RGBA")
img.save(OUT_PNG, optimize=True)

buf = io.BytesIO()
img.save(buf, "PNG", optimize=True)
OUT_B64.write_text(base64.b64encode(buf.getvalue()).decode())
print(f"saved {OUT_PNG.name} {img.size}, base64 {len(buf.getvalue())} bytes -> {OUT_B64.name}")
