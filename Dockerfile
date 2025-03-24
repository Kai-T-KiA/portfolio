FROM node:16-alpine

WORKDIR /app

# パッケージファイルのコピー
COPY package*.json ./

# 依存関係をインストール（TypeScriptの型定義ファイルも含む）
RUN npm install && \
    npm install --save-dev @types/react @types/react-dom

# プロジェクトの全ファイルをコピー
COPY . .

# アプリケーションを開発モードで起動
CMD ["npm", "start"]

# Dockerコンテナが利用するポートを指定
EXPOSE 3000