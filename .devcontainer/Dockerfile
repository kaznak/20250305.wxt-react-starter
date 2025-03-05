# ベースイメージとして Node.js バージョン 22 を使用
FROM node:22

# Microsoft の GPG キーを追加
RUN curl -sSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg

# VS Code サーバーのリポジトリを追加
RUN echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list

# 必要なパッケージをインストール
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    git \
    gnupg \
    code \
    chromium \
    && rm -rf /var/lib/apt/lists/*

# ワークディレクトリを設定
WORKDIR /workspace

# コンテナ起動時に code-server を実行
CMD ["code", "--bind-addr", "0.0.0.0:8080", "."]
