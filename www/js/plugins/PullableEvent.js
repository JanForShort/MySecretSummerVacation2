//=============================================================================
// イベント引っ張りプラグイン
// PullableEvent.js
// Copyright (c) 2020- 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc イベントメモ欄に<canPull:SE名>の記載があるイベントは引っ張れるようになります。
 * @author 村人A
 *
 * @help
 * 
 * ＊このプラグインは冬空橙様専用に製作されたプラグインです。
 * ＊著作者に無断での使用を禁止します。
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * バージョン情報
 *
 * 20/05/22 バージョン1.1 リリース
 *          イベントが正常に起動しない不具合を修正しました。
 *          いずれかのセルフスイッチがONの際に引っ張る・押す動作を中断するようにしました。
 *          イベントを押せるようにしました。
 * 20/05/20 バージョン1.0 リリース
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * イベントのメモ欄に
 * 
 * <canPull:SE名>
 * 
 * の記述のあるイベントはイベント前で決定ボタンを押して反対へ移動すると引っ張るこ
 * とが出来るようになります。
 * ＳＥ名の箇所には引っ張った際に再生するＳＥを入れてください。
 * 例えばEarth4を引っ張った際に再生する場合は
 * 
 * <canPull:Earth4>
 * 
 * と記述してください。
 * 隊列歩行をしている場合は隊列がプレイヤーに重なり、１つとなって移動します。
 * 引っ張る際の移動速度はプラグインパラメータにて設定可能です。
 * 
 * @param 引っ張る際の移動速度
 * @desc イベントを引っ張る際のプレイヤーとイベントの移動速度を指定します。数値はイベントの速度と同等です。
 * @default 3
 * @type Number
 * @min 1
 * @max 7
 * 
 * @param 引っ張り機能をONにするスイッチ
 * @type switch
 * @default 1
 * 
 */

{
	'use strict';
	
    const parameters     = PluginManager.parameters('PullableEvent');
    const pullingSpeed   = Number(parameters['引っ張る際の移動速度']);
    const pullOnSwitchId = Number(parameters['引っ張り機能をONにするスイッチ']);
		
	//-----------------------------------------------------------------------------
	// Game_Player
	//

	const _alias_Game_Player_executeMove = Game_Player.prototype.executeMove;
	Game_Player.prototype.executeMove = function(direction) {
		if($gameSwitches.value(pullOnSwitchId) && this.isPulling){
			if(this.areFollowersGathering()){return};
			let canPass = false
			if(!this.pullingEvent){throw new Error("引っ張るイベントが不正です。村人Ａまでご報告ください。")}
			const ev = this.pullingEvent
			if(direction == this.reverseDir(this.direction())){canPass = this.canPass(this.x, this.y, direction)}
			if(direction == this.direction()){canPass = ev.canPass(ev.x, ev.y, direction)}
			if(!canPass){return}
			ev.moveStraight(direction)
			this._followers.forEach(follower => follower.moveStraight(direction));
			AudioManager.playSe({"name":this.pullingSe,"volume":100,"pitch":100,"pan":0})
		}
		_alias_Game_Player_executeMove.call(this, direction);
	};
		
	const _alias_Game_Player_updateDashing = Game_Player.prototype.updateDashing;
	Game_Player.prototype.updateDashing = function() {
		if(this.isPulling){return}
		_alias_Game_Player_updateDashing.call(this);
	}
	
	Game_Player.prototype.setEventPulling = function(event) {
		this.isPulling = true;
		this._dashing = false
		this.pullingEvent = event;
		this.setDirectionFix(true);
		this.setMoveSpeed(pullingSpeed);
		this._followers.forEach(follower => {
			follower.setDirection(this.direction());
			follower.setDirectionFix(true);
		});
	}
	
	Game_Player.prototype.finishEventPulling = function(preSpeed) {
		this.setDirectionFix(false);
		this._followers.forEach(follower => follower.setDirectionFix(false));
		this.isPulling = false;
		this.pullingEvent = null;
		this.setMoveSpeed(preSpeed);
	}
	
	//-----------------------------------------------------------------------------
	// Game_Follower
	//

	const _alias_Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
	Game_Follower.prototype.chaseCharacter = function(character) {
		if($gamePlayer.isPulling){return}
		_alias_Game_Follower_chaseCharacter.call(this, character)
	}

	//-----------------------------------------------------------------------------
	// Game_Event
	//

	const _alias_Game_Event_canPass = Game_Event.prototype.canPass;
	Game_Event.prototype.canPass = function(x, y, d) {
		if(this.isPulling && d != $gamePlayer.direction()){return true}
		return _alias_Game_Event_canPass.call(this, x, y, d)
	}
	
	const _alias_Game_Event_initMembers = Game_Event.prototype.initMembers;
	Game_Event.prototype.initMembers = function() {
		_alias_Game_Event_initMembers.call(this);
		this.isPulling = false;
		this.pullingGather = false;
	}
	
	const _alias_Game_Event_start = Game_Event.prototype.start
	Game_Event.prototype.start = function() {
		const anySelfSwidth = ["A","B","C","D"].some(c => $gameSelfSwitches.value([this._mapId, this._eventId, c]))
		if($gameSwitches.value(pullOnSwitchId) && !anySelfSwidth && this.event() && this.event().meta && 
		(this.event().meta.canPull || this.event().meta.canPull == "")){
			$gamePlayer.gatherFollowers();
			this.isPulling = true;
			this.pullingGather = true
			const seName = this.event().meta.canPull.toString();
			const setSeName = seName == "true" ? "" : seName;
			$gamePlayer.pullingSe = setSeName;
			return;
		}
		_alias_Game_Event_start.call(this);
	}

	const _alias_Game_Event_update = Game_Event.prototype.update;
	Game_Event.prototype.update = function() {
		if(this.isPulling){
			if($gamePlayer.areFollowersGathering()){return};
			if(this.pullingGather){
				this.prePullingMoveSpeed = [this.moveSpeed(), $gamePlayer.moveSpeed()];
				this.setMoveSpeed(pullingSpeed);
				$gamePlayer.setEventPulling(this);
				this.pullingGather = false
			}
			Game_Character.prototype.update.call(this);
			this.updatePulling();
		} else {
			_alias_Game_Event_update.call(this);
		}
	}
	
	Game_Event.prototype.updatePulling = function() {
		const anySelfSwidth = ["A","B","C","D"].some(c => $gameSelfSwitches.value([this._mapId, this._eventId, c]))
		if(anySelfSwidth || (!this.isMoving() && !Input.isPressed('ok') && !TouchInput.isPressed())){
			$gamePlayer.finishEventPulling(this.prePullingMoveSpeed[1]);
			this.isPulling = false;
			this.setMoveSpeed(this.prePullingMoveSpeed[0]);
		}
	}
	
}
	