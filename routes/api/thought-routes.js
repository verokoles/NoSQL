const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// /api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id
router.route('/:userId').get(thoughtText);

// POST to create a new thought 
// (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.route('/:userId').post(thoughtText);
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

PUT to update a thought by its _id

DELETE to remove a thought by its _id


// /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;