const {Router} = require('express')
const router = Router()

//Functions from...
const {renderIndex,sendVote,sendFamily, renderPercent,renderResult,sendResults} = require('../controllers/index.controller')

router.get('https://votacionesimb.herokuapp.com/',renderIndex)
router.get('https://votacionesimb.herokuapp.com/percent',renderPercent)
router.post('https://votacionesimb.herokuapp.com/familyGrade/:grade',sendFamily)
router.post('https://votacionesimb.herokuapp.com/send',sendVote)
router.get('https://votacionesimb.herokuapp.com/result',renderResult)

router.post('https://votacionesimb.herokuapp.com/results',sendResults)
module.exports = router