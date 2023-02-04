const AES = require('crypto-js/aes');
const Utf8 = require('crypto-js/enc-utf8');

const decrypt = function(data) {

    const bytes = AES.decrypt(data, process.env.CRYPTO_KEY);
	const decryptedData = bytes.toString(Utf8);
	return decryptedData;

}

module.exports = decrypt;