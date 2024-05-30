import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/createProduct",
        formData
      );
      console.log(response.data); // Handle response from server
      // Reset form after successful submission
      setFormData({
        image: "",
        title: "",
        description: "",
        price: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image URL:</label>
        <br />
        <input
          type="file"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
