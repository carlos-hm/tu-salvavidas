const router = require("express").Router();
const passport = require("passport");

const { whichRole } = require ("../middlewares");

const {
  salvavidasSignupGet,
  clienteSignupGet,
  signupPost,
  loginGet,
  loginPost,
  logOut
} = require("../controllers/auth.controller");
const { canLogin } = require("../middlewares");

//Local Singup & login
router.get("/salvavidas/signup", salvavidasSignupGet);
router.get("/signup", clienteSignupGet);
router.post("/signup", signupPost);


//LOGIN
router.get("/login", loginGet);
router.post("/login", loginPost);

//LOGOUT
router.get("/logout", logOut);

module.exports = router;