const Accounting = require("../models/accountingModel");

exports.createOrder = async (req, res) => {
  try {
    const { orderNumber, items } = req.body;

    try {
      await Accounting.create(orderNumber, items);
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
    const orders = await Accounting.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};
