const express = require('express');
const router = express.Router();
const searchControler = require('../controllers/searchControlers');

const { Searchs, Recruiters } = require('../models');

router.post('/add', searchControler.add);
router.delete('/:id', searchControler.delete);

router.get('/', searchControler.getAll);


module.exports = router;