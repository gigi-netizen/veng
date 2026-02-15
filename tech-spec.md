# TokActiv Website - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTA buttons, actions | `npx shadcn add button` |
| Input | Form text input | `npx shadcn add input` |
| Card | Testimonial cards, step cards | `npx shadcn add card` |
| Dialog | Modal popup for earnings result | `npx shadcn add dialog` |
| Badge | Trust badges, labels | `npx shadcn add badge` |
| Separator | Visual dividers | `npx shadcn add separator` |
| Sheet | Mobile sidebar menu | `npx shadcn add sheet` |

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `TikTokLogo` | Animated TikTok logo with gradient | `components/tiktok-logo.tsx` |
| `EarningsSidebar` | Fixed left sidebar with scrolling notifications | `sections/earnings-sidebar.tsx` |
| `NotificationCard` | Individual earnings notification | `components/notification-card.tsx` |
| `StepCard` | 3-step process cards | `components/step-card.tsx` |
| `TestimonialCard` | User review cards with stars | `components/testimonial-card.tsx` |
| `StatCard` | Earnings calculator stats | `components/stat-card.tsx` |
| `AnimatedCounter` | Number counting animation | `components/animated-counter.tsx` |
| `StarRating` | Animated star rating display | `components/star-rating.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence (hero) | Framer Motion | `motion.div` with staggerChildren | Medium |
| Hero logo pulse | Framer Motion | `animate` prop with repeat | Low |
| Button hover effects | Tailwind CSS | `hover:scale-102` transition | Low |
| Input focus states | Tailwind CSS | `focus:ring`, `focus:border` | Low |
| Sidebar auto-scroll | CSS Animation | `@keyframes scroll` infinite | Medium |
| Scroll-triggered fade-ins | Framer Motion | `whileInView` with viewport | Medium |
| Step cards stagger | Framer Motion | `staggerChildren` in parent | Medium |
| Testimonial cards reveal | Framer Motion | `whileInView` with delay | Medium |
| Number counter animation | Custom Hook | `useCountUp` with requestAnimationFrame | Medium |
| Modal open/close | Framer Motion + Dialog | `AnimatePresence` + scale | Medium |
| Star rating fill | Framer Motion | Sequential `animate` with stagger | Low |
| TikTok gradient shift | CSS Animation | `@keyframes gradient` | Low |
| Card hover lift | Tailwind CSS | `hover:-translate-y-1` | Low |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Best React integration for declarative animations
- Built-in `whileInView` for scroll triggers
- `AnimatePresence` for mount/unmount animations
- Excellent performance with hardware acceleration
- Easy stagger animations with `staggerChildren`

### Secondary: CSS Animations
**Rationale:**
- Lightweight for simple infinite loops (sidebar scroll)
- Better performance for continuous animations
- No JavaScript overhead for background effects

### Utility: Custom Hooks
**Rationale:**
- `useCountUp` for number animations
- `useInView` for intersection detection (if needed beyond Framer)

---

## Project File Structure

```
app/
├── sections/
│   ├── hero.tsx              # Hero section with form
│   ├── earnings-sidebar.tsx  # Fixed left sidebar
│   ├── quick-start.tsx       # 3-step guide
│   ├── testimonials.tsx      # User reviews
│   ├── earnings-calculator.tsx # Stats section
│   └── footer.tsx            # Footer with links
├── components/
│   ├── tiktok-logo.tsx       # Animated logo
│   ├── notification-card.tsx # Sidebar notification item
│   ├── step-card.tsx         # Process step card
│   ├── testimonial-card.tsx  # Review card
│   ├── stat-card.tsx         # Calculator stat
│   ├── animated-counter.tsx  # Number animation
│   ├── star-rating.tsx       # Star display
│   ├── trust-badge.tsx       # Badge with icon
│   └── earnings-modal.tsx    # Result modal
├── hooks/
│   └── use-count-up.ts       # Number counter hook
├── lib/
│   └── utils.ts              # Utility functions
├── page.tsx                  # Main page
├── layout.tsx                # Root layout
└── globals.css               # Global styles + animations
components/ui/                # shadcn components
public/
└── (static assets)
```

---

## Dependencies

### Core
```bash
# Already included with shadcn init
- next
- react
- react-dom
- typescript
- tailwindcss
- @radix-ui/* (via shadcn)
```

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
# (Usually included with shadcn)
```

---

## CSS Animation Keyframes

### Sidebar Scroll Animation
```css
@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.scroll-animation {
  animation: scroll-up 20s linear infinite;
}
```

### TikTok Gradient Animation
```css
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.tiktok-gradient {
  background: linear-gradient(90deg, #FE2C55, #25F4EE, #FE2C55);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
```

### Pulse Animation
```css
@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

---

## Framer Motion Variants

### Page Load Stagger
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

### Scroll Reveal
```typescript
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

### Modal Animation
```typescript
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};
```

---

## Responsive Strategy

### Mobile-First Approach
- Base styles for mobile
- Use `sm:`, `md:`, `lg:`, `xl:` breakpoints for larger screens
- Hide earnings sidebar on mobile (width < 1024px)
- Stack all grids vertically on mobile

### Breakpoint Usage
```typescript
// Sidebar visibility
className="hidden lg:block" // Only show on large screens

// Grid columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding adjustments
className="px-4 sm:px-6 lg:px-8 xl:px-12"
```

---

## Performance Considerations

1. **will-change**: Apply to animated elements
2. **transform/opacity only**: Avoid animating layout properties
3. **Lazy loading**: Use `whileInView` to trigger animations only when needed
4. **Reduced motion**: Respect `prefers-reduced-motion`
5. **Image optimization**: Use Next.js Image component

---

## Accessibility

1. **Focus states**: Visible focus rings on interactive elements
2. **ARIA labels**: On icons and non-text buttons
3. **Color contrast**: WCAG 2.1 AA compliant
4. **Keyboard navigation**: All interactive elements accessible
5. **Screen reader**: Proper heading hierarchy and labels
