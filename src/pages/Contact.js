import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/contact", {
        name: username,
        email,
        message,
      });
      setResponseMessage(response.data.message);
      setUsername("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error.response?.data || error.message);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <div className="container1">
        <form onSubmit={handleSubmit}>
          <h3>GET IN TOUCH</h3>
          <input
            className="input1"
            type="text"
            name="name"
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="input2"
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="input3"
            name="message"
            rows="4"
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;
