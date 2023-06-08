import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const pizzaData = [
  {
    title: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    imgSrc: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    title: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    imgSrc: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    title: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    imgSrc: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    title: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    imgSrc: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    title: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    imgSrc: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    title: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    imgSrc: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
console.log(pizzaData);

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map(pizza => (
              <Pizza key={pizza.title} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

interface PizzaProp {
  pizzaObj: {
    imgSrc: string;
    title: string;
    ingredients: string;
    price: number;
    soldOut: boolean;
  };
}

function Pizza({ pizzaObj }: PizzaProp) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.imgSrc} alt="Prosciutto pizza" />
      <div>
        <h3>{pizzaObj.title}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  console.log(isOpen);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        ) : (
          <p>
            We're work betweem {openHour}:00 and {closeHour}:00. Come visit us
            later.
          </p>
        )}
        <button className="btn" disabled={!isOpen}>
          Order
        </button>
      </div>
    </footer>
  );
}

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
