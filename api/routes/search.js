const express = require('express');
const router = express.Router();
const searchControler = require('../controllers/searchControlers');

router.post('/add', searchControler.add);
router.delete('/:id', searchControler.delete);
router.get('/:id',searchControler.getId);
router.put('/:id',searchControler.editSearch)
router.post('/filter_date',searchControler.filterDate)
router.post('/assignment', searchControler.assignment)
router.put('/end-search/:id',searchControler.endSearch)
router.get('/delete-rec/:id', searchControler.unassign)

//filtrar por estado
router.get('/state/:page&:state', searchControler.byState)

//filtrar por país
router.post('/filter_country', searchControler.filterCountry)

module.exports = router;