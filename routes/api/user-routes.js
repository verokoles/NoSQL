// /api/users
const router = require("express").Router();

const {
    // GET all users
// GET a single user by its _id and populated thought and friend data
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/user-controller");

//.... /api/users
router.route("/").get(getAllUser).post(createUser);

// POST a new user:
// // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// DELETE to remove user by its _id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;