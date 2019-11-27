const passport = require("passport");
const Category = require("../models/Category");
const User = require("../models/User");

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