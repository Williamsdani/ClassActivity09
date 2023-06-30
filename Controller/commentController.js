const commentModel = require('../Model/commentModel')
const restaurantModel = require('../Model/restaurantModel')




const newComment = async (req, res)=>{
    try {
        const food = await restaurantModel.findById(req.params.id)
        const foodMenu = await commentModel.create(req.body)
        foodMenu.link = food
        foodMenu.save()
        if(req.body.refMax){
            food.refMax.push(foodMenu)
        }else if(req.body.citizenMeal){
            food.chickWizz.push(foodMenu)
        }
        food.save()
        res.status(200).json({
            message: 'food created',
            data: foodMenu
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllRestaurants = async (req, res)=>{
    try {
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getCommentById = async (req, res)=>{
    try {
        const comment = await commentModel.findById(req.params.id);
        res.status(200).json({
            data: comment
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateComment = async (req, res)=>{
    try {
        const updateMenu = await commentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateMenu) {
            res.status(404).json({
                message: 'Comment not found'
            })
        } else {
            res.status(200).json({
                message: 'Comment updated',
                data: updateMenu
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteComment = async (req, res)=>{
    try {
        const foodId = req.params.foodId; 
        const deletedId = req.params.foodId
        const food = await restaurantModel.findById(foodId);
        // console.log(user);
        console.log(food.comment);

        const deletedMenu = await commentModel.findByIdAndDelete(deletedId);
         await food.comment.filter(element => element !== deletedId)
       // await user.comment.pull(commentId);
        await food.save();
        if (!deletedMenu) {
            res.status(404).json({
                message: 'cannot delete'
            });
        } else {
            res.status(200).json({
                message: 'success',
              
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    newComment,
    getAllRestaurants,
    getCommentById,
    updateComment,
    deleteComment
}















































































// const commentModel = require('../Model/commentModel')
// const restaurantModel = require('../Model/restaurantModel')

// const newComment = async (req, res)=>{
//     try {
//         const user = await restaurantModel.findById(req.params.id)
//         const userComment = await commentModel.create(req.body)
//         userComment.link = user
//         userComment.save()
//         user.comment.push(userComment)
//         user.save()
//         res.status(200).json({
//             message: 'Comment created',
//             data: userComment
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// const getAllRestaurants = async (req, res)=>{
//     try {
    
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// const getCommentById = async (req, res)=>{
//     try {
//         const comment = await commentModel.findById(req.params.id);
//         res.status(200).json({
//             data: comment
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// const updateComment = async (req, res)=>{
//     try {
//         const update = await commentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         if(!update) {
//             res.status(404).json({
//                 message: 'Comment not found'
//             })
//         } else {
//             res.status(200).json({
//                 message: 'Comment updated',
//                 data: update
//             })
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }


// const deleteComment = async (req, res)=>{
//     try {
//         const userId = req.params.userId; 
//         const commentId = req.params.commentId
//         const user = await restaurantModel.findById(userId);
//         // console.log(user);
//         console.log(user.comment);

//         const deleteComment = await commentModel.findByIdAndDelete(commentId);
//          await user.comment.filter(element => element !== commentId)
//        // await user.comment.pull(commentId);
//         await user.save();
//         if (!deleteComment) {
//             res.status(404).json({
//                 message: 'cannot delete'
//             });
//         } else {
//             res.status(200).json({
//                 message: 'success',
//                 data: deleteComment
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// module.exports = {
//     newComment,
//     getAllRestaurants,
//     getCommentById,
//     updateComment,
//     deleteComment
// }









































// // const commentModel = require('../Model/commentModel')
// // const restaurantModel = require('../Model/restaurantModel')


// // const create = async (req, res)=>{
// //     try {
// //         const user = await restaurantModel.findById(req.params.id)
// //         const userComment = await commentModel.create(req.body)
// //         userComment.link = user
// //         userComment.save()
// //         user.comment.push(userComment)
// //         user.save()
// //         res.status(200).json({
// //             message: 'Comment created',
// //             data: userComment
// //         })
// //     } catch (error) {
// //         res.status(500).json({
// //             message: error.message
// //         })
// //     }
// // }

// // const getAllMenu = async (req, res)=>{
// //     try {
    
// //     } catch (error) {
// //         res.status(500).json({
// //             message: error.message
// //         })
// //     }
// // }

// // const getMenu= async (req, res)=>{
// //     try {
// //         const comment = await commentModel.findById(req.params.id);
// //         res.status(200).json({
// //             data: comment
// //         })
// //     } catch (error) {
// //         res.status(500).json({
// //             message: error.message
// //         })
// //     }
// // }

// // const updateMenu = async (req, res)=>{
// //     try {
// //         const update = await commentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
// //         if(!update) {
// //             res.status(404).json({
// //                 message: 'Comment not found'
// //             })
// //         } else {
// //             res.status(200).json({
// //                 message: 'Comment updated',
// //                 data: update
// //             })
// //         }
// //     } catch (error) {
// //         res.status(500).json({
// //             message: error.message
// //         })
// //     }
// // }


// // const deleteMenu = async (req, res)=>{
// //     try {
// //         const userId = req.params.userId; 
// //         const commentId = req.params.commentId
// //         const user = await restaurantModel.findById(userId);
// //         // console.log(user);
// //         console.log(user.comment);

// //         const deleteComment = await commentModel.findByIdAndDelete(commentId);
// //          await user.comment.filter(element => element !== commentId)
// //        // await user.comment.pull(commentId);
// //         await user.save();
// //         if (!deleteComment) {
// //             res.status(404).json({
// //                 message: 'cannot delete'
// //             });
// //         } else {
// //             res.status(200).json({
// //                 message: 'success',
// //                 data: deleteComment
// //             });
// //         }
// //     } catch (error) {
// //         res.status(500).json({
// //             message: error.message
// //         })
// //     }
// // }

// // module.exports = {
// //     create,
// //     getAllMenu,
// //     getMenu,
// //     updateMenu,
// //     deleteMenu
// // }