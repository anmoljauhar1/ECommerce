import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Our Project</h2>
        <p>
          This project is built using modern React practices. It aims to provide a clean,
          responsive layout and user-friendly interface. We’ve used functional components
          and CSS to make it lightweight and fast.
        </p>
        <p>
          You can easily customize it or scale it with backend APIs, state management, and more.
          Whether you're building a portfolio, product site, or dashboard — this layout works as a great start.
        </p>
      </div>
    </section>
  );
};

export default About;
