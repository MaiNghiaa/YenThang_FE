// import React, { useEffect, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// // import "../Pages/LandingPage.css";
// import Header from "../../Layouts/Sections/Header";
// import Footer from "../../Layouts/Sections/Footer";
// import Blog from "./Sections/Blog";
// import Contact from "./Sections/Contact";
// import About from "./Sections/About";
// import ProductCard from "../../Components/ProductCard/ProductCard";
// import axios from "axios";
// import Banner from "./Sections/Banner";
// export default function LandingPage() {
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   const username = localStorage.getItem("username");
//   const handleLogout = () => {
//     // Clear localStorage
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("username");

//     window.location.href = "/";
//   };
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     const existingProductIndex = cart.findIndex(
//       (item) => item.title === product.title
//     );

//     if (existingProductIndex !== -1) {
//       const updatedCart = cart.map((item, index) =>
//         index === existingProductIndex
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//               totalPrice: parseFloat((item.quantity + 1) * item.price),
//             }
//           : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([
//         ...cart,
//         { ...product, quantity: 1, totalPrice: parseFloat(product.price) },
//       ]);
//     }

//     // console.log(cart); // In ra giỏ hàng sau khi cập nhật
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, product) => total + product.quantity, 0);
//   };
//   return (
//     <main className=" relative">
//       <Header cartItemsCount={getTotalItems()} cartItems={cart} />
//       <Banner />
//       <div id="body" className="xl:mt-auto">
//         <div>
//           <div className="coffee_section layout_padding">
//             <div className="container">
//               <div className="row">
//                 <h1 className="coffee_taital">Danh mục</h1>
//                 <div className="bulit_icon">
//                   <img src="http://localhost:3000/assets/bulit-icon.png" />
//                 </div>
//               </div>
//             </div>
//             <div className="coffee_section_2">
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <div className="container-fluid">
//                     <div className="row product-container d-flex flex-wrap">
//                       {products.map((product, index) => (
//                         <div className="col-lg-3 col-md-6" key={index}>
//                           <ProductCard
//                             product={product}
//                             onAddToCart={handleAddToCart}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                     <h2>Cart</h2>
//                     <p>Total items: {getTotalItems()}</p>
//                     <ul>
//                       {cart.map((item, index) => (
//                         <li key={index}>
//                           {item.title} - ${item.price} x {item.quantity} = $
//                           {item.totalPrice.toFixed(2)}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <About />

//           <Blog />
//           <Contact />
//         </div>
//       </div>

//       <Footer />
//     </main>
//   );
// }

import React from "react";
import ProductForm from "../../Components/ProductForm/ProductForm";

export default function LandingPage() {
  return (
    <div>
      {" "}
      <ProductForm />
    </div>
  );
}
