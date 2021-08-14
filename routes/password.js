const express = require('express');
const { getPasswords, addPassword, getOnePassword, updatePassword, deleteLogin } = require('../controllers/passwords');

const router = express.Router();

router.route('/')
    .get(getPasswords)
    .post(addPassword);

router.route('/:id')
    .get(getOnePassword)
    .put(updatePassword)
    .delete(deleteLogin);


module.exports = router;