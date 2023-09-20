//=============================================================================
// TsumioGatheringSystem.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017-2019 Tsumio
// 当ファイルの複製・改変・再配布を固く禁じます。
// No reproduction or republication without written permission.
// ----------------------------------------------------------------------------
// Version
// 1.0.9 2019/11/17 アニメーションの仕様を変更。
// 1.0.8 2019/11/16 アニメーションの枚数を増やせるように変更。アニメーションスピードも変更可能にした。
// 1.0.7 2019/11/12 ロード時に道具アイコンが表示されない不具合を修正。
// 1.0.6 2019/11/12 ロード時にスタミナの幅が必ずMAX値になる不具合を修正。
// 1.0.5 2019/11/11 スタミナのコモンイベントが不要なときに実行される不具合の修正。
// 1.0.4 2019/11/11 スタミナが足りないときコモンイベントを実行するよう変更。
// 1.0.3 2019/11/10 採集ゲージシステムを追加。
// 1.0.2 2019/11/06 収集システムの開始・停止できるようにした。
// 1.0.1 2019/11/05 アイコンの仕様を変更。
// 1.0.0 2019/11/05 公開。
// ----------------------------------------------------------------------------
// [GitHub] : https://github.com/Tsumio/rmmv-plugins
// [Twitter]: https://twitter.com/TsumioNtGame
//=============================================================================

/*:ja
 * @plugindesc 採集システムを実装します。
 * @author ツミオ
 *
 * @param ----基本的な設定----
 * @desc 
 * @default 
 * 
 * @param 追加アクションのリスト
 * @type struct<ActionSettings>[]
 * @desc 追加するアクションについての設定。
 * @default 
 * 
 * @param 通行不能でも収集を許可するリージョンID
 * @desc 通行不能な場所をまたいでも収集を許可するリージョンIDを指定します。釣り時の池などを想定しています。
 * @type number
 * @default 85
 * 
 * @param 収集アクションウィンドウのX座標
 * @desc 現在の収集アクションを示すウィンドウのX座標
 * @type number
 * @default 50
 * 
 * @param 収集アクションウィンドウのY座標
 * @desc 現在の収集アクションを示すウィンドウのY座標
 * @type number
 * @default 50
 * 
 * @param アイコンのイメージセット
 * @desc 採集アイコンとして使うイメージのセット。
 * @type file
 * @dir img/system/
 * @require 1
 * 
 * @param アイコンイメージの幅
 * @desc 採集アイコンとして使うイメージの幅
 * @type number
 * @default 48
 * 
 * @param アイコンイメージの高さ
 * @desc 採集アイコンとして使うイメージの高さ
 * @type number
 * @default 48
 * 
 * @param スタミナとして使用する変数番号
 * @desc スタミナとして使用する変数番号指定します。
 * @type variable
 * @default 1
 * 
 * @param 最大スタミナとして使用する変数番号
 * @desc 最大スタミナとして使用する変数番号指定します。
 * @type variable
 * @default 2
 * 
 * @param スタミナゲージの外枠
 * @desc スタミナゲージの外枠画像名
 * @type file
 * @dir img/pictures/
 * @require 1
 * @default
 * 
 * @param スタミナゲージの中身
 * @desc スタミナゲージの中身画像名
 * @type file
 * @dir img/pictures/
 * @require 1
 * @default
 * 
 * @param スタミナゲージの座標
 * @type struct<Position>
 * @desc スタミナゲージの座標を指定します。
 * @default {"x":"100","y":"100"}
 * 
 * @param アクション不可時に実行するコモンイベント番号
 * @type number
 * @desc スタミナが足りないときに実行するコモンイベント番号を設定します。
 * @default 1
 * 
 * @param 採集アニメーションのパターン数
 * @type number
 * @desc 採集アニメーションのパターン数を設定します。右側に伸びます
 * @default 5
 * 
 * @help 採集システムを実装します。
 * 
 * 23/01/08 村人Aによって追加された箇所について分離
 * 
 * 
 * 
 * このプラグインは冬空橙様向けに制作されたプラグインです。
 * いかなる理由があろうとも、許可されていない場合の複製・改変・再配布を認めません。
 * 
 * 【特徴】
 * ・採集システムを実装します
 * ・任意個数だけアクションを登録できます
 * ・アクションが発火した場合、セルフスイッチがONになります
 * 
 * 【使用方法】
 * プラグインの導入後、プラグインパラメーターを設定してください。
 * 
 * 【追加アクションのリスト】
 * プラグインパラメータの追加アクションのリストは任意個数だけ追加することができます。
 * ただし1番目のパラメータはダミー用のアクションとなり、実際には実行できません。
 * 実行させたいアクションは2番め以降に登録してください。
 * 
 * 【アクションのsymbol】
 * プラグインパラメータのsymbolはイベントのメモ欄で使用します。
 * 例えばsymbolに「ハンマー」を指定した場合、イベントのメモ欄に以下のように記述することで
 * アクションを実行した際にイベントのセルフスイッチがONになります。
 * <ハンマー:true>
 * 
 * 【アイコンの仕様】
 * アイコンはツクールMVのアイコンの仕様に従います。
 * すなわち
 * ・横は16個並ぶ
 * ・縦に無限に並ぶ
 * ・インデックスは0始め
 * となります。
 * 幅と高さはプラグインパラメータの設定に従います。
 * 
 * 【収集システムのスクリプト】
 * 以下のスクリプトをスクリプトコマンドで実行することにより、各種動作を実行することができます。
 * valueは任意の数値に置き換えてください。
 * 
 * //収集システムの開始
 * $gamePlayer.startGatheringSystem();
 * //収集システムの停止
 * $gamePlayer.stopGatheringSystem();
 * //収集スタミナの回復(最大値以上を指定した場合は最大値まで回復します）
 * $gamePlayer.recoverGatheringStamina(value);
 * //収集スタミナの最大値を設定する
 * $gamePlayer.setMaxGatheringStamina(value);
 * 
 * 【アニメーションの仕様】
 * アニメーションは通常の歩行グラフィックを用います。
 * この際、プラグインパラメータの「採集アニメーションのパターン数」で設定した分だけ右側にアニメーションしていきます。
 * アニメーションの再生速度については数字が大きいほど早くなります。
 * 
 * 画像名は「現在の歩行グラフィック名」＋「-」＋「animationImageで設定した名前」となります。
 * 例えば現在の歩行グラフィックが「Actor1」でanimationImageが「sword」なら「Actor1-sword」の画像を参照します。
 * この仕様の特性上、複数のキャラクターで収集アクションを実行したい場合
 * 1つの歩行グラフィックセット（Actor1など）に1つのキャラクターだけを置くことを推奨します。
 * もしそうしなければ、画像の管理が煩雑になるかもしれません。
 * 
 * 【その他の仕様】
 * ・ゲーム開始時、収集システムは開始しています。
 * ・現在のスタミナを操作したい場合、必ずrecoverGatheringStaminaを利用してください。
 *  直接変数の値を操作した場合、動作は保証されません。
 * ・最大スタミナを操作したい場合、必ずsetMaxGatheringStaminaを利用してください。
 *  直接変数の値を操作した場合、動作は保証されません。
 * 
 * 【更新履歴】
 * 1.0.9 2019/11/17 アニメーションの仕様を変更。
 * 1.0.8 2019/11/16 アニメーションの枚数を増やせるように変更。アニメーションスピードも変更可能にした。
 * 1.0.7 2019/11/12 ロード時に道具アイコンが表示されない不具合を修正。
 * 1.0.6 2019/11/12 ロード時にスタミナの幅が必ずMAX値になる不具合を修正。
 * 1.0.5 2019/11/11 スタミナのコモンイベントが不要なときに実行される不具合の修正。
 * 1.0.4 2019/11/11 スタミナが足りないときコモンイベントを実行するよう変更。
 * 1.0.3 2019/11/10 採集ゲージシステムを追加。
 * 1.0.2 2019/11/06 収集システムの開始・停止できるようにした。
 * 1.0.1 2019/11/05 アイコンの仕様を変更。
 * 1.0.0 2019/11/05 公開。
 * 
 * 【備考】
 * 当プラグインを利用したことによるいかなる損害に対しても、制作者は一切の責任を負わないこととします。
 * 
 * 【利用規約】
 * いかなる理由があろうとも、許可されていない場合の複製・改変・再配布を認めません。
 */
