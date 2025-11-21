# Projet-Zizou-MARKETINK-static-web-site
 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index f70b0cd3b3db6531740631f537342267401143e0..23eb5147e71b3e2d04a9f89472098209d541878b 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,27 @@
-# Projet-Zizou-MARKETINK-static-web-site
\ No newline at end of file
+# Kōbō Static Website
+
+Two-page static site for Kōbō Chocolate featuring an English home page and a detailed story page.
+
+## Pages
+- `index.html`: hero, highlights, gallery, and atelier video preview.
+- `history.html`: full narrative with sourcing, market, culture, and sustainability sections plus video embeds and a visual gallery.
+
+## Styling
+- Shared styles live in `assets/css/styles.css`.
+- Customizable accent colors and typography (Playfair Display + Montserrat) are defined in CSS variables.
+
+## Images to replace
+Placeholder 1×1 images are saved under `assets/images/`. Replace them with final assets using the same filenames:
+- `hero-banner.jpg`
+- `gallery-tasting.jpg`
+- `gallery-matcha.jpg`
+- `gallery-packaging.jpg`
+- `gallery-luxury.jpg`
+- `gallery-atelier.jpg`
+- `history-atelier.jpg`
+- `history-luxury.jpg`
+- `history-tasting.jpg`
+- `history-ingredients.jpg`
+
+## Preview
+Open `index.html` locally in a browser. Navigation links load the companion `history.html` page.
 
EOF
)