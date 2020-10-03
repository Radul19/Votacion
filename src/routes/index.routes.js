const {Router} = require('express')
const router = Router()

//Functions from...
const {renderIndex,sendVote,sendFamily, renderPercent,renderResult,sendResults} = require('../controllers/index.controller')

router.get('https://votacionesimb.herokuapp.com/send',renderIndex)
router.get('https://votacionesimb.herokuapp.com/send/percent',renderPercent)
router.post('https://votacionesimb.herokuapp.com/send/familyGrade/:grade',sendFamily)
router.post('https://votacionesimb.herokuapp.com/send/send',sendVote)
router.get('https://votacionesimb.herokuapp.com/send/result',renderResult)

router.post('https://votacionesimb.herokuapp.com/send/results',sendResults)
module.exports = router