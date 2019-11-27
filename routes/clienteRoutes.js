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

  categoriesGet,
  categoryGet
} = require("../controllers/client.controller");

const upload = require("../config/cloudinary");

router.get("/profile", profileGet);
router.post("/profile", upload.single("photoURL"), clientProfilePost);

router.get("/proyects", proyectsGet);
router.post("/proyects", newProyectPost);

router.get("/proyects/:id", detailGet);
router.post("/proyects/:id", detailUpdate);

router.get("/proyects/:id/delete", deleteProject);

router.get("/categories", categoriesGet);

router.get("/categories/:id", categoryGet);

module.exports = router;