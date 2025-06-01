# Seattle App Studio Website Documentation

## Overview

This is a modern React application built for Seattle App Studio, a company offering no-code, low-code, and next-generation development solutions. The site is built using React, TypeScript, Vite, and Tailwind CSS, featuring a responsive design and smooth animations.

## Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Button.tsx     # Custom button component
│   ├── ContactForm.tsx# Contact form with validation
│   ├── FAQ.tsx        # FAQ accordion component
│   ├── Footer.tsx     # Site footer
│   ├── Layout.tsx     # Main layout wrapper
│   ├── Navbar.tsx     # Navigation bar
│   ├── PricingCard.tsx# Pricing plan cards
│   ├── ProjectCard.tsx# Project showcase cards
│   ├── Section.tsx    # Section wrapper component
│   └── TestimonialCard.tsx # Testimonial cards
├── pages/             # Page components
│   ├── About.tsx      # About page
│   ├── Contact.tsx    # Contact page
│   ├── Home.tsx       # Homepage
│   ├── HowItWorks.tsx # Process explanation
│   ├── Pricing.tsx    # Pricing plans
│   └── Projects.tsx   # Project portfolio
├── App.tsx            # Main app component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-based layouts
   - Collapsible mobile menu

2. **Interactive Components**
   - Animated transitions using Framer Motion
   - Interactive FAQ accordion
   - Form validation
   - Smooth scrolling

3. **Performance Optimizations**
   - Code splitting via React Router
   - Optimized images (using external URLs)
   - Tailwind CSS purging unused styles

## Component Guide

### Layout Components

#### `Layout.tsx`
The main layout wrapper that includes:
- Fixed navigation bar
- Content area
- Footer
- Maintains consistent spacing

#### `Section.tsx`
Reusable section component with:
- Configurable background colors
- Responsive padding
- Container width management

### Interactive Components

#### `Button.tsx`
Customizable button component supporting:
- Multiple variants (primary, secondary, outline)
- Different sizes (sm, md, lg)
- Link functionality (internal/external)

#### `ContactForm.tsx`
Form component with:
- Input validation
- Multiple field types
- Success feedback
- Project size selection

### Content Components

#### `ProjectCard.tsx`
Project showcase component featuring:
- Image display
- Project details
- Tag system
- Animation on scroll

#### `PricingCard.tsx`
Pricing plan display with:
- Feature lists
- Highlighted popular plan
- Call-to-action buttons

## Customization Guide

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `App.tsx`:
```typescript
import NewPage from './pages/NewPage';

// In the Routes component:
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in `Navbar.tsx`

### Modifying Styles

1. **Colors**: Update Tailwind theme in `tailwind.config.js`
2. **Typography**: Modify text classes in components
3. **Spacing**: Adjust padding/margin using Tailwind classes

### Content Updates

#### Projects
Modify `Projects.tsx` array:
```typescript
const projects = [
  {
    title: "New Project",
    subtitle: "Project Type",
    description: ["Project details"],
    features: ["Feature 1", "Feature 2"],
    imageUrl: "image-url",
    tags: ["Tag1", "Tag2"]
  }
  // ...
];
```

#### Pricing Plans
Update `Pricing.tsx` array:
```typescript
const pricingPlans = [
  {
    title: "Plan Name",
    price: "XXX",
    description: "Plan description",
    features: [
      { text: "Feature", included: true }
    ]
  }
  // ...
];
```

## Development Workflow

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Deployment

The site is configured for deployment to Netlify. The build command and output directory are already configured in the deployment settings.

## Best Practices

1. **Code Organization**
   - Keep components focused and single-responsibility
   - Use TypeScript interfaces for props
   - Maintain consistent file naming

2. **Performance**
   - Optimize images before adding
   - Use lazy loading for routes
   - Minimize third-party dependencies

3. **Accessibility**
   - Maintain proper heading hierarchy
   - Include alt text for images
   - Ensure keyboard navigation works

4. **SEO**
   - Update meta tags in index.html
   - Use semantic HTML
   - Maintain proper heading structure

## Support

For questions or issues:
- Email: joe@seattleappstudio.com
- Phone: (206) 555-1234

## License

All rights reserved. This code is proprietary and confidential.