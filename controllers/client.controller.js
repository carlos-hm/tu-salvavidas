const passport = require("passport");
const Proyect = require("../models/Proyect");
const User = require("../models/User");
const Message = require("../models/Message");


//CREATE
exports.proyectsGet = async (req, res) => {
  const { _id } = req.user;
  const proyects = await Proyect.find({ creatorID: _id});

  res.render("proyects", {proyects});
}

exports.newProyectPost = async (req, res) => {
  const { _id } = req.user;
  //console.log(_id);
  const { title, description, zone, category } = req.body;
    await Proyect.create({
      title,
      description,
      zone,
      category,
      creatorID: _id,
    })

  res.redirect(`/projects`);
}


//UPDATE
exports.detailGet = async (req, res) => {
  const { id } = req.params;
  const proyect = await Proyect.findById(id);
  console.log(proyect);

  res.render("detail", { proyect });
};

exports.detailUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, zone, category } = req.body;
  
  await Proyect.findByIdAndUpdate(id, { $set: { 
    title,
    description,
    zone,
    category
  }});

  res.redirect(`/projects`);
}


//DELETE 
exports.deleteProject = async (req, res, next) => {
  const { id } = req.params;

  await Proyect.findByIdAndDelete(id);
  res.redirect('/proyects');
};


//Message
exports.messageGet = async (req, res) => {
  const { _id } = req.user;
  const messages = await Message.find( { creatorID: _id } );

  res.render("messages", { messages });
};