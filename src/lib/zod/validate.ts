import { z } from "zod";
export const EmailLoginValidationSchema = z.object({
	username: z
		.string()
		.min(1, "ユーザーネームは必須入力です")
		.min(2, "名前は2文字以上で入力してください。"),
	email: z
		.string()
		.min(1, "メールアドレスは必須入力です")
		.email("正しいメールアドレスを入力してください"),
	password: z
		.string()
		.min(1, "パスワードは必須入力です")
		.min(6, "パスワードは6文字以上で入力してください。")
		.max(15, "15字以内で入力してください"),
});