/*~struct~ActionSettings:
 *
 * @param symbol
 * @desc アクション名（イベントのメモタグで指定）。重複不可。
 * @type string
 * @default
 * 
 * @param switchId
 * @desc ONにするセルフスイッチの番号。A、B、C、Dのいずれかを指定
 * @type string
 * @default D
 * 
 * @param iconId
 * @desc 画面上部に表示するアクション用のアイコン番号
 * @type number
 * @default 1
 * 
 * @param se
 * @desc アクション時に使用するSE
 * @type file
 * @dir audio/se/
 * @require 1
 * @default
 * 
 * @param missSe
 * @desc 空振り時に使用するSE
 * @type file
 * @dir audio/se/
 * @require 1
 * @default
 * 
 * @param endurance
 * @desc 耐久力（使用可能回数）。使用回数無限にしたい場合は-999を指定する。
 * @type number
 * @min -999
 * @default 10
 * 
 * @param missEndurance
 * @desc 空振り時の耐久性を減らすかどうかを指定します。trueで減らし、falseで減らしません
 * @type boolean
 * @default true
 * 
 * @param throwImage
 * @desc アクション時に矢等の投擲物を表示する場合、こちらに使用するキャラチップの画像名と位置を半角カンマを挟んで指定します。
 * @default !Other1,0
 * 
 * @param collisionDistance
 * @desc 当たり判定のマス目。例えば3を指定すると3マス先まで当たる。
 * @default 1
 * 
 * @param waitPatternNum
 * @desc イベントに当たった際に止めるパターン番号を指定します。左から0,1,2…となります。必要ない場合-1としてください
 * @default -1
 * @type number
 * @min -1
 * 
 * @param correspondItemId
 * @desc 対応するアイテムID。プレイヤーがこのアイテムを保持していない場合、アクションは実行されない。
 * @type item
 * @default
 * 
 * @param animationImage
 * @desc アニメーションで使用する画像を設定
 * @type string
 * @require
 * 
 * @param animationImageIndex
 * @desc アニメーションで使用する画像のインデックスを設定。
 * 左上から0で右端が3。次は左下に行って4で右下が7。
 * @type number
 * @default 1
 * 
 * @param animationTimeFrame
 * @desc アニメーションの再生フレーム。60フレーム＝約1秒
 * @type number
 * @default 60
 * 
 * @param consumingMissStamina
 * @desc 空振り時の消費するスタミナ量
 * @type number
 * @default 1
 * 
 * @param consumingStamina
 * @desc 消費するスタミナ量
 * @type number
 * @default 2
 * 
 * @param animSpeed
 * @desc アニメーション速度。値が大きいほど早い。
 * @type number
 * @default 4
 * 
 */
/*~struct~Position:
 * 
 * @param x
 * @desc X座標
 * @type number
 * @max 9999
 * @min -9999
 * @default 0
 * 
 * @param y
 * @desc Y座標
 * @type number
 * @max 9999
 * @min -9999
 * @default 0
 * 
 */

