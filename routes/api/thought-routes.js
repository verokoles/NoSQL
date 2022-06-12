const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');
const { update } = require('../../models/User');

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);
// GET to get all thoughts
// GET to get a single thought by its _id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// POST to create a new thought 
// (don't forget to push the created thought's _id to the associated user's thoughts array field)
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoguhts/<thoughtId>/<reactions>/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReply);

module.exports = router;