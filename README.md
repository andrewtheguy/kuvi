# Kuvi App

The central hub and landing page for [kuvi.app](https://kuvi.app). This application serves as a portfolio and portal to various web applications and standalone utilities.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with modern design tokens
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kuvi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

To create a production build:

```bash
npm run build
```

## Project Structure

- `src/data.ts`: Contains the configuration for all projects, categories, and platforms displayed on the site. Update this file to add or modify entries.
- `src/components`: Reusable UI components.
- `src/pages`: Top-level page components.