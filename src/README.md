# Source Structure

This app is organized by responsibility, not by file type only.

## Folders

- `pages/` - route-level screens used by `App.jsx`.
- `components/layout/` - app shell components such as the header.
- `components/home/` - home-page-only presentation blocks.
- `components/restaurants/` - restaurant cards and restaurant collections.
- `components/menu/` - restaurant menu accordion and menu item rows.
- `components/ui/` - reusable primitives shared across pages.
- `hooks/` - React hooks for API state and browser state.
- `services/swiggy/` - Swiggy API calls and response normalizers.
- `config/` - endpoint builders, image URLs, and app constants.
- `contexts/` - React contexts.
- `store/` - Redux store and slices.
- `tests/` - component and utility tests.
- `legacy/` - older learning/demo components kept out of the production app.

## Rule of Thumb

If a file is reused across routes, keep it in `components/` or `hooks/`.
If it is a full route screen, keep it in `pages/`.
If it talks to an external API or reshapes API data, keep it in `services/`.
