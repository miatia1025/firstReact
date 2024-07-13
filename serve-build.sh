#!/bin/bash

# ReactBuildsディレクトリのパス
BUILDS_DIR="../../ReactBuilds"

# ディレクトリが存在するか確認
if [ ! -d "$BUILDS_DIR" ]; then
  echo "Directory $BUILDS_DIR does not exist."
  exit 1
fi

# ビルドフォルダのリストを取得
BUILDS=($(ls -d $BUILDS_DIR/*/ | sed 's:/*$::'))

# ビルドフォルダが存在しない場合
if [ ${#BUILDS[@]} -eq 0 ]; then
  echo "No builds found in $BUILDS_DIR."
  exit 1
fi

# fzfを使ってビルドフォルダを選択
BUILD=$(printf '%s\n' "${BUILDS[@]}" | fzf --prompt="Select a build to serve: ")

# 選択されたビルドをサーブ
if [ -n "$BUILD" ]; then
  echo "Serving build: $BUILD"
  npx serve -s "$BUILD"
else
  echo "No build selected."
  exit 1
fi
