const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutControllers");
const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id",getWorkout);

// POST(create) workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id",deleteWorkout);

//PATCH(update) workout
router.patch("/:id", updateWorkout);

module.exports = router;
