import React, { useContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart-item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NoItemsGif from "../images/empty.gif";
import delivery from "../images/HoA/delivery.png";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); 
  const [checkout, setCheckout] = useState(false);
  const [address, setAddress] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState("+961"); 

  useEffect(() => {
    const updatedCart = PRODUCTS.filter((product) => cartItems[product.id] > 0).map((product) => ({
      id: product.id,
      productName: product.productName,
      price: product.price,
      quantity: cartItems[product.id],
    }));

    setCart(updatedCart);
  }, [cartItems]);

  const handlePhoneInput = (e) => {
    const input = e.target.value;

    if (input.startsWith("+961")) {
      setPhoneNumber(input);
    } else if (input === "+961" || input === "") {
      setPhoneNumber("+961");
    }
  };

  const handleCheckout = async () => {
    if (!address.trim()) {
      alert("Please enter a valid delivery address.");
      return;
    }
    if (phoneNumber.length !== 12 || !phoneNumber.startsWith("+961")) {
      alert("Please enter a valid 8-digit phone number after +961.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/product", { cart, address, phoneNumber });

      clearCart();

      setCheckout(true);
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Something went wrong during checkout.");
    }
  };

  return (
    <div className="cart">
      {!checkout ? (
        <>
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
            })}
          </div>
          {totalAmount > 0 ? (
            <div className="checkout">
              <p>Subtotal: ${totalAmount}</p>
              <button onClick={() => navigate("/card")}>Continue Shopping</button>

              {/* Address Input */}
              <div className="address-section">
                <label htmlFor="address">Delivery Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  placeholder="Enter your delivery address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* Phone Number Input */}
              <div className="phone-section">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={phoneNumber}
                  placeholder="Enter your phone number"
                  onChange={handlePhoneInput}
                />
              </div>

              {/* Warning Message */}
              <div className="payment-warning">
                <p style={{ color: "red", margin: "10px 0" }}>
                  ⚠️ All payments are made on delivery.
                </p>
              </div>

              <button type="button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          ) : (
            <div className="flex w-full justify-center items-center flex-col">
              <img src={NoItemsGif} className="w-full max-w-sm" alt="Empty cart" />
              <p className="empty">Empty Cart</p>
            </div>
          )}
        </>
      ) : (
        <div className="empty">
          <h1 className="thank-you-message">Thank you for your purchase! Delivery is on the way.</h1>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={delivery} className="w-full max-w-sm" alt="Delivery in progress" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
