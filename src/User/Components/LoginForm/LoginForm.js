import React, { useState } from "react";
import axios from "axios";
import "../LoginForm/LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerlink = () => {
    setIsRegistering(true);
  };

  const loginlink = () => {
    setIsRegistering(false);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    //Kiem tra xem no ton tai chua
    try {
      const userExistsResponse = await axios.post(
        "http://localhost:3000/exists",
        {
          username,
        }
      );

      if (userExistsResponse.data.exists) {
        alert("Tên người dùng đã tồn tại. Vui lòng chọn tên người dùng khác.");
        return;
      }
    } catch (error) {
      console.error("Error checking if user exists:", error);
      alert("Đã xảy ra lỗi khi kiểm tra tên người dùng. Vui lòng thử lại sau.");
      return;
    }
    //Dang ki
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
        role: "user",
      });

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      alert("Đăng ký thành công ");
      setIsRegistering(false);
    } catch (error) {
      console.error(error);
      alert("Đăng ký thất bại. Vui lòng kiểm tra lại thông tin đăng ký.");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      alert("Đăng nhập thành công");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.");
    }
  };

  return (
    <div className={`wrapper ${isRegistering ? "active" : ""}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              {" "}
              Don't have an account?{" "}
              <a href="#" onClick={registerlink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginlink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
