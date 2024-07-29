const Employee = require("../models/employee");

exports.createEmployee = async (req, res) => {
  try {
    const { name, position, salary } = req.body;

    try {
      await Employee.create(name, position, salary);
      res.status(201).send("Empleado creado");
    } catch (error) {
      res.status(400).send("Error: ", error);
    }
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).send(employees);
  } catch (error) {
    res.status(400).send("Error: ", error);
  }
};
