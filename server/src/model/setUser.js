const setUser = function (connection, username, password) {
    
    const sql = 'INSERT INTO CustomersData (UserName, UserPassword) VALUES (?, ?)';
    const values = [username, password];

    connection.query(
        sql,
        values,
        function (err, results, fields) {
            console.log(results); 
            console.log(fields); 
        }
    );

}

module.exports = setUser;