const router = require("express").Router();

const {
  profileGet, 
  profilePost,
} = require ("../controllers/auth.controller");

const {
  whichRole,
} = require ("../middlewares");

const {
  projectsGet, 
  getCategory 
} = require ("../controllers/salvavidas.controller");

const upload = require("../config/cloudinary");

router.get("/profile", whichRole, profileGet);
router.post("/profile", upload.single("photoURL"), profilePost);

//PROJECTS
router.get("/projects", projectsGet);

//Categories
router.get("/:category", getCategory);


module.exports = router;