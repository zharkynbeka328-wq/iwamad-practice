# Week 05 — Design Handoff

## Routes
- `/` — Home page
- `/contact` — Contact page
- `/posts` — Posts page from the design prototype

## Component Mapping
- Header — site title, subtitle, logo, and likes counter
- Button — reusable button with primary and secondary variants
- Card — reusable content container
- Tag — label for individual skills
- LikeButton — button that updates the shared likes counter
- ProfileCard — profile photo, description, links, and likes button

## Button Variants
- Primary: blue background with white text
- Secondary: white background with blue text and blue border

## PostCard Layout
- Width: 320px
- Height: Hug contents
- Layout direction: vertical
- Gap: 12px
- Padding: 16px
- Border radius: 8px

## Responsive Behavior
- Phone: one column
- Desktop: three columns
- Header navigation adapts to mobile screens

## Design Tokens
- `color/primary`: `#2450D8`
- `color/surface`: `#FFFFFF`
- `color/background`: `#F5F5F5`
- `color/text`: `#252B38`
- `color/text-muted`: `#6B7280`
- `color/border`: `#D9DCE2`
- `color/focus`: `#2450D8`
- `spacing/small`: `8px`
- `spacing/medium`: `12px`
- `spacing/large`: `16px`

## Accessibility
- Interactive elements have a visible keyboard focus indicator.
- Text contrast should be at least 4.5:1 against the background.
- Muted text was updated from `#A5A9B4` to `#6B7280` to improve contrast on white.
