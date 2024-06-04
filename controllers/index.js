const students = require("../models/students");

//const data = { students: ["rodoplhe", "florian", "remi"] };

const getRandomStudent = (array) => {
  const random = Math.floor[Math.random()*array.length];

  return array[random];
};
const controllerStudent = {
  random:  async  (req, res) => {
    const data = await Student.findAll();
    console.log(data);
    const randomStudent = getRandomStudent();
    res.status(200).json({ laroulette: randomStudent });
  },

  create: async (req, res) => {
    console.log(req.body);
    const data = await Student.create(req.body);
    console.log(data);
    res
      .status(201)
      .json({ message: "votre student a été ajoutée", data: req.body });
  },

  findAll: (req, res) => {
    const data
}
};

module.exports = controllerStudent;
