const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const PasswordSchema = new mongoose.Schema({
    website: String,
    password: String
});

PasswordSchema.pre('save', async function (next) {
    try {
        const pass = this;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass.password, salt);
        pass.password = hashedPassword;
        next();
    } catch (error) {
        console.error(error);
    }

})

module.exports = mongoose.model('Password', PasswordSchema);