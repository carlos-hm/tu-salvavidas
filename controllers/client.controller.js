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

  if (category === 'pintura' || category === 'plomeria' || category === 'electricista' || category === 'plomeria' || category === 'fumigacion' || category === 'albanileria' || category === 'impermea' || category === 'carpinteria' || category === 'jardineria' || category === 'herreria' ) {
    await Proyect.create({
      title,
      description,
      zone,
      category,
      creatorID: _id,
      photoURL : 'https://image.flaticon.com/icons/svg/1207/1207222.svg'
    })
  } else if (category === 'ldomestica' || category === 'lavanderia') {
      await Proyect.create({
        title,
        description,
        zone,
        category,
        creatorID: _id,
        photoURL : 'https://image.flaticon.com/icons/svg/609/609803.svg'
      })
  } else if (category === 'lblanca' || category === 'relectro'){
      await Proyect.create({
        title,
        description,
        zone,
        category,
        creatorID: _id,
        photoURL : 'https://image.flaticon.com/icons/svg/752/752086.svg'
      })
  } else {
    await Proyect.create({
      title,
      description,
      zone,
      category,
      creatorID: _id,
      photoURL : 'https://image.flaticon.com/icons/svg/527/527719.svg'
    })
  }

  res.redirect(`/user/projects`);
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

  res.redirect(`/user/projects`);
}


//DELETE 
exports.deleteProject = async (req, res, next) => {
  const { id } = req.params;

  await Proyect.findByIdAndDelete(id);
  res.redirect('/user/projects');
};


//MESSAGE
exports.messageGet = async (req, res) => {
  const { _id } = req.user;
  const messages = await Message.find( { creatorID: _id } );

  res.render("messages", { messages });
};

exports.messageDelete = async (req, res) => {
  console.log('holaa')
  const { id } = req.params;
  console.log('holaa')
  await Message.findByIdAndDelete(id);
  res.redirect(`/user/messages`);
}