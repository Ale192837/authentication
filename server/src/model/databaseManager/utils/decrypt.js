import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import cryptoKey from './cryptoKey';

export default function decrypt(data) {

    const bytes = AES.decrypt(data, cryptoKey);
	const decryptedData = bytes.toString(Utf8);
	return decryptedData;

}