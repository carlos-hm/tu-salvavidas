const passport = require("passport");
const Proyect = require("../models/Proyect");

const Category = require("../models/Category");
const User = require("../models/User");


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

  res.redirect(`/proyects`);
}


//UPDATE
exports.detailGet = async (req, res) => {
  const { id } = req.params;
  const proyect = await Proyect.findById(id);
  console.log(proyect);

  res.render("detail", { proyect });
}

exports.detailUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, zone, category } = req.body;
  
  await Proyect.findByIdAndUpdate(id, { $set: { 
    title,
    description,
    zone,
    category
  }});

  res.redirect(`/proyects`);
}


//DELETE 
exports.deleteProject = async (req, res, next) => {
  const { id } = req.params;

  await Proyect.findByIdAndDelete(id);
  res.redirect('/proyects');
};


exports.categoriesGet = (req, res) => {
  res.render("categorias");
};

exports.categoryGet = async (req, res) => {
  const { id } = req.params;
  const categoria = await Category.findById(id);

  // const salvador = await User.find({ categories { Pintura: "on" } });

  // console.log(salvador) 

  //categoria.salvadores
  
  //console.log(salvadores.salvavidas);

  const uno = await User.findById('5ddc47d24fd1f50d8e883eb5');
  console.log(uno)

  // await salvadores.salvavidas.forEach ( element => {
  //  console.log(User.findById({element}));
  // });
  res.render("salvavidas", { categoria, uno });
}