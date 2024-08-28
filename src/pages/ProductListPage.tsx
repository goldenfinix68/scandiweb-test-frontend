import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import "../sass/pages/_ProductList.scss";
import { useProductList } from "../services/product.service";

export function ProductListPage() {
  const products = useProductList();

  return (
    <div className="page">
      <Header isHome />
      <div className="main product-list">
        {products.map((product) => (
          <ProductCard key={product.sku} data={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
