const {Router} = require('express')
const router = Router()

//Functions from...
const {renderIndex,sendVote,sendFamily, renderPercent,renderResult,sendResults} = require('../controllers/index.controller')

router.get('/',renderIndex)
router.get('/percent',renderPercent)
router.post('/familyGrade/:grade',sendFamily)
router.post('/send',sendVote)
router.get('/result',renderResult)

router.post('/results',sendResults)
module.exports = router