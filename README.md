# ResHub-Clientの立ち上げ


### 立ち上げ方法及びsehllファイルのコマンド

初期設定
```
$ source aliases.sh
$ board-init
```

* コンテナーの起動
```
$ reshub-up
```

* dockerイメージビルト
```
$ rehub-build
```

* コンテナーの停止
```
$ reshub-down
```

* 実行中のコンテナーのbashに接続
```
$ reshub-client-bash
```

-------------------------------

ResHub-ClientのURL及び起動ポートは
_http://localhost:3001_

-------------------------------

### もっと簡単に立ち上げるには

1. ターミナル起動後
```
$ vim ~/.zshrc 又は　vim ~/.bashrc
$ source /reshub-clientのファイルパス/aliases.sh 又は alias reshub='cd /ResHub-Clientファイルパス&&source aliases.sh'
```

2. vimや編集エディター終了後
```
source ~/.zshrc 又は ~/.bashrc
```