(function() {
    'use strict';
    var pluginName = 'TsumioGatheringSystem';

////=============================================================================
//// Local function
////  These functions checks & formats pluguin's command parameters.
////  I borrowed these functions from Triacontane.Thanks!
////=============================================================================
    var getParamString = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return '';
    };

    var getParamNumber = function(paramNames, min, max) {
        var value = getParamString(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(value) || 0).clamp(min, max);
    };

    //This function is not written by Triacontane.Tsumio wrote this function !
    var convertParam = function(param) {
        if(param !== undefined){
            try {
                return JSON.parse(param);
            }catch(e){
                console.group();
                console.error('%cParameter is invalid ! You should check the following parameter !','background-color: #5174FF');
                console.error('Parameter:' + eval(param));
                console.error('Error message :' + e);
                console.groupEnd();
            }
        }
    };

    //This function is not written by Triacontane.Tsumio wrote this function !
    var convertArrayParam = function(param) {
        if(param !== undefined){
            try {
                const array = JSON.parse(param);
                for(let i = 0; i < array.length; i++) {
                    array[i] = JSON.parse(array[i]);
                }
                return array;
            }catch(e){
                console.group();
                console.error('%cParameter is invalid ! You should check the following parameter !','background-color: #5174FF');
                console.error('Parameter:' + eval(param));
                console.error('Error message :' + e);
                console.groupEnd();
            }
        }
    };

    /**
     * Convert to number.Receive converted JSON object.
     * @param {Object} obj
     * 
     */
    //This function is not written by Triacontane.Tsumio wrote this function !
    var convertToNumber = function(obj) {
        for(var prop in obj) {
            obj[prop] = Number(obj[prop]);
        }
        return obj;
    }

//////=============================================================================
///// 共通の便利関数
/////  
//////=============================================================================

    const convertActionSettings = function(settings) {
        settings.forEach(x => {
            x.iconId = Number(x.iconId);
            x.endurance = Number(x.endurance);
            x.collisionDistance = Number(x.collisionDistance);
            x.correspondItemId = Number(x.correspondItemId);
            x.animationImageIndex = Number(x.animationImageIndex);
            x.animationTimeFrame = Number(x.animationTimeFrame);
            x.consumingStamina = Number(x.consumingStamina);
            x.animSpeed = Number(x.animSpeed);
        });
    };

    //前方を取得する
    const getForwardPosition = function(x, y, dir) {
        return {x:$gameMap.xWithDirection(x, dir),
            y:$gameMap.yWithDirection(y, dir)};
    };

    //aを0、bを1としたときのvalueの値を返す。値は0-1に制限する。
    const inverseLerp = function(a, b, value) {
        let answer = 0;
        if(a != b) {
            answer = (value - a) / (b - a);
        }
        answer = answer > 1 ? 1 : answer;
        answer = answer < 0 ? 0 : answer;

        return answer;
    };

////=============================================================================
//// Get and set pluguin parameters.
////=============================================================================
    var param                          = {};
    //実績取得の設定
    param.addedActionList = getParamString(['追加アクションのリスト', '追加アクションのリスト']);
    param.addedActionList = convertArrayParam(param.addedActionList);
    convertActionSettings(param.addedActionList);
	//通行不能でも収集を許可するリージョンID
    param.canGetheringRegionId = getParamNumber(['通行不能でも収集を許可するリージョンID', '通行不能でも収集を許可するリージョンID']);
    //収集アクションウィンドウのX座標
    param.gatheringActionWindowX = getParamNumber(['収集アクションウィンドウのX座標', '収集アクションウィンドウのX座標']);
    //収集アクションウィンドウのY座標
    param.gatheringActionWindowY = getParamNumber(['収集アクションウィンドウのY座標', '収集アクションウィンドウのY座標']);
    //アイコンのイメージセット
    param.iconImageSet = getParamString(['アイコンのイメージセット', 'アイコンのイメージセット']);
    //アイコンイメージの幅
    param.iconWidth = getParamNumber(['アイコンイメージの幅', 'アイコンイメージの幅']);
    //アイコンイメージの高さ
    param.iconHeight = getParamNumber(['アイコンイメージの高さ', 'アイコンイメージの高さ']);
    //スタミナとして使用する変数番号
    param.staminaVariableId = getParamNumber(['スタミナとして使用する変数番号', 'スタミナとして使用する変数番号']);
    //最大スタミナとして使用する変数番号
    param.maxStaminaVariableId = getParamNumber(['最大スタミナとして使用する変数番号', '最大スタミナとして使用する変数番号']);
    //スタミナゲージの外枠
    param.staminaGaugeFrameName  = getParamString(['スタミナゲージの外枠', 'スタミナゲージの外枠']);
    //スタミナゲージの中身
    param.staminaGaugeContentName  = getParamString(['スタミナゲージの中身', 'スタミナゲージの中身']);
    //スタミナゲージの座標
    param.staminaGaugePos  = getParamString(['スタミナゲージの座標', 'スタミナゲージの座標']);
    param.staminaGaugePos  = convertParam(param.staminaGaugePos);
    param.staminaGaugePos  = convertToNumber(param.staminaGaugePos);
    //アクション不可時に実行するコモンイベント番号
    param.diableStaminaEventId = getParamNumber(['アクション不可時に実行するコモンイベント番号', 'アクション不可時に実行するコモンイベント番号']);
    //採集アニメーションのパターン数
    param.gatheringAnimPatternNum = getParamNumber(['採集アニメーションのパターン数', '採集アニメーションのパターン数']);

//////=============================================================================
///// Scene_Boot
/////  システムイメージに道具のアイコンも予約しておく
//////=============================================================================

    //Note:道具のアイコンも追加しておかないと、最初表示したときに何も表示されなくなる
    const _Scene_Boot_loadSystemImages = Scene_Boot.loadSystemImages;
    Scene_Boot.loadSystemImages = function() {
        _Scene_Boot_loadSystemImages.call(this);
        ImageManager.reserveSystem(param.iconImageSet);
    };

//////=============================================================================
///// Game_Player
/////  アクションを実行する本体
//////=============================================================================

    //メンバを追加
    const _Game_Player_initMembers = Game_Player.prototype.initMembers;
    Game_Player.prototype.initMembers = function() {
        _Game_Player_initMembers.call(this);
        this._gatheringAction = new Game_GatheringAction();
        this._isEnableGatheringSystem = true;
    };

    //収集システムが開始可能かどうか
    Game_Player.prototype.isEnableGatheringSystem = function() {
        return this._isEnableGatheringSystem;
    };

    //行動中は動き不可にする
    const _Game_Player_canMove = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function() {
        const result = _Game_Player_canMove.apply(this, arguments);
        return result && !this.gatheringAction().isActing();
    };

    //アクションのキー入力受付を更新する
    const _Game_Player_update = Game_Player.prototype.update;
    Game_Player.prototype.update = function(sceneActive) {
        this.updateGatheringActions(sceneActive);
        _Game_Player_update.apply(this, arguments);
    };

    //アクションの実態を返す
    Game_Player.prototype.gatheringAction = function() {
        if(!this._gatheringAction) {
            this._gatheringAction = new Game_GatheringAction();
        }
        return this._gatheringAction;
    };

    //アクションを更新する
    Game_Player.prototype.updateGatheringActions = function(sceneActive) {
        if(!this.isEnableGatheringSystem()) {
            return;
        }

        if (sceneActive && this.canMove()) {
            this.gatheringAction().updateInput();
        }
        this.gatheringAction().updateActing();
    };

    //前方を取得する
    Game_Player.prototype.getForwardPosition = function() {
        return getForwardPosition(this.x, this.y, this.direction());
    };

    //収集システムを開始する
    Game_Player.prototype.startGatheringSystem = function() {
        this._isEnableGatheringSystem = true;
    };

    //収集システムを全て停止する
    Game_Player.prototype.stopGatheringSystem = function() {
        this._isEnableGatheringSystem = false;
    };

    //採集スタミナを取得する
    Game_Player.prototype.getGatheringStamina = function() {
        return $gameVariables.value(param.staminaVariableId);
    };

    //採集スタミナをセットする
    Game_Player.prototype.setGatheringStamina = function(value) {
        $gameVariables.setValue(param.staminaVariableId, value);
    };

    //最大採集スタミナを取得する
    Game_Player.prototype.getMaxGatheringStamina = function() {
        return $gameVariables.value(param.maxStaminaVariableId);
    };

    //最大採集スタミナを取得する
    Game_Player.prototype.setMaxGatheringStamina = function(value) {
        $gameVariables.setValue(param.maxStaminaVariableId, value);
        ActionSettings.staminaGaugeSprite.refresh();
    };

    //採集スタミナを回復する。最大値を超えた場合、clampされる
    Game_Player.prototype.recoverGatheringStamina = function(value) {
        const recoverValue = value.clamp(0, this.getMaxGatheringStamina());
        this.setGatheringStamina(recoverValue);
        ActionSettings.staminaGaugeSprite.refresh();
    };

//////=============================================================================
///// Game_CaharacterBase
/////  パターンを採集用に変える
//////=============================================================================

    //パターンの最大値を変更した
    const _Game_CharacterBase_pattern = Game_CharacterBase.prototype.pattern;
    Game_CharacterBase.prototype.pattern = function() {
        if(this.isGatheringActor()) {
            return this._pattern < param.gatheringAnimPatternNum ? this._pattern : 1;
        }else {
            return _Game_CharacterBase_pattern.call(this);
        }
    };

    //収集行動をするべきアクターかどうかを決定する。すなわちPTで1番目のアクター
    Game_CharacterBase.prototype.isGatheringActor = function() {
        return $gamePlayer.gatheringAction().isActing() && $gamePlayer === this;
    };

    //最大パターンを収集時にのみ変える
    const _Game_CharacterBase_maxPattern = Game_CharacterBase.prototype.maxPattern;
    Game_CharacterBase.prototype.maxPattern = function() {
        if(this.isGatheringActor()) {
            return param.gatheringAnimPatternNum;
        }else {
            return _Game_CharacterBase_maxPattern.call(this);
        }
    };

	Game_CharacterBase.prototype.canGathering = function() {
		const x = this.x;
		const y = this.y;
		const d = this.direction();
		const x2 = $gameMap.roundXWithDirection(x, d);
		const y2 = $gameMap.roundYWithDirection(y, d);
		if ($gameMap.regionId(x2, y2) == param.canGetheringRegionId) {
			return true;
		}
		if (!$gameMap.isValid(x2, y2)) {
			return false;
		}
		if (this.isThrough() || this.isDebugThrough()) {
			return true;
		}
		if (!this.isMapPassable(x, y, d)) {
			return false;
		}
		return true;
	};

//////=============================================================================
///// Scene_Map
/////  アクションウィンドウを生成する。ゲージも生成
//////=============================================================================

    //収集ウィンドウを表示するようにする
    const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        this.createGatheringActionWindow();
        this.createGatheringGaugeSprite();
        _Scene_Map_createAllWindows.call(this);
    };

    //収集ウィンドウを実際に生成
    Scene_Map.prototype.createGatheringActionWindow = function() {
        const x = param.gatheringActionWindowX;
        const y = param.gatheringActionWindowY;
        this._gatheringActionWindow = new Window_GatheringAction(x, y, 100, 100);
        this._gatheringActionWindow.refresh();
        this.addWindow(this._gatheringActionWindow);
        ActionSettings.setGatheringActionWindow(this._gatheringActionWindow);
    };

    //収集ゲージを実際に生成する
    Scene_Map.prototype.createGatheringGaugeSprite = function() {
        const x = param.staminaGaugePos.x;
        const y = param.staminaGaugePos.y;
        this._gatheringGaugeSprite = new Sprite_GatheringGauge(x, y);
        this._gatheringGaugeSprite.refresh();
        this.addWindow(this._gatheringGaugeSprite);
        ActionSettings.setStaminaGaugeSprite(this._gatheringGaugeSprite);
    };

