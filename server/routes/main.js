let escapeStringRegexp;

import('escape-string-regexp').then((module) => {
  escapeStringRegexp = module.default;
});

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes

//Home Page Route
router.get("", async (req, res) => {
  const locals = {
    title: "Blog Post",
    description: "Simple blog post with Express and Pug."
  };

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const [posts, totalPosts] = await Promise.all([
      Post.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Post.countDocuments()
    ]);
    const totalPages = Math.ceil(totalPosts / limit);
    res.render('index', { ...locals, currentPage: 'Home', posts, page, totalPages });
  } catch (err) {
    console.log(err);
  }
});

//Single Post Route
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.render('post', { post, currentPage: 'Post' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Search Route
router.get("/search", async (req, res) => {
  if (!escapeStringRegexp) {
    return res.status(500).send('Server Error');
  }
  const query = escapeStringRegexp(req.query.q);
  try {
    const posts = await Post.find({ $text: { $search: query } });
    if (!posts) {
      return res.status(404).render('search', { posts: [], currentPage: 'Search', query });
    }
    res.render('search', { posts, currentPage: 'Search', query });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

//About Page Route
router.get("/about", (req, res) => {
  res.render('about', { currentPage: 'About' });
});

// Contact Page Route
router.get('/contact', (req, res) => {
  res.render('contact', { currentPage: 'Contact' });
});

// Contact Form POST Route
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
      },
  });

  const mailOptions = {
      from: email,
      to: 'aitanktrouble@gmail.com',
      subject: `Message from ${name}`,
      text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
  });

  res.redirect('/');
});


// Login Page Route
router.get('/login', (req, res) => {
  res.render('login', { currentPage: 'Login' });
});

// Login Form POST Route
/* router.post('/login', async (req, res) => {
  // Implement login functionality here
}); */

// Register Page Route
router.get('/register', (req, res) => {
  res.render('register', { currentPage: 'Register' });
});

// Register Form POST Route
/* router.post('/register', async (req, res) => {
  // Implement registration functionality here
}); */


module.exports = router;


