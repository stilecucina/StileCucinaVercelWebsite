import { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "./Products";
import { FaWhatsapp } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap"; // Bootstrap modal

const ProductPage = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id.toString() === id);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return <p>Ürün bulunamadı</p>;

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + product.images.length - 1) % product.images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % product.images.length);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold" style={{ padding: 5 }}>
        {product.name}
      </h1>

      {/* 🔹 Resimler */}
      <div className="d-flex gap-4 mt-4" style={{ padding: 5 }}>
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name} - ${index + 1}`}
            width={300}
            height={400}
            style={{
              objectFit: "cover",
              border: "2px solid #D1D5DB",
              cursor: "pointer",
            }}
            className="rounded shadow"
            onClick={() => {
              setCurrentIndex(index);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      {/* 🔹 Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>{product.name}</Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={product.images[currentIndex]}
            alt={`${product.name} - ${currentIndex + 1}`}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            className="rounded"
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handlePrev}>
            Önceki
          </Button>
          <Button variant="secondary" onClick={handleNext}>
            Sonraki
          </Button>
        </Modal.Footer>
      </Modal>

      <p
        className="mt-4 text-gray-700"
        style={{ padding: 1, fontWeight: "bold", fontSize: "48px" }}
      >
        Fiyat: {product.price} ₺
      </p>
      <p className="mt-2" style={{ padding: 1, fontSize: 30 }}>
        {product.description}
      </p>

      {/* 🔹 WhatsApp Butonu */}
      <a
        href={`https://wa.me/905413430626?text=Merhaba, ${product.name} ürününü sipariş etmek istiyorum. Biraz bilgi alabilir miyim?`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success d-flex align-items-center gap-2 mt-4"
        style={{ fontWeight: 600 }}
      >
        <FaWhatsapp size={22} />
        WhatsApp’tan Sipariş Et
      </a>
    </div>
  );
};

export default ProductPage;
