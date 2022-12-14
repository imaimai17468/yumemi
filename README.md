# ゆめみフロントエンド コーディング課題

## 導入したもの
|名前|内容|
|:-:|-|
|TypeScript|-|
|Next.js|-|
|Docker|-|
|sass|-|
|StoryBook|UIコンポーネントのテストや管理|
|jest|テストツール|
|prettier|コード整形|
|ESLint|静的解析|
|Axios|api|
|hygen|Componentの自動作成|
|CSS Modlues|各ComponentのStyle設定|
|clsx|styleを場合によって変えれるようにする|

## npm scripts
|alias|実行内容|command|
|:-:|-|-|
|dev|開発モードで起動|`next dev`|
|build|ビルドする|`next build`|
|start|本番モードで起動|`next start`|
|lint|コードをチェック|`next lint`|
|sb|StoryBookを起動|`start-storybook -p 6006`|
|build-sb|StoryBookをビルド|`build-storybook`|
|test|テストする|`jest --watch`|
|format|prettierでコードを整形|`prettier --write \"./**/**/*.{ts,tsx}\"`|
|hygen:add|コンポーネントを作る<br>make component|`hygen components add`|

## Commit Message Rule
[Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) の規則に沿って commit message を記述してください。

`[{prefix}] {message} (#{issue_number})`

```
[chore] README.md を修正 (#15)
[feat] ログイン機能を作成した (#21)
```

|prefix|内容|
|:-:|-|
|build|ビルド|
|CI|CI|
|chore|雑事|
|docs|ドキュメント|
|feat|新機能の追加|
|fix|修正|
|pref|パフォーマンス等改善|
|rafactor|リファクタリング|
|revert|コミット取消|
|style|コードスタイルやフォーマット|
|test|テスト|
|del|削除|

## Branch Rule
下記のルールに従ってブランチを作成してください

`{prefix}/{name}/issue{issue_number}`

```
feat/imai/issue15
fix/foo/issue34
```

|prefix|内容|
|:-:|-|
|feat|新機能の追加|
|fix|修正|
|review|レビュー|

## Issue Rule
下記のルールに従ってissueを作成してください<br>
また、内容に従って適宜Tag及びAsigneesをつけてください<br>

`[{prefix}]{content}`

```
[feat]CSS Moduleの導入
[feat]DBテーブル設計
```

|prefix|内容|
|:-:|-|
|feat|新機能の追加|
|fix|修正|
|style|コードスタイルやフォーマット|
|test|テスト|
|del|削除|

## ディレクトリ説明
### view/
フロントエンド開発用ディレクトリ<br>
いずれバックエンドのコンテナを作ることを前提として作成

### src/
ソースコード全般

### src/api/
APIを叩くための関数を格納するディレクトリ

### src/hooks/
カスタムフックを格納するディレクトリ

### src/pages/
各ページを配置

### src/components/
各コンポーネントを配置
- common - 汎用的なボタンやセレクトボックスなど
- layout - ヘッダーなどの大きな要素
