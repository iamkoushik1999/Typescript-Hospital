import { Request, Response } from "express";
import reportModel from "../models/reportModel";

// ------------------------------------------------------

// POST
// Add Reports
export const addReports = async (req: Request, res: Response) => {
  const {
    patient,
    examinedBy,
    examinedIn,
    examinedAt,
    problem,
    diagnosis,
    description,
  } = req.body;

  if (
    !patient ||
    !examinedBy ||
    !examinedIn ||
    !examinedAt ||
    !problem ||
    !diagnosis ||
    !description
  ) {
    return res.status(400).json({ message: "All fields required" });
  }

  const report = await reportModel.create({
    patient,
    examinedBy,
    examinedIn,
    examinedAt,
    problem,
    diagnosis,
    description,
  });

  res.status(201).json({ message: "Patient Report Added", data: report });
};

// GET
// Get Reports
export const getReports = async (req: Request, res: Response) => {
  const reports = await reportModel.find();
  const reportCount = await reportModel.countDocuments();

  res.status(200).json({ count: reportCount, data: reports });
};

// GET
// Get One Report
export const getReport = async (req: Request, res: Response) => {
  const id = req.params.id;
  const report = await reportModel.findById(id);
  if (!report) {
    return res.status(404).json({ message: "No report found" });
  }

  res.status(200).json({ data: report });
};

// PUT
// Edit Report
export const updateReport = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newReport = await reportModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newReport) {
    return res.status(404).json({ message: "No report found" });
  }

  res.status(200).json({ message: "Report Updated", data: newReport });
};

// DELETE
// Delete Report
export const deleteReport = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newReport = await reportModel.findByIdAndDelete(id);
  if (!newReport) {
    return res.status(404).json({ message: "No report found" });
  }

  res.status(200).json({ message: "Report Deleted" });
};
