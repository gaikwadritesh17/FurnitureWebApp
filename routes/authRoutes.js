const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google OAuth login route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    (req, res) => {
        res.redirect('http://localhost:3000/home'); // Redirect to frontend home page after successful login
    }
);

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// User info route
router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

module.exports = router;
