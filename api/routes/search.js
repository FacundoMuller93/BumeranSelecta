const express = require('express');
const router = express.Router();
const searchControler = require('../controllers/searchControlers');

router.post('/add', searchControler.add);
router.delete('/:id', searchControler.delete);
router.get('/:id',searchControler.getId);
router.put('/:id',searchControler.editSearch)
// router.get('/page/:page', searchControler.getAll);
router.post('/filter_date',searchControler.filterDate)
router.post('/assignment', searchControler.assignment)
router.put('/end-search/:id',searchControler.endSearch)
router.get('/delete-rec/:id', searchControler.unassign)

//filtrar por estado
router.get('/state/:page&:state', searchControler.byState)
// router.get('/state/started', searchControler.started)
// router.get('/state/presented', searchControler.presented)
// router.get('/state/revision', searchControler.revision)
// router.get('/state/closed', searchControler.closed)
//

//filtrar por país
router.post('/filter_country', searchControler.filterCountry)

module.exports = router;