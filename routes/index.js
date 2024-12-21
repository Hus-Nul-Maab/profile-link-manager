const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Venus - Easy Links' });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Feedback page
router.get('/feedback', (req, res) => {
  res.render('feedback', { title: 'Feedback' });
});

// Login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Register page
router.get('/register', (req, res) => {
  res.render('register', { title: 'Create Account' });
});

module.exports = router;