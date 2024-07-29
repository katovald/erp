const sql = require("mssql");

const Accounting = {
  findAll: async () => {
    try {
      const result = await sql.query`SELECT * FROM Accounting`;
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (orderNumber, type, amount) => {
    try {
      await sql.query`INSERT INTO Accounting (orderNumber, type, amount) VALUES (${orderNumber}, ${type}, ${amount})`;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = Accounting;
