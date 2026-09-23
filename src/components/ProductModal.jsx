import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import StarRating from "./StarRating";

export default function ProductModal({ product, onClose }) {
  const { addItem } = useCart();

  // Close on Escape key.
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow hover:bg-slate-100"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-square overflow-hidden bg-slate-100 md:rounded-l-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col p-6">
            <span className="mb-2 inline-block w-fit rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
              {product.category}
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              {product.title}
            </h2>
            <div className="mt-2">
              <StarRating rating={product.rating} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {product.description}
            </p>
            <div className="mt-auto pt-6">
              <div className="mb-4 text-3xl font-extrabold text-slate-900">
                ${product.price.toFixed(2)}
              </div>
              <button
                onClick={() => {
                  addItem(product);
                  onClose();
                }}
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
