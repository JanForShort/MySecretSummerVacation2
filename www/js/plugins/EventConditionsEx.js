// EventConditionsEx.js Ver.1.0.1
// MIT License (C) 2022 あわやまたな
// http://opensource.org/licenses/mit-license.php

/*:
* @target MZ MV
* @plugindesc 出現条件をより細かく設定可能になります。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/
* @help [出現条件]
* (1) パラメータで設定したスイッチを出現条件に指定します。
* (2) パラメータで設定したラベル名をラベルジャンプとラベルに設定します。
* (3) (2)のラベルジャンプとラベルの間に出現条件を設定します。
*
* ◆注釈：true に到達すると出現条件を満たします。
* ◆注釈：false に到達すると出現条件を満たしません。
* ◆注釈：true に到達しなかった場合も出現条件を満たしません。
* マップイベント、バトルイベントに使用できます。
*
* [スクリプト]
* this.return(true/false); //注釈と同じ扱いです。
*
* [更新履歴]
* 2022/11/13：Ver.1.0.0　公開
* 2022/11/21：Ver.1.0.1　メソッド名変更。
*
* @param labelOfConditions
* @text ラベル名
* @desc 出現条件に利用するラベル名です。
* この名前のラベルジャンプとラベルで出現条件を囲みます。
* @default 出現条件
*
* @param switchId
* @text スイッチID
* @desc 出現条件でこのスイッチを指定した場合、特殊な出現条件を設定可能にします。
* @type switch
* @default 1
*
* @param enableTimerRefresh
* @text タイマーのリフレッシュ有効
* @desc タイマーの数値が変化した瞬間にマップをリフレッシュします。
* これによってタイマーを出現条件に利用する事ができます。
* @type boolean
* @default true
*
*/

'use strict';

{
	const useMZ = Utils.RPGMAKER_NAME === "MZ";
	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	const hasPluginCommonBase = typeof PluginManagerEx === "function";
	const parameters = PluginManager.parameters(pluginName);
	const switchId = Number(parameters["switchId"]);
	const labelOfConditions = parameters["labelOfConditions"];
	const enableTimerRefresh = parameters["enableTimerRefresh"] === "true";

	//-----------------------------------------------------------------------------
	// Game_EventConditionsEx

	function Game_EventConditionsEx() {
	    this.initialize(...arguments);
	}

	Game_EventConditionsEx.prototype = Object.create(Game_Interpreter.prototype);
	Game_EventConditionsEx.prototype.constructor = Game_EventConditionsEx;

	Game_EventConditionsEx.prototype.clear = function() {
		Game_Interpreter.prototype.clear.call(this);
		this._result = false;
	};

	Game_EventConditionsEx.prototype.return = function(value) {
		this._result = value;
		return this.command115();
	};

	Game_EventConditionsEx.prototype.updateWaitCount = function() {
		return false;
	};

	Game_EventConditionsEx.prototype.updateWaitMode = function() {
		return false;
	};

	Game_EventConditionsEx.prototype.command108 = function(params = this._params) {
		const bool = params[0];
		if (bool === "true" || bool === "false") {
			return this.return(bool === "true");
		}
		return Game_Interpreter.prototype.command108.call(this, params);
	};

	//-----------------------------------------------------------------------------
	// Game_Event

	const _Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
	Game_Event.prototype.meetsConditions = function(page) {
		const c = page.conditions;
		if ((c.switch1Valid && c.switch1Id === switchId) || (c.switch2Valid && c.switch2Id === switchId)) {
			meetsConditionsEx.call(this, page);
		}
		return _Game_Event_meetsConditions.call(this, page);
	};

	//-----------------------------------------------------------------------------
	// Game_Troop

	const _Game_Troop_meetsConditions = Game_Troop.prototype.meetsConditions;
	Game_Troop.prototype.meetsConditions = function(page) {
		const c = page.conditions;
		if (c.switchValid && c.switchId) {
			meetsConditionsEx.call(this, page);
		}
		return _Game_Troop_meetsConditions.call(this, page);
	};

	//-----------------------------------------------------------------------------
	// MeetsConditionsEx

	const interpreter = new Game_EventConditionsEx();
	function meetsConditionsEx(page) {
		if (!page.conditionsEx) {
			createConditionsEx.call(this, page);
		}
		const value = analyzesConditionsEx.call(this, page);
		$gameSwitches.setValue(switchId, value);
	}

	function createConditionsEx(page) {
		const list = page.list;
		const startIndex = findListIndex(list, 119);
		const endIndex = findListIndex(list, 118, startIndex);
		if (startIndex < endIndex) {
			page.conditionsEx = list.slice(startIndex + 1, endIndex);
		} else {
			page.conditionsEx = [];
		}
	}
	function analyzesConditionsEx(page) {
		const list = page.conditionsEx;
		interpreter.setup(list, this._eventId);
		while (interpreter.isRunning()) {
			interpreter.update();
		}
		return interpreter._result;
	}

	function findListIndex(list, code, startIndex = 0) {
		if (startIndex === -1) return -1;
		for (let i = startIndex; i < list.length; i++) {
			const command = list[i];
			if (command.code === code && command.parameters[0] === labelOfConditions) {
				return i;
			}
		}
		return -1
	}

	//-----------------------------------------------------------------------------
	// Game_Timer

	if (enableTimerRefresh) {

		const _Game_Timer_initialize = Game_Timer.prototype.initialize;
		Game_Timer.prototype.initialize = function() {
			_Game_Timer_initialize.call(this);
			this._lastSeconds = 0;
		};

		const _Game_Timer_start = Game_Timer.prototype.start;
		Game_Timer.prototype.start = function(count) {
			_Game_Timer_start.call(this, count);
			$gameMap.requestRefresh();
		};

		const _Game_Timer_stop = Game_Timer.prototype.stop;
		Game_Timer.prototype.stop = function() {
			_Game_Timer_stop.call(this);
			$gameMap.requestRefresh();
		};

		const _Game_Timer_update = Game_Timer.prototype.update;
		Game_Timer.prototype.update = function(sceneActive) {
			const lastFrames = this._frames;
			_Game_Timer_update.call(this, sceneActive);
			if (sceneActive && this._working) {
				const sec = $gameTimer.seconds();
				if (sec !== this._lastSeconds || lastFrames !== this._frames && this._frames === 0) {
					$gameMap.requestRefresh();
				}
				this._lastSeconds = sec;
			}
		};
	}

}