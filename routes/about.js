const express = require(`express`);

const router = express.Router();

router.get(`/`, (req, res) => res.send(`About this page: exercise three`));
router.get(`/me`, (req, res) => res.send(`About me page: exercise three`));
router.get(`/json`, (req, res) =>
  res.send([{ itemOne: `cool`, itemTwo: `cooler` }])
);

module.exports = router;
