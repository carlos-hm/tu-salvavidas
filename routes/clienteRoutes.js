const router = require("express").Router();

const {
  profileGet,
  clientProfilePost,
} = require ("../controllers/auth.controller");

const {
  proyectsGet,
  newProyectPost,
  detailGet,
  detailUpdate,
  deleteProject,
  messageGet
} = require("../controllers/client.controller");

const upload = require("../config/cloudinary");

router.get("/profile", profileGet);
router.post("/profile", upload.single("photoURL"), clientProfilePost);

router.get("/projects", proyectsGet);
router.post("/projects", newProyectPost);

router.get("/proyects/:id", detailGet);
router.post("/proyects/:id", detailUpdate);

router.get("/proyects/:id/delete", deleteProject);

router.get("/messages", messageGet);


module.exports = router;