const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", (req, res) => {
  Workout.find()
    .sort({ day: 1 })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.get("/range", (req, res) => {
  Workout.find()
    .sort({ day: -1 })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  Workout.updateOne(
    { _id: req.params.id },
    {
      $push: {
        exercises: req.body,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  Workout.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
