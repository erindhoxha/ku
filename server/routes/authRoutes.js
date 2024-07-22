const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body);
  if (req.body.email === 'erind.cbh@gmail.com' && req.body.password === 'helloworld') {
    res.send('You are logged in');
  } else {
    res.send('Wrong username or password. Please try to sign in again.');
  }
});

module.exports = router;
