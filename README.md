# 今のブランチ確認
git status

# マスターブランチに移動する
git checkout master
git fetch origin
git pull origin master

# 新しい作業する時の流れ
git checkout -b feat/change_text
作業を行う。
git add .
git commit -m "feat: change text"
git push origin feat/change_text
PRをする。

# 実行方法
npm run dev
