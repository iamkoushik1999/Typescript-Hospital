import mongoose, { Schema, Document } from 'mongoose';

export interface IHospotal extends Document {
  name: string;
  address1: string;
  address2: string;
  city: string;
  pinCode: string;
  specialization: string;
}

const hospitalSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    specialization: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const hospitalModel = mongoose.model<IHospotal>('Hospital', hospitalSchema);
export default hospitalModel;
