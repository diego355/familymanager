const express = require('express');
const router = express.Router();
const passport = require('passport');

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/auth/login',
  failureFlash: true
}));

// Dashboard route (protected)
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { user: req.user });
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
