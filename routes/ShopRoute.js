const router = require("express").Router();
const checkRole = require("../middlewares/checkRole");

const Admin = require("../controller/ShopController");
const auth = require("../middlewares/authenticate");
router.post("/", auth, checkRole("Owner"), Admin.createShop);
router.get("/", auth, Admin.findShops);
router.get("/:id", auth, Admin.findShopById);
router.patch("/:id", auth, checkRole("Owner"), Admin.updateShop);
router.delete("/:id", auth, checkRole("Owner"), Admin.deleteShop);

module.exports = router;
