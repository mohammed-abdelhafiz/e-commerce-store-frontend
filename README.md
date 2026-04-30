# 🛍️ E-Commerce Frontend

A premium, high-performance storefront built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**. Designed for speed, responsiveness, and a seamless user experience.

## 💎 Design Philosophy

- **Modern Aesthetics**: Sleek dark mode, glassmorphism, and smooth transitions using **Framer Motion**.
- **Interactive UI**: Micro-animations, hover effects, and confetti celebrations on successful purchases.
- **Component-Driven**: Built with **shadcn/ui** and **Radix UI** for accessible, high-quality components.
- **Responsive**: Fully optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/) (Admin Analytics)

## ✨ Key Features

- **🏠 Dynamic Homepage**: Animated category cards and featured product carousels.
- **🏷️ Categories**: Dedicated browsing for `Jeans`, `T-shirts`, `Shoes`, `Glasses`, `Jackets`, `Suits`, and `Bags`.
- **🛍️ Product Catalog**: Responsive grids with skeleton loading states and advanced filtering.
- **🛒 Shopping Cart**: Real-time synchronization with the backend and persistent state.
- **💳 Secure Checkout**: Seamless Stripe integration with custom success and cancellation flows.
- **🛡️ Admin Dashboard**:
    - **Analytics**: Visualized revenue and sales charts using Recharts.
    - **Inventory**: Full product management with image upload previews.
    - **Orders**: Real-time tracking and management of customer transactions.
- **👤 User Profile**: Easy access to order history and personalized rewards.

## 📁 Project Structure

```text
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── features/         # Domain-specific components & logic
│   ├── admin/        # Dashboard, Analytics, Inventory
│   ├── auth/         # Login & Signup forms
│   ├── cart/         # Cart drawer & logic
│   ├── orders/       # Order tracking & history
│   ├── payment/      # Stripe Checkout components
│   └── products/     # Cards, Details, & Grid
├── shared/           # Reusable UI components, hooks, & utils
└── proxy.ts          # API request configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Backend API running (see `/backend` instructions)

### Installation

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up Environment Variables**: Create a `.env` file in the root:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pub_key
   ```

### Running the App

- **Development**:
  ```bash
  npm run dev
  ```
- **Build**:
  ```bash
  npm run build
  ```
- **Start Production**:
  ```bash
  npm start
  ```

## 📜 License

Distributed under the MIT License.
