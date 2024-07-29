const sql = require("mssql");

const Employees = {
  findAll: async () => {
    try {
      const result = await sql.query`SELECT * FROM Employees`;
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (employeeName, department, salary) => {
    try {
      await sql.query`INSERT INTO Employees (employeeName, department, salary) VALUES (${employeeName}, ${department}, ${salary})`;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = Employees;
