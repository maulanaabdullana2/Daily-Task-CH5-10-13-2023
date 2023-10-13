const router = require("express").Router();

const Auth = require("../controller/authController");
const token = require("../middlewares/checktoken");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/checktoken", token, Auth.checktoken);

module.exports = router;
