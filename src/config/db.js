const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        enableArithAbort: true
    },
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log('Database connected');
    } catch (error) {
        console.error('Error: ', error);
    }
}

module.exports = connectDB;