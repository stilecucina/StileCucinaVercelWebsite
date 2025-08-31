import Card from "./Card";
import { Products } from "./Products.js";

export default function ProductList() {
  return (
    <div className="row g-4">
      {Products.map((product) => (
        <div className="col-12 col-md-6 col-lg-4" key={product.id}>
          <Card
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0]}
          />
        </div>
      ))}
    </div>
  );
}
