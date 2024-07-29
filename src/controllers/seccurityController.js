const Security = require("../models/seccurityModel");

exports.createIncident = async (req, res) => {
  try {
    const { incidentId, description } = req.body;

    try {
      await Security.create(incidentId, description);
      res.status(201).send("Incidencia creada");
    } catch (error) {
      res.status(400).send("Error: ", error);
    }
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};

exports.getIncident = async (req, res) => {
  try {
    const orders = await Security.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};
