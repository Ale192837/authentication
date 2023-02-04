const setUser = function (connection, username, password) {
    
    const sql = 'INSERT INTO CustomersData (UserName, UserPassword) VALUES (?, ?)';
    const values = [username, password];

    connection.query(
        sql,
        values,
        function (err, results, fields) {
        }
    );

}

module.exports = setUser;