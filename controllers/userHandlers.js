const database = require('../database');

const getUsers = (req, res) => {
    database.query('SELECT * FROM users').then(([results]) => {
        res.json(results);
    }
    ).catch((err) => {
        console.log(err);
        res.status(500).send('Error retrieving users');
    }
    );
}

const getUser = (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM users WHERE id = ?', [id]).then(([results]) => {
        res.json(results);
    }
    ).catch((err) => {
        console.log(err);
        res.status(500).send('Error retrieving user');
    }
    );
}

const createUser = (req, res) => {
    const { email, password } = req.body;
    database.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]).then(([results]) => {
        res.json(results);
    }
    ).catch((err) => {
        console.log(err);
        res.status(500).send('Error creating user');
    }
    );
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const { email, password } = req.body;
    database.query('UPDATE users SET email = ?, password = ? WHERE id = ?', [email, password, id]).then(([results]) => {
        res.json(results);
    }
    ).catch((err) => {
        console.log(err);
        res.status(500).send('Error updating user');
    }
    );
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    database.query('DELETE FROM users WHERE id = ?', [id]).then(([results]) => {
        res.json(results);
    }
    ).catch((err) => {
        console.log(err);
        res.status(500).send('Error deleting user');
    }
    );
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}