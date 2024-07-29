const sql = require("mssql");

const Purchase = {
  findAll: async () => {
    try {
      const result = await sql.query`SELECT * FROM PurchaseOrders`;
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (orderNumber, supplier, items) => {
    try {
      await sql.query`INSERT INTO PurchaseOrders (orderNumber, supplier, items) VALUES (${orderNumber}, ${supplier}, ${items})`;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = Purchase;
