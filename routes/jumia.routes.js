const router = require('express').Router();
const loadArticles = require('./../scrappers/jumia.scrapper');

router.get('/', async (req, res) => {
  const menus = await loadArticles();
  res.json({ menus });
});

module.exports = router;
