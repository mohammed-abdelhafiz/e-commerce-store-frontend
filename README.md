# 🛍️ Premium E-Commerce Storefront

A high-end, high-performance digital storefront built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This application is engineered for speed, responsiveness, and a flawless user experience, featuring modern design patterns and smooth interactive elements.

---

## 💎 Design Philosophy & UX

- **Modern Aesthetics**: Implements a sleek dark mode with **Glassmorphism** effects and depth-driven UI components.
- **Fluid Motion**: Powered by **Motion** (Framer Motion) for natural transitions, micro-animations, and celebratory effects (Confetti).
- **Component-Driven**: Utilizing **shadcn/ui** and **Radix UI** primitives for accessible, consistent, and premium-quality interfaces.
- **Resilient UX**: Sophisticated **Skeleton Loading** states, optimistic UI updates, and smooth route transitions for a "native-app" feel.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Persistent & Lightweight)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) (Server-state synchronization)
- **Animations**: [Motion](https://motion.dev/)
- **Charts**: [Recharts](https://recharts.org/) (Interactive Admin Data)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) (Featured Products & Categories)

---

## ✨ Key Features

### 🛒 Seamless Shopping Experience
- **Dynamic Cart**: Real-time synchronization between local state and backend database.
- **Persistent Storage**: Guest cart data is preserved and merged upon login.
- **Numeric Pagination**: A custom-engineered pagination system for smooth discovery across large catalogs.
- **Secure Checkout**: Deep integration with **Stripe**, providing a secure and intuitive payment flow with clear success/cancel states.

### 🛡️ Advanced Admin Control Center
- **📊 Interactive Analytics**: Real-time visualization of revenue, sales trends, and platform health.
- **📦 Inventory Management**: Streamlined interface for adding, editing, and deleting products with instant image preview.
- **🧾 Order Tracking**: Dedicated management panel for monitoring transactions and customer order history.

### 👤 Personalized User Journey
- **Smart Rewards**: Automatic coupon generation and personalized discount application.
- **Order History**: Comprehensive view of past purchases with real-time status updates.

---

## 📁 Project Structure

```text
src/
├── app/              # Next.js App Router (Layouts, Pages, Routes)
├── features/         # Domain-driven architecture
│   ├── admin/        # Dashboard, Analytics, Inventory, & Orders
│   ├── auth/         # Secure Login, Signup, & Session handling
│   ├── cart/         # Shopping cart state & UI components
│   ├── orders/       # Order tracking, history, & detail views
│   ├── payment/      # Stripe Checkout & success/failure logic
│   └── products/     # Catalog, Grids, Details, & Pagination
├── shared/           # Reusable core infrastructure
│   ├── components/   # Atomic UI elements (shadcn/ui)
│   ├── hooks/        # Custom React hooks (Logic re-use)
│   └── utils/        # Formatting, Validation, & Config helpers
└── proxy.ts          # Centralized API request & Proxy configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Running Backend API (see `/backend` instructions)

### 2. Installation
```bash
# Clone the repository
# (Navigate to frontend directory)

# Install dependencies
npm install
```

### 3. Configuration
Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. Launch
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

---

## 📜 License
Distributed under the MIT License.

