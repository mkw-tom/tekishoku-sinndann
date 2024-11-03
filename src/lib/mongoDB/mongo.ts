import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(mongoURI as string);
		console.log("succecc mongoDB");
	} catch (error) {
		console.log(`Failure:Unconnected to MongoDB: ${error}`);
		throw new Error();
	}
};

export default connectDB;
