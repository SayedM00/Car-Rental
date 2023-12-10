import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function Card() {
  return <div className="cardBody">
    <Image />
    <div style={{padding:"20px"}}>
      <Title />
      <Info />
      <div>
        <Skill skillName="HTML + CSS" />
      </div>
    </div>
  </div>
}

function Image() {
  return <img src="pizzas/focaccia.jpg" alt="pizza"/>
}

function Title() {
  return <h3 style={{fontSize:"30px"}}>Sayed Yousef Mohararm</h3>
}

function Info() {
  return <p>Front-End Web Developer Front-End Web Developer Front-End Web Developer Front-End Web Developer Front-End Web Developer Front-End Web Developer</p>
}

function Skill(props) {
return <span>{props.skillName} {props.icon}</span>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Card />)


































// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css"

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return <h1 className="header">Domins Pizza</h1>
// }

// function Menu() {
//   return <div className="menu">
//     <h6 style={{fontSize: "30px", width:'100%'}}>Pizza Menu</h6>
//     <Pizza />
//     <Pizza />
//     <Pizza />
//     <Pizza />
//   </div>
// }

// function Pizza() {
//   return (
//     <div style={{width:"50%"}}>
//       <h1>Pizza Mixed Meat</h1>
//       <p>Ingreditance: flour, mixed-meat, tomato, sault, cheese</p>
//       <img style={{width:"100px"}} src="pizzas/margherita.jpg" alt="Pizza Mixed Meat" />
//       <hr></hr>
//     </div>
//   );
// }

// function Footer() {
//   return <footer className="footer" style={{fontSize:"30px", color:"black", marginTop:"20px"}}>{new Date().toLocaleTimeString()} We Currently Open</footer>
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
