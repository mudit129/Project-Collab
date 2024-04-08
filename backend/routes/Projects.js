const express = require("express");
const router = express.Router();
// const fetchuser = require("../middleware/fetchuser");
const Project = require("../models/Project");
const { body, validationResult } = require("express-validator");


router.post(
    "/addproject",
    [
      body("title", "Enter a valid title").isLength({ min: 3 }),
      body("desc", "Description must be atleast 5 characters").isLength({
        min: 5,
      }),
    ],
    async (req, res) => {
      try {
        const { title, desc, prof, domain, url, urlDesc } = req.body;
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const project = await Project.create({
          title,
          desc,
          prof,
          domain,
          url,
          urlDesc,
          status:"Pending"
        });

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        const updatedDoc = await Conversations.findOneAndUpdate(
          { _id:  12},
          { $push: { pending: project._id } },
          { new: true }
        );

        res.json(project);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
      }
    }
  );

  module.exports = router;