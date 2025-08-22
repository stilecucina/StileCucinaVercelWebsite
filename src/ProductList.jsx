import Card from "./Card";
import { Products } from "./Products.js";

export default function ProductList() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {Products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.images[0]}   // 🔹 sadece ilk resmi gösteriyoruz
        />
      ))}
    </div>
  );
}
