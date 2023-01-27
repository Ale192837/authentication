const app = require('@app');
const config = require('@config');

const port = process.env.PORT || 3000;

module.exports = () => app.listen(config.app.port, () => {
    console.log(`Example app listening on port ${port}`)
})
  
  