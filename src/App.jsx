import { useMemo, useState } from "react";
import products from "./data/products";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  // Derive the visible product list from search + category + sort.
  // useMemo avoids recomputing on unrelated re-renders (e.g., opening the cart).
  const visibleProducts = useMemo(() => {
    let list = [...products];

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    const query = search.trim().toLowerCase();
    if (query) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // "featured" keeps original order
    }

    return list;
  }, [search, category, sort]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        search={search}
        onSearchChange={setSearch}
        onCartClick={() => setCartOpen(true)}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Everything you need, in one Sphere.
          </h1>
          <p className="mt-2 text-indigo-100">
            Browse {products.length}+ curated products across electronics,
            fashion, and home.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Filters
          activeCategory={category}
          onCategoryChange={setCategory}
          sort={sort}
          onSortChange={setSort}
        />

        <p className="mb-4 text-sm text-slate-500">
          Showing {visibleProducts.length} product
          {visibleProducts.length !== 1 ? "s" : ""}
        </p>

        <ProductList products={visibleProducts} onView={setSelectedProduct} />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-slate-500">
          Built with React &amp; Tailwind CSS · ShopSphere demo by Himanshu
          Gautam
        </div>
      </footer>

      {/* Overlays */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
