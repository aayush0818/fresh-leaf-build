Plan to make the header visible and unified without redesigning the site:

1. Restore one consistent header treatment
   - Keep the full homepage-style header structure everywhere: logo, centered navigation, search, and scroll/menu behavior.
   - Do not remove the existing dropdown or mega-menu behavior.

2. Fix contrast on all backgrounds
   - Use a subtle premium translucent header surface on page load where needed, instead of relying on white text over variable imagery/backgrounds.
   - Make the default header text/logo dark enough on light pages and readable on the homepage image.
   - Preserve the scrolled state so the compact menu button still appears after scrolling.

3. Improve hover dropdown readability
   - Keep the dropdown styling closer to the earlier white/light treatment the user preferred.
   - Ensure dropdown links have strong contrast and remain readable whether opened from homepage or inner pages.

4. Verify responsive states
   - Check desktop and mobile header states: top of page, scrolled, hover dropdown, and open menu overlay.
   - Only adjust `Header.tsx` and header-related CSS in `styles.css`; no layout, navigation, media, awards, or project content changes.