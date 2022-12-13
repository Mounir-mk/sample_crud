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
    database.query('SELECT * FROM users WHERE id = ?', [id]).then(([users]) => {
        if (users[0] != null) {
            res.json(users[0]);
        } else {
            res.status(404).send("Not Found");
        }
    })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from database");
        });
}

const createUser = (req, res) => {
    const { email, password } = req.body;
    database.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]).then(([result]) => {
        res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving the user");
        });
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const { email, password } = req.body;
    database.query('UPDATE users SET email = ?, password = ? WHERE id = ?', [email, password, id]).then(([result]) => {
        if (result.affectedRows === 0) {
            res.status(404).send("Not Found");
        } else {
            res.sendStatus(204);
        }
    })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error editing the user");
        });
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    database.query('DELETE FROM users WHERE id = ?', [id]).then(([result]) => {
        if (result.affectedRows === 0) {
            res.status(404).send("Not Found");
        } else {
            res.sendStatus(204);
        }
    })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error deleting the user");
        });
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}