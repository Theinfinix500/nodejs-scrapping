const router = require('express').Router();
const loadPresidents = require('./../scrappers/presidents-scrapper');

router.get('/', async (req, res) => {
  const presidents = await loadPresidents();
  res.json({ presidents });
});

module.exports = router;
