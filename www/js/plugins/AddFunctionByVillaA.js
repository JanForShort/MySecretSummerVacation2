//=============================================================================
// AddFunctionByVillaA.js
//=============================================================================

/*:ja
 * @plugindesc 諸プラグインへの機能追加を提供するプラグインです。
 * @author 村人A
 * 
 * @help
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * バージョン情報
 * 
 * 23/01/24 バージョン1.3　 不具合修正
 * 23/01/13 バージョン1.2　 茂みを考慮
 * 23/01/09 バージョン1.1　 不具合修正
 * 23/01/08 バージョン1.0　 試作品リリース
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * ＊このプラグインはTsumioGatheringSystem.jsよりも下に配置してください。
 * 
 * TsumioGatheringSystem.jsに追加した機能をまとめたプラグインです。
 * プラグイン導入初期にプラグインパラメータにて使用する変数とコモンイベントを設定
 * してください。
 * サンプルプロジェクトのコモンイベント４がガジェット変更時のコモンイベントとしま
 * した。
 * 取得した変数によって条件分岐としております。
 * 
 * 23/01/08現在このプラグインにて実装してる機能は
 * 
 * ・弓等の投擲機能
 * ・弓の連射機能
 * ・ガジェット変更時のコモにベント実行と変数代入
 * ・ガジェットの当たり判定範囲化
 * ・下方向への収集動作のキャラチップの位置調整
 * 
 * となります。
 * 
 * ガジェットの当たり判定について、範囲を指定する箇所はTsumioGatheringSystem.jsの
 * プラグインパラメータ「追加アクションのリスト」のcollisionDistanceにて指定する
 * のは変わりありませんが、指定方法が変わりました。
 * これまでと同様に1~4マスに当たり判定をつけたい場合は「4」と記述すればそのように
 * なります。
 * 2マス目のみや2~3マス目に当たり判定を設けたい場合は「開始マス目,終了マス目」で
 * 指定してください。
 * 例えば2~3マス目に当たり判定をつけたい場合は「2,3」と記述し、２マス目のみに当た
 * り判定をつけたい場合は「2,2」と記述してください。
 * 
 * 収集動作でストップさせたい場合はTsumioGatheringSystem.jsのプラグインパラメータ
 * 「追加アクションのリスト」のwaitPatternNumにてパターン番号を指定してください。
 * パターン番号は左から0,1,2…と続きます。
 * 動作途中で止まる必要がない場合は-1と指定してください。
 * パターン途中で止めた場合は実行するイベントの最後にスクリプトで
 * 
 * $gamePlayer.isStopGatheringAction = false
 * 
 * と記述してください。
 * サンプルプロジェクトの魚影のイベントにサンプルがあります。
 * このスクリプトが実行された際にプレイヤーのパターンストップが解除されます。
 * パターンのストップの仕方に柔軟性を持たせるために現在の仕様にしましたが、それぞ
 * れのイベントに記述するのは大変ですのでコモンイベントなどにしてください。
 * このスクリプトの記述がない場合はパターンがそのままになってしまいます。
 * 
 * 
 * 
 * @param n2
 * @text ガジェット変更時コモンイベント
 * @desc ガジェット変更時に実行するコモンイベントのIDを指定します。
 * @type number
 * @default 4
 *
 * @param n3
 * @text ガジェット判定用変数
 * @desc 現在選択しているガジェットの番号を代入する変数のIDを指定します。
 * @type number
 * @default 5
 *
 * 
 * 
 * 
 * 
 * 
 * 
 */

