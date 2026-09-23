import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart({ open, onClose }) {
  const {
    items,
    removeItem,
    increment,
    decrement,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [ordered, setOrdered] = useState(false);

  const handleCheckout = () => {
    // Frontend-only demo: simulate a successful order.
    clearCart();
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="text-lg font-bold text-slate-900">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto px-5 py-4">
          {ordered ? (
            <div className="py-16 text-center">
              <div className="mb-3 text-4xl">✅</div>
              <p className="text-lg font-semibold text-slate-800">
                Order placed!
              </p>
              <p className="text-sm text-slate-500">
                Thanks for shopping with ShopSphere.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some products to get started.</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="line-clamp-2 text-sm font-medium text-slate-800">
                      {item.title}
                    </span>
                    <span className="text-sm text-slate-500">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        onClick={() => decrement(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                        aria-label={`Decrease quantity of ${item.title}`}
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                        aria-label={`Increase quantity of ${item.title}`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs font-medium text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && !ordered && (
          <div className="border-t border-slate-200 px-5 py-4">
            <div className="mb-3 flex items-center justify-between text-base font-bold text-slate-900">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
