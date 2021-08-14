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

exports.getOnePassword = async (req, res, next) => {
    let passID = req.params.id;

    if (passID) {
        const login = await Password.findById({ _id: passID });
        res.json(login);
    } else {
        res.status(404).json({ error: 'Server error, not found' });
    }
}

exports.updatePassword = async (req, res, next) => {
    let passID = req.params.id;

    await Password.findByIdAndUpdate({ _id: passID }, { $set: req.body.password }, (error, data) => {
        if (error) {
            res.status(500).json({
                msg: "Something went wrong"
            });
        } else {
            res.status(200).json({
                msg: "Password updated",
                data,
            });
        }
    });
}

exports.deleteLogin = async (req, res, next) => {
    let passID = req.params.id;
    await Password.findByIdAndDelete({ _id: passID }, (error, data) => {
        if (error) {
            res.status(500).json({
                msg: "something went wrong"
            });
        } else {
            res.status(200).json({
                msg: "Pass Deleted"
            });
        }
    })
}