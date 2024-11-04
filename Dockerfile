# Dockerfile

# ベースイメージとしてNode.jsを使用
FROM node:20.17.0

ENV NODE_ENV=production

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピーしてインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm install --only=production

# アプリのソースコードをコピー
COPY . .

# Next.jsアプリをビルド
RUN npm run build

# ポート3000をエクスポート
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "dev"]
