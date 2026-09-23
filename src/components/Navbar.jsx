import { useCart } from "../context/CartContext";

export default function Navbar({ search, onSearchChange, onCartClick }) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-extrabold text-indigo-600">Shop</span>
          <span className="text-2xl font-extrabold text-slate-800">Sphere</span>
        </div>

        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Search products"
          />
        </div>

        {/* Cart button */}
        <button
          onClick={onCartClick}
          className="relative inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          aria-label={`Open cart with ${totalItems} items`}
        >
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-slate-900">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
