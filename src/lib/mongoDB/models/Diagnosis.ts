import mongoose, { Schema } from "mongoose";

export interface userDiagnosisType {
	userId: string;
	mbti: string;
	jobProposals: string[];
	commonPoints: string[];
	skillScores: skillScoresType[];
	timestamp: number;
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
	userId: { type: String, required: true },
	mbti: { type: String, required: true },
	jobProposals: { type: [String] },
	commonPoints: { type: [String] },
	skillScores: { type: [SKillScoreSchema] },
	timestamp: { type: Number },
});

export const DiagnosissModel =
	mongoose.models.Diagnosis || mongoose.model("Diagnosis", DiagnosisScehma);
