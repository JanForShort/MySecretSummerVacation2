//=============================================================================
// ChangePlayerCharacter.js
//=============================================================================

/*:ja
 * @plugindesc プレイヤーキャラクターを指定したボタンで変更し、その際に指定したコモンイベントを入れます。
 * @author 村人A
 *
 * @param banSwitchId
 * @text 切り替え禁止スイッチID
 * @desc プレイヤーキャラクターの切り替えを許可・禁止するスイッチIDを指定します。
 * @default 6
 *
 * @param changeCommonId
 * @text 切り替え時コモンイベントID
 * @desc プレイヤーキャラクターの切り替えを許可・禁止するスイッチIDを指定します。
 * @default 3
 *
 */
{
	'use strict'

	const param = PluginManager.parameters('ChangePlayerCharacter');
	const banSwitchId = Number(param.banSwitchId);
	const changeCommonId = Number(param.changeCommonId);

	Game_Party.prototype.toggleSwapOrder = function () {
		let tempActorArr = [];
		for (let i = 1, n = this._actors.length; i < n; i++) {
			tempActorArr.push(this._actors[i])
		}
		tempActorArr.push(this._actors[0])
		this._actors = tempActorArr;
		$gamePlayer.refresh();
	};

	const _alias_Scene_Map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function () {
		_alias_Scene_Map_update.call(this)
		this.updateCheckChangePlayerCharacter();
	}

	Scene_Map.prototype.updateCheckChangePlayerCharacter = function () {
		if ($gameSwitches.value(banSwitchId) && Input.isTriggered('pageup')) {
			$gameTemp.reserveCommonEvent(changeCommonId)
			$gameParty.toggleSwapOrder();
		}
	}
}