import { Link } from "react-router-dom";
import "../style/Home.css"; // Import the CSS file
import Products from "./Products";

const Home = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <h1 className="hero-title">Step into Style</h1>
        <p className="hero-subtitle">
          Discover premium sneakers in 10+ color styles
        </p>
        <Link to="/shoes" className="hero-btn">
          Shop Now
        </Link>
      </section>

      {/* Adding products here*/}

      <Products />

      {/* Featured Products */}
      <section className="featured-section">
        <h2 className="section-title">Our Best Picks</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/assets/shoe-red.png" alt="Shoe 1" className="product-img" />
            <h3 className="product-name">Air Zoom Red</h3>
            <p>$129.99</p>
          </div>

          <div className="product-card">
            <img src="/assets/shoe-blue.png" alt="Shoe 2" className="product-img" />
            <h3 className="product-name">Air Zoom Blue</h3>
            <p>$129.99</p>
          </div>

          <div className="product-card">
            <img src="/assets/shoe-green.png" alt="Shoe 3" className="product-img" />
            <h3 className="product-name">Air Zoom Green</h3>
            <p>$129.99</p>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="why-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h4>✔️ Quality Materials</h4>
            <p>Only the best for your feet.</p>
          </div>
          <div className="why-card">
            <h4>🚚 Free Shipping</h4>
            <p>On all orders above ₹999</p>
          </div>
          <div className="why-card">
            <h4>🔄 Easy Returns</h4>
            <p>No questions asked within 7 days.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 ShoeStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
