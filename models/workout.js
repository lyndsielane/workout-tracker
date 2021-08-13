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
      distance: Number,
    },
  ],
});

workoutSchema.virtual("totalDuration").get(function () {
  if (this.exercises.length > 0) {
    return this.exercises
      .map((exercise) => exercise.duration)
      .reduce((prev, next) => prev + next);
  }

  return 0;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
