const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// api/users (GET, POST)
router.route('/').get(getUsers).post(createUser);

// api/user/:userId (GET, DELETE)
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

// api/user/:userId/friends/:friendId (POST, DELETE)
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
