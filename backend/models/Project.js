const mongoose = require("mongoose");
const {Schema} = mongoose;
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const projectSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  prof: { type: String, required: true },
  domain: { type: String, required: true },
  url: { type: String, required: true },
  urlDesc: { type: String, required: true },
  status: { type: String, required: true },
});

// projectSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
//     expiresIn: "7d",
//   });
//   return token;
// };
module.exports = mongoose.model('projects', projectSchema);
// const Project = mongoose.model("user", projectSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     title: Joi.string().required().label("title"),
//     description: Joi.string().required().label("description"),
//     prof: Joi.string().required().label("prof"),
//     domain: Joi.string().email().required().label("domain"),
//     url: Joi.string().email().required().label("domain"),
//     img: Joi.string().email().required().label("img"),
//     domain: Joi.string().email().required().label("url"),
//     status: passwordComplexity().required().label("status"),
//   });
//   return schema.validate(data);
// };

// module.exports = { Project, validate };
