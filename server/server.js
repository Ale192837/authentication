require('dotenv-safe').config();
require('module-alias/register');

const boot = require('@service/boot');
const db = require('@service/connectDB');

boot();