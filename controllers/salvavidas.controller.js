const passport = require("passport");

const Proyect = require("../models/Proyect");
const User = require("../models/User");

exports.projectsGet = async (req, res) => {
  const projects = await Proyect.find();

  res.render("salvavidas-projects", {projects});
};

exports.getCategory = async (req, res) => {
  const { category } = req.params;
  console.log(category)
  const projects = await Proyect.find( {category: category });

  res.render("categorias", { projects });
}