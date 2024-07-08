import { Request, Response } from "express";
import patientModel from "../models/patientModel";

// ------------------------------------------------------

// POST
// Add Patients
export const addPatients = async (req: Request, res: Response) => {
  const { name, age, gender, bloodGroup, address, diagnosedWith, admittedIn } =
    req.body;
  if (
    !name ||
    !age ||
    !gender ||
    !bloodGroup ||
    !address ||
    !diagnosedWith ||
    !admittedIn
  ) {
    return res.status(400).json({ message: "All fields required" });
  }

  const patient = await patientModel.create({
    name,
    age,
    gender,
    bloodGroup,
    address,
    diagnosedWith,
    admittedIn,
  });

  res.status(201).json({ message: "Patient Added", data: patient });
};

// GET
// Get Patients
export const getPatients = async (req: Request, res: Response) => {
  const patients = await patientModel.find();
  const patientCount = await patientModel.countDocuments();

  res.status(200).json({ count: patientCount, data: patients });
};

// GET
// Get One Patient
export const getPatient = async (req: Request, res: Response) => {
  const id = req.params.id;
  const patient = await patientModel.findById(id);
  if (!patient) {
    return res.status(404).json({ message: "No patient found" });
  }

  res.status(200).json({ data: patient });
};

// PUT
// Edit Patient
export const updatePatient = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newPatient = await patientModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newPatient) {
    return res.status(404).json({ message: "No patient found" });
  }

  res.status(200).json({ message: "patient Updated", data: newPatient });
};

// DELETE
// Delete Patient
export const deletePatient = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newPatient = await patientModel.findByIdAndDelete(id);
  if (!newPatient) {
    return res.status(404).json({ message: "No patient found" });
  }

  res.status(200).json({ message: "patient Deleted" });
};
