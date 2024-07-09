import { Router } from "express";
import {
  addHospitals,
  getHospitals,
  getHospital,
  updateHospital,
  deleteHospital,
} from "../controllers/hospitalController";
const router = Router();

// ---------------------------------------------------

// POST
// Add Hospitals
router.route("/").post(addHospitals);

// GET
// Add Hospitals
router.route("/").get(getHospitals);

// GET
// Add Hospital
router.route("/:id").get(getHospital);

// PUT
// Add Hospital
router.route("/:id").put(updateHospital);

// DELETE
// Add Hospital
router.route("/:id").delete(deleteHospital);

export default router;
