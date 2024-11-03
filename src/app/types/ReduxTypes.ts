export interface UserType {
	// authId: string
	// customId: string;
	id: string;
	username: string;
	password: string;
	profilePicture: string;
	email: string;
}
export interface DiagnosisSendDataType {
	_id: string;
	mbti: string;
	skills: string[];
	certifications: string[];
	experience: string[];
	interests: string[];
	values: string[];
	workStyle: string[];
	teamRole: string;
}

export interface InputActionPayload {
	name: keyof DiagnosisFormInputType; // フィールド名がペイロードに含まれる
	value: string; // 更新する値
}

export interface DiagnosisFormInputType {
	mbti: string;
	skills: string;
	certifications: string;
	experience: string;
	interests: string;
	values: string;
	workStyle: string;
	teamRole: string;
}

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

export type storeType = {
	diagnosisFormInput: DiagnosisFormInputType;
	diagnosis: DiagnosisSendDataType;
	auth: UserType;
};
