/*: @target MZ
 * @base TRP_ParticleMZ
 * @plugindesc 自作パーティクル設定の一覧
 * @help
 * light_floor <region> ＠2023/7/10
 * test <character> ＠---
 *
 * @command set_character
 * @text set/表示 > キャラ対象(1)
 * @desc パーティクル表示
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default weather
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option test <character> ＠---
 * @value test
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 * @command set_screen
 * @text set/表示 > スクリーン/天候/リージョン(1)
 * @desc パーティクル表示
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default this
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option light_floor <region> ＠2023/7/10
 * @value light_floor
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 *
 * @requiredAssets img/particles/shine3
 */