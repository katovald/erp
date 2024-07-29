const sql = require('mssql');

const User = {
    findByUsername: async (username) => {
        try {
            const request = new sql.Request();
            const user = await request
                .input('username', sql.VarChar, username)
                .query('SELECT * FROM users WHERE username = @username');
            return user.recordset[0];
        } catch (error) {
            console.error('Error: ', error);
        }
    },
    create: async (user) => {
        try {
            const request = new sql.Request();
            const newUser = await request
                .input('username', sql.VarChar, user.username)
                .input('password', sql.VarChar, user.password)
                .query('INSERT INTO users (username, password) VALUES (@username, @password)');
            return newUser;
        } catch (error) {
            console.error('Error: ', error);
        }
    },
};

module.exports = User;