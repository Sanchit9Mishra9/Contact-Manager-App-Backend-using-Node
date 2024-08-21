const express = require("express");
const {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// router.route("/").get(getContacts);
// router.route("/").post(createContact);
router.use(validateToken);
router.route("/").get(getContacts).post(createContact);

// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
