const { createAppointment, getAppointmentList } = require("./appointment_list.controller");
const router = require("express").Router();
router.post("/post", createAppointment);
router.get("/get", getAppointmentList);
// router.delete("/delete/:id", deleteCommentById);

module.exports = router;