const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'donationpage',
    port: '5432'
})

const getUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users;');
  //console.log(response.rows);
  res.status(200).json(response.rows);
}

const createUser = (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)' [name, email])
    console.log(response)
    console.log('User created sucessfully')
}
const deleteUser = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    console.log(response)
    res.send('User deleted sucessfully')
}  
const updateUser = async (req, res) => {
    const { name, email } = req.body;
    const id = req.params.id
    const response = await pool.query('', [name, email, id])
    console.log(response)
    res.send(`User Update ${id} Sucessfully`)
}
const getUserById = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    console.log('user' + id)
    res.json(response.rows)
}



module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserById

}