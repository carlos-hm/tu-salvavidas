exports.whichRole = (req, res, next) => {
  if(req.isAuthenticated()) {
    if(req.user.role === "Cliente") {
      req.app.locals.isCliente = true;
    } else if(req.user.role === "Salvavidas") {
      req.app.locals.isSalvavidas = true;
    } else {
      req.app.locals.isCliente = false;
      req.app.locals.isSalvavidas = false;
    }
  } else {
    req.app.locals.isCliente = false;
    req.app.locals.isSalvavidas = false;
  }
   next();
};

exports.isCliente = (req, res, next) => {
  if(req.user.role === "Cliente") {
    next();
  } else {
    res.redirect('/');
  }
};

exports.isSalvavidas = (req, res, next) => {
  if(req.user.role === "Salvavidas") {
    next();
  } else {
    res.redirect('/');
  }
};

exports.isAuth = (req, res, next) => 
req.isAuthenticated() ? next() : res.redirect("/login");

exports.canLogin = (req, res, next) => 
  !req.isAuthenticated() 
    ? next() 
    : res.redirect(`/${req.user.role.toLowerCase()}/profile`);