//////=============================================================================
///// Game_Map
/////  プレイヤーの前方Xマスを調べる
//////=============================================================================

    //現在装備中の収集アイテムを使って、対象を探す
    Game_Map.prototype.searchGatheringTargetByCurrentItem = function() {
        const currentModel = $gamePlayer.gatheringAction().fetchCurrentModel();
        return this._searchGatheringTarget(currentModel);
    };

    //actionSymbolを使って、対象を探す。引数にはプラグインパラメータで設定したものを渡す。
    Game_Map.prototype._searchGatheringTarget = function(actionModel) {
		if (!$gamePlayer.canGathering()) {return null}
        const forwardPos = $gamePlayer.getForwardPosition();
        const recursionCount = actionModel.collisionDistance;
        const x = forwardPos.x;
        const y = forwardPos.y;
        const targetEvent = this._searchGatheringTargetTo(actionModel, recursionCount, x, y);
        return targetEvent || null;
    };

    //actionModelが反応するイベントが、指定のx座標y座標にあるかどうか調べる
    Game_Map.prototype._searchGatheringTargetTo = function(actionModel, recursionCount, x, y) {
        const targetMeta = actionModel.symbol;
        const coordinateEvents = $gameMap.eventsXy(x, y);
        const targetEvent = coordinateEvents.find(x => x.event().meta[targetMeta]);
        const nextRecursionCount = recursionCount - 1;
        if(targetEvent) {
            return targetEvent;
        }else if(nextRecursionCount > 0) {
            const nextPos = getForwardPosition(x, y, $gamePlayer.direction());
            const nextX = nextPos.x;
            const nextY = nextPos.y;
            return this._searchGatheringTargetTo(actionModel, nextRecursionCount, nextX, nextY) || null;
        }else {
            return null;
        }
    };