{
	'use strict'

	String.prototype.toNumArray = function () {
		return this.split(',').map(str => Number(str));
	}

	const t_param = PluginManager.parameters('TsumioGatheringSystem');
	if (!t_param) { throw new Error("AddFunctionByVillaAをTsumioGatheringSystemよりも下部に配置してください。") }
	let collisionDistance = {};
	let waitPatternNum = {};
	JSON.parse(t_param['追加アクションのリスト']).map(str => JSON.parse(str)).forEach(obj => {
		collisionDistance[obj.symbol] = obj.collisionDistance
		waitPatternNum[obj.symbol] = Number(obj.waitPatternNum)
	})

	const param = PluginManager.parameters('AddFunctionByVillaA');
	let _ = {};
	Object.keys(param).forEach(key => {
		if (key[0] == "n" && key[1] == "a") {
			_[key] = param[key].toNumArray();
		} else if (key[0] == "n") {
			_[key] = Number(param[key]);
		} else if (key[0] == "s" && key[1] == "a" && key[2] == "a") {
			_[key] = JSON.parse(param[key]).map(str => str.split(','));
		} else if (key[0] == "s" && key[1] == "a") {
			_[key] = JSON.parse(param[key]);
		} else if (key[0] == "s") {
			_[key] = param[key];
		} else if (key[0] == "a") {
			_[key] = param[key].toAudioParam();
		}
	})

	//-----------------------------------------------------------------------------
	// Game_CharacterBase
	//

	const _alias_Game_CharacterBase_pattern = Game_CharacterBase.prototype.pattern;
	Game_CharacterBase.prototype.pattern = function () {
		if (this.isGatheringActor() && this.isStopGatheringAction == 1 && this._pattern == $gamePlayer.waitPatternNum) {
			this.isStopGatheringAction = 2
		}
		return _alias_Game_CharacterBase_pattern.call(this);
	};

	const _alias_Game_CharacterBase_updateAnimationCount = Game_CharacterBase.prototype.updateAnimationCount;
	Game_CharacterBase.prototype.updateAnimationCount = function () {
		if (this == $gamePlayer && this.isStopGatheringAction == 2) { return }
		_alias_Game_CharacterBase_updateAnimationCount.call(this);
	};

	//-----------------------------------------------------------------------------
	// Game_Player
	//

	Game_Player.prototype.addFunctionToGetheringAction = function () {
		const _this = this._gatheringAction
		_this._setThrowObject = () => {
			const m = _this.fetchCurrentModel();
			$gameMap.setMovingObjects(m.throwImage.split(','), m.collisionDistance);
		}
		const _alias_Game_GatheringAction_invokeAction = _this._invokeAction
		_this._invokeAction = (event) => {
			_this.onAction = true;
			if (_this.fetchCurrentModel().throwImage) {
				_this._setThrowObject();
			}
			_alias_Game_GatheringAction_invokeAction.call(_this, event);
			_this.onAction = false;
		}
		const _alias_Game_GatheringAction_shouldEndAnimation = _this._shouldEndAnimation
		_this._shouldEndAnimation = () => {
			if ($gamePlayer.isStopGatheringAction == 2) { return false }
			return _alias_Game_GatheringAction_shouldEndAnimation.call(_this)
		}
		const _alias_Game_GatheringAction_refreshActionItemWindow = _this.refreshActionItemWindow
		_this.refreshActionItemWindow = () => {
			_alias_Game_GatheringAction_refreshActionItemWindow.call(_this);
			//23/01/24 追記
			if (!_this.onAction) {
				$gameVariables.setValue(_.n3, _this._currentIndex)
				$gameTemp.reserveCommonEvent(_.n2);
			}
		}
		const _alias_Game_GatheringAction_startActing = _this._startActing
		_this._startActing = () => {
			_alias_Game_GatheringAction_startActing.call(_this);
			if (~["弓矢"].indexOf(_this._currentSymbol)) { this._isActing = false };
		}
		this._gatheringAction.isAddedFunction = true
	}

	const _alias_Game_Player_initMembers = Game_Player.prototype.initMembers;
	Game_Player.prototype.initMembers = function () {
		_alias_Game_Player_initMembers.call(this);
		this.addFunctionToGetheringAction();
	}

	//23/02/02 ロード後に追加機能が無効になる点への対策
	const _alias_Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
	Scene_Load.prototype.onLoadSuccess = function () {
		_alias_Scene_Load_onLoadSuccess.call(this)
		$gamePlayer.addFunctionToGetheringAction();
	}

	const getForwardPosition = function (x, y, dir) {
		return {
			x: $gameMap.xWithDirection(x, dir),
			y: $gameMap.yWithDirection(y, dir)
		};
	};

	//-----------------------------------------------------------------------------
	// Game_Map
	//

	Game_Map.prototype._searchGatheringTarget = function (actionModel) {
		if (!$gamePlayer.canGathering()) { return null }
		$gamePlayer.waitPatternNum = waitPatternNum[actionModel.symbol];
		const forwardPos = $gamePlayer.getForwardPosition();
		const range = ~collisionDistance[actionModel.symbol].indexOf(",") ? collisionDistance[actionModel.symbol].toNumArray() : [1, Number(collisionDistance[actionModel.symbol])];
		let x = forwardPos.x;
		let y = forwardPos.y;
		let count = 1;
		let targetEvent;
		while (count <= range[1]) {
			targetEvent = $gameMap.eventsXy(x, y).find(ev => ev.event().meta[actionModel.symbol]);
			if (count >= range[0] && targetEvent) {
				break;
			} else {
				const nextPos = getForwardPosition(x, y, $gamePlayer.direction());
				x = nextPos.x;
				y = nextPos.y;
				count++;
			}
		}
		$gamePlayer.isStopGatheringAction = !!targetEvent ? 1 : 0;
		return targetEvent;
	};

	Game_Actor.prototype.setCharacterImage = function (characterName, characterIndex) {
		console.log(this._characterName, characterName)
		//if(this._characterName == "$00_player-eda" && characterName == "$00_player_eda"){throw new Error("a")}
		this._characterName = characterName;
		this._characterIndex = characterIndex;
	};
	//-----------------------------------------------------------------------------
	// Sprite_Character
	//

	const _alias_Sprite_Character_updateFrame = Sprite_Character.prototype.updateFrame;
	Sprite_Character.prototype.updateFrame = function () {
		if (this._character == $gamePlayer) {
			let anchorY = 1;
			if (this._character.isGatheringActor() && this._character.direction() == 2) {
				const d = (this._isBigCharacter ? 192 : 384) - this._bushDepth * 3;
				anchorY = d / this.bitmap.height;
			}
			this.anchor.y = anchorY;
			if (this._upperBody && this._bushDepth > 0) {
				this._upperBody.anchor.y = anchorY;
				this._lowerBody.anchor.y = anchorY;
			}
		}
		_alias_Sprite_Character_updateFrame.call(this);
	}
}