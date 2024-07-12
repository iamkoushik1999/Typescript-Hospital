import { Router } from "express";
import {
  addReports,
  getReports,
  getReport,
  updateReport,
  deleteReport,
} from "../controllers/reportController";
const router = Router();

// ---------------------------------------------------

// POST
// Add Reports
router.route("/").post(addReports);

// GET
// Get Reports
router.route("/").get(getReports);

// GET
// Get One Report
router.route("/").get(getReport);

// PUT
// Edit Report
router.route("/").put(updateReport);

// DELETE
// Delete Report
router.route("/").delete(deleteReport);

export default router;
