const User = require("../models/User");
const passport = require("passport");

exports.salvavidasSignupGet = (req, res) => {
  const templateConfig = {
    action: "/signup",
    title: "Sign up",
    register: true
  };
  res.render("auth/signup-salvavidas", templateConfig);
};

exports.clienteSignupGet = (req, res) => {
  const templateConfig = {
    action: "/signup",
    title: "Sign up",
    register: true
  };
  res.render("auth/signup", templateConfig);
};

exports.signupPost = async (req, res, next) => {
  const {username, email, phone, password, passwordrepeat, role} = req.body;
  if(password !== passwordrepeat) {
    if(role === 'Salvavidas'){
      return res.render("auth/signup-salvavidas", {
        msg: "La contraseña debe coincidir"
      });
    } else {
      return res.render("auth/signup", {
        msg: "La contraseña debe coincidir"
      });
    }
  }

  const userCreated = await User.register(
    { username, email, phone, role }, password
  ).catch(msg => { 
    const templateConfig = {
      action: "/signup",
      title: "Sign up",
      register: true,
      msg: "El usuario ya está registrado"
    };
    if(role === 'Salvavidas'){
      res.render("auth/signup-salvavidas", templateConfig);
    } else {
      res.render("auth/signup", templateConfig);
    };
  });
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect("/login");
    req.logIn(user, err => {
      if (err) return next(err);
      req.user = user;

      if(user.role === 'Salvavidas') {
        return res.redirect("salvavidas/projects");
      } else {
        return res.redirect("/projects");
      }
    });
  })(req, res, next);
};

exports.loginGet = (req, res) => {
  const templateConfig = {
    action: "/login",
    title: "Login",
    register: false
  };
  res.render("auth/login", templateConfig);
};

exports.loginPost = (req, res, next) =>{
  passport.authenticate("local",(err, user, info)=>{
    if(err) return next (err);
    if(!user){
      const templateConfig ={
        action: "/login",
        title: "Login",
        register: false,
        err: "Email o contraseña incorrecta"
      };
      return res.render("/login", templateConfig);
    }
    req.logIn(user,err =>{
      if(err) return next(err);
      req.user = user;
      if(user.role === 'Salvavidas') {
        return res.redirect("salvavidas/projects");
      } else {
        return res.redirect("user/projects");
      }
    });
  })(req, res, next);
}

exports.profileGet = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);

  if(user.role === "Salvavidas"){
    res.render("profile", { user });
  } else {
    res.render("client-profile", { user });
  }
};

exports.clientProfilePost = async (req, res, next) => {
  let userUpdated;
  const { _id } = req.user;
  const { username } = req.body;

  if (req.file) {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, photoURL: req.file.secure_url }
    });
  } else {
     userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username }
    });
  }
  req.user = userUpdated;
  res.redirect(`/user/profile`);
};

exports.profilePost = async (req, res, next) => {
  let userUpdated;
  const { _id } = req.user;
  const { username, description } = req.body;

  if (req.file) {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, photoURL: req.file.secure_url, description }
    });
  } else {
    userUpdated = await User.findByIdAndUpdate(_id, {
      $set: { username, description }
    });
  }
  
  req.user = userUpdated;
  res.redirect(`/${userUpdated.role.toLowerCase()}/profile`);
};

exports.logOut = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
