const express = require("express");
const controllerStudent = require("../controllers");
const router = express.Router();
//const {random} = require('./..:controllers/musics')

router.get("/", (req, res) => {
  res.status(200).json({ success: "RACINE API" });
});

router.get("/test", (req, res) => {
  res.status(200).json({ message: "test" });
});

router.get("/random", controllerStudent.random);
router.get("/random", controllerStudent.findAll);
router.get("/random", controllerStudent.create);

const controllerStudent = {
  random: (req, res) => {
    const randomStudent = getRandomStudent();
    res.status(200).json({ laroulette: randomStudent });
  },
};

module.exports = router;
