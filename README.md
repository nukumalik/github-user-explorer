# GitHub User Explorer

This is a simple React application that displays a list of GitHub users.

It uses Vite as the development server and bundler, and uses TypeScript for type safety.

## Features

- Display a list of GitHub users based on user input
- Display a list of user repositories

## **⚡ Installation**

Make sure you have **Node.js**.

#### 1. Clone the repository:

```sh
git clone https://github.com/nukumalik/github-user-explorer.git
cd github-user-explorer
```

#### 2. Install dependencies:

```sh
npm install
```

## **🚀 Running The Project**

#### 1. Development Mode (Auto Relode)

```sh
npm run dev
```

#### 2. Build the Project

```sh
npm run build
```

#### 3. Run the Built Project

```sh
npm run start
```

## **🚀 Code Standard & Commit Guidelines**

#### 1. Linting & Formatting

Run ESLint and Prettier to enforce code style:

```sh
npm run lint
npm run format
```

#### 2. Commit Message Standard (Husky & Commitlint)

Use Conventional Commits format when committing changes:

```sh
git commit -m "feat: add user authentication"
```

## **⚡ Tech Stack**

This project is built using the following technologies:

### **Core Technologies**

- [React 19](https://react.dev/) - UI library for building interfaces.
- [Vite](https://vitejs.dev/) - Fast build tool for modern web applications.

### **Styling**

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge) - Merges Tailwind class names.
- [Tailwind CSS Animate](https://github.com/joe-bell/tailwindcss-animate) - Animation utilities for Tailwind.

### **State Management & Data Fetching**

- [TanStack React Query](https://tanstack.com/query/latest) - Data fetching, caching, and synchronization.

### **Component Library**

- [shadcn/ui](https://ui.shadcn.com/) - Customizable, accessible UI components built on Radix UI.
- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives.
  - Avatar, Collapsible, Separator, Slot.

### **Testing & Linting**

- [Vitest](https://vitest.dev/) - Unit testing framework.
- [Testing Library](https://testing-library.com/) - Utilities for testing React components.
- [ESLint](https://eslint.org/) - Linter for code consistency.
- [Prettier](https://prettier.io/) - Code formatter.

### **Developer Tools**

- [Husky](https://typicode.github.io/husky/) - Git hooks for enforcing pre-commit checks.
- [Lint-Staged](https://github.com/okonet/lint-staged) - Run linters on staged Git files.
- [Commitlint](https://commitlint.js.org/) - Enforces commit message conventions.

### **Deployment**

- [GitHub Pages](https://pages.github.com/) - Deployment platform for hosting static sites.

## **📜 License**

This project is licensed under the ISC License.
