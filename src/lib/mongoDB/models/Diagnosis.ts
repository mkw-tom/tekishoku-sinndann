import mongoose, { Schema } from "mongoose";

export interface userDiagnosisType {
	userId: string;
	jobProposals: string[];
	commonPoints: string[];
	skillScores: skillScoresType[];
	timestamp: string;
}

interface skillScoresType {
	skillName: string;
	score: number;
}

const SKillScoreSchema = new Schema<skillScoresType>({
	skillName: { type: String },
	score: { type: Number },
});

const DiagnosisScehma = new Schema<userDiagnosisType>({
	userId: { type: String, require: true },
	jobProposals: { type: [String] },
	commonPoints: { type: [String] },
	skillScores: { type: [SKillScoreSchema] },
	timestamp: { type: String },
});

export const DiagnosissModel =
	mongoose.models.Diagnosis || mongoose.model("Diagnosis", DiagnosisScehma);
