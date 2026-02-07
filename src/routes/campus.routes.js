const campusController = require("../controllers/campus.controller.js"); 
const express = require("express");
const router = express.Router();

router.get("/campuses", campusController.getAllCampuses);
router.get("/campuses/:id", campusController.getCampusById);
router.post("/campuses", campusController.createCampus);
router.put("/campuses/:id", campusController.updateCampus);
router.delete("/campuses/:id", campusController.deleteCampus);

module.exports = router;