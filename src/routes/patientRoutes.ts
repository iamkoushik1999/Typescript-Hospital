import { Router } from "express";
import {
  addPatients,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patientController";
const router = Router();

// ---------------------------------------------------

// POST
// Add Patients
router.route("/").post(addPatients);

// GET
// Get Patients
router.route("/").get(getPatients);

// GET
// Get One Patient
router.route("/").get(getPatient);

// PUT
// Edit Patient
router.route("/").put(updatePatient);

// DELETE
// Delete Patient
router.route("/").delete(deletePatient);

export default router;
