# 🛍️ ShopSphere

A modern, responsive **e-commerce storefront** built with **React.js** and **Tailwind CSS**. ShopSphere lets users browse a product catalog, search and filter items, view product details, and manage a shopping cart with persistent state.

> Frontend-only project — no backend required. Product data is served from a local module and the cart is persisted in the browser via `localStorage`.

---

## ✨ Features

- **Product catalog** — 12 products across Electronics, Fashion, and Home categories
- **Search** — live, case-insensitive search across product titles and descriptions
- **Category filtering** — filter products by category with pill-style buttons
- **Sorting** — sort by price (low→high / high→low) or rating
- **Product details modal** — click any product to see a full description (close with the ✕ button, backdrop click, or the `Esc` key)
- **Shopping cart** — slide-in drawer with:
  - Add / remove items
  - Increase / decrease quantity
  - Live item count badge in the navbar
  - Running subtotal and order total
  - Simulated checkout and "clear cart"
- **Persistent cart** — cart contents survive page refreshes via `localStorage`
- **Responsive design** — mobile-first layout that adapts from 1 to 4 columns
- **Accessible** — semantic markup, ARIA labels, and keyboard support

---

## 🧰 Tech Stack

| Area          | Technology                     |
| ------------- | ------------------------------ |
| Framework     | React 19                       |
| Build tool    | Vite                           |
| Styling       | Tailwind CSS v4                |
| State         | React Context API + `useReducer` |
| Persistence   | Browser `localStorage`         |
| Linting       | oxlint                         |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/himanshugautam04/shopsphere.git
cd shopsphere

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run the linter                       |

---

## 📁 Project Structure

```
ShopSphere/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx          # Slide-in cart drawer
│   │   ├── Filters.jsx       # Category pills + sort dropdown
│   │   ├── Navbar.jsx        # Brand, search, cart button
│   │   ├── ProductCard.jsx   # Single product tile
│   │   ├── ProductList.jsx   # Responsive product grid
│   │   ├── ProductModal.jsx  # Product details dialog
│   │   └── StarRating.jsx    # Reusable rating display
│   ├── context/
│   │   └── CartContext.jsx   # Global cart state (Context + useReducer)
│   ├── data/
│   │   └── products.js       # Static product catalog
│   ├── App.jsx               # App shell + search/filter/sort logic
│   ├── main.jsx              # Entry point (wraps app in CartProvider)
│   └── index.css             # Tailwind import + base styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧠 Architecture Notes

- **Global cart state** is managed with the **Context API + `useReducer`** pattern. The reducer handles all cart actions (add, remove, increment, decrement, clear) as pure functions, which keeps state transitions predictable and easy to test.
- **Derived data** (filtered/sorted product list, cart totals) is computed with `useMemo` and simple reducers rather than being stored in state, avoiding data-sync bugs.
- **Persistence** is handled by a `useEffect` that writes the cart to `localStorage` on every change, plus a lazy initializer that restores it on load.

---

## 📸 Screenshots

_Add screenshots or a GIF of the running app here._

---

## 📝 License

This project is open source and available for learning and portfolio purposes.

---

Built by **Himanshu Gautam** — [GitHub](https://github.com/himanshugautam04) · [LinkedIn](https://linkedin.com/in/himanshugtm043)
