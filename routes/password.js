const express = require('express');
const { getPasswords, addPassword, updatePassword } = require('../controllers/passwords');

const router = express.Router();

router.route('/')
    .get(getPasswords)
    .post(addPassword)
    .put(updatePassword);

module.exports = router;