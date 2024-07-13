#!/bin/bash

# 日付と時間を使ってビルドディレクトリ名を作成
timestamp=$(date +"%Y%m%d-%H%M%S")
build_dir="/home/d-nak/Desktop/d-nakdev/ReactBuilds/$timestamp"
source_dir="$build_dir/.source"

# ビルドディレクトリを作成
mkdir -p $build_dir
mkdir -p $source_dir

# Reactアプリをビルド
PUBLIC_URL="/ReactBuilds/$timestamp" npm run build

# ビルド成果物をビルドディレクトリに移動
cp -r build/* $build_dir

# ソースコードをコピー
rsync -av --progress . $source_dir --exclude node_modules --exclude .git

echo "Build completed: $build_dir"

