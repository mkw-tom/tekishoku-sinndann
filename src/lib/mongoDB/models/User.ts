import mongoose, { Schema } from "mongoose";

interface IUser extends Document {
	customId: string;
	username: string;
	password: string;
	profilePicture: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
	{
		// _id: {
		//   type: String,
		// },
		customId: {
			type: String,
			require: true,
			unique: true,
		},
		username: {
			type: String,
			required: true,
			min: 3,
			max: 25,
		},
		password: {
			type: String,
			required: true,
			min: 6,
			max: 40,
			unique: true,
		},
		profilePicture: {
			type: String,
			default: "/default_icon.png",
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export const UserModel =
	mongoose.models.User || mongoose.model("User", UserSchema);
