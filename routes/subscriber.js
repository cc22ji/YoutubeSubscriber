var express = require("express");
var router = express.Router();
const subscriberModel = require("../models/subscribers");



//Create a Subscriber Route for fetching All Data from Database
router.get("/subscriber", async (req, res) => {
  try {
    let data = await subscriberModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

//Create a Subscriber/names Route for fetching Name And SubscribrdChannel from Database
router.get("/subscriber/name", async (req, res) => {
  try {
    const students = await subscriberModel.find({},"name subscribedChannel -_id");
    res.send(students);
  } catch (error) {
    res.status(500).send("Internal Server Error ");
  }
});

//Create a Subscriber/id Dynamic Route for fetching All Data by specific ID from Database
router.get("/subscriber/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const student = await subscriberModel.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Incorrect Id. Please give Right ID" });
    }

    res.send(student);
  } catch (error) {
    res.status(500).send("you requested a wrong url. Please do check you URL")
  }
});

//Create a Wildcart Route for ll not specifying routes
router.all("*", (req, res) => {
  res.status(404).json({ error: "you requested a wrong url. Please do check you URL" });
});

module.exports = router;
