import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0], // Store the file object directly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("image", formData.image);
    uploadData.append("title", formData.title);
    uploadData.append("description", formData.description);
    uploadData.append("price", formData.price);

    try {
      const response = await axios.post(
        "http://localhost:3000/CreateProduct",
        uploadData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // Handle response from server
      // Reset form after successful submission
      setFormData({
        image: null,
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
        <label htmlFor="image">Image:</label>
        <br />
        <input type="file" id="image" name="image" onChange={handleChange} />
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
