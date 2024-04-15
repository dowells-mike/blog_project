const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Admin Dashboard Page Route
router.get("/admin", (req, res) => {
    const loggedIn = req.user && req.user.admin;
    res.render('layouts/admin', { currentPage: 'Admin', loggedIn });
});


// Admin Registration Page Route
router.get("/register", (req, res) => {
    res.render('admin/register', { currentPage: 'Register', body: 'Registration Form' });
});

module.exports = router;