const sql = require("mssql");

const Security = {
  findAll: async () => {
    try {
      const result = await sql.query`SELECT * FROM Security`;
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (incidentId, description) => {
    try {
      await sql.query`INSERT INTO Security (incidentId, description) VALUES (${incidentId}, ${description})`;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = Security;
