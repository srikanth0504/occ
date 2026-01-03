import { useState } from "react";
import "./App.css";

export default function App() {

  // PRODUCT LIST WITH IMAGE LINKS (NO NEED PUBLIC FOLDER)
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 80000,
      img: "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg"
    },
    {
      id: 2,
      name: "Laptop",
      price: 60000,
      img: "https://m.media-amazon.com/images/I/71Swqqe7XAL._SL1500_.jpg"
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      img: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 5000,
      img: "https://m.media-amazon.com/images/I/61gscZYmaoL._SL1500_.jpg"
    },
    {
      id: 5,
      name: "AirPods Pro",
      price: 18000,
      img: "https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 4000,
      img: "https://m.media-amazon.com/images/I/71-ZHtq5G-L._SL1500_.jpg"
    }
  ];

  const ads = [
    "🔥 Mega Sale 60% OFF",
    "📱 Smartphone Best Offers",
    "💻 Laptop Festival Discount",
    "⌚ Smart Watch New Release",
    "🎧 Headphone Bass Boost",
    "🚚 Free Delivery Available"
  ];

  const [cart, setCart] = useState([]);
  const [stage, setStage] = useState("cart");

  const add = (p) => setCart([...cart, p]);

  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return (
    <div className="page">

      <div className="header">Items: {cart.length}</div>

      <div className="layout">

        {/* PRODUCTS */}
        <div className="section">
          <h2>Products</h2>

          <div className="productGrid">

            {products.map(p => (
              <div className="card" key={p.id}>
                <img src={p.img} alt={p.name}/>
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
                <button onClick={() => add(p)}>Add to Cart</button>
              </div>
            ))}

          </div>
        </div>

        {/* CART / BILL CENTER */}
        <div className="section">

          {stage === "cart" && (
            <>
              <h2>Cart</h2>

              {cart.length === 0 && <p>No items added</p>}

              {cart.map((c, i) => (
                <p key={i}>{c.name} — ₹{c.price}</p>
              ))}

              <h3>Total: ₹{subtotal}</h3>

              {cart.length > 0 && (
                <button className="green" onClick={() => setStage("bill")}>
                  🧾 Generate Bill
                </button>
              )}
            </>
          )}

          {stage === "bill" && (
            <div className="bill">

              <h2>🧾 TAX INVOICE</h2>
              <p>React Online Store</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
              <hr/>

              {cart.map((i, index) => (
                <p key={index}>{i.name} — ₹{i.price}</p>
              ))}

              <hr/>
              <p>Subtotal: ₹{subtotal}</p>
              <p>GST (18%): ₹{gst}</p>

              <h2>Grand Total: ₹{total}</h2>

              <button className="green" onClick={() => window.print()}>
                🖨 Print / Download Bill
              </button>

              <button className="dark" onClick={() => setStage("cart")}>
                ← Back to Cart
              </button>

            </div>
          )}

        </div>

        {/* ADS */}
        <div className="section adGrid">
          {ads.map((a, i) => (
            <div className="ad" key={i}>{a}</div>
          ))}
        </div>

      </div>
    </div>
  );
}
