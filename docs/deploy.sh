set -e

cd ../../wingsuit-designsystem.github.io
git rm -rf .
git clean -fxd
cd ../wingsuit/docs

yarn build:pages
cp -R dist/app-pages/* ../../wingsuit-designsystem.github.io
cd ../../wingsuit-designsystem.github.io

mv sitemap.html sitemap.xml
git add .
git commit -a -m "Deploy: $(date +'%Y-%m-%d')"
git push
