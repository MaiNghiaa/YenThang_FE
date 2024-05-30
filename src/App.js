// // import logo from "./logo.svg";
// import Button from "react-bootstrap/Button";
// import Badge from "react-bootstrap/Badge";
// import { Stack } from "react-bootstrap";
import React from "react";

import Route from "./Routers/Router";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginForm from "./User/Components/LoginForm/LoginForm";
function App() {
  return (
    <div>
      <Route />
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
