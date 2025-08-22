import { Link } from 'react-router-dom';

function Card({ id, name, price, image }) {
  return (
    <div className="card">
      <Link 
        to={`/product/${id}`} 
        style={{ textDecoration: "none", color: "black"}}
      >
        <div className="border rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
          <img src={image} alt={name} width={200} height={200} style={{objectFit: "cover"}}/>
          <h2 className="text-lg font-semibold mt-2">{name}</h2>
          <p className="text-gray-600">{price} ₺</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
