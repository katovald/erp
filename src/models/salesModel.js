const sql = require("mssql");

const Sales = {
  findAll: async () => {
    try {
      const result = await sql.query`SELECT * FROM SalesOrders`;
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (orderNumber, customer, items) => {
    try {
      await sql.query`INSERT INTO SalesOrders (orderNumber, customer, items) VALUES (${orderNumber}, ${customer}, ${items})`;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = Sales;
