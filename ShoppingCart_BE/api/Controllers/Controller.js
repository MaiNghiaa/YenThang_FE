const util = require("util");
const mysql = require("mysql2");
const db = require("../Database");
const { request } = require("http");
const { response } = require("express");
const { resolve } = require("path");
const { rejects } = require("assert");
const { send } = require("process");

module.exports = {
  // Login ---------
  Login: (request, response) => {
    const { username, password } = request.body;
    console.log(username, password);
    // Validate input
    if (!username || !password) {
      return response.status(400).send("Bắt buộc phải nhập nhé  ");
    }
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?;";
    db.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return response.status(500).send("Lỗi server ời");
      }
      if (results.length > 0) {
        return response.status(200).send("Login oke");
      } else {
        return response.status(401).send("sai tên đăng nhập hoặc mật khẩu");
      }
    });
  },

  Register: (request, response) => {
    const { username, password, role } = request.body;

    const sql = `INSERT INTO user (Username, Password, Role) VALUES (?, ?, ?)`;
    db.query(sql, [username, password, role], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return response.status(500).send("Lỗi server");
      }
      if (results.affectedRows > 0) {
        return response.status(200).send("Đăng ký thành công");
      } else {
        return response.status(401).send("Đăng ký thất bại");
      }
    });
  },
  Exists: (request, response) => {
    const { username } = request.body;
    console.log(username);
    db.query(
      "SELECT * FROM Bookstore.user WHERE Username = ?",
      [username],
      (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return response.status(500).send("Lỗi server");
        }
        if (results.length > 0) {
          return response.status(200).json({ exists: true });
        } else {
          return response.status(200).json({ exists: false });
        }
      }
    );
  },

  getProducts: (request, response) => {
    const query = "SELECT * FROM products";

    db.query(query, (err, results) => {
      if (err) {
        console.error("Error querying database:", err);
        response.status(500).json({ error: "Internal server error" });
        return;
      }
      response.json(results);
    });
  },
  CreateProduct: (request, response) => {
    const { title, description, price } = request.body;

    // Check if file is uploaded
    if (!request.file) {
      response.status(400).json({ error: "No file uploaded" });
      return;
    }

    const image = request.file;
    const LinkImage = image.filename;

    // SQL query to check if the product already exists
    const checkProductQuery =
      "SELECT COUNT(*) AS count FROM products WHERE title = ?";

    // Execute the query to check if the product already exists
    db.query(checkProductQuery, title, (err, result) => {
      if (err) {
        console.error("Error checking product:", err);
        response.status(500).json({ error: "Error checking product" });
        return;
      }

      const productCount = result[0].count;
      if (productCount > 0) {
        // Product already exists
        response.status(400).json({ error: "Product already exists" });
        return;
      }

      // Product does not exist, proceed to add it
      // SQL query to insert a new product into the database
      const addProductQuery =
        "INSERT INTO products (image, title, description, price) VALUES (?, ?, ?, ?)";
      const values = [LinkImage, title, description, price];

      // Execute the query to add the product
      db.query(addProductQuery, values, (err, result) => {
        if (err) {
          console.error("Error adding product:", err);
          response.status(500).json({ error: "Error adding product" });
          return;
        }

        console.log("Product added successfully");
        response.status(201).json({ message: "Product added successfully" });
      });
    });
  },

  UpdateProduct: (request, response) => {
    const productId = request.params.id;
    const { image, title, description, price } = request.body;
    // SQL query to check if the product exists
    const checkProductQuery = "SELECT * FROM products WHERE id = ?";

    // Execute the query to check if the product exists
    db.query(checkProductQuery, productId, (err, result) => {
      if (err) {
        console.error("Error checking product:", err);
        response.status(500).json({ error: "Error checking product" });
        return;
      }

      if (result.length === 0) {
        response.status(404).json({ error: "Product not found" });
        return;
      }
      const updateProductQuery =
        "UPDATE products SET image = ?, title = ?, description = ?, price = ? WHERE id = ?";
      const values = [image, title, description, price, productId];

      db.query(updateProductQuery, values, (err, result) => {
        if (err) {
          console.error("Error updating product:", err);
          response.status(500).json({ error: "Error updating product" });
          return;
        }

        console.log("Product updated successfully");
        response.status(200).json({ message: "Product updated successfully" });
      });
    });
  },
  Orders: (req, res) => {
    const { customerName, totalPrice, orderDetails } = req.body;

    // Thêm đơn hàng vào bảng Orders
    db.query(
      "INSERT INTO Orders (CustomerName, TotalPrice) VALUES (?, ?)",
      [customerName, totalPrice],
      (err, result) => {
        if (err) {
          console.error("Error inserting order:", err);
          res.status(500).json({ error: "Error inserting order" });
          return;
        }

        const orderId = result.insertId;

        // Thêm chi tiết đơn hàng vào bảng OrderDetails
        const values = orderDetails.map((detail) => [
          orderId,
          detail.productId,
          detail.quantity,
          detail.unitPrice,
        ]);
        db.query(
          "INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice) VALUES ?",
          [values],
          (err, result) => {
            if (err) {
              console.error("Error inserting order details:", err);
              res.status(500).json({ error: "Error inserting order details" });
              return;
            }

            res.status(200).json({ message: "Order placed successfully" });
          }
        );
      }
    );
  },

  Ordertests: (request, response) => {},
};
