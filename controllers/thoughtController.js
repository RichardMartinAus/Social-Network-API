const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSingleThought(req, res) {
    Course.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a course
  deleteThought(req, res) {
    Course.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: 'Thoguht and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  //   // Update a course
  //   updateCourse(req, res) {
  //     Course.findOneAndUpdate(
  //       { _id: req.params.courseId },
  //       { $set: req.body },
  //       { runValidators: true, new: true }
  //     )
  //       .then((course) =>
  //         !course
  //           ? res.status(404).json({ message: 'No course with this id!' })
  //           : res.json(course)
  //       )
  //       .catch((err) => res.status(500).json(err));
  //   },
};

// const router = require('express').Router();

// const {
//   getThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
//   createReaction,
//   deleteReaction,
// } = require('../../controllers/thoughtController.js');

// // /api/thoughts
// router.route('/').get(getThoughts).post(createThought);

// // /api/thoughts/:thoughtId
// router
//   .route('/:thoughtId')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// //   api/thoughts/:thoughtId/reactions
// router
//   .route('/:thoughtId/reactions')
//   .put(createReaction)
//   .delete(deleteReaction);

// module.exports = router;
