const router = require("express").Router();

const {
  profileGet, 
  profilePost,
} = require ("../controllers/auth.controller");

const {
  projectsGet, 
  getCategory,
  getDetail,
  messagePost
} = require ("../controllers/salvavidas.controller");

const { whichRole } = require ("../middlewares");


const upload = require("../config/cloudinary");

router.get("/profile", whichRole, profileGet);
router.post("/profile", upload.single("photoURL"), profilePost);

//PROJECTS
router.get("/projects", projectsGet);

//MESSAGES
router.post("/:id/message", messagePost);

//Categories
router.get("/:category", getCategory);
router.get("/:category/:id", getDetail);


module.exports = router;