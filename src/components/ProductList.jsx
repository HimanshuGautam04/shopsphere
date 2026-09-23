import ProductCard from "./ProductCard";

export default function ProductList({ products, onView }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center text-slate-500">
        <p className="text-lg font-medium">No products found</p>
        <p className="text-sm">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onView={onView} />
      ))}
    </div>
  );
}
