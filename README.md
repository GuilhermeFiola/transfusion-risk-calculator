# Transfusion Risk Calculator

A modern, multilingual transfusion risk calculator built with Vue 3, TypeScript, Vite, and Vuetify.

## Features
- Responsive design with Vuetify
- Internationalization (i18n) with English, Portuguese, and Spanish
- Custom theme toggle (light/dark mode)
- Accessible and SEO-friendly
- Custom SVG icon integration
- Form validation and risk calculation

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Setup
```bash
# Install dependencies
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Internationalization (i18n)
- The app supports English, Portuguese, and Spanish.
- You can switch languages using the select in the app bar.
- All interface strings are managed in `src/i18n.ts`.

## Theming
- Toggle between light and dark mode using the sun/moon button in the app bar.
- Theme transitions are smooth and accessible.

## Accessibility & SEO
- All interactive elements have appropriate aria-labels.
- The `<html lang>` and `<title>` are set dynamically based on the selected language.
- Includes a meta description for search engines.

## Customization
- To add more languages, edit `src/i18n.ts` and add your translations.
- To change the app icon, replace `src/components/icons/TransfusionIcon.vue` and update the favicon in `public/`.

## Contributing
1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
[MIT](LICENSE)
