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

//About Page Route
router.get("/about", (req, res) => {
  res.render('about', { currentPage: 'About' });
});


module.exports = router;


