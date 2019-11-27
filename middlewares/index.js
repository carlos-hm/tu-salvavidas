exports.whichRole = (req, res, next) => {
  if(req.isAuthenticated()) {
    if(req.user.role === "Cliente") {
      req.app.locals.isCliente = true;
      res.redirect('/');
    } else if(req.user.role === "Salvavidas") {
      req.app.locals.isSalvavidas = true;
      next()
    } else {
      req.app.locals.isCliente = false;
      req.app.locals.isSalvavidas = false;
    }
  } else {
    req.app.locals.isCliente = false;
    req.app.locals.isSalvavidas = false;
  }
   //next();
};

exports.isAuth = (req, res, next) => 
req.isAuthenticated() ? next() : res.redirect("/login");

exports.canLogin = (req, res, next) => 
  !req.isAuthenticated() 
    ? next() 
    : res.redirect(`/${req.user.role.toLowerCase()}/profile`);