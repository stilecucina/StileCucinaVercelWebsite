import { useParams } from "react-router-dom";
import { Products } from "./Products";

const ProductPage = () => {
  const { id } = useParams();
  const product = Products.find(p => p.id.toString() === id);

  if (!product) return <p>Ürün bulunamadı</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold" style={{padding: 5}}>{product.name}</h1>

      {/* 🔹 Tüm resimleri döndür */}
      <div className="flex gap-4 mt-4" style={{padding: 5}}>
        {product.images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`${product.name} - ${index + 1}`} 
            width={300}
            height={400}
            style={{objectFit: "cover", border: "2px solid #D1D5DB",}}
            className="w-40 h-40 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      <p className="mt-4 text-gray-700" style={{padding: 1, fontWeight: "bold", fontSize: "48px"}}>Fiyat: {product.price} ₺</p>
      <p className="mt-2" style={{padding:1}}>{product.description}</p>
    </div>
  );
};

export default ProductPage;
