# 今のブランチ確認
git status

# ヤンさんが追加した分を同期したいときは？
git checkout master
git fetch origin
git pull origin master

# 保存の流れは？
作業を行う。
git add .
git commit -m "作業内容"
git push origin master

# 実行方法
npm run dev
