yarn build:pages
cp -R dist/app-pages/* ../../wingsuit-designsystem.github.io
cd ../../wingsuit-designsystem.github.io
git add .
git commit -a -m "Deploy: $(date +'%Y-%m-%d')"
git push
