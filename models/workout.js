const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String },
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises
    .map((exercise) => exercise.duration)
    .reduce((prev, next) => prev + next);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
