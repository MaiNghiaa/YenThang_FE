import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";

import Header from "../../Layouts/Sections/Header";
import { Link, useNavigate } from "react-router-dom";
export default function Cart() {
  const username = localStorage.getItem("username");
  const [cartItems, setCartItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy dữ liệu từ localStorage khi component được render lần đầu tiên
    const storedCartItems = localStorage.getItem("cartItems");
    // Kiểm tra nếu có dữ liệu trong localStorage
    if (storedCartItems) {
      // Chuyển dữ liệu từ chuỗi JSON sang mảng và cập nhật state
      setCartItems(JSON.parse(storedCartItems));
    } else {
      // Nếu không có dữ liệu, thiết lập isEmpty thành true
      setIsEmpty(true);
    }
  }, []);

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Xóa mục khỏi danh sách bằng cách cắt ra
    setCartItems(updatedCartItems); // Cập nhật danh sách giỏ hàng
    updateLocalStorage(updatedCartItems); // Cập nhật lại dữ liệu trong localStorage
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    updatedCartItems[index].totalPrice = (
      updatedCartItems[index].quantity * updatedCartItems[index].price
    ).toFixed(2);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      updatedCartItems[index].totalPrice = (
        updatedCartItems[index].quantity * updatedCartItems[index].price
      ).toFixed(2);
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  const updateLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.totalPrice), 0)
      .toFixed(2);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        customerName: username,
        totalPrice: getTotalPrice(),
        Email: email,
        Phone: phone,
        Address: address,
        orderDetails: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          unitPrice: item.totalPrice,
        })),
      };

      // Gửi dữ liệu đơn hàng qua Axios
      const response = await axios.post(
        "http://localhost:3000/Orders",
        orderData
      );

      if (response.data.success) {
        navigate("/");
      } else {
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  console.log(cartItems, username);
  if (isEmpty) {
    return (
      <div>
        <Header />
        <div className="empty-cart-message">
          <h2>Your cart is empty!</h2>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="breadcrumb-section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Shopping Cart</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="title">Shopping Bag</div>
            {cartItems.map((item, index) => (
              <div className="item" key={index}>
                <div className="buttons">
                  <span
                    className="delete-btn"
                    onClick={() => handleDeleteItem(index)}
                  >
                    x
                  </span>
                </div>
                <div className="image">
                  <img
                    src={`http://localhost:3000/assets/${item.image}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt={item.title}
                  />
                </div>
                <div className="description">
                  <span>{item.title}</span>
                  <span>{item.description}</span>
                  <span>${item.price}</span>
                </div>
                <div className="quantity">
                  <button
                    className="plus-btn"
                    type="button"
                    onClick={() => handleIncreaseQuantity(index)}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    name="name"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="minus-btn"
                    type="button"
                    onClick={() => handleDecreaseQuantity(index)}
                  >
                    -
                  </button>
                </div>
                <div className="total-price">${item.totalPrice}</div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Total <span>${getTotalPrice()}</span>
                  </li>
                </ul>
                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="btn primary-btn"
                  style={{ width: "220px" }}
                >
                  PROCEED TO CHECKOUT
                </button>
                {showCheckoutForm && (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="form-control"
                        placeholder="Enter your address"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "100px" }}
                    >
                      Đặt
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
