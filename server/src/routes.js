const router = require('express').Router();

const TestController = require('@controller/controllerTest');

router.get('/', TestController.helloWorld);

module.exports = router;