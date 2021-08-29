yarn build:pages
cp -R dist/app-pages/* ../../wingsuit-designsystem.github.io
cd ../../wingsuit-designsystem.github.io
git commit -a -m "deploy"
git push
