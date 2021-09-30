#! /usr/bin/env sh

git add -A
git commit -m "ADD: blog"

git push origin master

sleep 1

sh deploy.sh
