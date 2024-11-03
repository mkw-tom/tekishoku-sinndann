import mongoose, { Schema } from "mongoose";

export interface userDiagnosisType {
	userId: string;
	jobProposals: string[];
	commonPoints: string[];
	skillScores: skillScoresType[];
}

interface skillScoresType {
	skillName: string;
	score: number;
}

const SKillScoreSchema = new Schema<skillScoresType>({
	skillName: { type: String },
	score: { type: Number },
});

const DiagnosisSchma = new Schema<userDiagnosisType>({
	userId: { type: String, require: true },
	jobProposals: { type: [String] },
	commonPoints: { type: [String] },
	skillScores: { type: [SKillScoreSchema] },
});

export const DiagnosissModel =
	mongoose.models.Analysis || mongoose.model("Diagnosis", DiagnosisSchma);
