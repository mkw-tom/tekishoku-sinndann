
# ベースイメージとしてNode.jsを使用
FROM node:20.17.0

# 開発モードの環境変数を設定
ENV NODE_ENV=development

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピーしてインストール
COPY package.json package-lock.json ./
RUN npm install  # 開発依存も含めてインストール

# ソースコードをコピー
COPY . .

# ポート3000をエクスポート
EXPOSE 3000

# 開発モードでアプリケーションを起動
CMD ["npm", "run", "dev"]

