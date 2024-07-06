import mongoose, { Schema, Document } from 'mongoose';
import { IHospotal } from './hospitalModel';
import { IPatient } from './patientModel';
import { IDoctor } from './doctorModel';

export interface IReport extends Document {
  patient: IPatient['_id'];
  examinedBy: IDoctor['_id'];
  examinedIn: IHospotal['_id'];
  examinedAt: Date;
  problem: string;
  diagnosis: string;
  description: string;
}

const reportSchema: Schema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    examinedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    examinedIn: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true,
    },
    examinedAt: {
      type: Date,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const reportModel = mongoose.model<IReport>('Report', reportSchema);
export default reportModel;
