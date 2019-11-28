const passport = require("passport");

const Proyect = require("../models/Proyect");
const User = require("../models/User");
const Message = require("../models/Message");

exports.projectsGet = async (req, res) => {
  const projects = await Proyect.find();

  res.render("salvavidas-projects", { projects });
};

exports.getCategory = async (req, res) => {
  const { category } = req.params;
  console.log(category)
  const projects = await Proyect.find( {category: category });

  res.render("categorias", { projects });
}

exports.getDetail = async (req, res) => {
  const { id } = req.params;
  const project = await Proyect.findById(id);
  
  const author = await User.findById(project.creatorID);
  //console.log(author);
  res.render("salvavidas-detail", { project, author });
}

//Message
exports.messagePost = async (req, res) => { 
  const { id } = req.params;
  const { _id, phone, username } = req.user;
  const { description } = req.body;

  const project = await Proyect.findById(id);
  const message = await Message.create(
    {
      description,
      projectID: id,
      projectTitle: project.title,
      creatorID: project.creatorID,
      workerID: _id,
      workerPhone: phone,
      workerName: username
    }
  )
  
  res.json();
  //res.render(`/salvavidas/messages`);
};