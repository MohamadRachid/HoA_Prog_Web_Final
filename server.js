const express = require("express");
const { collection, Contact } = require("./mongo"); 
const Product = require("./pdata");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/", async (req, res) => {
  const { username, pass } = req.body;

  try {
    const check = await collection.findOne({ username: username });
    const check2 = await collection.findOne({ pass: pass });

    if (check && check2) {
      const token = jwt.sign({ check: check.username }, "amcywbhajgdamajacnrlbmhalpg", {
        expiresIn: "1h",
      });
      res.json({ status: "exist", token: token });
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { username, pass } = req.body;

  const data = {
    username: username,
    pass: pass,
  };

  try {
    const check = await collection.findOne({ username: username });

    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/product", async (req, res) => {
  try {
    const cart = req.body.cart;

    await Promise.all(
      cart.map(async (product) => {
        await Product.create(product);
      })
    );

    res.status(201).json({ message: "Checkout successful" });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
