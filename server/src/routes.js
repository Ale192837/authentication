const router = require('express').Router();

const TestController = require('@controller/controllerTest');
const createAccountController = require('@controller/createAccountTest');


router.get('/', TestController.helloWorld);
// router.get('/signup', TestController.helloWorld);
router.post('/signup', createAccountController.createAccount);
  

module.exports = router;