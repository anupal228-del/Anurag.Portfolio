# Anurag Pal — Creative Portfolio (QR edition)

A responsive portfolio with the original QR artwork extracted from the supplied portfolio PDF.

## Brand QR interactions
The following four brand cards open a modal with their original QR image and a direct project-folder link:
- BluWis Technologies
- Local Gyan
- Khilonamart
- Dyo Chef

Other brand names remain non-clickable because this PDF does not provide an individually verified QR destination for them.

## GitHub Pages deployment
Upload the CONTENTS of this folder to the root of a new GitHub repository. Keep `index.html`, `style.css`, `script.js`, and `assets/` at the same level.
Then open Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

## Files
- `index.html`: page content and QR modal
- `style.css`: layout, responsive design and modal styling
- `script.js`: navigation and modal interactions
- `assets/anurag-portrait.jpg`: About portrait
- `assets/qr/`: original QR crops from the PDF