//////=============================================================================
///// Window_GatheringAction
/////  現在の収集アクションを示すウィンドウ
//////=============================================================================

    class Window_GatheringAction extends Window_Base {
        constructor(x, y, width, height) {
            super(x, y, width, height);
        }

        update() {
            super.update();
            this.updateVisible();
        }

        updateVisible() {
            if($gamePlayer.isEnableGatheringSystem()) {
                this.visible = true;
            }else {
                this.visible = false;
            }
        }

        refresh() {
            const curerntModel = $gamePlayer.gatheringAction().fetchCurrentModel();
            const countObj = $gamePlayer.gatheringAction().fetchCurrentRemainingCountObj();
            this.contents.clear();
            this._drawCurrentActionIcon(curerntModel.iconId);
            this._drawEndurance(countObj.remainingEnduranceCount);
        }

        /**
         * 現在のアクションのアイコンを描画
         */
        _drawCurrentActionIcon(iconId) {
            //中央に表示
            const x = (this.contentsWidth() - param.iconWidth) / 2;
            const y = (this.contentsHeight() - param.iconHeight) / 2;
            this._drawGatheringIcon(iconId, x, y);
        }

        /**
         * 残りの耐久力を描画
         */
        _drawEndurance(enduranceNum) {
            if(!this._shouldDrawEndurance(enduranceNum)) {
                return;
            }

            const text = String(enduranceNum);
            const x = 0;
            const y = this.contentsHeight() - 33;
            this.drawText(text, x, y, this.contentsWidth(), 'right');
        }

        _shouldDrawEndurance(enduranceNum) {
            return enduranceNum >= 0;
        }

        _drawGatheringIcon(iconIndex, x, y) {
            const bitmap = ImageManager.loadSystem(param.iconImageSet);
            const pw = param.iconWidth;
            const ph = param.iconHeight;
            const sx = iconIndex % 16 * pw;
            const sy = Math.floor(iconIndex / 16) * ph;
            this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
        }
    }

