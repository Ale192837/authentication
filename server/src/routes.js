const router = require('express').Router();

const TestController = require('@controller/controllerTest');
const createAccountController = require('@controller/createAccountController');


router.get('/', TestController.helloWorld);
router.post('/signup', createAccountController.createAccount);
  

module.exports = router;