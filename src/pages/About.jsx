import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";

const About = () => {
  const { data, fetchAllProducts, categoryOnlyData } = useData();
  const [featuredProducts, setFeaturedProducts] = useState({});

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchAllProducts();
    }
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      // Group products by category and take first 3 from each
      const grouped = data.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        if (acc[product.category].length < 3) {
          acc[product.category].push(product);
        }
        return acc;
      }, {});
      setFeaturedProducts(grouped);
    }
  }, [data]);

  const categoryDescriptions = {
    "electronics": {
      title: "Electronics & Gadgets",
      description: "Discover cutting-edge technology and innovative gadgets that power your digital lifestyle.",
      icon: "⚡"
    },
    "jewelery": {
      title: "Jewelry Collection",
      description: "Elegant and timeless pieces that add sparkle and sophistication to any occasion.",
      icon: "💎"
    },
    "men's clothing": {
      title: "Men's Fashion",
      description: "Contemporary and classic styles for the modern gentleman with impeccable taste.",
      icon: "👔"
    },
    "women's clothing": {
      title: "Women's Fashion",
      description: "Trendy and versatile clothing that celebrates femininity and personal style.",
      icon: "👗"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Zaptro</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your ultimate destination for fashion, electronics, jewelry, and everything in between.
            Discover quality products that enhance your lifestyle and express your unique personality.
          </p>
          <Link to="/products">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
              Explore Our Collection
            </button>
          </Link>
        </div>
      </div>

      {/* Categories Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Categories</h2>
          <p className="text-gray-600 text-lg">Explore our diverse range of premium products</p>
        </div>

        {Object.entries(featuredProducts).map(([category, products]) => {
          const categoryInfo = categoryDescriptions[category] || {
            title: category.charAt(0).toUpperCase() + category.slice(1),
            description: `Discover our amazing ${category} collection`,
            icon: "🛍️"
          };

          return (
            <div key={category} className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{categoryInfo.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{categoryInfo.title}</h3>
                  <p className="text-gray-600 text-lg">{categoryInfo.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition duration-300">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-contain mb-4 rounded-lg"
                      />
                      <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h4>
                      <p className="text-red-600 font-bold text-lg">${product.price}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link to={`/products?category=${encodeURIComponent(category)}`}>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 font-semibold">
                      View All {categoryInfo.title}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{data?.length || 0}+</div>
              <div className="text-gray-300">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{categoryOnlyData?.length || 0}</div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-300">Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Zaptro?</h2>
          <p className="text-gray-600 text-lg">We're committed to providing the best shopping experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Free Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $100 with express delivery options</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
            <p className="text-gray-600">Your data is protected with bank-level security and SSL encryption</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our customer service team is always ready to help you</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and discover your next favorite product</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default About;