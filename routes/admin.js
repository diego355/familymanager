const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Admin panel route
router.get('/admin', async (req, res) => {
  try {
    const users = await User.find();
    res.render('admin', { users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
