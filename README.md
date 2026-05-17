# La Posada Casa Pepe - Restaurant Website

Official website for **La Posada Casa Pepe**, a restaurant in Abanilla, Murcia, known for traditional Spanish cuisine including *paella* and *carne a la brasa*.

**[laposadacasapepe.com](https://www.laposadacasapepe.com/)**

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Static typing |
| Tailwind CSS v3 | Styling |
| Vite | Build tool |
| Vitest + React Testing Library | Testing |
| Prettier | Code formatting |
| ESLint + @typescript-eslint | Linting |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests (watch mode)
npm test

# Run tests (once)
npm run test:run

# Check test coverage
npm run coverage

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── assets/          # Images and PDF menu
├── components/      # One folder per component, with .tsx + .test.tsx
│   ├── Navbar/
│   ├── Hero/
│   ├── Title/
│   ├── Welcome/
│   ├── About/
│   ├── Gastronomy/
│   ├── Menu/
│   ├── Team/
│   ├── Contact/
│   └── Footer/
├── hooks/
│   └── useSticky.ts # Reusable sticky-scroll hook
├── types.ts         # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css        # Tailwind directives + Google Fonts
```

## Features

- Filterable dish gallery (Gastronomy section) with category buttons
- Sticky navbar with smooth-scroll navigation
- Responsive mobile menu
- Downloadable PDF menu
- WhatsApp reservation link
- Google Maps embed
- 58 tests — unit, integration, and snapshot

## Contact

**La Posada Casa Pepe**
Calle Francisco Salzillo 22, Abanilla, Murcia 30640
Phone: +34 653 838 263
Hours: Thursday–Sunday 13:00–16:00
