# ResHub-Client

Reshubのクライアントレポジトリー

## 立ち上げ方法及びsehllファイルのコマンド

初期設定

```
$ source aliases.sh
$ client-init
```

* コンテナーの起動

```
$ rh-cl
```

* コンテナーの停止

```
$ cl-down
```

* 実行中のコンテナーのbashに接続

```
$ cl-bash
```

* 実行中のコンテナーのlogを見る

```
$ cl-log
```

* もしdockerが使えない・遅い場合

```
$ cd app&&yarn dev
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
$ source ~/.zshrc 又は ~/.bashrc
```

-----------------------------

### figmaデザイン

現在作成中

-------------------------------
