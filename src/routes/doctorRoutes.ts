import { Router } from "express";
import {
  addDoctors,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController";
const router = Router();

// ---------------------------------------------------

// POST
// Add Doctors
router.route("/").post(addDoctors);

// GET
// Get Doctors
router.route("/").get(getDoctors);

// GET
// Get One Doctor
router.route("/").get(getDoctor);

// PUT
// Edit Doctor
router.route("/").put(updateDoctor);

// DELETE
// Delete Doctor
router.route("/").delete(deleteDoctor);

export default router;
