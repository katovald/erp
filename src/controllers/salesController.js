const Sales = require("../models/salesModel");

exports.createOrder = async (req, res) => {
  try {
    const { orderNumber, customer, items } = req.body;

    try {
      await Sales.create(orderNumber, customer, items);
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
    const orders = await Sales.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};
