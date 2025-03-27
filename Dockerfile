FROM node:16-alpine

WORKDIR /app

# パッケージファイルのコピー
COPY package*.json ./

# 依存関係をインストール（TypeScriptの型定義ファイルも含む）
RUN npm install && \
    npm install react react-dom && \
    npm install --save-dev @types/react @types/react-dom

# プロジェクトの全ファイルをコピー
COPY . .

# プロジェクトをビルド
RUN npm run build

# ビルド成果物を保存するためのボリュームを定義（オプション）
VOLUME /app/build

# # コンテナ実行時にビルド成果物を表示
# CMD ["ls", "-la", "build"]


# アプリケーションを開発モードで起動
CMD ["npm", "start"]

# Dockerコンテナが利用するポートを指定
EXPOSE 3000