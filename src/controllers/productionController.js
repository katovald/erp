const Production = require("../models/productionModel");

exports.createOrder = async (req, res) => {
  try {
    const { orderNumber, items } = req.body;

    try {
      await Production.create(orderNumber, items);
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
    const orders = await Production.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};
