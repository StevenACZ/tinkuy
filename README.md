# Tinkuy - Municipal Courses Platform

A modern landing page built with React and Vite that helps citizens discover and enroll in municipal courses easily. The platform streamlines the enrollment process for various activities including sports, arts, and personal development courses.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- 🔍 Course catalog with filtering options
- 💪 Benefits and value proposition sections
- 🎓 Easy course enrollment process
- 📊 Course statistics and testimonials
- ❓ FAQ section for common questions

## Tech Stack

- ⚡ Vite - Next Generation Frontend Tooling
- ⚛️ React - A JavaScript library for building user interfaces
- 🔷 TypeScript - JavaScript with syntax for types
- 🎨 Tailwind CSS - A utility-first CSS framework
- 📦 Minimal UI Components - Custom components built with Radix UI primitives
- 🔧 Modern tooling and best practices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd tinkuy-curso-landing
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:8080`

## Project Structure

```
src/
  ├── components/    # React components
  │   ├── ui/      # Core UI components (Button, Card, etc.)
  │   └── *        # Page sections (Hero, Benefits, etc.)
  ├── hooks/        # Custom React hooks
  ├── lib/          # Utilities and helper functions
  ├── pages/        # Application pages and routes
  └── main.tsx      # Application entry point
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Components

- `Header` - Navigation and branding
- `Hero` - Main landing section with call-to-action
- `Benefits` - Key benefits of using the platform
- `CoursesCatalog` - Browse available courses
- `ValueProposition` - Why choose our platform
- `HowItWorks` - Step-by-step guide
- `Testimonials` - User testimonials and success stories
- `FAQ` - Frequently asked questions
- `CTA` - Call-to-action sections
- `Footer` - Site navigation and links

## Deployment

1. Build the project

```bash
npm run build
```

2. The build output will be in the `dist` directory

3. Deploy the contents of `dist` to your preferred hosting platform

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details
