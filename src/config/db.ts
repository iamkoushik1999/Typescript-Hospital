import mongoose from 'mongoose';
import 'dotenv/config';

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URL as string);
    console.log(`MONGODBG connected with :-> ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
