const {create,
    getAllMenu,
    getMenu,
    updateMenu,
    deleteMenu} = require('../Controller/resturantController')

// const {newComment,
//     getAllRestaurants,
//     getCommentById,
//     updateComment,
//     deleteComment} = require('../Controller/commentController')
const express = require('express')
const router = express.Router()

router.post('/menu', create)
router.get('/menu', getAllMenu)
 router.post('/menu/:id', getMenu)
 router.put('/menu/:id', updateMenu)
 router.delete('/menu/:id', deleteMenu)


// route for comments
// router.post('/comment/:id', newComment)
// router.get('/comment',getAllRestaurants)
// router.get('/comment/:id', getCommentById)
// router.put('/comment/:id', updateComment)
// router.delete('/:userId/comment/:commentId', deleteComment)



module.exports = router