const Password = require('../models/Password');

exports.getPasswords = async (req, res, next) => {
    try {
        const passwords = await Password.find();
        return res.status(200).json({
            count: passwords.length,
            data: passwords
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}
exports.addPassword = async (req, res, next) => {
    try {

        const login = await Password.create(
            {
                website: req.body.website,
                password: req.body.password,
            }
        );

        res.status(201).json({
            msg: 'Password created successfully'
        });
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

exports.updatePassword = async (req, res, next) => {
    const login = await Password.findById(req.params.id);

    if (login) {
        login.password = req.body.password;
    } else {
        res.status(404).json({ error: 'Server error not found' });
    }
}