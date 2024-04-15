const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes
router.get("",async (req, res) => {
  const locals = {
    title: "Blog Post",
    description: "Simple blog post with Express and Pug."
  };  

  try {
    const posts = await Post.find();
    res.render('index', { ...locals, currentPage: 'Home', posts });
  } catch (err) {
    console.log(err);
  }
});


router.get("/about", (req, res) => {
  res.render('about', { currentPage: 'About' });
});


module.exports = router;














/* function insertPostData () {
  Post.insertMany([
    {
      title: "Post 1",
      content: "Content 1"
    },
    {
      title: "Post 2",
      content: "Content 2"
    },
    {
      title: "Post 3",
      content: "Content 3"
    },
    {
      title: "Post 4",
      content: "Content 4"
    },
    {
      title: "Post 5",
      content: "Content 5"
    },
    {
      title: "Post 6",
      content: "Content 6"
    },
    {
      title: "Post 7",
      content: "Content 7"
    },
    {
      title: "Post 8",
      content: "Content 8"
    },
    {
      title: "Post 9",
      content: "Content 9"
    },
    {
      title: "Post 10",
      content: "Content 10"
    }
  ]);
}
insertPostData(); */