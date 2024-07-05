import mongoose, { Schema, Document } from 'mongoose';
import { IHospotal } from './hospitalModel';

export interface IDoctor extends Document {
  name: string;
  salary: string;
  qualification: string;
  experience: number;
  worksIn: IHospotal['_id'];
}

const doctorSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    worksIn: {
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

const doctorModel = mongoose.model<IDoctor>('Doctor', doctorSchema);
export default doctorModel;
