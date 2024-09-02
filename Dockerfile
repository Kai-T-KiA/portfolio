# ベースイメージとして公式のNode.jsイメージを使用
FROM node:16-alpine

# 作業ディレクトリを作成して移動
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# プロジェクトの全ファイルをコピー
COPY . .

# TypeScriptでビルド（もしビルド手順が必要なら）
RUN npm run build

# アプリケーションを開発モードで起動
CMD ["npm", "start"]

# Dockerコンテナが利用するポートを指定
EXPOSE 3000
