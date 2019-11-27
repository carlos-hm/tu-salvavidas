const router = require("express").Router();
const passport = require("passport");

const {
  salvavidasSignupGet,
  clienteSignupGet,
  signupPost,
  loginGet,
  loginPost,
} = require("../controllers/auth.controller");
const { canLogin } = require("../middlewares");

//Local Singup & login
router.get("/salvavidas/signup", salvavidasSignupGet);
router.get("/signup", clienteSignupGet);
router.post("/signup", signupPost);


//LOGIN
router.get("/login", loginGet);
router.post("/login", loginPost)

module.exports = router;