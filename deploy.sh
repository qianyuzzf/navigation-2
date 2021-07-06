yarn build
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
# git remote add origin git@github.com:qianyuzzf/navigation-2-website.git &&
# git branch -M main &&
# git push -u -f origin main &&
git remote add origin git@e.coding.net:xiaoqian001/navigation-2/navigation-2.git &&
git push -u -f origin master &&
cd ..