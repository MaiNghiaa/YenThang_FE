import React from "react";

function ProductCard({ product, onAddToCart }) {
  const { image, name, price, description } = product;

  return (
    <div
      className="card d-flex flex-column justify-content-between"
      style={{ width: "18rem", margin: "1rem" }}
    >
      <img
        src={`http://localhost:3000/assets/${image}`}
        className="card-img-top"
        style={{ maxHeight: "200px", objectFit: "cover" }} // Đặt chiều cao tối đa và tỉ lệ của ảnh
        alt={name}
      />

      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <div>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
          <p className="card-text">{description}</p>
        </div>
        <button
          className="btn btn-success btn-block"
          style={{ width: "150px" }}
          onClick={() => onAddToCart(product)}
        >
          {"Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
