const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./controllers/userHandlers');
const { hashPassword } = require('./auth');
const router = require('express').Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', hashPassword, createUser);
router.put('/users/:id', hashPassword, updateUser);
router.delete('/users/:id', deleteUser);


module.exports = router;