const AES = require('crypto-js/aes');
const Utf8 = require('crypto-js/enc-utf8');

const encrypt = function(data) {

	return AES.encrypt(data, process.env.CRYPTO_KEY).toString();

}

module.exports = encrypt;