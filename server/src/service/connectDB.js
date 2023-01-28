async function connectDB() {
   
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

connectDB();

module.exports = {}