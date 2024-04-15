const express = require('express');
const router = express.Router();

//Routes
router.get("", (req, res) => {
  const locals = {
    title: "Blog Post",
    description: "Simple blog post with Express and Pug."
  };  
  res.render('index', { ...locals, currentPage: 'Home' });
});

router.get("/about", (req, res) => {
  res.render('about', { currentPage: 'About' });
});


module.exports = router;