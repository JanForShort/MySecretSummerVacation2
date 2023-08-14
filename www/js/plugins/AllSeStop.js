
//=============================================================================
// AllSeStop.js
// Copyright (c) 2020- 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc 一度に多くのSEを再生した際に一部のSEに停止が効かない不具合を修正するプラグインです。
 * @author 村人Ａ
 *
 * @help
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * 更新履歴
 * 
 * 21/02/09 ver 1.0 リリース
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
*/

{
	'use strict';

	AudioManager._seAllBuffers = [];

	const _alias_AudioManager_stopSe = AudioManager.stopSe;
	AudioManager.stopSe = function () {
		_alias_AudioManager_stopSe.call(this);
		this._seAllBuffers.forEach(function (buffer) {
			buffer.stop();
		});
		this._seAllBuffers = [];
	};

	const _alias_AudioManager_playSe = AudioManager.playSe;
	AudioManager.playSe = function (se) {
		_alias_AudioManager_playSe.call(this, se)
		if (se.name) {
			this._seAllBuffers.push(this._seBuffers[0]);
		}
	};
}