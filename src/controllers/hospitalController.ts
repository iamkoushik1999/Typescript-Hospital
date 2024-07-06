import { Request, Response } from "express";
import hospitalModel from "../models/hospitalModel";

// ------------------------------------------------------

// POST
// Add Hospitals
export const addHospitals = async (req: Request, res: Response) => {
  const { name, address1, address2, city, pinCode, specialization } = req.body;
  if (!name || !address1 || !city || !pinCode || !specialization) {
    return res.status(400).json({ message: "All fields required" });
  }

  const hospital = await hospitalModel.create({
    name,
    address1,
    address2,
    city,
    pinCode,
    specialization,
  });

  res.status(201).json({ message: "Hospital Added", data: hospital });
};

// GET
// Get Hospitals
export const getHospitals = async (req: Request, res: Response) => {
  const hospitals = await hospitalModel.find();
  const hospitalCount = await hospitalModel.countDocuments();

  res.status(200).json({ count: hospitalCount, data: hospitals });
};

// GET
// Get One Hospital
export const getHospital = async (req: Request, res: Response) => {
  const id = req.params.id;
  const hospital = await hospitalModel.findById(id);
  if (!hospital) {
    return res.status(404).json({ message: "No hospital found" });
  }

  res.status(200).json({ data: hospital });
};

// PUT
// Edit Hospital
export const updateHospital = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newHospital = await hospitalModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newHospital) {
    return res.status(404).json({ message: "No hospital found" });
  }

  res.status(200).json({ message: "Hospital Updated", data: newHospital });
};

// DELETE
// Delete Hospital
export const deleteHospital = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newHospital = await hospitalModel.findByIdAndDelete(id);
  if (!newHospital) {
    return res.status(404).json({ message: "No hospital found" });
  }

  res.status(200).json({ message: "Hospital Deleted" });
};
