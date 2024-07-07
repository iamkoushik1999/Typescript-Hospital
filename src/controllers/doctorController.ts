import { Request, Response } from "express";
import doctorModel from "../models/doctorModel";

// ------------------------------------------------------

// POST
// Add Doctors
export const addDoctors = async (req: Request, res: Response) => {
  const { name, salary, qualification, experience, worksIn } = req.body;
  if (!name || !salary || !qualification || !experience || !worksIn) {
    return res.status(400).json({ message: "All fields required" });
  }

  const doctor = await doctorModel.create({
    name,
    salary,
    qualification,
    experience,
    worksIn,
  });

  res.status(201).json({ message: "Doctor Added", data: doctor });
};

// GET
// Get Doctors
export const getDoctors = async (req: Request, res: Response) => {
  const doctors = await doctorModel.find();
  const doctorCount = await doctorModel.countDocuments();

  res.status(200).json({ count: doctorCount, data: doctors });
};

// GET
// Get One Doctor
export const getDoctor = async (req: Request, res: Response) => {
  const id = req.params.id;
  const doctor = await doctorModel.findById(id);
  if (!doctor) {
    return res.status(404).json({ message: "No doctor found" });
  }

  res.status(200).json({ data: doctor });
};

// PUT
// Edit Doctor
export const updateDoctor = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newDoctor = await doctorModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newDoctor) {
    return res.status(404).json({ message: "No doctor found" });
  }

  res.status(200).json({ message: "doctor Updated", data: newDoctor });
};

// DELETE
// Delete Doctor
export const deleteDoctor = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newDoctor = await doctorModel.findByIdAndDelete(id);
  if (!newDoctor) {
    return res.status(404).json({ message: "No doctor found" });
  }

  res.status(200).json({ message: "doctor Deleted" });
};
