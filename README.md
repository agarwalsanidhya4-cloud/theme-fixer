# 12AM ETHNIC - Shopify Theme

A ultra-modern, minimalist D2C e-commerce Shopify theme inspired by Apple.com and Mi.com clean aesthetics.

## Features

- **Minimalist Design**: Deep midnight blue background with champagne gold accents
- **Hero Section**: Massive product photography with negative space
- **Luxury Countdown**: Watch-style digital timer for limited drops
- **Trust Elements**: Apple-style feature badges for credibility
- **The Archive**: 3x3 grid showcasing past sold-out designs
- **Responsive**: Mobile-first design with sticky CTA buttons
- **Parallax Effects**: Smooth scrolling animations on hero images

## Theme Structure

```
📁 theme-fixer/
├── 📁 assets/
│   └── theme.css (compiled Tailwind CSS)
├── 📁 config/
│   ├── settings_data.json
│   └── settings_schema.json
├── 📁 layout/
│   └── theme.liquid
├── 📁 sections/
│   ├── header.liquid
│   ├── hero.liquid
│   ├── countdown.liquid
│   ├── trust-badges.liquid
│   ├── the-vault.liquid
│   └── footer.liquid
└── 📁 templates/
    ├── index.json (homepage)
    ├── page.liquid
    └── 404.liquid
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Shopify Upload
1. Zip the entire `theme-fixer` folder
2. Go to Shopify Admin → Online Store → Themes
3. Click "Upload" and select your zip file
4. Customize in the theme editor

## Design Philosophy

- **Typography**: Playfair Display (serif) for elegance, Montserrat (sans-serif) for tech feel
- **Color Palette**: Midnight blue (#001220) backgrounds, Champagne gold (#D4AF37) accents
- **Photography**: High-contrast lighting focusing on fabric texture
- **UX**: Single prominent CTA, smooth transitions, trust indicators

## Sections

### Hero Section
Massive product image with parallax zoom, centered content, prominent pricing.

### Countdown Timer
Luxury watch interface with circular displays and gold accents.

### Trust Badges
Three key value propositions: Handcrafted in Surat, Zero Waste, Direct to Heart.

### The Archive
Minimalist 3x3 grid of past designs in black & white with "SOLD OUT" watermarks.

## Customization

All sections are fully customizable through Shopify's theme editor. Edit content, images, colors, and layout without touching code.
