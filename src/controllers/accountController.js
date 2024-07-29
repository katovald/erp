const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ username, password: hashedPassword });
            res.status(201).send('User created');
        } catch (error) {
            res.status(400).send('Error: ', error);
        }
    } catch (error) {
        res.status(400).send('Error: ', error);
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        try {
            const user = await User.findByUsername(username);
            if (!user) {
                return res.status(400).send('User not found');
            }

            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                return res.status(400).send('Invalid password');
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).send({ token });
        } catch (error) {
            res.status(400).send('Error: ', error);
        }
    }
    catch (error) {
        res.status(400).send('Error: ', error);
    }
};