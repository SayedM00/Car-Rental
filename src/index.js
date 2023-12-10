import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Domins Pizza</h1>
}

function Menu() {
  return <div>
    <h6>Pizza Menu</h6>
    <Pizza />
    <Pizza />
    <Pizza />
  </div>
}

function Pizza() {
  return (
    <div>
      <h1>Pizza Mixed Meat</h1>
      <p>Ingreditance: flour, mixed-meat, tomato, sault, cheese</p>
      <img src="pizzas/margherita.jpg" alt="Pizza Mixed Meat" />
      <hr></hr>
    </div>
  );
}

function Footer() {
  return <footer>{new Date().toLocaleTimeString()} We Currently Open</footer>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
