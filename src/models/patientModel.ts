import mongoose, { Schema, Document } from 'mongoose';
import { IHospotal } from './hospitalModel';

export interface IPatient extends Document {
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  address: string;
  diagnosedWith: string;
  admittedIn: IHospotal['_id'];
}

const patientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    admittedIn: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const patientModel = mongoose.model<IPatient>('Patient', patientSchema);
export default patientModel;
