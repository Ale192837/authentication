const encrypt = require('@helper/crypto/encrypt'); 
const decrypt = require('@helper/crypto/decrypt'); 

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



const logUser = async function (username, userPassword){

    const connection = await connect();
    
    const sql = 'SELECT * FROM CustomersData WHERE UserName = ? AND UserPassword = ?';
    const values = [username, userPassword];
    const [user] = await connection.query(sql, values);
    
    return user;

}

const getUser = async function (username) {

    const connection = await connect();
    
    const sql = 'SELECT * FROM CustomersData WHERE UserName = ?;';
    const values = [username];
    const [user] = await connection.query(sql, values);
    return user;

}

const checkEmailExists = async function (useremail) {

    const connection = await connect();
    
    const sql = 'SELECT UserEmail FROM CustomersData WHERE UserEmail = ?;';
    const values = [useremail];
    const [email] = await connection.query(sql, values);
    return await email;

}

const setUser = async function (username, password, useremail) {
    
    const connection = await connect();

    let passwordEncrypted = encrypt(password);
    
    const sql = 'INSERT INTO CustomersData (UserName, UserPassword, UserEmail) VALUES (?, ?, ?)';
    const values = [username, passwordEncrypted, useremail];

    await connection.query(sql, values);

}

const deleteUser = async function (username) {
    
    const connection = await connect();
    
    const sql = 'BEGIN TRANSACTION DELETE FROM CustomersData WHERE UserName = ? IF @@ERROR = 0 COMMIT ELSE ROLLBACK END';
    const values = username;

    await connection.query(sql, values);

}

const updateUser = async function (username, newUsername, newPassword, newEmail) {
    
    const connection = await connect();
    
    const sql = 'UPDATE CustomersData SET  UserName = ?, UserPassword = ?, UserEmail = ? WHERE UserName = ?';
    const values = [newUsername, newPassword, newEmail, username];

    await connection.query(sql, values);

}

module.exports = {logUser, setUser, getUser, getEmail: checkEmailExists, deleteUser, updateUser};