import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// ✅ Import your components and pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastProvider } from "./components/ToastContainer";

const App = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const res = await axios.get(url);
          const exactLocation = res.data.address;
          setLocation(exactLocation);

          // ✅ Optional: save in localStorage so it persists
          localStorage.setItem("userLocation", JSON.stringify(exactLocation));
        } catch (error) {
          console.log("Location error:", error);
        }
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  // ✅ Load saved location on first render
  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    } else {
      getLocation();
    }
  }, []);

  return (
    <BrowserRouter>
      <ToastProvider>
        <Navbar location={location} getLocation={getLocation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
