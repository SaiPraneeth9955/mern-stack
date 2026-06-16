const userhandler = require("../handlers/user.handler");
const express = require("express");
const router = express.Router();
router.post("/", userhandler.createUser);
router.get("/", userhandler.getAllUsers);
router.get("/:id", userhandler.getUserById);
router.put("/:id", userhandler.updateUser);
router.delete("/:id", userhandler.deleteUser);

module.exports = router;