const router = require("express").Router();

const Admin = require("../controller/usersController");
const auth = require("../middlewares/authenticate");
router.post("/", Admin.createUser);
router.get("/", Admin.findUser);
router.get("/:id", Admin.findUserByid);
router.patch("/:id", Admin.updateUsers);
router.delete("/:id", Admin.deleteUsers);

module.exports = router;
