const router = require("express").Router();

const {
  profileGet, 
  profilePost
} = require ("../controllers/auth.controller");

const upload = require("../config/cloudinary");

router.get("/profile", profileGet);
router.post("/profile", upload.single("photoURL"), profilePost);

module.exports = router;