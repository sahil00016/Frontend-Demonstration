# Animated Career Accelerator Dashboard

A modern, highly animated web dashboard built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful gradient background with smooth animations
- 🚀 Floating rocket icon with subtle animation
- ✨ Independent animated heading lines with hover effects
- 🎯 Interactive stacked cards with depth and hover interactions
- 🎭 Smooth CTA button with gradient sweep animation
- 📱 Fully responsive design (desktop-first, mobile supported)

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AnimatedHeading.tsx    # Individual heading line with hover effects
│   ├── CTAButton.tsx          # Button with gradient sweep animation
│   ├── CardStack.tsx          # Container for stacked cards
│   ├── FloatingIcon.tsx       # Rocket icon with floating animation
│   ├── HeroSection.tsx        # Main hero section component
│   └── InteractiveCard.tsx    # Individual card with hover interactions
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## Animation Details

- **Floating Icon**: Smooth vertical float animation (3s infinite loop)
- **Heading Lines**: Independent hover animations with scale, glow, and letter-spacing changes
- **CTA Button**: Gradient sweep on hover, scale and shadow effects
- **Stacked Cards**: Depth-based scaling, blur, and z-index management with smooth hover transitions