//////=============================================================================
///// Game_GatheringAction
/////  アクションの現在データを返す用のクラス。Game_Playerから参照されることが多い
//////=============================================================================

    class Game_GatheringAction {
        constructor() {
            this._initializeMembers();
            this._refreshCurrentSymbol();
        }

        _initializeMembers() {
            this._currentSymbol = '';
            this._currentIndex = 0;
            this._isActing = false;
            this._actingFrame = 0;
            this._endFrame = 0;
            this._prevAnimationData = null;
            this._initializeRemainingCountList();
        }

        _initializeRemainingCountList() {
            this._remainingCountList = [];
            ActionSettings.actionList.forEach((action, index) => {
                this._remainingCountList.push(new Game_RemainingCount(index, action.correspondItemId, action.endurance));
            });
        }

        /**
         * 現在のシンボルの番号。
         * 0だと何もアクション実行しない。実際のアクションは1から。
         * @return {Number}
         */
        get currentIndex() {
            return this._currentIndex || 0;
        }

        /**
         * 現在のアクションのシンボル名
         * @return {String}
         */
        get currentSymbol() {
            return this._currentSymbol || '';
        }

        /**
         * 残り耐久力のこと。それのリスト
         * @return {Game_RemainingCount[]}
         */
        get remainingCountList() {
            return this._remainingCountList || [];
        }

        updateInput() {
            if(Input.isTriggered('ok')) {
                this.tryInvokeAction();
            }
    
            if(Input.isTriggered('pagedown')) {
                this.setNextAction();
            }else if(Input.isTriggered('pageup')){
                this.setPrevAction();
            }
        }

        updateActing() {
            if(!this.isActing()) {
                return;
            }

            this._actingFrame++;
            if(this._shouldEndAnimation()) {
                this._endAnimation();
            }
        }

        /**
         * 現在アクション中かどうかを示す
         * @return {Boolean}
         */
        isActing() {
            return this._isActing;
        }

        tryInvokeAction() {
            //インデックスチェック
            if(!this._canInvokeAction()) {
                return;
            }
            //スタミナ十分かチェック
            if(!this._hasEnoughStamina()) {
                this._invokeDisableActionEvent();
                return;
            }
            //イベント発火
            const event = $gameMap.searchGatheringTargetByCurrentItem();
            this._invokeAction(event);
        }

        setNextAction() {
            this._currentIndex = (this.currentIndex + 1) % ActionSettings.actionCount;
            this._refreshCurrentSymbol();
            if(this._isActionValid()) {
                this.refreshActionItemWindow();
            }else {
                this.setNextAction();
            }
        }

        setPrevAction() {
            this._currentIndex  = (this.currentIndex + (ActionSettings.actionCount-1)) % ActionSettings.actionCount;
            this._refreshCurrentSymbol();
            if(this._isActionValid()) {
                this.refreshActionItemWindow();
            }else {
                this.setPrevAction();
            }
        }

        /**
         * @return {ActionSettings} 
         */
        fetchCurrentModel() {
            return ActionSettings.fetchActionSetting(this.currentSymbol);
        }

        /**
         * @return {Game_RemainingCount}
         */
        fetchCurrentRemainingCountObj() {
            return this.remainingCountList.find(x => x._symbolIndex === this.currentIndex);
        }

        refreshActionItemWindow() {
            ActionSettings.gatheringActionWindow.refresh();
        }

        /**
         * スタミナが足りないことを示すイベント発火
         */
        _invokeDisableActionEvent() {
            $gameTemp.reserveCommonEvent(param.diableStaminaEventId);
        }

        /**
         * イベント発火
         * @param {Game_Event} event
         */
        _invokeAction(event) {
			const miss = !!!event
            if(event && this._fireSelfSwitchEvent(event)){return}
            this._playSe(miss);
            this._playAnimation();
            this._consumeStamina(miss);
            //アイテムの個数や耐久力を調整
            this._decreaseEnduranceCount(miss);
            this._refreshCurrentSymbol();
            this.refreshActionItemWindow();
            if(!this._isActionValid()) {
                this.setNextAction();
            }
            this._startActing();
            this._refreshGauge();
        }

        /**
         * アクションの開始
         */
        _startActing() {
            this._actingFrame = 0;
            this._isActing = true;
            this._endFrame = this.fetchCurrentModel().animationTimeFrame;
        }

        /**
         * イベントのセルフスイッチを発火する
         * @param {Game_Event} event
         */
        _fireSelfSwitchEvent(event) {
            const selfSwithId = this.fetchCurrentModel().switchId;
            const key = [event._mapId, event._eventId, selfSwithId];
            const selfSwitchValue = $gameSelfSwitches.value(key);
            $gameSelfSwitches.setValue(key, true);
            event.refresh();
			return selfSwitchValue
        }

        _canInvokeAction() {
            return this._currentIndex !== 0;
        }

        _hasEnoughStamina() {
            const hasEnoughStamina = $gamePlayer.getGatheringStamina() >= this.fetchCurrentModel().consumingStamina;
            return hasEnoughStamina;
        }

        /**
         * アクションを選択可能かどうかを返す。
         * 選択不可なときというのは、特定のアイテムを何も持っていない場合。
         */
        _canActionSelected() {
            return ActionSettings.actionList.some(x => {
                const targetItemId = x.correspondItemId;
                const targetItem = $dataItems[targetItemId];
                return $gameParty.hasItem(targetItem, false);
            });
        }

        /**
         * 現在のシンボルを更新する
         */
        _refreshCurrentSymbol() {
            this._currentSymbol = ActionSettings.actionList[this.currentIndex].symbol;
            const remainingCountObj = this.fetchCurrentRemainingCountObj();
            remainingCountObj.adjustEnduranceNum();
        }

        /**
         * 現在のアクションのために使うアイテムを持っているかどうかを判定
         */
        _isActionValid() {
            if(this.currentIndex === 0) {
                return true;
            }

            const actionSetting = ActionSettings.fetchActionSetting(this.currentSymbol);
            if(!actionSetting) {
                return false;
            }

            const targetItemId = actionSetting.correspondItemId;
            const targetItem = $dataItems[targetItemId];
            return $gameParty.hasItem(targetItem, false);
        }

        _decreaseEnduranceCount(miss) {
			if(miss && (!this.fetchCurrentModel().missEndurance || this.fetchCurrentModel().missEndurance == "false")){return}
            const remainingCountObj = this.fetchCurrentRemainingCountObj();
            remainingCountObj.decreaseEnduranceCount();
        }

        _playSe(miss) {
            const model = this.fetchCurrentModel();
			const se = miss ? model.missSe : model.se;
            const seObj = {'name':se, 'volume':100, 'pitch':100, 'pan':0};
            AudioManager.playSe(seObj);
        }

        _playAnimation() {
            const firstMember = $gameParty.members()[0];
            const model = this.fetchCurrentModel();
            const imgName = model.animationImage;
            const imgIndex = model.animationImageIndex;
            const animSpeed = model.animSpeed;
            const walkModelName = firstMember.actor().characterName;
            const gatheringWalkModelName = `${walkModelName}-${imgName}`;
            this._storeAnimationData(firstMember);
            firstMember.setCharacterImage(gatheringWalkModelName, imgIndex);
            //足踏みする
            $gamePlayer._pattern = 0;//Note:resetPatternでは1からになるのでダメ
            $gamePlayer.setMoveSpeed(animSpeed);
            $gamePlayer.setStepAnime(true);
            $gamePlayer.refresh();
        }

        _storeAnimationData(targetMember) {
            const isStepping = $gamePlayer.hasStepAnime();
            const imgName = targetMember.characterName();
            const imgIndex = targetMember.characterIndex();
            const animSpeed = $gamePlayer.moveSpeed();
            this._prevAnimationData = new Game_GatheringAnimation(isStepping, imgName, imgIndex, animSpeed);
        }

        _restoreAnimationData() {
            const firstMember = $gameParty.members()[0];
            const imgName = this._prevAnimationData.imgName;
            const imgIndex = this._prevAnimationData.imgIndex;
            const isStepping = this._prevAnimationData.isStepping;
            const animSpeed = this._prevAnimationData.animSpeed;
            firstMember.setCharacterImage(imgName, imgIndex);
            $gamePlayer.setStepAnime(isStepping);
            $gamePlayer.setMoveSpeed(animSpeed);
            $gamePlayer.refresh();
        }

        _shouldEndAnimation() {
            return this._actingFrame >= this._endFrame;
        }

        _endAnimation() {
            this._isActing = false;
            this._restoreAnimationData();
        }

        _consumeStamina(miss) {
			const m = this.fetchCurrentModel()
			const cosumValue = miss ? m.consumingMissStamina : m.consumingStamina
            const nextStamina = $gamePlayer.getGatheringStamina() - cosumValue;
            $gamePlayer.setGatheringStamina(nextStamina);
        }

        _refreshGauge() {
            ActionSettings.staminaGaugeSprite.refresh();
        }
    }
    window[Game_GatheringAction.name] = Game_GatheringAction;

