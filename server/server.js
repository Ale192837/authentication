require('dotenv-safe').config();
require('module-alias/register');

const boot = require('@service/boot');

boot();