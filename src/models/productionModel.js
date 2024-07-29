const sql = require("mssql");
const { create } = require("./userModel");

const Production = {
  findAll: async () => {
    try {
      const result = await sql.query("SELECT * FROM ProductionOrders");
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (orderNumber, product, quantity) => {
    try {
      await sql.query`INSERT INTO ProductionOrders (orderNumber, product, quantity) VALUES (${orderNumber}, ${product}, ${quantity})`;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = Production;
