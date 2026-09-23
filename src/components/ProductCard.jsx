import { useCart } from "../context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product, onView }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image (click to view details) */}
      <button
        onClick={() => onView(product)}
        className="relative block aspect-square overflow-hidden bg-slate-100"
        aria-label={`View details for ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 rounded-md bg-slate-900/70 px-2 py-0.5 text-xs font-medium text-white">
          {product.category}
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-800 min-h-[2.5rem]">
          {product.title}
        </h3>
        <div className="mt-1">
          <StarRating rating={product.rating} />
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
