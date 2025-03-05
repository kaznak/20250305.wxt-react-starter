import { defineRunnerConfig } from 'wxt';

// dev サーバ起動時のブラウザ立ち上げを無効化する設定です。
// この設定を使用する場合はこのファイルを web-ext.config.ts にリネームしてください。

export default defineRunnerConfig({
    disabled: true,
  });
  