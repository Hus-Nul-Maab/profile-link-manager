const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Authentication Middleware
function authMiddleware(req, res, next) {
    if (req.session && req.session.userId) {
      next();
    } else {
      res.redirect('/login');
    }
  }
  
  // Function to validate password
  function validatePassword(password) {
    const errors = [];
  
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[!@#\$%\^&\*]/.test(password)) {
      errors.push("Password must contain at least one special character (!@#$%^&*).");
    }
  
    return errors;
  }
  
  // Handle user registration
  router.post('/register', async (req, res) => {
    try {
      const passwordErrors = validatePassword(req.body.password);
  
      if (passwordErrors.length > 0) {
        return res.status(400).render('register', {
          title: 'Create Account',
          error: 'Password does not meet the requirements.',
          passwordErrors: passwordErrors
        });
      }
  
      const user = new User(req.body);
      await user.save();
  
      res.render('register', { title: 'Account Created', message: 'Account successfully created! You can now login.' });
    } catch (err) {
      console.error(err);
      res.status(400).render('register', { title: 'Create Account', error: 'Error creating account. Please try again.' });
    }
  });

// Handle user login
router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user && user.password === req.body.password) { // Still not using bcrypt for simplicity
        // Set session data
        req.session.userId = user._id;
        res.redirect(`/users/${user.username}`);
      } else {
        res.status(401).render('login', { title: 'Login', error: 'Invalid email or password.' });
      }
    } catch (err) {
      res.status(500).render('login', { title: 'Login', error: 'Error logging in. Please try again.' });
    }
  });

// Handle user logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.clearCookie('connect.sid'); // Clear session cookie
    res.redirect('/');
  });
});

// Display user profile (protected route)
router.get('/:username', authMiddleware, async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (user) {
        res.render('profile', { title: user.firstName + "'s Profile", user });
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      res.status(500).send('Error retrieving user profile');
    }
  });

// Update user profile (protected route)
router.post('/:username/update', authMiddleware, async (req, res) => {
    try {
      const user = await User.findOneAndUpdate({ username: req.params.username }, req.body, { new: true });
      if (user) {
        res.redirect(`/users/${user.username}`);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      res.status(500).send('Error updating user profile');
    }
  });

// Delete user profile (protected route)
router.post('/:username/delete', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ username: req.params.username });
    if (user) {
      req.session.destroy(); // Also destroy session on deletion
      res.redirect('/');
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).send('Error deleting user profile');
  }
});

module.exports = router;