//////=============================================================================
///// Game_GatheringAnimation
/////  アニメーション用のデータを保持するクラス
//////=============================================================================

    class Game_GatheringAnimation {
        constructor(isStepping, imgName, imgIndex, animSpeed) {
            this._isStepping = isStepping || false;
            this._imgName = imgName || '';
            this._imgIndex = imgIndex || 0;
            this._animSpeed = animSpeed || 3;
        }

        get isStepping() {
            return this._isStepping;
        }

        get imgName() {
            return this._imgName;
        }

        get imgIndex() {
            return this._imgIndex;
        }

        get animSpeed() {
            return this._animSpeed;
        }
    }
    window[Game_GatheringAnimation.name] = Game_GatheringAnimation;

//////=============================================================================
///// Game_RemainingCount
/////  残り使用回数を保存するためのクラス
//////=============================================================================

    class Game_RemainingCount {
        constructor(index, itemId, maxEnduranceCount) {
            this._symbolIndex = index;
            this._itemId = itemId;
            this.MAX_ENDURANCE_COUNT = maxEnduranceCount;
            this._remainingEnduranceCount = maxEnduranceCount;
            this._prevItemCount = 0;
        }

        /**
         * 対象アイテム
         * @return {RPG.Item}
         */
        get item() {
            return $dataItems[this._itemId];
        }

        /**
         * 残りの耐久力
         * @return {Number}
         */
        get remainingEnduranceCount() {
            return this._remainingEnduranceCount;
        }

        /**
         * 残りの耐久力を1下げる
         */
        decreaseEnduranceCount() {
            this.adjustEnduranceNum();
            this._remainingEnduranceCount--;
            this._tryDiscardItem();
        }

        /**
         * アイテムの数が減ってるか増えてるかチェックして、残り回数を調整する
         */
        adjustEnduranceNum() {
            const realItemCount = $gameParty.numItems(this.item);
            const diff = realItemCount - this._prevItemCount;
            const isItemLosted = diff < 0;
            if(isItemLosted) {
                this._remainingEnduranceCount = this.MAX_ENDURANCE_COUNT;
            }
            this._prevItemCount = $gameParty.numItems(this.item);
        }

        /**
         * 耐久力が0以下になっていればアイテムを捨てようとする
         */
        _tryDiscardItem() {
            if(this._remainingEnduranceCount <= 0 && ActionSettings.INFINITE_NUM !== this.MAX_ENDURANCE_COUNT) {
                this._discardItem();
            }
        }

        /**
         * 耐久力が0になっていればアイテムを捨てる
         */
        _discardItem() {
            $gameParty.loseItem(this.item, 1, false);
            this.adjustEnduranceNum();
        }
    }
    window[Game_RemainingCount.name] = Game_RemainingCount;

