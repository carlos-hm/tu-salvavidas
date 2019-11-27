const router = require("express").Router();

const {
  profileGet,
  clientProfilePost,
} = require ("../controllers/auth.controller");

const {
  categoriesGet,
  categoryGet
} = require("../controllers/client.controller");

const upload = require("../config/cloudinary");

router.get("/profile", profileGet);
router.post("/profile", upload.single("photoURL"), clientProfilePost);

router.get("/categories", categoriesGet);

router.get("/categories/:id", categoryGet);

module.exports = router;