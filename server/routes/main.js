const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes
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


router.get("/about", (req, res) => {
  res.render('about', { currentPage: 'About' });
});


module.exports = router;


