import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React, { useEffect, useState } from "react";
import Login from "./pages/login"; // Correct import for Login
import SignUp from "./pages/register"; // Correct import for Register
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderForm from "./pages/orderinfo"; // Ensure correct import
import OrderFormdt from "./pages/OrderForms"; // Updated import path
import OrderDetails from "./pages/OrderDetails"; // Ensure correct import

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Login /> : <Login />} /> {/* Redirect to Home if user is logged in */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderinfo" element={<OrderForm />} />
          <Route path="/OrderDetails/:id" element={<OrderDetails />} />
          <Route path="/OrderForms/:id" element={<OrderFormdt />} />
          {/* Add more routes as needed */}
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
