-- Database Schema

### Database
```sql
CREATE TABLE `user` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


### Products Table

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


### Orders Table

CREATE TABLE `Orders` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(255) DEFAULT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL,
  `OrderDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



### OrderDetails Table


CREATE TABLE `OrderDetails` (
  `OrderDetailID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int DEFAULT NULL,
  `ProductID` int DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `UnitPrice` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`OrderDetailID`),
  KEY `OrderID` (`OrderID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`OrderID`),
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

Data Inserts

### Thêm dữ liệu cho bảng sản phẩm

INSERT INTO products (image, title, description, price) VALUES
("img-1.png", "Loại cà phê", "Nhìn vào bố cục của nó. Mục đích của", 19.99),
("img-2.png", "Espresso", "Espresso mạnh mẽ và đậm đà.", 25.99),
("img-3.png", "Cappuccino", "Cappuccino mềm mịn và mượt mà.", 22.99),
("img-4.png", "Latte", "Cà phê latte béo ngậy và nhẹ nhàng.", 21.99),
("img-5.png", "Mocha", "Mocha sô cô la giàu và thưởng thức.", 24.99),
("img-6.png", "Macchiato", "Espresso với một chút sữa hấp.", 23.99),
("img-7.png", "Americano", "Cà phê đen với nước nóng.", 20.99),
("img-8.png", "Cà phê đá", "Cà phê đá mát và sảng khoái.", 26.99),
("img-9.png", "Affogato", "Espresso đổ lên kem vani.", 27.99),
("img-10.png", "Flat White", "Bọt sữa nhẹ nhàng trên một lần đúp của espresso.", 23.49),
("img-11.png", "Cà phê Thổ Nhĩ Kỳ", "Cà phê Thổ Nhĩ Kỳ giàu và thơm.", 28.99),
("img-12.png", "Frappuccino", "Cà phê hòa tan mềm mịn.", 22.49),
("img-13.png", "Irish Coffee", "Cà phê kèm một chút whiskey Ireland và kem.", 29.99),
("img-14.png", "Pour Over", "Cà phê tươi mới được pha bằng cách đổ nước nóng lên hạt cà phê xay.", 21.49),
("img-15.png", "Cà phê Việt Nam", "Sữa đặc ngọt với cà phê đậm đặc qua đá.", 26.49),
("img-16.png", "Cold Brew", "Cà phê được pha bằng nước lạnh trong thời gian lâu hơn.", 25.49),
("img-17.png", "Bulletproof Coffee", "Cà phê kết hợp với bơ và dầu MCT từ cỏ ăn cỏ.", 30.99),
("img-18.png", "Nitro Coffee", "Cà phê hòa tan lạnh được thêm khí nitơ.", 28.49),
("img-19.png", "Turmeric Latte", "Latte được làm từ nghệ và gia vị.", 23.99),
("img-20.png", "Matcha Latte", "Latte được làm từ bột trà xanh mịn.", 24.99);


User Data
INSERT INTO user (Username, Password, Role) VALUES ('admin', 'admin', 'admin'),
('test1', 'test1', 'user'),('test2', 'test2', 'user');

