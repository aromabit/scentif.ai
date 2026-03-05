# scentif.ai コーポレートサイト

scentif.ai のコーポレートサイトです。Next.js による静的サイト生成を採用し、GitHub Pages へ自動デプロイされます。

## 技術スタック

- **Next.js** 16 - App Router / Static Export
- **React** 19
- **TypeScript** 5
- **ESLint** 9 - Flat Config
- **Prettier** 3

## 開発環境のセットアップ

リポジトリをクローンして依存関係をインストールします。

```bash
git clone https://github.com/aromabit/scentif.ai.git
cd scentif.ai
pnpm install
```

開発サーバーを起動します。

```bash
pnpm dev
```

## スクリプト

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 静的サイトをビルド（`/out` に出力） |
| `pnpm lint` | ESLint を実行 |
| `pnpm format` | Prettier でコードをフォーマット |
| `pnpm typecheck` | TypeScript の型チェック |

## ディレクトリ構成

```
.
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── reset.css       # CSSリセット
├── .github/
│   └── workflows/
│       ├── lint.yml    # リント自動実行
│       └── deploy.yml  # GitHub Pages 自動デプロイ
├── next.config.js      # Next.js 設定
├── tsconfig.json       # TypeScript 設定
├── eslint.config.mjs   # ESLint 設定
└── .prettierrc.json    # Prettier 設定
```

## デプロイ

`main` ブランチへの push により GitHub Pages へ自動デプロイされます。また push 時に ESLint / Prettier のチェックも自動実行されます。

## ライセンス

ISC