//////=============================================================================
///// Sprite_GatheringGauge
/////  収集システムのゲージ用スプライト
//////=============================================================================

    class Sprite_GatheringGauge extends Sprite{
        /**
         * @param {Number} x
         * @param {Number} y
         */
        constructor(x, y) {
            super(null);
            this._initializeMembers();
            this._initializePosition(x, y);
            this._createDisplayObjects();
        }

        /**
         * 枠の最大幅。要はフレームの幅を返す
         * @return {Number}
         */
        get maxWidth() {
            return this._frameSprite.width;
        }

        _initializeMembers() {
            this._frameSprite = null;
            this._contentSprite = null;
        }

        _initializePosition(x, y) {
            this.position.set(x, y);
        }

        /**
         * 表示オブジェクトを一括生成
         */
        _createDisplayObjects() {
            this._createFrameSprite();
            this._createContentSprite();
        }

        /**
         * 枠スプライトを生成
         */
        _createFrameSprite() {
            const bitmap = ImageManager.loadPicture(param.staminaGaugeFrameName);
            this._frameSprite = new Sprite(bitmap);
            this.addChild(this._frameSprite);
        }

        /**
         * 中身スプライトを生成
         */
        _createContentSprite() {
            const bitmap = ImageManager.loadPicture(param.staminaGaugeContentName);
            this._contentSprite = new Sprite(bitmap);
            this._frameSprite.addChild(this._contentSprite);
            //Note:ビットマップロード完了後、リフレッシュしておく。
            //     こうしないと、ロード時にwidthが取得できず、リフレッシュを正常に実行できない。
            //     不細工だが、これが最も単純かつ軽い書き方。
            bitmap.addLoadListener(() => {
                this._frameSprite.bitmap.addLoadListener(() => {
                    this.refresh();
                });
            });
        }

        update() {
            super.update();
            this.updateVisible();
        }

        updateVisible() {
            if($gamePlayer.isEnableGatheringSystem()) {
                this.visible = true;
            }else {
                this.visible = false;
            }
        }

        /**
         * ゲージを更新する
         */
        refresh() {
            this._refreshContentWidth();
        }

        /**
         * 中身の幅を適切に調整する
         */
        _refreshContentWidth() {
            this._contentSprite.width = this._calculateContentWidth();
        }

        /**
         * 最大スタミナと現在スタミナから、中身の幅を計算して返す。
         * 幅は右から左に減る。
         * @return {Number}
         */
        _calculateContentWidth() {
            const maxStamina = $gamePlayer.getMaxGatheringStamina();
            const currentStamina = $gamePlayer.getGatheringStamina();
            const maxWidth = this.maxWidth;
            const point = inverseLerp(0, maxStamina, currentStamina);
            const contentWidth = maxWidth * point;
            return contentWidth;
        }
    }

//////=============================================================================
///// ActionSettings
/////  各アクションを表すクラス。主に補完用
//////=============================================================================

    class ActionSettings {
        /**
         * 一致するシンボルのアクションを返す
         * @param {String} symbol
         * @return {ActionSettings} 一致するシンボルのアクション
         */
        static fetchActionSetting(symbol) {
            return param.addedActionList.find(x => x.symbol === symbol);
        }

        /**
         * アクションリストの合計数を返す
         * @return {Number}
         */
        static get actionCount() {
            return param.addedActionList.length;
        }

        /**
         * アクションのリストを返す
         * @return {ActionSettings[]}
         */
        static get actionList() {
            return param.addedActionList;
        }

        /**
         * 収集アクションのウィンドウを返却
         * @return {Window_GatheringAction}
         **/
        static get gatheringActionWindow() {
            return this._gatheringActionWindow || null;
        }

        /**
         * 収集アクションのウィンドウをセット
         * @param {Window_GatheringAction} symbol
         **/
        static setGatheringActionWindow(window) {
            this._gatheringActionWindow = window;
        }

        /**
         * スタミナゲージのスプライト
         * @return {Sprite_GatheringGauge}
         */
        static get staminaGaugeSprite() {
            return this._staminaGaugeSprite || null;
        }

        /**
         * スタミナゲージのスプライトをセット
         * @param {Sprite_GatheringGauge} sprite
         */
        static setStaminaGaugeSprite(sprite) {
            this._staminaGaugeSprite = sprite;
        }

        /**
         * -999を無限として扱う
         */
        static get INFINITE_NUM() {
            return -999;
        }

        /**
         * アクション名（イベントのメモタグで使用）。重複不可。
         * @return {String} 
         */
        get symbol() {
            return null;
        }

        /**
         * ONにするセルフスイッチの番号。A,B,C,Dのいずれかを指定。
         * @return {String} 
         */
        get switchId() {
            return null;
        }

        /**
         * 画面上部に表示するアクション用のアイコン番号
         * @return {Number} 
         */
        get iconId() {
            return null;
        }

        /**
         * アクション時に再生するSE名
         * @return {String} 
         */
        get se() {
            return null;
        }

        /**
         * 耐久力（使用可能回数）。負の値を指定した場合、壊れない。
         * @return {Number} 
         */
        get endurance() {
            return null;
        }

        /**
         * 当たり判定のマス目。例えば3を指定すると3マス先まで当たる。
         * @return {Number} 
         */
        get collisionDistance() {
            return null;
        }

        /**
         * 対応するアイテムID.
         * プレイヤーがこのアイテムを保持していない場合、アクションは実行されない。
         * @return {Number} 
         */
        get correspondItemId() {
            return null;
        }

        /**
         * アニメーションに使用するイメージの名前
         * @return {String}
         */
        get animationImage() {
            return null;
        }

        /**
         * アニメーションに使用するイメージのインデックス
         * @return {Number}
         */
        get animationImageIndex() {
            return null;
        }

        /**
         * アニメーションの再生フレーム数
         * @return {Number}
         */
        get animationTimeFrame() {
            return null;
        }

        /**
         * 消費スタミナ量
         * @return {Number}
         */
        get consumingStamina() {
            return null;
        }

        /**
         * アニメーションの速度
         * @return {Number}
         */
        get animSpeed() {
            return null;
        }
    }

})();