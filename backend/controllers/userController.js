const User = require('../model/user');

exports.addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = new User({ name, email, password });
        await user.save();
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};