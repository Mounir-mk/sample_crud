//using argon for password hashing as a middleware using next()

const argon2 = require('argon2');

const hashPassword = async (req, res, next) => {
    const { password } = req.body;
    try {
        const hashedPassword = await argon2.hash(password);
        req.body.password = hashedPassword;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send('Error hashing password');
    }
}


module.exports = { hashPassword };