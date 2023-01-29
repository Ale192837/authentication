async function connect() {
   
    if(global.connection && global.connection.state != "disconnected")
        return global.connection;

    
    const mysql = require("mysql2/promise");

    const {HOST, USER, DATABASE, PASSWORD} = process.env;
    const connection = await mysql.createConnection({
        host: HOST,
        user: USER,
        database: DATABASE,
        password: PASSWORD
    });

    console.log('MySQL connected')
    global.connection = connection;
    return connection;
}



const getUser = async function (username) {

    const connection = await connect();
    
    const sql = 'SELECT * FROM customersdata WHERE UserName = ?;';
    const values = [username];
    const [user] = await connection.query(sql, values);
    return await user;

}

const setUser = async function (username, password) {
    
    const connection = await connect();
    
    const sql = 'INSERT INTO CustomersData (UserName, UserPassword) VALUES (?, ?)';
    const values = [username, password];

    await connection.query(sql, values);

}

const deleteUser = async function (username) {
    
    const connection = await connect();
    
    const sql = 'DELETE FROM CustomersData WHERE UserName = ?';
    const values = username;

    await connection.query(sql, values);

}

const updateUser = async function (username, newUsername, newPassword) {
    
    const connection = await connect();
    
    const sql = 'UPDATE CustomersData SET  UserName = ?, UserPassword = ? WHERE UserName = ?';
    const values = [newUsername, newPassword, username];

    await connection.query(sql, values);

}

module.exports = {setUser, getUser, deleteUser, updateUser};