
const getUser = async function (username) {
    
    const sql = 'SELECT * FROM customersdata WHERE UserName = ?;';
    const values = [username];
    const [user] = await global.connection.query(sql, values);
    return await user;
}

module.exports = getUser;