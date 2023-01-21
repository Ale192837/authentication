import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import cryptoKey from './cryptoKey';

export default function encrypt(data) {

	return AES.encrypt(data, cryptoKey).toString();

}