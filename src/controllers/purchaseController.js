const Purchase = require("../models/purchaseModel");

exports.createOrder = async (req, res) => {
  try {
    const { orderNumber, supplier, items } = req.body;

    try {
      await Purchase.create(orderNumber, supplier, items);
      res.status(201).send("Orden creada");
    } catch (error) {
      res.status(400).send("Error: ", error);
    }
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Purchase.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};
