//21/11/08更新

/**
!警告!

このプログラムは著作権法によって保護されています。
このプログラムの一部または全部を無断で複製すると著作権侵害となり刑事罰を受ける可能性があります。

このプログラムの著作権及び使用権は「村人A」及び「(株)PROGRESS Plus」に帰属します。
無断での複製、解析、その他、当方の権利を侵害する一切の行為を禁止します。
無断で使用した場合、Live2D社の権利を侵害する可能性もあります。
権利侵害が確認された場合、法的措置を執ります。

また、当プログラムの一部もしくは全部を複製、あるいは解析利用し、
無断使用した場合、「村人A」及び「(株)PROGRESS Plus」に対して
下記の使用料の支払いに同意したものとします。

①一部、もしくは全部を配布した場合
　1ダウンロードにつき、100万円
　印刷等、物理的に配布した場合も
　1部につき、100万円

②一部、もしくは全部を閲覧可能にした場合
　1閲覧につき、50万円

③一部もしくは全部を複製、あるいは解析利用し
　ソフトウェア等に組み込んだ場合、
　1件につき、1000万円

④一部もしくは全部を複製、あるいは解析利用し
　ソフトウェア等に組み込み、配布、もしくは販売をした場合
　1ダウンロードにつき、10万円
　CD、DVD等、物理的に配布した場合も
　1部につき、10万円

⑤「村人A」及び「(株)PROGRESS Plus」の権利を侵害し得た、全ての収益

⑥上記を含め、全ての場合での権利侵害によって生じた
　「村人A」及び「(株)PROGRESS Plus」の損失の全額



!warning!

This program is protected by copyright law.
Unauthorized copying of part or all of this program may result in copyright infringement and criminal penalties.

The copyright and usage rights of this program belong to "villaA" and "PROGRESS Plus Co., Ltd."
Unauthorized copying, analysis, or any other act that infringes our rights is prohibited.
If used without permission, it may infringe Live2D's rights.
If infringement is confirmed, we will take legal action.

In addition, copy or analyze a part or all of this program,
When used without permission, for "villaA" and "PROGRESS Plus Co., Ltd."
You agree to pay the following usage fees.


① When part or all is distributed
\1,000,000 per download
Even when physically distributed such as printing
\1,000,000 per copy

② When part or all can be viewed
\500,000 per viewing

③ Duplicate or analyze part or all
When incorporated in software, etc.
\10,000,000 per case

④ Duplicate or analyze part or all
When embedded in software, distributed, or sold
\100,000 per download
Even when physically distributed such as CDs and DVDs
\100,000 per copy

⑤ All profits that could infringe the rights of "villaA" and "PROGRESS Plus Co., Ltd."

⑥ Caused by infringement of rights in all cases, including the above
Full loss of "villaA" and "PROGRESS Plus Co., Ltd."
 */

/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */
 
//=============================================================================
// live2dCubism4RuntimeForMV.js
// Copyright (c) 2020- 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc Cubism4.0に対応したlive2dモデルをツクールMVにて表示するためのプラグインです。
 * @author 村人Ａ
 *
 * @help
 * 
 * 
 * !警告!
 * 
 * このプログラムは著作権法によって保護されています。
 * このプログラムの一部または全部を無断で複製すると著作権侵害となり刑事罰を受ける可能性があります。
 * 
 * このプログラムの著作権及び使用権は「村人A」及び「(株)PROGRESS Plus」に帰属します。
 * 無断での複製、解析、その他、当方の権利を侵害する一切の行為を禁止します。
 * 無断で使用した場合、Live2D社の権利を侵害する可能性もあります。
 * 権利侵害が確認された場合、法的措置を執ります。
 * 
 * また、当プログラムの一部もしくは全部を複製、あるいは解析利用し、
 * 無断使用した場合、「村人A」及び「(株)PROGRESS Plus」に対して
 * 下記の使用料の支払いに同意したものとします。
 * 
 * ①一部、もしくは全部を配布した場合
 * 　1ダウンロードにつき、100万円
 * 　印刷等、物理的に配布した場合も
 * 　1部につき、100万円
 * 
 * ②一部、もしくは全部を閲覧可能にした場合
 * 　1閲覧につき、50万円
 * 
 * ③一部もしくは全部を複製、あるいは解析利用し
 * 　ソフトウェア等に組み込んだ場合、
 * 　1件につき、1000万円
 * 
 * ④一部もしくは全部を複製、あるいは解析利用し
 * 　ソフトウェア等に組み込み、配布、もしくは販売をした場合
 * 　1ダウンロードにつき、10万円
 * 　CD、DVD等、物理的に配布した場合も
 * 　1部につき、10万円
 * 
 * ⑤「村人A」及び「(株)PROGRESS Plus」の権利を侵害し得た、全ての収益
 * 
 * ⑥上記を含め、全ての場合での権利侵害によって生じた
 * 　「村人A」及び「(株)PROGRESS Plus」の損失の全額
 * 
 * 
 * 
 * !warning!
 * 
 * This program is protected by copyright law.
 * Unauthorized copying of part or all of this program may result in copyright infringement and criminal penalties.
 * 
 * The copyright and usage rights of this program belong to "villaA" and "PROGRESS Plus Co., Ltd."
 * Unauthorized copying, analysis, or any other act that infringes our rights is prohibited.
 * If used without permission, it may infringe Live2D's rights.
 * If infringement is confirmed, we will take legal action.
 * 
 * In addition, copy or analyze a part or all of this program,
 * When used without permission, for "villaA" and "PROGRESS Plus Co., Ltd."
 * You agree to pay the following usage fees.
 * 
 * 
 * ① When part or all is distributed
 * \1,000,000 per download
 * Even when physically distributed such as printing
 * \1,000,000 per copy
 * 
 * ② When part or all can be viewed
 * \500,000 per viewing
 * 
 * ③ Duplicate or analyze part or all
 * When incorporated in software, etc.
 * \10,000,000 per case
 * 
 * ④ Duplicate or analyze part or all
 * When embedded in software, distributed, or sold
 * \100,000 per download
 * Even when physically distributed such as CDs and DVDs
 * \100,000 per copy
 * 
 * ⑤ All profits that could infringe the rights of "villaA" and "PROGRESS Plus Co., Ltd."
 * 
 * ⑥ Caused by infringement of rights in all cases, including the above
 * Full loss of "villaA" and "PROGRESS Plus Co., Ltd."
 *
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */
 

{
	'use strict';
	
	const _prm                  = PluginManager.parameters('enc_lv2d');
	const modelSeSwitchId        = 82;
	const modelSeVolumeValId     = 21;
	const modelNameArray         = ["Model_01","Model_02","Model_03","Model_04","Model_05","Model_06","Model_07","Model_10"];
	const preloadModelArray      = [];
	const dragEyesValidSwitchId  = 81;
	const mozaicQuority          = (167).toFixed(1);

	const notFoundLive2dModelError = function(name){
		const data = $gameLive2d.data[name];
		return !data
	}
	
	const convertStringToGameVariable = function(str){
		const id = str.match(/\$v(\d+)/);
		return id ? $gameVariables.value(Number(id[1])) : str;
	}
	
	const getPartsModelId = (model, arg) => {return isNaN(Number(arg)) ? model._model.parts.ids.indexOf(arg) : Number(arg)}
	const getParameterModelId = (model, arg) => {return isNaN(Number(arg)) ? model._model.parameters.ids.indexOf(arg) : Number(arg)}
		
	String.prototype.toAudioArray = function(){
		return this.split("/").map((str, index) => {
				return index == 0 ? str : Number(str);
		})
	}
	
	//-----------------------------------------------------------------------------
	// Game_Interpreter
	//
	
	var _alias_VillaSCW_Game_Interpreter_command356 = Game_Interpreter.prototype.command356;
	Game_Interpreter.prototype.command356 = function() {
		this.live2dErrorCount = 0;
		_alias_VillaSCW_Game_Interpreter_command356.call(this);
		return true;
	}

	var _alias_VillaSCW_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_VillaSCW_Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'モーションカウントをコンソールに表示') {
			$gameLive2d._motionCountConsole = true;
		}
		
        if (command === 'モーションカウントをコンソールに非表示') {
			$gameLive2d._motionCountConsole = false;
		}
		
        if (command === 'SE停止') {
			AudioManager.stopSe();
		}
		
        if (command === 'モザイク') {
			const pixelateFilter = new PIXI.filters.NoiseFilter(Number(args[1]));
			SceneManager._scene._spriteset._pictureContainer.children.forEach(sprite => {
				if(sprite._pictureId != Number(args[0])){return}
				sprite.filters = [pixelateFilter];
			});
		}
		
        if (command === '現在追加されているモデル名の取得') {
			console.log(Object.keys($gameLive2d.data));
		}
		
        if (command.indexOf('Live2d') < 0) {return}
		args = args.map(arg => convertStringToGameVariable(arg))
		
		if(!args[0]){throw new Error(command + "にモデル個別名がありません")}
		const modeName = convertStringToGameVariable(args[0]);
		let callback;
		
        if (command === 'Live2dモデルの追加' && !$gameLive2d.data[modeName]) {
			$gameLive2d.setLive2dManager();
			$gameLive2d.setModelData(modeName, args[1], Number(args[2]));
			SceneManager._scene._spriteset.setLive2dSprite(modeName, Number(args[2]));
		}
		
		const model = $gameLive2d.getModel(modeName);
		
		
				
				
		if(!model || 
		!model._model || 
		!model._modelName || 
		!model._breath || 
		!model._renderer ||
		model._state != LoadStep.CompleteSetup ||
		notFoundLive2dModelError(modeName) ||
		!model.isAllTextureLoaded()){
			const _this = this;
			this.wait(60)
			if(["Live2dモデルの削除"].indexOf(command) >= 0){return}
			var sample = new Promise(function(resolve, reject) {
				setTimeout(function() {
					if(_this.live2dErrorCount > 30){
						if(!model){
							throw new Error(modeName + "というモデルが存在しません。")
						} else if(!model._model){
							throw new Error(modeName + "のモデルの読み込みエラーです。")
						} else if(notFoundLive2dModelError(modeName)){
							throw new Error(modeName + "というモデルデータが見つかりません。")
						} else if(!model._modelName){
							throw new Error(modeName + "のモデル名が設定されていません。")
						} else if(!model._breath){
							throw new Error(modeName + "のモデルが設定される前に他の動作が実行されました。")
						} else if(!model._renderer){
							throw new Error(modeName + "のモデルのrendererが読み込まれません。")
						} else if(model._state != LoadStep.CompleteSetup){
							throw new Error(modeName + "のモデルのロードが完了できません。")
						} else if(!model.isAllTextureLoaded()){
							throw new Error(modeName + "のモデルのテクスチャのロードが完了できません。")
						}
					}
					resolve();
				}, 1000);
			});
			sample.then(function(value) {
				_this.live2dErrorCount++
				_this.pluginCommand(command, args);
			});
			return
		}
		
        if (command === 'Live2dモデルの追加') {
			$gameLive2d.setMotionSeData(modeName, args[1]);
			return;
		}
		
        if (command === 'Live2dモデルのテクスチャ変更') {
			callback = (name) => {
				const model = $gameLive2d.getModel(name);
				if(!model.isAllTextureLoaded()){
					const _this = this;
					this.wait(60)
					var sample = new Promise(function(resolve, reject) {
						setTimeout(function() {
							resolve();
						}, 1000);
					});
					sample.then(function(value) {
						_this.pluginCommand(command, args);
					});
					return
				}
				model._state = 20;
				SceneManager._scene._spriteset.live2dSpriteHash[name].getTextureManager().releaseTextures();
				model.changeTextureName = args[1] + "/";
				model.setupTextures();
			}
			callback(modeName);
		}
		
		if (command === 'Live2dモデルの移動') {
			callback = (name) => {
				const picId = $gameLive2d.data[name].pictureID;
				const data = $gameLive2d.data[name];
				if(data.moveRate.reduce((p,c) => p+c) != 0){return}
				let x = Number(args[1]);
				let y = Number(args[2]);
				if(isNaN(x) || isNaN(y)){throw new Error("指定した位置が不正です")};
				if(!!SceneManager._scene._spriteset._pictureContainer.children[picId-1].filters){
					y = Graphics.height - y;
				}
				const mx = (x / Graphics.width)*2 - 1;
				const my = 1 - (y / Graphics.height)*2;
				const prePos = data.position;
				const count = Number(args[3]) || 1;
				data.moveRate = [(mx - prePos[0]) / count, (my - prePos[1]) / count]
				data.moveCount = count;
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルの削除') {
			callback = (name) => {
				$gameLive2d.releaseModel(name)
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルのスケール変更') {
			callback = (name) => {
				const data = $gameLive2d.data[name];
				data.scale = Number(args[1]) / 100;
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルの画面スケール変更') {
			callback = (name) => {
				const data = $gameLive2d.data[name];
				const picId = data.pictureID;
				const xScale = args[3] || 100;
				const yScale = args[4] || 100;
				let y = Number(args[2])
				if(!!SceneManager._scene._spriteset._pictureContainer.children[picId-1].filters){
					y = (Graphics.height - y) * (100 - yScale) / 100;
				}
				data.ScreenPosScale = [Number(args[1]), y, Number(xScale) / 100, Number(yScale) / 100];
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモーション設定') {
			callback = (name) => {
				$gameLive2d.getModel(name)._cMotionDoing = true;
				$gameLive2d.setMotion(name, args[1], Number(args[2]), Number(args[3]));
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルのモーションスキップ') {
			callback = (name) => {
				$gameLive2d.getModel(name)._model._skipMotion = true;
				$gameLive2d.getModel(name)._syncMotionNameModelName.forEach(name2 => {
					$gameLive2d.getModel(name2)._model._skipMotion = true;
				})
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルのモーション同期') {
			$gameLive2d.getModel(modeName)._model._syncMotionTimeModelName.push(args[1]);
		}
		
        if (command === 'Live2dモデルのモーション同期解除') {
			$gameLive2d.getModel(modeName)._model._syncMotionTimeModelName = [];
		}
		
        if (command === 'Live2dモデルのモーション完全同期') {
			$gameLive2d.getModel(modeName)._cMotionDoing = true;
			const arr = $gameLive2d.getModel(args[1])._nowMotionData;
			$gameLive2d.setMotion(args[0], ...arr, 5);
			$gameLive2d.getModel(args[1])._syncMotionNameModelName.push(modeName);
			$gameLive2d.getModel(modeName)._bySyncMotionNameModelName = args[1];
			$gameLive2d.getModel(modeName)._model._bySyncMotionNameModelName = args[1];
		}
		
        if (command === 'Live2dモデルのパラメータ共有') {
			$gameLive2d.getModel(modeName)._byShareMotionModelName = args[1];
			$gameLive2d.getModel(modeName)._model._byShareMotionModelName = args[1];
		}
		
        if (command === 'Live2dモデルのコマンド共有') {
			$gameLive2d.getModel(modeName)._byShareCommandModelName = args[1];
		}
		
        if (command === 'Live2dループモーション終了') {
			callback = (name) => {
				$gameLive2d.getModel(name)._model._isLoop = false;
				$gameLive2d.getModel(name)._syncMotionNameModelName.forEach(name2 => {
					$gameLive2d.getModel(name2)._model._isLoop = false;
				})
			}
			callback(modeName);
		}
		
        if (command === 'Live2dループモーション設定') {
			callback = (name) => {
				$gameLive2d.setMotion(name, args[1], Number(args[2]), Number(args[3]));
				$gameLive2d.getModel(name)._model._isLoop = true;
				$gameLive2d.getModel(name)._syncMotionNameModelName.forEach(name2 => {
					$gameLive2d.getModel(name2)._model._isLoop = true;
				})
			}
			callback(modeName);
		}			
		
        if (command === 'Live2dモデルX軸反転') {
			callback = (name) => {
				$gameLive2d.getModel(name)._model._invertX = args[1] == "true";
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルY軸反転') {
			callback = (name) => {
				$gameLive2d.getModel(name)._model._invertY = args[1] == "true";
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル回転') {
			callback = (name) => {
				$gameLive2d.getModel(name)._model._rotation =  Number(args[1]);
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル固定パラメータ設定') {
			callback = (name) => {
				const model = $gameLive2d.getModel(name);
				const pIndex = getParameterModelId(model._model, args[1]);
				if(pIndex < 0){return}
				const nowValue = model._model.getParameterValueByIndex(pIndex);
				const max = model._model._model.parameters.maximumValues[pIndex];
				const min = model._model._model.parameters.minimumValues[pIndex];
				const targetValue = Number(args[2])
				const startValue = nowValue > max ? max : nowValue < min ? min : nowValue;
				const rate = (targetValue - startValue) / Number(args[3])
				$gameLive2d.data[name].cParam[pIndex] = [targetValue, rate, startValue]
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル動的パラメータ設定') {
			callback = (name) => {
				const model = $gameLive2d.getModel(name);
				const pIndex = getParameterModelId(model._model, args[1]);
				if(pIndex < 0){return}
				const nowValue = model._model.getParameterValueByIndex(pIndex);
				const max = model._model._model.parameters.maximumValues[pIndex];
				const min = model._model._model.parameters.minimumValues[pIndex];
				const startValue = nowValue.clamp(min, max);
				const minTargetValue = Number(args[2]).clamp(min, max);
				const maxTargetValue = Number(args[3]).clamp(min, max);
				const frame = Number(args[4]);
				const restFrame = Number(args[5]);
				const rate = (maxTargetValue - startValue) / frame;
				const isRepeat = args[6] == "repeat";
				$gameLive2d.data[name].cParam[pIndex] = [maxTargetValue, rate, startValue, maxTargetValue, minTargetValue, frame, restFrame, isRepeat];
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル固定パラメータ解除') {
			callback = (name) => {
				const model = $gameLive2d.getModel(name);
				const pIndex = getParameterModelId(model._model, args[1]);
				if(pIndex < 0){return}
				delete $gameLive2d.data[name].cParam[pIndex]
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルパラメータ番号取得') {
			console.log($gameLive2d.getModel(modeName)._model._model.parameters)
		}
		
        if (command === 'Live2d表情設定') {
			callback = (name) => {
				$gameLive2d.setExpression(name, args[1]);
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルへのアニメーション表示') {
			const pos = $gameLive2d.data[modeName].position
			const x = Graphics.width/2 + pos[0]*Graphics.width + Number(args[3]);
			const y = -pos[1]*Graphics.height/2 + Number(args[4]);
			const animation = $dataAnimations[Number(args[1])];
			SceneManager._scene._spriteset.live2dSpriteHash[modeName].startAnimation(animation, args[2] == "true", x, y)
		}
		
        if (command === 'Live2dモデルへのバルーン表示') {
			const pos = $gameLive2d.data[modeName].position
			const x = Graphics.width/2 + pos[0]*Graphics.width + Number(args[2]);
			const y = -pos[1]*Graphics.height/2 + Number(args[3]);
			SceneManager._scene._spriteset.live2dSpriteHash[modeName].startBalloon(Number(args[1]), x, y)
		}
		
        if (command === 'Live2dモデルの非表示') {
			callback = (name) => {
				$gameLive2d.data[name].visible = false;
				$gameLive2d.getModel(name).visibleModel = false;
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルの表示') {
			callback = (name) => {
				$gameLive2d.data[name].visible = true;
				$gameLive2d.getModel(name).visibleModel = true;
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル口パク速度') {
			callback = (name) => {
				$gameLive2d.getModel(name)._lipSyncSpeed = Number(args[1])
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルパーツ透過') {
			const model = $gameLive2d.getModel(modeName)._model;
			const partIndex = getPartsModelId(model, args[1]);
			if(partIndex < 0){
				console.log("指定したモデルパーツIDが不正です。")
				return
			};
			model.setPartOpacityByIndex(partIndex, args[2] == "true" ? 0 : 1)
			model._partsOpacityArray[partIndex] = args[2] == "true" ? 0 : 1;
		}
		
        if (command === 'Live2dモデル指定パーツ番号以外透過') {
			const model = $gameLive2d.getModel(modeName)._model;
			const paramArr = args[1].split(",");
			let arr;
			if(isNaN(Number(paramArr[0]))){
				arr = paramArr.map(id => model._model.parts.ids.indexOf(id));
			} else {
				arr = paramArr.map(str => Number(str));
			}
			for(let i = 0, n = model._model.parts.ids.length; i < n; i++){
				const b = args[2] == "true" ? (arr.includes(i) ? 1 : 0) : (arr.includes(i) ? 0 : 1);
				model.setPartOpacityByIndex(i, b)
				model._partsOpacityArray[i] = b;
			}
		}
		
        if (command === 'Live2dモデルパーツ透過度設定') {
			const model = $gameLive2d.getModel(modeName)._model;
			const partIndex = getPartsModelId(model, args[1]);
			if(partIndex < 0){
				console.log("指定したモデルパーツIDが不正です。")
				return
			};
			model.setPartOpacityByIndex(partIndex, Number(args[2]) / 255)
			model._partsOpacityArray[partIndex] = Number(args[2]) / 255;
		}
		
        if (command === 'Live2dモデルパーツ番号取得') {
			console.log($gameLive2d.getModel(modeName)._model._model.parts.ids)
		}
		
        if (command === 'Live2dモデル呼吸パラメータ設定') {
			callback = (name) => {
				$gameLive2d.getModel(name)._breath.setCustomParameters(parseFloat(args[1]), parseFloat(args[2]));
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル呼吸パラメータ詳細設定') {
			callback = (name) => {
				const index = ["AngleX", "AngleY", "AngleZ", "BodyAngleX", "Breath"].indexOf(args[1]);
				$gameLive2d.getModel(name).setupModelCustomBreathParam(index, parseFloat(args[2]), parseFloat(args[3]), parseFloat(args[4]), parseFloat(args[5]))
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルパーツモザイク') {
			$gameLive2d.getModel(modeName).setupMozaicDrawablesId(args[1])
		}
		
        if (command === 'Live2dモデルパーツモザイクの粗さ指定') {
			$gameLive2d.data[modeName].mozaicRough = Number(args[1]).toFixed(1);
			$gameLive2d.getModel(modeName)._model._doInitShader = true;
			return;
		}
		
        if (command === 'Live2dモデル色調変更パーツ指定') {
			callback = (name) => {
				$gameLive2d.getModel(name).setupToneDrawablesId(args[1])
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル色調変更テクスチャ指定') {
			callback = (name) => {
				const id = Number(args[1])
				$gameLive2d.getModel(name).setupToneTextureId(id)
				$gameLive2d.data[name].tintInfo[id] = ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル色調変更テクスチャ削除') {
			callback = (name) => {
				const id = Number(args[1])
				$gameLive2d.getModel(name).deleteToneTextureId(id)
				$gameLive2d.data[name].tintInfo[id] = ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルトーン変更') {
			callback = (name) => {
				const id = Number(args[1])
				const arr = [Number(args[2]).toFixed(1), Number(args[3]).toFixed(1), Number(args[4]).toFixed(1), Number(args[5]).toFixed(1)]
				if(!$gameLive2d.data[name].tintInfo[id]){$gameLive2d.data[name].tintInfo[id] = ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']}
				$gameLive2d.data[name].tintInfo[id][0] = arr.join(",");
				$gameLive2d.getModel(name)._model._doInitShaderByTintTextureIdArray.push(id);
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデルブレンドカラー変更') {
			callback = (name) => {
				const id = Number(args[1])
				const arr = [Number(args[2]).toFixed(1), Number(args[3]).toFixed(1), Number(args[4]).toFixed(1), Number(args[5]).toFixed(1)]
				if(!$gameLive2d.data[name].tintInfo[id]){$gameLive2d.data[name].tintInfo[id] = ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']}
				$gameLive2d.data[name].tintInfo[id][1] = arr.join(",");
				$gameLive2d.getModel(name)._model._doInitShaderByTintTextureIdArray.push(id);
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル色調変更') {
			callback = (name) => {
				const id = Number(args[1])
				if(!$gameLive2d.data[name].tintInfo[id]){$gameLive2d.data[name].tintInfo[id] = ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']}
				$gameLive2d.data[name].tintInfo[id][2] = (Number(args[2]).toFixed(1)).toString();
				$gameLive2d.getModel(name)._model._doInitShaderByTintTextureIdArray.push(id);
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル明度変更') {
			callback = (name) => {
				const id = Number(args[1])
				if(!$gameLive2d.data[name].tintInfo[id]){$gameLive2d.data[name].tintInfo[id] = ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']}
				$gameLive2d.data[name].tintInfo[id][3] = (Number(args[2]).toFixed(1)).toString();
				$gameLive2d.getModel(name)._model._doInitShaderByTintTextureIdArray.push(id);
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル目パチ自動') {
			callback = (name) => {
				$gameLive2d.getModel(name).autoEyeBlink = args[1] == 'true';
			}
			callback(modeName);
		}
		
        if (command === 'Live2dモデル当たり判定IDとスイッチID') {
			callback = (name) => {
				args.shift();
				$gameLive2d.getModel(name).hitPartsNameArray = args.map(arg => arg.split(",").map((str, ind) => {return ind == 0 ? str : Number(str)}));
			}
			callback(modeName);
		}
		
		Object.values($gameLive2d.data).forEach(data => {
			const index = data.dataPosition;
			const model = $gameLive2d.managerInstance.getModel(index)
			if(callback && model._byShareCommandModelName == modeName){
				if(model._bySyncMotionNameModelName && ["Live2dモーション設定", "Live2dループモーション設定"].indexOf(command) >= 0){
					return
				}
				callback(model._modelName);
			}
		})
	}
	
	const _alias_Game_Interpreter_command108 = Game_Interpreter.prototype.command108;
	Game_Interpreter.prototype.command108 = function() {
		_alias_Game_Interpreter_command108.call(this);
		let modelName = /live2dLipSync:(.+)/.exec(this._comments[0]);
		if(!modelName){return true}
		modelName = modelName[1];
		const id = modelName.match(/\$v(\d+)/);
		modelName = id ? $gameVariables.value(Number(id[1])) : modelName;
		notFoundLive2dModelError(modelName);
		this._comments.shift();
		const text = this._comments.join("");
		let lipArr = [];
		for(let i = 0, n = text.length; i < n; i++){
			lipArr.push(this.getTextLipNum(text[i]));
		}
		lipArr.push(0)
		lipArr.push(0)
		const model = $gameLive2d.getModel(modelName)
		model._lipSyncArray = lipArr
	};
	
	Game_Interpreter.prototype.getTextLipNum = function(str) {
		if(["あ","か","さ","た","な","は","ま","や","ら","わ","が","ざ","だ","ば","ぱ","ぁ","ゃ"].indexOf(str) >= 0){return 1};
		if(["い","き","し","ち","に","ひ","み","り","ぎ","じ","ぢ","び","ぴ","ぃ"].indexOf(str) >= 0){return 0.5};
		if(["う","く","す","つ","ぬ","ふ","む","ゆ","る","ぐ","ず","づ","ぶ","ゔ","ぷ","ぅ","ゅ"].indexOf(str) >= 0){return 0.2};
		if(["え","け","せ","て","ね","へ","め","れ","げ","ぜ","で","べ","ぺ","ぇ"].indexOf(str) >= 0){return 0.7};
		if(["お","こ","そ","と","の","ほ","も","よ","ろ","を","ご","ぞ","ど","ぼ","ぽ","ぉ","ょ"].indexOf(str) >= 0){return 0.3};
		return 0;
	}
	
	const _alias_Game_Interpreter_command354 = Game_Interpreter.prototype.command354;
	Game_Interpreter.prototype.command354 = function() {
		$gameLive2d.gameEndProc();
		_alias_Game_Interpreter_command354.call(this)
		return true;
	};
	
	const _alias_Scene_GameEnd_commandToTitle = Scene_GameEnd.prototype.commandToTitle;
	Scene_GameEnd.prototype.commandToTitle = function() {
		$gameLive2d.gameEndProc();
		_alias_Scene_GameEnd_commandToTitle.call(this);
	};

	//-----------------------------------------------------------------------------
	// DataManager
	//

	var $gameLive2d       = null;
	
	const _alias_DataManager_createGameObjects = DataManager.createGameObjects;
	DataManager.createGameObjects = function() {
		_alias_DataManager_createGameObjects.call(this)
		$gameLive2d = new Game_Live2d();
	}

	const _alias_DataManager_makeSaveContents = DataManager.makeSaveContents;
	DataManager.makeSaveContents = function() {
		var contents = _alias_DataManager_makeSaveContents.call(this);
		contents.gameLive2d = $gameLive2d;
		return contents
	}

	const _alias_DataManager_extractSaveContents = DataManager.extractSaveContents;
	DataManager.extractSaveContents = function(contents) {
		_alias_DataManager_extractSaveContents.call(this, contents)
		$gameLive2d = contents.gameLive2d;
	}

	//-----------------------------------------------------------------------------
	// AudioManager
	//

	AudioManager.playLive2dModelSe = function(se) {
		if(!$gameSwitches.value(modelSeSwitchId)){return}
		const rate = Math.min(Math.max($gameVariables.value(Number(modelSeVolumeValId)), 0), 100);
		const vol = se[1] * rate/100;
		AudioManager.playSe({"name":se[0],"volume":vol,"pitch":se[2],"pan":se[3]});
	}

	//-----------------------------------------------------------------------------
	// Game_Live2d
	//

	function Game_Live2d() {
		this.initialize.apply(this, arguments);
	}

	Game_Live2d.prototype.initialize = function() {
		this.framework = Live2DCubismFramework.CubismFramework;
		this.framework.startUp(null);
		this.framework.initialize();
		this.manager = null;
		this.data = {};
		this.preloadFinished = false;
		this._motionCountConsole = false;
		this.modelDataPositionArray = [];
		this.addPreloadModelArray = preloadModelArray.concat();
		this.mozaicRoughness = mozaicQuority;
	}
	
	Game_Live2d.prototype.isAnyModelVisible = function() {
		return Object.keys(this.data).some(key => this.data[key].visible);
	}
	
	Game_Live2d.prototype.dataLength = function() {
		return Object.keys(this.data).length
	}
	
	Game_Live2d.prototype.setLive2dManager = function() {
		if(this.managerInstance){return}
		const manager = new LAppLive2DManager();
		this.managerInstance = manager.getInstance();
	}
	
	Game_Live2d.prototype.getNullDataPosition = function(name) {
		let index = this.modelDataPositionArray.length;
		for(let i = 0, n = this.modelDataPositionArray.length; i < n; i++){
			if(!this.modelDataPositionArray[i]){index = i; break}
		}
		this.modelDataPositionArray[index] = name;
		return index;
	}
	
	Game_Live2d.prototype.setModelData = function(name, modelName, picId) {
		let posInd = this.getNullDataPosition(name);
		if(!this.data[name]){
			this.data[name] = {
				"dataPosition" : posInd,
				"pictureID"    : picId,
				"position"     : [0, 0],
				"moveRate"     : [0, 0],
				"moveCount"    : 0,
				"loopMotion"   : null,
				"scale"        : 1.0,
				"ScreenPosScale"  : [0.0, 0.0, 1.0, 1.0],
				"textureSize"  : [],
				"cParam"       : {},
				"mozaicRough"  : this.mozaicRoughness,
				"tintInfo"     : {},
				"visible"      : false
			};
		}
		if(this.data[name].dataPosition != posInd){this.data[name].dataPosition = posInd}
		const ind = modelNameArray.indexOf(modelName);
		if(ind < 0){throw new Error("プラグインパラメータにて設定したモデル名の中に" + modelName + "が見つかりません。")}
		this.managerInstance.changeScene(ind, posInd, name);
		if(this.addPreloadModelArray.some(arr => arr[0] == name)){return}
		this.addPreloadModelArray.push([name, modelName, picId])
	}
	
	Game_Live2d.prototype.setMotionSeData = function(name, modelName) {
		let rowData = null;
		const fs = require('fs');
		const path   = require('path');
		const base   = path.dirname(process.mainModule.filename);
		const filePath = base + '\\live2dModel\\' + modelName + "\\voice.csv";
		if (fs.existsSync(filePath)) {
			rowData = fs.readFileSync(filePath, { encoding: 'utf8' });
		} else {
			console.log(modelName + "は音声ファイルが見つかりません")
			return
		}
		const tempArr = rowData.split("\n").map(str => str.split(","))
		let obj = {};
		tempArr.forEach(arr => {
			if(arr.length == 1){return}
			const key = arr.shift()
			obj[key] = {}
			arr.forEach(str => {
				const info = str.split(":");
				if(info.length == 1){return}
				obj[key][Number(info[0])] = info[1].split("|").map(str => str.toAudioArray());
			})
		})
		//const _this = this;
		const model = this.getModel(name)._model
		const callback = function(){
			model.voiceSeData = obj;
			//_this.getModel(name).setVoiceData(obj);
		};

		setTimeout(callback, 300);
		
	}
	
	Game_Live2d.prototype.gameEndProc = function() {
		if(this.managerInstance){
			this.managerInstance.releaseAllModel();
			this.managerInstance.releaseInstance();
		}
		this.addPreloadModelArray = [];
		this.releaseAllModel();
		SceneManager.live2dSpriteInfoArray = [];
	}
	
	Game_Live2d.prototype.releaseAllModel = function() {
		Object.keys(this.data).forEach(name => this.releaseModel(name));
	}
	
	Game_Live2d.prototype.releaseModel = function(name) {
		let deleteInd = -1;
		this.addPreloadModelArray.forEach((arr, i) => {if(arr[0] == name){deleteInd = i}})
		this.addPreloadModelArray.splice(deleteInd, 1);
		const ind = this.data[name].dataPosition;
		this.modelDataPositionArray[ind] = null;
		$gameTemp.live2dErrorCount = 0;
		if(this.managerInstance._models.at(ind)){
			//this.managerInstance._models.at(ind).release();
			this.releaseModelPros(name, ind)
		}
		this.managerInstance._models.deletePtr(ind);
		this.managerInstance._models.set(ind, null);
		if(SceneManager._scene._spriteset){
			SceneManager._scene._spriteset.removeLive2dSprite(name);
		}
		SceneManager.live2dSpriteInfoArray.forEach((data, index, arr) => {if(data[0] == name)arr.splice(index, 1)})
		delete this.data[name];
	}
	
	Game_Live2d.prototype.releaseModelPros = function(name, ind) {
		try {
			this.managerInstance._models.at(ind).release();
		} catch (error) {
			$gameTemp.live2dErrorCount++;
			const _this = this;
			const sample = new Promise(function(resolve, reject) {
				setTimeout(function() {
					resolve();
				}, 100);
			});
			sample.then(function(value) {
				_this.releaseModelPros(name, ind);
			});
		}
	}
	
	Game_Live2d.prototype.getModel = function(name) {
		if(!this.data[name]){return null};
		const index = this.data[name].dataPosition;
		return this.managerInstance.getModel(index)
	}
	
	Game_Live2d.prototype.getModelDataByIndex = function(index) {
		return this.data[this.modelDataPositionArray[index]]
	}
	
	Game_Live2d.prototype.getIsMotionFinished = function(name) {
		return $gameLive2d.getModel(name)._cMotionDoing
	}
	
	Game_Live2d.prototype.setMotion = function(name, group, no, priority) {
		const model = this.getModel(name);
		model.startMotion(group, no, priority)
	}
	
	Game_Live2d.prototype.setExpression = function(name, eName) {
		const model = this.getModel(name);
		model.setExpression(eName)
	}
	
	Game_Live2d.prototype.setModelOpacity = function(name, opacity) {
		const model = this.getModel(name);
		model._model.setAllPartOpacityByIndexPartOpacity(opacity)
	}
	
	Game_Live2d.prototype.update = function() {
		this.updateDrag();
		this.updateMove();
		this.updateTouch();
		this.updateCheckErrorCount();
	}
	
	Game_Live2d.prototype.updateCheckErrorCount = function() {
		if($gameTemp.live2dErrorCount > 200){throw new Error("webglの読み込み処理が更新されません。しばらく問題なくゲームが進んでいた場合はその旨をご報告ください。")}
	}
	
	Game_Live2d.prototype.updateMove = function() {
		Object.keys(this.data).forEach(key => {
			const data  = this.data[key]
			if(data.moveCount == 0){return};
			data.moveCount--;
			data.position[0] += data.moveRate[0];
			data.position[1] += data.moveRate[1];
			if(data.moveCount == 0){data.moveRate = [0,0]}
		})
	}
	
	Game_Live2d.prototype.updateDrag = function() {
		if(!$gameSwitches.value(dragEyesValidSwitchId) || !this.managerInstance){return}
		const x = (TouchInput._x * 2 - Graphics.width) / Graphics.width;
		const y = (TouchInput._y * 2 - Graphics.height) / Graphics.height;
		this.managerInstance.onDrag(x, -y)
	}
	
	Game_Live2d.prototype.updateTouch = function() {
		if(!this.managerInstance){return}
		if(TouchInput.isPressed()){
			this.managerInstance.onTap(TouchInput.x / Graphics.width - 0.5, TouchInput.y / Graphics.height - 0.5)
		} else {
			Object.keys(this.data).forEach(key => {
				const model = this.getModel(key);
				if(!model || !model.hitPartsNameArray){return}
				model.hitPartsNameArray.forEach(arr => {
					$gameSwitches.setValue(arr[1], false);
					$gameSwitches.setValue(arr[2], false);
				})
				$gameSwitches.setValue(model.mouseClickingSwitchId, true);
				model.mouseClickingSwitchId = 0;
				model.mouseClickingCount = 0;
			})
		}
	}
	
	Game_Live2d.prototype.callManagerupdate = function(modelName) {
		if(!this.managerInstance){return}
		this.managerInstance.onUpdate(modelName);
	}
	
	Game_Live2d.prototype.setSaveModelInfo = function() {
		this.setLive2dManager();
		Object.keys(this.data).forEach(key => {
			const model = this.getModel(key);
			const data  = this.data[key];
			model.visibleModel = data.visible;
		})
	}
	
	Game_Live2d.prototype.unvisibleAllModel = function() {
		Object.keys(this.data).forEach(key => {
			const model = this.getModel(key);
			model.visibleModel = false;
		})
	}
	
	//-----------------------------------------------------------------------------
	// SceneManager
	//
	
	const _alias_SceneManager_run = SceneManager.run
	SceneManager.run = function(sceneClass) {
		_alias_SceneManager_run.call(this, sceneClass);
		const fs = require('fs');
		const path = require('path');
		const base = path.dirname(process.mainModule.filename);
		const img1 = base + "\\img\\system\\game_end_icon3.png";
		const img2 = base + "\\img\\system\\game_end_icon3.rpgmvp";
		if (!fs.existsSync(img1) && !fs.existsSync(img2)) {
			SceneManager.exit()
		}
		const txtPath = base + "\\data\\auth.txt";
		const text = [
		"live2dプラグイン:著作者：村人A(villaa.contact@gmail.com)",
		"著作隣接権保持者：冬空橙(circle.echime@gmail.com)",
		"live2dCubism4RuntimeForMV.js並びに同梱されるFramework.jsは村人Aと冬空橙以外の使用を禁じます。",
		"無断使用並びに権利関係は当該プラグイン上部の文章に準じます。",
		" ",
		"Author:村人A(villaa.contact@gmail.com)",
		"Neighboring Right:冬空橙(circle.echime@gmail.com)",
		"live2dCubism4RuntimeForMV.js and Framework.js include this file is forbidden to use except for 村人A and 冬空橙.",
		"Unauthorized use and rights are based on the text at the top of this plug-in.",
		"2021/02/18",
		];
		fs.writeFileSync(txtPath, text.join("\n"));
	};

	Scene_Boot.prototype.updateDocumentTitle = function() {
		document.title = $dataSystem.gameTitle + "._.";
	};


	const _alias_Scene_Title_start = Scene_Title.prototype.start
	Scene_Title.prototype.start = function() {
		document.title = $dataSystem.gameTitle;
		if (Graphics._auth != "pPvdiii63h") {
			SceneManager.exit();
		}
		_alias_Scene_Title_start.call(this);
	}

	const _alias_DataManager_onLoad = DataManager.onLoad;
	DataManager.onLoad = function(object) {
		_alias_DataManager_onLoad.call(this, object)
		if(object == $dataWeapons){
			if($dataWeapons[4].name != "皮の弓"){SceneManager.exit()}
		}
	}

	SceneManager.live2dSpriteInfoArray = [];

	const _alias_SceneManager_onSceneCreate = SceneManager.onSceneCreate
	SceneManager.onSceneCreate = function() {
		_alias_SceneManager_onSceneCreate.call(this);
		if(SceneManager.live2dSpriteInfoArray.length == 0){return}
		$gameLive2d.setLive2dManager();
		this.live2dSpriteInfoArray.forEach(info => {
			$gameLive2d.getModel(info[0]).visibleModel = this._scene.constructor == Scene_Map ? $gameLive2d.data[info[0]].visible : false;
		})
	}
	
	SceneManager.pushLive2dSpriteInfoArray = function(pushArr) {
		if(!this.live2dSpriteInfoArray.some(arr => [arr[0], arr[1]].equals([pushArr[0], pushArr[1]]))){
			this.live2dSpriteInfoArray.push(pushArr)
		}
	}

	//-----------------------------------------------------------------------------
	// Scene_Load
	//
	
	const _alias_Scene_Load_onSavefileOk = Scene_Load.prototype.onSavefileOk;
	Scene_Load.prototype.onSavefileOk = function() {
		if(SceneManager.live2dSpriteInfoArray.length > 0){
			SceneManager.live2dSpriteInfoArray.forEach(info => info[2].release());
			SceneManager.live2dSpriteInfoArray = [];
		};
		if($gameLive2d.managerInstance)$gameLive2d.managerInstance.releaseAllModel();
		_alias_Scene_Load_onSavefileOk.call(this);
	};
	
	//-----------------------------------------------------------------------------
	// Scene_Save
	//

	const _alias_Scene_Save_onSavefileOk = Scene_Save.prototype.onSavefileOk;
	Scene_Save.prototype.onSavefileOk = function() {
		const tempGl = $gameLive2d.gl;
		$gameLive2d.managerInstance = null;
		$gameLive2d.gl = null;
		$gameLive2d.preloadFinished = false;
		_alias_Scene_Save_onSavefileOk.call(this);
		$gameLive2d.preloadFinished = true;
		$gameLive2d.setLive2dManager();
		$gameLive2d.gl = tempGl;
	}

	//-----------------------------------------------------------------------------
	// Scene_Map
	//
	
	const _alias_Scene_Map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function() {
		_alias_Scene_Map_update.call(this);
		$gameLive2d.update();
	}
	
	const _alias_Scene_Map_snapForBattleBackground = Scene_Map.prototype.snapForBattleBackground;
	Scene_Map.prototype.snapForBattleBackground = function() {
		$gameLive2d.unvisibleAllModel();
		_alias_Scene_Map_snapForBattleBackground.call(this);
	}

	const _alias_Scene_Map_terminate = Scene_Map.prototype.terminate;
	Scene_Map.prototype.terminate = function() {
		$gameLive2d.unvisibleAllModel();
		_alias_Scene_Map_terminate.call(this);
	}

	const _alias_Scene_Map_callMenu = Scene_Map.prototype.callMenu;
	Scene_Map.prototype.callMenu = function() {
		_alias_Scene_Map_callMenu.call(this);
	}

	//-----------------------------------------------------------------------------
	// Spriteset_Map
	//
	
	const _alias_Spriteset_Map_initialize = Spriteset_Map.prototype.initialize;
	Spriteset_Map.prototype.initialize = function() {
		//$gameLive2d.preloadFinished = false;
		_alias_Spriteset_Map_initialize.call(this);
		this._preloadLive2dModelData = false;
	}
	
	Spriteset_Map.prototype.createUpperLayer = function() {
		Spriteset_Base.prototype.createUpperLayer.call(this);
		this.live2dSpriteHash = {};
		this.preloadLive2dModel();
		this.createPreloadLive2dModel();
	}

	Spriteset_Map.prototype.preloadLive2dModel = function() {
		if($gameLive2d.preloadFinished){return}
		if($gameLive2d.addPreloadModelArray.length == 0){
			$gameLive2d.preloadFinished = true;
		} else {
			$gameScreen._brightness = 0
			this.preloadModelCount = 10;
		}
	}
	
	Spriteset_Map.prototype.createPreloadLive2dModel = function() {
		if(SceneManager.live2dSpriteInfoArray.length == 0){return}
		this._pictureContainer.children.forEach(sprite => {
			SceneManager.live2dSpriteInfoArray.forEach(info => {
				if(sprite._pictureId == info[1]){
					sprite.addChild(info[2]);
					$gameScreen.showPicture(info[1], "live2dtip", 0, 0, 0, 100, 100, 255, 0)
					this.live2dSpriteHash[info[0]] = info[2];
				}
			})
		});
	}
	
	Spriteset_Map.prototype.setPreloadModels = function() {
		$gameLive2d.modelDataPositionArray = []
		$gameLive2d.setLive2dManager();
		$gameLive2d.addPreloadModelArray.forEach(arr => {
			this.setLive2dSprite(arr[0], Number(arr[2]));
			//$gameLive2d.setModelData(arr[0], arr[1]);
		})
	}
	
	Spriteset_Map.prototype.setLive2dSprite = function(name, picId) {
		if(!this.live2dModelSpirteLayerArray)this.live2dModelSpirteLayerArray = [];
				
		this.live2dSpriteHash[name] = new Sprite_Live2d(name, picId);
		this._pictureContainer.children.forEach(sprite => {
			if(sprite._pictureId != picId){return}
			//const layerSprite = new Sprite();
			//layerSprite.setFrame(0, 0, Graphics.width, Graphics.height);
			//sprite.addChild(layerSprite);
			//this.live2dModelSpirteLayerArray[picId] = layerSprite;
			this.live2dSpriteHash[name].setFrame(0, 0, Graphics.width, Graphics.height);
			sprite.addChild(this.live2dSpriteHash[name]);
			$gameScreen.showPicture(picId, "live2dtip", 0, 0, 0, 100, 100, 255, 0);
		});
		const model = $gameLive2d.getModel(name);
		SceneManager.pushLive2dSpriteInfoArray([name, picId, this.live2dSpriteHash[name]]);
	}
	
	Spriteset_Map.prototype.removeLive2dSprite = function(name) {
		const picId = this.live2dSpriteHash[name].pictureId;
		this._pictureContainer.children.forEach(sprite => {
			if(!sprite){return}
			if(sprite._pictureId == picId){
				this.live2dSpriteHash[name].release();
				sprite.removeChild(this.live2dSpriteHash[name])
			}
		});
		delete this.live2dSpriteHash[name]
	}

	const _alias_Spriteset_Map_update = Spriteset_Map.prototype.update;
	Spriteset_Map.prototype.update = function() {
		_alias_Spriteset_Map_update.call(this);
		if($gameLive2d.addPreloadModelArray.length == 0){return}
		if($gameLive2d.preloadFinished){return}
		this.live2dModelPreload();
		if(!$gameLive2d.gl){return}
		if(!this._preloadLive2dModelData){
			$gameLive2d.addPreloadModelArray.forEach(arr => {
				$gameLive2d.setModelData(arr[0], arr[1], Number(arr[2]));
			})
			this._preloadLive2dModelData = true;
		}
		this.updateCheckPreloadLive2dModelLoaded()
	}
	
	Spriteset_Map.prototype.live2dModelPreload = function() {
		if(this.preloadModelCount == 0){return}
		SceneManager._scene._active = false;
		this.preloadModelCount--;
		if(this.preloadModelCount == 0){
			this.setPreloadModels()
		}
	}
	
	Spriteset_Map.prototype.updateCheckPreloadLive2dModelLoaded = function() {
		if(this.preloadModelCount != 0){return}
		if($gameScreen._brightness == 255){return}
		let loadCount = 0;
		Graphics.updateLoading();
		Object.keys(this.live2dSpriteHash).forEach(key => {
			if ($gameLive2d.getModel(key) && $gameLive2d.getModel(key)._state == LoadStep.CompleteSetup) {
				loadCount++;
			}
		});
		if(loadCount == $gameLive2d.addPreloadModelArray.length){
			Graphics.endLoading()
			$gameScreen._brightness = 255;
			$gameLive2d.preloadFinished = true;
			$gameLive2d.setSaveModelInfo();
			SceneManager._scene._active = true;
		}
	}
	
	//-----------------------------------------------------------------------------
	// Sprite_Live2d
	//

	function Sprite_Live2d() {
		this.initialize.apply(this, arguments);
	}

	Sprite_Live2d.prototype = Object.create(Sprite_Base.prototype);
	Sprite_Live2d.prototype.constructor = Sprite_Live2d;

	Sprite_Live2d.prototype.initialize = function(name, picId) {
		Sprite_Base.prototype.initialize.call(this);
		this.initializeValue();
		this.modelName = name;
		this.pictureId = picId;
		this.preload = false;
	};

	Sprite_Live2d.prototype.initializeValue = function() {
		this._captured = false;
		this._mouseX = 0.0;
		this._mouseY = 0.0;
		this._isEnd = false;
		this._cubismOption = new Option();
	}
	
	Sprite_Live2d.prototype.update = function() {
		Sprite_Base.prototype.update.call(this);
		this.updateBalloon();
	}
	
	Sprite_Live2d.prototype._renderWebGL = function(renderer) {
		const isInit = !!$gameLive2d.gl;
		$gameLive2d.gl = renderer.gl;
		$gameLive2d.canvas = renderer.view;
		if(!isInit){
			this.run();
		}
		$gameLive2d.callManagerupdate(this.modelName);
		
		if(!this._textureManager){
			this._textureManager = new LAppTextureManager();
		}
		
        this.calculateVertices();
        renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
	}
	
    Sprite_Live2d.prototype.renderWebGL = function renderWebGL(renderer) {
        if (this._mask || this._filters) {
            this.renderAdvancedWebGL(renderer);
        } else {
            this._renderWebGL(renderer);
        }
    };
	
	Sprite_Live2d.prototype.run = function () {
		var _this = this;
		var loop = function () {
			if (s_instance == null) {
				return;
			}
			LAppPal.updateTime();
			requestAnimationFrame(loop);
			return
		};
		loop();
	};

	Sprite_Live2d.prototype.release = function () {
		this._textureManager.release();
		this._textureManager = null;
	};
	Sprite_Live2d.prototype.getView = function () {
		return this._view;
	};
	Sprite_Live2d.prototype.getTextureManager = function () {
		return this._textureManager;
	};
	Sprite_Live2d.prototype.initializeCubism = function () {
		this._cubismOption.logFunction = LAppPal.printMessage;
		this._cubismOption.loggingLevel = CubismLoggingLevel;
		$gameLive2d.framework.startUp(this._cubismOption);
		$gameLive2d.framework.initialize();
		//$gameLive2d.managerInstance.getInstance();
		LAppPal.updateTime();
	};
	Sprite_Live2d.prototype.startBalloon = function(id, x, y) {
		if (!this._balloonSprite) {
			this._balloonSprite = new Sprite_Balloon();
		}
		this._balloonSpritePos = [x, y]
		this._balloonSprite.setup(id);
		this.parent.addChild(this._balloonSprite);
	};
	Sprite_Live2d.prototype.updateBalloon = function() {
		if (!this._balloonSprite) {return}
		this._balloonSprite.x = this.x + this._balloonSpritePos[0];
		this._balloonSprite.y = this.y - this.height + this._balloonSpritePos[1];
		if (!this._balloonSprite.isPlaying()) {
			this.endBalloon();
		}
	};
	Sprite_Live2d.prototype.endBalloon = function() {
		if (this._balloonSprite) {
			this.parent.removeChild(this._balloonSprite);
			this._balloonSprite = null;
		}
	};

	Sprite_Live2d.prototype.startAnimation = function(animation, mirror, x, y) {
		var sprite = new Sprite_Live2dAnimation(x, y);
		sprite.setup(this._effectTarget, animation, mirror);
		this.parent.addChild(sprite);
		this._animationSprites.push(sprite);
	};

	//-----------------------------------------------------------------------------
	// Sprite_Live2dAnimation
	//

	function Sprite_Live2dAnimation() {
		this.initialize.apply(this, arguments);
	}

	Sprite_Live2dAnimation.prototype = Object.create(Sprite_Animation.prototype);
	Sprite_Live2dAnimation.prototype.constructor = Sprite_Live2dAnimation;

	Sprite_Live2dAnimation.prototype.initialize = function(x, y) {
		Sprite_Animation.prototype.initialize.call(this);
		this.adjPos = [x, y];
	};

	Sprite_Live2dAnimation.prototype.updatePosition = function() {
		if (this._animation.position === 3) {
			this.x = this.parent.width / 2;
			this.y = this.parent.height / 2;
		} else {
			var parent = this._target.parent;
			var grandparent = parent ? parent.parent : null;
			this.x = this._target.x;
			this.y = this._target.y;
			if (this.parent === grandparent) {
				this.x += parent.x;
				this.y += parent.y;
			}
			if (this._animation.position === 0) {
				this.y -= this._target.height;
			} else if (this._animation.position === 1) {
				this.y -= this._target.height / 2;
			}
			this.x += this.adjPos[0];
			this.y += this.adjPos[1];
		}
	}
	
	var Live2DCubismCore;
	(function (Live2DCubismCore) {
		var _csm = /** @class */ (function () {
			function _csm() {
			}
			_csm.getVersion = function () {
				return _em.ccall("csmGetVersion", "number", [], []);
			};
			_csm.getLatestMocVersion = function () {
				return _em.ccall("csmGetLatestMocVersion", "number", [], []);
			};
			_csm.getMocVersion = function (moc) {
				return _em.ccall("csmGetMocVersion", "number", ["number"], [moc]);
			};
			_csm.getSizeofModel = function (moc) {
				return _em.ccall("csmGetSizeofModel", "number", ["number"], [moc]);
			};
			_csm.reviveMocInPlace = function (memory, mocSize) {
				return _em.ccall("csmReviveMocInPlace", "number", ["number", "number"], [memory, mocSize]);
			};
			_csm.initializeModelInPlace = function (moc, memory, modelSize) {
				return _em.ccall("csmInitializeModelInPlace", "number", ["number", "number", "number"], [moc, memory, modelSize]);
			};
			_csm.getParameterCount = function (model) {
				return _em.ccall("csmGetParameterCount", "number", ["number"], [model]);
			};
			_csm.getParameterIds = function (model) {
				return _em.ccall("csmGetParameterIds", "number", ["number"], [model]);
			};
			_csm.getParameterMinimumValues = function (model) {
				return _em.ccall("csmGetParameterMinimumValues", "number", ["number"], [model]);
			};
			_csm.getParameterMaximumValues = function (model) {
				return _em.ccall("csmGetParameterMaximumValues", "number", ["number"], [model]);
			};
			_csm.getParameterDefaultValues = function (model) {
				return _em.ccall("csmGetParameterDefaultValues", "number", ["number"], [model]);
			};
			_csm.getParameterValues = function (model) {
				return _em.ccall("csmGetParameterValues", "number", ["number"], [model]);
			};
			_csm.getPartCount = function (model) {
				return _em.ccall("csmGetPartCount", "number", ["number"], [model]);
			};
			_csm.getPartIds = function (model) {
				return _em.ccall("csmGetPartIds", "number", ["number"], [model]);
			};
			_csm.getPartOpacities = function (model) {
				return _em.ccall("csmGetPartOpacities", "number", ["number"], [model]);
			};
			_csm.getPartParentPartIndices = function (model) {
				return _em.ccall("csmGetPartParentPartIndices", "number", ["number"], [model]);
			};
			_csm.getDrawableCount = function (model) {
				return _em.ccall("csmGetDrawableCount", "number", ["number"], [model]);
			};
			_csm.getDrawableIds = function (model) {
				return _em.ccall("csmGetDrawableIds", "number", ["number"], [model]);
			};
			_csm.getDrawableConstantFlags = function (model) {
				return _em.ccall("csmGetDrawableConstantFlags", "number", ["number"], [model]);
			};
			_csm.getDrawableDynamicFlags = function (model) {
				return _em.ccall("csmGetDrawableDynamicFlags", "number", ["number"], [model]);
			};
			_csm.getDrawableTextureIndices = function (model) {
				return _em.ccall("csmGetDrawableTextureIndices", "number", ["number"], [model]);
			};
			_csm.getDrawableDrawOrders = function (model) {
				return _em.ccall("csmGetDrawableDrawOrders", "number", ["number"], [model]);
			};
			_csm.getDrawableRenderOrders = function (model) {
				return _em.ccall("csmGetDrawableRenderOrders", "number", ["number"], [model]);
			};
			_csm.getDrawableOpacities = function (model) {
				return _em.ccall("csmGetDrawableOpacities", "number", ["number"], [model]);
			};
			_csm.getDrawableMaskCounts = function (model) {
				return _em.ccall("csmGetDrawableMaskCounts", "number", ["number"], [model]);
			};
			_csm.getDrawableMasks = function (model) {
				return _em.ccall("csmGetDrawableMasks", "number", ["number"], [model]);
			};
			_csm.getDrawableVertexCounts = function (model) {
				return _em.ccall("csmGetDrawableVertexCounts", "number", ["number"], [model]);
			};
			_csm.getDrawableVertexPositions = function (model) {
				return _em.ccall("csmGetDrawableVertexPositions", "number", ["number"], [model]);
			};
			_csm.getDrawableVertexUvs = function (model) {
				return _em.ccall("csmGetDrawableVertexUvs", "number", ["number"], [model]);
			};
			_csm.getDrawableIndexCounts = function (model) {
				return _em.ccall("csmGetDrawableIndexCounts", "number", ["number"], [model]);
			};
			_csm.getDrawableIndices = function (model) {
				return _em.ccall("csmGetDrawableIndices", "number", ["number"], [model]);
			};
			_csm.mallocMoc = function (mocSize) {
				return _em.ccall("csmMallocMoc", "number", ["number"], [mocSize]);
			};
			_csm.mallocModelAndInitialize = function (moc) {
				return _em.ccall("csmMallocModelAndInitialize", "number", ["number"], [moc]);
			};
			_csm.malloc = function (size) {
				return _em.ccall("csmMalloc", "number", ["number"], [size]);
			};
			_csm.setLogFunction = function (handler) {
				_em.ccall("csmSetLogFunction", null, ["number"], [handler]);
			};
			_csm.updateModel = function (model) {
				_em.ccall("csmUpdateModel", null, ["number"], [model]);
			};
			_csm.readCanvasInfo = function (model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit) {
				_em.ccall("csmReadCanvasInfo", null, ["number", "number", "number", "number"], [model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit]);
			};
			_csm.resetDrawableDynamicFlags = function (model) {
				_em.ccall("csmResetDrawableDynamicFlags", null, ["number"], [model]);
			};
			_csm.free = function (memory) {
				_em.ccall("csmFree", null, ["number"], [memory]);
			};
			return _csm;
		}());
		var Version = /** @class */ (function () {
			function Version() {
			}
			Version.csmGetVersion = function () {
				return _csm.getVersion();
			};
			Version.csmGetLatestMocVersion = function () {
				return _csm.getLatestMocVersion();
			};
			Version.csmGetMocVersion = function (moc) {
				return _csm.getMocVersion(moc._ptr);
			};
			return Version;
		}());
		Live2DCubismCore.Version = Version;
		var Logging = /** @class */ (function () {
			function Logging() {
			}
			Logging.csmSetLogFunction = function (handler) {
				Logging.logFunction = handler;
				var pointer = _em.addFunction(Logging.wrapLogFunction, 'vi');
				_csm.setLogFunction(pointer);
			};
			Logging.csmGetLogFunction = function () {
				return Logging.logFunction;
			};
			Logging.wrapLogFunction = function (messagePtr) {
				// Pointer to string.
				var messageStr = _em.UTF8ToString(messagePtr);
				// Run log function.
				Logging.logFunction(messageStr);
			};
			return Logging;
		}());
		Live2DCubismCore.Logging = Logging;
		var Moc = /** @class */ (function () {
			function Moc(mocBytes) {
				// Allocate memory.
				var memory = _csm.mallocMoc(mocBytes.byteLength);
				if (!memory) {
					return;
				}
				// Initialize memory.
				var destination = new Uint8Array(_em.HEAPU8.buffer, memory, mocBytes.byteLength);
				destination.set(new Uint8Array(mocBytes));
				// Revive moc.
				this._ptr = _csm.reviveMocInPlace(memory, mocBytes.byteLength);
				if (!this._ptr) {
					_csm.free(memory);
				}
			}
			Moc.fromArrayBuffer = function (buffer) {
				if (!buffer) {
					return null;
				}
				var moc = new Moc(buffer);
				return (moc._ptr)
					? moc
					: null;
			};
			Moc.prototype._release = function () {
				_csm.free(this._ptr);
				this._ptr = 0;
			};
			return Moc;
		}());
		Live2DCubismCore.Moc = Moc;
		var Model = /** @class */ (function () {
			function Model(moc) {
				this._ptr = _csm.mallocModelAndInitialize(moc._ptr);
				if (!this._ptr) {
					return;
				}
				this.parameters = new Parameters(this._ptr);
				this.parts = new Parts(this._ptr);
				this.drawables = new Drawables(this._ptr);
				this.canvasinfo = new CanvasInfo(this._ptr);
			}
			Model.fromMoc = function (moc) {
				var model = new Model(moc);
				return (model._ptr)
					? model
					: null;
			};
			Model.prototype.update = function () {
				_csm.updateModel(this._ptr);
			};
			Model.prototype.release = function () {
				_csm.free(this._ptr);
				this._ptr = 0;
			};
			return Model;
		}());
		Live2DCubismCore.Model = Model;
		var CanvasInfo = /** @class */ (function () {
			function CanvasInfo(modelPtr) {
				if (!modelPtr) {
					return;
				}
				var _canvasSize_data = new Float32Array(2);
				var _canvasSize_nDataBytes = _canvasSize_data.length * _canvasSize_data.BYTES_PER_ELEMENT;
				var _canvasSize_dataPtr = _csm.malloc(_canvasSize_nDataBytes);
				var _canvasSize_dataHeap = new Uint8Array(_em.HEAPU8.buffer, _canvasSize_dataPtr, _canvasSize_nDataBytes);
				_canvasSize_dataHeap.set(new Uint8Array(_canvasSize_data.buffer));
				var _canvasOrigin_data = new Float32Array(2);
				var _canvasOrigin_nDataBytes = _canvasOrigin_data.length * _canvasOrigin_data.BYTES_PER_ELEMENT;
				var _canvasOrigin_dataPtr = _csm.malloc(_canvasOrigin_nDataBytes);
				var _canvasOrigin_dataHeap = new Uint8Array(_em.HEAPU8.buffer, _canvasOrigin_dataPtr, _canvasOrigin_nDataBytes);
				_canvasOrigin_dataHeap.set(new Uint8Array(_canvasOrigin_data.buffer));
				var _canvasPPU_data = new Float32Array(1);
				var _canvasPPU_nDataBytes = _canvasPPU_data.length * _canvasPPU_data.BYTES_PER_ELEMENT;
				var _canvasPPU_dataPtr = _csm.malloc(_canvasPPU_nDataBytes);
				var _canvasPPU_dataHeap = new Uint8Array(_em.HEAPU8.buffer, _canvasPPU_dataPtr, _canvasPPU_nDataBytes);
				_canvasPPU_dataHeap.set(new Uint8Array(_canvasPPU_data.buffer));
				_csm.readCanvasInfo(modelPtr, _canvasSize_dataHeap.byteOffset, _canvasOrigin_dataHeap.byteOffset, _canvasPPU_dataHeap.byteOffset);
				_canvasSize_data = new Float32Array(_canvasSize_dataHeap.buffer, _canvasSize_dataHeap.byteOffset, _canvasSize_dataHeap.length);
				_canvasOrigin_data = new Float32Array(_canvasOrigin_dataHeap.buffer, _canvasOrigin_dataHeap.byteOffset, _canvasOrigin_dataHeap.length);
				_canvasPPU_data = new Float32Array(_canvasPPU_dataHeap.buffer, _canvasPPU_dataHeap.byteOffset, _canvasPPU_dataHeap.length);
				this.CanvasWidth = Graphics.width;
				this.CanvasHeight = Graphics.height;
				this.CanvasOriginX = _canvasOrigin_data[0];
				this.CanvasOriginY = _canvasOrigin_data[1];
				this.PixelsPerUnit = _canvasPPU_data[0];
				_csm.free(_canvasSize_dataHeap.byteOffset);
				_csm.free(_canvasOrigin_dataHeap.byteOffset);
				_csm.free(_canvasPPU_dataHeap.byteOffset);
			}
			return CanvasInfo;
		}());
		Live2DCubismCore.CanvasInfo = CanvasInfo;
		var Parameters = /** @class */ (function () {
			function Parameters(modelPtr) {
				var length = 0;
				this.count = _csm.getParameterCount(modelPtr);
				length = _csm.getParameterCount(modelPtr);
				this.ids = new Array(length);
				var _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getParameterIds(modelPtr), length);
				for (var i = 0; i < _ids.length; i++) {
					this.ids[i] = _em.UTF8ToString(_ids[i]);
				}
				length = _csm.getParameterCount(modelPtr);
				this.minimumValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterMinimumValues(modelPtr), length);
				length = _csm.getParameterCount(modelPtr);
				this.maximumValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterMaximumValues(modelPtr), length);
				length = _csm.getParameterCount(modelPtr);
				this.defaultValues = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterDefaultValues(modelPtr), length);
				length = _csm.getParameterCount(modelPtr);
				this.values = new Float32Array(_em.HEAPF32.buffer, _csm.getParameterValues(modelPtr), length);
			}
			return Parameters;
		}());
		Live2DCubismCore.Parameters = Parameters;
		var Parts = /** @class */ (function () {
			function Parts(modelPtr) {
				var length = 0;
				this.count = _csm.getPartCount(modelPtr);
				length = _csm.getPartCount(modelPtr);
				this.ids = new Array(length);
				var _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getPartIds(modelPtr), length);
				for (var i = 0; i < _ids.length; i++) {
					this.ids[i] = _em.UTF8ToString(_ids[i]);
				}
				length = _csm.getPartCount(modelPtr);
				this.opacities = new Float32Array(_em.HEAPF32.buffer, _csm.getPartOpacities(modelPtr), length);
				length = _csm.getPartCount(modelPtr);
				this.parentIndices = new Int32Array(_em.HEAP32.buffer, _csm.getPartParentPartIndices(modelPtr), length);
			}
			return Parts;
		}());
		Live2DCubismCore.Parts = Parts;
		var Drawables = /** @class */ (function () {
			function Drawables(modelPtr) {
				this._modelPtr = modelPtr;
				var length = 0;
				var length2 = null;
				this.count = _csm.getDrawableCount(modelPtr);
				length = _csm.getDrawableCount(modelPtr);
				this.ids = new Array(length);
				var _ids = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableIds(modelPtr), length);
				for (var i = 0; i < _ids.length; i++) {
					this.ids[i] = _em.UTF8ToString(_ids[i]);
				}
				length = _csm.getDrawableCount(modelPtr);
				this.constantFlags = new Uint8Array(_em.HEAPU8.buffer, _csm.getDrawableConstantFlags(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.dynamicFlags = new Uint8Array(_em.HEAPU8.buffer, _csm.getDrawableDynamicFlags(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.textureIndices = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableTextureIndices(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.drawOrders = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableDrawOrders(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.renderOrders = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableRenderOrders(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.opacities = new Float32Array(_em.HEAPF32.buffer, _csm.getDrawableOpacities(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.maskCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableMaskCounts(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.vertexCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				this.indexCounts = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableIndexCounts(modelPtr), length);
				length = _csm.getDrawableCount(modelPtr);
				length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableMaskCounts(modelPtr), length);
				this.masks = new Array(length);
				var _masks = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableMasks(modelPtr), length);
				for (var i = 0; i < _masks.length; i++) {
					this.masks[i] = new Int32Array(_em.HEAP32.buffer, _masks[i], length2[i]);
				}
				length = _csm.getDrawableCount(modelPtr);
				length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length);
				this.vertexPositions = new Array(length);
				var _vertexPositions = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableVertexPositions(modelPtr), length);
				for (var i = 0; i < _vertexPositions.length; i++) {
					this.vertexPositions[i] = new Float32Array(_em.HEAPF32.buffer, _vertexPositions[i], length2[i] * 2);
				}
				length = _csm.getDrawableCount(modelPtr);
				length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableVertexCounts(modelPtr), length);
				this.vertexUvs = new Array(length);
				var _vertexUvs = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableVertexUvs(modelPtr), length);
				for (var i = 0; i < _vertexUvs.length; i++) {
					this.vertexUvs[i] = new Float32Array(_em.HEAPF32.buffer, _vertexUvs[i], length2[i] * 2);
				}
				length = _csm.getDrawableCount(modelPtr);
				length2 = new Int32Array(_em.HEAP32.buffer, _csm.getDrawableIndexCounts(modelPtr), length);
				this.indices = new Array(length);
				var _indices = new Uint32Array(_em.HEAPU32.buffer, _csm.getDrawableIndices(modelPtr), length);
				for (var i = 0; i < _indices.length; i++) {
					this.indices[i] = new Uint16Array(_em.HEAPU16.buffer, _indices[i], length2[i]);
				}
			}
			Drawables.prototype.resetDynamicFlags = function () {
				_csm.resetDrawableDynamicFlags(this._modelPtr);
			};
			return Drawables;
		}());
		Live2DCubismCore.Drawables = Drawables;
		var Utils = /** @class */ (function () {
			function Utils() {
			}
			Utils.hasBlendAdditiveBit = function (bitfield) {
				return (bitfield & (1 << 0)) == (1 << 0);
			};
			Utils.hasBlendMultiplicativeBit = function (bitfield) {
				return (bitfield & (1 << 1)) == (1 << 1);
			};
			Utils.hasIsDoubleSidedBit = function (bitfield) {
				return (bitfield & (1 << 2)) == (1 << 2);
			};
			Utils.hasIsInvertedMaskBit = function (bitfield) {
				return (bitfield & (1 << 3)) == (1 << 3);
			};
			Utils.hasIsVisibleBit = function (bitfield) {
				return (bitfield & (1 << 0)) == (1 << 0);
			};
			Utils.hasVisibilityDidChangeBit = function (bitfield) {
				return (bitfield & (1 << 1)) == (1 << 1);
			};
			Utils.hasOpacityDidChangeBit = function (bitfield) {
				return (bitfield & (1 << 2)) == (1 << 2);
			};
			Utils.hasDrawOrderDidChangeBit = function (bitfield) {
				return (bitfield & (1 << 3)) == (1 << 3);
			};
			Utils.hasRenderOrderDidChangeBit = function (bitfield) {
				return (bitfield & (1 << 4)) == (1 << 4);
			};
			Utils.hasVertexPositionsDidChangeBit = function (bitfield) {
				return (bitfield & (1 << 5)) == (1 << 5);
			};
			return Utils;
		}());
		Live2DCubismCore.Utils = Utils;
		var _em_module=function(){var _scriptDir="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(_scriptDir=_scriptDir||__filename),function(_em_module){var b;_em_module=_em_module||{},b=b||(void 0!==_em_module?_em_module:{});var n,l={};for(n in b)b.hasOwnProperty(n)&&(l[n]=b[n]);var t,p=!1,q=!1,r=!1;p="object"==typeof window,q="function"==typeof importScripts,r="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&!p&&!q,t=!p&&!r&&!q;var v,w,x,y,u="";r?(u=__dirname+"/",v=function(a,c){var d=z(a);return d?c?d:d.toString():(x=x||require("fs"),a=(y=y||require("path")).normalize(a),x.readFileSync(a,c?null:"utf8"))},w=function(a){return(a=v(a,!0)).buffer||(a=new Uint8Array(a)),assert(a.buffer),a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a}),process.on("unhandledRejection",B),b.inspect=function(){return"[Emscripten Module object]"}):t?("undefined"!=typeof read&&(v=function(a){var c=z(a);return c?C(c):read(a)}),w=function(a){var c;return(c=z(a))?c:"function"==typeof readbuffer?new Uint8Array(readbuffer(a)):(assert("object"==typeof(c=read(a,"binary"))),c)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(p||q)&&(q?u=self.location.href:document.currentScript&&(u=document.currentScript.src),_scriptDir&&(u=_scriptDir),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",v=function(a){try{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.send(null),c.responseText}catch(d){if(a=z(a))return C(a);throw d}},q&&(w=function(a){try{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}catch(d){if(a=z(a))return a;throw d}}));var F,D=b.print||console.log.bind(console),E=b.printErr||console.warn.bind(console);for(n in l)l.hasOwnProperty(n)&&(b[n]=l[n]);function da(){return{exports:function(asmLibraryArg,wasmMemory,wasmTable){var scratchBuffer=new ArrayBuffer(8),b=new Int32Array(scratchBuffer),c=new Float32Array(scratchBuffer),d=new Float64Array(scratchBuffer);function e(index){return b[index]}function f(index,value){b[index]=value}function g(){return d[0]}function h(value){d[0]=value}function j(value){c[0]=value}function k(){return c[0]}var mem,U,global,env,buffer,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,C,H,I,J,K,L,M,T=(mem=wasmMemory.buffer,U=new Uint8Array(mem),function(offset,s){var V,W;if("undefined"==typeof Buffer)for(V=atob(s),W=0;W<V.length;W++)U[offset+W]=V.charCodeAt(W);else for(V=Buffer.from(s,"base64"),W=0;W<V.length;W++)U[offset+W]=V[W]});return T(1024,"CgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAE1PQzMAW0NTTV0gW0VdJXM6ICVzCgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgAlcwoAICAAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIENvcnJ1cHRlZCAgbW9jMyBmaWxlLgoAImFkZHJlc3MiIGlzIG51bGwuAFtDU01dIFtXXVJvdGF0aW9uRGVmb3JtZXI6IE5vdCBmb3VuZCB0cmFuc2Zvcm1lZCBEaXJlY3Rpb24uCgAlMDJYIABbQ1NNXSBbRV1jc21SZXZpdmVNb2NJblBsYWNlIGlzIGZhaWxlZC4gVGhlIENvcmUgdW5zdXBwb3J0IGxhdGVyIHRoYW4gbW9jMyB2ZXI6WyVkXS4gVGhpcyBtb2MzIHZlciBpcyBbJWRdLgoAImFkZHJlc3MiIGFsaWdubWVudCBpcyBpbnZhbGlkLgBbQ1NNXSBbRV1VcGRhdGVEZWZvcm1lckhpZXJhcmNoeSgpOiBVbmtub3duIERlZm9ybWVyIFR5cGUuCgBbQ1NNXSBbRV1jc21HZXRNb2NWZXJzaW9uIGlzIGZhaWxlZC4gQ29ycnVwdGVkIG1vYzMgZmlsZS4KACJzaXplIiBpcyBpbnZhbGlkLgBMaXZlMkQgQ3ViaXNtIFNESyBDb3JlIFZlcnNpb24gJWQuJWQuJWQAIm1vZGVsIiBpcyBpbnZhbGlkLgBjc21HZXRNb2NWZXJzaW9uAGNzbVJldml2ZU1vY0luUGxhY2UAY3NtUmVhZENhbnZhc0luZm8AIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AY3NtR2V0U2l6ZW9mTW9kZWwAIm1vYyIgaXMgaW52YWxpZC4AY3NtSW5pdGlhbGl6ZU1vZGVsSW5QbGFjZQAic2l6ZSIgaXMgaW52YWxpZABjc21VcGRhdGVNb2RlbABjc21HZXRQYXJhbWV0ZXJDb3VudABjc21HZXRQYXJhbWV0ZXJJZHMAY3NtR2V0UGFyYW1ldGVyTWluaW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJNYXhpbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlckRlZmF1bHRWYWx1ZXMAY3NtR2V0UGFyYW1ldGVyVmFsdWVzAGNzbUdldFBhcnRDb3VudABjc21HZXRQYXJ0SWRzAGNzbUdldFBhcnRPcGFjaXRpZXMAY3NtR2V0UGFydFBhcmVudFBhcnRJbmRpY2VzAGNzbUdldERyYXdhYmxlQ291bnQAY3NtR2V0RHJhd2FibGVJZHMAY3NtR2V0RHJhd2FibGVDb25zdGFudEZsYWdzAGNzbUdldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldERyYXdhYmxlVGV4dHVyZUluZGljZXMAY3NtR2V0RHJhd2FibGVEcmF3T3JkZXJzAGNzbUdldERyYXdhYmxlUmVuZGVyT3JkZXJzAGNzbUdldERyYXdhYmxlT3BhY2l0aWVzAGNzbUdldERyYXdhYmxlTWFza0NvdW50cwBjc21HZXREcmF3YWJsZU1hc2tzAGNzbUdldERyYXdhYmxlVmVydGV4Q291bnRzAGNzbUdldERyYXdhYmxlVmVydGV4UG9zaXRpb25zAGNzbUdldERyYXdhYmxlVmVydGV4VXZzAGNzbUdldERyYXdhYmxlSW5kZXhDb3VudHMAY3NtR2V0RHJhd2FibGVJbmRpY2VzAGNzbVJlc2V0RHJhd2FibGVEeW5hbWljRmxhZ3M="),T(2572,"Cw=="),T(2611,"//////8="),T(2680,"GBgAAC0rICAgMFgweAAobnVsbCkAAAAAEQAKABEREQAAAAAFAAAAAAAACQAAAAAL"),T(2736,"EQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERER"),T(2785,"Cw=="),T(2794,"EQAKChEREQAKAAACAAkLAAAACQALAAAL"),T(2843,"DA=="),T(2855,"DAAAAAAMAAAAAAkMAAAAAAAMAAAM"),T(2901,"Dg=="),T(2913,"DQAAAAQNAAAAAAkOAAAAAAAOAAAO"),T(2959,"EA=="),T(2971,"DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"),T(3026,"EgAAABISEgAAAAAAAAk="),T(3075,"Cw=="),T(3087,"CgAAAAAKAAAAAAkLAAAAAAALAAAL"),T(3133,"DA=="),T(3145,"DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAu"),T(3232,"AwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGA"),T(6019,"QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNThj7T7aD0k/Xph7P9oPyT9pN6wxaCEiM7QPFDNoIaIz2w9JP9sPSb/kyxZA5MsWwAAAAAAAAACA2w9JQNsPScAAAIA/AADAPwAAAADcz9E1AAAAAADAFT8="),T(6168,"BQ=="),T(6180,"DA=="),T(6204,"DQAAAA4AAADIGQAAAAQ="),T(6228,"AQ=="),T(6243,"Cv////8="),T(6500,"9B0="),global={Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:1/0,Math:Math},env=asmLibraryArg,buffer=wasmMemory.buffer,m=env.memory,n=wasmTable,o=new global.Int8Array(buffer),p=new global.Int16Array(buffer),q=new global.Int32Array(buffer),r=new global.Uint8Array(buffer),s=new global.Uint16Array(buffer),t=new global.Uint32Array(buffer),u=new global.Float32Array(buffer),v=new global.Float64Array(buffer),w=global.Math.imul,x=global.Math.fround,y=global.Math.abs,z=global.Math.clz32,A=global.Math.min,global.Math.max,C=global.Math.floor,global.Math.ceil,global.Math.sqrt,env.abort,global.NaN,H=global.Infinity,I=env.emscripten_memcpy_big,J=env.emscripten_resize_heap,K=env.fd_write,L=5251088,M=0,n[1]=function(a,bf,cf,df){a|=0,bf|=0,cf|=0,df|=0;var Gf,ef=0,ff=x(0),gf=x(0),hf=0,jf=x(0),kf=x(0),lf=x(0),mf=0,nf=x(0),of=x(0),pf=x(0),qf=x(0),rf=x(0),sf=x(0),tf=x(0),uf=x(0),vf=x(0),wf=x(0),xf=x(0),yf=x(0),zf=x(0),Af=x(0),Bf=0,Cf=0,Df=x(0),Ef=x(0),Ff=0,Hf=0,If=x(0),Jf=x(0),Kf=0,Lf=0,Mf=0,Nf=0,Of=0,Pf=0,Qf=0,Rf=0,Sf=0,Tf=x(0),Uf=x(0),Vf=x(0),Wf=x(0),Xf=x(0),Yf=x(0),Zf=x(0),_f=0,$f=0;if(L=Gf=L-32|0,1<=(0|df))for(Of=(Bf=q[a+4>>2])+-1|0,Pf=(Hf=q[a>>2])+-1|0,Qf=Lf=(mf=q[a+20>>2])+(Bf<<3)|0,Rf=Mf=((Kf=w(Hf,Cf=Bf+1|0))<<3)+mf|0,Sf=Nf=(Bf+Kf<<3)+mf|0,If=x(0|Hf),Jf=x(0|Bf),_f=q[a+8>>2],a=0;;){lf=u[4+(ef=(Ff=a<<3)+bf|0)>>2],gf=x(lf*If),nf=u[ef>>2],ff=x(nf*Jf),ef=lf>=x(1);a:if(lf<x(0)^1&&!(ef|nf>=x(1)|nf<x(0)))ef=x(y(sf=gf))<x(2147483648)?~~gf:-2147483648,kf=x(sf-x(0|ef)),hf=x(y(gf=ff))<x(2147483648)?~~ff:-2147483648,jf=x(gf-x(0|hf)),ef=hf+w(ef,Cf)|0,gf=_f?(ff=x(x(1)-kf),gf=x(x(1)-jf),hf=(ef<<3)+mf|0,ef=(ef+Cf<<3)+mf|0,u[cf+Ff>>2]=x(x(x(ff*x(gf*u[hf>>2]))+x(ff*x(jf*u[hf+8>>2])))+x(kf*x(gf*u[ef>>2])))+x(kf*x(jf*u[ef+8>>2])),ff=x(x(x(ff*x(gf*u[hf+4>>2]))+x(ff*x(jf*u[hf+12>>2])))+x(kf*x(gf*u[ef+4>>2]))),x(kf*x(jf*u[ef+12>>2]))):x(jf+kf)<=x(1)?(ff=x(x(x(1)-jf)-kf),hf=(ef<<3)+mf|0,ef=(ef+Cf<<3)+mf|0,u[cf+Ff>>2]=x(x(ff*u[hf>>2])+x(jf*u[hf+8>>2]))+x(kf*u[ef>>2]),ff=x(x(ff*u[hf+4>>2])+x(jf*u[hf+12>>2])),x(kf*u[ef+4>>2])):(ff=x(x(jf+x(-1))+kf),hf=(ef+Cf<<3)+mf|0,gf=x(x(1)-jf),lf=x(x(1)-kf),ef=(ef<<3)+mf|0,u[cf+Ff>>2]=x(x(ff*u[hf+8>>2])+x(gf*u[hf>>2]))+x(lf*u[ef+8>>2]),ff=x(x(ff*u[hf+12>>2])+x(gf*u[hf+4>>2])),x(lf*u[ef+12>>2]));else{if($f||(sf=u[Sf+4>>2],Tf=u[mf+4>>2],of=x(sf-Tf),Uf=u[Qf+4>>2],Vf=u[Rf+4>>2],pf=x(Uf-Vf),tf=x(x(of-pf)*x(.5)),Wf=u[Nf>>2],Xf=u[mf>>2],qf=x(Wf-Xf),Yf=u[Lf>>2],Zf=u[Mf>>2],rf=x(Yf-Zf),uf=x(x(qf-rf)*x(.5)),pf=x(x(pf+of)*x(.5)),rf=x(x(rf+qf)*x(.5)),$f=1,of=x(x(x(x(x(Tf+Uf)+Vf)+sf)*x(.25))-x(of*x(.5))),qf=x(x(x(x(x(Xf+Yf)+Zf)+Wf)*x(.25))-x(qf*x(.5)))),!(lf<x(3)^1|nf>x(-2)^1|(nf<x(3)^1|lf>x(-2)^1))){b:if(nf<=x(0)){if(lf<=x(0)){kf=x(x(lf+x(2))*x(.5)),jf=x(x(nf+x(2))*x(.5)),ff=x(tf+tf),Df=x(of-ff),gf=x(uf+uf),Ef=x(qf-gf),zf=x(of-x(pf+pf)),vf=x(zf-ff),Af=x(qf-x(rf+rf)),wf=x(Af-gf),xf=u[mf+4>>2],yf=u[mf>>2];break b}if(ef){ff=x(tf*x(3)),gf=x(of-x(pf+pf)),zf=x(ff+gf),vf=x(uf*x(3)),wf=x(qf-x(rf+rf)),Af=x(vf+wf),kf=x(x(lf+x(-1))*x(.5)),jf=x(x(nf+x(2))*x(.5)),xf=x(ff+of),yf=x(vf+qf),vf=x(tf+gf),wf=x(uf+wf),Df=u[Rf+4>>2],Ef=u[Mf>>2];break b}ff=x(of-x(pf+pf)),ef=Pf,hf=x(y(gf))<x(2147483648)?~~gf:-2147483648,kf=x(0|(ef=(0|hf)==(0|Hf)?ef:hf)),jf=x(kf/If),vf=x(x(jf*tf)+ff),sf=x(jf*uf),jf=x(qf-x(rf+rf)),wf=x(sf+jf),lf=x(x(0|(hf=ef+1|0))/If),zf=x(x(lf*tf)+ff),Af=x(x(lf*uf)+jf),jf=x(x(nf+x(2))*x(.5)),kf=x(gf-kf),ef=(w(ef,Cf)<<3)+mf|0,Df=u[ef+4>>2],Ef=u[ef>>2],ef=(w(hf,Cf)<<3)+mf|0,xf=u[ef+4>>2],yf=u[ef>>2]}else if(nf>=x(1)){if(lf<=x(0)){kf=x(x(lf+x(2))*x(.5)),jf=x(x(nf+x(-1))*x(.5)),ff=x(tf+tf),vf=x(x(pf+of)-ff),gf=x(uf+uf),wf=x(x(rf+qf)-gf),xf=x(x(pf*x(3))+of),Df=x(xf-ff),yf=x(x(rf*x(3))+qf),Ef=x(yf-gf),zf=u[Qf+4>>2],Af=u[Lf>>2];break b}if(ef){ff=x(tf*x(3)),zf=x(ff+x(pf+of)),gf=x(uf*x(3)),Af=x(gf+x(rf+qf)),sf=ff,ff=x(x(pf*x(3))+of),xf=x(sf+ff),sf=gf,gf=x(x(rf*x(3))+qf),yf=x(sf+gf),kf=x(x(lf+x(-1))*x(.5)),jf=x(x(nf+x(-1))*x(.5)),Df=x(tf+ff),Ef=x(uf+gf),vf=u[Sf+4>>2],wf=u[Nf>>2];break b}ff=x(x(pf*x(3))+of),ef=Pf,hf=x(y(gf))<x(2147483648)?~~gf:-2147483648,kf=x(0|(ef=(0|hf)==(0|Hf)?ef:hf)),jf=x(kf/If),Df=x(x(jf*tf)+ff),sf=x(jf*uf),jf=x(x(rf*x(3))+qf),Ef=x(sf+jf),lf=x(x(0|(hf=ef+1|0))/If),xf=x(x(lf*tf)+ff),yf=x(x(lf*uf)+jf),jf=x(x(nf+x(-1))*x(.5)),kf=x(gf-kf),ef=(w(ef,Cf)+Bf<<3)+mf|0,vf=u[ef+4>>2],wf=u[ef>>2],ef=(w(hf,Cf)+Bf<<3)+mf|0,zf=u[ef+4>>2],Af=u[ef>>2]}else lf<=x(0)?(kf=x(x(lf+x(2))*x(.5)),ef=Of,hf=x(y(gf=ff))<x(2147483648)?~~ff:-2147483648,ff=x(0|(ef=(0|hf)==(0|Bf)?ef:hf)),jf=x(gf-ff),ff=x(ff/Jf),gf=x(tf+tf),vf=x(x(x(ff*pf)+of)-gf),sf=x(x(ff*rf)+qf),ff=x(uf+uf),wf=x(sf-ff),lf=x(x(0|(hf=ef+1|0))/Jf),Df=x(x(x(lf*pf)+of)-gf),Ef=x(x(x(lf*rf)+qf)-ff),zf=u[4+(ef=(ef<<3)+mf|0)>>2],Af=u[ef>>2],xf=u[4+(ef=(hf<<3)+mf|0)>>2],yf=u[ef>>2]):ef?(sf=gf=x(tf*x(3)),ef=Of,hf=x(y(ff))<x(2147483648)?~~ff:-2147483648,jf=x(0|(ef=(0|hf)==(0|Bf)?ef:hf)),kf=x(jf/Jf),zf=x(sf+x(x(kf*pf)+of)),nf=x(uf*x(3)),Af=x(nf+x(x(kf*rf)+qf)),sf=gf,gf=x(x(0|(hf=ef+1|0))/Jf),xf=x(sf+x(x(gf*pf)+of)),yf=x(nf+x(x(gf*rf)+qf)),kf=x(x(lf+x(-1))*x(.5)),jf=x(ff-jf),vf=u[4+(ef=(ef+Kf<<3)+mf|0)>>2],wf=u[ef>>2],Df=u[4+(ef=(hf+Kf<<3)+mf|0)>>2],Ef=u[ef>>2]):(v[16+Gf>>3]=lf,q[Gf>>2]=a,v[8+Gf>>3]=nf,Y(4,1104,Gf));if(x(jf+kf)<=x(1)){u[cf+Ff>>2]=x(wf+x(x(Ef-wf)*jf))+x(x(Af-wf)*kf),ff=x(vf+x(x(Df-vf)*jf)),gf=x(x(zf-vf)*kf);break a}ff=x(x(1)-jf),gf=x(x(1)-kf),u[cf+Ff>>2]=x(yf+x(x(Af-yf)*ff))+x(x(Ef-yf)*gf),ff=x(xf+x(x(zf-xf)*ff)),gf=x(x(Df-xf)*gf);break a}u[cf+Ff>>2]=x(lf*uf)+x(x(nf*rf)+qf),ff=x(lf*tf),gf=x(x(nf*pf)+of)}if(u[4+(cf+Ff|0)>>2]=ff+gf,(0|df)==(0|(a=a+1|0)))break}L=32+Gf|0},n[2]=function(a,qe,re){a|=0,qe|=0;var Ge,He,Ie,Fe=0;if(He=q[140+(re|=0)>>2],Ie=q[re+136>>2],Ge=q[a+24>>2],-1==(0|(Fe=q[a+4>>2])))return q[(a=qe<<2)+Ie>>2]=q[Ge+16>>2],void(q[a+He>>2]=1065353216);re=q[re+4>>2]+(Fe<<5)|0,Fe=q[Ge+20>>2],n[q[re+20>>2]](q[re+24>>2],Fe,Fe,q[Ge+12>>2]),qe<<=2,a=q[a+4>>2]<<2,u[qe+Ie>>2]=u[Ge+16>>2]*u[a+Ie>>2],q[qe+He>>2]=q[a+He>>2]},n[3]=function(a,qe,re,Je){a|=0,qe|=0,re|=0,Je|=0;var Se,Ke=x(0),Le=x(0),Me=x(0),Ne=x(0),Oe=0,Pe=x(0),Qe=0,Re=x(0),Te=x(0),Ue=x(0);if(Oe=q[a+28>>2],Le=function(a){var Rb,Pb=x(0),Qb=0,Sb=0,Tb=0;L=Rb=L-16|0,j(a);a:if((Qb=2147483647&(Sb=e(0)))>>>0<=1061752794){if(Pb=x(1),Qb>>>0<964689920)break a;Pb=aa(+a)}else if(Qb>>>0<=1081824209){if(Tb=+a,1075235812<=Qb>>>0){Pb=x(-aa(((0|Sb)<0?3.141592653589793:-3.141592653589793)+Tb));break a}if((0|Sb)<=-1){Pb=$(Tb+1.5707963267948966);break a}Pb=$(1.5707963267948966-Tb)}else if(Qb>>>0<=1088565717){if(1085271520<=Qb>>>0){Pb=aa(+a+((0|Sb)<0?6.283185307179586:-6.283185307179586));break a}if((0|Sb)<=-1){Pb=$(-4.71238898038469-a);break a}Pb=$(a-4.71238898038469)}else if(Pb=x(a-a),!(2139095040<=Qb>>>0))if((Qb=3&la(a,8+Rb|0))>>>0<=2){b:switch(Qb-1|0){default:Pb=aa(v[8+Rb>>3]);break a;case 0:Pb=$(-v[8+Rb>>3]);break a;case 1:}Pb=x(-aa(v[8+Rb>>3]))}else Pb=$(v[8+Rb>>3]);return L=16+Rb|0,a=Pb}(Ke=x(x(x(u[a>>2]+u[a+20>>2])*x(3.1415927410125732))/x(180))),Me=u[a+8>>2],Se=q[a+24>>2],Ke=function(a){var Mb,Fb=0,Nb=0,Ob=0;L=Mb=L-16|0,j(a);a:if((Fb=2147483647&(Ob=e(0)))>>>0<=1061752794){if(Fb>>>0<964689920)break a;a=$(+a)}else if(Fb>>>0<=1081824209){if(Nb=+a,Fb>>>0<=1075235811){if((0|Ob)<=-1){a=x(-aa(Nb+1.5707963267948966));break a}a=aa(Nb+-1.5707963267948966);break a}a=$(-(((0|Ob)<0?3.141592653589793:-3.141592653589793)+Nb))}else if(Fb>>>0<=1088565717){if(Nb=+a,Fb>>>0<=1085271519){if((0|Ob)<=-1){a=aa(Nb+4.71238898038469);break a}a=x(-aa(Nb+-4.71238898038469));break a}a=$(((0|Ob)<0?6.283185307179586:-6.283185307179586)+Nb)}else if(2139095040<=Fb>>>0)a=x(a-a);else if((Fb=3&la(a,8+Mb|0))>>>0<=2){b:switch(Fb-1|0){default:a=$(v[8+Mb>>3]);break a;case 0:a=aa(v[8+Mb>>3]);break a;case 1:}a=$(-v[8+Mb>>3])}else a=x(-aa(v[8+Mb>>3]));return L=16+Mb|0,a}(Ke),0<(0|Je))for(Le=x(Me*Le),Pe=x(Oe?-1:1),Te=x(Le*Pe),Ne=x(Se?-1:1),Ue=x(Ne*x(Me*Ke)),Le=x(Ne*Le),Me=x(x(Me*x(-Ke))*Pe),Ke=u[a+16>>2],Pe=u[a+12>>2];Oe=(a=Qe<<3)+re|0,Ne=u[(a=a+qe|0)>>2],Re=u[a+4>>2],u[Oe+4>>2]=Ke+x(x(Ue*Ne)+x(Te*Re)),u[Oe>>2]=Pe+x(x(Le*Ne)+x(Me*Re)),(0|(Qe=Qe+1|0))!=(0|Je););},n[4]=function(a,qe,re){a|=0,qe|=0,re|=0;var se,te,ze,Ae,Be,ue=0,ve=x(0),we=x(0),xe=0,ye=x(0),Ce=x(0),De=x(0),Ee=x(0);if(L=se=L+-64|0,ze=q[re+140>>2],Ae=q[re+136>>2],te=q[a+24>>2],-1!=(0|(Be=q[a+4>>2]))){ue=q[re+4>>2],xe=q[te+12>>2],q[24+se>>2]=xe,re=q[te+16>>2],q[28+se>>2]=re,q[16+se>>2]=0,Ce=1==q[8+(ue=ue+(Be<<5)|0)>>2]?x(-10):x(-.10000000149011612),u[20+se>>2]=Ce,q[60+se>>2]=re,q[56+se>>2]=xe,n[q[ue+20>>2]](q[ue+24>>2],56+se|0,48+se|0,1),ye=x(1),xe=9;b:{for(;;){if(re=xe,De=x(ye*x(0)),u[32+se>>2]=De+u[56+se>>2],Ee=x(Ce*ye),u[36+se>>2]=Ee+u[60+se>>2],n[q[ue+20>>2]](q[ue+24>>2],32+se|0,40+se|0,1),we=x(u[44+se>>2]-u[52+se>>2]),u[44+se>>2]=we,ve=x(u[40+se>>2]-u[48+se>>2]),u[40+se>>2]=ve,we!=x(0)||ve!=x(0)){re=q[44+se>>2],q[8+se>>2]=q[40+se>>2],q[12+se>>2]=re;break b}if(u[32+se>>2]=u[56+se>>2]-De,u[36+se>>2]=u[60+se>>2]-Ee,n[q[ue+20>>2]](q[ue+24>>2],32+se|0,40+se|0,1),we=x(u[40+se>>2]-u[48+se>>2]),u[40+se>>2]=we,ve=x(u[44+se>>2]-u[52+se>>2]),(u[44+se>>2]=ve)!=x(0)||we!=x(0)){u[12+se>>2]=-ve,u[8+se>>2]=-we;break b}if(xe=re+-1|0,ye=x(ye*x(.10000000149011612)),!re)break}Y(3,1265,0)}ve=function(a,dh){var eh=x(0);if((eh=x(Aa(u[a+4>>2],u[a>>2])-Aa(u[dh+4>>2],u[dh>>2])))<x(-3.1415927410125732))for(;(eh=x(eh+x(6.2831854820251465)))<x(-3.1415927410125732););if(eh>x(3.1415927410125732))for(;(eh=x(eh+x(-6.2831854820251465)))>x(3.1415927410125732););return eh}(16+se|0,8+se|0),n[q[ue+20>>2]](q[ue+24>>2],24+se|0,24+se|0,1),q[te+12>>2]=q[24+se>>2],q[te+16>>2]=q[28+se>>2],u[te+20>>2]=u[te+20>>2]+x(x(ve*x(-180))/x(3.1415927410125732)),qe<<=2,a=q[a+4>>2]<<2,u[qe+Ae>>2]=u[te+4>>2]*u[a+Ae>>2],ve=x(u[te+8>>2]*u[a+ze>>2]),u[qe+ze>>2]=ve,u[te+8>>2]=ve}else q[(a=qe<<2)+Ae>>2]=q[te+4>>2],q[a+ze>>2]=q[te+8>>2];L=64+se|0},n[5]=function(a){a|=0;var hg,lg,bf=0,cf=0,df=0,ag=0,bg=0,cg=x(0),dg=0,eg=0,fg=0,gg=0,ig=0,jg=0,kg=0,mg=0,ng=0,og=0,pg=0;if(fg=q[a+248>>2],lg=q[a+204>>2],hg=q[a+200>>2],!((0|(bg=q[a+220>>2]))<1)){for(dg=q[a+236>>2],ag=q[a+216>>2],df=q[a+224>>2];u[(cf=bf<<2)+dg>>2]=u[cf+df>>2]*u[cf+ag>>2],(0|bg)!=(0|(bf=bf+1|0)););if(!((0|bg)<1))for(dg=q[a+240>>2],ag=q[a+216>>2],df=q[a+228>>2],bf=0;u[(cf=bf<<2)+dg>>2]=u[cf+df>>2]*u[cf+ag>>2],(0|bg)!=(0|(bf=bf+1|0)););}if(1<=(0|hg))for(mg=q[a+208>>2],bg=dg=0;;){if(q[fg>>2]){gg=(df=q[(cf=dg<<2)+q[a+212>>2]>>2])+bg|0;c:{if((0|df)<=0)q[cf+q[a+276>>2]>>2]=0;else{for(ag=q[a+236>>2],cg=x(0),bf=bg;cg=x(cg+u[ag+(bf<<2)>>2]),(0|(bf=bf+1|0))<(0|gg););if(u[cf+q[a+276>>2]>>2]=cg,!((0|df)<1)){for(ag=q[a+240>>2],cg=x(0),bf=bg;cg=x(cg+u[ag+(bf<<2)>>2]),(0|(bf=bf+1|0))<(0|gg););break c}}cg=x(0)}if(bf=cf+q[a+268>>2]|0,cg=x(cg+x(.0010000000474974513)),ag=x(y(cg))<x(2147483648)?~~cg:-2147483648,q[bf>>2]=ag,ag=(bf=q[12+((dg<<4)+lg|0)>>2])<<1,ig=q[cf+q[a+272>>2]>>2],(bf=(0|bf)<1)||ba(ig,0,(1<(0|ag)?ag:1)<<2),!(bf|(0|df)<1))for(jg=q[a+244>>2],ng=q[a+216>>2],og=q[a+232>>2],cf=bg;;){for(eg=(bf=cf<<2)+ng|0,pg=q[bf+og>>2],df=bf=0;u[jg+(kg=df<<2)>>2]=u[pg+kg>>2]*u[eg>>2],(0|(df=df+1|0))<(0|ag););for(;u[(eg=(df=bf<<2)+ig|0)>>2]=u[df+jg>>2]+u[eg>>2],(0|(bf=bf+1|0))<(0|ag););if(!((0|(cf=cf+1|0))<(0|gg)))break}}if(fg=fg+4|0,bg=q[(dg<<2)+mg>>2]+bg|0,(0|hg)==(0|(dg=dg+1|0)))break}},n[6]=function(a){a|=0;var Lg,Pg,Cg=0,Dg=0,Eg=0,Fg=0,Gg=0,Hg=0,Ig=x(0),Jg=0,Kg=0,Mg=0,Ng=0,Og=0,Qg=0,Rg=0,Sg=0,Tg=0,Ug=0;if(Kg=q[a+172>>2],Lg=q[a- -64>>2],Pg=q[a+68>>2],1<=(0|(Eg=q[a+92>>2])))for(Gg=q[a+104>>2],Hg=q[a+88>>2],Dg=q[a+96>>2];u[(Fg=Cg<<2)+Gg>>2]=u[Dg+Fg>>2]*u[Hg+Fg>>2],(0|Eg)!=(0|(Cg=Cg+1|0)););if(1<=(0|Lg))for(Qg=q[a+80>>2],Fg=Gg=0;;){if(q[Kg>>2]){if(Mg=(Cg=q[q[a+84>>2]+(Gg<<2)>>2])+Fg|0,Eg=(0|Cg)<1)Ig=x(0);else for(Hg=q[a+104>>2],Ig=x(0),Cg=Fg;Ig=x(Ig+u[Hg+(Cg<<2)>>2]),(0|(Cg=Cg+1|0))<(0|Mg););if(Cg=w(Gg,24)+Pg|0,u[Cg+16>>2]=Ig,Hg=(Dg=q[Cg+12>>2])<<1,(Dg=(0|Dg)<1)||ba(q[Cg+20>>2],0,(1<(0|Hg)?Hg:1)<<2),!(Dg|Eg))for(Rg=q[Cg+20>>2],Ng=q[a+108>>2],Sg=q[a+88>>2],Tg=q[a+100>>2],Eg=Fg;;){for(Jg=(Cg=Eg<<2)+Sg|0,Ug=q[Cg+Tg>>2],Dg=Cg=0;u[(Og=Dg<<2)+Ng>>2]=u[Ug+Og>>2]*u[Jg>>2],(0|(Dg=Dg+1|0))<(0|Hg););for(;u[(Jg=(Dg=Cg<<2)+Rg|0)>>2]=u[Dg+Ng>>2]+u[Jg>>2],(0|(Cg=Cg+1|0))<(0|Hg););if(!((0|(Eg=Eg+1|0))<(0|Mg)))break}}if(Kg=Kg+4|0,Fg=q[(Gg<<2)+Qg>>2]+Fg|0,(0|Lg)==(0|(Gg=Gg+1|0)))break}},n[7]=function(a){a|=0;var ch,Vg=0,Wg=x(0),Xg=0,Yg=0,Zg=0,_g=0,$g=0,ah=0,bh=0;if($g=q[a+36>>2],ch=q[a+4>>2],1<=(0|(Yg=q[a+24>>2])))for(ah=q[a+32>>2],bh=q[a+20>>2],Xg=q[a+28>>2];u[(Zg=Vg<<2)+ah>>2]=u[Xg+Zg>>2]*u[Zg+bh>>2],(0|Yg)!=(0|(Vg=Vg+1|0)););if(1<=(0|ch))for(Zg=q[a+12>>2],Xg=0;;){if(q[$g>>2]){if((0|(Vg=q[(Yg=_g<<2)+q[a+16>>2]>>2]))<1)Wg=x(0);else for(ah=Vg+Xg|0,bh=q[a+32>>2],Wg=x(0),Vg=Xg;Wg=x(Wg+u[bh+(Vg<<2)>>2]),(0|(Vg=Vg+1|0))<(0|ah););Vg=Yg+q[a+44>>2]|0,Wg=x(Wg+x(.0010000000474974513)),x(y(Wg))<x(2147483648)?q[Vg>>2]=~~Wg:q[Vg>>2]=-2147483648}if($g=$g+4|0,Xg=q[Zg+(_g<<2)>>2]+Xg|0,(0|ch)==(0|(_g=_g+1|0)))break}},n[8]=function(a){a|=0;var yg,Bg,qg=0,rg=0,sg=x(0),tg=0,ug=0,vg=0,wg=0,xg=0,zg=0,Ag=0;if(Ag=q[a+176>>2],Bg=q[a+72>>2],yg=q[a+76>>2],!((0|(vg=q[a+124>>2]))<1)){for(wg=q[a+148>>2],tg=q[a+120>>2],ug=q[a+128>>2];u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1)){for(wg=q[a+152>>2],tg=q[a+120>>2],ug=q[a+132>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1)){for(wg=q[a+156>>2],tg=q[a+120>>2],ug=q[a+136>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1)){for(wg=q[a+160>>2],tg=q[a+120>>2],ug=q[a+140>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1))for(wg=q[a+164>>2],tg=q[a+120>>2],ug=q[a+144>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););}}}}if(1<=(0|Bg))for(wg=q[a+112>>2],ug=0;;){if(q[Ag>>2]){b:{c:{d:{e:{if((0|(rg=q[q[a+116>>2]+(xg<<2)>>2]))<=0)q[4+((xg<<5)+yg|0)>>2]=0;else{for(zg=rg+ug|0,tg=q[a+148>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[4+(vg=(xg<<5)+yg|0)>>2]=sg,!(rg=(0|rg)<1)){for(tg=q[a+152>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[vg+20>>2]=sg,rg)break e;for(tg=q[a+156>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[vg+12>>2]=sg,rg)break d;for(tg=q[a+160>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[vg+16>>2]=sg,rg)break c;for(tg=q[a+164>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););break b}}q[20+((xg<<5)+yg|0)>>2]=0}q[12+((xg<<5)+yg|0)>>2]=0}q[16+((xg<<5)+yg|0)>>2]=0}sg=x(0)}u[8+((xg<<5)+yg|0)>>2]=sg}if(Ag=Ag+4|0,ug=q[wg+(xg<<2)>>2]+ug|0,(0|Bg)==(0|(xg=xg+1|0)))break}},n[9]=function(a){a|=0;var ae,Ud=0,Vd=0,Wd=0,Xd=0,Yd=0,Zd=x(0),_d=0,$d=0,be=0,ce=0;if(ae=q[a+340>>2],1<=(0|(Wd=q[a+360>>2])))for(_d=q[a+368>>2],$d=q[a+356>>2],Vd=q[a+364>>2];u[(Xd=Ud<<2)+_d>>2]=u[Vd+Xd>>2]*u[Xd+$d>>2],(0|Wd)!=(0|(Ud=Ud+1|0)););if(1<=(0|ae))for(be=q[a+348>>2],ce=q[a+344>>2],Xd=q[a+352>>2],Vd=0;;){if((0|(Ud=q[(Wd=Yd<<2)+Xd>>2]))<1)Zd=x(0);else for(_d=Ud+Vd|0,$d=q[a+368>>2],Zd=x(0),Ud=Vd;Zd=x(Zd+u[$d+(Ud<<2)>>2]),(0|(Ud=Ud+1|0))<(0|_d););if(u[20+(w(Yd,24)+ce|0)>>2]=Zd,Vd=q[Wd+be>>2]+Vd|0,(0|ae)==(0|(Yd=Yd+1|0)))break}},n[10]=function(a){var ud=0,vd=0,wd=0,xd=0,yd=0,zd=0,Ad=0;if(!(q[380+(a|=0)>>2]||(0|(ud=q[a+200>>2]))<1))for(zd=(vd=q[a+204>>2])+(ud<<4)|0,ud=q[a+248>>2],xd=q[a+272>>2];;){if(q[ud>>2]&&(a=1,!((0|(wd=q[vd+12>>2]))<1)))for(wd<<=1,Ad=q[xd>>2];u[(yd=(a<<2)+Ad|0)>>2]=-u[yd>>2],(0|(a=a+2|0))<(0|wd););if(xd=xd+4|0,ud=ud+4|0,!((vd=vd+16|0)>>>0<zd>>>0))break}},n[11]=function(a,Fc,nd){Fc|=0,nd|=0;var pd,od=0;return fa(pd=q[20+(a|=0)>>2],Fc,od=nd>>>0<(od=q[a+16>>2]-pd|0)>>>0?nd:od),q[a+20>>2]=od+q[a+20>>2],0|nd},n[12]=function(a){return 0},n[13]=function(a,Fc,gd){Fc|=0,gd|=0;var id,hd=0,jd=0,kd=0,ld=0,md=0;for(L=id=L-32|0,hd=q[28+(a|=0)>>2],q[16+id>>2]=hd,kd=q[a+20>>2],q[28+id>>2]=gd,q[24+id>>2]=Fc,Fc=kd-hd|0,kd=(q[20+id>>2]=Fc)+gd|0,ld=2,Fc=16+id|0;;){a:{if((jd=(hd=0)|K(q[a+60>>2],0|Fc,0|ld,12+id|0))&&(q[1906]=jd,hd=-1),(0|(hd=hd?q[12+id>>2]=-1:q[12+id>>2]))!=(0|kd)){if(-1<(0|hd))break a;q[a+28>>2]=0,q[a+16>>2]=0,q[a+20>>2]=0,q[a>>2]=32|q[a>>2],2!=((a=0)|ld)&&(a=gd-q[Fc+4>>2]|0)}else Fc=q[a+44>>2],q[a+28>>2]=Fc,q[a+20>>2]=Fc,q[a+16>>2]=Fc+q[a+48>>2],a=gd;return L=32+id|0,0|a}jd=hd-((md=(jd=q[Fc+4>>2])>>>0<hd>>>0)?jd:0)|0,q[(Fc=md?Fc+8|0:Fc)>>2]=jd+q[Fc>>2],q[Fc+4>>2]=q[Fc+4>>2]-jd,kd=kd-hd|0,ld=ld-md|0}},n[14]=function(a,Fc,gd,hd){return M=0},n[15]=function(a,Ub,Fc,Gc,Hc,Ic){a|=0,Ub=+Ub,Fc|=0,Gc|=0,Hc|=0,Ic|=0;var Nc,Jc=0,Kc=0,Lc=0,Mc=0,Oc=0,Pc=0,Qc=0,Rc=0,Sc=0,Tc=0,Uc=0,Vc=0,Wc=0,Xc=0,Yc=0,Zc=0,_c=0,$c=0,ad=0,dd=0,ed=0;if(q[44+(L=Nc=L-560|0)>>2]=0,h(+Ub),Jc=0|e(1),ad=1,dd=4294967295<e(0)>>>0?0:1,Zc=(((ed=0)|Jc)<-1?ad:(0|Jc)<=-1?dd:ed)?(h(+(Ub=-Ub)),Jc=0|e(1),e(0),Yc=1,3184):2048&Hc?(Yc=1,3187):(Yc=1&Hc)?3190:3185,2146435072!=(2146435072&Jc))if(Ub=function na(a,oa){var qa,ra,pa=0;if(h(+a),pa=0|e(1),qa=0|e(0),2047!=(0|(pa=(ra=pa)>>>20&2047))){if(!pa)return pa=oa,oa=0==a?0:(a=na(0x10000000000000000*a,oa),q[oa>>2]+-64|0),q[pa>>2]=oa,a;q[oa>>2]=pa+-1022,f(0,0|qa),f(1,-2146435073&ra|1071644672),a=+g()}return a}(Ub,44+Nc|0),0!=(Ub+=Ub)&&(q[44+Nc>>2]=q[44+Nc>>2]+-1),Vc=16+Nc|0,97!=(0|(_c=32|Ic))){for(Jc=(0|Gc)<0,0!=Ub?(Mc=q[44+Nc>>2]+-28|0,q[44+Nc>>2]=Mc,Ub*=268435456):Mc=q[44+Nc>>2],Pc=Jc?6:Gc,Lc=Tc=(0|Mc)<0?48+Nc|0:336+Nc|0;Jc=Ub<4294967296&0<=Ub?~~Ub>>>0:0,Lc=(Gc=Lc)+4|0,0!=(Ub=1e9*(Ub-((q[Gc>>2]=Jc)>>>0))););if((0|Mc)<1)Jc=Lc,Kc=Tc;else for(Kc=Tc;;){if(Uc=(0|Mc)<29?Mc:29,!((Jc=Lc+-4|0)>>>0<Kc>>>0)){for(Gc=Uc,Rc=0;Qc=0,$c=Rc,Rc=q[(Sc=Jc)>>2],Oc=31&Gc,Oc=32<=(63&Gc)>>>0?(Mc=Rc<<Oc,0):(Mc=(1<<Oc)-1&Rc>>>32-Oc,Rc<<Oc),Qc=Mc+Qc|0,Qc=(Rc=$c+Oc|0)>>>0<Oc>>>0?Qc+1|0:Qc,$c=Sc,Sc=gc(Rc=hc(Oc=Rc,Qc,1e9),M,1e9),q[$c>>2]=Oc-Sc,Kc>>>0<=(Jc=Jc+-4|0)>>>0;);(Gc=Rc)&&(q[(Kc=Kc+-4|0)>>2]=Gc)}for(;Kc>>>0<(Jc=Lc)>>>0&&!q[(Lc=Jc+-4|0)>>2];);if(Mc=q[44+Nc>>2]-Uc|0,Lc=Jc,!(0<(0|(q[44+Nc>>2]=Mc))))break}if((0|Mc)<=-1)for(Xc=1+((Pc+25|0)/9|0)|0,Uc=102==(0|_c);;){if(Rc=(0|Mc)<-9?9:0-Mc|0,Jc>>>0<=Kc>>>0)Kc=q[Kc>>2]?Kc:Kc+4|0;else{for(Sc=1e9>>>Rc,Oc=-1<<Rc^-1,Mc=0,Lc=Kc;Gc=q[Lc>>2],q[Lc>>2]=(Gc>>>Rc)+Mc,Mc=w(Sc,Gc&Oc),(Lc=Lc+4|0)>>>0<Jc>>>0;);Kc=q[Kc>>2]?Kc:Kc+4|0,Mc&&(q[Jc>>2]=Mc,Jc=Jc+4|0)}if(Mc=Rc+q[44+Nc>>2]|0,Jc=(0|Xc)<Jc-(Gc=Uc?Tc:Kc)>>2?Gc+(Xc<<2)|0:Jc,!((0|(q[44+Nc>>2]=Mc))<0))break}if(!(Jc>>>(Lc=0)<=Kc>>>0||(Lc=w(Tc-Kc>>2,9),Mc=10,(Gc=q[Kc>>2])>>>0<10)))for(;Lc=Lc+1|0,(Mc=w(Mc,10))>>>0<=Gc>>>0;);if((0|(Gc=(Pc-(102==(0|_c)?0:Lc)|0)-(103==(0|_c)&0!=(0|Pc))|0))<(w(Jc-Tc>>2,9)+-9|0)){if(Qc=(Tc+((Oc=(0|(Sc=Gc+9216|0))/9|0)<<2)|0)-4092|0,Gc=10,(0|(Mc=Sc-w(Oc,9)|0))<=7)for(;Gc=w(Gc,10),Oc=(0|Mc)<7,Mc=Mc+1|0,Oc;);if(Xc=Qc+4|0,((Rc=(Uc=q[Qc>>2])-w(Gc,Sc=(Uc>>>0)/(Gc>>>0)|0)|0)||(0|Xc)!=(0|Jc))&&(Wc=Rc>>>0<(Oc=Gc>>>1)>>>0?.5:(0|Jc)==(0|Xc)&&(0|Oc)==(0|Rc)?1:1.5,Ub=1&Sc?9007199254740994:9007199254740992,!Yc|45!=r[0|Zc]||(Wc=-Wc,Ub=-Ub),Oc=Uc-Rc|0,q[Qc>>2]=Oc,Ub+Wc!=Ub)){if(Gc=Gc+Oc|0,1e9<=(q[Qc>>2]=Gc)>>>0)for(;(Qc=Qc+-4|(q[Qc>>2]=0))>>>0<Kc>>>0&&(q[(Kc=Kc+-4|0)>>2]=0),Gc=q[Qc>>2]+1|0,999999999<(q[Qc>>2]=Gc)>>>0;);if(Lc=w(Tc-Kc>>2,9),Mc=10,!((Gc=q[Kc>>2])>>>0<10))for(;Lc=Lc+1|0,(Mc=w(Mc,10))>>>0<=Gc>>>0;);}Jc=(Gc=Qc+4|0)>>>0<Jc>>>0?Gc:Jc}j:{for(;;){if((Uc=Jc)>>>(Sc=0)<=Kc>>>0)break j;if(q[(Jc=Uc+-4|0)>>2])break}Sc=1}if(103==(0|_c)){if(Pc=((Gc=(0|Lc)<(0|(Jc=Pc||1))&-5<(0|Lc))?-1^Lc:-1)+Jc|0,Ic=(Gc?-1:-2)+Ic|0,!(Oc=8&Hc)){if(Jc=9,Sc&&(Oc=q[Uc+-4>>2])&&!((Oc>>>(Jc=0))%(Gc=10)))for(;Jc=Jc+1|0,!((Oc>>>0)%((Gc=w(Gc,10))>>>0)););Gc=w(Uc-Tc>>2,9)+-9|0,Pc=102!=(32|Ic)?((Oc=0)|Pc)<(0|(Gc=0<(0|(Gc=(Gc+Lc|0)-Jc|0))?Gc:0))?Pc:Gc:((Oc=0)|Pc)<(0|(Gc=0<(0|(Gc=Gc-Jc|0))?Gc:0))?Pc:Gc}}else Oc=8&Hc;if(Qc=0!=(0|(Mc=Pc|Oc)),Gc=a,$c=Fc,Jc=0<(0|Lc)?Lc:0,102!=(0|(Rc=32|Ic))){if((Vc-(Jc=ea((Jc=Lc>>31)+Lc^Jc,0,Vc))|0)<=1)for(;o[0|(Jc=Jc+-1|0)]=48,(Vc-Jc|0)<2;);o[0|(Xc=Jc+-2|0)]=Ic,o[Jc+-1|0]=(0|Lc)<0?45:43,Jc=Vc-Xc|0}_(Gc,32,$c,Qc=1+(Jc+(Qc+(Pc+Yc|0)|0)|0)|0,Hc),Z(a,Zc,Yc),_(a,48,Fc,Qc,65536^Hc);n:{o:{p:{if(102==(0|Rc)){for(Gc=16+Nc|8,Lc=16+Nc|9,Kc=Ic=Tc>>>0<Kc>>>0?Tc:Kc;;){Jc=ea(q[Kc>>2],0,Lc);q:if((0|Ic)==(0|Kc))(0|Jc)==(0|Lc)&&(o[24+Nc|0]=48,Jc=Gc);else{if(Jc>>>0<=16+Nc>>>0)break q;for(;o[0|(Jc=Jc+-1|0)]=48,16+Nc>>>0<Jc>>>0;);}if(Z(a,Jc,Lc-Jc|0),!((Kc=Kc+4|0)>>>0<=Tc>>>0))break}if(Mc&&Z(a,3219,1),(0|Pc)<1|Uc>>>0<=Kc>>>0)break p;for(;;){if(16+Nc>>>0<(Jc=ea(q[Kc>>2],0,Lc))>>>0)for(;o[0|(Jc=Jc+-1|0)]=48,16+Nc>>>0<Jc>>>0;);if(Z(a,Jc,(0|Pc)<9?Pc:9),Jc=Pc+-9|0,Uc>>>0<=(Kc=Kc+4|0)>>>0)break o;if(Gc=9<(0|Pc),Pc=Jc,!Gc)break}break o}r:if(!((0|Pc)<0))for(Ic=Sc?Uc:Kc+4|0,Gc=16+Nc|8,Tc=16+Nc|9,Lc=Kc;;){(0|Tc)==(0|(Jc=ea(q[Lc>>2],0,Tc)))&&(o[24+Nc|0]=48,Jc=Gc);s:if((0|Kc)==(0|Lc))Z(a,Jc,1),Jc=Jc+1|0,(0|Pc)<1&&!Oc||Z(a,3219,1);else{if(Jc>>>0<=16+Nc>>>0)break s;for(;o[0|(Jc=Jc+-1|0)]=48,16+Nc>>>0<Jc>>>0;);}if(Z(a,Rc=Jc,(0|(Jc=Tc-Jc|0))<(0|Pc)?Jc:Pc),Pc=Pc-Jc|0,Ic>>>0<=(Lc=Lc+4|0)>>>0)break r;if(!(-1<(0|Pc)))break}_(a,48,Pc+18|0,18,0),Z(a,Xc,Vc-Xc|0);break n}Jc=Pc}_(a,48,Jc+9|0,9,0)}}else{if(Oc=(Tc=32&Ic)?Zc+9|0:Zc,!(11<Gc>>>0)&&(Jc=12-Gc|0)){for(Wc=8;Wc*=16,Jc=Jc+-1|0;);Ub=45!=r[0|Oc]?Ub+Wc-Wc:-(Wc+(-Ub-Wc))}for((0|Vc)==(0|(Jc=ea((Lc=(Jc=q[44+Nc>>2])>>31)^Jc+Lc,0,Vc)))&&(o[15+Nc|0]=48,Jc=15+Nc|0),Pc=2|Yc,Lc=q[44+Nc>>2],o[0|(Sc=Jc+-2|0)]=Ic+15,o[Jc+-1|0]=(0|Lc)<0?45:43,Jc=8&Hc,Kc=16+Nc|0;Ic=Kc,Rc=Tc,Lc=y(Ub)<2147483648?~~Ub:-2147483648,o[0|Kc]=Rc|r[Lc+3168|0],1!=((Kc=Ic+1|0)-(16+Nc|0)|0)|(0==(Ub=16*(Ub-(0|Lc)))?!(Jc|0<(0|Gc)):0)||(o[Ic+1|0]=46,Kc=Ic+2|0),0!=Ub;);_(a,32,Fc,Qc=(Ic=!Gc|(0|Gc)<=((Kc-Nc|0)-18|0)?((Vc-(16+Nc|0)|0)-Sc|0)+Kc|0:2+((Gc+Vc|0)-Sc|0)|0)+Pc|0,Hc),Z(a,Oc,Pc),_(a,48,Fc,Qc,65536^Hc),Z(a,16+Nc|0,Gc=Kc-(16+Nc|0)|0),_(a,48,Ic-((Jc=Gc)+(Gc=Vc-Sc|0)|0)|0,0,0),Z(a,Sc,Gc)}else _(a,32,Fc,Qc=Yc+3|0,-65537&Hc),Z(a,Zc,Yc),Gc=Ic>>>5&1,Z(a,Ub!=Ub?Gc?3211:3215:Gc?3203:3207,3);return _(a,32,Fc,Qc,8192^Hc),L=560+Nc|0,0|((0|Qc)<(0|Fc)?Fc:Qc)},n[16]=function(a,Ub){var uc,Dc,Ec;a|=0,Ub=q[(uc=Ub|=0)>>2]+15&-16,q[uc>>2]=Ub+16,Dc=a,Ec=Ea(q[Ub>>2],q[Ub+4>>2],q[Ub+8>>2],q[Ub+12>>2]),v[Dc>>3]=Ec},{__wasm_call_ctors:function(){},csmGetVersion:function(){return 67108864},csmGetLatestMocVersion:function(){return 3},csmGetMocVersion:function(a,Ub){return Ub|=0,L=Ub=L-16|0,a=(a|=0)?ma(a)?(Y(4,1533,0),0):r[a+4|0]:(q[Ub+4>>2]=1246,q[Ub>>2]=1671,Y(4,1087,Ub),0),L=Ub+16|0,0|a},csmSetLogFunction:function(a){a|=0,q[1641]=a},csmReviveMocInPlace:function(a,qi){var ri;return qi|=0,L=ri=L-48|0,a=(a|=0)?(a+63&-64)==(0|a)?(qi+63&-64)==(0|qi)&&qi?jb(a):(q[20+ri>>2]=1592,q[16+ri>>2]=1688,Y(4,1087,16+ri|0),0):(q[36+ri>>2]=1441,q[32+ri>>2]=1688,Y(4,1087,32+ri|0),0):(q[4+ri>>2]=1246,q[ri>>2]=1688,Y(4,1087,ri),0),L=48+ri|0,0|a},csmReadCanvasInfo:function(a,_h,$h,ai){var bi;_h|=0,$h|=0,ai|=0,L=bi=L+-64|0,(a|=0)?_h?$h?ai?(a=q[q[a>>2]+708>>2],q[_h>>2]=q[a+12>>2],q[_h+4>>2]=q[a+16>>2],q[$h>>2]=q[a+4>>2],q[$h+4>>2]=q[a+8>>2],q[ai>>2]=q[a>>2]):(q[52+bi>>2]=1782,q[48+bi>>2]=1708,Y(4,1087,48+bi|0)):(q[36+bi>>2]=1753,q[32+bi>>2]=1708,Y(4,1087,32+bi|0)):(q[20+bi>>2]=1726,q[16+bi>>2]=1708,Y(4,1087,16+bi|0)):(q[4+bi>>2]=1651,q[bi>>2]=1708,Y(4,1087,bi)),L=64+bi|0},csmGetSizeofModel:wa,csmInitializeModelInPlace:va,csmUpdateModel:function(a){var Zh;L=Zh=L-16|0,(a|=0)?ta(a):(q[4+Zh>>2]=1651,q[Zh>>2]=1890,Y(4,1087,Zh)),L=16+Zh|0},csmGetParameterCount:function(a){var Yh;return L=Yh=L-16|0,a=(a|=0)?q[a+292>>2]:(q[4+Yh>>2]=1651,q[Yh>>2]=1905,Y(4,1087,Yh),-1),L=16+Yh|0,0|a},csmGetParameterIds:function(a){var Xh;return L=Xh=L-16|0,a=(a|=0)?q[q[a>>2]+900>>2]:(q[4+Xh>>2]=1651,q[Xh>>2]=1926,Y(4,1087,Xh),0),L=16+Xh|0,0|a},csmGetParameterMinimumValues:function(a){var Wh;return L=Wh=L-16|0,a=(a|=0)?q[q[a>>2]+912>>2]:(q[4+Wh>>2]=1651,q[Wh>>2]=1945,Y(4,1087,Wh),0),L=16+Wh|0,0|a},csmGetParameterMaximumValues:function(a){var Vh;return L=Vh=L-16|0,a=(a|=0)?q[q[a>>2]+908>>2]:(q[4+Vh>>2]=1651,q[Vh>>2]=1974,Y(4,1087,Vh),0),L=16+Vh|0,0|a},csmGetParameterDefaultValues:function(a){var Uh;return L=Uh=L-16|0,a=(a|=0)?q[q[a>>2]+916>>2]:(q[4+Uh>>2]=1651,q[Uh>>2]=2003,Y(4,1087,Uh),0),L=16+Uh|0,0|a},csmGetParameterValues:function(a){var Sh;return L=Sh=L-16|0,a=(a|=0)?q[a+300>>2]:(q[4+Sh>>2]=1651,q[Sh>>2]=2032,Y(4,1087,Sh),0),L=16+Sh|0,0|a},csmGetPartCount:function(a){var Rh;return L=Rh=L-16|0,a=(a|=0)?q[a+4>>2]:(q[4+Rh>>2]=1651,q[Rh>>2]=2054,Y(4,1087,Rh),-1),L=16+Rh|0,0|a},csmGetPartIds:function(a){var Qh;return L=Qh=L-16|0,a=(a|=0)?q[q[a>>2]+712>>2]:(q[4+Qh>>2]=1651,q[Qh>>2]=2070,Y(4,1087,Qh),0),L=16+Qh|0,0|a},csmGetPartOpacities:function(a){var Ph;return L=Ph=L-16|0,a=(a|=0)?q[a+52>>2]:(q[4+Ph>>2]=1651,q[Ph>>2]=2084,Y(4,1087,Ph),0),L=16+Ph|0,0|a},csmGetPartParentPartIndices:function(a){var Oh;return L=Oh=L-16|0,a=(a|=0)?q[q[a>>2]+740>>2]:(q[4+Oh>>2]=1651,q[Oh>>2]=2104,Y(4,1087,Oh),0),L=16+Oh|0,0|a},csmGetDrawableCount:function(a){var Nh;return L=Nh=L-16|0,a=(a|=0)?q[a+200>>2]:(q[4+Nh>>2]=1651,q[Nh>>2]=2132,Y(4,1087,Nh),-1),L=16+Nh|0,0|a},csmGetDrawableIds:function(a){var Mh;return L=Mh=L-16|0,a=(a|=0)?q[q[a>>2]+820>>2]:(q[4+Mh>>2]=1651,q[Mh>>2]=2152,Y(4,1087,Mh),0),L=16+Mh|0,0|a},csmGetDrawableConstantFlags:function(a){var Lh;return L=Lh=L-16|0,a=(a|=0)?q[q[a>>2]+872>>2]:(q[4+Lh>>2]=1651,q[Lh>>2]=2170,Y(4,1087,Lh),0),L=16+Lh|0,0|a},csmGetDrawableDynamicFlags:function(a){var Kh;return L=Kh=L-16|0,a=(a|=0)?q[a+260>>2]:(q[4+Kh>>2]=1651,q[Kh>>2]=2198,Y(4,1087,Kh),0),L=16+Kh|0,0|a},csmGetDrawableTextureIndices:function(a){var Jh;return L=Jh=L-16|0,a=(a|=0)?q[q[a>>2]+868>>2]:(q[4+Jh>>2]=1651,q[Jh>>2]=2225,Y(4,1087,Jh),0),L=16+Jh|0,0|a},csmGetDrawableDrawOrders:function(a){var Ih;return L=Ih=L-16|0,a=(a|=0)?q[a+268>>2]:(q[4+Ih>>2]=1651,q[Ih>>2]=2254,Y(4,1087,Ih),0),L=16+Ih|0,0|a},csmGetDrawableRenderOrders:function(a){var Hh;return L=Hh=L-16|0,a=(a|=0)?q[a+264>>2]:(q[4+Hh>>2]=1651,q[Hh>>2]=2279,Y(4,1087,Hh),0),L=16+Hh|0,0|a},csmGetDrawableOpacities:function(a){var Gh;return L=Gh=L-16|0,a=(a|=0)?q[a+276>>2]:(q[4+Gh>>2]=1651,q[Gh>>2]=2306,Y(4,1087,Gh),0),L=16+Gh|0,0|a},csmGetDrawableMaskCounts:function(a){var Fh;return L=Fh=L-16|0,a=(a|=0)?q[q[a>>2]+896>>2]:(q[4+Fh>>2]=1651,q[Fh>>2]=2330,Y(4,1087,Fh),0),L=16+Fh|0,0|a},csmGetDrawableMasks:function(a){var Eh;return L=Eh=L-16|0,a=(a|=0)?q[q[a>>2]+832>>2]:(q[4+Eh>>2]=1651,q[Eh>>2]=2355,Y(4,1087,Eh),0),L=16+Eh|0,0|a},csmGetDrawableVertexCounts:function(a){var Dh;return L=Dh=L-16|0,a=(a|=0)?q[q[a>>2]+876>>2]:(q[4+Dh>>2]=1651,q[Dh>>2]=2375,Y(4,1087,Dh),0),L=16+Dh|0,0|a},csmGetDrawableVertexPositions:function(a){var Ch;return L=Ch=L-16|0,a=(a|=0)?q[a+272>>2]:(q[4+Ch>>2]=1651,q[Ch>>2]=2402,Y(4,1087,Ch),0),L=16+Ch|0,0|a},csmGetDrawableVertexUvs:function(a){var Bh;return L=Bh=L-16|0,a=(a|=0)?q[q[a>>2]+824>>2]:(q[4+Bh>>2]=1651,q[Bh>>2]=2432,Y(4,1087,Bh),0),L=16+Bh|0,0|a},csmGetDrawableIndexCounts:function(a){var gh;return L=gh=L-16|0,a=(a|=0)?q[q[a>>2]+888>>2]:(q[4+gh>>2]=1651,q[gh>>2]=2456,Y(4,1087,gh),0),L=16+gh|0,0|a},csmGetDrawableIndices:function(a){var fh;return L=fh=L-16|0,a=(a|=0)?q[q[a>>2]+828>>2]:(q[4+fh>>2]=1651,q[fh>>2]=2482,Y(4,1087,fh),0),L=16+fh|0,0|a},csmResetDrawableDynamicFlags:function(a){var dh;L=dh=L-16|0,(a|=0)?q[a+256>>2]=1:(q[4+dh>>2]=1651,q[dh>>2]=2504,Y(4,1087,dh)),L=16+dh|0},csmMallocMoc:function(a){var rd;return ya(12+(L=rd=L-16|0)|0,64,a|=0),L=16+rd|0,q[12+rd>>2]},csmMallocModelAndInitialize:function(a){var Fc,nd=0,qd=0;return L=Fc=L-16|0,(a|=0)&&(ya(12+Fc|0,16,qd=wa(a))||(nd=va(a,q[12+Fc>>2],qd))||(za(q[12+Fc>>2]),nd=0)),L=16+Fc|0,0|nd},csmMalloc:function(a){return 0|ja(a|=0)},csmFree:function(a){za(a|=0)},stackSave:function(){return 0|L},stackAlloc:function(a){return 0|(L=a=L-(a|=0)&-16)},stackRestore:function(a){L=a|=0},__growWasmMemory:function(a){return 0|function(pagesToAdd){pagesToAdd|=0;var P=0|N(),Q=P+pagesToAdd|0;if(P<Q&&Q<65536){var R=new ArrayBuffer(w(Q,65536)),S=new global.Int8Array(R);S.set(o),o=S,o=new global.Int8Array(R),p=new global.Int16Array(R),q=new global.Int32Array(R),r=new global.Uint8Array(R),s=new global.Uint16Array(R),t=new global.Uint32Array(R),u=new global.Float32Array(R),v=new global.Float64Array(R),buffer=R,m.buffer=R}return P}(0|(a|=0))},dynCall_vi:function(a,_h){_h|=0,n[a|=0](_h)}};function X(a,b,c){var d=0,e=0,f=0;if(c)for(;;){if(c=c+-1|0,a>>>0<(d=(e=a+b|0)+-1|0)>>>0)for(;f=r[0|a],o[0|a]=r[0|d],o[0|d]=f,(a=a+1|0)>>>0<(d=d+-1|0)>>>0;);if(a=e,!c)break}}function Y(a,b,c){var g;L=g=L-272|0,t[1640]>a>>>0||(a=q[1641])&&(sa(16+g|0,b,q[12+g>>2]=c),n[a](16+g|0)),L=272+g|0}function Z(a,b,c){32&r[0|a]||function(a,Ub,Fc){var Gc=0,Hc=0,Ic=0;a:{if(!(Gc=q[Fc+16>>2])){if(function(a){var Ub=0;if(Ub=r[a+74|0],o[a+74|0]=Ub+-1|Ub,8&(Ub=q[a>>2]))return q[a>>2]=32|Ub,1;return q[a+4>>2]=0,q[a+8>>2]=0,Ub=q[a+44>>2],q[a+28>>2]=Ub,q[a+20>>2]=Ub,q[a+16>>2]=Ub+q[a+48>>2],0}(Fc))break a;Gc=q[Fc+16>>2]}if(Ic=q[Fc+20>>2],Gc-Ic>>>0<Ub>>>0)return n[q[Fc+36>>2]](Fc,a,Ub);b:if(!(o[Fc+75|0]<0)){for(Gc=Ub;;){if(!(Hc=Gc))break b;if(10==r[(Gc=Hc+-1|0)+a|0])break}if(n[q[Fc+36>>2]](Fc,a,Hc)>>>0<Hc>>>0)break a;Ub=Ub-Hc|0,a=a+Hc|0,Ic=q[Fc+20>>2]}fa(Ic,a,Ub),q[Fc+20>>2]=q[Fc+20>>2]+Ub}}(b,c,a)}function _(a,b,c,h,i){var j,k=0,l=0;if(L=j=L-256|0,!(73728&i|(0|c)<=(0|h))){if(ba(j,b,(k=(i=c-h|0)>>>0<256)?i:256),b=a,l=j,!k){for(c=c-h|0;Z(a,j,256),255<(i=i+-256|0)>>>0;);i=255&c}Z(b,l,i)}L=256+j|0}function $(a){var b,c;return x((b=a*a)*b*(c=b*a)*(2718311493989822e-21*b-.00019839334836096632)+(c*(.008333329385889463*b-.16666666641626524)+a))}function aa(a){var h;return x(-.499999997251031*(a*=a)+1+.04166662332373906*(h=a*a)+a*h*(2439044879627741e-20*a-.001388676377460993))}function ba(a,i,m){var n=0,p=0,r=0,s=0;if(m&&(o[(n=a+m|0)+-1|0]=i,o[0|a]=i,!(m>>>0<3||(o[n+-2|0]=i,o[a+1|0]=i,o[n+-3|0]=i,o[a+2|0]=i,m>>>0<7||(o[n+-4|0]=i,o[a+3|0]=i,m>>>0<9||(p=(n=0-a&3)+a|0,i=w(255&i,16843009),q[p>>2]=i,q[(n=(m=m-n&-4)+p|0)+-4>>2]=i,m>>>0<9||(q[p+8>>2]=i,q[p+4>>2]=i,q[n+-8>>2]=i,q[n+-12>>2]=i,m>>>0<25||(q[p+24>>2]=i,q[p+20>>2]=i,q[p+16>>2]=i,q[p+12>>2]=i,q[n+-16>>2]=i,q[n+-20>>2]=i,q[n+-24>>2]=i,q[n+-28>>2]=i,(m=m-(s=4&p|24)|0)>>>0<32))))))))for(r=n=i,i=p+s|0;q[i+24>>2]=r,q[i+28>>2]=n,q[i+16>>2]=r,q[i+20>>2]=n,q[i+8>>2]=r,q[i+12>>2]=n,q[i>>2]=r,q[i+4>>2]=n,i=i+32|0,31<(m=m+-32|0)>>>0;);return a}function ca(a,i){var m=0;if(a>>>0<(i=(a+i|0)-1|0)>>>0)for(;m=r[0|a],o[0|a]=r[0|i],o[0|i]=m,(a=a+1|0)>>>0<(i=i+-1|0)>>>0;);}function da(a){var i;return(0|(a=(i=q[2052])+a|0))<=-1?(q[1906]=48,-1):a>>>0<=N()<<16>>>0||J(0|a)?(q[2052]=a,i):(q[1906]=48,-1)}function ea(a,q,t){var u=0,v=0,x=0;if(1==(0|q)&a>>>0<0|q>>>0<1)u=a;else for(;v=gc(u=hc(a,q,10),x=v=M,10),o[0|(t=t+-1|0)]=a-v|48,v=9==(0|q)&4294967295<a>>>0|9<q>>>0,a=u,q=x,v;);if(u)for(;a=(u>>>0)/10|0,o[0|(t=t+-1|0)]=u-w(a,10)|48,q=9<u>>>0,u=a,q;);return t}function fa(a,t,w){var y,z=0;if(8192<=w>>>0)I(0|a,0|t,0|w);else{y=a+w|0;a:if(3&(a^t))if(y>>>0<4)w=a;else if((z=y-4|0)>>>0<a>>>0)w=a;else for(w=a;o[0|w]=r[0|t],o[w+1|0]=r[t+1|0],o[w+2|0]=r[t+2|0],o[w+3|0]=r[t+3|0],t=t+4|0,(w=w+4|0)>>>0<=z>>>0;);else{b:if((0|w)<1)w=a;else if(3&a)for(w=a;;){if(o[0|w]=r[0|t],t=t+1|0,y>>>0<=(w=w+1|0)>>>0)break b;if(!(3&w))break}else w=a;if(!((a=-4&y)>>>0<64||(z=a+-64|0)>>>0<w>>>0))for(;q[w>>2]=q[t>>2],q[w+4>>2]=q[t+4>>2],q[w+8>>2]=q[t+8>>2],q[w+12>>2]=q[t+12>>2],q[w+16>>2]=q[t+16>>2],q[w+20>>2]=q[t+20>>2],q[w+24>>2]=q[t+24>>2],q[w+28>>2]=q[t+28>>2],q[w+32>>2]=q[t+32>>2],q[w+36>>2]=q[t+36>>2],q[w+40>>2]=q[t+40>>2],q[w+44>>2]=q[t+44>>2],q[w+48>>2]=q[t+48>>2],q[w+52>>2]=q[t+52>>2],q[w+56>>2]=q[t+56>>2],q[w+60>>2]=q[t+60>>2],t=t- -64|0,(w=w- -64|0)>>>0<=z>>>0;);if(a>>>0<=w>>>0)break a;for(;q[w>>2]=q[t>>2],t=t+4|0,(w=w+4|0)>>>0<a>>>0;);}if(w>>>0<y>>>0)for(;o[0|w]=r[0|t],t=t+1|0,(0|y)!=(0|(w=w+1|0)););}}function ga(a){return a+-48>>>0<10}function ha(a,o){a:if(1024<=(0|o)){if(a*=898846567431158e293,(0|o)<2047){o=o+-1023|0;break a}a*=898846567431158e293,o=((0|o)<3069?o:3069)+-2046|0}else-1023<(0|o)||(a*=22250738585072014e-324,o=-2045<(0|o)?o+1022|0:(a*=22250738585072014e-324,(-3066<(0|o)?o:-3066)+2044|0));return f(0,0),f(1,o+1023<<20),a*g()}function ia(a,t,A,B,C,D,E){var F,R,U,G=0,H=0,I=0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0,S=0,T=0;q[76+(L=F=L-80|0)>>2]=t,U=55+F|0,R=56+F|0,t=0;a:{b:for(;;){(0|P)<0||(P=(2147483647-P|0)<(0|t)?(q[1906]=61,-1):t+P|0);d:{e:{f:{g:{h:{i:{j:{k:{l:{m:{n:{o:{p:{q:{if(J=q[76+F>>2],I=r[0|(t=J)]){for(;;){r:{s:{t:if(G=255&I){if(37!=(0|G))break s;for(I=t;;){if(37!=r[t+1|0])break t;if(G=t+2|0,q[76+F>>2]=G,I=I+1|0,H=r[t+2|0],t=G,37!=(0|H))break}}else I=t;if(t=I-J|0,a&&Z(a,J,t),t)continue b;Q=-1,I=1,K=!ga(o[q[76+(G=F)>>2]+1|0]),t=q[76+F>>2],K|36!=r[t+2|0]||(Q=o[t+1|0]+-48|0,S=1,I=3),t=I+t|0,q[G+76>>2]=t;u:if(31<(H=(M=o[(I=0)|t])+-32|0)>>>0)G=t;else if(G=t,75913&(H=1<<H))for(;;){if(G=t+1|0,q[76+F>>2]=G,I|=H,31<(H=(M=o[t+1|0])+-32|0)>>>0)break u;if(t=G,!(75913&(H=1<<H)))break}v:if(42!=(0|M)){if((0|(N=qa(76+F|0)))<0)break q;t=q[76+F>>2]}else{if(K=F,ga(o[G+1|0])&&(t=q[76+F>>2],36==r[t+2|0]))q[((o[t+1|0]<<2)+C|0)-192>>2]=10,N=q[((o[t+1|0]<<3)+B|0)-384>>2],S=1,t=t+3|0;else{if(S)break q;N=S=0,a&&(t=q[A>>2],q[A>>2]=t+4,N=q[t>>2]),t=q[76+F>>2]+1|0}if(q[K+76>>2]=t,-1<(0|N))break v;N=0-N|0,I|=8192}H=-1;y:if(46==r[0|t])if(42!=r[t+1|0])q[76+F>>2]=t+1,H=qa(76+F|0),t=q[76+F>>2];else{if(ga(o[t+2|0])&&(t=q[76+F>>2],36==r[t+3|0])){q[((o[t+2|0]<<2)+C|0)-192>>2]=10,H=q[((o[t+2|0]<<3)+B|0)-384>>2],t=t+4|0,q[76+F>>2]=t;break y}if(S)break q;H=a?(t=q[A>>2],q[A>>2]=t+4,q[t>>2]):0,t=q[76+F>>2]+2|0,q[76+F>>2]=t}for(G=0;;){if(T=G,O=-1,57<o[0|t]+-65>>>0)break a;if(M=t+1|0,q[76+F>>2]=M,G=o[0|t],t=M,!((G=r[2639+(G+w(T,58)|0)|0])+-1>>>0<8))break}if(!G)break a;A:{B:{C:{if(19==(0|G)){if((0|Q)<=-1)break C;break a}if((0|Q)<0)break B;q[(Q<<2)+C>>2]=G,G=q[(t=(Q<<3)+B|0)+4>>2],q[64+F>>2]=q[t>>2],q[68+F>>2]=G}if(t=0,!a)continue b;break A}if(!a)break d;pa(F+64|0,G,A,E),M=q[76+F>>2]}if(K=-65537&I,I=8192&I?K:I,Q=2684,G=R,t=o[M+-1|(O=0)],(M=(t=T&&3==(15&t)?-33&t:t)+-88|0)>>>0<=32)break r;D:{E:{F:{G:{if(6<(K=t+-65|0)>>>0){if(83!=(0|t))break e;if(!H)break G;G=q[64+F>>2];break E}switch(K-1|0){case 1:break F;case 0:case 2:break e;default:break p}}_(a,32,N,t=0,I);break D}q[12+F>>2]=0,q[8+F>>2]=q[64+F>>2],q[64+F>>2]=8+F,H=-1,G=8+F|0}t=0;H:{for(;;){if(!(J=q[G>>2]))break H;if((K=(0|(J=oa(4+F|0,J)))<0)|H-t>>>0<J>>>0)break;if(G=G+4|0,!((t=t+J|0)>>>0<H>>>0))break H}if(O=-1,K)break a}if(_(a,32,N,t,I),t)for(H=0,G=q[64+F>>2];;){if(!(J=q[G>>2]))break D;if((0|t)<(0|(H=(J=oa(4+F|0,J))+H|0)))break D;if(Z(a,4+F|0,J),G=G+4|0,!(H>>>0<t>>>0))break}else t=0}_(a,32,N,t,8192^I),t=(0|t)<(0|N)?N:t;continue b}G=t+1|0,q[76+F>>2]=G,I=r[t+1|0],t=G;continue}break}switch(M-1|0){case 21:break i;case 23:break k;case 22:break l;case 11:case 16:break m;case 10:break n;case 26:break o;case 8:case 12:case 13:case 14:break p;case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 9:case 15:case 17:case 18:case 19:case 20:case 24:case 25:case 27:case 29:case 30:break e;case 28:break h;default:break j}}if(O=P,a)break a;if(!S)break d;for(t=1;;){if(a=q[(t<<2)+C>>2]){if(pa((t<<3)+B|0,a,A,E),10!=(0|(t=t+(O=1)|0)))continue;break a}break}if(O=1,10<=t>>>0)break a;for(;;){if(q[(t<<2)+C>>2])break q;if(a=8<t>>>0,t=t+1|0,a)break}break a}O=-1;break a}t=0|n[D](a,v[64+F>>3],N,H,I,t);continue}G=(t=Ia(J=(t=q[64+F>>2])||2694,H))||H+J|0,I=K,H=t?t-J|0:H;break e}o[55+F|0]=q[64+F>>2],H=1,J=U,I=K;break e}if(t=K=q[68+F>>2],J=q[64+F>>2],(0|t)<-1||(0|t)<=-1&&!(4294967295<J>>>0)){t=0-(t+(0<J>>>0)|0)|0,J=0-J|0,q[64+F>>2]=J,q[68+F>>2]=t,O=1,Q=2684;break g}if(2048&I){O=1,Q=2685;break g}Q=(O=1&I)?2686:2684;break g}if(J=Oa(q[64+F>>2],q[68+F>>2],R),!(8&I))break f;H=(0|(t=R-J|0))<(0|H)?H:t+1|0;break f}H=8<H>>>0?H:8,I|=8,t=120}if(J=Na(q[64+F>>2],q[68+F>>2],R,32&t),!(8&I)|!(q[64+F>>2]|q[68+F>>2]))break f;Q=2684+(t>>>4)|0,O=2;break f}if(7<(G=255&T)>>>(t=0))continue;I:switch(G-1|0){default:case 0:q[q[64+F>>2]>>2]=P;continue;case 1:G=q[64+F>>2],q[G>>2]=P,q[G+4>>2]=P>>31;continue;case 2:p[q[64+F>>2]>>1]=P;continue;case 3:o[q[64+F>>2]]=P;continue;case 5:q[q[64+F>>2]>>2]=P;continue;case 4:continue;case 6:break I}G=q[64+F>>2],q[G>>2]=P,q[G+4>>2]=P>>31;continue}J=q[64+F>>2],t=q[68+F>>2],Q=2684}J=ea(J,t,R)}I=-1<(0|H)?-65537&I:I,H=!!((K=t=q[68+F>>2])|(M=q[64+F>>2]))|H?(0|(t=!(K|M)+(R-J|0)|0))<(0|H)?H:t:(J=R,0)}_(a,32,t=(0|N)<(0|(G=(H=(0|H)<(0|(K=G-J|0))?K:H)+O|0))?G:N,G,I),Z(a,Q,O),_(a,48,t,G,65536^I),_(a,48,H,K,0),Z(a,J,K),_(a,32,t,G,8192^I);continue}break}O=0}return L=80+F|0,O}function ja(a){var Y,o=0,w=0,A=0,B=0,C=0,D=0,E=0,V=0,W=0,X=0,Z=0,_=0;L=Y=L-16|0;a:{b:{c:{d:{e:{f:{g:{h:{i:{j:{k:{if(a>>>0<=244){if(3&(o=(C=q[1923])>>>(a=(D=a>>>0<11?16:a+11&-8)>>>3))){a=(o=q[(B=(w=a+(1&(-1^o))|0)<<3)+7740>>2])+8|0,(0|(A=q[o+8>>2]))!=(0|(B=B+7732|0))?(q[A+12>>2]=B,q[B+8>>2]=A):(Z=7692,_=jc(w)&C,q[Z>>2]=_),w<<=3,q[o+4>>2]=3|w,q[(o=o+w|0)+4>>2]=1|q[o+4>>2];break a}if(D>>>0<=(V=q[1925])>>>0)break k;if(o){w=o=(a=(0-(a=(0-(w=2<<a)|w)&o<<a)&a)-1|0)>>>12&16,w|=o=(a>>>=o)>>>5&8,w|=o=(a>>>=o)>>>2&4,o=q[(A=(w=((w|=o=(a>>>=o)>>>1&2)|(o=(a>>>=o)>>>1&1))+(a>>>o)|0)<<3)+7740>>2],(0|(a=q[o+8>>2]))!=(0|(A=A+7732|0))?(q[a+12>>2]=A,q[A+8>>2]=a):(C=jc(w)&C,q[1923]=C),a=o+8|0,q[o+4>>2]=3|D,B=(w<<=3)-D|0,q[(E=o+D|0)+4>>2]=1|B,q[o+w>>2]=B,V&&(o=7732+((w=V>>>3)<<3)|0,A=q[1928],w=(w=1<<w)&C?q[o+8>>2]:(q[1923]=w|C,o),q[o+8>>2]=A,q[w+12>>2]=A,q[A+12>>2]=o,q[A+8>>2]=w),q[1928]=E,q[1925]=B;break a}if(!(X=q[1924]))break k;for(w=o=(a=(X&0-X)-1|0)>>>12&16,w|=o=(a>>>=o)>>>5&8,w|=o=(a>>>=o)>>>2&4,o=q[7996+(((w|=o=(a>>>=o)>>>1&2)|(o=(a>>>=o)>>>1&1))+(a>>>o)<<2)>>2],A=(-8&q[o+4>>2])-D|0,w=o;a=(a=q[w+16>>2])||q[w+20>>2];)A=(w=(B=(-8&q[a+4>>2])-D|0)>>>0<A>>>0)?B:A,o=w?a:o,w=a;if(W=q[o+24>>2],(0|(B=q[o+12>>2]))!=(0|o)){a=q[o+8>>2],q[a+12>>2]=B,q[B+8>>2]=a;break b}if(!(a=q[(w=o+20|0)>>2])){if(!(a=q[o+16>>2]))break j;w=o+16|0}for(;E=w,(a=q[(w=(B=a)+20|0)>>2])||(w=B+16|0,a=q[B+16>>2]););q[E>>2]=0;break b}if(D=-1,!(4294967231<a>>>0)&&(D=-8&(o=a+11|0),V=q[1924])){w=0-D|0,C=0,(o>>>=8)&&(C=31,16777215<D>>>0||(C=28+((a=((C=(o<<=A=o+1048320>>>16&8)<<(a=o+520192>>>16&4))<<(o=C+245760>>>16&2)>>>15)-(o|a|A)|0)<<1|D>>>a+21&1)|0));q:{r:{if(A=q[7996+(C<<2)>>2])for(o=D<<(31==(0|C)?0:25-(C>>>1)|0),a=0;;){if(!(w>>>0<=(E=(-8&q[A+4>>2])-D|0)>>>0||(B=A,w=E))){w=0,a=A;break r}if(E=q[A+20>>2],A=q[16+((o>>>29&4)+A|0)>>2],a=E?(0|E)==(0|A)?a:E:a,o<<=0!=(0|A),!A)break}else a=0;if(!(a|B)){if(!(a=(0-(a=2<<C)|a)&V))break k;A=o=(a=(a&0-a)-1|0)>>>12&16,A|=o=(a>>>=o)>>>5&8,A|=o=(a>>>=o)>>>2&4,a=q[7996+(((A|=o=(a>>>=o)>>>1&2)|(o=(a>>>=o)>>>1&1))+(a>>>o)<<2)>>2]}if(!a)break q}for(;w=(o=(A=(-8&q[a+4>>2])-D|0)>>>0<w>>>0)?A:w,B=o?a:B,a=(o=q[a+16>>2])||q[a+20>>2];);}if(!(!B|w>>>0>=q[1925]-D>>>0)){if(E=q[B+24>>2],(0|B)!=(0|(o=q[B+12>>2]))){a=q[B+8>>2],q[a+12>>2]=o,q[o+8>>2]=a;break c}if(!(a=q[(A=B+20|0)>>2])){if(!(a=q[B+16>>2]))break i;A=B+16|0}for(;C=A,(a=q[(A=(o=a)+20|0)>>2])||(A=o+16|0,a=q[o+16>>2]););q[C>>2]=0;break c}}}if(D>>>0<=(o=q[1925])>>>0){a=q[1928],16<=(w=o-D|0)>>>0?(q[1925]=w,A=a+D|0,q[1928]=A,q[A+4>>2]=1|w,q[a+o>>2]=w,q[a+4>>2]=3|D):(q[1928]=0,q[1925]=0,q[a+4>>2]=3|o,q[(o=a+o|0)+4>>2]=1|q[o+4>>2]),a=a+8|0;break a}if(D>>>0<(A=q[1926])>>>0){o=A-D|0,q[1926]=o,w=(a=q[1929])+D|0,q[1929]=w,q[w+4>>2]=1|o,q[a+4>>2]=3|D,a=a+8|0;break a}if((w=(C=(w=B=D+47|(a=0))+(o=q[2041]?q[2043]:(q[2044]=-1,q[2045]=-1,q[2042]=4096,q[2043]=4096,q[2041]=12+Y&-16^1431655768,q[2046]=0,q[2034]=0,4096))|0)&(E=0-o|0))>>>0<=D>>>0)break a;if((o=q[2033])&&(W=(V=q[2031])+w|0)>>>0<=V>>>0|o>>>0<W>>>0)break a;if(4&r[8136])break f;v:{w:{if(o=q[1929])for(a=8140;;){if((V=q[a>>2])+q[a+4>>2]>>>0>o>>>0&&V>>>0<=o>>>0)break w;if(!(a=q[a+8>>2]))break}if(-1==(0|(o=da(0))))break g;if(C=w,(A=(a=q[2042])+-1|0)&o&&(C=(w-o|0)+(o+A&0-a)|0),C>>>0<=D>>>0|2147483646<C>>>0)break g;if((a=q[2033])&&(E=(A=q[2031])+C|0)>>>0<=A>>>0|a>>>0<E>>>0)break g;if((0|o)!=(0|(a=da(C))))break v;break e}if(2147483646<(C=E&C-A)>>>0)break g;if((0|(o=da(C)))==(q[a>>2]+q[a+4>>2]|0))break h;a=o}if(!(D+48>>>0<=C>>>0|2147483646<C>>>0|-1==(0|(o=a)))){if(2147483646<(a=(a=q[2043])+(B-C|0)&0-a)>>>0)break e;if(-1!=(0|da(a))){C=a+C|0;break e}da(0-C|0);break g}if(-1!=(0|o))break e;break g}B=0;break b}o=0;break c}if(-1!=(0|o))break e}q[2034]=4|q[2034]}if(2147483646<w>>>0)break d;if(o=da(w),(a=da(0))>>>0<=o>>>0|-1==(0|o)|-1==(0|a))break d;if((C=a-o|0)>>>0<=D+40>>>0)break d}a=q[2031]+C|0,(q[2031]=a)>>>0>t[2032]&&(q[2032]=a);x:{y:{z:{if(w=q[1929]){for(a=8140;;){if(((A=q[a>>2])+(B=q[a+4>>2])|0)==(0|o))break z;if(!(a=q[a+8>>2]))break}break y}for((a=q[1927])>>>0<=o>>>0&&a||(q[1927]=o),a=0,q[2036]=C,q[2035]=o,q[1931]=-1,q[1932]=q[2041],q[2038]=0;A=(w=a<<3)+7732|0,q[w+7740>>2]=A,q[w+7744>>2]=A,32!=(0|(a=a+1|0)););A=(a=C+-40|0)-(w=o+8&7?-8-o&7:0)|0,q[1926]=A,w=o+w|0,q[1929]=w,q[w+4>>2]=1|A,q[4+(a+o|0)>>2]=40,q[1930]=q[2045];break x}if(!(8&r[a+12|0]|o>>>0<=w>>>0|w>>>0<A>>>0)){q[a+4>>2]=B+C,o=(a=w+8&7?-8-w&7:0)+w|0,q[1929]=o,a=(A=q[1926]+C|0)-a|0,q[1926]=a,q[o+4>>2]=1|a,q[4+(w+A|0)>>2]=40,q[1930]=q[2045];break x}}o>>>0<(B=q[1927])>>>0&&(q[1927]=o,B=0),A=o+C|0,a=8140;A:{B:{C:{D:{E:{F:{for(;(0|A)!=q[a>>2];)if(!(a=q[a+8>>2]))break F;if(!(8&r[a+12|0]))break E}for(a=8140;;){if((A=q[a>>2])>>>0<=w>>>0&&w>>>0<(B=A+q[a+4>>2]|0)>>>0)break D;a=q[a+8>>2]}}if(q[a>>2]=o,q[a+4>>2]=q[a+4>>2]+C,q[(W=(o+8&7?-8-o&7:0)+o|0)+4>>2]=3|D,a=((o=A+(A+8&7?-8-A&7:0)|0)-W|0)-D|0,E=D+W|0,(0|o)==(0|w)){q[1929]=E,a=q[1926]+a|0,q[1926]=a,q[E+4>>2]=1|a;break B}if(q[1928]==(0|o)){q[1928]=E,a=q[1925]+a|0,q[1925]=a,q[E+4>>2]=1|a,q[a+E>>2]=a;break B}if(1==(3&(w=q[o+4>>2]))){X=-8&w;G:if(w>>>0<=255){if(B=w>>>3,w=q[o+8>>2],(0|(A=q[o+12>>2]))==(0|w)){Z=7692,_=q[1923]&jc(B),q[Z>>2]=_;break G}q[w+12>>2]=A,q[A+8>>2]=w}else{if(V=q[o+24>>2],(0|(C=q[o+12>>2]))==(0|o))if((D=q[(A=o+20|0)>>2])||(D=q[(A=o+16|0)>>2])){for(;w=A,(D=q[(A=(C=D)+20|0)>>2])||(A=C+16|0,D=q[C+16>>2]););q[w>>2]=0}else C=0;else w=q[o+8>>2],q[w+12>>2]=C,q[C+8>>2]=w;if(V){w=q[o+28>>2];J:{if(q[(A=7996+(w<<2)|0)>>2]==(0|o)){if(q[A>>2]=C)break J;Z=7696,_=q[1924]&jc(w),q[Z>>2]=_;break G}if(!(q[V+(q[V+16>>2]==(0|o)?16:20)>>2]=C))break G}q[C+24>>2]=V,(w=q[o+16>>2])&&(q[C+16>>2]=w,q[w+24>>2]=C),(w=q[o+20>>2])&&(q[C+20>>2]=w,q[w+24>>2]=C)}}o=o+X|0,a=a+X|0}if(q[o+4>>2]=-2&q[o+4>>2],q[E+4>>2]=1|a,(q[a+E>>2]=a)>>>0<=255){a=7732+((o=a>>>3)<<3)|0,o=(w=q[1923])&(o=1<<o)?q[a+8>>2]:(q[1923]=o|w,a),q[a+8>>2]=E,q[o+12>>2]=E,q[E+12>>2]=a,q[E+8>>2]=o;break B}if(o=0,(A=a>>>8)&&(o=31,16777215<a>>>0||(o=28+((o=((D=(A<<=B=A+1048320>>>16&8)<<(o=A+520192>>>16&4))<<(A=D+245760>>>16&2)>>>15)-(A|o|B)|0)<<1|a>>>o+21&1)|0)),q[(w=E)+28>>2]=o,q[E+16>>2]=0,w=7996+(o<<2)|(q[E+20>>2]=0),(A=q[1924])&(B=1<<o)){for(A=a<<(31==(0|o)?0:25-(o>>>1)|0),o=q[w>>2];;){if((-8&q[(w=o)+4>>2])==(0|a))break C;if(o=A>>>29,A<<=1,!(o=q[(B=(4&o)+w|0)+16>>2]))break}q[B+16>>2]=E}else q[1924]=A|B,q[w>>2]=E;q[E+24>>2]=w,q[E+12>>2]=E,q[E+8>>2]=E;break B}for(E=(a=C+-40|0)-(A=o+8&7?-8-o&7:0)|0,q[1926]=E,A=o+A|0,q[1929]=A,q[A+4>>2]=1|E,q[4+(a+o|0)>>2]=40,q[1930]=q[2045],q[(A=(a=(B+(B+-39&7?39-B&7:0)|0)-47|0)>>>0<w+16>>>0?w:a)+4>>2]=27,a=q[2038],q[A+16>>2]=q[2037],q[A+20>>2]=a,a=q[2036],q[A+8>>2]=q[2035],q[A+12>>2]=a,q[2037]=A+8,q[2036]=C,q[2035]=o,a=A+24|(q[2038]=0);q[a+4>>2]=7,o=a+8|0,a=a+4|0,o>>>0<B>>>0;);if((0|w)==(0|A))break x;if(q[A+4>>2]=-2&q[A+4>>2],B=A-w|0,q[w+4>>2]=1|B,(q[A>>2]=B)>>>0<=255){a=7732+((o=B>>>3)<<3)|0,o=(A=q[1923])&(o=1<<o)?q[a+8>>2]:(q[1923]=o|A,a),q[a+8>>2]=w,q[o+12>>2]=w,q[w+12>>2]=a,q[w+8>>2]=o;break x}if(q[w+16>>2]=0,a=q[w+20>>2]=0,(A=B>>>8)&&(a=31,16777215<B>>>0||(a=28+((a=((E=(A<<=C=A+1048320>>>16&8)<<(a=A+520192>>>16&4))<<(A=E+245760>>>16&2)>>>15)-(A|a|C)|0)<<1|B>>>a+21&1)|0)),o=7996+((q[(o=w)+28>>2]=a)<<2)|0,(A=q[1924])&(C=1<<a)){for(a=B<<(31==(0|a)?0:25-(a>>>1)|0),o=q[o>>2];;){if((0|B)==(-8&q[(A=o)+4>>2]))break A;if(o=a>>>29,a<<=1,!(o=q[(C=A+(4&o)|0)+16>>2]))break}q[C+16>>2]=w,q[w+24>>2]=A}else q[1924]=A|C,q[o>>2]=w,q[w+24>>2]=o;q[w+12>>2]=w,q[w+8>>2]=w;break x}a=q[w+8>>2],q[a+12>>2]=E,q[w+8>>2]=E,q[E+24>>2]=0,q[E+12>>2]=w,q[E+8>>2]=a}a=W+8|0;break a}a=q[A+8>>2],q[a+12>>2]=w,q[A+8>>2]=w,q[w+24>>2]=0,q[w+12>>2]=A,q[w+8>>2]=a}if(!((a=q[1926])>>>0<=D>>>0)){o=a-D|0,q[1926]=o,w=(a=q[1929])+D|0,q[1929]=w,q[w+4>>2]=1|o,q[a+4>>2]=3|D,a=a+8|0;break a}}q[1906]=48,a=0;break a}Q:if(E){a=q[B+28>>2];R:{if(q[(A=7996+(a<<2)|0)>>2]==(0|B)){if(q[A>>2]=o)break R;V=jc(a)&V,q[1924]=V;break Q}if(!(q[E+(q[E+16>>2]==(0|B)?16:20)>>2]=o))break Q}q[o+24>>2]=E,(a=q[B+16>>2])&&(q[o+16>>2]=a,q[a+24>>2]=o),(a=q[B+20>>2])&&(q[o+20>>2]=a,q[a+24>>2]=o)}S:if(w>>>0<=15)a=w+D|0,q[B+4>>2]=3|a,q[(a=a+B|0)+4>>2]=1|q[a+4>>2];else if(q[B+4>>2]=3|D,q[(A=B+D|0)+4>>2]=1|w,(q[w+A>>2]=w)>>>0<=255)a=7732+((o=w>>>3)<<3)|0,o=(w=q[1923])&(o=1<<o)?q[a+8>>2]:(q[1923]=o|w,a),q[a+8>>2]=A,q[o+12>>2]=A,q[A+12>>2]=a,q[A+8>>2]=o;else{a=0,(D=w>>>8)&&(a=31,16777215<w>>>0||(a=28+((a=((E=(D<<=C=D+1048320>>>16&8)<<(a=D+520192>>>16&4))<<(D=E+245760>>>16&2)>>>15)-(D|a|C)|0)<<1|w>>>a+21&1)|0)),q[(o=A)+28>>2]=a,q[A+16>>2]=0,o=7996+(a<<2)|(q[A+20>>2]=0);V:{if((D=1<<a)&V){for(a=w<<(31==(0|a)?0:25-(a>>>1)|0),D=q[o>>2];;){if((-8&q[(o=D)+4>>2])==(0|w))break V;if(D=a>>>29,a<<=1,!(D=q[(C=(4&D)+o|0)+16>>2]))break}q[C+16>>2]=A}else q[1924]=D|V,q[o>>2]=A;q[A+24>>2]=o,q[A+12>>2]=A,q[A+8>>2]=A;break S}a=q[o+8>>2],q[a+12>>2]=A,q[o+8>>2]=A,q[A+24>>2]=0,q[A+12>>2]=o,q[A+8>>2]=a}a=B+8|0;break a}X:if(W){a=q[o+28>>2];Y:{if(q[(w=7996+(a<<2)|0)>>2]==(0|o)){if(q[w>>2]=B)break Y;Z=7696,_=jc(a)&X,q[Z>>2]=_;break X}if(!(q[W+(q[W+16>>2]==(0|o)?16:20)>>2]=B))break X}q[B+24>>2]=W,(a=q[o+16>>2])&&(q[B+16>>2]=a,q[a+24>>2]=B),(a=q[o+20>>2])&&(q[B+20>>2]=a,q[a+24>>2]=B)}A>>>0<=15?(a=A+D|0,q[o+4>>2]=3|a,q[(a=a+o|0)+4>>2]=1|q[a+4>>2]):(q[o+4>>2]=3|D,q[(D=o+D|0)+4>>2]=1|A,q[A+D>>2]=A,V&&(a=7732+((w=V>>>3)<<3)|0,B=q[1928],w=(w=1<<w)&C?q[a+8>>2]:(q[1923]=w|C,a),q[a+8>>2]=B,q[w+12>>2]=B,q[B+12>>2]=a,q[B+8>>2]=w),q[1928]=D,q[1925]=A),a=o+8|0}return L=16+Y|0,a}function ka(a){var q=0,t=x(0),L=0,$=0,aa=x(0),ba=x(0);j(a);a:{if(1283457024<=(q=2147483647&($=e(0)))>>>0){if(2139095040<q>>>0)break a;return x((0|$)<0?-1.570796251296997:1.570796251296997)}b:{if(q>>>0<=1054867455){if(L=-1,964689920<=q>>>0)break b;break a}if(a=x(y(a)),q>>>0<=1066926079){if(q>>>0<=1060110335){a=x(x(x(a+a)+x(-1))/x(a+x(2))),L=0;break b}a=x(x(a+x(-1))/x(a+x(1))),L=1}else L=q>>>0<=1075576831?(a=x(x(a+x(-1.5))/x(x(a*x(1.5))+x(1))),2):(a=x(x(-1)/a),3)}if(q=L,aa=x(a*a),t=x(aa*aa),ba=x(t*x(x(t*x(-.106480173766613))+x(-.19999158382415771))),t=x(aa*x(x(t*x(x(t*x(.06168760731816292))+x(.14253635704517365)))+x(.333333283662796))),(0|q)<=-1)return x(a-x(a*x(ba+t)));a=x(u[(q<<=2)+6080>>2]-x(x(x(a*x(ba+t))-u[q+6096>>2])-a)),a=(0|$)<0?x(-a):a}return a}function la(a,ca){var fa,da=0,ea=0,ga=0,ha=0,ia=0;L=fa=L-16|0,j(a);a:if((da=2147483647&(ga=e(0)))>>>0<=1305022426){if(ea=.6366197723675814*(ha=+a)+6755399441055744-6755399441055744,v[ca>>3]=ha+-1.5707963109016418*ea+-1.5893254773528196e-8*ea,y(ea)<2147483648){da=~~ea;break a}da=-2147483648}else 2139095040<=da>>>0?(v[ca>>3]=x(a-a),da=0):(da=((ia=da)>>>23)-150|0,v[8+fa>>3]=(f(0,ia-(da<<23)|0),k()),da=Da(8+fa|0,fa,da),ea=v[fa>>3],(0|ga)<=-1?(v[ca>>3]=-ea,da=0-da|0):v[ca>>3]=ea);return L=16+fa|0,da}function ma(a){var ca=0,ja=0,ka=0,la=0,ma=0;ka=4,ja=1082;a:if(ca=r[0|a]){for(;!((0|(la=r[0|ja]))!=(0|ca)||!(ka=ka+-1|0)|!la);)if(ja=ja+1|0,ca=r[a+1|0],a=a+1|0,!ca)break a;ma=ca}return(255&ma)-r[0|ja]|0}function oa(a,na){return a?function(a,Ub){a:{if(a){if(Ub>>>0<=127)break a;if(q[q[1625]>>2]){if(Ub>>>0<=2047)return o[a+1|0]=63&Ub|128,o[0|a]=Ub>>>6|192,2;if(!(57344!=(-8192&Ub)&&55296<=Ub>>>0))return o[a+2|0]=63&Ub|128,o[0|a]=Ub>>>12|224,o[a+1|0]=Ub>>>6&63|128,3;if(Ub+-65536>>>0<=1048575)return o[a+3|0]=63&Ub|128,o[0|a]=Ub>>>18|240,o[a+2|0]=Ub>>>6&63|128,o[a+1|0]=Ub>>>12&63|128,4}else if(57216==(-128&Ub))break a;q[1906]=25,a=-1}else a=1;return a}return o[0|a]=Ub,1}(a,na):0}function pa(a,na,oa,sa){a:{if(!(20<na>>>0||9<(na=na+-9|0)>>>0)){c:switch(na-1|0){default:return na=q[oa>>2],q[oa>>2]=na+4,void(q[a>>2]=q[na>>2]);case 0:return na=q[oa>>2],q[oa>>2]=na+4,na=q[na>>2],q[a>>2]=na,void(q[a+4>>2]=na>>31);case 1:return na=q[oa>>2],q[oa>>2]=na+4,q[a>>2]=q[na>>2],void(q[a+4>>2]=0);case 3:return na=q[oa>>2],q[oa>>2]=na+4,na=p[na>>1],q[a>>2]=na,void(q[a+4>>2]=na>>31);case 4:return na=q[oa>>2],q[oa>>2]=na+4,q[a>>2]=s[na>>1],void(q[a+4>>2]=0);case 5:return na=q[oa>>2],q[oa>>2]=na+4,na=o[0|na],q[a>>2]=na,void(q[a+4>>2]=na>>31);case 6:return na=q[oa>>2],q[oa>>2]=na+4,q[a>>2]=r[0|na],void(q[a+4>>2]=0);case 2:case 7:break a;case 8:break c}n[sa](a,oa)}return}na=q[oa>>2]+7&-8,q[oa>>2]=na+8,oa=q[na+4>>2],q[a>>2]=q[na>>2],q[a+4>>2]=oa}function qa(a){var na=0,oa=0,sa=0;if(ga(o[q[a>>2]]))for(;na=q[a>>2],sa=o[0|na],q[a>>2]=na+1,oa=(w(oa,10)+sa|0)-48|0,ga(o[na+1|0]););return oa}function ra(a,ta,ua,va,wa){var xa,ya=0,za=0;q[204+(L=xa=L-208|0)>>2]=ua,ba(160+xa|(ua=0),0,40),q[200+xa>>2]=q[204+xa>>2],(0|ia(0,ta,200+xa|0,80+xa|0,160+xa|0,va,wa))<0||(ua=0<=q[a+76>>2]?1:ua,ya=q[a>>2],o[a+74|0]<=0&&(q[a>>2]=-33&ya),za=32&ya,q[a+48>>2]?ia(a,ta,200+xa|0,80+xa|0,160+xa|0,va,wa):(q[a+48>>2]=80,q[a+16>>2]=80+xa,q[a+28>>2]=xa,q[a+20>>2]=xa,ya=q[a+44>>2],ia(a,ta,200+(q[a+44>>2]=xa)|0,80+xa|0,160+xa|0,va,wa),ya&&(n[q[a+36>>2]](a,0,0),q[a+48>>2]=0,q[a+44>>2]=ya,q[a+28>>2]=0,q[a+16>>2]=0,q[a+20>>2]=0)),q[a>>2]=q[a>>2]|za),L=208+xa|0}function sa(a,ta,ua){var va,wa=0;fa(8+(L=va=L-160|0)|0,2536,144),q[52+va>>2]=a,wa=(wa=-2-(q[28+va>>2]=a)|0)>>>0<256?wa:256,a=a+(q[56+va>>2]=wa)|0,q[36+va>>2]=a,q[24+va>>2]=a,ra(8+va|0,ta,ua,15,16),wa&&(a=q[28+va>>2],o[a-((0|a)==q[24+va>>2])|0]=0),L=160+va|0}function ta(a){var ta=0,ua=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=x(0),Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=x(0),Oa=0,Pa=x(0),Qa=0,Ra=0,Sa=x(0),Ta=x(0),Ua=x(0),Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0;if(q[a+256>>2]&&(ta=q[a+200>>2]<<2,fa(q[a+280>>2],q[a+264>>2],ta),fa(q[a+284>>2],q[a+268>>2],ta),fa(q[a+288>>2],q[a+276>>2],ta)),!((0|(Ca=q[a+292>>2]))<1)){for(Ga=(Ea=q[a+296>>2])+w(Ca,40)|0,Aa=q[a+300>>2],ta=Ea;Ua=u[Aa>>2],(Pa=u[ta+32>>2])==(Fa=(ua=q[ta+12>>2])?(Sa=u[ta>>2],Fa=x(Ua-Sa),Ua=u[ta+8>>2],Na=x(Fa/Ua),Fa=x(C(Na)),Ba=x(y(Fa))<x(2147483648)?~~Fa:-2147483648,x(Sa+x(Ua*x(Na-x(0|Ba))))):(Na=u[ta>>2],Fa=u[ta+4>>2],Ua<Na?Na:Fa<Ua?Fa:Ua))?q[ta+36>>2]=0:(u[ta+32>>2]=Fa,q[ta+36>>2]=1),ua||(u[Aa>>2]=Fa),Aa=Aa+4|0,(ta=ta+40|0)>>>0<Ga>>>0;);if(!((0|Ca)<1))for(Oa=q[a+308>>2],Ma=q[a+376>>2];;){e:if(!((0|(ua=q[Ea+28>>2]))<1))if(Ha=(ta=Oa+w(q[Ea+24>>2],28)|0)+w(ua,28)|0,Ua=u[Ea+20>>2],Ta=u[Ea+16>>2],Pa=u[Ea+32>>2],Ma)for(;;){Sa=x(Ca=0);l:{m:{n:{if((0|(Da=q[ta>>2]))<1)Aa=Ba=0;else if(ua=q[ta+4>>2],Na=u[ua>>2],Fa=x(Na-Ta),1!=(0|Da)){if(Pa<Fa){Ba=1,Aa=0;break m}if(Ba=0,Pa<x(Ta+Na))Aa=0;else{if(Aa=1,Fa=u[ua+4>>2],!(Pa<x(Ta+Fa)))for(;;){if((0|Da)==(0|(Aa=Aa+1|0)))break n;if(Na=Fa,Fa=u[ua+(Aa<<2)>>2],Pa<x(Ta+Fa))break}x(Fa-Ta)<Pa||(Aa=Aa+-1|0,(Fa=x(Fa-Na))<Ua||(Sa=x(x(Pa-Na)/Fa)))}}else Ba=Pa<x(Ta+Na)^1|Fa<Pa^1,Aa=0;if(Ba)break m;if(La=Da=1,!q[ta+16>>2])break m;break l}Aa=Da+-1|0,Ba=1}La=(Da=(Fa=u[ta+12>>2])!=Sa)&(Sa==x(0)|Fa==x(0))|q[ta+8>>2]!=(0|Aa),Ca=Ba}if(q[ta+20>>2]=La,q[ta+24>>2]=Da,u[ta+12>>2]=Sa,q[ta+16>>2]=Ca,q[ta+8>>2]=Aa,!((ta=ta+28|0)>>>0<Ha>>>0))break}else{if(!q[Ea+36>>2])for(;;)if(q[ta+20>>2]=0,!((ta=ta+28|(q[ta+24>>2]=0))>>>0<Ha>>>0))break e;for(;;){Sa=x(Ca=0);f:{g:{h:{i:if(!(((Ba=0)|(Aa=q[(ua=ta)>>2]))<1)){if(Ja=q[ta+4>>2],Na=u[Ja>>2],Fa=x(Na-Ta),1!=(0|Aa)){if(!(Pa<Fa)){if(Ba=0,Pa<x(Ta+Na))break i;Da=1;j:if(Fa=u[Ja+4>>2],!(Pa<x(Ta+Fa))){for(Aa=Aa+-1|0;Na=Fa,(0|Aa)!=(0|Da);)if(Fa=u[Ja+((Da=Da+1|0)<<2)>>2],Pa<x(Ta+Fa))break j;Ba=1;break g}if(Ba=0,x(Fa-Ta)<Pa){Aa=Da;break h}if(Aa=Da+-1|0,(Fa=x(Fa-Na))<Ua)break h;Sa=x(x(Pa-Na)/Fa);break h}Ba=1,Aa=0;break g}Ba=Pa<x(Ta+Na)^1|Fa<Pa^1}Aa=0}if(!Ba&&(Ja=Da=1,q[ta+16>>2]))break f}Ca=Ba,Ja=(Da=(Fa=u[ta+12>>2])!=Sa)&(Sa==x(0)|Fa==x(0))|q[ta+8>>2]!=(0|Aa)}if(q[ua+20>>2]=Ja,q[ta+24>>2]=Da,u[ta+12>>2]=Sa,q[ta+16>>2]=Ca,q[ta+8>>2]=Aa,!((ta=ta+28|0)>>>0<Ha>>>0))break}}if(!((Ea=Ea+40|0)>>>0<Ga>>>0))break}}if(1<=(0|(ta=q[a+312>>2])))for(Ja=(Ia=q[a+316>>2])+w(ta,36)|0,Ga=q[a+376>>2];;){Za=(ua=q[Ia+12>>2])+((Ea=q[Ia>>2])<<2)|0,Qa=q[a+308>>2],ta=ua;p:{if(!(Ea=((Da=Ba=Ca=0)|Ea)<1))for(;;){if(Aa=Qa+w(q[ta>>2],28)|0,q[Aa+16>>2]){La=1,Ra=Ya=0;break p}if(Ca=Ca||q[Aa+24>>2],Da=Da||q[Aa+20>>2],Ba=(u[Aa+12>>2]!=x(0))+Ba|0,!((ta=ta+4|0)>>>0<Za>>>0))break}if(La=0,(Ra=Ga?1:Da)|(Ya=Ga?1:Ca)&&(Xa=1<<Ba,q[Ia+8>>2]=Xa,31!=(0|Ba))){for(Ca=q[Ia+20>>2],Aa=(ta=q[Ia+16>>2])+(Da=Xa<<2)|0,Va=ba(Ka=ta,0,4+((Ha=-1^ta)+((ta=ta+4|0)>>>0<Aa>>>0?Aa:ta)|0)&-4),Da=Ca+Da|0,ta=Ca;q[ta>>2]=1065353216,(ta=ta+4|0)>>>0<Da>>>0;);if(!Ea)if(Da=Ea=1,Ba)for(;;){if(Ka=Qa+w(q[ua>>2],28)|0,Ba=q[Ka+8>>2],Ha=w(Ba,Ea),ta=0,(Fa=u[Ka+12>>2])==x(0))for(;q[(Ba=Va+(ta<<2)|0)>>2]=Ha+q[Ba>>2],(0|Xa)!=(0|(ta=ta+1|0)););else{for(q[Va>>2]=Ha+q[Va>>2],u[Ca>>2]=x(x(1)-Fa)*u[Ca>>2],Oa=w(Ba+(ta=1)|0,Ea);Fa=u[Ka+12>>2],Aa=ta&Da,q[(Ba=(Ma=ta<<2)+Va|0)>>2]=q[Ba>>2]+(Aa?Oa:Ha),u[(Ba=Ca+Ma|0)>>2]=(Aa?Fa:x(x(1)-Fa))*u[Ba>>2],(0|Xa)!=(0|(ta=ta+1|0)););Da<<=1}if(Ea=w(q[Ka>>2],Ea),!((ua=ua+4|0)>>>0<Za>>>0))break}else for(;;){if(Aa=Qa+w(q[ua>>2],28)|0,Da=w(q[Aa+8>>2],Ea),ta=0,(Fa=u[Aa+12>>2])==x(0))for(;q[(Ba=Va+(ta<<2)|0)>>2]=Da+q[Ba>>2],(0|Xa)!=(0|(ta=ta+1|0)););else q[Va>>2]=Da+q[Va>>2],u[Ca>>2]=x(x(1)-Fa)*u[Ca>>2];if(Ea=w(q[Aa>>2],Ea),!((ua=ua+4|0)>>>0<Za>>>0))break}}}if(q[Ia+32>>2]=La,q[Ia+24>>2]=Ra,q[Ia+28>>2]=Ya,!((Ia=Ia+36|0)>>>0<Ja>>>0))break}if(!((0|(Ba=q[a+4>>2]))<=0)){for(ua=(ta=q[a+52>>2])+(Ba<<2)|0;Fa=u[ta>>2],u[ta>>2]=Fa<x(0)?x(0):x(A(Fa,x(1))),(ta=ta+4|0)>>>0<ua>>>0;);if(!((0|Ba)<1)){for(Ea=(ta=q[a+8>>2])+(Ba<<3)|0,Ha=q[a+316>>2],Ca=q[a+40>>2],Aa=Da=q[a+36>>2];Ba=0,q[ta+4>>2]&&(ua=q[ta>>2],!q[Da+(ua<<2)>>2]&&-1!=(0|ua)||(Ba=!q[32+(Ha+w(q[Ca>>2],36)|0)>>2])),q[Aa>>2]=Ba,Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+8|0)>>>0<Ea>>>0;);if(!((0|(Ga=q[a+4>>2]))<1))for(Ja=q[a>>2],Oa=q[Ja+724>>2],ua=q[a+40>>2],Da=Ea=0;;){if(Ka=Ha+w(q[ua>>2],36)|0,(q[Ka+28>>2]||q[Ka+24>>2])&&(q[(Ca=Ea<<2)+q[a+16>>2]>>2]=q[Ka+8>>2],q[Ka+24>>2]&&!((0|(Ba=q[Ka+8>>2]))<1)))for(Ma=(ta=q[Ka+16>>2])+(Ba<<2)|0,Ca=q[Ca+Oa>>2],Aa=q[a+28>>2]+(Da<<2)|0,Ba=q[Ja+936>>2];q[Aa>>2]=q[Ba+(Ca+q[ta>>2]<<2)>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ma>>>0;);if(q[Ka+28>>2]&&!((0|(Ba=q[Ka+8>>2]))<1))for(Ba=(ta=q[Ka+20>>2])+(Ba<<2)|0,Aa=q[a+20>>2]+(Da<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ba>>>0;);if(ua=ua+4|0,Da=q[Ka+4>>2]+Da|0,(0|Ga)==(0|(Ea=Ea+1|0)))break}}}if(n[q[1644]](a),_a=q[a+316>>2],1<=(0|(ua=q[a+56>>2]))){for(Ga=(ta=q[a+60>>2])+(ua<<5)|0,Ja=q[a+176>>2],Oa=q[a+172>>2],Ma=q[a+36>>2],Ba=q[a+180>>2],Ca=Aa=q[a+168>>2];;){Da=Ca,ua=0,q[ta+28>>2]&&(-1!=(0|(Ea=q[ta>>2]))&&(ua=0,!q[Ma+(Ea<<2)>>2])||-1!=(0|(Ea=q[ta+4>>2]))&&(ua=0,!q[Aa+(Ea<<2)>>2])||(ua=!q[32+(w(q[Ba>>2],36)+_a|0)>>2])),q[Da>>2]=ua;x:if((Da=q[ta+8>>2])>>>0<=1){if(Da-1){q[Oa+(q[ta+12>>2]<<2)>>2]=ua;break x}q[Ja+(q[ta+12>>2]<<2)>>2]=ua}else Y(4,1473,0);if(Ba=Ba+4|0,Ca=Ca+4|0,!((ta=ta+32|0)>>>0<Ga>>>0))break}_a=q[a+316>>2]}if(Ea=q[a>>2],1<=(0|(Ga=q[a- -64>>2]))){for(Ja=q[Ea+988>>2],Oa=q[Ea+784>>2],La=q[a+184>>2],Ia=ua=0;;){if(Ha=w(q[La>>2],36)+_a|0,(q[Ha+28>>2]||q[Ha+24>>2])&&(q[(Ca=ua<<2)+q[a+84>>2]>>2]=q[Ha+8>>2],q[Ha+24>>2]&&!((0|(Ba=q[Ha+8>>2]))<1)))for(Ma=(ta=q[Ha+16>>2])+(Ba<<2)|0,Da=q[Ca+Oa>>2],Aa=(Ba=Ia<<2)+q[a+100>>2]|0,Ca=Ba+q[a+96>>2]|0;Ba=Da+q[ta>>2]<<2,q[Aa>>2]=Ja+(q[Ba+q[Ea+944>>2]>>2]<<2),q[Ca>>2]=q[Ba+q[Ea+940>>2]>>2],Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ma>>>0;);if(q[Ha+28>>2]&&!((0|(Ba=q[Ha+8>>2]))<1))for(Ba=(ta=q[Ha+20>>2])+(Ba<<2)|0,Aa=q[a+88>>2]+(Ia<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ba>>>0;);if(La=La+4|0,Ia=q[Ha+4>>2]+Ia|0,(0|Ga)==(0|(ua=ua+1|0)))break}_a=q[a+316>>2],Ea=q[a>>2]}if(1<=(0|(Xa=q[a+72>>2])))for(Za=q[a+76>>2],Qa=q[Ea+808>>2],Ya=q[a+188>>2],Ra=Ia=0;;){if(Wa=w(q[Ya>>2],36)+_a|0,(q[Wa+28>>2]||q[Wa+24>>2])&&(q[(ua=Ia<<2)+q[a+116>>2]>>2]=q[Wa+8>>2],q[Wa+24>>2])){if(ta=q[Wa+16>>2],Va=q[ua+Qa>>2],1<=(0|(ua=q[Wa+8>>2])))for(Ka=ta+(ua<<2)|0,Aa=(ua=Ra<<2)+q[a+132>>2]|0,Ca=ua+q[a+136>>2]|0,Ba=ua+q[a+140>>2]|0,Da=ua+q[a+144>>2]|0,La=ua+q[a+128>>2]|0,Ha=q[Ea+948>>2],Ga=q[Ea+964>>2],Ja=q[Ea+960>>2],Oa=q[Ea+956>>2],Ma=q[Ea+952>>2],ua=ta;$a=Va+q[ua>>2]<<2,q[Aa>>2]=q[$a+Ma>>2],q[Ca>>2]=q[Oa+$a>>2],q[Ba>>2]=q[Ja+$a>>2],q[Da>>2]=q[Ga+$a>>2],q[La>>2]=q[Ha+$a>>2],La=La+4|0,Da=Da+4|0,Ba=Ba+4|0,Ca=Ca+4|0,Aa=Aa+4|0,(ua=ua+4|0)>>>0<Ka>>>0;);ua=Za+(Ia<<5)|0,ta=Va+q[ta>>2]<<2,q[ua+24>>2]=q[ta+q[Ea+968>>2]>>2],q[ua+28>>2]=q[ta+q[Ea+972>>2]>>2]}if(q[Wa+28>>2]&&!((0|(ua=q[Wa+8>>2]))<1))for(ua=(ta=q[Wa+20>>2])+(ua<<2)|0,Aa=q[a+120>>2]+(Ra<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<ua>>>0;);if(Ya=Ya+4|0,Ra=q[Wa+4>>2]+Ra|0,(0|Xa)==(0|(Ia=Ia+1|0)))break}if(n[q[1642]](a),n[q[1645]](a),!((0|(ua=q[a+200>>2]))<1)){for(Ma=(ta=q[a+204>>2])+(ua<<4)|0,Ea=q[a+168>>2],Da=q[a+36>>2],Ha=q[a+316>>2],Ca=q[a+252>>2],Aa=q[a+248>>2];Ba=0,q[ta+8>>2]&&(ua=q[ta>>2],!q[Da+(ua<<2)>>2]&&-1!=(0|ua)||(ua=q[ta+4>>2],!q[Ea+(ua<<2)>>2]&&-1!=(0|ua)||(Ba=!q[32+(Ha+w(q[Ca>>2],36)|0)>>2]))),q[Aa>>2]=Ba,Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+16|0)>>>0<Ma>>>0;);if(!((0|(Ja=q[a+200>>2]))<1))for(Ka=q[a>>2],Oa=q[Ka+988>>2],Ma=q[Ka+844>>2],ua=q[a+252>>2],La=Ia=0;;){if(Qa=Ha+w(q[ua>>2],36)|0,(q[Qa+28>>2]||q[Qa+24>>2])&&(q[(Ca=Ia<<2)+q[a+212>>2]>>2]=q[Qa+8>>2],q[Qa+24>>2]&&!((0|(Ba=q[Qa+8>>2]))<1)))for(Ea=(ta=q[Qa+16>>2])+(Ba<<2)|0,Da=q[Ca+Ma>>2],Aa=(Ba=La<<2)+q[a+232>>2]|0,Ca=Ba+q[a+224>>2]|0,Ba=Ba+q[a+228>>2]|0;Ga=Da+q[ta>>2]<<2,q[Aa>>2]=Oa+(q[Ga+q[Ka+984>>2]>>2]<<2),q[Ca>>2]=q[Ga+q[Ka+976>>2]>>2],q[Ba>>2]=q[Ga+q[Ka+980>>2]>>2],Ba=Ba+4|0,Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ea>>>0;);if(q[Qa+28>>2]&&!((0|(Ba=q[Qa+8>>2]))<1))for(Ba=(ta=q[Qa+20>>2])+(Ba<<2)|0,Aa=q[a+216>>2]+(La<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ba>>>0;);if(ua=ua+4|0,La=q[Qa+4>>2]+La|0,(0|Ja)==(0|(Ia=Ia+1|0)))break}}if(n[q[1643]](a),function(a){var ke,de=0,ee=0,fe=0,ge=0,he=0,ie=0,je=0,le=0,me=0,ne=0,oe=0,pe=0;if(1<=(0|(ke=q[a+340>>2])))for(me=q[a+316>>2],le=q[a>>2],ne=q[le+1072>>2],he=q[a+372>>2];;){if(fe=w(q[he>>2],36)+me|0,(q[fe+28>>2]||q[fe+24>>2])&&(q[(de=ie<<2)+q[a+352>>2]>>2]=q[fe+8>>2],q[fe+24>>2]&&!((0|(ge=q[fe+8>>2]))<1)))for(ee=q[fe+16>>2],ge=ee+(ge<<2)|0,oe=q[de+ne>>2],de=q[a+364>>2]+(je<<2)|0,pe=q[le+1104>>2];q[de>>2]=q[(q[ee>>2]+oe<<2)+pe>>2],de=de+4|0,(ee=ee+4|0)>>>0<ge>>>0;);if(q[fe+28>>2]&&!((0|(de=q[fe+8>>2]))<1))for(ee=q[fe+20>>2],ge=ee+(de<<2)|0,de=q[a+356>>2]+(je<<2)|0;q[de>>2]=q[ee>>2],de=de+4|0,(ee=ee+4|0)>>>0<ge>>>0;);if(he=he+4|0,je=q[fe+4>>2]+je|0,(0|ke)==(0|(ie=ie+1|0)))break}}(a),n[q[1646]](a),ua=q[a+48>>2],1<=(0|(ta=q[a+4>>2])))for(Ea=(Ca=q[a+8>>2])+(ta<<3)|0,Ba=q[a+52>>2],Aa=q[a+36>>2],ta=ua;q[Aa>>2]&&(Fa=u[Ba>>2],u[ta>>2]=Fa,-1!=(0|(Da=q[Ca>>2]))&&(u[ta>>2]=Fa*u[(Da<<2)+ua>>2])),ta=ta+4|0,Ba=Ba+4|0,Aa=Aa+4|0,(Ca=Ca+8|0)>>>0<Ea>>>0;);if(1<=(0|(Ba=q[a+56>>2]))){for(ua=a+56|0,ta=q[a+60>>2],Aa=q[a+168>>2],Ca=0;q[Aa>>2]&&n[q[ta+16>>2]](ta,Ca,ua),Aa=Aa+4|0,ta=ta+32|0,(0|Ba)!=(0|(Ca=Ca+1|0)););ua=q[a+48>>2]}if(1<=(0|(Ba=q[a+200>>2])))for(Ja=(ta=q[a+204>>2])+(Ba<<4)|0,Oa=q[a+192>>2],Ma=q[a+60>>2],Ca=q[a+248>>2],Aa=q[a+276>>2],Ba=q[a+272>>2];q[Ca>>2]&&(-1!=(0|(Da=q[ta>>2]))&&(u[Aa>>2]=u[(Da<<2)+ua>>2]*u[Aa>>2]),-1!=(0|(Da=q[ta+4>>2]))&&(u[Aa>>2]=u[Oa+(Da<<2)>>2]*u[Aa>>2],Ea=Ma+(Da<<5)|0,Da=q[Ba>>2],n[q[Ea+20>>2]](q[Ea+24>>2],Da,Da,q[ta+12>>2]))),Ba=Ba+4|0,Aa=Aa+4|0,Ca=Ca+4|0,(ta=ta+16|0)>>>0<Ja>>>0;);if(!function(a){var Bd=0,Cd=0,Dd=0,Ed=0,Fd=x(0),Gd=x(0),Hd=x(0),Id=x(0),Jd=x(0),Kd=0,Ld=0,Md=0,Nd=0,Od=0,Pd=x(0),Qd=0,Rd=0,Sd=x(0),Td=0;if(1<=(0|(Dd=q[a+340>>2])))for(Bd=q[a+344>>2],Td=Bd+w(Dd,24)|0,Dd=q[a+272>>2];;){if((a=0)<(0|(Kd=q[Bd+8>>2])))for(Ld=q[Dd+(q[Bd+4>>2]<<2)>>2],Md=q[Dd+(q[Bd>>2]<<2)>>2],Fd=u[Bd+20>>2],Nd=q[Bd+16>>2],Od=q[Bd+12>>2];Pd=u[((Cd=1|a)<<2)+Od>>2],Ed=s[(a<<1)+Nd>>1]<<3&262136,Gd=u[(Qd=(4|Ed)+Md|0)>>2],Cd=s[(Cd<<1)+Nd>>1]<<3&262136,Hd=u[(Rd=(4|Cd)+Ld|0)>>2],Id=u[(Ed=Ed+Md|0)>>2],Sd=u[(a<<2)+Od>>2],Jd=u[(Cd=Cd+Ld|0)>>2],u[Ed>>2]=Id+x(Fd*x(Sd*x(Jd-Id))),u[Qd>>2]=Gd+x(Fd*x(Sd*x(Hd-Gd))),u[Cd>>2]=Jd+x(Fd*x(Pd*x(Id-Jd))),u[Rd>>2]=Hd+x(Fd*x(Pd*x(Gd-Hd))),(0|(a=a+2|0))<(0|Kd););if(!((Bd=Bd+24|0)>>>0<Td>>>0))break}}(a),n[q[1647]](a),La=q[a+248>>2],Ia=q[a+268>>2],1<=(0|(Ha=q[a+320>>2]))){for(Ja=(Ba=q[a+324>>2])+w(Ha,28)|0,Oa=q[a+44>>2],Ma=q[a+36>>2],ua=Ba;;){if(1<=(0|(Aa=q[ua+4>>2])))for(Ea=ua+20|0,Da=q[ua+12>>2],ta=0;Ga=q[(Ca=Da+(ta<<4)|0)+4>>2]<<2,Ca=1==q[(Ka=Ca)>>2],q[Ka+12>>2]=q[(q[Ga+(Ca?Ma:La)>>2]?Ga+(Ca?Oa:Ia)|0:Ea)>>2],(0|Aa)!=(0|(ta=ta+1|0)););if(!((ua=ua+28|0)>>>0<Ja>>>0))break}for(Oa=q[a+264>>2],Ra=0;;){if(Ga=Ba+w(Ra,28)|0,!(q[(Ja=Ga)+24>>2]<1)){for(Ca=q[a+328>>2],ta=0;q[Ca+(ta<<2)>>2]=-1,(0|(ta=ta+1|0))<(0|(ua=q[Ja+24>>2])););if(!((0|ua)<1))for(ua=q[a+336>>2],ta=0;q[ua+(ta<<2)>>2]=-1,(0|(ta=ta+1|0))<q[Ja+24>>2];);}if(!(q[Ga+4>>2]<1)){for(Ma=q[a+332>>2],ta=0;q[Ma+(ta<<2)>>2]=-1,(0|(ta=ta+1|0))<(0|(ua=q[Ga+4>>2])););if(!((0|ua)<1))for(Aa=q[Ga+12>>2],Ea=q[a+336>>2],ta=0;Da=q[12+(Aa+(ta<<4)|0)>>2]-q[Ga+20>>2]<<2,ua=-1!=(0|(ua=q[(Ca=Da+Ea|0)>>2]))?Ma+(ua<<2)|0:Da+q[a+328>>2]|0,q[ua>>2]=ta,(0|(ta=(q[Ca>>2]=ta)+1|0))<q[Ga+4>>2];);}if(1<=(0|(Ca=q[Ja+24>>2])))for(Aa=q[Ga+8>>2],Ma=q[a+328>>2],Ea=0;;){if(-1!=(0|(ta=q[Ma+(Ea<<2)>>2]))){for(Da=q[a+332>>2],Ca=q[Ga+12>>2];Aa=(ua=1!=q[(ua=Ca+(ta<<4)|0)>>2]?(q[Oa+(q[ua+4>>2]<<2)>>2]=Aa,1):(ua=Ba+w(q[ua+8>>2],28)|0,q[ua+8>>2]=Aa,q[ua>>2]))+Aa|0,(0|ta)<(0|(ua=q[Da+(ta<<2)>>2]))&&-1!=(0|(ta=ua)););Ca=q[Ja+24>>2]}if(!((0|(Ea=Ea+1|0))<(0|Ca)))break}if((0|Ha)==(0|(Ra=Ra+1|0)))break}}Da=q[a+200>>2];M:{if(q[a+376>>2]){if(ta=0,((q[a+256>>2]=0)|Da)<1)break M;for(;;){if(Aa=62,Ca=q[a+260>>2]+ta|0,!q[(ua=ta<<2)+La>>2]|u[ua+q[a+276>>2]>>2]==x(0)||(Aa=63),o[0|Ca]=Aa,(0|Da)==(0|(ta=ta+1|0)))break M;La=q[a+248>>2]}}if(!q[a+256>>2]){if((0|Da)<1)break M;for(ta=0;;){if(!q[(ua=ta<<2)+La>>2]|u[ua+q[a+276>>2]>>2]==x(0)?(ua=q[a+260>>2]+ta|0,o[0|ua]=254&r[0|ua]):(ua=q[a+260>>2]+ta|0,o[0|ua]=1|r[0|ua]),(0|Da)==(0|(ta=ta+1|0)))break M;La=q[a+248>>2]}}if(!(((q[a+256>>2]=0)|Da)<1))for(Aa=0;;){if(Fa=u[(Ca=Aa<<2)+q[a+276>>2]>>2],Ba=q[Ca+La>>2],ta=Fa!=x(0)&0!=(0|Ba),ua=q[a+260>>2]+Aa|0,ta=(0|ta)==(1&o[0|ua])?ta:2|ta,ta=Fa!=u[Ca+q[a+288>>2]>>2]?4|ta:ta,ta=q[Ca+Ia>>2]==q[Ca+q[a+284>>2]>>2]?ta:8|ta,ta=q[Ca+q[a+264>>2]>>2]==q[Ca+q[a+280>>2]>>2]?ta:16|ta,o[0|ua]=Ba?32|ta:ta,(0|Da)==(0|(Aa=Aa+1|0)))break M;Ia=q[a+268>>2],La=q[a+248>>2]}}q[a+376>>2]=0}function ua(a,ab,bb){var cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0;if(q[ab>>2]=384,db=q[a>>2],1<=(0|(fb=q[db>>2]))){for(hb=q[a+16>>2],ib=q[a+296>>2];eb=(1<<q[ib+(q[hb+(cb<<2)>>2]<<2)>>2])+eb|0,(0|fb)!=(0|(cb=cb+1|0)););cb=eb<<2}if(q[ab+4>>2]=fb<<3,q[ab+8>>2]=q[db>>2]<<2,q[ab+12>>2]=q[db>>2]<<2,q[ab+16>>2]=q[db>>2]<<2,q[ab+20>>2]=q[db>>2]<<2,q[ab+24>>2]=q[db>>2]<<2,eb=q[db>>2],q[ab+40>>2]=cb,q[ab+36>>2]=cb,q[ab+32>>2]=cb,q[ab+28>>2]=eb<<2,1<=((eb=cb=0)|(ib=q[db+8>>2]))){for(kb=q[a+296>>2],lb=q[a+88>>2],jb=q[a+76>>2],fb=0;cb=(0|cb)<(0|(hb=q[(mb=eb<<2)+lb>>2]))?hb:cb,gb=(15+(hb<<3)&-16)+gb|0,fb=(1<<q[kb+(q[jb+mb>>2]<<2)>>2])+fb|0,(0|ib)!=(0|(eb=eb+1|0)););eb=cb<<3,cb=fb<<2}if(q[ab+44>>2]=q[db+4>>2]<<5,q[ab+48>>2]=w(q[db+8>>2],24),q[ab+52>>2]=q[db+12>>2]<<5,q[ab+56>>2]=q[db+4>>2]<<2,q[ab+60>>2]=q[db+8>>2]<<2,q[ab+64>>2]=q[db+12>>2]<<2,q[ab+68>>2]=q[db+4>>2]<<2,fb=q[db+4>>2],q[ab+76>>2]=gb,q[ab+72>>2]=fb<<2,q[ab+80>>2]=q[db+8>>2]<<2,fb=q[db+8>>2],q[ab+104>>2]=eb,q[ab+100>>2]=cb,q[ab+96>>2]=cb,q[ab+92>>2]=cb,q[ab+88>>2]=cb,q[ab+84>>2]=fb<<2,1<=((cb=gb=0)|(fb=q[db+12>>2]))){for(hb=q[a+296>>2],ib=q[a+100>>2],eb=0;eb=(1<<q[hb+(q[ib+(cb<<2)>>2]<<2)>>2])+eb|0,(0|fb)!=(0|(cb=cb+1|0)););cb=eb<<2}if(q[ab+108>>2]=fb<<2,eb=q[db+12>>2],q[ab+156>>2]=cb,q[ab+152>>2]=cb,q[ab+148>>2]=cb,q[ab+144>>2]=cb,q[ab+140>>2]=cb,q[ab+136>>2]=cb,q[ab+132>>2]=cb,q[ab+128>>2]=cb,q[ab+124>>2]=cb,q[ab+120>>2]=cb,q[ab+116>>2]=cb,q[ab+112>>2]=eb<<2,1<=((eb=cb=0)|(hb=q[db+16>>2]))){for(kb=q[a+136>>2],lb=q[a+296>>2],jb=q[a+172>>2],fb=0;cb=(0|cb)<(0|(ib=q[(mb=eb<<2)+jb>>2]))?ib:cb,gb=(15+(ib<<3)&-16)+gb|0,fb=(1<<q[lb+(q[kb+mb>>2]<<2)>>2])+fb|0,(0|hb)!=(0|(eb=eb+1|0)););eb=cb<<3,cb=fb<<2}if(q[ab+160>>2]=hb<<4,q[ab+164>>2]=q[db+16>>2]<<2,q[ab+168>>2]=q[db+16>>2],q[ab+172>>2]=q[db+16>>2]<<2,q[ab+176>>2]=q[db+16>>2]<<2,fb=q[db+16>>2],q[ab+184>>2]=gb,q[ab+180>>2]=fb<<2,q[ab+188>>2]=q[db+16>>2]<<2,q[ab+192>>2]=q[db+16>>2]<<2,q[ab+196>>2]=q[db+16>>2]<<2,q[ab+200>>2]=q[db+16>>2]<<2,q[ab+204>>2]=q[db+16>>2]<<2,fb=q[db+16>>2],q[ab+236>>2]=eb,q[ab+232>>2]=cb,q[ab+228>>2]=cb,q[ab+224>>2]=cb,q[ab+220>>2]=cb,q[ab+216>>2]=cb,q[ab+212>>2]=cb,q[ab+208>>2]=fb<<2,q[ab+240>>2]=w(q[db+20>>2],40),q[ab+244>>2]=q[db+20>>2]<<2,q[ab+248>>2]=w(q[db+52>>2],28),1<=((cb=fb=0)|(gb=q[db+48>>2]))){for(hb=q[a+296>>2],eb=0;eb=(1<<q[hb+(cb<<2)>>2])+eb|0,(0|gb)!=(0|(cb=cb+1|0)););cb=eb<<2}if(q[ab+260>>2]=cb,q[ab+256>>2]=cb,q[ab+252>>2]=w(gb,36),q[ab+264>>2]=w(q[db+72>>2],28),1<=((cb=0)|(hb=q[db+72>>2]))){for(ib=q[a+340>>2],kb=q[a+336>>2],lb=q[a+328>>2],eb=0;eb=(0|(jb=q[(gb=fb<<2)+kb>>2]-q[gb+ib>>2]|0))<(0|eb)?eb:jb+1|0,cb=(0|cb)<(0|(gb=q[gb+lb>>2]))?gb:cb,(0|hb)!=(0|(fb=fb+1|0)););fb=eb<<2,cb<<=2}if(eb=q[db+76>>2],q[ab+280>>2]=fb,q[ab+276>>2]=cb,q[ab+272>>2]=fb,q[ab+268>>2]=eb<<4,1<=((cb=0)|(fb=q[db+80>>2]))){for(gb=q[a+364>>2],a=q[a+296>>2],eb=0;eb=(1<<q[a+(q[gb+(cb<<2)>>2]<<2)>>2])+eb|0,(0|fb)!=(0|(cb=cb+1|0)););cb=eb<<2}for(q[ab+284>>2]=w(fb,24),q[ab+288>>2]=q[db+80>>2]<<2,a=q[db+80>>2],q[ab+304>>2]=cb,q[ab+300>>2]=cb,q[ab+296>>2]=cb,q[ab>>2]=0,q[ab+292>>2]=a<<2,cb=384,eb=1;cb=((db=q[(a=(eb<<2)+ab|0)>>2])+15&-16)+(q[a>>2]=cb)|0,77!=(0|(eb=eb+1|0)););q[bb>>2]=cb}function va(a,ab,bb){ab|=0,bb|=0;var nb;L=nb=L+-64|0;a:{if(a|=0)if(ab)if((ab+15&-16)==(0|ab)){if(ab=function(a,fh,gh){var lh,hh=0,ih=0,jh=0,kh=0,mh=0,nh=0,oh=0,ph=0,qh=0,rh=0,sh=0,th=0,uh=0,vh=0,wh=0,xh=0,yh=0,zh=0,Ah=x(0);if(ba(16+(L=lh=L-336|0)|0,0,308),ua(a+704|0,16+lh|0,12+lh|0),(ih=q[12+lh>>2])>>>0<=gh>>>0){if(jh=ba(fh,gh=0,ih),hh=jh+q[16+lh>>2]|0,q[hh+8>>2]=jh+q[20+lh>>2],q[hh+36>>2]=jh+q[24+lh>>2],q[hh+44>>2]=jh+q[28+lh>>2],q[hh+48>>2]=jh+q[32+lh>>2],q[hh+52>>2]=jh+q[36+lh>>2],q[hh+12>>2]=jh+q[40+lh>>2],q[hh+16>>2]=jh+q[44+lh>>2],q[hh+20>>2]=jh+q[48+lh>>2],q[hh+28>>2]=jh+q[52+lh>>2],q[hh+32>>2]=jh+q[56+lh>>2],fh=q[a+704>>2],q[hh+60>>2]=jh+q[60+lh>>2],kh=jh+q[64+lh>>2]|0,q[hh+68>>2]=kh,q[hh+76>>2]=jh+q[68+lh>>2],q[hh+168>>2]=jh+q[72+lh>>2],q[hh+172>>2]=jh+q[76+lh>>2],q[hh+176>>2]=jh+q[80+lh>>2],q[hh+192>>2]=jh+q[84+lh>>2],q[hh+196>>2]=jh+q[88+lh>>2],1<=(0|(fh=q[fh+8>>2])))for(ih=jh+q[92+lh>>2]|0,mh=q[a+792>>2];q[20+(kh+w(gh,24)|0)>>2]=ih,ih=(15+(q[mh+(gh<<2)>>2]<<3)&-16)+ih|0,(0|fh)!=(0|(gh=gh+1|0)););if(q[hh+80>>2]=jh+q[96+lh>>2],q[hh+84>>2]=jh+q[100+lh>>2],q[hh+88>>2]=jh+q[104+lh>>2],q[hh+96>>2]=jh+q[108+lh>>2],q[hh+100>>2]=jh+q[112+lh>>2],q[hh+104>>2]=jh+q[116+lh>>2],q[hh+108>>2]=jh+q[120+lh>>2],q[hh+112>>2]=jh+q[124+lh>>2],q[hh+116>>2]=jh+q[128+lh>>2],q[hh+120>>2]=jh+q[132+lh>>2],q[hh+128>>2]=jh+q[136+lh>>2],q[hh+132>>2]=jh+q[140+lh>>2],q[hh+136>>2]=jh+q[144+lh>>2],q[hh+140>>2]=jh+q[148+lh>>2],q[hh+144>>2]=jh+q[152+lh>>2],q[hh+148>>2]=jh+q[156+lh>>2],q[hh+152>>2]=jh+q[160+lh>>2],q[hh+156>>2]=jh+q[164+lh>>2],q[hh+160>>2]=jh+q[168+lh>>2],q[hh+164>>2]=jh+q[172+lh>>2],fh=q[a+704>>2],q[hh+204>>2]=jh+q[176+lh>>2],q[hh+248>>2]=jh+q[180+lh>>2],q[hh+260>>2]=jh+q[184+lh>>2],q[hh+264>>2]=jh+q[188+lh>>2],q[hh+268>>2]=jh+q[192+lh>>2],gh=jh+q[196+lh>>2]|0,q[hh+272>>2]=gh,!((0|(fh=q[fh+16>>2]))<1)&&(ih=jh+q[200+lh>>2]|0,q[gh>>2]=ih,(gh=1)!=(0|fh)))for(kh=0;ih=(15+(q[q[a+876>>2]+(kh<<2)>>2]<<3)&-16)+ih|0,q[q[hh+272>>2]+(gh<<2)>>2]=ih,(0|fh)!=(0|(gh=(kh=gh)+1|0)););if(q[hh+276>>2]=jh+q[204+lh>>2],q[hh+280>>2]=jh+q[208+lh>>2],q[hh+284>>2]=jh+q[212+lh>>2],q[hh+288>>2]=jh+q[216+lh>>2],q[hh+208>>2]=jh+q[220+lh>>2],q[hh+212>>2]=jh+q[224+lh>>2],q[hh+216>>2]=jh+q[228+lh>>2],q[hh+224>>2]=jh+q[232+lh>>2],q[hh+228>>2]=jh+q[236+lh>>2],q[hh+232>>2]=jh+q[240+lh>>2],q[hh+236>>2]=jh+q[244+lh>>2],q[hh+240>>2]=jh+q[248+lh>>2],q[hh+244>>2]=jh+q[252+lh>>2],fh=q[256+lh>>2],oh=jh+q[260+lh>>2]|0,q[hh+300>>2]=oh,qh=fh+jh|0,q[hh+296>>2]=qh,rh=jh+q[264+lh>>2]|0,q[hh+308>>2]=rh,fh=q[a+704>>2],gh=q[276+lh>>2],ih=q[272+lh>>2],ph=jh+q[268+lh>>2]|0,q[hh+316>>2]=ph,1<=(0|(kh=q[fh+48>>2])))for(ih=jh+ih|0,fh=gh+jh|0,mh=q[a+1e3>>2],gh=0;nh=ph+w(gh,36)|0,q[nh+20>>2]=fh,q[nh+16>>2]=ih,nh=1<<q[mh+(gh<<2)>>2]<<2,fh=nh+fh|0,ih=ih+nh|0,(0|kh)!=(0|(gh=gh+1|0)););if(fh=q[a+704>>2],kh=jh+q[280+lh>>2]|0,q[hh+324>>2]=kh,1<=(0|(fh=q[fh+72>>2])))for(ih=jh+q[284+lh>>2]|0,mh=q[a+1032>>2],gh=0;q[12+(kh+w(gh,28)|0)>>2]=ih,ih=(q[mh+(gh<<2)>>2]<<4)+ih|0,(0|fh)!=(0|(gh=gh+1|0)););if(q[hh+328>>2]=jh+q[288+lh>>2],q[hh+332>>2]=jh+q[292+lh>>2],q[hh+336>>2]=jh+q[296+lh>>2],q[hh+344>>2]=jh+q[300+lh>>2],q[hh+348>>2]=jh+q[304+lh>>2],q[hh+352>>2]=jh+q[308+lh>>2],q[hh+356>>2]=jh+q[312+lh>>2],q[hh+364>>2]=jh+q[316+lh>>2],fh=q[320+lh>>2],q[hh+376>>2]=1,q[hh+368>>2]=fh+jh,q[hh+380>>2]=1&o[q[a+708>>2]+20|0],jh=q[a+704>>2],ih=q[jh+20>>2],1<=(0|(q[hh+292>>2]=ih))){for(sh=q[a+932>>2],th=q[a+928>>2],uh=q[a+924>>2],nh=q[a+916>>2],wh=q[a+920>>2],xh=q[a+908>>2],yh=q[a+912>>2],fh=ih;kh=qh+w(gh=fh+-1|0,40)|0,vh=(mh=gh<<2)+yh|0,q[kh>>2]=q[vh>>2],zh=mh+xh|0,q[kh+4>>2]=q[zh>>2],u[kh+8>>2]=u[zh>>2]-u[vh>>2],q[kh+12>>2]=q[mh+wh>>2],q[kh+32>>2]=q[mh+nh>>2],Ah=$b(x(q[mh+uh>>2])),u[kh+16>>2]=Ah,u[kh+20>>2]=Ah*x(1.5),q[kh+24>>2]=q[mh+th>>2],mh=q[mh+sh>>2],q[kh+36>>2]=1,q[kh+28>>2]=mh,kh=1<(0|fh),fh=gh,kh;);for(;q[(gh=(fh=ih+-1|0)<<2)+oh>>2]=q[gh+nh>>2],gh=1<(0|ih),ih=fh,gh;);}if(fh=q[jh+52>>2],1<=(0|(q[hh+304>>2]=fh)))for(kh=q[a+1004>>2],mh=q[a+1012>>2],nh=q[a+1008>>2];ih=rh+w(gh=fh+-1|0,28)|0,oh=gh<<2,q[ih>>2]=q[oh+nh>>2],oh=q[kh+oh>>2],q[ih+20>>2]=1,q[ih+24>>2]=1,q[ih+12>>2]=0,q[ih+4>>2]=mh+(oh<<2),ih=1<(0|fh),fh=gh,ih;);if(fh=q[jh+48>>2],1<=(0|(q[hh+312>>2]=fh)))for(kh=q[a+996>>2],mh=q[a+992>>2],nh=q[a+1e3>>2];ih=ph+w(gh=fh+-1|0,36)|0,qh=q[(oh=gh<<2)+nh>>2],q[ih>>2]=qh,q[ih+4>>2]=1<<qh,oh=q[kh+oh>>2],q[ih+24>>2]=1,q[ih+28>>2]=1,q[ih+12>>2]=mh+(oh<<2),ih=1<(0|fh),fh=gh,ih;);if(fh=q[jh>>2],q[hh+4>>2]=fh,mh=q[a+720>>2],q[hh+40>>2]=mh,(0|fh)<1)gh=0;else{for(nh=q[a+732>>2],oh=q[a+736>>2],qh=q[a+740>>2],rh=q[hh+52>>2],sh=q[hh+8>>2],ih=fh;kh=(gh=ih+-1|0)<<2,q[(th=sh+(gh<<3)|0)>>2]=q[kh+qh>>2],q[th+4>>2]=q[kh+oh>>2],u[kh+rh>>2]=q[kh+nh>>2]?x(1):x(0),kh=1<(0|ih),ih=gh,kh;);for(nh=q[hh+12>>2],gh=0;kh=q[4+(ph+w(q[(oh=(ih=fh+-1|0)<<2)+mh>>2],36)|0)>>2],q[nh+oh>>2]=kh,gh=gh+kh|0,kh=1<(0|fh),fh=ih,kh;);}if(q[hh+24>>2]=gh,ih=q[jh+4>>2],q[hh+56>>2]=ih,q[hh+180>>2]=q[a+752>>2],q[hh+184>>2]=q[a+780>>2],q[hh+188>>2]=q[a+804>>2],1<=(0|ih)){for(;;){ih=(fh=ih)+-1|0,gh=q[hh+60>>2]+(ih<<5)|0,kh=ih<<2,q[gh>>2]=q[kh+q[a+764>>2]>>2],q[gh+4>>2]=q[kh+q[a+768>>2]>>2],jh=q[kh+q[a+772>>2]>>2],q[gh+8>>2]=jh,mh=q[kh+q[a+776>>2]>>2],q[gh+12>>2]=mh,q[gh+28>>2]=q[kh+q[a+760>>2]>>2];c:if(jh>>>0<=1){if(jh-1){q[gh+20>>2]=1,q[gh+16>>2]=2,q[gh+24>>2]=q[hh+68>>2]+w(mh,24);break c}q[gh+20>>2]=3,q[gh+16>>2]=4,q[gh+24>>2]=q[hh+76>>2]+(mh<<5)}else Y(4,1026,0);if(!(1<(0|fh)))break}jh=q[a+704>>2]}fh=q[jh+8>>2];d:if(!((0|(q[hh+64>>2]=fh))<1)){if(gh=fh+-1|0,mh=q[a+792>>2],ph=q[a+800>>2],nh=q[a+796>>2],oh=q[hh+68>>2],r[a+4|0]<2)for(;;)if(ih=oh+w(gh,24)|0,kh=gh<<2,q[ih>>2]=q[kh+nh>>2],q[ih+4>>2]=q[kh+ph>>2],kh=q[kh+mh>>2],q[ih+8>>2]=0,q[ih+12>>2]=kh,ih=0<(0|gh),gh=gh+-1|0,!ih)break d;for(qh=q[a+1108>>2];ih=oh+w(gh,24)|0,kh=gh<<2,q[ih>>2]=q[kh+nh>>2],q[ih+4>>2]=q[kh+ph>>2],q[ih+12>>2]=q[kh+mh>>2],q[ih+8>>2]=q[kh+qh>>2],ih=0<(0|gh),gh=gh+-1|0,ih;);}if(gh=q[jh+12>>2],1<=(0|(q[hh+72>>2]=gh)))for(mh=q[a+816>>2],ph=q[hh+76>>2],ih=gh;q[ph+((kh=ih+-1|0)<<5)>>2]=q[mh+(kh<<2)>>2],nh=1<(0|ih),ih=kh,nh;);if(1<=((kh=ih=0)|fh)){for(ph=q[hh+80>>2],nh=q[hh+184>>2],oh=q[hh+316>>2];mh=q[4+(oh+w(q[(qh=(gh=fh+-1|0)<<2)+nh>>2],36)|0)>>2],q[ph+qh>>2]=mh,kh=kh+mh|0,mh=1<(0|fh),fh=gh,mh;);gh=q[hh+72>>2]}if(q[hh+92>>2]=kh,1<=(0|gh))for(mh=q[hh+112>>2],ph=q[hh+188>>2],nh=q[hh+316>>2];kh=q[4+(nh+w(q[(oh=(fh=gh+-1|0)<<2)+ph>>2],36)|0)>>2],q[mh+oh>>2]=kh,ih=ih+kh|0,kh=1<(0|gh),gh=fh,kh;);if(q[hh+124>>2]=ih,ih=q[jh+16>>2],q[hh+200>>2]=ih,ph=q[a+840>>2],q[hh+252>>2]=ph,(0|ih)<1)gh=0;else{for(nh=q[a+856>>2],oh=q[a+876>>2],qh=q[a+864>>2],rh=q[a+860>>2],sh=q[hh+204>>2],kh=ih;mh=(fh=kh+-1|0)<<2,q[(gh=sh+(fh<<4)|0)>>2]=q[mh+rh>>2],q[gh+4>>2]=q[mh+qh>>2],q[gh+12>>2]=q[mh+oh>>2],q[gh+8>>2]=q[mh+nh>>2],gh=1<(0|kh),kh=fh,gh;);for(mh=q[hh+208>>2],nh=q[hh+316>>2],gh=0;kh=q[4+(nh+w(q[(oh=(fh=ih+-1|0)<<2)+ph>>2],36)|0)>>2],q[mh+oh>>2]=kh,gh=gh+kh|0,kh=1<(0|ih),ih=fh,kh;);}if(q[hh+220>>2]=gh,kh=q[jh+72>>2],1<=(0|(q[hh+320>>2]=kh)))for(nh=q[a+1028>>2],oh=q[a+1044>>2],qh=q[a+1040>>2],rh=q[a+1036>>2],sh=q[a+1032>>2],th=q[hh+324>>2],ih=0;;){if(fh=th+w(ih,28)|0,mh=q[(gh=ih<<2)+sh>>2],q[fh+4>>2]=mh,q[fh>>2]=q[gh+rh>>2],ph=q[gh+qh>>2],q[fh+16>>2]=ph,uh=q[gh+oh>>2],q[fh+20>>2]=uh,q[fh+8>>2]=0,q[fh+24>>2]=1+(ph-uh|0),1<=(0|mh))for(uh=q[gh+nh>>2],wh=q[fh+12>>2],xh=q[a+1056>>2],yh=q[a+1048>>2],vh=q[a+1052>>2],gh=0;ph=gh+uh<<2,q[(fh=wh+(gh<<4)|0)+4>>2]=q[ph+vh>>2],q[fh>>2]=q[ph+yh>>2],ph=q[ph+xh>>2],q[fh+12>>2]=0,q[fh+8>>2]=ph,(0|mh)!=(0|(gh=gh+1|0)););if((0|kh)==(0|(ih=ih+1|0)))break}if(ih=q[jh+80>>2],q[hh+340>>2]=ih,mh=q[a+1068>>2],q[hh+372>>2]=mh,!(((fh=0)|ih)<1)){for(ph=q[a+1100>>2],nh=q[a+1088>>2],oh=q[a+1096>>2],qh=q[a+1092>>2],rh=q[a+1084>>2],sh=q[a+1080>>2],th=q[hh+344>>2];kh=th+w(gh=ih+-1|0,24)|0,jh=gh<<2,q[kh>>2]=q[jh+sh>>2],q[kh+4>>2]=q[jh+rh>>2],q[kh+8>>2]=q[jh+qh>>2],jh=q[jh+nh>>2],q[kh+16>>2]=ph+(jh<<1),q[kh+12>>2]=oh+(jh<<2),kh=1<(0|ih),ih=gh,kh;);if(!((0|(gh=q[hh+340>>2]))<1))for(jh=q[hh+348>>2],ph=q[hh+316>>2];kh=q[4+(ph+w(q[(nh=(ih=gh+-1|0)<<2)+mh>>2],36)|0)>>2],q[jh+nh>>2]=kh,fh=fh+kh|0,kh=1<(0|gh),gh=ih,kh;);}q[hh>>2]=a,q[hh+360>>2]=fh,ta(hh)}return L=336+lh|0,hh}(a,ab,bb))break a;q[36+nb>>2]=1872,q[32+nb>>2]=1846,Y(4,1087,32+nb|0)}else q[52+nb>>2]=1441,q[48+nb>>2]=1846,Y(4,1087,48+nb|0);else q[20+nb>>2]=1246,q[16+nb>>2]=1846,Y(4,1087,16+nb|0);else q[4+nb>>2]=1828,q[nb>>2]=1846,Y(4,1087,nb);ab=0}return L=nb+64|0,0|ab}function wa(a){var ab;return L=ab=L-16|0,a=(a|=0)?function(a){var Th;return ba(16+(L=Th=L-336|0)|0,0,308),ua(a+704|0,16+Th|0,12+Th|0),L=336+Th|0,q[12+Th>>2]}(a):(q[4+ab>>2]=1828,q[ab>>2]=1810,Y(4,1087,ab),0),L=16+ab|0,0|a}function xa(a,bb){var ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0;rb=a+bb|0;a:{b:if(!(1&(ob=q[a+4>>2]))){if(!(3&ob))break a;if(bb=(ob=q[a>>2])+bb|0,(0|(a=a-ob|0))==q[1928]){if(3==(3&(ob=q[rb+4>>2])))return q[1925]=bb,q[rb+4>>2]=-2&ob,q[a+4>>2]=1|bb,void(q[rb>>2]=bb)}else{if(ob>>>0<=255){if(qb=ob>>>3,ob=q[a+8>>2],(0|(pb=q[a+12>>2]))==(0|ob)){ub=7692,vb=q[1923]&jc(qb),q[ub>>2]=vb;break b}q[ob+12>>2]=pb,q[pb+8>>2]=ob;break b}if(tb=q[a+24>>2],(0|(ob=q[a+12>>2]))==(0|a))if((qb=q[(pb=a+20|0)>>2])||(qb=q[(pb=a+16|0)>>2])){for(;sb=pb,(qb=q[(pb=(ob=qb)+20|0)>>2])||(pb=ob+16|0,qb=q[ob+16>>2]););q[sb>>2]=0}else ob=0;else pb=q[a+8>>2],q[pb+12>>2]=ob,q[ob+8>>2]=pb;if(!tb)break b;pb=q[a+28>>2];e:{if(q[(qb=7996+(pb<<2)|0)>>2]==(0|a)){if(q[qb>>2]=ob)break e;ub=7696,vb=q[1924]&jc(pb),q[ub>>2]=vb;break b}if(!(q[tb+(q[tb+16>>2]==(0|a)?16:20)>>2]=ob))break b}if(q[ob+24>>2]=tb,(pb=q[a+16>>2])&&(q[ob+16>>2]=pb,q[pb+24>>2]=ob),!(pb=q[a+20>>2]))break b;q[ob+20>>2]=pb,q[pb+24>>2]=ob}}f:{if(!(2&(ob=q[rb+4>>2]))){if(q[1929]==(0|rb)){if(q[1929]=a,bb=q[1926]+bb|0,q[1926]=bb,q[a+4>>2]=1|bb,q[1928]!=(0|a))break a;return q[1925]=0,void(q[1928]=0)}if(q[1928]==(0|rb))return q[1928]=a,bb=q[1925]+bb|0,q[1925]=bb,q[a+4>>2]=1|bb,void(q[a+bb>>2]=bb);bb=(-8&ob)+bb|0;g:if(ob>>>0<=255){if(qb=ob>>>3,ob=q[rb+8>>2],(0|(pb=q[rb+12>>2]))==(0|ob)){ub=7692,vb=q[1923]&jc(qb),q[ub>>2]=vb;break g}q[ob+12>>2]=pb,q[pb+8>>2]=ob}else{if(tb=q[rb+24>>2],(0|rb)==(0|(ob=q[rb+12>>2])))if((qb=q[(pb=rb+20|0)>>2])||(qb=q[(pb=rb+16|0)>>2])){for(;sb=pb,(qb=q[(pb=(ob=qb)+20|0)>>2])||(pb=ob+16|0,qb=q[ob+16>>2]););q[sb>>2]=0}else ob=0;else pb=q[rb+8>>2],q[pb+12>>2]=ob,q[ob+8>>2]=pb;if(tb){pb=q[rb+28>>2];j:{if(q[(qb=7996+(pb<<2)|0)>>2]==(0|rb)){if(q[qb>>2]=ob)break j;ub=7696,vb=q[1924]&jc(pb),q[ub>>2]=vb;break g}if(!(q[tb+(q[tb+16>>2]==(0|rb)?16:20)>>2]=ob))break g}q[ob+24>>2]=tb,(pb=q[rb+16>>2])&&(q[ob+16>>2]=pb,q[pb+24>>2]=ob),(pb=q[rb+20>>2])&&(q[ob+20>>2]=pb,q[pb+24>>2]=ob)}}if(q[a+4>>2]=1|bb,q[a+bb>>2]=bb,q[1928]!=(0|a))break f;return void(q[1925]=bb)}q[rb+4>>2]=-2&ob,q[a+4>>2]=1|bb,q[a+bb>>2]=bb}if(bb>>>0<=255)return bb=7732+((ob=bb>>>3)<<3)|0,ob=(pb=q[1923])&(ob=1<<ob)?q[bb+8>>2]:(q[1923]=ob|pb,bb),q[bb+8>>2]=a,q[ob+12>>2]=a,q[a+12>>2]=bb,void(q[a+8>>2]=ob);q[a+16>>2]=0,ob=q[a+20>>2]=0,(qb=bb>>>8)&&(ob=31,16777215<bb>>>0||(ob=28+((ob=((rb=(qb<<=sb=qb+1048320>>>16&8)<<(ob=qb+520192>>>16&4))<<(qb=rb+245760>>>16&2)>>>15)-(qb|ob|sb)|0)<<1|bb>>>ob+21&1)|0)),qb=7996+((q[(pb=a)+28>>2]=ob)<<2)|0;m:{if((pb=q[1924])&(sb=1<<ob)){for(pb=bb<<(31==(0|ob)?0:25-(ob>>>1)|0),ob=q[qb>>2];;){if((-8&q[(qb=ob)+4>>2])==(0|bb))break m;if(ob=pb>>>29,pb<<=1,!(ob=q[(sb=qb+(4&ob)|0)+16>>2]))break}q[sb+16>>2]=a}else q[1924]=pb|sb,q[qb>>2]=a;return q[a+24>>2]=qb,q[a+12>>2]=a,void(q[a+8>>2]=a)}bb=q[qb+8>>2],q[bb+12>>2]=a,q[qb+8>>2]=a,q[a+24>>2]=0,q[a+12>>2]=qb,q[a+8>>2]=bb}}function ya(a,bb,wb){var xb=0;a:{if(8!=(0|bb)){if(xb=28,3&bb|1!=(0|function(a){var qi=0,si=0;for(;si=qi,a;)a&=a-1,qi=qi+1|0;return si}(bb>>>2)))break a;if(xb=48,-64-bb>>>0<wb>>>0)break a;bb=function(a,_h){var $h=0,ai=0,ci=0,di=0,ei=0;if((ai=a>>>0>($h=16)?a:16)+-1&ai)for(;$h=(a=$h)<<1,a>>>0<ai>>>0;);else a=ai;if(-64-a>>>0<=_h>>>0)return q[1906]=48,0;if(!($h=ja(12+((ai=_h>>>0<11?16:_h+11&-8)+a|0)|0)))return 0;_h=$h+-8|0;$h&a+-1?(ei=q[(di=$h+-4|0)>>2],ci=(-8&ei)-($h=(a=15<($h=((a+$h|0)-1&0-a)-8|0)-_h>>>0?$h:a+$h|0)-_h|0)|0,3&ei?(q[a+4>>2]=ci|1&q[a+4>>2]|2,q[(ci=a+ci|0)+4>>2]=1|q[ci+4>>2],q[di>>2]=$h|1&q[di>>2]|2,q[a+4>>2]=1|q[a+4>>2],xa(_h,$h)):(_h=q[_h>>2],q[a+4>>2]=ci,q[a>>2]=_h+$h)):a=_h;3&(_h=q[a+4>>2])&&(($h=-8&_h)>>>0<=ai+16>>>0||(q[a+4>>2]=ai|1&_h|2,_h=a+ai|0,ai=$h-ai|0,q[_h+4>>2]=3|ai,q[($h=a+$h|0)+4>>2]=1|q[$h+4>>2],xa(_h,ai)));return a+8|0}(16<bb>>>0?bb:16,wb)}else bb=ja(wb);if(!bb)return 1;q[a>>2]=bb,xb=0}return xb}function za(a){var bb=0,wb=0,yb=0,zb=0,Ab=0,Bb=0,Cb=0,Db=0,Eb=0;a:if(a){Ab=(yb=a+-8|0)+(a=-8&(wb=q[a+-4>>2]))|0;b:if(!(1&wb)){if(!(3&wb))break a;if((yb=yb-(wb=q[yb>>2])|0)>>>0<t[1927])break a;if(a=a+wb|0,q[1928]==(0|yb)){if(3==(3&(wb=q[Ab+4>>2])))return q[1925]=a,q[Ab+4>>2]=-2&wb,q[yb+4>>2]=1|a,void(q[a+yb>>2]=a)}else{if(wb>>>0<=255){if(zb=q[yb+8>>2],wb>>>=3,(0|(bb=q[yb+12>>2]))==(0|zb)){Db=7692,Eb=q[1923]&jc(wb),q[Db>>2]=Eb;break b}q[zb+12>>2]=bb,q[bb+8>>2]=zb;break b}if(Cb=q[yb+24>>2],(0|yb)==(0|(wb=q[yb+12>>2])))if((bb=q[(zb=yb+20|0)>>2])||(bb=q[(zb=yb+16|0)>>2])){for(;Bb=zb,(bb=q[(zb=(wb=bb)+20|0)>>2])||(zb=wb+16|0,bb=q[wb+16>>2]););q[Bb>>2]=0}else wb=0;else bb=q[yb+8>>2],q[bb+12>>2]=wb,q[wb+8>>2]=bb;if(!Cb)break b;zb=q[yb+28>>2];e:{if(q[(bb=7996+(zb<<2)|0)>>2]==(0|yb)){if(q[bb>>2]=wb)break e;Db=7696,Eb=q[1924]&jc(zb),q[Db>>2]=Eb;break b}if(!(q[Cb+(q[Cb+16>>2]==(0|yb)?16:20)>>2]=wb))break b}if(q[wb+24>>2]=Cb,(bb=q[yb+16>>2])&&(q[wb+16>>2]=bb,q[bb+24>>2]=wb),!(bb=q[yb+20>>2]))break b;q[wb+20>>2]=bb,q[bb+24>>2]=wb}}if(!(Ab>>>0<=yb>>>0)&&1&(wb=q[Ab+4>>2])){f:{if(!(2&wb)){if(q[1929]==(0|Ab)){if(q[1929]=yb,a=q[1926]+a|0,q[1926]=a,q[yb+4>>2]=1|a,q[1928]!=(0|yb))break a;return q[1925]=0,void(q[1928]=0)}if(q[1928]==(0|Ab))return q[1928]=yb,a=q[1925]+a|0,q[1925]=a,q[yb+4>>2]=1|a,void(q[a+yb>>2]=a);a=(-8&wb)+a|0;g:if(wb>>>0<=255){if(wb>>>=3,(0|(bb=q[Ab+8>>2]))==(0|(zb=q[Ab+12>>2]))){Db=7692,Eb=q[1923]&jc(wb),q[Db>>2]=Eb;break g}q[bb+12>>2]=zb,q[zb+8>>2]=bb}else{if(Cb=q[Ab+24>>2],(0|Ab)==(0|(wb=q[Ab+12>>2])))if((bb=q[(zb=Ab+20|0)>>2])||(bb=q[(zb=Ab+16|0)>>2])){for(;Bb=zb,(bb=q[(zb=(wb=bb)+20|0)>>2])||(zb=wb+16|0,bb=q[wb+16>>2]););q[Bb>>2]=0}else wb=0;else bb=q[Ab+8>>2],q[bb+12>>2]=wb,q[wb+8>>2]=bb;if(Cb){zb=q[Ab+28>>2];j:{if(q[(bb=7996+(zb<<2)|0)>>2]==(0|Ab)){if(q[bb>>2]=wb)break j;Db=7696,Eb=q[1924]&jc(zb),q[Db>>2]=Eb;break g}if(!(q[Cb+(q[Cb+16>>2]==(0|Ab)?16:20)>>2]=wb))break g}q[wb+24>>2]=Cb,(bb=q[Ab+16>>2])&&(q[wb+16>>2]=bb,q[bb+24>>2]=wb),(bb=q[Ab+20>>2])&&(q[wb+20>>2]=bb,q[bb+24>>2]=wb)}}if(q[yb+4>>2]=1|a,q[a+yb>>2]=a,q[1928]!=(0|yb))break f;return void(q[1925]=a)}q[Ab+4>>2]=-2&wb,q[yb+4>>2]=1|a,q[a+yb>>2]=a}if(a>>>0<=255)return wb=7732+((a>>>=3)<<3)|0,a=(bb=q[1923])&(a=1<<a)?q[wb+8>>2]:(q[1923]=a|bb,wb),q[wb+8>>2]=yb,q[a+12>>2]=yb,q[yb+12>>2]=wb,void(q[yb+8>>2]=a);q[yb+16>>2]=0,bb=q[yb+20>>2]=0,(zb=a>>>8)&&(bb=31,16777215<a>>>0||(bb=zb,bb<<=zb=zb+1048320>>>16&8,bb=28+((bb=((bb<<=Cb=bb+520192>>>16&4)<<(Bb=bb+245760>>>16&2)>>>15)-(Bb|zb|Cb)|0)<<1|a>>>bb+21&1)|0)),Bb=7996+((q[(wb=yb)+28>>2]=bb)<<2)|0;m:if((zb=q[1924])&(wb=1<<bb)){zb=a<<(31==(0|bb)?0:25-(bb>>>1)|0),wb=q[Bb>>2];n:{for(;;){if((-8&q[(bb=wb)+4>>2])==(0|a))break n;if(wb=zb>>>29,zb<<=1,!(wb=q[(Bb=bb+(4&wb)|0)+16>>2]))break}q[Bb+16>>2]=yb,q[yb+12>>2]=yb,q[yb+24>>2]=bb,q[yb+8>>2]=yb;break m}a=q[bb+8>>2],q[a+12>>2]=yb,q[bb+8>>2]=yb,q[yb+24>>2]=0,q[yb+12>>2]=bb,q[yb+8>>2]=a}else q[1924]=wb|zb,q[Bb>>2]=yb,q[yb+12>>2]=yb,q[yb+24>>2]=Bb,q[yb+8>>2]=yb;if(a=q[1931]+-1|0,!(q[1931]=a)){for(yb=8148;yb=(a=q[yb>>2])+8|0,a;);q[1931]=-1}}}}function Aa(a,Fb){var Lb,Gb=0,Hb=0,Ib=0,Jb=0,Kb=x(0);if(j(Fb),!((Ib=2147483647&(Gb=e(0)))>>>0<=2139095040&&(j(a),(Hb=2147483647&(Jb=e(0)))>>>0<2139095041)))return x(a+Fb);if(1065353216==(0|Gb))return ka(a);Gb=(Lb=Gb>>>30&2)|Jb>>>31;b:{c:{d:{e:{if(!Hb){f:switch(Gb-2|0){case 0:break e;case 1:break f;default:break d}return x(-3.1415927410125732)}if(2139095040!=(0|Ib)){if(!Ib|!(Hb>>>0<=Ib+218103808>>>0&&2139095040!=(0|Hb)))break b;if(Hb+218103808>>>0<Ib>>>0&&(Kb=x(0),Lb)||(Kb=ka(x(y(x(a/Fb))))),a=Kb,Gb>>>0<=2){h:switch(Gb-1|0){case 0:return x(-a);case 1:break h;default:break d}return x(x(3.1415927410125732)-x(a+x(8.742277657347586e-8)))}return x(x(a+x(8.742277657347586e-8))+x(-3.1415927410125732))}if(2139095040==(0|Hb))break c;return u[6128+(Gb<<2)>>2]}a=x(3.1415927410125732)}return a}return u[6112+(Gb<<2)>>2]}return x((0|Jb)<0?-1.5707963705062866:1.5707963705062866)}function Da(a,Ub,Vb){var Zb,bc,gc,hc,kc,Wb=0,Xb=0,Yb=0,_b=0,$b=0,ac=0,cc=0,dc=0,ec=0,fc=0,ic=0,jc=0;if(L=Zb=L-560|0,cc=(Xb=Vb)+w(gc=0<(0|(Vb=(Vb+-3|0)/24|0))?Vb:0,-24)|0,0<=(0|(bc=q[808])))for(Xb=bc+1|0,Vb=gc;v[(320+Zb|0)+(Yb<<3)>>3]=(0|Vb)<0?0:+q[3248+(Vb<<2)>>2],Vb=Vb+1|0,(0|Xb)!=(0|(Yb=Yb+1|0)););for(ac=cc+-24|0,Xb=0;;){for(Wb=Vb=0;Wb+=v[(Vb<<3)+a>>3]*v[(320+Zb|0)+(Xb-Vb<<3)>>3],1!=(0|(Vb=Vb+1|0)););if(v[(Xb<<3)+Zb>>3]=Wb,Vb=(0|Xb)<(0|bc),Xb=Xb+1|0,!Vb)break}kc=23-ac|0,hc=24-ac|0,Xb=bc;a:{for(;;){if(Wb=v[(Xb<<3)+Zb>>3],!(ec=((Vb=0)|(Yb=Xb))<1))for(;$b=(480+Zb|0)+(Vb<<2)|0,dc=Wb,_b=y(Wb*=5.960464477539063e-8)<2147483648?~~Wb:-2147483648,_b=y(dc+=-16777216*(Wb=+(0|_b)))<2147483648?~~dc:-2147483648,q[$b>>2]=_b,Wb=v[(($b=Yb+-1|0)<<3)+Zb>>3]+Wb,Vb=Vb+1|0,_b=1<(0|Yb),Yb=$b,_b;);Wb=ha(Wb,ac),Wb+=-8*C(.125*Wb),Wb-=0|($b=y(Wb)<2147483648?~~Wb:-2147483648);e:{f:{g:{if(ic=(0|ac)<1){if(ac)break g;_b=q[476+((Xb<<2)+Zb|0)>>2]>>23}else fc=Yb=(Xb<<2)+Zb|0,Yb=(_b=q[Yb+476>>2])-((Vb=_b>>hc)<<hc)|0,$b=Vb+$b|0,_b=(q[fc+476>>2]=Yb)>>kc;if((0|_b)<1)break e;break f}if(_b=2,!(.5<=Wb)){_b=0;break e}}if(Yb=Vb=0,!ec)for(;;){ec=q[(jc=(480+Zb|0)+(Vb<<2)|0)>>2],fc=16777215;i:{j:{if(!Yb){if(!ec)break j;fc=16777216,Yb=1}q[jc>>2]=fc-ec;break i}Yb=0}if((0|Xb)==(0|(Vb=Vb+1|0)))break}ic||1<(Vb=ac+-1|0)>>>0||(q[(Vb=(Xb<<2)+Zb|0)+476>>2]=Vb-1?8388607&q[Vb+476>>2]:4194303&q[Vb+476>>2]),$b=$b+1|0,2==(0|_b)&&(Wb=1-Wb,_b=2,Yb&&(Wb-=ha(1,ac)))}if(0!=Wb)break;if(!(((Yb=0)|(Vb=Xb))<=(0|bc))){for(;Yb=q[(480+Zb|0)+((Vb=Vb+-1|0)<<2)>>2]|Yb,(0|bc)<(0|Vb););if(Yb){for(cc=ac;cc=cc+-24|0,!q[(480+Zb|0)+((Xb=Xb+-1|0)<<2)>>2];);break a}}for(Vb=1;Vb=(Yb=Vb)+1|0,!q[(480+Zb|0)+(bc-Yb<<2)>>2];);for(Yb=Xb+Yb|0;;){for(Xb=$b=Xb+1|0,v[(320+Zb|0)+($b<<3)>>3]=q[3248+(gc+Xb<<2)>>2],Wb=Vb=0;Wb+=v[(Vb<<3)+a>>3]*v[(320+Zb|0)+($b-Vb<<3)>>3],1!=(0|(Vb=Vb+1|0)););if(v[(Xb<<3)+Zb>>3]=Wb,!((0|Xb)<(0|Yb)))break}Xb=Yb}16777216<=(Wb=ha(Wb,0-ac|0))?(a=(480+Zb|0)+(Xb<<2)|0,dc=Wb,Vb=y(Wb*=5.960464477539063e-8)<2147483648?~~Wb:-2147483648,Yb=y(Wb=dc+-16777216*(0|Vb))<2147483648?~~Wb:-2147483648,q[a>>2]=Yb,Xb=Xb+1|0):(Vb=y(Wb)<2147483648?~~Wb:-2147483648,cc=ac),q[(480+Zb|0)+(Xb<<2)>>2]=Vb}if(Wb=ha(1,cc),!((0|Xb)<=-1)){for(Vb=Xb;v[(Vb<<3)+Zb>>3]=Wb*q[(480+Zb|0)+(Vb<<2)>>2],Wb*=5.960464477539063e-8,a=0<(0|Vb),Vb=Vb+-1|0,a;);if(!((0|Xb)<=-1))for(Vb=Xb;;){for(Yb=Xb-(a=Vb)|0,Vb=Wb=0;Wb+=v[6016+(Vb<<3)>>3]*v[(a+Vb<<3)+Zb>>3],!((0|bc)<=(0|Vb))&&(ac=Vb>>>0<Yb>>>0,Vb=Vb+1|0,ac););if(v[(160+Zb|0)+(Yb<<3)>>3]=Wb,Vb=a+-1|0,!(0<(0|a)))break}}if((Wb=0)<=(0|Xb))for(;Wb+=v[(160+Zb|0)+(Xb<<3)>>3],a=0<(0|Xb),Xb=Xb+-1|0,a;);return v[Ub>>3]=_b?-Wb:Wb,L=560+Zb|0,7&$b}function Ea(a,Ub,Vb,lc){var oc,qc,rc,mc=0,nc=0,pc=0;L=oc=L-32|0,mc=(qc=mc=2147483647&lc)+-1006698496|0,(nc=pc=Vb)>>>0<0&&(mc=mc+1|0),rc=nc,nc=mc,mc=qc+-1140785152|0,pc>>>0<0&&(mc=mc+1|0);a:if((0|mc)==(0|nc)&rc>>>0<pc>>>0|nc>>>0<mc>>>0){if(mc=lc<<4|Vb>>>28,Vb=Vb<<4|Ub>>>28,134217728==(0|(pc=Ub&=268435455))&1<=a>>>0|134217728<Ub>>>0){mc=mc+1073741824|0,(a=Vb+1|0)>>>0<1&&(mc=mc+1|0),nc=a;break a}if(mc=mc-(((nc=Vb)>>>0<0)+-1073741824|0)|0,a|134217728^pc)break a;(a=nc+(1&nc)|0)>>>0<nc>>>0&&(mc=mc+1|0),nc=a}else(!pc&2147418112==(0|qc)?!(a|Ub):2147418112==(0|qc)&pc>>>0<0|qc>>>0<2147418112)?(mc=2146435072,1140785151==((nc=0)|qc)&4294967295<pc>>>0|1140785151<qc>>>0||(pc=qc>>>16)>>>(mc=0)<15249||(function(a,Ub,Vb,lc,tc,uc){var zc=0,Ac=0,Bc=0,Cc=0;a:if(64&uc)Ub=31&(Vb=uc+-64|0),Ub=32<=(63&Vb)>>>0?(Vb=0,tc>>>Ub):(Vb=tc>>>Ub,((1<<Ub)-1&tc)<<32-Ub|lc>>>Ub),tc=lc=0;else{if(!uc)break a;Ac=tc,Bc=lc,zc=31&(Cc=64-uc|0),Cc=32<=(63&Cc)>>>0?(Ac=Bc<<zc,0):(Ac=(1<<zc)-1&Bc>>>32-zc|Ac<<zc,Bc<<zc),Bc=Ub,Ub=31&(zc=uc),Ub=32<=(63&zc)>>>0?(zc=0,Vb>>>Ub):(zc=Vb>>>Ub,((1<<Ub)-1&Vb)<<32-Ub|Bc>>>Ub),Ub|=Cc,Vb=zc|Ac,zc=lc,lc=31&uc,lc=32<=(63&uc)>>>0?(Ac=0,tc>>>lc):(Ac=tc>>>lc,((1<<lc)-1&tc)<<32-lc|zc>>>lc),tc=Ac}q[a>>2]=Ub,q[a+4>>2]=Vb,q[a+8>>2]=lc,q[a+12>>2]=tc}(oc,a,Ub,Vb,mc=65535&lc|65536,15361-pc|0),function(a,Ub,Vb,lc,tc,uc){var vc=0,wc=0,xc=0,yc=0;64&uc?(lc=Ub,Ub=31&(tc=uc+-64|0),32<=(63&tc)>>>0?(tc=lc<<Ub,lc=0):(tc=(1<<Ub)-1&lc>>>32-Ub|Vb<<Ub,lc<<=Ub),Vb=Ub=0):uc&&(vc=lc,lc=31&(xc=uc),yc=32<=(63&uc)>>>0?(wc=vc<<lc,0):(wc=(1<<lc)-1&vc>>>32-lc|tc<<lc,vc<<lc),lc=Vb,vc=Ub,tc=31&(uc=64-uc|0),32<=(63&uc)>>>0?(uc=0,lc>>>=tc):(uc=lc>>>tc,lc=((1<<tc)-1&lc)<<32-tc|vc>>>tc),lc|=yc,tc=uc|wc,uc=Ub,Ub=31&xc,Ub=32<=(63&xc)>>>0?(wc=uc<<Ub,0):(wc=(1<<Ub)-1&uc>>>32-Ub|Vb<<Ub,uc<<Ub),Vb=wc);q[a>>2]=Ub,q[a+4>>2]=Vb,q[a+8>>2]=lc,q[a+12>>2]=tc}(16+oc|0,a,Ub,Vb,mc,pc+-15233|0),Vb=q[4+oc>>2],a=q[8+oc>>2],mc=q[12+oc>>2]<<4|a>>>28,nc=a<<4|Vb>>>28,134217728==(0|(Vb=a=268435455&Vb))&1<=(Ub=q[oc>>2]|(0!=(q[16+oc>>2]|q[24+oc>>2])|0!=(q[20+oc>>2]|q[28+oc>>2])))>>>0|134217728<a>>>0?((a=nc+1|0)>>>0<1&&(mc=mc+1|0),nc=a):Ub|134217728^Vb||((a=nc+(1&nc)|0)>>>0<nc>>>0&&(mc=mc+1|0),nc=a))):(nc=Vb<<4|Ub>>>28,mc=524287&(mc=lc<<4|Vb>>>28)|2146959360);return L=32+oc|0,f(0,0|nc),f(1,-2147483648&lc|mc),+g()}function Ia(a,Ub){var Vb=0,lc=0,tc=0;Vb=0!=(0|Ub);a:{b:{c:{d:if(!(!Ub|!(3&a)))for(;;){if(!r[0|a])break c;if(a=a+1|0,Vb=0!=(0|(Ub=Ub+-1|0)),!Ub)break d;if(!(3&a))break}if(!Vb)break b}if(!r[0|a])break a;e:{if(4<=Ub>>>0){for(Vb=(Vb=Ub+-4|0)-(lc=-4&Vb)|0,lc=4+(a+lc|0)|0;;){if((-1^(tc=q[a>>2]))&tc+-16843009&-2139062144)break e;if(a=a+4|0,!(3<(Ub=Ub+-4|0)>>>0))break}Ub=Vb,a=lc}if(!Ub)break b}for(;;){if(!r[0|a])break a;if(a=a+1|0,!(Ub=Ub+-1|0))break}}return 0}return a}function Na(a,Ub,Fc,Gc){if(a|Ub)for(;o[0|(Fc=Fc+-1|0)]=r[3168+(15&a)|0]|Gc,(a=(15&Ub)<<28|a>>>4)|(Ub>>>=4););return Fc}function Oa(a,Ub,Fc){if(a|Ub)for(;o[0|(Fc=Fc+-1|0)]=7&a|48,(a=(7&Ub)<<29|a>>>3)|(Ub>>>=3););return Fc}function ab(a){var sd;q[(L=sd=L-16|0)>>2]=a,function(a,Fc){var gd;ra(a,1176,q[12+(L=gd=L-16|0)>>2]=Fc,0,0),L=16+gd|0}(q[670],sd),L=16+sd|0}function jb(a){var Ve,qe=0,re=0,Je=0,We=0,Xe=0,Ye=0,Ze=0,_e=0,$e=0,af=0;if(q[24+(L=Ve=L-32|0)>>2]=0,q[16+Ve>>2]=4,function(a){var td;sa(16+(L=td=L-272|0)|0,1611,q[12+td>>2]=a),ab(16+td|0),L=272+td|0}(16+Ve|(q[20+Ve>>2]=0)),ma(a))Y(4,1183,0),a=0;else if(4<=(re=r[a+4|0])>>>0)q[4+Ve>>2]=re,q[Ve>>2]=3,Y(4,1332,Ve),a=0;else{for(1!=(0|(We=!r[a+5|0]))&&(ca(a+4|0,1),X(a- -64|0,4,160),o[a+5|0]=0),qe=a- -64|0,Je=102,re=a+704|0;q[re>>2]=q[qe>>2]+a,re=re+4|0,qe=qe+4|0,Je=Je+-1|0;);if(1!=(0|We)&&(re=r[a+4|0],X(q[a+704>>2],4,32),ca(q[a+708>>2],4),ca(q[a+708>>2]+4|0,4),ca(q[a+708>>2]+8|0,4),ca(q[a+708>>2]+12|0,4),ca(q[a+708>>2]+16|0,4),ca(q[a+708>>2]+20|0,1),X(q[a+720>>2],4,q[q[a+704>>2]>>2]),X(q[a+724>>2],4,q[q[a+704>>2]>>2]),X(q[a+728>>2],4,q[q[a+704>>2]>>2]),X(q[a+732>>2],4,q[q[a+704>>2]>>2]),X(q[a+736>>2],4,q[q[a+704>>2]>>2]),X(q[a+740>>2],4,q[q[a+704>>2]>>2]),X(q[a+752>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+756>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+760>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+764>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+768>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+772>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+776>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+780>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+784>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+788>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+792>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+796>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+800>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+804>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+808>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+812>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+816>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+840>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+844>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+848>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+852>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+856>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+860>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+864>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+868>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+872>>2],1,q[q[a+704>>2]+16>>2]),X(q[a+876>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+880>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+884>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+888>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+892>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+896>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+908>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+912>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+916>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+920>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+924>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+928>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+932>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+936>>2],4,q[q[a+704>>2]+24>>2]),X(q[a+940>>2],4,q[q[a+704>>2]+28>>2]),X(q[a+944>>2],4,q[q[a+704>>2]+28>>2]),X(q[a+948>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+952>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+956>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+960>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+964>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+968>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+972>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+976>>2],4,q[q[a+704>>2]+36>>2]),X(q[a+980>>2],4,q[q[a+704>>2]+36>>2]),X(q[a+984>>2],4,q[q[a+704>>2]+36>>2]),X(q[a+988>>2],4,q[q[a+704>>2]+40>>2]),X(q[a+992>>2],4,q[q[a+704>>2]+44>>2]),X(q[a+996>>2],4,q[q[a+704>>2]+48>>2]),X(q[a+1e3>>2],4,q[q[a+704>>2]+48>>2]),X(q[a+1004>>2],4,q[q[a+704>>2]+52>>2]),X(q[a+1008>>2],4,q[q[a+704>>2]+52>>2]),X(q[a+1012>>2],4,q[q[a+704>>2]+56>>2]),X(q[a+1016>>2],4,q[q[a+704>>2]+60>>2]),X(q[a+1020>>2],2,q[q[a+704>>2]+64>>2]),X(q[a+1024>>2],4,q[q[a+704>>2]+68>>2]),X(q[a+1028>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1032>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1036>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1040>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1044>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1048>>2],4,q[q[a+704>>2]+76>>2]),X(q[a+1052>>2],4,q[q[a+704>>2]+76>>2]),X(q[a+1056>>2],4,q[q[a+704>>2]+76>>2]),X(q[a+1068>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1072>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1076>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1080>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1084>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1088>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1092>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1096>>2],4,q[q[a+704>>2]+84>>2]),X(q[a+1100>>2],2,q[q[a+704>>2]+84>>2]),X(q[a+1104>>2],4,q[q[a+704>>2]+88>>2]),re>>>0<2||X(q[a+1108>>2],4,q[q[a+704>>2]+8>>2])),q[1643]=5,q[1642]=6,q[1644]=7,q[1645]=8,q[1646]=9,q[1647]=10,qe=q[a+704>>2],1<=q[qe>>2])for(re=0;q[q[a+712>>2]+(re<<2)>>2]=q[a+716>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe>>2];);if(1<=q[qe+4>>2])for(re=0;q[q[a+744>>2]+(re<<2)>>2]=q[a+748>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+4>>2];);if(1<=q[qe+16>>2])for(re=0;q[(qe=re<<2)+q[a+820>>2]>>2]=q[a+836>>2]+(re<<6),q[qe+q[a+824>>2]>>2]=q[a+1016>>2]+(q[qe+q[a+880>>2]>>2]<<2),q[qe+q[a+828>>2]>>2]=q[a+1020>>2]+(q[qe+q[a+884>>2]>>2]<<1),q[qe+q[a+832>>2]>>2]=q[a+1024>>2]+(q[qe+q[a+892>>2]>>2]<<2),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+16>>2];);if(1<=q[qe+20>>2])for(re=0;q[q[a+900>>2]+(re<<2)>>2]=q[a+904>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+20>>2];);if(1<=q[qe+80>>2])for(re=0;q[q[a+1060>>2]+(re<<2)>>2]=q[a+1064>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+80>>2];);if(!(1&o[q[a+708>>2]+20|0]||(0|(We=q[qe+16>>2]))<1)){for(Ye=q[a+888>>2],Ze=q[a+884>>2],Xe=q[a+1020>>2],re=0;;){if(1<(0|(Je=q[(qe=re<<2)+Ye>>2])))for(_e=Je+-1|0,$e=Xe+(q[qe+Ze>>2]<<1)|0,qe=0;af=s[(Je=(qe<<1)+$e|0)>>1],p[Je>>1]=s[Je+4>>1],p[Je+4>>1]=af,(0|(qe=qe+3|0))<(0|_e););if((0|We)==(0|(re=re+1|0)))break}for(re=q[a+876>>2],Ye=q[a+880>>2],Ze=q[a+1016>>2],Je=0;;){if(1<=(0|(Xe=q[(qe=Je<<2)+re>>2])))for(Xe=(qe=Ze+(q[qe+Ye>>2]<<2)|0)+(Xe<<3)|0,qe=qe+4|0;u[qe>>2]=x(1)-u[qe>>2],(qe=qe+8|0)>>>0<Xe>>>0;);if((0|We)==(0|(Je=Je+1|0)))break}}}return L=32+Ve|0,a}function $b(a){var _h=x(0),fi=x(0),gi=0,hi=0,ii=x(0),ji=x(0),ki=x(0),li=x(0),mi=0,ni=x(0),oi=x(0),pi=0;a:{b:{if(j(a),hi=2147483647&(gi=e(0))){if(!(hi>>>0<2139095041))return x(x(.10000000149011612)+a);if(1065353216==(0|hi))return x(-1<(0|gi)?.10000000149011612:10);if(2139095040==(0|hi))return x(-1<(0|gi)?0:-a);if(1073741824==(0|gi))return x(.010000000707805157);if(1056964608==(0|gi))return x(.3162277638912201);if(1291845633<=hi>>>0)return x((0|gi)<0?H:0);if(ii=u[1537],ji=x(x(1.600000023841858)-ii),ki=x(x(1)/x(ii+x(1.600000023841858))),f(0,-4096&(j(fi=x(ji*ki)),e(0))),_h=k(),li=x(_h*_h),oi=u[1541],ii=x(ki*x(x(ji-x((ni=_h)*x(3.099609375)))-x(_h*x(x(1.600000023841858)-x(x(3.099609375)-ii))))),ki=x(x(fi+_h)*ii),_h=x(fi*fi),ji=x(ki+x(x(_h*_h)*x(x(_h*x(x(_h*x(x(_h*x(x(_h*x(x(_h*x(.20697501301765442))+x(.23066075146198273)))+x(.2727281153202057)))+x(.3333333432674408)))+x(.4285714328289032)))+x(.6000000238418579)))),f(0,-4096&(j(x(x(li+x(3))+ji)),e(0))),_h=k(),ki=x(ni*_h),fi=x(x(ii*_h)+x(fi*x(ji-x(x(_h+x(-3))-li)))),f(0,-4096&(j(x(ki+fi)),e(0))),_h=k(),ii=x(_h*x(.9619140625)),li=x(u[1539]+x(x(x(fi-x(_h-ki))*x(.9617967009544373))+x(_h*x(-.00011736857413779944)))),f(0,-4096&(j(x(x(oi+x(ii+li))+x(-4))),e(0))),fi=k(),f(0,-4096&gi),ji=k(),_h=x(fi*ji),a=x(x(x(li-x(x(x(fi-x(-4))-oi)-ii))*a)+x(x(a-ji)*fi)),j(fi=x(_h+a)),1124073473<=(0|(gi=e(0))))break b;d:{e:{if((hi=1124073472)==(0|gi)){if(!(x(a+x(4.299566569443414e-8))>x(fi-_h)))break e;break b}if(hi=2147483647&gi,!(a<=x(fi-_h)^1|-1021968384!=(0|gi))|1125515265<=hi>>>0)break a;if(hi>>>0<1056964609)break d}mi=(8388607&(hi=(8388608>>>(hi>>>23)-126)+gi|0)|8388608)>>>150-(pi=hi>>>23&255),mi=(0|gi)<0?0-mi|0:mi,_h=x(_h-(f(0,hi&-8388608>>pi+-127),k())),j(x(a+_h)),gi=e(0)}f(0,-32768&gi),fi=k(),ii=x(fi*x(.693145751953125)),fi=x(x(fi*x(14286065379565116e-22))+x(x(a-x(fi-_h))*x(.6931471824645996))),a=x(ii+fi),_h=x(a*a),_h=x(a-x(_h*x(x(_h*x(x(_h*x(x(_h*x(x(_h*x(4.138136944220605e-8))+x(-16533901998627698e-22)))+x(661375597701408e-19)))+x(-.0027777778450399637)))+x(.1666666716337204)))),ni=x(x(a*_h)/x(_h+x(-2))),_h=x(fi-x(a-ii)),a=(0|(gi=0|(j(a=x(x(a-x(ni-x(_h+x(a*_h))))+x(1))),e(0)+(mi<<23))))<=8388607?function(a,qi){a:if(128<=(0|qi)){if(a=x(a*x(17014118346046923e22)),(0|qi)<255){qi=qi+-127|0;break a}a=x(a*x(17014118346046923e22)),qi=((0|qi)<381?qi:381)+-254|0}else-127<(0|qi)||(a=x(a*x(11754943508222875e-54)),qi=-253<(0|qi)?qi+126|0:(a=x(a*x(11754943508222875e-54)),(-378<(0|qi)?qi:-378)+252|0));return x(a*(f(0,1065353216+(qi<<23)|0),k()))}(a,mi):(f(0,gi),k()),a=x(x(1)*a)}else a=x(1);return a}return x(H)}return x(0)}function dc(a,qi){var low,high;low=0|a,high=0|qi,b[0]=low,b[1]=high}function gc(a,qi,si){return function(a,qi,si){var ui,vi,wi,xi,ti=0;return xi=w(ui=si>>>16,ti=a>>>16),a=(65535&(ti=((wi=w(vi=65535&si,a&=65535))>>>16)+w(ti,vi)|0))+w(a,ui)|0,M=((xi+w(qi,si)|0)+(ti>>>16)|0)+(a>>>16)|0,65535&wi|a<<16}(a,qi,si)}function hc(a,qi,si){return function(a,qi,si){var yi=0,zi=0,Ai=0,Bi=0,Ci=0,Di=0,Ei=0,Fi=0,Gi=0;a:{b:{c:{d:{e:{f:{g:{h:{i:{if(zi=qi){if(!(yi=si))break i;break h}return dc((qi=a)-w(a=(a>>>0)/(si>>>0)|0,si)|0,0),M=0,a}if(!a)break g;break f}if(!((Bi=yi+-1|0)&yi))break e;Ci=0-(Bi=(z(yi)+33|0)-z(zi)|0)|0;break c}return dc(0,zi-w(a=(zi>>>0)/0|0,0)|0),M=0,a}if((yi=32-z(zi)|0)>>>0<31)break d;break b}if(dc(a&Bi,0),1==(0|yi))break a;return si=31&(yi=yi?31-z(yi+-1^yi)|0:32),a=32<=(63&yi)>>>0?(zi=0,qi>>>si):(zi=qi>>>si,((1<<si)-1&qi)<<32-si|a>>>si),M=zi,a}Bi=yi+1|0,Ci=63-yi|0}if(yi=qi,Ai=31&(zi=63&Bi),Ai=32<=zi>>>0?(zi=0,yi>>>Ai):(zi=yi>>>Ai,((1<<Ai)-1&yi)<<32-Ai|a>>>Ai),yi=31&(Ci&=63),32<=Ci>>>0?(qi=a<<yi,a=0):(qi=(1<<yi)-1&a>>>32-yi|qi<<yi,a<<=yi),Bi)for((Ci=si+(yi=-1)|0)>>>0<4294967295&&(yi=0);Ai=(Ei=Di=Ai<<1|qi>>>31)-(Fi=si&(Di=yi-((zi=zi<<1|Ai>>>31)+(Ci>>>0<Di>>>0)|0)>>31))|0,zi=zi-(Ei>>>0<Fi>>>0)|0,qi=qi<<1|a>>>31,a=Gi|a<<1,Gi=Di&=1,Bi=Bi+-1|0;);return dc(Ai,zi),M=qi<<1|a>>>31,Di|a<<1}dc(a,qi),qi=a=0}return M=qi,a}(a,qi,si)}function jc(a){var Hi;return(-1>>>(Hi=31&a)&-2)<<Hi|(-1<<(a=0-a&31)&-2)>>>a}function N(){return buffer.byteLength/65536|0}}(H,I,J)}}l=null,b.wasmBinary&&(F=b.wasmBinary);var fa=Error,WebAssembly={};F=[],"object"!=typeof WebAssembly&&E("no native wasm support detected");var I,J=new function(a){var c=Array(17);return c.grow=function(){18<=c.length&&B("Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."),c.push(null)},c.set=function(a,e){c[a]=e},c.get=function(a){return c[a]},c}({initial:17,maximum:18,element:"anyfunc"}),K=!1;function assert(a,c){a||B("Assertion failed: "+c)}var buffer,M,L,N,ia="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function ja(a,c,d){var e=c+d;for(d=c;a[d]&&!(e<=d);)++d;if(16<d-c&&a.subarray&&ia)return ia.decode(a.subarray(c,d));for(e="";c<d;){var f=a[c++];if(128&f){var g=63&a[c++];if(192==(224&f))e+=String.fromCharCode((31&f)<<6|g);else{var m=63&a[c++];(f=224==(240&f)?(15&f)<<12|g<<6|m:(7&f)<<18|g<<12|m<<6|63&a[c++])<65536?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else e+=String.fromCharCode(f)}return e}function ka(a,c){return a?ja(L,a,c):""}function la(a){return 0<a%65536&&(a+=65536-a%65536),a}function ma(a){buffer=a,b.HEAP8=M=new Int8Array(a),b.HEAP16=new Int16Array(a),b.HEAP32=N=new Int32Array(a),b.HEAPU8=L=new Uint8Array(a),b.HEAPU16=new Uint16Array(a),b.HEAPU32=new Uint32Array(a),b.HEAPF32=new Float32Array(a),b.HEAPF64=new Float64Array(a)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var G=b.TOTAL_MEMORY||16777216;function O(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.b;"number"==typeof d?void 0===c.a?b.dynCall_v(d):b.dynCall_vi(d,c.a):d(void 0===c.a?null:c.a)}}}(I=b.wasmMemory?b.wasmMemory:new function(){return{buffer:new ArrayBuffer(G/65536*65536),grow:function(a){return ca(a)}}})&&(buffer=I.buffer),G=buffer.byteLength,ma(buffer),N[2052]=5251248;var na=[],oa=[],pa=[],qa=[];function ra(){var a=b.preRun.shift();na.unshift(a)}if(Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,c){var d=65535&a,e=65535&c;return d*e+((a>>>16)*e+d*(c>>>16)<<16)|0}),!Math.fround){var sa=new Float32Array(1);Math.fround=function(a){return sa[0]=a,sa[0]}}Math.clz32||(Math.clz32=function(a){var c=32,d=a>>16;return d&&(c-=16,a=d),(d=a>>8)&&(c-=8,a=d),(d=a>>4)&&(c-=4,a=d),(d=a>>2)&&(c-=2,a=d),a>>1?c-2:c-a}),Math.trunc||(Math.trunc=function(a){return a<0?Math.ceil(a):Math.floor(a)});var P=0,Q=null,U=null;function B(a){throw b.onAbort&&b.onAbort(a),D(a),E(a),K=!0,new fa("abort("+a+"). Build with -s ASSERTIONS=1 for more info.")}b.preloadedImages={},b.preloadedAudios={};var V="data:application/octet-stream;base64,";function W(a){return String.prototype.startsWith?a.startsWith(V):0===a.indexOf(V)}var X="_em_module.wasm";if(!W(X)){var ta=X;X=b.locateFile?b.locateFile(ta,u):u+ta}function ua(){try{if(F)return new Uint8Array(F);var a=z(X);if(a)return a;if(w)return w(X);throw"both async and sync fetching of the wasm failed"}catch(c){B(c)}}oa.push({b:function(){wa()}});var xa=[null,[],[]],ya=!1;function C(a){for(var c=[],d=0;d<a.length;d++){var e=a[d];255<e&&(ya&&assert(!1,"Character code "+e+" ("+String.fromCharCode(e)+")  at offset "+d+" not in 0x00-0xFF."),e&=255),c.push(String.fromCharCode(e))}return c.join("")}var za="function"==typeof atob?atob:function(a){var c="",d=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));e=e<<2|f>>4,f=(15&f)<<4|g>>2;var h=(3&g)<<6|m;c+=String.fromCharCode(e),64!==g&&(c+=String.fromCharCode(f)),64!==m&&(c+=String.fromCharCode(h))}while(d<a.length);return c};function z(a){if(W(a)){if(a=a.slice(V.length),"boolean"==typeof r&&r){try{var c=Buffer.from(a,"base64")}catch(g){c=new Buffer(a,"base64")}var d=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}else try{var e=za(a),f=new Uint8Array(e.length);for(c=0;c<e.length;++c)f[c]=e.charCodeAt(c);d=f}catch(g){throw Error("Converting base64 string to bytes failed.")}return d}}var H={emscripten_memcpy_big:function(a,c,d){L.set(L.subarray(c,c+d),a)},emscripten_resize_heap:function(a){if(2147418112<a)return!1;for(var c=Math.max(M.length,16777216);c<a;)c=c<=536870912?la(2*c):Math.min(la((3*c+2147483648)/4),2147418112);a:{try{I.grow(c-buffer.byteLength+65535>>16),ma(I.buffer);var d=1;break a}catch(e){}d=void 0}return!!d},fd_write:function(a,c,d,e){try{for(var f=0,g=0;g<d;g++){for(var m=N[c+8*g>>2],h=N[c+(8*g+4)>>2],A=0;A<h;A++){var R=L[m+A],S=xa[a];0===R||10===R?((1===a?D:E)(ja(S,0)),S.length=0):S.push(R)}f+=h}return N[e>>2]=f,0}catch(T){return"undefined"!=typeof FS&&T instanceof FS.c||B(T),T.f}},memory:I,table:J},Aa=function(){function a(a){b.asm=a.exports,P--,b.monitorRunDependencies&&b.monitorRunDependencies(P),0==P&&(null!==Q&&(clearInterval(Q),Q=null),U&&(a=U,U=null,a()))}function c(c){a(c.instance)}function d(a){return(F||!p&&!q||"function"!=typeof fetch?new Promise(function(a){a(ua())}):fetch(X,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+X+"'";return a.arrayBuffer()}).catch(function(){return ua()})).then(function(){return{then:function(a){a({instance:new da})}}}).then(a,function(a){E("failed to asynchronously prepare wasm: "+a),B(a)})}var e={env:H,wasi_snapshot_preview1:H};if(P++,b.monitorRunDependencies&&b.monitorRunDependencies(P),b.instantiateWasm)try{return b.instantiateWasm(e,a)}catch(f){return E("Module.instantiateWasm callback failed with error: "+f),!1}return function(){if(F||"function"!=typeof WebAssembly.instantiateStreaming||W(X)||"function"!=typeof fetch)return d(c);fetch(X,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){E("wasm streaming compile failed: "+a),E("falling back to ArrayBuffer instantiation"),d(c)})})}(),{}}();b.asm=Aa;var wa=b.___wasm_call_ctors=function(){return b.asm.__wasm_call_ctors.apply(null,arguments)};b._csmGetVersion=function(){return b.asm.csmGetVersion.apply(null,arguments)},b._csmGetLatestMocVersion=function(){return b.asm.csmGetLatestMocVersion.apply(null,arguments)},b._csmGetMocVersion=function(){return b.asm.csmGetMocVersion.apply(null,arguments)},b._csmSetLogFunction=function(){return b.asm.csmSetLogFunction.apply(null,arguments)},b._csmReviveMocInPlace=function(){return b.asm.csmReviveMocInPlace.apply(null,arguments)},b._csmReadCanvasInfo=function(){return b.asm.csmReadCanvasInfo.apply(null,arguments)},b._csmGetSizeofModel=function(){return b.asm.csmGetSizeofModel.apply(null,arguments)},b._csmInitializeModelInPlace=function(){return b.asm.csmInitializeModelInPlace.apply(null,arguments)},b._csmUpdateModel=function(){return b.asm.csmUpdateModel.apply(null,arguments)},b._csmGetParameterCount=function(){return b.asm.csmGetParameterCount.apply(null,arguments)},b._csmGetParameterIds=function(){return b.asm.csmGetParameterIds.apply(null,arguments)},b._csmGetParameterMinimumValues=function(){return b.asm.csmGetParameterMinimumValues.apply(null,arguments)},b._csmGetParameterMaximumValues=function(){return b.asm.csmGetParameterMaximumValues.apply(null,arguments)},b._csmGetParameterDefaultValues=function(){return b.asm.csmGetParameterDefaultValues.apply(null,arguments)},b._csmGetParameterValues=function(){return b.asm.csmGetParameterValues.apply(null,arguments)},b._csmGetPartCount=function(){return b.asm.csmGetPartCount.apply(null,arguments)},b._csmGetPartIds=function(){return b.asm.csmGetPartIds.apply(null,arguments)},b._csmGetPartOpacities=function(){return b.asm.csmGetPartOpacities.apply(null,arguments)},b._csmGetPartParentPartIndices=function(){return b.asm.csmGetPartParentPartIndices.apply(null,arguments)},b._csmGetDrawableCount=function(){return b.asm.csmGetDrawableCount.apply(null,arguments)},b._csmGetDrawableIds=function(){return b.asm.csmGetDrawableIds.apply(null,arguments)},b._csmGetDrawableConstantFlags=function(){return b.asm.csmGetDrawableConstantFlags.apply(null,arguments)},b._csmGetDrawableDynamicFlags=function(){return b.asm.csmGetDrawableDynamicFlags.apply(null,arguments)},b._csmGetDrawableTextureIndices=function(){return b.asm.csmGetDrawableTextureIndices.apply(null,arguments)},b._csmGetDrawableDrawOrders=function(){return b.asm.csmGetDrawableDrawOrders.apply(null,arguments)},b._csmGetDrawableRenderOrders=function(){return b.asm.csmGetDrawableRenderOrders.apply(null,arguments)},b._csmGetDrawableOpacities=function(){return b.asm.csmGetDrawableOpacities.apply(null,arguments)},b._csmGetDrawableMaskCounts=function(){return b.asm.csmGetDrawableMaskCounts.apply(null,arguments)},b._csmGetDrawableMasks=function(){return b.asm.csmGetDrawableMasks.apply(null,arguments)},b._csmGetDrawableVertexCounts=function(){return b.asm.csmGetDrawableVertexCounts.apply(null,arguments)},b._csmGetDrawableVertexPositions=function(){return b.asm.csmGetDrawableVertexPositions.apply(null,arguments)},b._csmGetDrawableVertexUvs=function(){return b.asm.csmGetDrawableVertexUvs.apply(null,arguments)},b._csmGetDrawableIndexCounts=function(){return b.asm.csmGetDrawableIndexCounts.apply(null,arguments)},b._csmGetDrawableIndices=function(){return b.asm.csmGetDrawableIndices.apply(null,arguments)},b._csmResetDrawableDynamicFlags=function(){return b.asm.csmResetDrawableDynamicFlags.apply(null,arguments)},b._csmMallocMoc=function(){return b.asm.csmMallocMoc.apply(null,arguments)},b._csmMallocModelAndInitialize=function(){return b.asm.csmMallocModelAndInitialize.apply(null,arguments)},b._csmMalloc=function(){return b.asm.csmMalloc.apply(null,arguments)},b._csmFree=function(){return b.asm.csmFree.apply(null,arguments)};var Y,Ba=b.stackSave=function(){return b.asm.stackSave.apply(null,arguments)},Ca=b.stackAlloc=function(){return b.asm.stackAlloc.apply(null,arguments)},Da=b.stackRestore=function(){return b.asm.stackRestore.apply(null,arguments)},ca=b.__growWasmMemory=function(){return b.asm.__growWasmMemory.apply(null,arguments)};function Z(){function a(){if(!Y&&(Y=!0,!K)){if(O(oa),O(pa),b.onRuntimeInitialized&&b.onRuntimeInitialized(),b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();qa.unshift(a)}O(qa)}}if(!(0<P)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ra();O(na),0<P||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1),a()},1)):a())}}if(b.dynCall_vi=function(){return b.asm.dynCall_vi.apply(null,arguments)},b.asm=Aa,b.ccall=function(a,c,d,e){var f={string:function(a){var c=0;if(null!=a&&0!==a){var d=1+(a.length<<2),e=c=Ca(d),f=L;if(0<d){d=e+d-1;for(var g=0;g<a.length;++g){var k=a.charCodeAt(g);if(55296<=k&&k<=57343)k=65536+((1023&k)<<10)|1023&a.charCodeAt(++g);if(k<=127){if(d<=e)break;f[e++]=k}else{if(k<=2047){if(d<=e+1)break;f[e++]=192|k>>6}else{if(k<=65535){if(d<=e+2)break;f[e++]=224|k>>12}else{if(d<=e+3)break;f[e++]=240|k>>18,f[e++]=128|k>>12&63}f[e++]=128|k>>6&63}f[e++]=128|63&k}}f[e]=0}}return c},array:function(a){var c=Ca(a.length);return M.set(a,c),c}},g=function(a){var c=b["_"+a];return assert(c,"Cannot call unknown function "+a+", make sure it is exported"),c}(a),m=[];if(a=0,e)for(var h=0;h<e.length;h++){var A=f[d[h]];A?(0===a&&(a=Ba()),m[h]=A(e[h])):m[h]=e[h]}return d=function(a){return"string"===c?ka(a):"boolean"===c?!!a:a}(d=g.apply(null,m)),0!==a&&Da(a),d},b.UTF8ToString=ka,b.addFunction=function(a,c){var d=J.length;try{J.grow(1)}catch(e){if(!e instanceof RangeError)throw e;throw"Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."}try{J.set(d,a)}catch(e){if(!e instanceof TypeError)throw e;assert(void 0!==c,"Missing signature argument to addFunction"),J.set(d,a)}return d},b.then=function(a){if(Y)a(b);else{var c=b.onRuntimeInitialized;b.onRuntimeInitialized=function(){c&&c(),a(b)}}return b},U=function Ea(){Y||Z(),Y||(U=Ea)},b.run=Z,b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();return Z(),_em_module}}();"object"==typeof exports&&"object"==typeof module?module.exports=_em_module:"function"==typeof define&&define.amd?define([],function(){return _em_module}):"object"==typeof exports&&(_em_module=_em_module);var _em = _em_module();
	})(Live2DCubismCore || (Live2DCubismCore = {}));
	
	var Live2DCubismFramework = {};
	(function (Live2DCubismFramework) {
		var csmVector = /** @class */ (function () {
			function csmVector(initialCapacity) {
				if (initialCapacity === void 0) { initialCapacity = 0; }
				if (initialCapacity < 1) {
					this._ptr = [];
					this._capacity = 0;
					this._size = 0;
				}
				else {
					this._ptr = new Array(initialCapacity);
					this._capacity = initialCapacity;
					this._size = 0;
				}
			}
			csmVector.prototype.at = function (index) {
				return this._ptr[index];
			};
			csmVector.prototype.set = function (index, value) {
				this._ptr[index] = value;
			};
			csmVector.prototype.get = function (offset) {
				if (offset === void 0) { offset = 0; }
				var ret = new Array();
				for (var i = offset; i < this._size; i++) {
					ret.push(this._ptr[i]);
				}
				return ret;
			};
			csmVector.prototype.pushBack = function (value) {
				if (this._size >= this._capacity) {
					this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
				}
				this._ptr[this._size++] = value;
			};
			csmVector.prototype.pushBlankSpace = function (value) {
				if(this._capacity == 0){return this.pushBack(value)}
				let findBlank = false;
				for(let i = 0, n = this._ptr.length; i < n; i++){
					if(!this._ptr[i] && !findBlank){
						this._ptr[i] = value;
						findBlank = true;
					}
					if(this._ptr[i]){this._size = i+1}
				}
				if(!findBlank){this.pushBack(value)}
			};
			csmVector.prototype.deletePtr = function (index) {
				this._ptr[index] = null;
			};
			csmVector.prototype.clear = function () {
				this._ptr.length = 0;
				this._size = 0;
			};
			csmVector.prototype.getSize = function () {
				return this._size;
			};
			csmVector.prototype.assign = function (newSize, value) {
				var curSize = this._size;
				if (curSize < newSize) {
					this.prepareCapacity(newSize);
				}
				for (var i = 0; i < newSize; i++) {
					this._ptr[i] = value;
				}
				this._size = newSize;
			};
			csmVector.prototype.resize = function (newSize, value) {
				if (value === void 0) { value = null; }
				this.updateSize(newSize, value, true);
			};
			csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
				if (value === void 0) { value = null; }
				if (callPlacementNew === void 0) { callPlacementNew = true; }
				var curSize = this._size;
				if (curSize < newSize) {
					this.prepareCapacity(newSize);
					if (callPlacementNew) {
						for (var i = this._size; i < newSize; i++) {
							if (typeof value == 'function') {
								this._ptr[i] = JSON.parse(JSON.stringify(new value()));
							} 
							else {
								this._ptr[i] = value;
							}
						}
					}
					else {
						for (var i = this._size; i < newSize; i++) {
							this._ptr[i] = value;
						}
					}
				}
				else {
					var sub = this._size - newSize;
					this._ptr.splice(this._size - sub, sub);
				}
				this._size = newSize;
			};
			csmVector.prototype.insert = function (position, begin, end) {
				var dstSi = position._index;
				var srcSi = begin._index;
				var srcEi = end._index;
				var addCount = srcEi - srcSi;
				this.prepareCapacity(this._size + addCount);
				var addSize = this._size - dstSi;
				if (addSize > 0) {
					for (var i = 0; i < addSize; i++) {
						this._ptr.splice(dstSi + i, 0, null);
					}
				}
				for (var i = srcSi; i < srcEi; i++, dstSi++) {
					this._ptr[dstSi] = begin._vector._ptr[i];
				}
				this._size = this._size + addCount;
			};
			csmVector.prototype.remove = function (index) {
				if (index < 0 || this._size <= index) {
					return false;
				}
				this._ptr.splice(index, 1);
				--this._size;
				return true;
			};
			csmVector.prototype.erase = function (ite) {
				var index = ite._index;
				if (index < 0 || this._size <= index) {
					return ite;
				}
				this._ptr.splice(index, 1);
				--this._size;
				var ite2 = new iterator(this, index);
				return ite2;
			};
			csmVector.prototype.prepareCapacity = function (newSize) {
				if (newSize > this._capacity) {
					if (this._capacity == 0) {
						this._ptr = new Array(newSize);
						this._capacity = newSize;
					}
					else {
						this._ptr.length = newSize;
						this._capacity = newSize;
					}
				}
			};
			csmVector.prototype.begin = function () {
				var ite = this._size == 0 ? this.end() : new iterator(this, 0);
				return ite;
			};
			csmVector.prototype.end = function () {
				var ite = new iterator(this, this._size);
				return ite;
			};
			csmVector.prototype.getOffset = function (offset) {
				var newVector = new csmVector();
				newVector._ptr = this.get(offset);
				newVector._size = this.get(offset).length;
				newVector._capacity = this.get(offset).length;
				return newVector;
			};
			csmVector.s_defaultSize = 10;
			return csmVector;
		}());
		Live2DCubismFramework.csmVector = csmVector;
		var iterator = /** @class */ (function () {
			function iterator(v, index) {
				this._vector = v != undefined ? v : null;
				this._index = index != undefined ? index : 0;
			}
			iterator.prototype.set = function (ite) {
				this._index = ite._index;
				this._vector = ite._vector;
				return this;
			};
			iterator.prototype.preIncrement = function () {
				++this._index;
				return this;
			};
			iterator.prototype.preDecrement = function () {
				--this._index;
				return this;
			};
			iterator.prototype.increment = function () {
				var iteold = new iterator(this._vector, this._index++);
				this._vector = iteold._vector;
				this._index = iteold._index;
				return this;
			};
			iterator.prototype.decrement = function () {
				var iteold = new iterator(this._vector, this._index--); // 古い値を保存
				this._vector = iteold._vector;
				this._index = iteold._index;
				return this;
			};
			iterator.prototype.ptr = function () {
				return this._vector._ptr[this._index];
			};
			iterator.prototype.substitution = function (ite) {
				this._index = ite._index;
				this._vector = ite._vector;
				return this;
			};
			iterator.prototype.notEqual = function (ite) {
				return this._index != ite._index || this._vector != ite._vector;
			};
			return iterator;
		}());
		Live2DCubismFramework.iterator = iterator;
	})(Live2DCubismFramework);
	
	var csmVector = Live2DCubismFramework.csmVector;

	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismBreath = /** @class */ (function () {
			function CubismBreath() {
				this._currentTime = 0.0;
				this.allParamLevel = 1;
				this.breathTimeRate = 1;
			}
			CubismBreath.create = function () {
				return new CubismBreath();
			};
			CubismBreath.delete = function (instance) {
				if (instance != null) {
					instance = null;
				}
			};
			CubismBreath.prototype.setParameters = function (breathParameters) {
				this._breathParameters = breathParameters;
			};
			CubismBreath.prototype.getParameters = function () {
				return this._breathParameters;
			};
			CubismBreath.prototype.setCustomParameters = function (timeRate, level) {
				this.breathTimeRate = timeRate;
				this.allParamLevel = level;
			}
			CubismBreath.prototype.updateParameters = function (model, deltaTimeSeconds) {
				this._currentTime += deltaTimeSeconds;
				var t = this._currentTime * 2.0 * 3.14159 * this.breathTimeRate;
				for (var i = 0; i < this._breathParameters.getSize(); ++i) {
					var data = this._breathParameters.at(i);
					const rawValue = data.offset + this.allParamLevel * data.peak * Math.sin(t / data.cycle);
					var index = model.getParameterIndex(data.parameterId);
					const breathValue = model._model.parameters.minimumValues[index] >= 0 ? rawValue + this.allParamLevel * data.peak : rawValue;
					//if(data.parameterId._id.s == "ParamAngleX" || data.parameterId._id.s == "ParamAngleY" || data.parameterId._id.s == "ParamAngleZ"){break}
					model.addParameterValueById(data.parameterId, breathValue, data.weight);
				}
			};
			return CubismBreath;
		}());
		Live2DCubismFramework.CubismBreath = CubismBreath;
		var BreathParameterData = /** @class */ (function () {
			function BreathParameterData(parameterId, offset, peak, cycle, weight) {
				this.parameterId = parameterId == undefined ? null : parameterId;
				this.offset = offset == undefined ? 0.0 : offset;
				this.peak = peak == undefined ? 0.0 : peak;
				this.cycle = cycle == undefined ? 0.0 : cycle;
				this.weight = weight == undefined ? 0.0 : weight;
			}
			return BreathParameterData;
		}());
		Live2DCubismFramework.BreathParameterData = BreathParameterData;
	})(Live2DCubismFramework);
	
	(function (Live2DCubismFramework) {
		var CubismEyeBlink = /** @class */ (function () {
			function CubismEyeBlink(modelSetting) {
				this._blinkingState = EyeState.EyeState_First;
				this._nextBlinkingTime = 0.0;
				this._stateStartTimeSeconds = 0.0;
				this._blinkingIntervalSeconds = 4.0;
				this._closingSeconds = 0.1;
				this._closedSeconds = 0.05;
				this._openingSeconds = 0.15;
				this._userTimeSeconds = 0.0;
				this._parameterIds = new csmVector();
				if (modelSetting == null) {
					return;
				}
				for (var i = 0; i < modelSetting.getEyeBlinkParameterCount(); ++i) {
					this._parameterIds.pushBack(modelSetting.getEyeBlinkParameterId(i));
				}
			}
			CubismEyeBlink.create = function (modelSetting) {
				if (modelSetting === void 0) { modelSetting = null; }
				return new CubismEyeBlink(modelSetting);
			};
			CubismEyeBlink.delete = function (eyeBlink) {
				if (eyeBlink != null) {
					eyeBlink = null;
				}
			};
			CubismEyeBlink.prototype.setBlinkingInterval = function (blinkingInterval) {
				this._blinkingIntervalSeconds = blinkingInterval;
			};
			CubismEyeBlink.prototype.setBlinkingSetting = function (closing, closed, opening) {
				this._closingSeconds = closing;
				this._closedSeconds = closed;
				this._openingSeconds = opening;
			};
			CubismEyeBlink.prototype.setParameterIds = function (parameterIds) {
				this._parameterIds = parameterIds;
			};
			CubismEyeBlink.prototype.getParameterIds = function () {
				return this._parameterIds;
			};
			CubismEyeBlink.prototype.updateParameters = function (model, deltaTimeSeconds) {
				this._userTimeSeconds += deltaTimeSeconds;
				var parameterValue;
				var t = 0.0;
				switch (this._blinkingState) {
					case EyeState.EyeState_Closing:
						t =
							(this._userTimeSeconds - this._stateStartTimeSeconds) /
								this._closingSeconds;
						if (t >= 1.0) {
							t = 1.0;
							this._blinkingState = EyeState.EyeState_Closed;
							this._stateStartTimeSeconds = this._userTimeSeconds;
						}
						parameterValue = 1.0 - t;
						break;
					case EyeState.EyeState_Closed:
						t =
							(this._userTimeSeconds - this._stateStartTimeSeconds) /
								this._closedSeconds;
						if (t >= 1.0) {
							this._blinkingState = EyeState.EyeState_Opening;
							this._stateStartTimeSeconds = this._userTimeSeconds;
						}
						parameterValue = 0.0;
						break;
					case EyeState.EyeState_Opening:
						t =
							(this._userTimeSeconds - this._stateStartTimeSeconds) /
								this._openingSeconds;
						if (t >= 1.0) {
							t = 1.0;
							this._blinkingState = EyeState.EyeState_Interval;
							this._nextBlinkingTime = this.determinNextBlinkingTiming();
						}
						parameterValue = t;
						break;
					case EyeState.EyeState_Interval:
						if (this._nextBlinkingTime < this._userTimeSeconds) {
							this._blinkingState = EyeState.EyeState_Closing;
							this._stateStartTimeSeconds = this._userTimeSeconds;
						}
						parameterValue = 1.0;
						break;
					case EyeState.EyeState_First:
					default:
						this._blinkingState = EyeState.EyeState_Interval;
						this._nextBlinkingTime = this.determinNextBlinkingTiming();
						parameterValue = 1.0;
						break;
				}
				if (!CubismEyeBlink.CloseIfZero) {
					parameterValue = -parameterValue;
				}
				for (var i = 0; i < this._parameterIds.getSize(); ++i) {
					model.setParameterValueById(this._parameterIds.at(i), parameterValue);
				}
			};
			CubismEyeBlink.prototype.determinNextBlinkingTiming = function () {
				var r = Math.random();
				return (this._userTimeSeconds + r * (2.0 * this._blinkingIntervalSeconds - 1.0));
			};
			CubismEyeBlink.CloseIfZero = true;
			return CubismEyeBlink;
		}());
		Live2DCubismFramework.CubismEyeBlink = CubismEyeBlink;
		var EyeState;
		(function (EyeState) {
			EyeState[EyeState["EyeState_First"] = 0] = "EyeState_First";
			EyeState[EyeState["EyeState_Interval"] = 1] = "EyeState_Interval";
			EyeState[EyeState["EyeState_Closing"] = 2] = "EyeState_Closing";
			EyeState[EyeState["EyeState_Closed"] = 3] = "EyeState_Closed";
			EyeState[EyeState["EyeState_Opening"] = 4] = "EyeState_Opening";
		})(EyeState = Live2DCubismFramework.EyeState || (Live2DCubismFramework.EyeState = {}));
	})(Live2DCubismFramework);
	
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismJson = Live2DCubismFramework.CubismJson;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var Epsilon = 0.001;
		var DefaultFadeInSeconds = 0.5;
		var FadeIn = 'FadeInTime';
		var Link = 'Link';
		var Groups = 'Groups';
		var Id = 'Id';
		var CubismPose = /** @class */ (function () {
			function CubismPose() {
				this._fadeTimeSeconds = DefaultFadeInSeconds;
				this._lastModel = null;
				this._partGroups = new csmVector();
				this._partGroupCounts = new csmVector();
			}
			CubismPose.create = function (pose3json, size) {
				var ret = new CubismPose();
				var json = CubismJson.create(pose3json, size);
				var root = json.getRoot();
				if (!root.getValueByString(FadeIn).isNull()) {
					ret._fadeTimeSeconds = root
						.getValueByString(FadeIn)
						.toFloat(DefaultFadeInSeconds);
					if (ret._fadeTimeSeconds <= 0.0) {
						ret._fadeTimeSeconds = DefaultFadeInSeconds;
					}
				}
				var poseListInfo = root.getValueByString(Groups);
				var poseCount = poseListInfo.getSize();
				for (var poseIndex = 0; poseIndex < poseCount; ++poseIndex) {
					var idListInfo = poseListInfo.getValueByIndex(poseIndex);
					var idCount = idListInfo.getSize();
					var groupCount = 0;
					for (var groupIndex = 0; groupIndex < idCount; ++groupIndex) {
						var partInfo = idListInfo.getValueByIndex(groupIndex);
						var partData = new PartData();
						var parameterId = CubismFramework.getIdManager().getId(partInfo.getValueByString(Id).getRawString());
						partData.partId = parameterId;
						if (!partInfo.getValueByString(Link).isNull()) {
							var linkListInfo = partInfo.getValueByString(Link);
							var linkCount = linkListInfo.getSize();
							for (var linkIndex = 0; linkIndex < linkCount; ++linkIndex) {
								var linkPart = new PartData();
								var linkId = CubismFramework.getIdManager().getId(linkListInfo.getValueByIndex(linkIndex).getString());
								linkPart.partId = linkId;
								partData.link.pushBack(linkPart);
							}
						}
						ret._partGroups.pushBack(partData.clone());
						++groupCount;
					}
					ret._partGroupCounts.pushBack(groupCount);
				}
				CubismJson.delete(json);
				return ret;
			};
			CubismPose.delete = function (pose) {
				if (pose != null) {
					pose = null;
				}
			};
			CubismPose.prototype.updateParameters = function (model, deltaTimeSeconds) {
				if (model != this._lastModel) {
					this.reset(model);
				}
				this._lastModel = model;
				if (deltaTimeSeconds < 0.0) {
					deltaTimeSeconds = 0.0;
				}
				var beginIndex = 0;
				for (var i = 0; i < this._partGroupCounts.getSize(); i++) {
					var partGroupCount = this._partGroupCounts.at(i);
					this.doFade(model, deltaTimeSeconds, beginIndex, partGroupCount);
					beginIndex += partGroupCount;
					this.copyPartOpacities(model);
				}
			};
			CubismPose.prototype.reset = function (model) {
				var beginIndex = 0;
				for (var i = 0; i < this._partGroupCounts.getSize(); ++i) {
					var groupCount = this._partGroupCounts.at(i);
					for (var j = beginIndex; j < beginIndex + groupCount; ++j) {
						this._partGroups.at(j).initialize(model);
						var partsIndex = this._partGroups.at(j).partIndex;
						var paramIndex = this._partGroups.at(j).parameterIndex;
						if (partsIndex < 0) {
							continue;
						}
						model.setPartOpacityByIndex(partsIndex, j == beginIndex ? 1.0 : 0.0);
						model.setParameterValueByIndex(paramIndex, j == beginIndex ? 1.0 : 0.0);
						for (var k = 0; k < this._partGroups.at(j).link.getSize(); ++k) {
							this._partGroups
								.at(j)
								.link.at(k)
								.initialize(model);
						}
					}
					beginIndex += groupCount;
				}
			};
			CubismPose.prototype.copyPartOpacities = function (model) {
				for (var groupIndex = 0; groupIndex < this._partGroups.getSize(); ++groupIndex) {
					var partData = this._partGroups.at(groupIndex);
					if (partData.link.getSize() == 0) {
						continue;
					}
					var partIndex = this._partGroups.at(groupIndex).partIndex;
					var opacity = model.getPartOpacityByIndex(partIndex);
					for (var linkIndex = 0; linkIndex < partData.link.getSize(); ++linkIndex) {
						var linkPart = partData.link.at(linkIndex);
						var linkPartIndex = linkPart.partIndex;
						if (linkPartIndex < 0) {
							continue;
						}
						model.setPartOpacityByIndex(linkPartIndex, opacity);
					}
				}
			};
			CubismPose.prototype.doFade = function (model, deltaTimeSeconds, beginIndex, partGroupCount) {
				var visiblePartIndex = -1;
				var newOpacity = 1.0;
				var phi = 0.5;
				var backOpacityThreshold = 0.15;
				for (var i = beginIndex; i < beginIndex + partGroupCount; ++i) {
					var partIndex = this._partGroups.at(i).partIndex;
					var paramIndex = this._partGroups.at(i).parameterIndex;
					if (model.getParameterValueByIndex(paramIndex) > Epsilon) {
						if (visiblePartIndex >= 0) {
							break;
						}
						visiblePartIndex = i;
						newOpacity = model.getPartOpacityByIndex(partIndex);
						newOpacity += deltaTimeSeconds / this._fadeTimeSeconds;
						if (newOpacity > 1.0) {
							newOpacity = 1.0;
						}
					}
				}
				if (visiblePartIndex < 0) {
					visiblePartIndex = 0;
					newOpacity = 1.0;
				}
				
				for (var i = beginIndex; i < beginIndex + partGroupCount; ++i) {
					var partsIndex = this._partGroups.at(i).partIndex;
					if (visiblePartIndex == i) {
						//村人A
						var partsOpacity = newOpacity;
						if(typeof model._partsOpacityArray[partsIndex] !== 'undefined'){
							partsOpacity = model._partsOpacityArray[partsIndex]
						}
						model.setPartOpacityByIndex(partsIndex, partsOpacity);
					}
					else {
						var opacity = model.getPartOpacityByIndex(partsIndex);
						var a1 = void 0;
						if (newOpacity < phi) {
							a1 = (newOpacity * (phi - 1)) / phi + 1.0;
						}
						else {
							a1 = ((1 - newOpacity) * phi) / (1.0 - phi);
						}
						var backOpacity = (1.0 - a1) * (1.0 - newOpacity);
						if (backOpacity > backOpacityThreshold) {
							a1 = 1.0 - backOpacityThreshold / (1.0 - newOpacity);
						}
						if (opacity > a1) {
							opacity = a1;
						}
						model.setPartOpacityByIndex(partsIndex, opacity);
					}
				}
			};
			return CubismPose;
		}());
		Live2DCubismFramework.CubismPose = CubismPose;
		var PartData = /** @class */ (function () {
			function PartData(v) {
				this.parameterIndex = 0;
				this.partIndex = 0;
				this.link = new csmVector();
				if (v != undefined) {
					this.partId = v.partId;
					for (var ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()) {
						this.link.pushBack(ite.ptr().clone());
					}
				}
			}
			PartData.prototype.assignment = function (v) {
				this.partId = v.partId;
				for (var ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()) {
					this.link.pushBack(ite.ptr().clone());
				}
				return this;
			};
			PartData.prototype.initialize = function (model) {
				this.parameterIndex = model.getParameterIndex(this.partId);
				this.partIndex = model.getPartIndex(this.partId);
				model.setParameterValueByIndex(this.parameterIndex, 1);
			};
			PartData.prototype.clone = function () {
				var clonePartData = new PartData();
				clonePartData.partId = this.partId;
				clonePartData.parameterIndex = this.parameterIndex;
				clonePartData.partIndex = this.partIndex;
				clonePartData.link = new csmVector();
				for (var ite = this.link.begin(); ite.notEqual(this.link.end()); ite.increment()) {
					clonePartData.link.pushBack(ite.ptr().clone());
				}
				return clonePartData;
			};
			return PartData;
		}());
		Live2DCubismFramework.PartData = PartData;
	})(Live2DCubismFramework);
	
	var csmString = Live2DCubismFramework.csmString;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismId = /** @class */ (function () {
			function CubismId(id) {
				if (typeof id === 'string') {
					this._id = new csmString(id);
					return;
				}
				this._id = id;
			}
			CubismId.prototype.getString = function () {
				return this._id;
			};
			CubismId.prototype.isEqual = function (c) {
				if (typeof c === 'string') {
					return this._id.isEqual(c);
				}
				else if (c instanceof csmString) {
					return this._id.isEqual(c.s);
				}
				else if (c instanceof CubismId) {
					return this._id.isEqual(c._id.s);
				}
				return false;
			};
			CubismId.prototype.isNotEqual = function (c) {
				if (typeof c == 'string') {
					return !this._id.isEqual(c);
				}
				else if (c instanceof csmString) {
					return !this._id.isEqual(c.s);
				}
				else if (c instanceof CubismId) {
					return !this._id.isEqual(c._id.s);
				}
				return false;
			};
			return CubismId;
		}());
		Live2DCubismFramework.CubismId = CubismId;
	})(Live2DCubismFramework);
	
	var CubismId = Live2DCubismFramework.CubismId;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismIdManager = /** @class */ (function () {
			function CubismIdManager() {
				this._ids = new csmVector();
			}
			CubismIdManager.prototype.release = function () {
				for (var i = 0; i < this._ids.getSize(); ++i) {
					this._ids.set(i, void 0);
				}
				this._ids = null;
			};
			CubismIdManager.prototype.registerIds = function (ids) {
				for (var i = 0; i < ids.length; i++) {
					this.registerId(ids[i]);
				}
			};
			CubismIdManager.prototype.registerId = function (id) {
				var result = null;
				if ('string' == typeof id) {
					if ((result = this.findId(id)) != null) {
						return result;
					}
					result = new CubismId(id);
					this._ids.pushBack(result);
				}
				else {
					return this.registerId(id.s);
				}
				return result;
			};
			CubismIdManager.prototype.getId = function (id) {
				return this.registerId(id);
			};
			CubismIdManager.prototype.isExist = function (id) {
				if ('string' == typeof id) {
					return this.findId(id) != null;
				}
				return this.isExist(id.s);
			};
			CubismIdManager.prototype.findId = function (id) {
				for (var i = 0; i < this._ids.getSize(); ++i) {
					if (this._ids
						.at(i)
						.getString()
						.isEqual(id)) {
						return this._ids.at(i);
					}
				}
				return null;
			};
			return CubismIdManager;
		}());
		Live2DCubismFramework.CubismIdManager = CubismIdManager;
	})(Live2DCubismFramework);
	
	var CubismVector2 = Live2DCubismFramework.CubismVector2;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMath = /** @class */ (function () {
			function CubismMath() {
			}
			CubismMath.range = function (value, min, max) {
				if (value < min) {
					value = min;
				}
				else if (value > max) {
					value = max;
				}
				return value;
			};
			CubismMath.sin = function (x) {
				return Math.sin(x);
			};
			CubismMath.cos = function (x) {
				return Math.cos(x);
			};
			CubismMath.abs = function (x) {
				return Math.abs(x);
			};
			CubismMath.sqrt = function (x) {
				return Math.sqrt(x);
			};
			CubismMath.getEasingSine = function (value) {
				if (value < 0.0) {
					return 0.0;
				}
				else if (value > 1.0) {
					return 1.0;
				}
				return 0.5 - 0.5 * this.cos(value * Math.PI);
			};
			CubismMath.max = function (left, right) {
				return left > right ? left : right;
			};
			CubismMath.min = function (left, right) {
				return left > right ? right : left;
			};
			CubismMath.degreesToRadian = function (degrees) {
				return (degrees / 180.0) * Math.PI;
			};
			CubismMath.radianToDegrees = function (radian) {
				return (radian * 180.0) / Math.PI;
			};
			CubismMath.directionToRadian = function (from, to) {
				var q1 = Math.atan2(to.y, to.x);
				var q2 = Math.atan2(from.y, from.x);
				var ret = q1 - q2;
				while (ret < -Math.PI) {
					ret += Math.PI * 2.0;
				}
				while (ret > Math.PI) {
					ret -= Math.PI * 2.0;
				}
				return ret;
			};
			CubismMath.directionToDegrees = function (from, to) {
				var radian = this.directionToRadian(from, to);
				var degree = this.radianToDegrees(radian);
				if (to.x - from.x > 0.0) {
					degree = -degree;
				}
				return degree;
			};
			CubismMath.radianToDirection = function (totalAngle) {
				var ret = new CubismVector2();
				ret.x = this.sin(totalAngle);
				ret.y = this.cos(totalAngle);
				return ret;
			};
			return CubismMath;
		}());
		Live2DCubismFramework.CubismMath = CubismMath;
	})(Live2DCubismFramework);
	
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMatrix44 = /** @class */ (function () {
			function CubismMatrix44() {
				this._tr = new Float32Array(16); // 4 * 4のサイズ
				this.loadIdentity();
			}
			CubismMatrix44.multiply = function (a, b, dst) {
				var c = new Float32Array([
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0,
					0.0
				]);
				var n = 4;
				for (var i = 0; i < n; ++i) {
					for (var j = 0; j < n; ++j) {
						for (var k = 0; k < n; ++k) {
							c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
						}
					}
				}
				for (var i = 0; i < 16; ++i) {
					dst[i] = c[i];
				}
			};
			CubismMatrix44.prototype.loadIdentity = function () {
				var c = new Float32Array([
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0
				]);
				this.setMatrix(c);
			};
			CubismMatrix44.prototype.setMatrix = function (tr) {
				for (var i = 0; i < 16; ++i) {
					this._tr[i] = tr[i];
				}
			};
			CubismMatrix44.prototype.getArray = function () {
				return this._tr;
			};
			CubismMatrix44.prototype.getScaleX = function () {
				return this._tr[0];
			};
			CubismMatrix44.prototype.getScaleY = function () {
				return this._tr[5];
			};
			CubismMatrix44.prototype.getTranslateX = function () {
				return this._tr[12];
			};
			CubismMatrix44.prototype.getTranslateY = function () {
				return this._tr[13];
			};
			CubismMatrix44.prototype.transformX = function (src) {
				return this._tr[0] * src + this._tr[12];
			};
			CubismMatrix44.prototype.transformY = function (src) {
				return this._tr[5] * src + this._tr[13];
			};
			CubismMatrix44.prototype.invertTransformX = function (src) {
				return (src - this._tr[12]) / this._tr[0];
			};
			CubismMatrix44.prototype.invertTransformY = function (src) {
				return (src - this._tr[13]) / this._tr[5];
			};
			CubismMatrix44.prototype.translateRelative = function (x, y) {
				var tr1 = new Float32Array([
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					x,
					y,
					0.0,
					1.0
				]);
				CubismMatrix44.multiply(tr1, this._tr, this._tr);
			};
			CubismMatrix44.prototype.translate = function (x, y) {
				this._tr[12] = x;
				this._tr[13] = y;
			};
			CubismMatrix44.prototype.translateX = function (x) {
				this._tr[12] = x;
			};
			CubismMatrix44.prototype.translateY = function (y) {
				this._tr[13] = y;
			};
			CubismMatrix44.prototype.scaleRelative = function (x, y) {
				var tr1 = new Float32Array([
					x,
					0.0,
					0.0,
					0.0,
					0.0,
					y,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0
				]);
				CubismMatrix44.multiply(tr1, this._tr, this._tr);
			};
			CubismMatrix44.prototype.scale = function (x, y) {
				this._tr[0] = x;
				this._tr[5] = y;
			};
			CubismMatrix44.prototype.multiplyByMatrix = function (m) {
				CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
			};
			CubismMatrix44.prototype.clone = function () {
				var cloneMatrix = new CubismMatrix44();
				for (var i = 0; i < this._tr.length; i++) {
					cloneMatrix._tr[i] = this._tr[i];
				}
				return cloneMatrix;
			};
			return CubismMatrix44;
		}());
		Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
	})(Live2DCubismFramework);
	
	var CubismMatrix44 = Live2DCubismFramework.CubismMatrix44;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismModelMatrix = /** @class */ (function (_super) {
			__extends(CubismModelMatrix, _super);
			function CubismModelMatrix(w, h) {
				var _this = _super.call(this) || this;
				_this._width = w !== undefined ? w : 0.0;
				_this._height = h !== undefined ? h : 0.0;
				_this.setHeight(1.0);
				return _this;
			}
			CubismModelMatrix.prototype.setWidth = function (w) {
				var scaleX = w / this._width;
				var scaleY = scaleX;
				this.scale(scaleX, scaleY);
			};
			CubismModelMatrix.prototype.setHeight = function (h) {
				var scaleX = h / this._height;
				var scaleY = scaleX;
				this.scale(scaleX, scaleY);
			};
			CubismModelMatrix.prototype.setPosition = function (x, y) {
				this.translate(x, y);
			};
			CubismModelMatrix.prototype.setCenterPosition = function (x, y) {
				this.centerX(x);
				this.centerY(y);
			};
			CubismModelMatrix.prototype.top = function (y) {
				this.setY(y);
			};
			CubismModelMatrix.prototype.bottom = function (y) {
				var h = this._height * this.getScaleY();
				this.translateY(y - h);
			};
			CubismModelMatrix.prototype.left = function (x) {
				this.setX(x);
			};
			CubismModelMatrix.prototype.right = function (x) {
				var w = this._width * this.getScaleX();
				this.translateX(x - w);
			};
			CubismModelMatrix.prototype.centerX = function (x) {
				var w = this._width * this.getScaleX();
				this.translateX(x - w / 2.0);
			};
			CubismModelMatrix.prototype.setX = function (x) {
				this.translateX(x);
			};
			CubismModelMatrix.prototype.centerY = function (y) {
				var h = this._height * this.getScaleY();
				this.translateY(y - h / 2.0);
			};
			CubismModelMatrix.prototype.setY = function (y) {
				this.translateY(y);
			};
			CubismModelMatrix.prototype.setupFromLayout = function (layout) {
				var keyWidth = 'width';
				var keyHeight = 'height';
				var keyX = 'x';
				var keyY = 'y';
				var keyCenterX = 'center_x';
				var keyCenterY = 'center_y';
				var keyTop = 'top';
				var keyBottom = 'bottom';
				var keyLeft = 'left';
				var keyRight = 'right';
				for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
					var key = ite.ptr().first;
					var value = ite.ptr().second;
					if (key == keyWidth) {
						this.setWidth(value);
					}
					else if (key == keyHeight) {
						this.setHeight(value);
					}
				}
				for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
					var key = ite.ptr().first;
					var value = ite.ptr().second;
					if (key == keyX) {
						this.setX(value);
					}
					else if (key == keyY) {
						this.setY(value);
					}
					else if (key == keyCenterX) {
						this.centerX(value);
					}
					else if (key == keyCenterY) {
						this.centerY(value);
					}
					else if (key == keyTop) {
						this.top(value);
					}
					else if (key == keyBottom) {
						this.bottom(value);
					}
					else if (key == keyLeft) {
						this.left(value);
					}
					else if (key == keyRight) {
						this.right(value);
					}
				}
			};
			return CubismModelMatrix;
		}(CubismMatrix44));
		Live2DCubismFramework.CubismModelMatrix = CubismModelMatrix;
	})(Live2DCubismFramework);
	
	var CubismMath = Live2DCubismFramework.CubismMath;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var FrameRate = 30;
		var Epsilon = 0.01;
		var CubismTargetPoint = /** @class */ (function () {
			function CubismTargetPoint() {
				this._faceTargetX = 0.0;
				this._faceTargetY = 0.0;
				this._faceX = 0.0;
				this._faceY = 0.0;
				this._faceVX = 0.0;
				this._faceVY = 0.0;
				this._lastTimeSeconds = 0.0;
				this._userTimeSeconds = 0.0;
			}
			CubismTargetPoint.prototype.update = function (deltaTimeSeconds) {
				this._userTimeSeconds += deltaTimeSeconds;
				var faceParamMaxV = 40.0 / 10.0;
				var maxV = (faceParamMaxV * 1.0) / FrameRate;
				if (this._lastTimeSeconds == 0.0) {
					this._lastTimeSeconds = this._userTimeSeconds;
					return;
				}
				var deltaTimeWeight = (this._userTimeSeconds - this._lastTimeSeconds) * FrameRate;
				this._lastTimeSeconds = this._userTimeSeconds;
				var timeToMaxSpeed = 0.15;
				var frameToMaxSpeed = timeToMaxSpeed * FrameRate;
				var maxA = (deltaTimeWeight * maxV) / frameToMaxSpeed;
				var dx = this._faceTargetX - this._faceX;
				var dy = this._faceTargetY - this._faceY;
				if (CubismMath.abs(dx) <= Epsilon && CubismMath.abs(dy) <= Epsilon) {
					return;
				}
				var d = CubismMath.sqrt(dx * dx + dy * dy);
				var vx = (maxV * dx) / d;
				var vy = (maxV * dy) / d;
				var ax = vx - this._faceVX;
				var ay = vy - this._faceVY;
				var a = CubismMath.sqrt(ax * ax + ay * ay);
				if (a < -maxA || a > maxA) {
					ax *= maxA / a;
					ay *= maxA / a;
				}
				this._faceVX += ax;
				this._faceVY += ay;
				{
					var maxV_1 = 0.5 *
						(CubismMath.sqrt(maxA * maxA + 16.0 * maxA * d - 8.0 * maxA * d) -
							maxA);
					var curV = CubismMath.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
					if (curV > maxV_1) {
						this._faceVX *= maxV_1 / curV;
						this._faceVY *= maxV_1 / curV;
					}
				}
				this._faceX += this._faceVX;
				this._faceY += this._faceVY;
			};
			CubismTargetPoint.prototype.getX = function () {
				return this._faceX;
			};
			CubismTargetPoint.prototype.getY = function () {
				return this._faceY;
			};
			CubismTargetPoint.prototype.set = function (x, y) {
				this._faceTargetX = x;
				this._faceTargetY = y;
			};
			return CubismTargetPoint;
		}());
		Live2DCubismFramework.CubismTargetPoint = CubismTargetPoint;
	})(Live2DCubismFramework);

	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismVector2 = /** @class */ (function () {
			function CubismVector2(x, y) {
				this.x = x;
				this.y = y;
				this.x = x == undefined ? 0.0 : x;
				this.y = y == undefined ? 0.0 : y;
			}
			CubismVector2.prototype.add = function (vector2) {
				var ret = new CubismVector2(0.0, 0.0);
				ret.x = this.x + vector2.x;
				ret.y = this.y + vector2.y;
				return ret;
			};
			CubismVector2.prototype.substract = function (vector2) {
				var ret = new CubismVector2(0.0, 0.0);
				ret.x = this.x - vector2.x;
				ret.y = this.y - vector2.y;
				return ret;
			};
			CubismVector2.prototype.multiply = function (vector2) {
				var ret = new CubismVector2(0.0, 0.0);
				ret.x = this.x * vector2.x;
				ret.y = this.y * vector2.y;
				return ret;
			};
			CubismVector2.prototype.multiplyByScaler = function (scalar) {
				return this.multiply(new CubismVector2(scalar, scalar));
			};
			CubismVector2.prototype.division = function (vector2) {
				var ret = new CubismVector2(0.0, 0.0);
				ret.x = this.x / vector2.x;
				ret.y = this.y / vector2.y;
				return ret;
			};
			CubismVector2.prototype.divisionByScalar = function (scalar) {
				return this.division(new CubismVector2(scalar, scalar));
			};
			CubismVector2.prototype.getLength = function () {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			};
			CubismVector2.prototype.getDistanceWith = function (a) {
				return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
			};
			CubismVector2.prototype.dot = function (a) {
				return this.x * a.x + this.y * a.y;
			};
			CubismVector2.prototype.normalize = function () {
				var length = Math.pow(this.x * this.x + this.y * this.y, 0.5);
				this.x = this.x / length;
				this.y = this.y / length;
			};
			CubismVector2.prototype.isEqual = function (rhs) {
				return this.x == rhs.x && this.y == rhs.y;
			};
			CubismVector2.prototype.isNotEqual = function (rhs) {
				return !this.isEqual(rhs);
			};
			return CubismVector2;
		}());
		Live2DCubismFramework.CubismVector2 = CubismVector2;
	})(Live2DCubismFramework);
	
	var CubismMatrix44 = Live2DCubismFramework.CubismMatrix44;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismViewMatrix = /** @class */ (function (_super) {
			__extends(CubismViewMatrix, _super);
			function CubismViewMatrix() {
				var _this = _super.call(this) || this;
				_this._screenLeft = 0.0;
				_this._screenRight = 0.0;
				_this._screenTop = 0.0;
				_this._screenBottom = 0.0;
				_this._maxLeft = 0.0;
				_this._maxRight = 0.0;
				_this._maxTop = 0.0;
				_this._maxBottom = 0.0;
				_this._maxScale = 0.0;
				_this._minScale = 0.0;
				return _this;
			}
			CubismViewMatrix.prototype.adjustTranslate = function (x, y) {
				if (this._tr[0] * this._maxLeft + (this._tr[12] + x) > this._screenLeft) {
					x = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12];
				}
				if (this._tr[0] * this._maxRight + (this._tr[12] + x) <
					this._screenRight) {
					x = this._screenRight - this._tr[0] * this._maxRight - this._tr[12];
				}
				if (this._tr[5] * this._maxTop + (this._tr[13] + y) < this._screenTop) {
					y = this._screenTop - this._tr[5] * this._maxTop - this._tr[13];
				}
				if (this._tr[5] * this._maxBottom + (this._tr[13] + y) >
					this._screenBottom) {
					y = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13];
				}
				var tr1 = new Float32Array([
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					x,
					y,
					0.0,
					1.0
				]);
				CubismMatrix44.multiply(tr1, this._tr, this._tr);
			};
			CubismViewMatrix.prototype.adjustScale = function (cx, cy, scale) {
				var maxScale = this.getMaxScale();
				var minScale = this.getMinScale();
				var targetScale = scale * this._tr[0];
				if (targetScale < minScale) {
					if (this._tr[0] > 0.0) {
						scale = minScale / this._tr[0];
					}
				}
				else if (targetScale > maxScale) {
					if (this._tr[0] > 0.0) {
						scale = maxScale / this._tr[0];
					}
				}
				var tr1 = new Float32Array([
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					cx,
					cy,
					0.0,
					1.0
				]);
				var tr2 = new Float32Array([
					scale,
					0.0,
					0.0,
					0.0,
					0.0,
					scale,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0
				]);
				var tr3 = new Float32Array([
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					0.0,
					0.0,
					0.0,
					1.0,
					0.0,
					-cx,
					-cy,
					0.0,
					1.0
				]);
				CubismMatrix44.multiply(tr3, this._tr, this._tr);
				CubismMatrix44.multiply(tr2, this._tr, this._tr);
				CubismMatrix44.multiply(tr1, this._tr, this._tr);
			};
			CubismViewMatrix.prototype.setScreenRect = function (left, right, bottom, top) {
				this._screenLeft = left;
				this._screenRight = right;
				this._screenBottom = bottom;
				this._screenTop = top;
			};
			CubismViewMatrix.prototype.setMaxScreenRect = function (left, right, bottom, top) {
				this._maxLeft = left;
				this._maxRight = right;
				this._maxTop = top;
				this._maxBottom = bottom;
			};
			CubismViewMatrix.prototype.setMaxScale = function (maxScale) {
				this._maxScale = maxScale;
			};
			CubismViewMatrix.prototype.setMinScale = function (minScale) {
				this._minScale = minScale;
			};
			CubismViewMatrix.prototype.getMaxScale = function () {
				return this._maxScale;
			};
			CubismViewMatrix.prototype.getMinScale = function () {
				return this._minScale;
			};
			CubismViewMatrix.prototype.isMaxScale = function () {
				return this.getScaleX() >= this._maxScale;
			};
			CubismViewMatrix.prototype.isMinScale = function () {
				return this.getScaleX() <= this._minScale;
			};
			CubismViewMatrix.prototype.getScreenLeft = function () {
				return this._screenLeft;
			};
			CubismViewMatrix.prototype.getScreenRight = function () {
				return this._screenRight;
			};
			CubismViewMatrix.prototype.getScreenBottom = function () {
				return this._screenBottom;
			};
			CubismViewMatrix.prototype.getScreenTop = function () {
				return this._screenTop;
			};
			CubismViewMatrix.prototype.getMaxLeft = function () {
				return this._maxLeft;
			};
			CubismViewMatrix.prototype.getMaxRight = function () {
				return this._maxRight;
			};
			CubismViewMatrix.prototype.getMaxBottom = function () {
				return this._maxBottom;
			};
			CubismViewMatrix.prototype.getMaxTop = function () {
				return this._maxTop;
			};
			return CubismViewMatrix;
		}(CubismMatrix44));
		Live2DCubismFramework.CubismViewMatrix = CubismViewMatrix;
	})(Live2DCubismFramework);
	
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismBlendMode = Live2DCubismFramework.CubismBlendMode;
	var csmMap = Live2DCubismFramework.csmMap;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismModel = /** @class */ (function () {
			function CubismModel(model) {
				this._model = model;
				this._parameterValues = null;
				this._parameterMaximumValues = null;
				this._parameterMinimumValues = null;
				this._partOpacities = null;
				this._savedParameters = new csmVector();
				this._parameterIds = new csmVector();
				this._drawableIds = new csmVector();
				this._partIds = new csmVector();
				this._notExistPartId = new csmMap();
				this._notExistParameterId = new csmMap();
				this._notExistParameterValues = new csmMap();
				this._notExistPartOpacities = new csmMap();
				
				//村人A
				this._partsOpacityArray = [];
				this._syncMotionTimeModelName = [];
			}
			CubismModel.prototype.update = function () {
				this._model.update();
				this._model.drawables.resetDynamicFlags();
			};
			CubismModel.prototype.getCanvasWidth = function () {
				if (this._model == null) {
					return 0.0;
				}
				return (this._model.canvasinfo.CanvasWidth /
					this._model.canvasinfo.PixelsPerUnit);
			};
			CubismModel.prototype.getCanvasHeight = function () {
				if (this._model == null) {
					return 0.0;
				}
				return (this._model.canvasinfo.CanvasHeight /
					this._model.canvasinfo.PixelsPerUnit);
			};
			CubismModel.prototype.saveParameters = function () {
				var parameterCount = this._model.parameters.count;
				var savedParameterCount = this._savedParameters.getSize();
				for (var i = 0; i < parameterCount; ++i) {
					if (i < savedParameterCount) {
						this._savedParameters.set(i, this._parameterValues[i]);
					}
					else {
						this._savedParameters.pushBack(this._parameterValues[i]);
					}
				}
			};
			CubismModel.prototype.getModel = function () {
				return this._model;
			};
			CubismModel.prototype.getPartIndex = function (partId) {
				var partIndex;
				var partCount = this._model.parts.count;
				for (partIndex = 0; partIndex < partCount; ++partIndex) {
					if (partId == this._partIds.at(partIndex)) {
						return partIndex;
					}
				}
				if (this._notExistPartId.isExist(partId)) {
					return this._notExistPartId.getValue(partId);
				}
				partIndex = partCount + this._notExistPartId.getSize();
				this._notExistPartId.setValue(partId, partIndex);
				this._notExistPartOpacities.appendKey(partIndex);
				return partIndex;
			};
			CubismModel.prototype.getPartCount = function () {
				var partCount = this._model.parts.count;
				return partCount;
			};
			CubismModel.prototype.setPartOpacityById = function (idName, opacity) {
				const partIndex = this._model.parts.ids.indexOf(idName);
				this.setPartOpacityByIndex(partIndex, opacity)
			}
			CubismModel.prototype.setPartOpacityByIndex = function (partIndex, opacity) {
				if (this._notExistPartOpacities.isExist(partIndex)) {
					this._notExistPartOpacities.setValue(partIndex, opacity);
					return;
				}
				CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
				this._partOpacities[partIndex] = opacity;
			};
			CubismModel.prototype.setPartOpacityById = function (partId, opacity) {
				var index = this.getPartIndex(partId);
				if (index < 0) {
					return;
				}
				this.setPartOpacityByIndex(index, opacity);
			};
			CubismModel.prototype.getPartOpacityByIndex = function (partIndex) {
				if (this._notExistPartOpacities.isExist(partIndex)) {
					return this._notExistPartOpacities.getValue(partIndex);
				}
				CSM_ASSERT(0 <= partIndex && partIndex < this.getPartCount());
				return this._partOpacities[partIndex];
			};
			CubismModel.prototype.getPartOpacityById = function (partId) {
				var index = this.getPartIndex(partId);
				if (index < 0) {
					return 0;
				}
				return this.getPartOpacityByIndex(index);
			};
			CubismModel.prototype.getParameterIndex = function (parameterId) {
				var parameterIndex;
				var idCount = this._model.parameters.count;
				for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
					if (parameterId != this._parameterIds.at(parameterIndex)) {
						continue;
					}
					return parameterIndex;
				}
				if (this._notExistParameterId.isExist(parameterId)) {
					return this._notExistParameterId.getValue(parameterId);
				}
				parameterIndex =
					this._model.parameters.count + this._notExistParameterId.getSize();
				this._notExistParameterId.setValue(parameterId, parameterIndex);
				this._notExistParameterValues.appendKey(parameterIndex);
				return parameterIndex;
			};
			CubismModel.prototype.getParameterCount = function () {
				return this._model.parameters.count;
			};
			CubismModel.prototype.getParameterMaximumValue = function (parameterIndex) {
				return this._model.parameters.maximumValues[parameterIndex];
			};
			CubismModel.prototype.getParameterMinimumValue = function (parameterIndex) {
				return this._model.parameters.minimumValues[parameterIndex];
			};
			CubismModel.prototype.getParameterDefaultValue = function (parameterIndex) {
				return this._model.parameters.defaultValues[parameterIndex];
			};
			CubismModel.prototype.getParameterValueByIndex = function (parameterIndex) {
				if (this._notExistParameterValues.isExist(parameterIndex)) {
					return this._notExistParameterValues.getValue(parameterIndex);
				}
				CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
				return this._parameterValues[parameterIndex];
			};
			CubismModel.prototype.getParameterValueById = function (parameterId) {
				var parameterIndex = this.getParameterIndex(parameterId);
				return this.getParameterValueByIndex(parameterIndex);
			};
			CubismModel.prototype.setParameterValueByIndex = function (parameterIndex, value, weight) {
				if (weight === void 0) { weight = 1.0; }
				if (this._notExistParameterValues.isExist(parameterIndex)) {
					this._notExistParameterValues.setValue(parameterIndex, weight == 1
						? value
						: this._notExistParameterValues.getValue(parameterIndex) *
							(1 - weight) +
							value * weight);
					return;
				}
				CSM_ASSERT(0 <= parameterIndex && parameterIndex < this.getParameterCount());
				if (this._model.parameters.maximumValues[parameterIndex] < value) {
					value = this._model.parameters.maximumValues[parameterIndex];
				}
				if (this._model.parameters.minimumValues[parameterIndex] > value) {
					value = this._model.parameters.minimumValues[parameterIndex];
				}
				this._parameterValues[parameterIndex] =
					weight == 1
						? value
						: (this._parameterValues[parameterIndex] =
							this._parameterValues[parameterIndex] * (1 - weight) +
								value * weight);
			};
			CubismModel.prototype.setParameterValueById = function (parameterId, value, weight) {
				if (weight === void 0) { weight = 1.0; }
				var index = this.getParameterIndex(parameterId);
				this.setParameterValueByIndex(index, value, weight);
			};
			CubismModel.prototype.addParameterValueByIndex = function (parameterIndex, value, weight) {
				if (weight === void 0) { weight = 1.0; }
				this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) + value * weight);
			};
			CubismModel.prototype.addParameterValueById = function (parameterId, value, weight) {
				if (weight === void 0) { weight = 1.0; }
				var index = this.getParameterIndex(parameterId);
				this.addParameterValueByIndex(index, value, weight);
			};
			CubismModel.prototype.multiplyParameterValueById = function (parameterId, value, weight) {
				if (weight === void 0) { weight = 1.0; }
				var index = this.getParameterIndex(parameterId);
				this.multiplyParameterValueByIndex(index, value, weight);
			};
			CubismModel.prototype.multiplyParameterValueByIndex = function (parameterIndex, value, weight) {
				if (weight === void 0) { weight = 1.0; }
				this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) *
					(1.0 + (value - 1.0) * weight));
			};
			CubismModel.prototype.getDrawableIndex = function (drawableId) {
				var drawableCount = this._model.drawables.count;
				for (var drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
					if (this._drawableIds.at(drawableIndex) == drawableId) {
						return drawableIndex;
					}
				}
				return -1;
			};
			CubismModel.prototype.getDrawableCount = function () {
				var drawableCount = this._model.drawables.count;
				return drawableCount;
			};
			CubismModel.prototype.getDrawableId = function (drawableIndex) {
				var parameterIds = this._model.drawables.ids;
				return CubismFramework.getIdManager().getId(parameterIds[drawableIndex]);
			};
			CubismModel.prototype.getDrawableRenderOrders = function () {
				var renderOrders = this._model.drawables.renderOrders;
				return renderOrders;
			};
			CubismModel.prototype.getDrawableTextureIndices = function (drawableIndex) {
				var textureIndices = this._model.drawables.textureIndices;
				return textureIndices[drawableIndex];
			};
			CubismModel.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (drawableIndex) {
				var dynamicFlags = this._model.drawables.dynamicFlags;
				return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
			};
			CubismModel.prototype.getDrawableVertexIndexCount = function (drawableIndex) {
				var indexCounts = this._model.drawables.indexCounts;
				return indexCounts[drawableIndex];
			};
			CubismModel.prototype.getDrawableVertexCount = function (drawableIndex) {
				var vertexCounts = this._model.drawables.vertexCounts;
				return vertexCounts[drawableIndex];
			};
			CubismModel.prototype.getDrawableVertices = function (drawableIndex) {
				return this.getDrawableVertexPositions(drawableIndex);
			};
			CubismModel.prototype.getDrawableVertexIndices = function (drawableIndex) {
				var indicesArray = this._model.drawables.indices;
				return indicesArray[drawableIndex];
			};
			CubismModel.prototype.getDrawableVertexPositions = function (drawableIndex) {
				var verticesArray = this._model.drawables
					.vertexPositions;
				return verticesArray[drawableIndex];
			};
			CubismModel.prototype.getDrawableVertexUvs = function (drawableIndex) {
				var uvsArray = this._model.drawables.vertexUvs;
				return uvsArray[drawableIndex];
			};
			CubismModel.prototype.getDrawableOpacity = function (drawableIndex) {
				var opacities = this._model.drawables.opacities;
				return opacities[drawableIndex];
			};
			CubismModel.prototype.getDrawableCulling = function (drawableIndex) {
				var constantFlags = this._model.drawables.constantFlags;
				return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
			};
			CubismModel.prototype.getDrawableBlendMode = function (drawableIndex) {
				var constantFlags = this._model.drawables.constantFlags;
				return Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex])
					? CubismBlendMode.CubismBlendMode_Additive
					: Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex])
						? CubismBlendMode.CubismBlendMode_Multiplicative
						: CubismBlendMode.CubismBlendMode_Normal;
			};
			CubismModel.prototype.getDrawableInvertedMaskBit = function (drawableIndex) {
				var constantFlags = this._model.drawables.constantFlags;
				return Live2DCubismCore.Utils.hasIsInvertedMaskBit(constantFlags[drawableIndex]);
			};
			CubismModel.prototype.getDrawableMasks = function () {
				var masks = this._model.drawables.masks;
				return masks;
			};
			CubismModel.prototype.getDrawableMaskCounts = function () {
				var maskCounts = this._model.drawables.maskCounts;
				return maskCounts;
			};
			CubismModel.prototype.isUsingMasking = function () {
				for (var d = 0; d < this._model.drawables.count; ++d) {
					if (this._model.drawables.maskCounts[d] <= 0) {
						continue;
					}
					return true;
				}
				return false;
			};
			CubismModel.prototype.getDrawableDynamicFlagIsVisible = function (drawableIndex) {
				var dynamicFlags = this._model.drawables.dynamicFlags;
				return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
			};
			CubismModel.prototype.getDrawableDynamicFlagVisibilityDidChange = function (drawableIndex) {
				var dynamicFlags = this._model.drawables.dynamicFlags;
				return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
			};
			CubismModel.prototype.getDrawableDynamicFlagOpacityDidChange = function (drawableIndex) {
				var dynamicFlags = this._model.drawables.dynamicFlags;
				return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
			};
			CubismModel.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (drawableIndex) {
				var dynamicFlags = this._model.drawables.dynamicFlags;
				return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
			};
			CubismModel.prototype.loadParameters = function () {
				var parameterCount = this._model.parameters.count;
				var savedParameterCount = this._savedParameters.getSize();
				if (parameterCount > savedParameterCount) {
					parameterCount = savedParameterCount;
				}
				for (var i = 0; i < parameterCount; ++i) {
					this._parameterValues[i] = this._savedParameters.at(i);
				}
			};
			CubismModel.prototype.initialize = function () {
				CSM_ASSERT(this._model);
				this._doInitShader = false;
				this._doInitShaderByTintTextureIdArray = [];
				
				this._parameterValues = this._model.parameters.values;
				this._partOpacities = this._model.parts.opacities;
				this._parameterMaximumValues = this._model.parameters.maximumValues;
				this._parameterMinimumValues = this._model.parameters.minimumValues;
				{
					var parameterIds = this._model.parameters.ids;
					var parameterCount = this._model.parameters.count;
					this._parameterIds.prepareCapacity(parameterCount);
					for (var i = 0; i < parameterCount; ++i) {
						this._parameterIds.pushBack(CubismFramework.getIdManager().getId(parameterIds[i]));
					}
				}
				{
					var partIds = this._model.parts.ids;
					var partCount = this._model.parts.count;
					this._partIds.prepareCapacity(partCount);
					for (var i = 0; i < partCount; ++i) {
						this._partIds.pushBack(CubismFramework.getIdManager().getId(partIds[i]));
					}
				}
				{
					var drawableIds = this._model.drawables.ids;
					var drawableCount = this._model.drawables.count;
					this._drawableIds.prepareCapacity(drawableCount);
					for (var i = 0; i < drawableCount; ++i) {
						this._drawableIds.pushBack(CubismFramework.getIdManager().getId(drawableIds[i]));
					}
				}
			};
			CubismModel.prototype.release = function () {
				this._model.release();
				this._model = null;
			};
			return CubismModel;
		}());
		Live2DCubismFramework.CubismModel = CubismModel;
	})(Live2DCubismFramework);
	
	var CubismModel = Live2DCubismFramework.CubismModel;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMoc = /** @class */ (function () {
			function CubismMoc(moc) {
				this._moc = moc;
				this._modelCount = 0;
			}
			CubismMoc.create = function (mocBytes) {
				var cubismMoc = null;
				var moc = Live2DCubismCore.Moc.fromArrayBuffer(mocBytes);
				if (moc) {
					cubismMoc = new CubismMoc(moc);
				}
				return cubismMoc;
			};
			CubismMoc.delete = function (moc) {
				moc._moc._release();
				moc._moc = null;
				moc = null;
			};
			CubismMoc.prototype.createModel = function () {
				var cubismModel = null;
				var model = Live2DCubismCore.Model.fromMoc(this._moc);
				if (model) {
					cubismModel = new CubismModel(model);
					cubismModel.initialize();
					++this._modelCount;
				}
				return cubismModel;
			};
			CubismMoc.prototype.deleteModel = function (model) {
				if (model != null) {
					model.release();
					model = null;
					--this._modelCount;
				}
			};
			CubismMoc.prototype.release = function () {
				CSM_ASSERT(this._modelCount == 0);
				this._moc._release();
				this._moc = null;
			};
			return CubismMoc;
		}());
		Live2DCubismFramework.CubismMoc = CubismMoc;
	})(Live2DCubismFramework);
	
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismJson = Live2DCubismFramework.CubismJson;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var Meta = 'Meta';
		var UserDataCount = 'UserDataCount';
		var TotalUserDataSize = 'TotalUserDataSize';
		var UserData = 'UserData';
		var Target = 'Target';
		var Id = 'Id';
		var Value = 'Value';
		var CubismModelUserDataJson = /** @class */ (function () {
			function CubismModelUserDataJson(buffer, size) {
				this._json = CubismJson.create(buffer, size);
			}
			CubismModelUserDataJson.prototype.release = function () {
				CubismJson.delete(this._json);
			};
			CubismModelUserDataJson.prototype.getUserDataCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(UserDataCount)
					.toInt();
			};
			CubismModelUserDataJson.prototype.getTotalUserDataSize = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(TotalUserDataSize)
					.toInt();
			};
			CubismModelUserDataJson.prototype.getUserDataTargetType = function (i) {
				return this._json
					.getRoot()
					.getValueByString(UserData)
					.getValueByIndex(i)
					.getValueByString(Target)
					.getRawString();
			};
			CubismModelUserDataJson.prototype.getUserDataId = function (i) {
				return CubismFramework.getIdManager().getId(this._json
					.getRoot()
					.getValueByString(UserData)
					.getValueByIndex(i)
					.getValueByString(Id)
					.getRawString());
			};
			CubismModelUserDataJson.prototype.getUserDataValue = function (i) {
				return this._json
					.getRoot()
					.getValueByString(UserData)
					.getValueByIndex(i)
					.getValueByString(Value)
					.getRawString();
			};
			return CubismModelUserDataJson;
		}());
		Live2DCubismFramework.CubismModelUserDataJson = CubismModelUserDataJson;
	})(Live2DCubismFramework);
	
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var csmString = Live2DCubismFramework.csmString;
	var CubismModelUserDataJson = Live2DCubismFramework.CubismModelUserDataJson;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var ArtMesh = 'ArtMesh';
		var CubismModelUserDataNode = /** @class */ (function () {
			function CubismModelUserDataNode() {
			}
			return CubismModelUserDataNode;
		}());
		Live2DCubismFramework.CubismModelUserDataNode = CubismModelUserDataNode;
		var CubismModelUserData = /** @class */ (function () {
			function CubismModelUserData() {
				this._userDataNodes = new csmVector();
				this._artMeshUserDataNode = new csmVector();
			}
			CubismModelUserData.create = function (buffer, size) {
				var ret = new CubismModelUserData();
				ret.parseUserData(buffer, size);
				return ret;
			};
			CubismModelUserData.delete = function (modelUserData) {
				if (modelUserData != null) {
					modelUserData.release();
					modelUserData = null;
				}
			};
			CubismModelUserData.prototype.getArtMeshUserDatas = function () {
				return this._artMeshUserDataNode;
			};
			CubismModelUserData.prototype.parseUserData = function (buffer, size) {
				var json = new CubismModelUserDataJson(buffer, size);
				var typeOfArtMesh = CubismFramework.getIdManager().getId(ArtMesh);
				var nodeCount = json.getUserDataCount();
				for (var i = 0; i < nodeCount; i++) {
					var addNode = new CubismModelUserDataNode();
					addNode.targetId = json.getUserDataId(i);
					addNode.targetType = CubismFramework.getIdManager().getId(json.getUserDataTargetType(i));
					addNode.value = new csmString(json.getUserDataValue(i));
					this._userDataNodes.pushBack(addNode);
					if (addNode.targetType == typeOfArtMesh) {
						this._artMeshUserDataNode.pushBack(addNode);
					}
				}
				json.release();
				json = void 0;
			};
			CubismModelUserData.prototype.release = function () {
				for (var i = 0; i < this._userDataNodes.getSize(); ++i) {
					this._userDataNodes.set(i, null);
				}
				this._userDataNodes = null;
			};
			return CubismModelUserData;
		}());
		Live2DCubismFramework.CubismModelUserData = CubismModelUserData;
	})(Live2DCubismFramework);
	
	var ACubismMotion = Live2DCubismFramework.ACubismMotion;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMotionQueueEntry = /** @class */ (function () {
			function CubismMotionQueueEntry() {
				this._autoDelete = false;
				this._motion = null;
				this._available = true;
				this._finished = false;
				this._started = false;
				this._startTimeSeconds = -1.0;
				this._fadeInStartTimeSeconds = 0.0;
				this._endTimeSeconds = -1.0;
				this._stateTimeSeconds = 0.0;
				this._stateWeight = 0.0;
				this._lastEventCheckSeconds = 0.0;
				this._motionQueueEntryHandle = this;
			}
			CubismMotionQueueEntry.prototype.release = function () {
				if (this._autoDelete && this._motion) {
					ACubismMotion.delete(this._motion); //
				}
			};
			CubismMotionQueueEntry.prototype.startFadeout = function (fadeoutSeconds, userTimeSeconds) {
				var newEndTimeSeconds = userTimeSeconds + fadeoutSeconds;
				if (this._endTimeSeconds < 0.0 ||
					newEndTimeSeconds < this._endTimeSeconds) {
					this._endTimeSeconds = newEndTimeSeconds;
				}
			};
			CubismMotionQueueEntry.prototype.isFinished = function () {
				return this._finished;
			};
			CubismMotionQueueEntry.prototype.isStarted = function () {
				return this._started;
			};
			CubismMotionQueueEntry.prototype.getStartTime = function () {
				return this._startTimeSeconds;
			};
			CubismMotionQueueEntry.prototype.getFadeInStartTime = function () {
				return this._fadeInStartTimeSeconds;
			};
			CubismMotionQueueEntry.prototype.getEndTime = function () {
				return this._endTimeSeconds;
			};
			CubismMotionQueueEntry.prototype.setStartTime = function (startTime) {
				this._startTimeSeconds = startTime;
			};
			CubismMotionQueueEntry.prototype.setFadeInStartTime = function (startTime) {
				this._fadeInStartTimeSeconds = startTime;
			};
			CubismMotionQueueEntry.prototype.setEndTime = function (endTime) {
				this._endTimeSeconds = endTime;
			};
			CubismMotionQueueEntry.prototype.setIsFinished = function (f) {
				this._finished = f;
			};
			CubismMotionQueueEntry.prototype.setIsStarted = function (f) {
				this._started = f;
			};
			CubismMotionQueueEntry.prototype.isAvailable = function () {
				return this._available;
			};
			CubismMotionQueueEntry.prototype.setIsAvailable = function (v) {
				this._available = v;
			};
			CubismMotionQueueEntry.prototype.setState = function (timeSeconds, weight) {
				this._stateTimeSeconds = timeSeconds;
				this._stateWeight = weight;
			};
			CubismMotionQueueEntry.prototype.getStateTime = function () {
				return this._stateTimeSeconds;
			};
			CubismMotionQueueEntry.prototype.getStateWeight = function () {
				return this._stateWeight;
			};
			CubismMotionQueueEntry.prototype.getLastCheckEventTime = function () {
				return this._lastEventCheckSeconds;
			};
			CubismMotionQueueEntry.prototype.setLastCheckEventTime = function (checkTime) {
				this._lastEventCheckSeconds = checkTime;
			};
			return CubismMotionQueueEntry;
		}());
		Live2DCubismFramework.CubismMotionQueueEntry = CubismMotionQueueEntry;
	})(Live2DCubismFramework);

	var CubismMotionQueueEntry = Live2DCubismFramework.CubismMotionQueueEntry;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMotionQueueManager = /** @class */ (function () {
			function CubismMotionQueueManager() {
				this._userTimeSeconds = 0.0;
				this._eventCallBack = null;
				this._eventCustomData = null;
				this._motions = new csmVector();
			}
			CubismMotionQueueManager.prototype.release = function () {
				for (var i = 0; i < this._motions.getSize(); ++i) {
					if (this._motions.at(i)) {
						this._motions.at(i).release();
						this._motions.set(i, void 0);
						this._motions.set(i, null);
					}
				}
				this._motions = null;
			};
			CubismMotionQueueManager.prototype.startMotion = function (motion, autoDelete, userTimeSeconds) {
				if (motion == null) {
					return Live2DCubismFramework.InvalidMotionQueueEntryHandleValue;
				}
				var motionQueueEntry = null;
				for (var i = 0; i < this._motions.getSize(); ++i) {
					motionQueueEntry = this._motions.at(i);
					if (motionQueueEntry == null) {
						continue;
					}
					motionQueueEntry.startFadeout(motionQueueEntry._motion.getFadeOutTime(), userTimeSeconds);
				}
				motionQueueEntry = new CubismMotionQueueEntry();
				motionQueueEntry._autoDelete = autoDelete;
				motionQueueEntry._motion = motion;
				this._motions.pushBack(motionQueueEntry);
				return motionQueueEntry._motionQueueEntryHandle;
			};
			CubismMotionQueueManager.prototype.isFinished = function () {
				for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
					var motionQueueEntry = ite.ptr();
					if (motionQueueEntry == null) {
						ite = this._motions.erase(ite);
						continue;
					}
					var motion = motionQueueEntry._motion;
					if (motion == null) {
						motionQueueEntry.release();
						motionQueueEntry = void 0;
						motionQueueEntry = null;
						ite = this._motions.erase(ite);
						continue;
					}
					if (!motionQueueEntry.isFinished()) {
						return false;
					}
					else {
						ite.preIncrement();
					}
				}
				return true;
			};
			CubismMotionQueueManager.prototype.isFinishedByHandle = function (motionQueueEntryNumber) {
				for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.increment()) {
					var motionQueueEntry = ite.ptr();
					if (motionQueueEntry == null) {
						continue;
					}
					if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber &&
						!motionQueueEntry.isFinished()) {
						return false;
					}
				}
				return true;
			};
			CubismMotionQueueManager.prototype.stopAllMotions = function () {
				for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
					var motionQueueEntry = ite.ptr();
					if (motionQueueEntry == null) {
						ite = this._motions.erase(ite);
						continue;
					}
					motionQueueEntry.release();
					motionQueueEntry = void 0;
					motionQueueEntry = null;
					ite = this._motions.erase(ite);
				}
			};
			CubismMotionQueueManager.prototype.getCubismMotionQueueEntry = function (motionQueueEntryNumber) {
				for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.preIncrement()) {
					var motionQueueEntry = ite.ptr();
					if (motionQueueEntry == null) {
						continue;
					}
					if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber) {
						return motionQueueEntry;
					}
				}
				return null;
			};
			CubismMotionQueueManager.prototype.setEventCallback = function (callback, customData) {
				if (customData === void 0) { customData = null; }
				this._eventCallBack = callback;
				this._eventCustomData = customData;
			};
			CubismMotionQueueManager.prototype.doUpdateMotion = function (model, userTimeSeconds) {
				var updated = false;
				for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
					var motionQueueEntry = ite.ptr();
					if (motionQueueEntry == null) {
						ite = this._motions.erase(ite);
						continue;
					}
					var motion = motionQueueEntry._motion;
					if (motion == null) {
						motionQueueEntry.release();
						motionQueueEntry = void 0;
						motionQueueEntry = null;
						ite = this._motions.erase(ite);
						continue;
					}
					motion._isLoop = model._isLoop
					motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
					updated = true;
					var firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventTime() -
						motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
					for (var i = 0; i < firedList.getSize(); ++i) {
						this._eventCallBack(this, firedList.at(i), this._eventCustomData);
					}
					motionQueueEntry.setLastCheckEventTime(userTimeSeconds);
					if (motionQueueEntry.isFinished()) {
						motionQueueEntry.release();
						motionQueueEntry = void 0;
						motionQueueEntry = null;
						ite = this._motions.erase(ite);
					}
					else {
						ite.preIncrement();
					}
				}
				return updated;
			};
			return CubismMotionQueueManager;
		}());
		Live2DCubismFramework.CubismMotionQueueManager = CubismMotionQueueManager;
		Live2DCubismFramework.InvalidMotionQueueEntryHandleValue = -1;
	})(Live2DCubismFramework);
	var CubismMotionQueueManager = Live2DCubismFramework.CubismMotionQueueManager;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMotionManager = /** @class */ (function (_super) {
			__extends(CubismMotionManager, _super);
			function CubismMotionManager() {
				var _this = _super.call(this) || this;
				_this._currentPriority = 0;
				_this._reservePriority = 0;
				return _this;
			}
			CubismMotionManager.prototype.getCurrentPriority = function () {
				return this._currentPriority;
			};
			CubismMotionManager.prototype.getReservePriority = function () {
				return this._reservePriority;
			};
			CubismMotionManager.prototype.setReservePriority = function (val) {
				this._reservePriority = val;
			};
			CubismMotionManager.prototype.startMotionPriority = function (motion, autoDelete, priority) {
				if (priority == this._reservePriority) {
					this._reservePriority = 0;
				}
				this._currentPriority = priority; 
				return _super.prototype.startMotion.call(this, motion, autoDelete, this._userTimeSeconds);
			};
			CubismMotionManager.prototype.updateMotion = function (model, deltaTimeSeconds) {
				this._userTimeSeconds += deltaTimeSeconds;
				var updated = _super.prototype.doUpdateMotion.call(this, model, this._userTimeSeconds);
				if (this.isFinished()) {
					this._currentPriority = 0; 
				}
				return updated;
			};
			CubismMotionManager.prototype.reserveMotion = function (priority) {
				if (priority <= this._reservePriority ||
					priority <= this._currentPriority) {
					return false;
				}
				this._reservePriority = priority;
				return true;
			};
			return CubismMotionManager;
		}(CubismMotionQueueManager));
		Live2DCubismFramework.CubismMotionManager = CubismMotionManager;
	})(Live2DCubismFramework);
	
	var CubismVector2 = Live2DCubismFramework.CubismVector2;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismPhysicsTargetType;
		(function (CubismPhysicsTargetType) {
			CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter";
		})(CubismPhysicsTargetType = Live2DCubismFramework.CubismPhysicsTargetType || (Live2DCubismFramework.CubismPhysicsTargetType = {}));
		var CubismPhysicsSource;
		(function (CubismPhysicsSource) {
			CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
			CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
			CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle"; // 角度から
		})(CubismPhysicsSource = Live2DCubismFramework.CubismPhysicsSource || (Live2DCubismFramework.CubismPhysicsSource = {}));
		var PhysicsJsonEffectiveForces = /** @class */ (function () {
			function PhysicsJsonEffectiveForces() {
				this.gravity = new CubismVector2(0, 0);
				this.wind = new CubismVector2(0, 0);
			}
			return PhysicsJsonEffectiveForces;
		}());
		Live2DCubismFramework.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
		var CubismPhysicsParameter = /** @class */ (function () {
			function CubismPhysicsParameter() {
			}
			return CubismPhysicsParameter;
		}());
		Live2DCubismFramework.CubismPhysicsParameter = CubismPhysicsParameter;
		var CubismPhysicsNormalization = /** @class */ (function () {
			function CubismPhysicsNormalization() {
			}
			return CubismPhysicsNormalization;
		}());
		Live2DCubismFramework.CubismPhysicsNormalization = CubismPhysicsNormalization;
		var CubismPhysicsParticle = /** @class */ (function () {
			function CubismPhysicsParticle() {
				this.initialPosition = new CubismVector2(0, 0);
				this.position = new CubismVector2(0, 0);
				this.lastPosition = new CubismVector2(0, 0);
				this.lastGravity = new CubismVector2(0, 0);
				this.force = new CubismVector2(0, 0);
				this.velocity = new CubismVector2(0, 0);
			}
			return CubismPhysicsParticle;
		}());
		Live2DCubismFramework.CubismPhysicsParticle = CubismPhysicsParticle;
		var CubismPhysicsSubRig = /** @class */ (function () {
			function CubismPhysicsSubRig() {
				this.normalizationPosition = new CubismPhysicsNormalization();
				this.normalizationAngle = new CubismPhysicsNormalization();
			}
			return CubismPhysicsSubRig;
		}());
		Live2DCubismFramework.CubismPhysicsSubRig = CubismPhysicsSubRig;
		var CubismPhysicsInput = /** @class */ (function () {
			function CubismPhysicsInput() {
				this.source = new CubismPhysicsParameter();
			}
			return CubismPhysicsInput;
		}());
		Live2DCubismFramework.CubismPhysicsInput = CubismPhysicsInput;
		var CubismPhysicsOutput = /** @class */ (function () {
			function CubismPhysicsOutput() {
				this.destination = new CubismPhysicsParameter();
				this.translationScale = new CubismVector2(0, 0);
			}
			return CubismPhysicsOutput;
		}());
		Live2DCubismFramework.CubismPhysicsOutput = CubismPhysicsOutput;
		var CubismPhysicsRig = /** @class */ (function () {
			function CubismPhysicsRig() {
				this.settings = new csmVector();
				this.inputs = new csmVector();
				this.outputs = new csmVector();
				this.particles = new csmVector();
				this.gravity = new CubismVector2(0, 0);
				this.wind = new CubismVector2(0, 0);
			}
			return CubismPhysicsRig;
		}());
		Live2DCubismFramework.CubismPhysicsRig = CubismPhysicsRig;
	})(Live2DCubismFramework);
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismVector2 = Live2DCubismFramework.CubismVector2;
	var CubismJson = Live2DCubismFramework.CubismJson;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var Position = 'Position';
		var X = 'X';
		var Y = 'Y';
		var Angle = 'Angle';
		var Type = 'Type';
		var Id = 'Id';
		var Meta = 'Meta';
		var EffectiveForces = 'EffectiveForces';
		var TotalInputCount = 'TotalInputCount';
		var TotalOutputCount = 'TotalOutputCount';
		var PhysicsSettingCount = 'PhysicsSettingCount';
		var Gravity = 'Gravity';
		var Wind = 'Wind';
		var VertexCount = 'VertexCount';
		var PhysicsSettings = 'PhysicsSettings';
		var Normalization = 'Normalization';
		var Minimum = 'Minimum';
		var Maximum = 'Maximum';
		var Default = 'Default';
		var Reflect = 'Reflect';
		var Weight = 'Weight';
		var Input = 'Input';
		var Source = 'Source';
		var Output = 'Output';
		var Scale = 'Scale';
		var VertexIndex = 'VertexIndex';
		var Destination = 'Destination';
		var Vertices = 'Vertices';
		var Mobility = 'Mobility';
		var Delay = 'Delay';
		var Radius = 'Radius';
		var Acceleration = 'Acceleration';
		var CubismPhysicsJson = /** @class */ (function () {
			function CubismPhysicsJson(buffer, size) {
				this._json = CubismJson.create(buffer, size);
			}
			CubismPhysicsJson.prototype.release = function () {
				CubismJson.delete(this._json);
			};
			CubismPhysicsJson.prototype.getGravity = function () {
				var ret = new CubismVector2(0, 0);
				ret.x = this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(EffectiveForces)
					.getValueByString(Gravity)
					.getValueByString(X)
					.toFloat();
				ret.y = this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(EffectiveForces)
					.getValueByString(Gravity)
					.getValueByString(Y)
					.toFloat();
				return ret;
			};
			CubismPhysicsJson.prototype.getWind = function () {
				var ret = new CubismVector2(0, 0);
				ret.x = this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(EffectiveForces)
					.getValueByString(Wind)
					.getValueByString(X)
					.toFloat();
				ret.y = this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(EffectiveForces)
					.getValueByString(Wind)
					.getValueByString(Y)
					.toFloat();
				return ret;
			};
			CubismPhysicsJson.prototype.getSubRigCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(PhysicsSettingCount)
					.toInt();
			};
			CubismPhysicsJson.prototype.getTotalInputCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(TotalInputCount)
					.toInt();
			};
			CubismPhysicsJson.prototype.getTotalOutputCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(TotalOutputCount)
					.toInt();
			};
			CubismPhysicsJson.prototype.getVertexCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(VertexCount)
					.toInt();
			};
			CubismPhysicsJson.prototype.getNormalizationPositionMinimumValue = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Normalization)
					.getValueByString(Position)
					.getValueByString(Minimum)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getNormalizationPositionMaximumValue = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Normalization)
					.getValueByString(Position)
					.getValueByString(Maximum)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getNormalizationPositionDefaultValue = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Normalization)
					.getValueByString(Position)
					.getValueByString(Default)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getNormalizationAngleMinimumValue = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Normalization)
					.getValueByString(Angle)
					.getValueByString(Minimum)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getNormalizationAngleMaximumValue = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Normalization)
					.getValueByString(Angle)
					.getValueByString(Maximum)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getNormalizationAngleDefaultValue = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Normalization)
					.getValueByString(Angle)
					.getValueByString(Default)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getInputCount = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Input)
					.getVector()
					.getSize();
			};
			CubismPhysicsJson.prototype.getInputWeight = function (physicsSettingIndex, inputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Input)
					.getValueByIndex(inputIndex)
					.getValueByString(Weight)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getInputReflect = function (physicsSettingIndex, inputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Input)
					.getValueByIndex(inputIndex)
					.getValueByString(Reflect)
					.toBoolean();
			};
			CubismPhysicsJson.prototype.getInputType = function (physicsSettingIndex, inputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Input)
					.getValueByIndex(inputIndex)
					.getValueByString(Type)
					.getRawString();
			};
			CubismPhysicsJson.prototype.getInputSourceId = function (physicsSettingIndex, inputIndex) {
				return CubismFramework.getIdManager().getId(this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Input)
					.getValueByIndex(inputIndex)
					.getValueByString(Source)
					.getValueByString(Id)
					.getRawString());
			};
			CubismPhysicsJson.prototype.getOutputCount = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getVector()
					.getSize();
			};
			CubismPhysicsJson.prototype.getOutputVertexIndex = function (physicsSettingIndex, outputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getValueByIndex(outputIndex)
					.getValueByString(VertexIndex)
					.toInt();
			};
			CubismPhysicsJson.prototype.getOutputAngleScale = function (physicsSettingIndex, outputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getValueByIndex(outputIndex)
					.getValueByString(Scale)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getOutputWeight = function (physicsSettingIndex, outputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getValueByIndex(outputIndex)
					.getValueByString(Weight)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getOutputDestinationId = function (physicsSettingIndex, outputIndex) {
				return CubismFramework.getIdManager().getId(this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getValueByIndex(outputIndex)
					.getValueByString(Destination)
					.getValueByString(Id)
					.getRawString());
			};
			CubismPhysicsJson.prototype.getOutputType = function (physicsSettingIndex, outputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getValueByIndex(outputIndex)
					.getValueByString(Type)
					.getRawString();
			};
			CubismPhysicsJson.prototype.getOutputReflect = function (physicsSettingIndex, outputIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Output)
					.getValueByIndex(outputIndex)
					.getValueByString(Reflect)
					.toBoolean();
			};
			CubismPhysicsJson.prototype.getParticleCount = function (physicsSettingIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getVector()
					.getSize();
			};
			CubismPhysicsJson.prototype.getParticleMobility = function (physicsSettingIndex, vertexIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getValueByIndex(vertexIndex)
					.getValueByString(Mobility)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getParticleDelay = function (physicsSettingIndex, vertexIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getValueByIndex(vertexIndex)
					.getValueByString(Delay)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getParticleAcceleration = function (physicsSettingIndex, vertexIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getValueByIndex(vertexIndex)
					.getValueByString(Acceleration)
					.toFloat();
			};
			CubismPhysicsJson.prototype.getParticleRadius = function (physicsSettingIndex, vertexIndex) {
				return this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getValueByIndex(vertexIndex)
					.getValueByString(Radius)
					.toInt();
			};
			CubismPhysicsJson.prototype.getParticlePosition = function (physicsSettingIndex, vertexIndex) {
				var ret = new CubismVector2(0, 0);
				ret.x = this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getValueByIndex(vertexIndex)
					.getValueByString(Position)
					.getValueByString(X)
					.toFloat();
				ret.y = this._json
					.getRoot()
					.getValueByString(PhysicsSettings)
					.getValueByIndex(physicsSettingIndex)
					.getValueByString(Vertices)
					.getValueByIndex(vertexIndex)
					.getValueByString(Position)
					.getValueByString(Y)
					.toFloat();
				return ret;
			};
			return CubismPhysicsJson;
		}());
		Live2DCubismFramework.CubismPhysicsJson = CubismPhysicsJson;
	})(Live2DCubismFramework);
	var CubismPhysicsJson = Live2DCubismFramework.CubismPhysicsJson;
	var CubismMath = Live2DCubismFramework.CubismMath;
	var CubismPhysicsRig = Live2DCubismFramework.CubismPhysicsRig;
	var CubismPhysicsSubRig = Live2DCubismFramework.CubismPhysicsSubRig;
	var CubismPhysicsInput = Live2DCubismFramework.CubismPhysicsInput;
	var CubismPhysicsOutput = Live2DCubismFramework.CubismPhysicsOutput;
	var CubismPhysicsParticle = Live2DCubismFramework.CubismPhysicsParticle;
	var CubismPhysicsSource = Live2DCubismFramework.CubismPhysicsSource;
	var CubismPhysicsTargetType = Live2DCubismFramework.CubismPhysicsTargetType;
	var CubismVector2 = Live2DCubismFramework.CubismVector2;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var PhysicsTypeTagX = 'X';
		var PhysicsTypeTagY = 'Y';
		var PhysicsTypeTagAngle = 'Angle';
		var AirResistance = 5.0;
		var MaximumWeight = 100.0;
		var MovementThreshold = 0.001;
		var CubismPhysics = /** @class */ (function () {
			function CubismPhysics() {
				this._physicsRig = null;
				this._options = new Options();
				this._options.gravity.y = -1.0;
				this._options.gravity.x = 0;
				this._options.wind.x = 0;
				this._options.wind.y = 0;
			}
			CubismPhysics.create = function (buffer, size) {
				var ret = new CubismPhysics();
				ret.parse(buffer, size);
				ret._physicsRig.gravity.y = 0;
				return ret;
			};
			CubismPhysics.delete = function (physics) {
				if (physics != null) {
					physics.release();
					physics = null;
				}
			};
			CubismPhysics.prototype.evaluate = function (model, deltaTimeSeconds) {
				var totalAngle;
				var weight;
				var radAngle;
				var outputValue;
				var totalTranslation = new CubismVector2();
				var currentSetting;
				var currentInput;
				var currentOutput;
				var currentParticles;
				var parameterValue;
				var parameterMaximumValue;
				var parameterMinimumValue;
				var parameterDefaultValue;
				parameterValue = model.getModel().parameters.values;
				parameterMaximumValue = model.getModel().parameters.maximumValues;
				parameterMinimumValue = model.getModel().parameters.minimumValues;
				parameterDefaultValue = model.getModel().parameters.defaultValues;
				for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
					totalAngle = { angle: 0.0 };
					totalTranslation.x = 0.0;
					totalTranslation.y = 0.0;
					currentSetting = this._physicsRig.settings.at(settingIndex);
					currentInput = this._physicsRig.inputs.get(currentSetting.baseInputIndex);
					currentOutput = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
					currentParticles = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
					for (var i = 0; i < currentSetting.inputCount; ++i) {
						weight = currentInput[i].weight / MaximumWeight;
						if (currentInput[i].sourceParameterIndex == -1) {
							currentInput[i].sourceParameterIndex = model.getParameterIndex(currentInput[i].source.id);
						}
						currentInput[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValue[currentInput[i].sourceParameterIndex], parameterMinimumValue[currentInput[i].sourceParameterIndex], parameterMaximumValue[currentInput[i].sourceParameterIndex], parameterDefaultValue[currentInput[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInput[0].reflect, weight);
					}
					radAngle = CubismMath.degreesToRadian(-totalAngle.angle);
					totalTranslation.x =
						totalTranslation.x * CubismMath.cos(radAngle) -
							totalTranslation.y * CubismMath.sin(radAngle);
					totalTranslation.y =
						totalTranslation.x * CubismMath.sin(radAngle) +
							totalTranslation.y * CubismMath.cos(radAngle);
					updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, deltaTimeSeconds, AirResistance);
					for (var i = 0; i < currentSetting.outputCount; ++i) {
						var particleIndex = currentOutput[i].vertexIndex;
						if (particleIndex < 1 ||
							particleIndex >= currentSetting.particleCount) {
							break;
						}
						if (currentOutput[i].destinationParameterIndex == -1) {
							currentOutput[i].destinationParameterIndex = model.getParameterIndex(currentOutput[i].destination.id);
						}
						var translation = new CubismVector2();
						translation.x =
							currentParticles[particleIndex].position.x -
								currentParticles[particleIndex - 1].position.x;
						translation.y =
							currentParticles[particleIndex].position.y -
								currentParticles[particleIndex - 1].position.y;
						outputValue = currentOutput[i].getValue(translation, currentParticles, particleIndex, currentOutput[i].reflect, this._options.gravity);
						var destinationParameterIndex = currentOutput[i].destinationParameterIndex;
						var outParameterValue = !Float32Array.prototype.slice &&
							'subarray' in Float32Array.prototype
							? JSON.parse(JSON.stringify(parameterValue.subarray(destinationParameterIndex)))
							: parameterValue.slice(destinationParameterIndex);
						updateOutputParameterValue(outParameterValue, parameterMinimumValue[destinationParameterIndex], parameterMaximumValue[destinationParameterIndex], outputValue, currentOutput[i]);
						for (var offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValue.length; offset++, outParamIndex++) {
							parameterValue[offset] = outParameterValue[outParamIndex];
						}
					}
				}
			};
			CubismPhysics.prototype.setOptions = function (options) {
				this._options = options;
			};
			CubismPhysics.prototype.getOption = function () {
				return this._options;
			};
			CubismPhysics.prototype.release = function () {
				this._physicsRig = void 0;
				this._physicsRig = null;
			};
			CubismPhysics.prototype.parse = function (physicsJson, size) {
				this._physicsRig = new CubismPhysicsRig();
				var json = new CubismPhysicsJson(physicsJson, size);
				this._physicsRig.gravity = json.getGravity();
				this._physicsRig.wind = json.getWind();
				this._physicsRig.subRigCount = json.getSubRigCount();
				this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, CubismPhysicsSubRig, true);
				this._physicsRig.inputs.updateSize(json.getTotalInputCount(), CubismPhysicsInput, true);
				this._physicsRig.outputs.updateSize(json.getTotalOutputCount(), CubismPhysicsOutput, true);
				this._physicsRig.particles.updateSize(json.getVertexCount(), CubismPhysicsParticle, true);
				var inputIndex = 0, outputIndex = 0, particleIndex = 0;
				for (var i = 0; i < this._physicsRig.settings.getSize(); ++i) {
					this._physicsRig.settings.at(i).normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
					this._physicsRig.settings.at(i).normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
					this._physicsRig.settings.at(i).normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
					this._physicsRig.settings.at(i).normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
					this._physicsRig.settings.at(i).normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
					this._physicsRig.settings.at(i).normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
					// Input
					this._physicsRig.settings.at(i).inputCount = json.getInputCount(i);
					this._physicsRig.settings.at(i).baseInputIndex = inputIndex;
					for (var j = 0; j < this._physicsRig.settings.at(i).inputCount; ++j) {
						this._physicsRig.inputs.at(inputIndex + j).sourceParameterIndex = -1;
						this._physicsRig.inputs.at(inputIndex + j).weight = json.getInputWeight(i, j);
						this._physicsRig.inputs.at(inputIndex + j).reflect = json.getInputReflect(i, j);
						if (json.getInputType(i, j) == PhysicsTypeTagX) {
							this._physicsRig.inputs.at(inputIndex + j).type =
								CubismPhysicsSource.CubismPhysicsSource_X;
							this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
						}
						else if (json.getInputType(i, j) == PhysicsTypeTagY) {
							this._physicsRig.inputs.at(inputIndex + j).type =
								CubismPhysicsSource.CubismPhysicsSource_Y;
							this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
						}
						else if (json.getInputType(i, j) == PhysicsTypeTagAngle) {
							this._physicsRig.inputs.at(inputIndex + j).type =
								CubismPhysicsSource.CubismPhysicsSource_Angle;
							this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
						}
						this._physicsRig.inputs.at(inputIndex + j).source.targetType =
							CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
						this._physicsRig.inputs.at(inputIndex + j).source.id = json.getInputSourceId(i, j);
					}
					inputIndex += this._physicsRig.settings.at(i).inputCount;
					// Output
					this._physicsRig.settings.at(i).outputCount = json.getOutputCount(i);
					this._physicsRig.settings.at(i).baseOutputIndex = outputIndex;
					for (var j = 0; j < this._physicsRig.settings.at(i).outputCount; ++j) {
						this._physicsRig.outputs.at(outputIndex + j).destinationParameterIndex = -1;
						this._physicsRig.outputs.at(outputIndex + j).vertexIndex = json.getOutputVertexIndex(i, j);
						this._physicsRig.outputs.at(outputIndex + j).angleScale = json.getOutputAngleScale(i, j);
						this._physicsRig.outputs.at(outputIndex + j).weight = json.getOutputWeight(i, j);
						this._physicsRig.outputs.at(outputIndex + j).destination.targetType =
							CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
						this._physicsRig.outputs.at(outputIndex + j).destination.id = json.getOutputDestinationId(i, j);
						if (json.getOutputType(i, j) == PhysicsTypeTagX) {
							this._physicsRig.outputs.at(outputIndex + j).type =
								CubismPhysicsSource.CubismPhysicsSource_X;
							this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationX;
							this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationX;
						}
						else if (json.getOutputType(i, j) == PhysicsTypeTagY) {
							this._physicsRig.outputs.at(outputIndex + j).type =
								CubismPhysicsSource.CubismPhysicsSource_Y;
							this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationY;
							this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationY;
						}
						else if (json.getOutputType(i, j) == PhysicsTypeTagAngle) {
							this._physicsRig.outputs.at(outputIndex + j).type =
								CubismPhysicsSource.CubismPhysicsSource_Angle;
							this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputAngle;
							this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleAngle;
						}
						this._physicsRig.outputs.at(outputIndex + j).reflect = json.getOutputReflect(i, j);
					}
					outputIndex += this._physicsRig.settings.at(i).outputCount;
					// Particle
					this._physicsRig.settings.at(i).particleCount = json.getParticleCount(i);
					this._physicsRig.settings.at(i).baseParticleIndex = particleIndex;
					for (var j = 0; j < this._physicsRig.settings.at(i).particleCount; ++j) {
						this._physicsRig.particles.at(particleIndex + j).mobility = json.getParticleMobility(i, j);
						this._physicsRig.particles.at(particleIndex + j).delay = json.getParticleDelay(i, j);
						this._physicsRig.particles.at(particleIndex + j).acceleration = json.getParticleAcceleration(i, j);
						this._physicsRig.particles.at(particleIndex + j).radius = json.getParticleRadius(i, j);
						this._physicsRig.particles.at(particleIndex + j).position = json.getParticlePosition(i, j);
					}
					particleIndex += this._physicsRig.settings.at(i).particleCount;
				}
				this.initialize();
				json.release();
				json = void 0;
				json = null;
			};
			CubismPhysics.prototype.initialize = function () {
				var strand;
				var currentSetting;
				var radius;
				for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
					currentSetting = this._physicsRig.settings.at(settingIndex);
					strand = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
					strand[0].initialPosition = new CubismVector2(0.0, 0.0);
					strand[0].lastPosition = new CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
					strand[0].lastGravity = new CubismVector2(0.0, -1.0);
					strand[0].lastGravity.y *= -1.0;
					strand[0].velocity = new CubismVector2(0.0, 0.0);
					strand[0].force = new CubismVector2(0.0, 0.0);
					for (var i = 1; i < currentSetting.particleCount; ++i) {
						radius = new CubismVector2(0.0, 0.0);
						radius.y = strand[i].radius;
						strand[i].initialPosition = new CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
						strand[i].position = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
						strand[i].lastPosition = new CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
						strand[i].lastGravity = new CubismVector2(0.0, -1.0);
						strand[i].lastGravity.y *= -1.0;
						strand[i].velocity = new CubismVector2(0.0, 0.0);
						strand[i].force = new CubismVector2(0.0, 0.0);
					}
				}
			};
			return CubismPhysics;
		}());
		Live2DCubismFramework.CubismPhysics = CubismPhysics;
		var Options = /** @class */ (function () {
			function Options() {
				this.gravity = new CubismVector2(0, 0);
				this.wind = new CubismVector2(0, 0);
			}
			return Options;
		}());
		Live2DCubismFramework.Options = Options;
		function sign(value) {
			var ret = 0;
			if (value > 0.0) {
				ret = 1;
			}
			else if (value < 0.0) {
				ret = -1;
			}
			return ret;
		}
		function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
			targetTranslation.x +=
				normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
		}
		function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
			targetTranslation.y +=
				normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
		}
		function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
			targetAngle.angle +=
				normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
		}
		function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
			var outputValue = translation.x;
			if (isInverted) {
				outputValue *= -1.0;
			}
			return outputValue;
		}
		function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
			var outputValue = translation.y;
			if (isInverted) {
				outputValue *= -1.0;
			}
			return outputValue;
		}
		function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
			var outputValue;
			if (particleIndex >= 2) {
				parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
			}
			else {
				parentGravity = parentGravity.multiplyByScaler(-1.0);
			}
			outputValue = CubismMath.directionToRadian(parentGravity, translation);
			if (isInverted) {
				outputValue *= -1.0;
			}
			return outputValue;
		}
		function getRangeValue(min, max) {
			var maxValue = CubismMath.max(min, max);
			var minValue = CubismMath.min(min, max);
			return CubismMath.abs(maxValue - minValue);
		}
		function getDefaultValue(min, max) {
			var minValue = CubismMath.min(min, max);
			return minValue + getRangeValue(min, max) / 2.0;
		}
		function getOutputScaleTranslationX(translationScale, angleScale) {
			return JSON.parse(JSON.stringify(translationScale.x));
		}
		function getOutputScaleTranslationY(translationScale, angleScale) {
			return JSON.parse(JSON.stringify(translationScale.y));
		}
		function getOutputScaleAngle(translationScale, angleScale) {
			return JSON.parse(JSON.stringify(angleScale));
		}
		function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
			var totalRadian;
			var delay;
			var radian;
			var currentGravity;
			var direction = new CubismVector2(0.0, 0.0);
			var velocity = new CubismVector2(0.0, 0.0);
			var force = new CubismVector2(0.0, 0.0);
			var newDirection = new CubismVector2(0.0, 0.0);
			strand[0].position = new CubismVector2(totalTranslation.x, totalTranslation.y);
			totalRadian = CubismMath.degreesToRadian(totalAngle);
			currentGravity = CubismMath.radianToDirection(totalRadian);
			currentGravity.normalize();
			for (var i = 1; i < strandCount; ++i) {
				strand[i].force = currentGravity
					.multiplyByScaler(strand[i].acceleration)
					.add(windDirection);
				strand[i].lastPosition = new CubismVector2(strand[i].position.x, strand[i].position.y);
				delay = strand[i].delay * deltaTimeSeconds * 30.0;
				direction = strand[i].position.substract(strand[i - 1].position);
				radian =
					CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) /
						airResistance;
				direction.x =
					CubismMath.cos(radian) * direction.x -
						direction.y * CubismMath.sin(radian);
				direction.y =
					CubismMath.sin(radian) * direction.x +
						direction.y * CubismMath.cos(radian);
				strand[i].position = strand[i - 1].position.add(direction);
				velocity = strand[i].velocity.multiplyByScaler(delay);
				force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
				strand[i].position = strand[i].position.add(velocity).add(force);
				newDirection = strand[i].position.substract(strand[i - 1].position);
				newDirection.normalize();
				strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
				if (CubismMath.abs(strand[i].position.x) < thresholdValue) {
					strand[i].position.x = 0.0;
				}
				if (delay != 0.0) {
					strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
					strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
					strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
				}
				strand[i].force = new CubismVector2(0.0, 0.0);
				strand[i].lastGravity = new CubismVector2(currentGravity.x, currentGravity.y);
			}
		}
		function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
			var outputScale;
			var value;
			var weight;
			outputScale = output.getScale(output.translationScale, output.angleScale);
			value = translation * outputScale;
			if (value < parameterValueMinimum) {
				if (value < output.valueBelowMinimum) {
					output.valueBelowMinimum = value;
				}
				value = parameterValueMinimum;
			}
			else if (value > parameterValueMaximum) {
				if (value > output.valueExceededMaximum) {
					output.valueExceededMaximum = value;
				}
				value = parameterValueMaximum;
			}
			weight = output.weight / MaximumWeight;
			if (weight >= 1.0) {
				parameterValue[0] = value;
			}
			else {
				value = parameterValue[0] * (1.0 - weight) + value * weight;
				parameterValue[0] = value;
			}
		}
		function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
			var result = 0.0;
			var maxValue = CubismMath.max(parameterMaximum, parameterMinimum);
			if (maxValue < value) {
				value = maxValue;
			}
			var minValue = CubismMath.min(parameterMaximum, parameterMinimum);
			if (minValue > value) {
				value = minValue;
			}
			var minNormValue = CubismMath.min(normalizedMinimum, normalizedMaximum);
			var maxNormValue = CubismMath.max(normalizedMinimum, normalizedMaximum);
			var middleNormValue = normalizedDefault;
			var middleValue = getDefaultValue(minValue, maxValue);
			var paramValue = value - middleValue;
			switch (sign(paramValue)) {
				case 1: {
					var nLength = maxNormValue - middleNormValue;
					var pLength = maxValue - middleValue;
					if (pLength != 0.0) {
						result = paramValue * (nLength / pLength);
						result += middleNormValue;
					}
					break;
				}
				case -1: {
					var nLength = minNormValue - middleNormValue;
					var pLength = minValue - middleValue;
					if (pLength != 0.0) {
						result = paramValue * (nLength / pLength);
						result += middleNormValue;
					}
					break;
				}
				case 0: {
					result = middleNormValue;
					break;
				}
				default: {
					break;
				}
			}
			return isInverted ? result : result * -1.0;
		}
	})(Live2DCubismFramework);
	var CubismMath = Live2DCubismFramework.CubismMath;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var ACubismMotion = /** @class */ (function () {
			function ACubismMotion() {
				var _this = this;
				this.setFinishedMotionHandler = function (onFinishedMotionHandler) { return (_this._onFinishedMotion = onFinishedMotionHandler); };
				this.getFinishedMotionHandler = function () { return _this._onFinishedMotion; };
				this._fadeInSeconds = -1.0;
				this._fadeOutSeconds = -1.0;
				this._weight = 1.0;
				this._offsetSeconds = 0.0;
				this._firedEventValues = new csmVector();
			}
			ACubismMotion.delete = function (motion) {
				motion.release();
				motion = void 0;
				motion = null;
			};
			ACubismMotion.prototype.release = function () {
				this._weight = 0.0;
			};
			ACubismMotion.prototype.updateParameters = function (model, motionQueueEntry, userTimeSeconds) {
				if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
					return;
				}
				if (!motionQueueEntry.isStarted()) {
					motionQueueEntry.setIsStarted(true);
					motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds);
					motionQueueEntry.setFadeInStartTime(userTimeSeconds);
					var duration = this.getDuration();
					if (motionQueueEntry.getEndTime() < 0) {
						motionQueueEntry.setEndTime(duration <= 0 ? -1 : motionQueueEntry.getStartTime() + duration);
					}
				}
				var fadeWeight = this._weight;
				var fadeIn = this._fadeInSeconds == 0.0
					? 1.0
					: CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
						this._fadeInSeconds);
				var fadeOut = this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0
					? 1.0
					: CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
						this._fadeOutSeconds);
				fadeWeight = fadeWeight * fadeIn * fadeOut;
				motionQueueEntry.setState(userTimeSeconds, fadeWeight);
				CSM_ASSERT(0.0 <= fadeWeight && fadeWeight <= 1.0);
				this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
				if (motionQueueEntry.getEndTime() > 0 &&
					motionQueueEntry.getEndTime() < userTimeSeconds) {
					motionQueueEntry.setIsFinished(true); // 終了
				}
			};
			ACubismMotion.prototype.setFadeInTime = function (fadeInSeconds) {
				this._fadeInSeconds = fadeInSeconds;
			};
			ACubismMotion.prototype.setFadeOutTime = function (fadeOutSeconds) {
				this._fadeOutSeconds = fadeOutSeconds;
			};
			ACubismMotion.prototype.getFadeOutTime = function () {
				return this._fadeOutSeconds;
			};
			ACubismMotion.prototype.getFadeInTime = function () {
				return this._fadeInSeconds;
			};
			ACubismMotion.prototype.setWeight = function (weight) {
				this._weight = weight;
			};
			ACubismMotion.prototype.getWeight = function () {
				return this._weight;
			};
			ACubismMotion.prototype.getDuration = function () {
				return -1.0;
			};
			ACubismMotion.prototype.getLoopDuration = function () {
				return -1.0;
			};
			ACubismMotion.prototype.setOffsetTime = function (offsetSeconds) {
				this._offsetSeconds = offsetSeconds;
			};
			ACubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
				return this._firedEventValues;
			};
			return ACubismMotion;
		}());
		Live2DCubismFramework.ACubismMotion = ACubismMotion;
	})(Live2DCubismFramework);
	
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismMotionCurveTarget;
		(function (CubismMotionCurveTarget) {
			CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
			CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
			CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity";
		})(CubismMotionCurveTarget = Live2DCubismFramework.CubismMotionCurveTarget || (Live2DCubismFramework.CubismMotionCurveTarget = {}));
		var CubismMotionSegmentType;
		(function (CubismMotionSegmentType) {
			CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
			CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
			CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
			CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped";
		})(CubismMotionSegmentType = Live2DCubismFramework.CubismMotionSegmentType || (Live2DCubismFramework.CubismMotionSegmentType = {}));
		var CubismMotionPoint = /** @class */ (function () {
			function CubismMotionPoint() {
				this.time = 0.0; // 時間[秒]
				this.value = 0.0; // 値
			}
			return CubismMotionPoint;
		}());
		Live2DCubismFramework.CubismMotionPoint = CubismMotionPoint;
		var CubismMotionSegment = /** @class */ (function () {
			function CubismMotionSegment() {
				this.evaluate = null;
				this.basePointIndex = 0;
				this.segmentType = 0;
			}
			return CubismMotionSegment;
		}());
		Live2DCubismFramework.CubismMotionSegment = CubismMotionSegment;
		var CubismMotionCurve = /** @class */ (function () {
			function CubismMotionCurve() {
				this.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
				this.segmentCount = 0;
				this.baseSegmentIndex = 0;
				this.fadeInTime = 0.0;
				this.fadeOutTime = 0.0;
			}
			return CubismMotionCurve;
		}());
		Live2DCubismFramework.CubismMotionCurve = CubismMotionCurve;
		var CubismMotionEvent = /** @class */ (function () {
			function CubismMotionEvent() {
				this.fireTime = 0.0;
			}
			return CubismMotionEvent;
		}());
		Live2DCubismFramework.CubismMotionEvent = CubismMotionEvent;
		var CubismMotionData = /** @class */ (function () {
			function CubismMotionData() {
				this.duration = 0.0;
				this.loop = false;
				this.curveCount = 0;
				this.eventCount = 0;
				this.fps = 0.0;
				this.curves = new csmVector();
				this.segments = new csmVector();
				this.points = new csmVector();
				this.events = new csmVector();
			}
			return CubismMotionData;
		}());
		Live2DCubismFramework.CubismMotionData = CubismMotionData;
	})(Live2DCubismFramework);
	var csmString = Live2DCubismFramework.csmString;
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismJson = Live2DCubismFramework.CubismJson;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var Meta = 'Meta';
		var Duration = 'Duration';
		var Loop = 'Loop';
		var CurveCount = 'CurveCount';
		var Fps = 'Fps';
		var TotalSegmentCount = 'TotalSegmentCount';
		var TotalPointCount = 'TotalPointCount';
		var Curves = 'Curves';
		var Target = 'Target';
		var Id = 'Id';
		var FadeInTime = 'FadeInTime';
		var FadeOutTime = 'FadeOutTime';
		var Segments = 'Segments';
		var UserData = 'UserData';
		var UserDataCount = 'UserDataCount';
		var TotalUserDataSize = 'TotalUserDataSize';
		var Time = 'Time';
		var Value = 'Value';
		var CubismMotionJson = /** @class */ (function () {
			function CubismMotionJson(buffer, size) {
				this._json = CubismJson.create(buffer, size);
			}
			CubismMotionJson.prototype.release = function () {
				CubismJson.delete(this._json);
			};
			CubismMotionJson.prototype.getMotionDuration = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(Duration)
					.toFloat();
			};
			CubismMotionJson.prototype.isMotionLoop = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(Loop)
					.toBoolean();
			};
			CubismMotionJson.prototype.getMotionCurveCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(CurveCount)
					.toInt();
			};
			CubismMotionJson.prototype.getMotionFps = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(Fps)
					.toFloat();
			};
			CubismMotionJson.prototype.getMotionTotalSegmentCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(TotalSegmentCount)
					.toInt();
			};
			CubismMotionJson.prototype.getMotionTotalPointCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(TotalPointCount)
					.toInt();
			};
			CubismMotionJson.prototype.isExistMotionFadeInTime = function () {
				return !this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(FadeInTime)
					.isNull();
			};
			CubismMotionJson.prototype.isExistMotionFadeOutTime = function () {
				return !this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(FadeOutTime)
					.isNull();
			};
			CubismMotionJson.prototype.getMotionFadeInTime = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(FadeInTime)
					.toFloat();
			};
			CubismMotionJson.prototype.getMotionFadeOutTime = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(FadeOutTime)
					.toFloat();
			};
			CubismMotionJson.prototype.getMotionCurveTarget = function (curveIndex) {
				return this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(Target)
					.getRawString();
			};
			CubismMotionJson.prototype.getMotionCurveId = function (curveIndex) {
				return CubismFramework.getIdManager().getId(this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(Id)
					.getRawString());
			};
			CubismMotionJson.prototype.isExistMotionCurveFadeInTime = function (curveIndex) {
				return !this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(FadeInTime)
					.isNull();
			};
			CubismMotionJson.prototype.isExistMotionCurveFadeOutTime = function (curveIndex) {
				return !this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(FadeOutTime)
					.isNull();
			};
			CubismMotionJson.prototype.getMotionCurveFadeInTime = function (curveIndex) {
				return this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(FadeInTime)
					.toFloat();
			};
			CubismMotionJson.prototype.getMotionCurveFadeOutTime = function (curveIndex) {
				return this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(FadeOutTime)
					.toFloat();
			};
			CubismMotionJson.prototype.getMotionCurveSegmentCount = function (curveIndex) {
				return this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(Segments)
					.getVector()
					.getSize();
			};
			CubismMotionJson.prototype.getMotionCurveSegment = function (curveIndex, segmentIndex) {
				return this._json
					.getRoot()
					.getValueByString(Curves)
					.getValueByIndex(curveIndex)
					.getValueByString(Segments)
					.getValueByIndex(segmentIndex)
					.toFloat();
			};
			CubismMotionJson.prototype.getEventCount = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(UserDataCount)
					.toInt();
			};
			CubismMotionJson.prototype.getTotalEventValueSize = function () {
				return this._json
					.getRoot()
					.getValueByString(Meta)
					.getValueByString(TotalUserDataSize)
					.toInt();
			};
			CubismMotionJson.prototype.getEventTime = function (userDataIndex) {
				return this._json
					.getRoot()
					.getValueByString(UserData)
					.getValueByIndex(userDataIndex)
					.getValueByString(Time)
					.toInt();
			};
			CubismMotionJson.prototype.getEventValue = function (userDataIndex) {
				return new csmString(this._json
					.getRoot()
					.getValueByString(UserData)
					.getValueByIndex(userDataIndex)
					.getValueByString(Value)
					.getRawString());
			};
			return CubismMotionJson;
		}());
		Live2DCubismFramework.CubismMotionJson = CubismMotionJson;
	})(Live2DCubismFramework);
	var csmString = Live2DCubismFramework.csmString;
	var CubismMotionData = Live2DCubismFramework.CubismMotionData;
	var CubismMotionSegment = Live2DCubismFramework.CubismMotionSegment;
	var CubismMotionPoint = Live2DCubismFramework.CubismMotionPoint;
	var CubismMotionEvent = Live2DCubismFramework.CubismMotionEvent;
	var CubismMotionSegmentType = Live2DCubismFramework.CubismMotionSegmentType;
	var CubismMotionCurve = Live2DCubismFramework.CubismMotionCurve;
	var CubismMotionCurveTarget = Live2DCubismFramework.CubismMotionCurveTarget;
	var CubismMath = Live2DCubismFramework.CubismMath;
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var ACubismMotion = Live2DCubismFramework.ACubismMotion;
	var CubismMotionJson = Live2DCubismFramework.CubismMotionJson;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var EffectNameEyeBlink = 'EyeBlink';
		var EffectNameLipSync = 'LipSync';
		var TargetNameModel = 'Model';
		var TargetNameParameter = 'Parameter';
		var TargetNamePartOpacity = 'PartOpacity';
		function lerpPoints(a, b, t) {
			var result = new CubismMotionPoint();
			result.time = a.time + (b.time - a.time) * t;
			result.value = a.value + (b.value - a.value) * t;
			return result;
		}
		function linearEvaluate(points, time) {
			var t = (time - points[0].time) / (points[1].time - points[0].time);
			if (t < 0.0) {
				t = 0.0;
			}
			return points[0].value + (points[1].value - points[0].value) * t;
		}
		function bezierEvaluate(points, time) {
			var t = (time - points[0].time) / (points[3].time - points[0].time);
			if (t < 0.0) {
				t = 0.0;
			}
			var p01 = lerpPoints(points[0], points[1], t);
			var p12 = lerpPoints(points[1], points[2], t);
			var p23 = lerpPoints(points[2], points[3], t);
			var p012 = lerpPoints(p01, p12, t);
			var p123 = lerpPoints(p12, p23, t);
			return lerpPoints(p012, p123, t).value;
		}
		function steppedEvaluate(points, time) {
			return points[0].value;
		}
		function inverseSteppedEvaluate(points, time) {
			return points[1].value;
		}
		function evaluateCurve(motionData, index, time) {
			var curve = motionData.curves.at(index);
			var target = -1;
			var totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
			var pointPosition = 0;
			for (var i = curve.baseSegmentIndex; i < totalSegmentCount; ++i) {
				pointPosition =
					motionData.segments.at(i).basePointIndex +
						(motionData.segments.at(i).segmentType ==
							CubismMotionSegmentType.CubismMotionSegmentType_Bezier
							? 3
							: 1);
				if (motionData.points.at(pointPosition).time > time) {
					target = i;
					break;
				}
			}
			if (target == -1) {
				return motionData.points.at(pointPosition).value;
			}
			var segment = motionData.segments.at(target);
			return segment.evaluate(motionData.points.get(segment.basePointIndex), time);
		}
		var CubismMotion = /** @class */ (function (_super) {
			__extends(CubismMotion, _super);
			function CubismMotion() {
				var _this = _super.call(this) || this;
				_this._sourceFrameRate = 30.0;
				_this._loopDurationSeconds = -1.0;
				_this._motionCount = 0;
				_this._isLoop = false;
				_this._isLoopFadeIn = true;
				_this._lastWeight = 0.0;
				_this._preStartTime = 0.0;
				_this._motionData = null;
				_this._modelCurveIdEyeBlink = null;
				_this._modelCurveIdLipSync = null;
				_this._eyeBlinkParameterIds = null;
				_this._lipSyncParameterIds = null;
				return _this;
			}
			CubismMotion.create = function (buffer, size, onFinishedMotionHandler) {
				var ret = new CubismMotion();
				ret.parse(buffer, size);
				ret._sourceFrameRate = ret._motionData.fps;
				ret._loopDurationSeconds = ret._motionData.duration;
				ret._onFinishedMotion = onFinishedMotionHandler;
				return ret;
			};
			CubismMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, fadeWeight, motionQueueEntry) {
				if (this._modelCurveIdEyeBlink == null) {
					this._modelCurveIdEyeBlink = CubismFramework.getIdManager().getId(EffectNameEyeBlink);
				}
				if (this._modelCurveIdLipSync == null) {
					this._modelCurveIdLipSync = CubismFramework.getIdManager().getId(EffectNameLipSync);
				}
				var timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
				if(model._skipMotion){
					timeOffsetSeconds = this._motionData.duration;
					model._skipMotion = false;
				}
				if (timeOffsetSeconds < 0.0) {
					timeOffsetSeconds = 0.0;
				}
				if(this._preStartTime != motionQueueEntry.getStartTime()){
					this._motionCount = 0
					this._preStartTime = motionQueueEntry.getStartTime()
				};
				this._motionCount++;
				if(this._seData && this._seData[this._motionCount]){
					AudioManager.stopSe();
					const arr = this._seData[this._motionCount];
					const se  = arr[Math.floor(Math.random()*arr.length)]
					AudioManager.playLive2dModelSe(se);
					delete this._seData[this._motionCount]
				}
				if($gameLive2d._motionCountConsole){console.log(this._motionCount)}
				
				var lipSyncValue = Number.MAX_VALUE;
				var eyeBlinkValue = Number.MAX_VALUE;
				var MaxTargetSize = 64;
				var lipSyncFlags = 0;
				var eyeBlinkFlags = 0;
				if (this._eyeBlinkParameterIds.getSize() > MaxTargetSize) {
					CubismLogDebug('too many eye blink targets : {0}', this._eyeBlinkParameterIds.getSize());
				}
				if (this._lipSyncParameterIds.getSize() > MaxTargetSize) {
					CubismLogDebug('too many lip sync targets : {0}', this._lipSyncParameterIds.getSize());
				}
				var tmpFadeIn = this._fadeInSeconds <= 0.0
					? 1.0
					: CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
						this._fadeInSeconds);
				var tmpFadeOut = this._fadeOutSeconds <= 0.0 || motionQueueEntry.getEndTime() < 0.0
					? 1.0
					: CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
						this._fadeOutSeconds);
				var value;
				var c, parameterIndex;
				var time = timeOffsetSeconds;
				
				model._motionFrameCount = time;
				
				model._syncMotionTimeModelName.forEach(name => {
					if($gameLive2d.data[name] && $gameLive2d.getModel(name)._model){
						time = $gameLive2d.getModel(name)._model._motionFrameCount;
					}
				})
				
				if (this._isLoop) {
					while (time > this._motionData.duration) {
						time -= this._motionData.duration;
						if(!model._bySyncMotionNameModelName && model.voiceSeData && model.voiceSeData[this._getGroupNoName] && this._getGroupNoName == model._getSeGroupNoName){
							this._seData = JSON.parse(JSON.stringify(model.voiceSeData[this._getGroupNoName]))
						};
					}
				}
				
				var curves = this._motionData.curves;
				for (c = 0; c < this._motionData.curveCount &&
					curves.at(c).type ==
						CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c) {
					value = evaluateCurve(this._motionData, c, time);
					if (curves.at(c).id == this._modelCurveIdEyeBlink) {
						eyeBlinkValue = value;
					}
					else if (curves.at(c).id == this._modelCurveIdLipSync) {
						lipSyncValue = value;
					}
				}
				var parameterMotionCurveCount = 0;
				for (; c < this._motionData.curveCount &&
					curves.at(c).type ==
						CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c) {
					parameterMotionCurveCount++;
					parameterIndex = model.getParameterIndex(curves.at(c).id);
					if (parameterIndex == -1) {
						continue;
					}
					var sourceValue = model.getParameterValueByIndex(parameterIndex);
					value = evaluateCurve(this._motionData, c, time);
					if (eyeBlinkValue != Number.MAX_VALUE) {
						for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
							if (this._eyeBlinkParameterIds.at(i) == curves.at(c).id) {
								value *= eyeBlinkValue;
								eyeBlinkFlags |= 1 << i;
								break;
							}
						}
					}
					if (lipSyncValue != Number.MAX_VALUE) {
						for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
							if (this._lipSyncParameterIds.at(i) == curves.at(c).id) {
								value += lipSyncValue;
								lipSyncFlags |= 1 << i;
								break;
							}
						}
					}
					var v = void 0;
					if (curves.at(c).fadeInTime < 0.0 && curves.at(c).fadeOutTime < 0.0) {
						v = sourceValue + (value - sourceValue) * fadeWeight;
					}
					else {
						var fin = void 0;
						var fout = void 0;
						if (curves.at(c).fadeInTime < 0.0) {
							fin = tmpFadeIn;
						}
						else {
							fin =
								curves.at(c).fadeInTime == 0.0
									? 1.0
									: CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
										curves.at(c).fadeInTime);
						}
						if (curves.at(c).fadeOutTime < 0.0) {
							fout = tmpFadeOut;
						}
						else {
							fout =
								curves.at(c).fadeOutTime == 0.0 ||
									motionQueueEntry.getEndTime() < 0.0
									? 1.0
									: CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
										curves.at(c).fadeOutTime);
						}
						var paramWeight = this._weight * fin * fout;
						v = sourceValue + (value - sourceValue) * paramWeight;
					}
					model.setParameterValueByIndex(parameterIndex, v, 1.0);
					if(model._bySyncMotionNameModelName){
						$gameLive2d.getModel(model._bySyncMotionNameModelName)._model.setParameterValueByIndex(parameterIndex, v, 3.0);
					}
				}
				{
					if (eyeBlinkValue != Number.MAX_VALUE) {
						for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
							var sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds.at(i));
							if ((eyeBlinkFlags >> i) & 0x01) {
								continue;
							}
							var v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
							model.setParameterValueById(this._eyeBlinkParameterIds.at(i), v);
						}
					}
					if (lipSyncValue != Number.MAX_VALUE) {
						for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
							var sourceValue = model.getParameterValueById(this._lipSyncParameterIds.at(i));
							if ((lipSyncFlags >> i) & 0x01) {
								continue;
							}
							var v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
							model.setParameterValueById(this._lipSyncParameterIds.at(i), v);
						}
					}
				}
				for (; c < this._motionData.curveCount &&
					curves.at(c).type ==
						CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c) {
					parameterIndex = model.getParameterIndex(curves.at(c).id);
					if (parameterIndex == -1) {
						continue;
					}
					value = evaluateCurve(this._motionData, c, time);
					model.setParameterValueByIndex(parameterIndex, value);
				}
				if (timeOffsetSeconds >= this._motionData.duration) {
					if (this._isLoop) {
						motionQueueEntry.setStartTime(userTimeSeconds);
						if (!this._isLoopFadeIn) {
							motionQueueEntry.setFadeInStartTime(userTimeSeconds);
						}
					}
					else {
						if (this._onFinishedMotion) {
							this._onFinishedMotion(this);
						}
						motionQueueEntry.setIsFinished(true);
					}
				}
				this._lastWeight = fadeWeight;
			};
			CubismMotion.prototype.setIsLoop = function (loop) {
				this._isLoop = loop;
			};
			CubismMotion.prototype.isLoop = function () {
				return this._isLoop;
			};
			CubismMotion.prototype.setIsLoopFadeIn = function (loopFadeIn) {
				this._isLoopFadeIn = loopFadeIn;
			};
			CubismMotion.prototype.isLoopFadeIn = function () {
				return this._isLoopFadeIn;
			};
			CubismMotion.prototype.getDuration = function () {
				return this._isLoop ? -1.0 : this._loopDurationSeconds;
			};
			CubismMotion.prototype.getLoopDuration = function () {
				return this._loopDurationSeconds;
			};
			CubismMotion.prototype.setParameterFadeInTime = function (parameterId, value) {
				var curves = this._motionData.curves;
				for (var i = 0; i < this._motionData.curveCount; ++i) {
					if (parameterId == curves.at(i).id) {
						curves.at(i).fadeInTime = value;
						return;
					}
				}
			};
			CubismMotion.prototype.setParameterFadeOutTime = function (parameterId, value) {
				var curves = this._motionData.curves;
				for (var i = 0; i < this._motionData.curveCount; ++i) {
					if (parameterId == curves.at(i).id) {
						curves.at(i).fadeOutTime = value;
						return;
					}
				}
			};
			CubismMotion.prototype.getParameterFadeInTime = function (parameterId) {
				var curves = this._motionData.curves;
				for (var i = 0; i < this._motionData.curveCount; ++i) {
					if (parameterId == curves.at(i).id) {
						return curves.at(i).fadeInTime;
					}
				}
				return -1;
			};
			CubismMotion.prototype.getParameterFadeOutTime = function (parameterId) {
				var curves = this._motionData.curves;
				for (var i = 0; i < this._motionData.curveCount; ++i) {
					if (parameterId == curves.at(i).id) {
						return curves.at(i).fadeOutTime;
					}
				}
				return -1;
			};
			CubismMotion.prototype.setEffectIds = function (eyeBlinkParameterIds, lipSyncParameterIds) {
				this._eyeBlinkParameterIds = eyeBlinkParameterIds;
				this._lipSyncParameterIds = lipSyncParameterIds;
			};
			CubismMotion.prototype.release = function () {
				this._motionData = void 0;
				this._motionData = null;
			};
			CubismMotion.prototype.parse = function (motionJson, size) {
				this._motionData = new CubismMotionData();
				var json = new CubismMotionJson(motionJson, size);
				this._motionData.duration = json.getMotionDuration();
				this._motionData.loop = json.isMotionLoop();
				this._motionData.curveCount = json.getMotionCurveCount();
				this._motionData.fps = json.getMotionFps();
				this._motionData.eventCount = json.getEventCount();
				if (json.isExistMotionFadeInTime()) {
					this._fadeInSeconds =
						json.getMotionFadeInTime() < 0.0 ? 1.0 : json.getMotionFadeInTime();
				}
				else {
					this._fadeInSeconds = 1.0;
				}
				if (json.isExistMotionFadeOutTime()) {
					this._fadeOutSeconds =
						json.getMotionFadeOutTime() < 0.0 ? 1.0 : json.getMotionFadeOutTime();
				}
				else {
					this._fadeOutSeconds = 1.0;
				}
				this._motionData.curves.updateSize(this._motionData.curveCount, CubismMotionCurve, true);
				this._motionData.segments.updateSize(json.getMotionTotalSegmentCount(), CubismMotionSegment, true);
				this._motionData.points.updateSize(json.getMotionTotalPointCount(), CubismMotionPoint, true);
				this._motionData.events.updateSize(this._motionData.eventCount, CubismMotionEvent, true);
				var totalPointCount = 0;
				var totalSegmentCount = 0;
				// Curves
				for (var curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount) {
					if (json.getMotionCurveTarget(curveCount) == TargetNameModel) {
						this._motionData.curves.at(curveCount).type =
							CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
					}
					else if (json.getMotionCurveTarget(curveCount) == TargetNameParameter) {
						this._motionData.curves.at(curveCount).type =
							CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
					}
					else if (json.getMotionCurveTarget(curveCount) == TargetNamePartOpacity) {
						this._motionData.curves.at(curveCount).type =
							CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
					}
					this._motionData.curves.at(curveCount).id = json.getMotionCurveId(curveCount);
					this._motionData.curves.at(curveCount).baseSegmentIndex = totalSegmentCount;
					this._motionData.curves.at(curveCount).fadeInTime = json.isExistMotionCurveFadeInTime(curveCount)
						? json.getMotionCurveFadeInTime(curveCount)
						: -1.0;
					this._motionData.curves.at(curveCount).fadeOutTime = json.isExistMotionCurveFadeOutTime(curveCount)
						? json.getMotionCurveFadeOutTime(curveCount)
						: -1.0;
					// Segments
					for (var segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount);) {
						if (segmentPosition == 0) {
							this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount;
							this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition);
							this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
							totalPointCount += 1;
							segmentPosition += 2;
						}
						else {
							this._motionData.segments.at(totalSegmentCount).basePointIndex =
								totalPointCount - 1;
						}
						var segment = json.getMotionCurveSegment(curveCount, segmentPosition);
						switch (segment) {
							case CubismMotionSegmentType.CubismMotionSegmentType_Linear: {
								this._motionData.segments.at(totalSegmentCount).segmentType =
									CubismMotionSegmentType.CubismMotionSegmentType_Linear;
								this._motionData.segments.at(totalSegmentCount).evaluate = linearEvaluate;
								this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
								this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
								totalPointCount += 1;
								segmentPosition += 3;
								break;
							}
							case CubismMotionSegmentType.CubismMotionSegmentType_Bezier: {
								this._motionData.segments.at(totalSegmentCount).segmentType =
									CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
								this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluate;
								this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
								this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
								this._motionData.points.at(totalPointCount + 1).time = json.getMotionCurveSegment(curveCount, segmentPosition + 3);
								this._motionData.points.at(totalPointCount + 1).value = json.getMotionCurveSegment(curveCount, segmentPosition + 4);
								this._motionData.points.at(totalPointCount + 2).time = json.getMotionCurveSegment(curveCount, segmentPosition + 5);
								this._motionData.points.at(totalPointCount + 2).value = json.getMotionCurveSegment(curveCount, segmentPosition + 6);
								totalPointCount += 3;
								segmentPosition += 7;
								break;
							}
							case CubismMotionSegmentType.CubismMotionSegmentType_Stepped: {
								this._motionData.segments.at(totalSegmentCount).segmentType =
									CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
								this._motionData.segments.at(totalSegmentCount).evaluate = steppedEvaluate;
								this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
								this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
								totalPointCount += 1;
								segmentPosition += 3;
								break;
							}
							case CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped: {
								this._motionData.segments.at(totalSegmentCount).segmentType =
									CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
								this._motionData.segments.at(totalSegmentCount).evaluate = inverseSteppedEvaluate;
								this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
								this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
								totalPointCount += 1;
								segmentPosition += 3;
								break;
							}
							default: {
								CSM_ASSERT(0);
								break;
							}
						}
						++this._motionData.curves.at(curveCount).segmentCount;
						++totalSegmentCount;
					}
				}
				for (var userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount) {
					this._motionData.events.at(userdatacount).fireTime = json.getEventTime(userdatacount);
					this._motionData.events.at(userdatacount).value = json.getEventValue(userdatacount);
				}
				json.release();
				json = void 0;
				json = null;
			};
			CubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
				this._firedEventValues.updateSize(0);
				for (var u = 0; u < this._motionData.eventCount; ++u) {
					if (this._motionData.events.at(u).fireTime > beforeCheckTimeSeconds &&
						this._motionData.events.at(u).fireTime <= motionTimeSeconds) {
						this._firedEventValues.pushBack(new csmString(this._motionData.events.at(u).value.s));
					}
				}
				return this._firedEventValues;
			};
			return CubismMotion;
		}(ACubismMotion));
		Live2DCubismFramework.CubismMotion = CubismMotion;
	})(Live2DCubismFramework);
	var CubismMatrix44 = Live2DCubismFramework.CubismMatrix44;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismRenderer = /** @class */ (function () {
			function CubismRenderer() {
				this._isCulling = false;
				this._isPremultipliedAlpha = false;
				this._anisortopy = 0.0;
				this._model = null;
				this._modelColor = new CubismTextureColor();
				this._mvpMatrix4x4 = new CubismMatrix44();
				this._mvpMatrix4x4.loadIdentity();
			}
			CubismRenderer.create = function () {
				return null;
			};
			CubismRenderer.delete = function (renderer) {
				renderer = null;
			};
			CubismRenderer.prototype.initialize = function (model) {
				this._model = model;
			};
			CubismRenderer.prototype.drawModel = function () {
				if (this.getModel() == null)
					return;
				this.doDrawModel();
			};
			CubismRenderer.prototype.setMvpMatrix = function (matrix44) {
				this._mvpMatrix4x4.setMatrix(matrix44.getArray());
			};
			CubismRenderer.prototype.getMvpMatrix = function () {
				return this._mvpMatrix4x4;
			};
			CubismRenderer.prototype.setModelColor = function (red, green, blue, alpha) {
				if (red < 0.0) {
					red = 0.0;
				}
				else if (red > 1.0) {
					red = 1.0;
				}
				if (green < 0.0) {
					green = 0.0;
				}
				else if (green > 1.0) {
					green = 1.0;
				}
				if (blue < 0.0) {
					blue = 0.0;
				}
				else if (blue > 1.0) {
					blue = 1.0;
				}
				if (alpha < 0.0) {
					alpha = 0.0;
				}
				else if (alpha > 1.0) {
					alpha = 1.0;
				}
				this._modelColor.R = red;
				this._modelColor.G = green;
				this._modelColor.B = blue;
				this._modelColor.A = alpha;
			};
			CubismRenderer.prototype.getModelColor = function () {
				return JSON.parse(JSON.stringify(this._modelColor));
			};
			CubismRenderer.prototype.setIsPremultipliedAlpha = function (enable) {
				this._isPremultipliedAlpha = enable;
			};
			CubismRenderer.prototype.isPremultipliedAlpha = function () {
				return this._isPremultipliedAlpha;
			};
			CubismRenderer.prototype.setIsCulling = function (culling) {
				this._isCulling = culling;
			};
			CubismRenderer.prototype.isCulling = function () {
				return this._isCulling;
			};
			CubismRenderer.prototype.setAnisotropy = function (n) {
				this._anisortopy = n;
			};
			CubismRenderer.prototype.getAnisotropy = function () {
				return this._anisortopy;
			};
			CubismRenderer.prototype.getModel = function () {
				return this._model;
			};
			return CubismRenderer;
		}());
		Live2DCubismFramework.CubismRenderer = CubismRenderer;
		var CubismBlendMode;
		(function (CubismBlendMode) {
			CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
			CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
			CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
		})(CubismBlendMode = Live2DCubismFramework.CubismBlendMode || (Live2DCubismFramework.CubismBlendMode = {}));
		var CubismTextureColor = /** @class */ (function () {
			function CubismTextureColor() {
				this.R = 1.0;
				this.G = 1.0;
				this.B = 1.0;
				this.A = 1.0;
			}
			return CubismTextureColor;
		}());
		Live2DCubismFramework.CubismTextureColor = CubismTextureColor;
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var csmRect = /** @class */ (function () {
			function csmRect(x, y, w, h) {
				this.x = x;
				this.y = y;
				this.width = w;
				this.height = h;
			}
			csmRect.prototype.getCenterX = function () {
				return this.x + 0.5 * this.width;
			};
			csmRect.prototype.getCenterY = function () {
				return this.y + 0.5 * this.height;
			};
			csmRect.prototype.getRight = function () {
				return this.x + this.width;
			};
			csmRect.prototype.getBottom = function () {
				return this.y + this.height;
			};
			csmRect.prototype.setRect = function (r) {
				this.x = r.x;
				this.y = r.y;
				this.width = r.width;
				this.height = r.height;
			};
			csmRect.prototype.expand = function (w, h) {
				this.x -= w;
				this.y -= h;
				this.width += w * 2.0;
				this.height += h * 2.0;
			};
			return csmRect;
		}());
		Live2DCubismFramework.csmRect = csmRect;
	})(Live2DCubismFramework);
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismJson = Live2DCubismFramework.CubismJson;
	var ACubismMotion = Live2DCubismFramework.ACubismMotion;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		// exp3.jsonのキーとデフォルト
		var ExpressionKeyFadeIn = 'FadeInTime';
		var ExpressionKeyFadeOut = 'FadeOutTime';
		var ExpressionKeyParameters = 'Parameters';
		var ExpressionKeyId = 'Id';
		var ExpressionKeyValue = 'Value';
		var ExpressionKeyBlend = 'Blend';
		var BlendValueAdd = 'Add';
		var BlendValueMultiply = 'Multiply';
		var BlendValueOverwrite = 'Overwrite';
		var DefaultFadeTime = 1.0;
		var CubismExpressionMotion = /** @class */ (function (_super) {
			__extends(CubismExpressionMotion, _super);
			function CubismExpressionMotion() {
				var _this = _super.call(this) || this;
				_this._parameters = new csmVector();
				return _this;
			}
			CubismExpressionMotion.create = function (buffer, size) {
				var expression = new CubismExpressionMotion();
				var json = CubismJson.create(buffer, size);
				var root = json.getRoot();
				expression.setFadeInTime(root.getValueByString(ExpressionKeyFadeIn).toFloat(DefaultFadeTime)); // フェードイン
				expression.setFadeOutTime(root.getValueByString(ExpressionKeyFadeOut).toFloat(DefaultFadeTime)); // フェードアウト
				var parameterCount = root
					.getValueByString(ExpressionKeyParameters)
					.getSize();
				expression._parameters.prepareCapacity(parameterCount);
				for (var i = 0; i < parameterCount; ++i) {
					var param = root
						.getValueByString(ExpressionKeyParameters)
						.getValueByIndex(i);
					var parameterId = CubismFramework.getIdManager().getId(param.getValueByString(ExpressionKeyId).getRawString()); // パラメータID
					var value = param
						.getValueByString(ExpressionKeyValue)
						.toFloat();
					var blendType = void 0;
					if (param.getValueByString(ExpressionKeyBlend).isNull() ||
						param.getValueByString(ExpressionKeyBlend).getString() ==
							BlendValueAdd) {
						blendType = ExpressionBlendType.ExpressionBlendType_Add;
					}
					else if (param.getValueByString(ExpressionKeyBlend).getString() ==
						BlendValueMultiply) {
						blendType = ExpressionBlendType.ExpressionBlendType_Multiply;
					}
					else if (param.getValueByString(ExpressionKeyBlend).getString() ==
						BlendValueOverwrite) {
						blendType = ExpressionBlendType.ExpressionBlendType_Overwrite;
					}
					else {
						blendType = ExpressionBlendType.ExpressionBlendType_Add;
					}
					var item = new ExpressionParameter();
					item.parameterId = parameterId;
					item.blendType = blendType;
					item.value = value;
					expression._parameters.pushBack(item);
				}
				CubismJson.delete(json);
				return expression;
			};
			CubismExpressionMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, weight, motionQueueEntry) {
				for (var i = 0; i < this._parameters.getSize(); ++i) {
					var parameter = this._parameters.at(i);
					switch (parameter.blendType) {
						case ExpressionBlendType.ExpressionBlendType_Add: {
							model.addParameterValueById(parameter.parameterId, parameter.value, weight);
							break;
						}
						case ExpressionBlendType.ExpressionBlendType_Multiply: {
							model.multiplyParameterValueById(parameter.parameterId, parameter.value, weight);
							break;
						}
						case ExpressionBlendType.ExpressionBlendType_Overwrite: {
							model.setParameterValueById(parameter.parameterId, parameter.value, weight);
							break;
						}
						default:
							break;
					}
				}
			};
			return CubismExpressionMotion;
		}(ACubismMotion));
		Live2DCubismFramework.CubismExpressionMotion = CubismExpressionMotion;
		var ExpressionBlendType;
		(function (ExpressionBlendType) {
			ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Add"] = 0] = "ExpressionBlendType_Add";
			ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Multiply"] = 1] = "ExpressionBlendType_Multiply";
			ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Overwrite"] = 2] = "ExpressionBlendType_Overwrite";
		})(ExpressionBlendType = Live2DCubismFramework.ExpressionBlendType || (Live2DCubismFramework.ExpressionBlendType = {}));
		var ExpressionParameter = /** @class */ (function () {
			function ExpressionParameter() {
			}
			return ExpressionParameter;
		}());
		Live2DCubismFramework.ExpressionParameter = ExpressionParameter;
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var csmPair = /** @class */ (function () {
			function csmPair(key, value) {
				this.first = key == undefined ? null : key;
				this.second = value == undefined ? null : value;
			}
			return csmPair;
		}());
		Live2DCubismFramework.csmPair = csmPair;
		var csmMap = /** @class */ (function () {
			function csmMap(size) {
				if (size != undefined) {
					if (size < 1) {
						this._keyValues = [];
						this._dummyValue = null;
						this._size = 0;
					}
					else {
						this._keyValues = new Array(size);
						this._size = size;
					}
				}
				else {
					this._keyValues = [];
					this._dummyValue = null;
					this._size = 0;
				}
			}
			csmMap.prototype.release = function () {
				this.clear();
			};
			csmMap.prototype.appendKey = function (key) {
				this.prepareCapacity(this._size + 1, false);
				this._keyValues[this._size] = new csmPair(key);
				this._size += 1;
			};
			csmMap.prototype.getValue = function (key) {
				var found = -1;
				for (var i = 0; i < this._size; i++) {
					if (this._keyValues[i].first == key) {
						found = i;
						break;
					}
				}
				if (found >= 0) {
					return this._keyValues[found].second;
				}
				else {
					this.appendKey(key);
					return this._keyValues[this._size - 1].second;
				}
			};
			csmMap.prototype.setValue = function (key, value) {
				var found = -1;
				for (var i = 0; i < this._size; i++) {
					if (this._keyValues[i].first == key) {
						found = i;
						break;
					}
				}
				if (found >= 0) {
					this._keyValues[found].second = value;
				}
				else {
					this.appendKey(key);
					this._keyValues[this._size - 1].second = value;
				}
			};
			csmMap.prototype.isExist = function (key) {
				for (var i = 0; i < this._size; i++) {
					if (this._keyValues[i].first == key) {
						return true;
					}
				}
				return false;
			};
			csmMap.prototype.clear = function () {
				this._keyValues = void 0;
				this._keyValues = null;
				this._keyValues = [];
				this._size = 0;
			};
			csmMap.prototype.getSize = function () {
				return this._size;
			};
			csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
				if (newSize > this._keyValues.length) {
					if (this._keyValues.length == 0) {
						if (!fitToSize && newSize < csmMap.DefaultSize)
							newSize = csmMap.DefaultSize;
						this._keyValues.length = newSize;
					}
					else {
						if (!fitToSize && newSize < this._keyValues.length * 2)
							newSize = this._keyValues.length * 2;
						this._keyValues.length = newSize;
					}
				}
			};
			csmMap.prototype.begin = function () {
				var ite = new iterator(this, 0);
				return ite;
			};
			csmMap.prototype.end = function () {
				var ite = new iterator(this, this._size);
				return ite;
			};
			csmMap.prototype.erase = function (ite) {
				var index = ite._index;
				if (index < 0 || this._size <= index) {
					return ite;
				}
				this._keyValues.splice(index, 1);
				--this._size;
				var ite2 = new iterator(this, index);
				return ite2;
			};
			csmMap.prototype.dumpAsInt = function () {
				for (var i = 0; i < this._size; i++) {
					CubismLogDebug('{0} ,', this._keyValues[i]);
					CubismLogDebug('\n');
				}
			};
			csmMap.DefaultSize = 10;
			return csmMap;
		}());
		Live2DCubismFramework.csmMap = csmMap;
		var iterator = /** @class */ (function () {
			function iterator(v, idx) {
				this._map = v != undefined ? v : new csmMap();
				this._index = idx != undefined ? idx : 0;
			}
			iterator.prototype.set = function (ite) {
				this._index = ite._index;
				this._map = ite._map;
				return this;
			};
			iterator.prototype.preIncrement = function () {
				++this._index;
				return this;
			};
			iterator.prototype.preDecrement = function () {
				--this._index;
				return this;
			};
			iterator.prototype.increment = function () {
				var iteold = new iterator(this._map, this._index++); // 古い値を保存
				this._map = iteold._map;
				this._index = iteold._index;
				return this;
			};
			iterator.prototype.decrement = function () {
				var iteold = new iterator(this._map, this._index); // 古い値を保存
				this._map = iteold._map;
				this._index = iteold._index;
				return this;
			};
			iterator.prototype.ptr = function () {
				return this._map._keyValues[this._index];
			};
			iterator.prototype.notEqual = function (ite) {
				return this._index != ite._index || this._map != ite._map;
			};
			return iterator;
		}());
		Live2DCubismFramework.iterator = iterator;
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var csmString = /** @class */ (function () {
			function csmString(s) {
				this.s = s;
			}
			csmString.prototype.append = function (c, length) {
				this.s += length !== undefined ? c.substr(0, length) : c;
				return this;
			};
			csmString.prototype.expansion = function (length, v) {
				for (var i = 0; i < length; i++) {
					this.append(v);
				}
				return this;
			};
			csmString.prototype.getBytes = function () {
				return encodeURIComponent(this.s).replace(/%../g, 'x').length;
			};
			csmString.prototype.getLength = function () {
				return this.s.length;
			};
			csmString.prototype.isLess = function (s) {
				return this.s < s.s;
			};
			csmString.prototype.isGreat = function (s) {
				return this.s > s.s;
			};
			csmString.prototype.isEqual = function (s) {
				return this.s == s;
			};
			csmString.prototype.isEmpty = function () {
				return this.s.length == 0;
			};
			return csmString;
		}());
		Live2DCubismFramework.csmString = csmString;
	})(Live2DCubismFramework);
	CSM_LOG_LEVEL_VERBOSE = 0;
	CSM_LOG_LEVEL_DEBUG = 1;
	CSM_LOG_LEVEL_INFO = 2;
	CSM_LOG_LEVEL_WARNING = 3;
	CSM_LOG_LEVEL_ERROR = 4;
	CSM_LOG_LEVEL_OFF = 5;
	CSM_LOG_LEVEL = CSM_LOG_LEVEL_VERBOSE;
	CubismLogPrint = function (level, fmt, args) {
		Live2DCubismFramework.CubismDebug.print(level, '[CSM]' + fmt, args);
	};
	CubismLogPrintIn = function (level, fmt, args) {
		CubismLogPrint(level, fmt + '\n', args);
	};
	CSM_ASSERT = function (expr) {
		console.assert(expr);
	};
	if (CSM_LOG_LEVEL <= CSM_LOG_LEVEL_VERBOSE) {
		CubismLogVerbose = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Verbose, '[V]' + fmt, args);
		};
		CubismLogDebug = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Debug, '[D]' + fmt, args);
		};
		CubismLogInfo = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Info, '[I]' + fmt, args);
		};
		CubismLogWarning = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Warning, '[W]' + fmt, args);
		};
		CubismLogError = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Error, '[E]' + fmt, args);
		};
	}
	else if (CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_DEBUG) {
		CubismLogDebug = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Debug, '[D]' + fmt, args);
		};
		CubismLogInfo = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Info, '[I]' + fmt, args);
		};
		CubismLogWarning = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Warning, '[W]' + fmt, args);
		};
		CubismLogError = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Error, '[E]' + fmt, args);
		};
	}
	else if (CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_INFO) {
		CubismLogInfo = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Info, '[I]' + fmt, args);
		};
		CubismLogWarning = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Warning, '[W]' + fmt, args);
		};
		CubismLogError = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Error, '[E]' + fmt, args);
		};
	}
	else if (CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_WARNING) {
		CubismLogWarning = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Warning, '[W]' + fmt, args);
		};
		CubismLogError = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Error, '[E]' + fmt, args);
		};
	}
	else if (CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_ERROR) {
		CubismLogError = function (fmt) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			CubismLogPrintIn(LogLevel.LogLevel_Error, '[E]' + fmt, args);
		};
	}
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismDebug = /** @class */ (function () {
			function CubismDebug() {
			}
			CubismDebug.print = function (logLevel, format, args) {
				if (logLevel < Live2DCubismFramework.CubismFramework.getLoggingLevel()) {
					return;
				}
				var logPrint = Live2DCubismFramework.CubismFramework.coreLogFunction;
				if (!logPrint)
					return;
				var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
					return args[k];
				});
				logPrint(buffer);
			};
			CubismDebug.dumpBytes = function (logLevel, data, length) {
				for (var i = 0; i < length; i++) {
					if (i % 16 == 0 && i > 0)
						this.print(logLevel, '\n');
					else if (i % 8 == 0 && i > 0)
						this.print(logLevel, '  ');
					this.print(logLevel, '{0} ', [data[i] & 0xff]);
				}
				this.print(logLevel, '\n');
			};
			return CubismDebug;
		}());
		Live2DCubismFramework.CubismDebug = CubismDebug;
	})(Live2DCubismFramework);
	var csmMap = Live2DCubismFramework.csmMap;
	var csmString = Live2DCubismFramework.csmString;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CSM_JSON_ERROR_TYPE_MISMATCH = 'Error: type mismatch';
		var CSM_JSON_ERROR_INDEX_OF_BOUNDS = 'Error: index out of bounds';
		var Value = /** @class */ (function () {
			function Value() {
			}
			Value.prototype.getRawString = function (defaultValue, indent) {
				return this.getString(defaultValue, indent);
			};
			Value.prototype.toInt = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = 0; }
				return defaultValue;
			};
			Value.prototype.toFloat = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = 0; }
				return defaultValue;
			};
			Value.prototype.toBoolean = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = false; }
				return defaultValue;
			};
			Value.prototype.getSize = function () {
				return 0;
			};
			Value.prototype.getArray = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = null; }
				return defaultValue;
			};
			Value.prototype.getVector = function (defaultValue) {
				return defaultValue;
			};
			Value.prototype.getMap = function (defaultValue) {
				return defaultValue;
			};
			Value.prototype.getValueByIndex = function (index) {
				return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
			};
			Value.prototype.getValueByString = function (s) {
				return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
			};
			Value.prototype.getKeys = function () {
				return Value.s_dummyKeys;
			};
			Value.prototype.isError = function () {
				return false;
			};
			Value.prototype.isNull = function () {
				return false;
			};
			Value.prototype.isBool = function () {
				return false;
			};
			Value.prototype.isFloat = function () {
				return false;
			};
			Value.prototype.isString = function () {
				return false;
			};
			Value.prototype.isArray = function () {
				return false;
			};
			Value.prototype.isMap = function () {
				return false;
			};
			Value.prototype.equals = function (value) {
				return false;
			};
			Value.prototype.isStatic = function () {
				return false;
			};
			Value.prototype.setErrorNotForClientCall = function (errorStr) {
				return JsonError.errorValue;
			};
			Value.staticInitializeNotForClientCall = function () {
				JsonBoolean.trueValue = new JsonBoolean(true);
				JsonBoolean.falseValue = new JsonBoolean(false);
				JsonError.errorValue = new JsonError('ERROR', true);
				this.nullValue = new JsonNullvalue();
				Value.s_dummyKeys = new csmVector();
			};
			Value.staticReleaseNotForClientCall = function () {
				JsonBoolean.trueValue = null;
				JsonBoolean.falseValue = null;
				JsonError.errorValue = null;
				Value.nullValue = null;
				Value.s_dummyKeys = null;
				JsonBoolean.trueValue = null;
				JsonBoolean.falseValue = null;
				JsonError.errorValue = null;
				Value.nullValue = null;
				Value.s_dummyKeys = null;
			};
			return Value;
		}());
		Live2DCubismFramework.Value = Value;
		var CubismJson = /** @class */ (function () {
			function CubismJson(buffer, length) {
				this._error = null;
				this._lineCount = 0;
				this._root = null;
				if (buffer != undefined) {
					this.parseBytes(buffer, length);
				}
			}
			CubismJson.create = function (buffer, size) {
				var json = new CubismJson();
				var succeeded = json.parseBytes(buffer, size);
				if (!succeeded) {
					CubismJson.delete(json);
					return null;
				}
				else {
					return json;
				}
			};
			CubismJson.delete = function (instance) {
				instance = null;
			};
			CubismJson.prototype.getRoot = function () {
				return this._root;
			};
			CubismJson.prototype.arrayBufferToString = function (buffer) {
				var uint8Array = new Uint8Array(buffer);
				var str = '';
				for (var i = 0, len = uint8Array.length; i < len; ++i) {
					str += '%' + this.pad(uint8Array[i].toString(16));
				}
				str = decodeURIComponent(str);
				return str;
			};
			CubismJson.prototype.pad = function (n) {
				return n.length < 2 ? '0' + n : n;
			};
			CubismJson.prototype.parseBytes = function (buffer, size) {
				var endPos = new Array(1);
				var decodeBuffer = this.arrayBufferToString(buffer);
				this._root = this.parseValue(decodeBuffer, size, 0, endPos);
				if (this._error) {
					var strbuf = '\0';
					strbuf = 'Json parse error : @line ' + (this._lineCount + 1) + '\n';
					this._root = new JsonString(strbuf);
					CubismLogInfo('{0}', this._root.getRawString());
					return false;
				}
				else if (this._root == null) {
					this._root = new JsonError(new csmString(this._error), false);
					return false;
				}
				return true;
			};
			CubismJson.prototype.getParseError = function () {
				return this._error;
			};
			CubismJson.prototype.checkEndOfFile = function () {
				return this._root.getArray()[1].equals('EOF');
			};
			CubismJson.prototype.parseValue = function (buffer, length, begin, outEndPos) {
				if (this._error)
					return null;
				var o = null;
				var i = begin;
				var f;
				for (; i < length; i++) {
					var c = buffer[i];
					switch (c) {
						case '-':
						case '.':
						case '0':
						case '1':
						case '2':
						case '3':
						case '4':
						case '5':
						case '6':
						case '7':
						case '8':
						case '9': {
							var afterString = new Array(1);
							f = strtod(buffer.slice(i), afterString);
							outEndPos[0] = buffer.indexOf(afterString[0]);
							return new JsonFloat(f);
						}
						case '"':
							return new JsonString(this.parseString(buffer, length, i + 1, outEndPos));
						case '[':
							o = this.parseArray(buffer, length, i + 1, outEndPos);
							return o;
						case '{':
							o = this.parseObject(buffer, length, i + 1, outEndPos);
							return o;
						case 'n':
							if (i + 3 < length) {
								o = new JsonNullvalue();
								outEndPos[0] = i + 4;
							}
							else {
								this._error = 'parse null';
							}
							return o;
						case 't':
							if (i + 3 < length) {
								o = JsonBoolean.trueValue;
								outEndPos[0] = i + 4;
							}
							else {
								this._error = 'parse true';
							}
							return o;
						case 'f':
							if (i + 4 < length) {
								o = JsonBoolean.falseValue;
								outEndPos[0] = i + 5;
							}
							else {
								this._error = "illegal ',' position";
							}
							return o;
						case ',':
							this._error = "illegal ',' position";
							return null;
						case ']':
							outEndPos[0] = i;
							return null;
						case '\n':
							this._lineCount++;
						case ' ':
						case '\t':
						case '\r':
						default:
							break;
					}
				}
				this._error = 'illegal end of value';
				return null;
			};
			CubismJson.prototype.parseString = function (string, length, begin, outEndPos) {
				if (this._error)
					return null;
				var i = begin;
				var c, c2;
				var ret = new csmString('');
				var bufStart = begin;
				for (; i < length; i++) {
					c = string[i];
					switch (c) {
						case '"': {
							outEndPos[0] = i + 1;
							ret.append(string.slice(bufStart), i - bufStart);
							return ret.s;
						}
						case '//': {
							i++;
							if (i - 1 > bufStart) {
								ret.append(string.slice(bufStart), i - bufStart);
							}
							bufStart = i + 1;
							if (i < length) {
								c2 = string[i];
								switch (c2) {
									case '\\':
										ret.expansion(1, '\\');
										break;
									case '"':
										ret.expansion(1, '"');
										break;
									case '/':
										ret.expansion(1, '/');
										break;
									case 'b':
										ret.expansion(1, '\b');
										break;
									case 'f':
										ret.expansion(1, '\f');
										break;
									case 'n':
										ret.expansion(1, '\n');
										break;
									case 'r':
										ret.expansion(1, '\r');
										break;
									case 't':
										ret.expansion(1, '\t');
										break;
									case 'u':
										this._error = 'parse string/unicord escape not supported';
										break;
									default:
										break;
								}
							}
							else {
								this._error = 'parse string/escape error';
							}
						}
						default: {
							break;
						}
					}
				}
				this._error = 'parse string/illegal end';
				return null;
			};
			CubismJson.prototype.parseObject = function (buffer, length, begin, outEndPos) {
				if (this._error)
					return null;
				var ret = new JsonMap();
				var key = '';
				var i = begin;
				var c = '';
				var localRetEndPos2 = Array(1);
				var ok = false;
				for (; i < length; i++) {
					FOR_LOOP: for (; i < length; i++) {
						c = buffer[i];
						switch (c) {
							case '"':
								key = this.parseString(buffer, length, i + 1, localRetEndPos2);
								if (this._error) {
									return null;
								}
								i = localRetEndPos2[0];
								ok = true;
								break FOR_LOOP;
							case '}':
								outEndPos[0] = i + 1;
								return ret;
							case ':':
								this._error = "illegal ':' position";
								break;
							case '\n':
								this._lineCount++;
							default:
								break;
						}
					}
					if (!ok) {
						this._error = 'key not found';
						return null;
					}
					ok = false;
					FOR_LOOP2: for (; i < length; i++) {
						c = buffer[i];
						switch (c) {
							case ':':
								ok = true;
								i++;
								break FOR_LOOP2;
							case '}':
								this._error = "illegal '}' position";
								break;
							case '\n':
								this._lineCount++;
							default:
								break;
						}
					}
					if (!ok) {
						this._error = "':' not found";
						return null;
					}
					var value = this.parseValue(buffer, length, i, localRetEndPos2);
					if (this._error) {
						return null;
					}
					i = localRetEndPos2[0];
					ret.put(key, value);
					FOR_LOOP3: for (; i < length; i++) {
						c = buffer[i];
						switch (c) {
							case ',':
								break FOR_LOOP3;
							case '}':
								outEndPos[0] = i + 1;
								return ret;
							case '\n':
								this._lineCount++;
							default:
								break;
						}
					}
				}
				this._error = 'illegal end of perseObject';
				return null;
			};
			CubismJson.prototype.parseArray = function (buffer, length, begin, outEndPos) {
				if (this._error)
					return null;
				var ret = new JsonArray();
				var i = begin;
				var c;
				var localRetEndpos2 = new Array(1);
				for (; i < length; i++) {
					var value = this.parseValue(buffer, length, i, localRetEndpos2);
					if (this._error) {
						return null;
					}
					i = localRetEndpos2[0];
					if (value) {
						ret.add(value);
					}
					FOR_LOOP: for (; i < length; i++) {
						c = buffer[i];
						switch (c) {
							case ',':
								break FOR_LOOP;
							case ']':
								outEndPos[0] = i + 1;
								return ret;
							case '\n':
								++this._lineCount;
							default:
								break;
						}
					}
				}
				ret = void 0;
				this._error = 'illegal end of parseObject';
				return null;
			};
			return CubismJson;
		}());
		Live2DCubismFramework.CubismJson = CubismJson;
		var JsonFloat = /** @class */ (function (_super) {
			__extends(JsonFloat, _super);
			function JsonFloat(v) {
				var _this = _super.call(this) || this;
				_this._value = v;
				return _this;
			}
			JsonFloat.prototype.isFloat = function () {
				return true;
			};
			JsonFloat.prototype.getString = function (defaultValue, indent) {
				var strbuf = '\0';
				this._value = parseFloat(strbuf);
				this._stringBuffer = strbuf;
				return this._stringBuffer;
			};
			JsonFloat.prototype.toInt = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = 0; }
				return parseInt(this._value.toString());
			};
			JsonFloat.prototype.toFloat = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = 0.0; }
				return this._value;
			};
			JsonFloat.prototype.equals = function (value) {
				if ('number' === typeof value) {
					// int
					if (Math.round(value)) {
						return false;
					}
					// float
					else {
						return value == this._value;
					}
				}
				return false;
			};
			return JsonFloat;
		}(Value));
		Live2DCubismFramework.JsonFloat = JsonFloat;
		var JsonBoolean = /** @class */ (function (_super) {
			__extends(JsonBoolean, _super);
			function JsonBoolean(v) {
				var _this = _super.call(this) || this;
				_this._boolValue = v;
				return _this;
			}
			JsonBoolean.prototype.isBool = function () {
				return true;
			};
			JsonBoolean.prototype.toBoolean = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = false; }
				return this._boolValue;
			};
			JsonBoolean.prototype.getString = function (defaultValue, indent) {
				this._stringBuffer = this._boolValue ? 'true' : 'false';
				return this._stringBuffer;
			};
			JsonBoolean.prototype.equals = function (value) {
				if ('boolean' === typeof value) {
					return value == this._boolValue;
				}
				return false;
			};
			JsonBoolean.prototype.isStatic = function () {
				return true;
			};
			return JsonBoolean;
		}(Value));
		Live2DCubismFramework.JsonBoolean = JsonBoolean;
		var JsonString = /** @class */ (function (_super) {
			__extends(JsonString, _super);
			function JsonString(s) {
				var _this = _super.call(this) || this;
				if ('string' === typeof s) {
					_this._stringBuffer = s;
				}
				if (s instanceof csmString) {
					_this._stringBuffer = s.s;
				}
				return _this;
			}
			JsonString.prototype.isString = function () {
				return true;
			};
			JsonString.prototype.getString = function (defaultValue, indent) {
				return this._stringBuffer;
			};
			JsonString.prototype.equals = function (value) {
				if ('string' === typeof value) {
					return this._stringBuffer == value;
				}
				if (value instanceof csmString) {
					return this._stringBuffer == value.s;
				}
				return false;
			};
			return JsonString;
		}(Value));
		Live2DCubismFramework.JsonString = JsonString;
		var JsonError = /** @class */ (function (_super) {
			__extends(JsonError, _super);
			function JsonError(s, isStatic) {
				var _this = this;
				if ('string' === typeof s) {
					_this = _super.call(this, s) || this;
				}
				else {
					_this = _super.call(this, s) || this;
				}
				_this._isStatic = isStatic;
				return _this;
			}
			JsonError.prototype.isStatic = function () {
				return this._isStatic;
			};
			JsonError.prototype.setErrorNotForClientCall = function (s) {
				this._stringBuffer = s;
				return this;
			};
			JsonError.prototype.isError = function () {
				return true;
			};
			return JsonError;
		}(JsonString));
		Live2DCubismFramework.JsonError = JsonError;
		var JsonNullvalue = /** @class */ (function (_super) {
			__extends(JsonNullvalue, _super);
			function JsonNullvalue() {
				var _this = _super.call(this) || this;
				_this._stringBuffer = 'NullValue';
				return _this;
			}
			JsonNullvalue.prototype.isNull = function () {
				return true;
			};
			JsonNullvalue.prototype.getString = function (defaultValue, indent) {
				return this._stringBuffer;
			};
			JsonNullvalue.prototype.isStatic = function () {
				return true;
			};
			return JsonNullvalue;
		}(Value));
		Live2DCubismFramework.JsonNullvalue = JsonNullvalue;
		var JsonArray = /** @class */ (function (_super) {
			__extends(JsonArray, _super);
			function JsonArray() {
				var _this = _super.call(this) || this;
				_this._array = new csmVector();
				return _this;
			}
			JsonArray.prototype.release = function () {
				for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()) {
					var v = ite.ptr();
					if (v && !v.isStatic()) {
						v = void 0;
						v = null;
					}
				}
			};
			JsonArray.prototype.isArray = function () {
				return true;
			};
			JsonArray.prototype.getValueByIndex = function (index) {
				if (index < 0 || this._array.getSize() <= index) {
					return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
				}
				var v = this._array.at(index);
				if (v == null) {
					return Value.nullValue;
				}
				return v;
			};
			JsonArray.prototype.getValueByString = function (s) {
				return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
			};
			JsonArray.prototype.getString = function (defaultValue, indent) {
				var stringBuffer = indent + '[\n';
				for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()) {
					var v = ite.ptr();
					this._stringBuffer += indent + '' + v.getString(indent + ' ') + '\n';
				}
				this._stringBuffer = stringBuffer + indent + ']\n';
				return this._stringBuffer;
			};
			JsonArray.prototype.add = function (v) {
				this._array.pushBack(v);
			};
			JsonArray.prototype.getVector = function (defaultValue) {
				if (defaultValue === void 0) { defaultValue = null; }
				return this._array;
			};
			JsonArray.prototype.getSize = function () {
				return this._array.getSize();
			};
			return JsonArray;
		}(Value));
		Live2DCubismFramework.JsonArray = JsonArray;
		var JsonMap = /** @class */ (function (_super) {
			__extends(JsonMap, _super);
			function JsonMap() {
				var _this = _super.call(this) || this;
				_this._map = new csmMap();
				return _this;
			}
			JsonMap.prototype.release = function () {
				var ite = this._map.begin();
				while (ite.notEqual(this._map.end())) {
					var v = ite.ptr().second;
					if (v && !v.isStatic()) {
						v = void 0;
						v = null;
					}
					ite.preIncrement();
				}
			};
			JsonMap.prototype.isMap = function () {
				return true;
			};
			JsonMap.prototype.getValueByString = function (s) {
				if (s instanceof csmString) {
					var ret = this._map.getValue(s.s);
					if (ret == null) {
						return Value.nullValue;
					}
					return ret;
				}
				for (var iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()) {
					if (iter.ptr().first == s) {
						if (iter.ptr().second == null) {
							return Value.nullValue;
						}
						return iter.ptr().second;
					}
				}
				return Value.nullValue;
			};
			JsonMap.prototype.getValueByIndex = function (index) {
				return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
			};
			JsonMap.prototype.getString = function (defaultValue, indent) {
				this._stringBuffer = indent + '{\n';
				var ite = this._map.begin();
				while (ite.notEqual(this._map.end())) {
					var key = ite.ptr().first;
					var v = ite.ptr().second;
					this._stringBuffer +=
						indent + ' ' + key + ' : ' + v.getString(indent + '   ') + ' \n';
					ite.preIncrement();
				}
				this._stringBuffer += indent + '}\n';
				return this._stringBuffer;
			};
			JsonMap.prototype.getMap = function (defaultValue) {
				return this._map;
			};
			JsonMap.prototype.put = function (key, v) {
				this._map.setValue(key, v);
			};
			JsonMap.prototype.getKeys = function () {
				if (!this._keys) {
					this._keys = new csmVector();
					var ite = this._map.begin();
					while (ite.notEqual(this._map.end())) {
						var key = ite.ptr().first;
						this._keys.pushBack(key);
						ite.preIncrement();
					}
				}
				return this._keys;
			};
			JsonMap.prototype.getSize = function () {
				return this._keys.getSize();
			};
			return JsonMap;
		}(Value));
		Live2DCubismFramework.JsonMap = JsonMap;
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismString = /** @class */ (function () {
			function CubismString() {
			}
			CubismString.getFormatedString = function (format) {
				var args = [];
				for (var _i = 1; _i < arguments.length; _i++) {
					args[_i - 1] = arguments[_i];
				}
				var ret = format;
				return ret.replace(/\{(\d+)\}/g, function (m, k // m="{0}", k="0"
				) {
					return args[k];
				});
			};
			CubismString.isStartWith = function (text, startWord) {
				var textIndex = 0;
				var startWordIndex = 0;
				while (startWord[startWordIndex] != '\0') {
					if (text[textIndex] == '\0' ||
						text[textIndex++] != startWord[startWordIndex++]) {
						return false;
					}
				}
				return false;
			};
			CubismString.stringToFloat = function (string, length, position, outEndPos) {
				var i = position;
				var minus = false;
				var period = false;
				var v1 = 0;
				var c = parseInt(string[i]);
				if (c < 0) {
					minus = true;
					i++;
				}
				for (; i < length; i++) {
					var c_1 = string[i];
					if (0 <= parseInt(c_1) && parseInt(c_1) <= 9) {
						v1 = v1 * 10 + (parseInt(c_1) - 0);
					}
					else if (c_1 == '.') {
						period = true;
						i++;
						break;
					}
					else {
						break;
					}
				}
				if (period) {
					var mul = 0.1;
					for (; i < length; i++) {
						c = parseFloat(string[i]) & 0xff;
						if (0 <= c && c <= 9) {
							v1 += mul * (c - 0);
						}
						else {
							break;
						}
						mul *= 0.1;
						if (!c)
							break;
					}
				}
				if (i == position) {
					outEndPos[0] = -1;
					return 0;
				}
				if (minus)
					v1 = -v1;
				outEndPos[0] = i;
				return v1;
			};
			return CubismString;
		}());
		Live2DCubismFramework.CubismString = CubismString;
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		Live2DCubismFramework.HitAreaPrefix = 'HitArea';
		Live2DCubismFramework.HitAreaHead = 'Head';
		Live2DCubismFramework.HitAreaBody = 'Body';
		Live2DCubismFramework.PartsIdCore = 'Parts01Core';
		Live2DCubismFramework.PartsArmPrefix = 'Parts01Arm_';
		Live2DCubismFramework.PartsArmLPrefix = 'Parts01ArmL_';
		Live2DCubismFramework.PartsArmRPrefix = 'Parts01ArmR_';
		// パラメータID
		Live2DCubismFramework.ParamAngleX = 'ParamAngleX';
		Live2DCubismFramework.ParamAngleY = 'ParamAngleY';
		Live2DCubismFramework.ParamAngleZ = 'ParamAngleZ';
		Live2DCubismFramework.ParamEyeLOpen = 'ParamEyeLOpen';
		Live2DCubismFramework.ParamEyeLSmile = 'ParamEyeLSmile';
		Live2DCubismFramework.ParamEyeROpen = 'ParamEyeROpen';
		Live2DCubismFramework.ParamEyeRSmile = 'ParamEyeRSmile';
		Live2DCubismFramework.ParamEyeBallX = 'ParamEyeBallX';
		Live2DCubismFramework.ParamEyeBallY = 'ParamEyeBallY';
		Live2DCubismFramework.ParamEyeBallForm = 'ParamEyeBallForm';
		Live2DCubismFramework.ParamBrowLY = 'ParamBrowLY';
		Live2DCubismFramework.ParamBrowRY = 'ParamBrowRY';
		Live2DCubismFramework.ParamBrowLX = 'ParamBrowLX';
		Live2DCubismFramework.ParamBrowRX = 'ParamBrowRX';
		Live2DCubismFramework.ParamBrowLAngle = 'ParamBrowLAngle';
		Live2DCubismFramework.ParamBrowRAngle = 'ParamBrowRAngle';
		Live2DCubismFramework.ParamBrowLForm = 'ParamBrowLForm';
		Live2DCubismFramework.ParamBrowRForm = 'ParamBrowRForm';
		Live2DCubismFramework.ParamMouthForm = 'ParamMouthForm';
		Live2DCubismFramework.ParamMouthOpenY = 'ParamMouthOpenY';
		Live2DCubismFramework.ParamCheek = 'ParamCheek';
		Live2DCubismFramework.ParamBodyAngleX = 'ParamBodyAngleX';
		Live2DCubismFramework.ParamBodyAngleY = 'ParamBodyAngleY';
		Live2DCubismFramework.ParamBodyAngleZ = 'ParamBodyAngleZ';
		Live2DCubismFramework.ParamBreath = 'ParamBreath';
		Live2DCubismFramework.ParamArmLA = 'ParamArmLA';
		Live2DCubismFramework.ParamArmRA = 'ParamArmRA';
		Live2DCubismFramework.ParamArmLB = 'ParamArmLB';
		Live2DCubismFramework.ParamArmRB = 'ParamArmRB';
		Live2DCubismFramework.ParamHandL = 'ParamHandL';
		Live2DCubismFramework.ParamHandR = 'ParamHandR';
		Live2DCubismFramework.ParamHairFront = 'ParamHairFront';
		Live2DCubismFramework.ParamHairSide = 'ParamHairSide';
		Live2DCubismFramework.ParamHairBack = 'ParamHairBack';
		Live2DCubismFramework.ParamHairFluffy = 'ParamHairFluffy';
		Live2DCubismFramework.ParamShoulderY = 'ParamShoulderY';
		Live2DCubismFramework.ParamBustX = 'ParamBustX';
		Live2DCubismFramework.ParamBustY = 'ParamBustY';
		Live2DCubismFramework.ParamBaseX = 'ParamBaseX';
		Live2DCubismFramework.ParamBaseY = 'ParamBaseY';
		Live2DCubismFramework.ParamNONE = 'NONE:';
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var ICubismModelSetting = /** @class */ (function () {
			function ICubismModelSetting() {
			}
			return ICubismModelSetting;
		}());
		Live2DCubismFramework.ICubismModelSetting = ICubismModelSetting;
	})(Live2DCubismFramework);
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismJson = Live2DCubismFramework.CubismJson;
	var ICubismModelSetting = Live2DCubismFramework.ICubismModelSetting;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		// JSON Keys
		var Version = 'Version';
		var FileReferences = 'FileReferences';
		var Groups = 'Groups';
		var Layout = 'Layout';
		var HitAreas = 'HitAreas';
		var Moc = 'Moc';
		var Textures = 'Textures';
		var Physics = 'Physics';
		var Pose = 'Pose';
		var Expressions = 'Expressions';
		var Motions = 'Motions';
		var UserData = 'UserData';
		var Name = 'Name';
		var FilePath = 'File';
		var Id = 'Id';
		var Ids = 'Ids';
		var Target = 'Target';
		var Idle = 'Idle';
		var TapBody = 'TapBody';
		var PinchIn = 'PinchIn';
		var PinchOut = 'PinchOut';
		var Shake = 'Shake';
		var FlickHead = 'FlickHead';
		var Parameter = 'Parameter';
		var SoundPath = 'Sound';
		var FadeInTime = 'FadeInTime';
		var FadeOutTime = 'FadeOutTime';
		var CenterX = 'CenterX';
		var CenterY = 'CenterY';
		var X = 'X';
		var Y = 'Y';
		var Width = 'Width';
		var Height = 'Height';
		var LipSync = 'LipSync';
		var EyeBlink = 'EyeBlink';
		var InitParameter = 'init_param';
		var InitPartsVisible = 'init_parts_visible';
		var Val = 'val';
		var FrequestNode;
		(function (FrequestNode) {
			FrequestNode[FrequestNode["FrequestNode_Groups"] = 0] = "FrequestNode_Groups";
			FrequestNode[FrequestNode["FrequestNode_Moc"] = 1] = "FrequestNode_Moc";
			FrequestNode[FrequestNode["FrequestNode_Motions"] = 2] = "FrequestNode_Motions";
			FrequestNode[FrequestNode["FrequestNode_Expressions"] = 3] = "FrequestNode_Expressions";
			FrequestNode[FrequestNode["FrequestNode_Textures"] = 4] = "FrequestNode_Textures";
			FrequestNode[FrequestNode["FrequestNode_Physics"] = 5] = "FrequestNode_Physics";
			FrequestNode[FrequestNode["FrequestNode_Pose"] = 6] = "FrequestNode_Pose";
			FrequestNode[FrequestNode["FrequestNode_HitAreas"] = 7] = "FrequestNode_HitAreas"; // getRoot().getValueByString(HitAreas)
		})(FrequestNode || (FrequestNode = {}));
		var CubismModelSettingJson = /** @class */ (function (_super) {
			__extends(CubismModelSettingJson, _super);
			function CubismModelSettingJson(buffer, size) {
				var _this = ICubismModelSetting.call(this) || this;
				_this._json = CubismJson.create(buffer, size);
				if (_this._json) {
					_this._jsonValue = new csmVector();
					_this._jsonValue.pushBack(_this._json.getRoot().getValueByString(Groups));
					_this._jsonValue.pushBack(_this._json
						.getRoot()
						.getValueByString(FileReferences)
						.getValueByString(Moc));
					_this._jsonValue.pushBack(_this._json
						.getRoot()
						.getValueByString(FileReferences)
						.getValueByString(Motions));
					_this._jsonValue.pushBack(_this._json
						.getRoot()
						.getValueByString(FileReferences)
						.getValueByString(Expressions));
					_this._jsonValue.pushBack(_this._json
						.getRoot()
						.getValueByString(FileReferences)
						.getValueByString(Textures));
					_this._jsonValue.pushBack(_this._json
						.getRoot()
						.getValueByString(FileReferences)
						.getValueByString(Physics));
					_this._jsonValue.pushBack(_this._json
						.getRoot()
						.getValueByString(FileReferences)
						.getValueByString(Pose));
					_this._jsonValue.pushBack(_this._json.getRoot().getValueByString(HitAreas));
				}
				return _this;
			}
			CubismModelSettingJson.prototype.release = function () {
				CubismJson.delete(this._json);
				this._jsonValue = null;
			};
			CubismModelSettingJson.prototype.GetJson = function () {
				return this._json;
			};
			CubismModelSettingJson.prototype.getModelFileName = function () {
				if (!this.isExistModelFile()) {
					return '';
				}
				return this._jsonValue.at(FrequestNode.FrequestNode_Moc).getRawString();
			};
			CubismModelSettingJson.prototype.getTextureCount = function () {
				if (!this.isExistTextureFiles()) {
					return 0;
				}
				return this._jsonValue.at(FrequestNode.FrequestNode_Textures).getSize();
			};
			CubismModelSettingJson.prototype.getTextureDirectory = function () {
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Textures)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getTextureFileName = function (index) {
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Textures)
					.getValueByIndex(index)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getHitAreasCount = function () {
				if (!this.isExistHitAreas()) {
					return 0;
				}
				return this._jsonValue.at(FrequestNode.FrequestNode_HitAreas).getSize();
			};
			CubismModelSettingJson.prototype.getHitAreaId = function (index) {
				return CubismFramework.getIdManager().getId(this._jsonValue
					.at(FrequestNode.FrequestNode_HitAreas)
					.getValueByIndex(index)
					.getValueByString(Id)
					.getRawString());
			};
			CubismModelSettingJson.prototype.getHitAreaName = function (index) {
				return this._jsonValue
					.at(FrequestNode.FrequestNode_HitAreas)
					.getValueByIndex(index)
					.getValueByString(Name)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getPhysicsFileName = function () {
				if (!this.isExistPhysicsFile()) {
					return '';
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Physics)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getPoseFileName = function () {
				if (!this.isExistPoseFile()) {
					return '';
				}
				return this._jsonValue.at(FrequestNode.FrequestNode_Pose).getRawString();
			};
			CubismModelSettingJson.prototype.getExpressionCount = function () {
				if (!this.isExistExpressionFile()) {
					return 0;
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Expressions)
					.getSize();
			};
			CubismModelSettingJson.prototype.getExpressionName = function (index) {
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Expressions)
					.getValueByIndex(index)
					.getValueByString(Name)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getExpressionFileName = function (index) {
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Expressions)
					.getValueByIndex(index)
					.getValueByString(FilePath)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getMotionGroupCount = function () {
				if (!this.isExistMotionGroups()) {
					return 0;
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getKeys()
					.getSize();
			};
			CubismModelSettingJson.prototype.getMotionGroupName = function (index) {
				if (!this.isExistMotionGroups()) {
					return null;
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getKeys()
					.at(index);
			};
			CubismModelSettingJson.prototype.getMotionCount = function (groupName) {
				if (!this.isExistMotionGroupName(groupName)) {
					return 0;
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getSize();
			};
			CubismModelSettingJson.prototype.getMotionFileName = function (groupName, index) {
				if (!this.isExistMotionGroupName(groupName)) {
					return '';
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(FilePath)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getMotionSoundFileName = function (groupName, index) {
				if (!this.isExistMotionSoundFile(groupName, index)) {
					return '';
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(SoundPath)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getMotionFadeInTimeValue = function (groupName, index) {
				if (!this.isExistMotionFadeIn(groupName, index)) {
					return -1.0;
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(FadeInTime)
					.toFloat();
			};
			CubismModelSettingJson.prototype.getMotionFadeOutTimeValue = function (groupName, index) {
				if (!this.isExistMotionFadeOut(groupName, index)) {
					return -1.0;
				}
				return this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(FadeOutTime)
					.toFloat();
			};
			CubismModelSettingJson.prototype.getUserDataFile = function () {
				if (!this.isExistUserDataFile()) {
					return '';
				}
				return this._json
					.getRoot()
					.getValueByString(FileReferences)
					.getValueByString(UserData)
					.getRawString();
			};
			CubismModelSettingJson.prototype.getLayoutMap = function (outLayoutMap) {
				// 存在しない要素にアクセスするとエラーになるためValueがnullの場合はnullを代入する
				var map = this._json
					.getRoot()
					.getValueByString(Layout)
					.getMap();
				if (map == null) {
					return false;
				}
				var ret = false;
				for (var ite = map.begin(); ite.notEqual(map.end()); ite.preIncrement()) {
					outLayoutMap.setValue(ite.ptr().first, ite.ptr().second.toFloat());
					ret = true;
				}
				return ret;
			};
			CubismModelSettingJson.prototype.getEyeBlinkParameterCount = function () {
				if (!this.isExistEyeBlinkParameters()) {
					return 0;
				}
				var num = 0;
				for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
					var refI = this._jsonValue
						.at(FrequestNode.FrequestNode_Groups)
						.getValueByIndex(i);
					if (refI.isNull() || refI.isError()) {
						continue;
					}
					if (refI.getValueByString(Name).getRawString() == EyeBlink) {
						num = refI
							.getValueByString(Ids)
							.getVector()
							.getSize();
						break;
					}
				}
				return num;
			};
			CubismModelSettingJson.prototype.getEyeBlinkParameterId = function (index) {
				if (!this.isExistEyeBlinkParameters()) {
					return null;
				}
				for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
					var refI = this._jsonValue
						.at(FrequestNode.FrequestNode_Groups)
						.getValueByIndex(i);
					if (refI.isNull() || refI.isError()) {
						continue;
					}
					if (refI.getValueByString(Name).getRawString() == EyeBlink) {
						return CubismFramework.getIdManager().getId(refI
							.getValueByString(Ids)
							.getValueByIndex(index)
							.getRawString());
					}
				}
				return null;
			};
			CubismModelSettingJson.prototype.getLipSyncParameterCount = function () {
				if (!this.isExistLipSyncParameters()) {
					return 0;
				}
				var num = 0;
				for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
					var refI = this._jsonValue
						.at(FrequestNode.FrequestNode_Groups)
						.getValueByIndex(i);
					if (refI.isNull() || refI.isError()) {
						continue;
					}
					if (refI.getValueByString(Name).getRawString() == LipSync) {
						num = refI
							.getValueByString(Ids)
							.getVector()
							.getSize();
						break;
					}
				}
				return num;
			};
			CubismModelSettingJson.prototype.getLipSyncParameterId = function (index) {
				if (!this.isExistLipSyncParameters()) {
					return null;
				}
				for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
					var refI = this._jsonValue
						.at(FrequestNode.FrequestNode_Groups)
						.getValueByIndex(i);
					if (refI.isNull() || refI.isError()) {
						continue;
					}
					if (refI.getValueByString(Name).getRawString() == LipSync) {
						return CubismFramework.getIdManager().getId(refI
							.getValueByString(Ids)
							.getValueByIndex(index)
							.getRawString());
					}
				}
				return null;
			};
			CubismModelSettingJson.prototype.isExistModelFile = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_Moc);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistTextureFiles = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_Textures);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistHitAreas = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_HitAreas);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistPhysicsFile = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_Physics);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistPoseFile = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_Pose);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistExpressionFile = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_Expressions);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistMotionGroups = function () {
				var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistMotionGroupName = function (groupName) {
				var node = this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistMotionSoundFile = function (groupName, index) {
				var node = this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(SoundPath);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistMotionFadeIn = function (groupName, index) {
				var node = this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(FadeInTime);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistMotionFadeOut = function (groupName, index) {
				var node = this._jsonValue
					.at(FrequestNode.FrequestNode_Motions)
					.getValueByString(groupName)
					.getValueByIndex(index)
					.getValueByString(FadeOutTime);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistUserDataFile = function () {
				var node = this._json
					.getRoot()
					.getValueByString(FileReferences)
					.getValueByString(UserData);
				return !node.isNull() && !node.isError();
			};
			CubismModelSettingJson.prototype.isExistEyeBlinkParameters = function () {
				if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).isNull() ||
					this._jsonValue.at(FrequestNode.FrequestNode_Groups).isError()) {
					return false;
				}
				for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); ++i) {
					if (this._jsonValue
						.at(FrequestNode.FrequestNode_Groups)
						.getValueByIndex(i)
						.getValueByString(Name)
						.getRawString() == EyeBlink) {
						return true;
					}
				}
				return false;
			};
			CubismModelSettingJson.prototype.isExistLipSyncParameters = function () {
				if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).isNull() ||
					this._jsonValue.at(FrequestNode.FrequestNode_Groups).isError()) {
					return false;
				}
				for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); ++i) {
					if (this._jsonValue
						.at(FrequestNode.FrequestNode_Groups)
						.getValueByIndex(i)
						.getValueByString(Name)
						.getRawString() == LipSync) {
						return true;
					}
				}
				return false;
			};
			return CubismModelSettingJson;
		}(ICubismModelSetting));
		Live2DCubismFramework.CubismModelSettingJson = CubismModelSettingJson;
	})(Live2DCubismFramework);
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var ICubismAllocator = /** @class */ (function () {
			function ICubismAllocator() {
			}
			return ICubismAllocator;
		}());
		Live2DCubismFramework.ICubismAllocator = ICubismAllocator;
	})(Live2DCubismFramework);
	var Value = Live2DCubismFramework.Value;
	var CubismIdManager = Live2DCubismFramework.CubismIdManager;
	var CubismRenderer = Live2DCubismFramework.CubismRenderer;
	function strtod(s, endPtr) {
		var index = 0;
		for (var i = 1;; i++) {
			var testC = s.slice(i - 1, i);
			if (testC == 'e' || testC == '-' || testC == 'E') {
				continue;
			}
			var test = s.substring(0, i);
			var number = Number(test);
			if (isNaN(number)) {
				break;
			}
			index = i;
		}
		var d = parseFloat(s);
		if (isNaN(d)) {
			d = NaN;
		}
		endPtr[0] = s.slice(index);
		return d;
	}
	strtod = strtod;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var s_isStarted = false;
		var s_isInitialized = false;
		var s_option = null;
		var s_cubismIdManager = null;
		var Constant;
		(function (Constant) {
			Constant.vertexOffset = 0;
			Constant.vertexStep = 2;
		})(Constant = Live2DCubismFramework.Constant || (Live2DCubismFramework.Constant = {}));
		function csmDelete(address) {
			if (!address) {
				return;
			}
			address = void 0;
		}
		Live2DCubismFramework.csmDelete = csmDelete;
		var CubismFramework = /** @class */ (function () {
			function CubismFramework() {
			}
			CubismFramework.startUp = function (option) {
				if (option === void 0) { option = null; }
				if (s_isStarted) {
					CubismLogInfo('CubismFramework.startUp() is already done.');
					return s_isStarted;
				}
				s_option = option;
				if (s_option != null) {
					Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
				}
				s_isStarted = true;
				if (s_isStarted) {
					var version = Live2DCubismCore.Version.csmGetVersion();
					var major = (version & 0xff000000) >> 24;
					var minor = (version & 0x00ff0000) >> 16;
					var patch = version & 0x0000ffff;
					var versionNumber = version;
					CubismLogInfo("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
				}
				CubismLogInfo('CubismFramework.startUp() is complete.');
				return s_isStarted;
			};
			CubismFramework.cleanUp = function () {
				s_isStarted = false;
				s_isInitialized = false;
				s_option = null;
				s_cubismIdManager = null;
			};
			CubismFramework.initialize = function () {
				CSM_ASSERT(s_isStarted);
				if (!s_isStarted) {
					CubismLogWarning('CubismFramework is not started.');
					return;
				}
				if (s_isInitialized) {
					CubismLogWarning('CubismFramework.initialize() skipped, already initialized.');
					return;
				}
				Value.staticInitializeNotForClientCall();
				s_cubismIdManager = new CubismIdManager();
				s_isInitialized = true;
				CubismLogInfo('CubismFramework.initialize() is complete.');
			};
			CubismFramework.dispose = function () {
				CSM_ASSERT(s_isStarted);
				if (!s_isStarted) {
					CubismLogWarning('CubismFramework is not started.');
					return;
				}
				if (!s_isInitialized) {
					CubismLogWarning('CubismFramework.dispose() skipped, not initialized.');
					return;
				}
				Value.staticReleaseNotForClientCall();
				s_cubismIdManager.release();
				s_cubismIdManager = null;
				CubismRenderer.staticRelease();
				s_isInitialized = false;
				CubismLogInfo('CubismFramework.dispose() is complete.');
			};
			CubismFramework.isStarted = function () {
				return s_isStarted;
			};
			CubismFramework.isInitialized = function () {
				return s_isInitialized;
			};
			CubismFramework.coreLogFunction = function (message) {
				if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
					return;
				}
				Live2DCubismCore.Logging.csmGetLogFunction()(message);
			};
			CubismFramework.getLoggingLevel = function () {
				if (s_option != null) {
					return s_option.loggingLevel;
				}
				return LogLevel.LogLevel_Off;
			};
			CubismFramework.getIdManager = function () {
				return s_cubismIdManager;
			};
			return CubismFramework;
		}());
		Live2DCubismFramework.CubismFramework = CubismFramework;
	})(Live2DCubismFramework);
	var Option = /** @class */ (function () {
		function Option() {
		}
		return Option;
	}());
	Option = Option;
	var LogLevel;
	(function (LogLevel) {
		LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
		LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
		LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
		LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
		LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
		LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off";
	})(LogLevel = LogLevel || (LogLevel = {}));
	var Constant = Live2DCubismFramework.Constant;
	var CubismMatrix44 = Live2DCubismFramework.CubismMatrix44;
	var csmRect = Live2DCubismFramework.csmRect;
	var csmMap = Live2DCubismFramework.csmMap;
	var CubismRenderer = Live2DCubismFramework.CubismRenderer;
	var CubismBlendMode = Live2DCubismFramework.CubismBlendMode;
	var CubismTextureColor = Live2DCubismFramework.CubismTextureColor;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var ColorChannelCount = 4;
		var shaderCount = 13;
		var s_instance = {};
		var s_viewport = {};
		var s_fbo;
		var CubismClippingManager_WebGL = /** @class */ (function () {
			function CubismClippingManager_WebGL() {
				this._maskRenderTexture = null;
				this._colorBuffer = null;
				this._currentFrameNo = 0;
				this._clippingMaskBufferSize = 256;
				this._clippingContextListForMask = new csmVector();
				this._clippingContextListForDraw = new csmVector();
				this._channelColors = new csmVector();
				this._tmpBoundsOnModel = new csmRect();
				this._tmpMatrix = new CubismMatrix44();
				this._tmpMatrixForMask = new CubismMatrix44();
				this._tmpMatrixForDraw = new CubismMatrix44();
				this._maskTexture = null;
				var tmp = new CubismTextureColor();
				tmp.R = 1.0;
				tmp.G = 0.0;
				tmp.B = 0.0;
				tmp.A = 0.0;
				this._channelColors.pushBack(tmp);
				tmp = new CubismTextureColor();
				tmp.R = 0.0;
				tmp.G = 1.0;
				tmp.B = 0.0;
				tmp.A = 0.0;
				this._channelColors.pushBack(tmp);
				tmp = new CubismTextureColor();
				tmp.R = 0.0;
				tmp.G = 0.0;
				tmp.B = 1.0;
				tmp.A = 0.0;
				this._channelColors.pushBack(tmp);
				tmp = new CubismTextureColor();
				tmp.R = 0.0;
				tmp.G = 0.0;
				tmp.B = 0.0;
				tmp.A = 1.0;
				this._channelColors.pushBack(tmp);
			}
			CubismClippingManager_WebGL.prototype.getChannelFlagAsColor = function (channelNo) {
				return this._channelColors.at(channelNo);
			};
			CubismClippingManager_WebGL.prototype.getMaskRenderTexture = function () {
				var ret = 0;
				if (this._maskTexture && this._maskTexture.texture != 0) {
					this._maskTexture.frameNo = this._currentFrameNo;
					ret = this._maskTexture.texture;
				}
				if (ret == 0) {
					var size = this._clippingMaskBufferSize;
					this._colorBuffer = this.gl.createTexture();
					this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer);
					this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
					this.gl.bindTexture(this.gl.TEXTURE_2D, null);
					ret = this.gl.createFramebuffer();
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ret);
					this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0);
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
					this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, ret);
				}
				return ret;
			};
			CubismClippingManager_WebGL.prototype.setGL = function (gl) {
				this.gl = $gameLive2d.gl;
			};
			CubismClippingManager_WebGL.prototype.calcClippedDrawTotalBounds = function (model, clippingContext) {
				var clippedDrawTotalMinX = Number.MAX_VALUE;
				var clippedDrawTotalMinY = Number.MAX_VALUE;
				var clippedDrawTotalMaxX = Number.MIN_VALUE;
				var clippedDrawTotalMaxY = Number.MIN_VALUE;
				var clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
				for (var clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++) {
					var drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
					var drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
					var drawableVertexes = model.getDrawableVertices(drawableIndex);
					var minX = Number.MAX_VALUE;
					var minY = Number.MAX_VALUE;
					var maxX = Number.MIN_VALUE;
					var maxY = Number.MIN_VALUE;
					var loop = drawableVertexCount * Constant.vertexStep;
					for (var pi = Constant.vertexOffset; pi < loop; pi += Constant.vertexStep) {
						var x = drawableVertexes[pi];
						var y = drawableVertexes[pi + 1];
						if (x < minX) {
							minX = x;
						}
						if (x > maxX) {
							maxX = x;
						}
						if (y < minY) {
							minY = y;
						}
						if (y > maxY) {
							maxY = y;
						}
					}
					if (minX == Number.MAX_VALUE) {
						continue;
					}
					if (minX < clippedDrawTotalMinX) {
						clippedDrawTotalMinX = minX;
					}
					if (minY < clippedDrawTotalMinY) {
						clippedDrawTotalMinY = minY;
					}
					if (maxX > clippedDrawTotalMaxX) {
						clippedDrawTotalMaxX = maxX;
					}
					if (maxY > clippedDrawTotalMaxY) {
						clippedDrawTotalMaxY = maxY;
					}
					if (clippedDrawTotalMinX == Number.MAX_VALUE) {
						clippingContext._allClippedDrawRect.x = 0.0;
						clippingContext._allClippedDrawRect.y = 0.0;
						clippingContext._allClippedDrawRect.width = 0.0;
						clippingContext._allClippedDrawRect.height = 0.0;
						clippingContext._isUsing = false;
					}
					else {
						clippingContext._isUsing = true;
						var w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
						var h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
						clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
						clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
						clippingContext._allClippedDrawRect.width = w;
						clippingContext._allClippedDrawRect.height = h;
					}
				}
			};
			CubismClippingManager_WebGL.prototype.release = function () {
				if(!this.gl){
					if($gameLive2d.gl){
						this.gl = $gameLive2d.gl;
					} else {
						throw new Error("Webglの読み込みがうまくいっていない可能性がございます。リセットして再度お試しください。1");
					}
				}
				for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
					if (this._clippingContextListForMask.at(i)) {
						this._clippingContextListForMask.at(i).release();
						this._clippingContextListForMask.set(i, void 0);
					}
					this._clippingContextListForMask.set(i, null);
				}
				this._clippingContextListForMask = null;
				for (var i = 0; i < this._clippingContextListForDraw.getSize(); i++) {
					this._clippingContextListForDraw.set(i, null);
				}
				this._clippingContextListForDraw = null;
				if (this._maskTexture) {
					this.gl.deleteFramebuffer(this._maskTexture.texture);
					this._maskTexture = null;
				}
				for (var i = 0; i < this._channelColors.getSize(); i++) {
					this._channelColors.set(i, null);
				}
				this._channelColors = null;
				this.gl.deleteTexture(this._colorBuffer);
				this._colorBuffer = null;
			};
			CubismClippingManager_WebGL.prototype.initialize = function (model, drawableCount, drawableMasks, drawableMaskCounts) {
				for (var i = 0; i < drawableCount; i++) {
					if (drawableMaskCounts[i] <= 0) {
						this._clippingContextListForDraw.pushBack(null);
						continue;
					}
					var clippingContext = this.findSameClip(drawableMasks[i], drawableMaskCounts[i]);
					if (clippingContext == null) {
						clippingContext = new CubismClippingContext(this, drawableMasks[i], drawableMaskCounts[i]);
						this._clippingContextListForMask.pushBack(clippingContext);
					}
					clippingContext.addClippedDrawable(i);
					this._clippingContextListForDraw.pushBack(clippingContext);
				}
			};
			CubismClippingManager_WebGL.prototype.setupClippingContext = function (model, renderer) {
				if(!this.gl){
					if($gameLive2d.gl){
						this.gl = $gameLive2d.gl;
					} else {
						throw new Error("Webglの読み込みがうまくいっていない可能性がございます。リセットして再度お試しください。2");
					}
				}
				this.gl.createTexture();
				this.gl.createFramebuffer();
				
				this._currentFrameNo++;
				var usingClipCount = 0;
				for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
					var cc = this._clippingContextListForMask.at(clipIndex);
					this.calcClippedDrawTotalBounds(model, cc);
					if (cc._isUsing) {
						usingClipCount++;
					}
				}
				
				if (usingClipCount > 0) {
					this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
					this._maskRenderTexture = this.getMaskRenderTexture();
					var modelToWorldF = renderer.getMvpMatrix();
					renderer.preDraw();
					this.setupLayoutBounds(usingClipCount);
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture);
					this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
					this.gl.clear(this.gl.COLOR_BUFFER_BIT);
					for (var clipIndex = 0, n = this._clippingContextListForMask.getSize(); clipIndex < n; clipIndex++) {
						var clipContext = this._clippingContextListForMask.at(clipIndex);
						var allClipedDrawRect = clipContext._allClippedDrawRect;
						var layoutBoundsOnTex01 = clipContext._layoutBounds;
						var MARGIN = 0.05;
						this._tmpBoundsOnModel.setRect(allClipedDrawRect);
						this._tmpBoundsOnModel.expand(allClipedDrawRect.width * MARGIN, allClipedDrawRect.height * MARGIN);
						var scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
						var scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
						{
							this._tmpMatrix.loadIdentity();
							{
								this._tmpMatrix.translateRelative(-1.0, -1.0);
								this._tmpMatrix.scaleRelative(2.0, 2.0);
							}
							{
								this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
								this._tmpMatrix.scaleRelative(scaleX, scaleY);
								this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
							}
							this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
						}
						{
							this._tmpMatrix.loadIdentity();
							{
								this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
								this._tmpMatrix.scaleRelative(scaleX, scaleY);
								this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
							}
							this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
						}
						clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
						clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
						var clipDrawCount = clipContext._clippingIdCount;
						for (var i = 0; i < clipDrawCount; i++) {
							var clipDrawIndex = clipContext._clippingIdList[i];
							if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
								continue;
							}
							renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
							renderer.setClippingContextBufferForMask(clipContext);
							renderer.drawMesh(model.getDrawableTextureIndices(clipDrawIndex), 
							  model.getDrawableVertexIndexCount(clipDrawIndex), 
							  model.getDrawableVertexCount(clipDrawIndex), 
							  model.getDrawableVertexIndices(clipDrawIndex), 
							  model.getDrawableVertices(clipDrawIndex), 
							  model.getDrawableVertexUvs(clipDrawIndex), 
							  model.getDrawableOpacity(clipDrawIndex), 
							  CubismBlendMode.CubismBlendMode_Normal,
							  false
							);
						}
					}
				}
				this.setupClippingContextAfter(model, renderer);
			};
			CubismClippingManager_WebGL.prototype.setupClippingContextAfter = function (model, renderer) {
				renderer.setClippingContextBufferForMask(null);
				//村人Ａ
				const a = s_viewport[model._modelName];
				this.gl.viewport(a[0], a[1], a[2], a[3]);
				this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
			}
			CubismClippingManager_WebGL.prototype.releasePart = function () {
				this.gl.deleteTexture(this._colorBuffer);
				this.gl.deleteFramebuffer(this._maskTexture.texture);
				this._maskTexture = null
			}
			//21/01/29 村人A
			CubismClippingManager_WebGL.prototype.restoreGl = function () {
				this._colorBuffer = this.gl.createTexture();
					ret = this.gl.createFramebuffer();
			}
			CubismClippingManager_WebGL.prototype.findSameClip = function (drawableMasks, drawableMaskCounts) {
				for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
					var clippingContext = this._clippingContextListForMask.at(i);
					var count = clippingContext._clippingIdCount;
					if (count != drawableMaskCounts) {
						continue;
					}
					var sameCount = 0;
					for (var j = 0; j < count; j++) {
						var clipId = clippingContext._clippingIdList[j];
						for (var k = 0; k < count; k++) {
							if (drawableMasks[k] == clipId) {
								sameCount++;
								break;
							}
						}
					}
					if (sameCount == count) {
						return clippingContext;
					}
				}
				return null;
			};
			CubismClippingManager_WebGL.prototype.setupLayoutBounds = function (usingClipCount) {
				var div = usingClipCount / ColorChannelCount;
				var mod = usingClipCount % ColorChannelCount;
				div = ~~div;
				mod = ~~mod;
				var curClipIndex = 0;
				for (var channelNo = 0; channelNo < ColorChannelCount; channelNo++) {
					var layoutCount = div + (channelNo < mod ? 1 : 0);
					if (layoutCount == 0) {
					}
					else if (layoutCount == 1) {
						var clipContext = this._clippingContextListForMask.at(curClipIndex++);
						clipContext._layoutChannelNo = channelNo;
						clipContext._layoutBounds.x = 0.0;
						clipContext._layoutBounds.y = 0.0;
						clipContext._layoutBounds.width = 1.0;
						clipContext._layoutBounds.height = 1.0;
					}
					else if (layoutCount == 2) {
						for (var i = 0; i < layoutCount; i++) {
							var xpos = i % 2;
							xpos = ~~xpos;
							var cc = this._clippingContextListForMask.at(curClipIndex++);
							cc._layoutChannelNo = channelNo;
							cc._layoutBounds.x = xpos * 0.5;
							cc._layoutBounds.y = 0.0;
							cc._layoutBounds.width = 0.5;
							cc._layoutBounds.height = 1.0;
						}
					}
					else if (layoutCount <= 4) {
						for (var i = 0; i < layoutCount; i++) {
							var xpos = i % 2;
							var ypos = i / 2;
							xpos = ~~xpos;
							ypos = ~~ypos;
							var cc = this._clippingContextListForMask.at(curClipIndex++);
							cc._layoutChannelNo = channelNo;
							cc._layoutBounds.x = xpos * 0.5;
							cc._layoutBounds.y = ypos * 0.5;
							cc._layoutBounds.width = 0.5;
							cc._layoutBounds.height = 0.5;
						}
					}
					else if (layoutCount <= 9) {
						for (var i = 0; i < layoutCount; i++) {
							var xpos = i % 3;
							var ypos = i / 3;
							xpos = ~~xpos;
							ypos = ~~ypos;
							var cc = this._clippingContextListForMask.at(curClipIndex++);
							cc._layoutChannelNo = channelNo;
							cc._layoutBounds.x = xpos / 3.0;
							cc._layoutBounds.y = ypos / 3.0;
							cc._layoutBounds.width = 1.0 / 3.0;
							cc._layoutBounds.height = 1.0 / 3.0;
						}
					}
					else {
						CubismLogError('not supported mask count : {0}', layoutCount);
					}
				}
			};
			CubismClippingManager_WebGL.prototype.getColorBuffer = function () {
				return this._colorBuffer;
			};
			CubismClippingManager_WebGL.prototype.getClippingContextListForDraw = function () {
				return this._clippingContextListForDraw;
			};
			CubismClippingManager_WebGL.prototype.setClippingMaskBufferSize = function (size) {
				this._clippingMaskBufferSize = size;
			};
			CubismClippingManager_WebGL.prototype.getClippingMaskBufferSize = function () {
				return this._clippingMaskBufferSize;
			};
			return CubismClippingManager_WebGL;
		}());
		Live2DCubismFramework.CubismClippingManager_WebGL = CubismClippingManager_WebGL;
		var CubismRenderTextureResource = /** @class */ (function () {
			function CubismRenderTextureResource(frameNo, texture) {
				this.frameNo = frameNo;
				this.texture = texture;
			}
			return CubismRenderTextureResource;
		}());
		Live2DCubismFramework.CubismRenderTextureResource = CubismRenderTextureResource;
		var CubismClippingContext = /** @class */ (function () {
			function CubismClippingContext(manager, clippingDrawableIndices, clipCount) {
				this._owner = manager;
				// クリップしている（＝マスク用の）Drawableのインデックスリスト
				this._clippingIdList = clippingDrawableIndices;
				// マスクの数
				this._clippingIdCount = clipCount;
				this._allClippedDrawRect = new csmRect();
				this._layoutBounds = new csmRect();
				this._clippedDrawableIndexList = [];
				this._matrixForMask = new CubismMatrix44();
				this._matrixForDraw = new CubismMatrix44();
			}
			CubismClippingContext.prototype.release = function () {
				if (this._layoutBounds != null) {
					this._layoutBounds = null;
				}
				if (this._allClippedDrawRect != null) {
					this._allClippedDrawRect = null;
				}
				if (this._clippedDrawableIndexList != null) {
					this._clippedDrawableIndexList = null;
				}
			};
			CubismClippingContext.prototype.addClippedDrawable = function (drawableIndex) {
				this._clippedDrawableIndexList.push(drawableIndex);
			};
			CubismClippingContext.prototype.getClippingManager = function () {
				return this._owner;
			};
			CubismClippingContext.prototype.setGl = function (gl) {
				this._owner.setGL($gameLive2d.gl); //村人Ａ
			};
			return CubismClippingContext;
		}());
		Live2DCubismFramework.CubismClippingContext = CubismClippingContext;
		var CubismShader_WebGL = /** @class */ (function () {
			function CubismShader_WebGL() {
				this._shaderSets = new csmVector();
			}
			CubismShader_WebGL.getInstance = function (name) {
				if (s_instance[name] == null) {
					s_instance[name] = new CubismShader_WebGL();
					return s_instance[name];
				}
				return s_instance[name];
			};
			CubismShader_WebGL.deleteInstance = function () {
				if (s_instance) {
					s_instance.release();
					s_instance = null;
				}
			};
			CubismShader_WebGL.prototype.release = function (model, textureNo) {
				this.releaseShaderProgram();
			};
			CubismShader_WebGL.prototype.testShaderCompile = function (model, textureNo) {
				if (this._shaderSets.getSize() == 0 || model._doInitShader || ~model._doInitShaderByTintTextureIdArray.indexOf(textureNo)) {
					return this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcSetupMask, Live2DCubismFramework.fragmentShaderSrcsetupMask) != 0
				}
				return true
			}
			CubismShader_WebGL.prototype.setupShaderProgram = function (renderer, textureId, vertexCount, vertexArray, indexArray, uvArray, bufferData, opacity, colorBlendMode, baseColor, isPremultipliedAlpha, matrix4x4, invertedMask, model, textureNo) {
				if (!isPremultipliedAlpha) {
					CubismLogError('NoPremultipliedAlpha is not allowed');
				}
				this._textureNo = textureNo;
				if (this._shaderSets.getSize() == 0) {
					this._modelName = model._modelName;
					this.generateShaders();
				}
				if(model._doInitShader){
					this._modelName = model._modelName;
					this.generateShaders();
				}
				if(~model._doInitShaderByTintTextureIdArray.indexOf(textureNo)){
					this._modelName = model._modelName;
					this.generateShaders();
					model._doInitShaderByTintTextureIdArray.splice(model._doInitShaderByTintTextureIdArray.indexOf(textureNo), 1)
				}
				var SRC_COLOR;
				var DST_COLOR;
				var SRC_ALPHA;
				var DST_ALPHA;
				
				if (renderer.getClippingContextBufferForMask() != null) {
					var shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_SetupMask);
					this.gl.useProgram(shaderSet.shaderProgram);
					this.gl.activeTexture(this.gl.TEXTURE0);
					this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
					this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
					if (bufferData.vertex == null) {
						bufferData.vertex = this.gl.createBuffer();
					}
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
					this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
					this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
					this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
					if (bufferData.uv == null) {
						bufferData.uv = this.gl.createBuffer();
					}
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
					this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
					this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
					this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
					var channelNo = renderer.getClippingContextBufferForMask()
						._layoutChannelNo;
					var colorChannel = renderer
						.getClippingContextBufferForMask()
						.getClippingManager()
						.getChannelFlagAsColor(channelNo);
					this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
					this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForMask()._matrixForMask.getArray());
					var rect = renderer.getClippingContextBufferForMask()
						._layoutBounds;
					this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2.0 - 1.0, rect.y * 2.0 - 1.0, rect.getRight() * 2.0 - 1.0, rect.getBottom() * 2.0 - 1.0);
					SRC_COLOR = this.gl.ZERO;
					DST_COLOR = this.gl.ONE_MINUS_SRC_COLOR;
					SRC_ALPHA = this.gl.ZERO;
					DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
				}
				else {
					var masked = renderer.getClippingContextBufferForDraw() != null;
					var offset = masked ? (invertedMask ? 2 : 1) : 0;
					var shaderSet = new CubismShaderSet();
					switch (colorBlendMode) {
						case CubismBlendMode.CubismBlendMode_Normal:
						default:
							shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_NormalPremultipliedAlpha + offset);
							SRC_COLOR = this.gl.ONE;
							DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
							SRC_ALPHA = this.gl.ONE;
							DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
							break;
						case CubismBlendMode.CubismBlendMode_Additive:
							shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_AddPremultipliedAlpha + offset);
							SRC_COLOR = this.gl.ONE;
							DST_COLOR = this.gl.ONE;
							SRC_ALPHA = this.gl.ZERO;
							DST_ALPHA = this.gl.ONE;
							break;
						case CubismBlendMode.CubismBlendMode_Multiplicative:
							shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_MultPremultipliedAlpha + offset);
							SRC_COLOR = this.gl.DST_COLOR;
							DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
							SRC_ALPHA = this.gl.ZERO;
							DST_ALPHA = this.gl.ONE;
							break;
						case 3:
							//shaderSet = this._shaderSets.at(10 + offset);
							shaderSet = this._tintShaderByTextures[textureNo][offset];
							SRC_COLOR = this.gl.ONE;
							DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
							SRC_ALPHA = this.gl.ONE;
							DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
							break;
					}
					this.gl.useProgram(shaderSet.shaderProgram);
					if (bufferData.vertex == null) {
						bufferData.vertex = this.gl.createBuffer();
					}
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
					this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
					this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
					this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
					if (bufferData.uv == null) {
						bufferData.uv = this.gl.createBuffer();
					}
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
					this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
					this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
					this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
					if (masked) {
						this.gl.activeTexture(this.gl.TEXTURE30);
						var tex = renderer
							.getClippingContextBufferForDraw()
							.getClippingManager()
							.getColorBuffer();
						this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
						this.gl.uniform1i(shaderSet.samplerTexture1Location, 30);
						this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForDraw()._matrixForDraw.getArray());
						var channelNo = renderer.getClippingContextBufferForDraw()
							._layoutChannelNo;
						var colorChannel = renderer
							.getClippingContextBufferForDraw()
							.getClippingManager()
							.getChannelFlagAsColor(channelNo);
						this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
					}
					this.gl.activeTexture(this.gl.TEXTURE0);
					this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
					this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
					let mat = new Float32Array(matrix4x4.getArray());
					if(model._rotation){
						var rad = model._rotation;
						this.rotateZ(mat, Math.PI * rad / 180)
					}
					if(model._invertY){
						this.invertY(mat)
					}
					if(model._invertX){
						this.invertX(mat)
					}
					this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, mat);
					this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.R, baseColor.G, baseColor.B, baseColor.A);
				}
				if (bufferData.index == null) {
					bufferData.index = this.gl.createBuffer();
				}
				this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, bufferData.index);
				this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
				this.gl.blendFuncSeparate(SRC_COLOR, DST_COLOR, SRC_ALPHA, DST_ALPHA);
			};
			CubismShader_WebGL.prototype.maskTextureReset = function (renderer) {
				var shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_SetupMask);
				this.gl.activeTexture(this.gl.TEXTURE1);
				this.gl.bindTexture(this.gl.TEXTURE_2D, null);
				this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
			}
			CubismShader_WebGL.prototype.invertX = function (m) {
				m[5] = -m[5]
				return m
			}
			CubismShader_WebGL.prototype.invertY = function (m) {
				m[0] = -m[0]
				return m
			}
			CubismShader_WebGL.prototype.rotateZ = function (m, angle) {
				var c = Math.cos(angle);
				var s = Math.sin(angle);
				var mv0 = m[0], mv4 = m[4], mv8 = m[8]; 

				m[0] = c*m[0]-s*m[1];
				m[4] = c*m[4]-s*m[5];
				m[8] = c*m[8]-s*m[9];
				m[1] = c*m[1]+s*mv0;
				m[5] = c*m[5]+s*mv4;
				m[9] = c*m[9]+s*mv8;
				return m
			 }
			CubismShader_WebGL.prototype.releaseShaderProgram = function () {
				for (var i = 0; i < this._shaderSets.getSize(); i++) {
					this.gl.deleteProgram(this._shaderSets.at(i).shaderProgram);
					this._shaderSets.at(i).shaderProgram = 0;
					this._shaderSets.set(i, void 0);
					this._shaderSets.set(i, null);
				}
			};
			CubismShader_WebGL.prototype._testGenerateShaders = function (name) {
				return !!this.compileShaderSource(this.gl.VERTEX_SHADER, Live2DCubismFramework.vertexShaderSrcSetupMask);
			}
			CubismShader_WebGL.prototype.generateShaders = function () {
				for (var i = 0; i < shaderCount; i++) {
					this._shaderSets.pushBack(new CubismShaderSet());
				}
				this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcSetupMask, Live2DCubismFramework.fragmentShaderSrcsetupMask);
				this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrc, Live2DCubismFramework.fragmentShaderSrcPremultipliedAlpha);
				this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlpha);
				this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskInvertedPremultipliedAlpha);
				this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram;
				this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram;
				this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram;
				this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram;
				this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram;
				this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram;
				this._shaderSets.at(10).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrc, Live2DCubismFramework.fragmentShaderSrcPremultipliedAlphaMozaic(this._modelName, this._textureNo));
				this._shaderSets.at(11).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlphaMozaic(this._modelName, this._textureNo));
				this._shaderSets.at(12).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskInvertedPremultipliedAlphaMozaic(this._modelName, this._textureNo));
				this._tintShaderByTextures = [];
				for(let i = 0; i < 10; i ++){
					let arr = [];
					const shaderSet1 = new CubismShaderSet();
					shaderSet1.shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrc, Live2DCubismFramework.fragmentShaderSrcPremultipliedAlphaMozaic(this._modelName, i))
					arr.push(shaderSet1);
					const shaderSet2 = new CubismShaderSet();
					shaderSet2.shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlphaMozaic(this._modelName, i));
					arr.push(shaderSet2);
					const shaderSet3 = new CubismShaderSet();
					shaderSet3.shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskInvertedPremultipliedAlphaMozaic(this._modelName, i));
					arr.push(shaderSet3);
					this._tintShaderByTextures.push(arr)
				}
				if(this._shaderSets.at(0).shaderProgram == 0){
					throw new Error("PCスペックによるエラーです。推奨環境にてお試しください。");
				}
				this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, 'a_position');
				this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, 'a_texCoord');
				this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 's_texture0');
				this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_baseColor');
				this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, 'a_position');
				this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, 'a_texCoord');
				this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 's_texture0');
				this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_matrix');
				this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_baseColor');
				this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, 'a_position');
				this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, 'a_texCoord');
				this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 's_texture0');
				this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 's_texture30');
				this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_matrix');
				this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_baseColor');
				this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, 'a_position');
				this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, 'a_texCoord');
				this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 's_texture0');
				this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 's_texture30');
				this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_matrix');
				this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_baseColor');
				this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, 'a_position');
				this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, 'a_texCoord');
				this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 's_texture0');
				this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_matrix');
				this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_baseColor');
				this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, 'a_position');
				this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, 'a_texCoord');
				this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 's_texture0');
				this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 's_texture30');
				this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_matrix');
				this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_baseColor');
				this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, 'a_position');
				this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, 'a_texCoord');
				this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 's_texture0');
				this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 's_texture30');
				this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_matrix');
				this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_baseColor');
				this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, 'a_position');
				this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, 'a_texCoord');
				this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 's_texture0');
				this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_matrix');
				this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_baseColor');
				this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, 'a_position');
				this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, 'a_texCoord');
				this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 's_texture0');
				this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 's_texture30');
				this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_matrix');
				this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_baseColor');
				this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, 'a_position');
				this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, 'a_texCoord');
				this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 's_texture0');
				this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 's_texture30');
				this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_matrix');
				this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_baseColor');
				this._shaderSets.at(10).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(10).shaderProgram, 'a_position');
				this._shaderSets.at(10).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(10).shaderProgram, 'a_texCoord');
				this._shaderSets.at(10).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(10).shaderProgram, 's_texture0');
				this._shaderSets.at(10).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(10).shaderProgram, 'u_matrix');
				this._shaderSets.at(10).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(10).shaderProgram, 'u_baseColor');
				this._shaderSets.at(11).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(11).shaderProgram, 'a_position');
				this._shaderSets.at(11).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(11).shaderProgram, 'a_texCoord');
				this._shaderSets.at(11).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(11).shaderProgram, 's_texture0');
				this._shaderSets.at(11).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(11).shaderProgram, 's_texture30');
				this._shaderSets.at(11).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(11).shaderProgram, 'u_matrix');
				this._shaderSets.at(11).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(11).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(11).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(11).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(11).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(11).shaderProgram, 'u_baseColor');
				this._shaderSets.at(12).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(12).shaderProgram, 'a_position');
				this._shaderSets.at(12).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(12).shaderProgram, 'a_texCoord');
				this._shaderSets.at(12).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(12).shaderProgram, 's_texture0');
				this._shaderSets.at(12).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(12).shaderProgram, 's_texture30');
				this._shaderSets.at(12).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(12).shaderProgram, 'u_matrix');
				this._shaderSets.at(12).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(12).shaderProgram, 'u_clipMatrix');
				this._shaderSets.at(12).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(12).shaderProgram, 'u_channelFlag');
				this._shaderSets.at(12).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(12).shaderProgram, 'u_baseColor');
				for(let i = 0; i < 10; i ++){
					const arr = this._tintShaderByTextures[i]
					arr[0].attributePositionLocation = this.gl.getAttribLocation(arr[0].shaderProgram, 'a_position');
					arr[0].attributeTexCoordLocation = this.gl.getAttribLocation(arr[0].shaderProgram, 'a_texCoord');
					arr[0].samplerTexture0Location = this.gl.getUniformLocation(arr[0].shaderProgram, 's_texture0');
					arr[0].uniformMatrixLocation = this.gl.getUniformLocation(arr[0].shaderProgram, 'u_matrix');
					arr[0].uniformBaseColorLocation = this.gl.getUniformLocation(arr[0].shaderProgram, 'u_baseColor');
					arr[1].attributePositionLocation = this.gl.getAttribLocation(arr[1].shaderProgram, 'a_position');
					arr[1].attributeTexCoordLocation = this.gl.getAttribLocation(arr[1].shaderProgram, 'a_texCoord');
					arr[1].samplerTexture0Location = this.gl.getUniformLocation(arr[1].shaderProgram, 's_texture0');
					arr[1].samplerTexture1Location = this.gl.getUniformLocation(arr[1].shaderProgram, 's_texture30');
					arr[1].uniformMatrixLocation = this.gl.getUniformLocation(arr[1].shaderProgram, 'u_matrix');
					arr[1].uniformClipMatrixLocation = this.gl.getUniformLocation(arr[1].shaderProgram, 'u_clipMatrix');
					arr[1].uniformChannelFlagLocation = this.gl.getUniformLocation(arr[1].shaderProgram, 'u_channelFlag');
					arr[1].uniformBaseColorLocation = this.gl.getUniformLocation(arr[1].shaderProgram, 'u_baseColor');
					arr[2].attributePositionLocation = this.gl.getAttribLocation(arr[2].shaderProgram, 'a_position');
					arr[2].attributeTexCoordLocation = this.gl.getAttribLocation(arr[2].shaderProgram, 'a_texCoord');
					arr[2].samplerTexture0Location = this.gl.getUniformLocation(arr[2].shaderProgram, 's_texture0');
					arr[2].samplerTexture1Location = this.gl.getUniformLocation(arr[2].shaderProgram, 's_texture30');
					arr[2].uniformMatrixLocation = this.gl.getUniformLocation(arr[2].shaderProgram, 'u_matrix');
					arr[2].uniformClipMatrixLocation = this.gl.getUniformLocation(arr[2].shaderProgram, 'u_clipMatrix');
					arr[2].uniformChannelFlagLocation = this.gl.getUniformLocation(arr[2].shaderProgram, 'u_channelFlag');
					arr[2].uniformBaseColorLocation = this.gl.getUniformLocation(arr[2].shaderProgram, 'u_baseColor');
				}
			};
			CubismShader_WebGL.prototype.loadShaderProgram = function (vertexShaderSource, fragmentShaderSource) {
				if(!this.gl){
					if($gameLive2d.gl){
						this.gl = $gameLive2d.gl;
					} else {
						throw new Error("Webglの読み込みがうまくいっていない可能性がございます。リセットして再度お試しください。3");
					}
				}
				var shaderProgram = this.gl.createProgram();
				var vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
				if (!vertShader) {
					CubismLogError('Vertex shader compile error!');
					return 0;
				}
				var fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
				if (!fragShader) {
					CubismLogError('Vertex shader compile error!');
					return 0;
				}
				this.gl.attachShader(shaderProgram, vertShader);
				this.gl.attachShader(shaderProgram, fragShader);
				this.gl.linkProgram(shaderProgram);
				var linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
				if (!linkStatus) {
					CubismLogError('Failed to link program: {0}', shaderProgram);
					this.gl.deleteShader(vertShader);
					vertShader = 0;
					this.gl.deleteShader(fragShader);
					fragShader = 0;
					if (shaderProgram) {
						this.gl.deleteProgram(shaderProgram);
						shaderProgram = 0;
					}
					return 0;
				}
				this.gl.deleteShader(vertShader);
				this.gl.deleteShader(fragShader);
				return shaderProgram;
			};
			CubismShader_WebGL.prototype.compileShaderSource = function (shaderType, shaderSource) {
				var source = shaderSource;
				var shader = this.gl.createShader(shaderType);
				this.gl.shaderSource(shader, source);
				this.gl.compileShader(shader);
				if (!shader) {
					var log = this.gl.getShaderInfoLog(shader);
					CubismLogError('Shader compile log: {0} ', log);
				}
				var status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
				if (!status) {
					this.gl.deleteShader(shader);
					return null;
				}
				return shader;
			};
			CubismShader_WebGL.prototype.setGl = function (gl) {
				this.gl = $gameLive2d.gl;
			};
			return CubismShader_WebGL;
		}());
		Live2DCubismFramework.CubismShader_WebGL = CubismShader_WebGL;
		var CubismShaderSet = /** @class */ (function () {
			function CubismShaderSet() {
			}
			return CubismShaderSet;
		}());
		Live2DCubismFramework.CubismShaderSet = CubismShaderSet;
		var ShaderNames;
		(function (ShaderNames) {
			ShaderNames[ShaderNames["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
			ShaderNames[ShaderNames["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_NomralMaskedInvertedPremultipliedAlpha"] = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_AddPremultipliedAlpha"] = 4] = "ShaderNames_AddPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlpha"] = 5] = "ShaderNames_AddMaskedPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlphaInverted"] = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted";
			ShaderNames[ShaderNames["ShaderNames_MultPremultipliedAlpha"] = 7] = "ShaderNames_MultPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlpha"] = 8] = "ShaderNames_MultMaskedPremultipliedAlpha";
			ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlphaInverted"] = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted";
		})(ShaderNames = Live2DCubismFramework.ShaderNames || (Live2DCubismFramework.ShaderNames = {}));
		Live2DCubismFramework.vertexShaderSrcSetupMask = 'attribute vec4     a_position;' +
			'attribute vec2     a_texCoord;' +
			'varying vec2       v_texCoord;' +
			'varying vec4       v_myPos;' +
			'uniform mat4       u_clipMatrix;' +
			'void main()' +
			'{' +
			'   gl_Position = u_clipMatrix * a_position;' +
			'   v_myPos = u_clipMatrix * a_position;' +
			'   v_texCoord = a_texCoord;' +
			'   v_texCoord.y = 1.0 - v_texCoord.y;' +
			'}';
		Live2DCubismFramework.fragmentShaderSrcsetupMask = 'precision mediump float;' +
			'varying vec2       v_texCoord;' +
			'varying vec4       v_myPos;' +
			'uniform vec4       u_baseColor;' +
			'uniform vec4       u_channelFlag;' +
			'uniform sampler2D  s_texture0;' +
			'void main()' +
			'{' +
			'   float isInside = ' +
			'       step(u_baseColor.x, v_myPos.x/v_myPos.w)' +
			'       * step(u_baseColor.y, v_myPos.y/v_myPos.w)' +
			'       * step(v_myPos.x/v_myPos.w, u_baseColor.z)' +
			'       * step(v_myPos.y/v_myPos.w, u_baseColor.w);' +
			'   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;' +
			'}';
		Live2DCubismFramework.vertexShaderSrc = 'attribute vec4     a_position;' + 
			'attribute vec2     a_texCoord;' + 
			'varying vec2       v_texCoord;' + 
			'uniform mat4       u_matrix;' +
			'void main()' +
			'{' +
			'   gl_Position = u_matrix * a_position;' +
			'   v_texCoord = a_texCoord;' +
			'   v_texCoord.y = 1.0 - v_texCoord.y;' +
			'}';
		Live2DCubismFramework.vertexShaderSrcMasked = 'attribute vec4     a_position;' +
			'attribute vec2     a_texCoord;' +
			'varying vec2       v_texCoord;' +
			'varying vec4       v_clipPos;' +
			'uniform mat4       u_matrix;' +
			'uniform mat4       u_clipMatrix;' +
			'void main()' +
			'{' +
			'   gl_Position = u_matrix * a_position;' +
			'   v_clipPos = u_clipMatrix * a_position;' +
			'   v_texCoord = a_texCoord;' +
			'   v_texCoord.y = 1.0 - v_texCoord.y;' +
			'}';
		Live2DCubismFramework.fragmentShaderSrcPremultipliedAlpha = 'precision mediump float;' +
			'varying vec2       v_texCoord;' + 
			'uniform vec4       u_baseColor;' +
			'uniform sampler2D  s_texture0;' + 
			'uniform vec2       uRotationVector;' +
			'void main()' +
			'{' +
			'   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;' +
			'}';
		Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlpha = 'precision mediump float;' +
			'varying vec2       v_texCoord;' +
			'varying vec4       v_clipPos;' +
			'uniform vec4       u_baseColor;' +
			'uniform vec4       u_channelFlag;' +
			'uniform sampler2D  s_texture0;' +
			'uniform sampler2D  s_texture30;' +
			'void main()' +
			'{' +
			'   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;' +
			'   vec4 clipMask = (1.0 - texture2D(s_texture30, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
			'   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
			'   col_formask = col_formask * maskVal;' +
			'   gl_FragColor = col_formask;' +
			'}';
		Live2DCubismFramework.fragmentShaderSrcMaskInvertedPremultipliedAlpha = 'precision mediump float;' +
			'varying vec2 v_texCoord;' +
			'varying vec4 v_clipPos;' +
			'uniform sampler2D s_texture0;' +
			'uniform sampler2D s_texture30;' +
			'uniform vec4 u_channelFlag;' +
			'uniform vec4 u_baseColor;' +
			'void main()' +
			'{' +
			'vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;' +
			'vec4 clipMask = (1.0 - texture2D(s_texture30, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
			'float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
			'col_formask = col_formask * (1.0 - maskVal);' +
			'gl_FragColor = col_formask;' +
			'}';
			
			
		const getMozaicRoughness = function(name){
			if(!$gameLive2d){
				const mozaicQuority = (167).toFixed(1);
				return [mozaicQuority, mozaicQuority];
			} else {
				const size = $gameLive2d.data[name].textureSize;
				const roungh = $gameLive2d.data[name].mozaicRough;
				if(size[0] == size[1]){
					return [roungh, roungh];
				} else if(size[0] > size[1]){
					const rate = size[0] / size[1]
					return [Number(roungh*rate).toFixed(1), roungh];
				} else {
					const rate = size[1] / size[0]
					return [roungh, Number(roungh*rate).toFixed(1)];
				}
			}
		}
		const getTintInfo = function(name, id){
			if(!$gameLive2d.data[name] || !$gameLive2d.data[name].tintInfo[id]){return ['0.0,0.0,0.0,0.0', '0.0,0.0,0.0,0.0', '0.0', '255.0']}
			return $gameLive2d.data[name].tintInfo[id];
		}
		
		const addColorParam = '0.0, 0.0, 0.0, 0.0';
		const blendColorParam = '0.0, 0.0, 0.0, 0.0';
		const hue = '80.0';
		const brightness = '255.0';
			
		Live2DCubismFramework.fragmentShaderSrcsetupMaskMozaic = function(name, textureId){
			const a = getTintInfo(name, textureId);
			const str = 'precision mediump float;' +
			'varying vec2       v_texCoord;' +
			'varying vec4       v_myPos;' +
			'uniform vec4       u_baseColor;' +
			'uniform vec4       u_channelFlag;' +
			'uniform sampler2D  s_texture0;' +
			'vec3 rgbToHsl(vec3 rgb) {' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float cmin = min(r, min(g, b));' +
			'	float cmax = max(r, max(g, b));' +
			'	float h = 0.0;' +
			'	float s = 0.0;' +
			'	float l = (cmin + cmax) / 2.0;' +
			'	float delta = cmax - cmin;' +
			'	if (delta > 0.0) {' +
			'		if (r == cmax) {' +
			'			h = mod((g - b) / delta + 6.0, 6.0) / 6.0;' +
			'		} else if (g == cmax) {' +
			'			h = ((b - r) / delta + 2.0) / 6.0;' +
			'		} else {' +
			'			h = ((r - g) / delta + 4.0) / 6.0;' +
			'		}' +
			'		if (l < 1.0) {' +
			'			s = delta / (1.0 - abs(2.0 * l - 1.0));' +
			'		}' +
			'	}' +
			'	return vec3(h, s, l);' +
			'}' +
			'	vec3 hslToRgb(vec3 hsl) {' +
			'	float h = hsl.x;' +
			'	float s = hsl.y;' +
			'	float l = hsl.z;' +
			'	float c = (1.0 - abs(2.0 * l - 1.0)) * s;' +
			'	float x = c * (1.0 - abs((mod(h * 6.0, 2.0)) - 1.0));' +
			'	float m = l - c / 2.0;' +
			'	float cm = c + m;' +
			'	float xm = x + m;' +
			'	if (h < 1.0 / 6.0) {' +
			'		return vec3(cm, xm, m);' +
			'	} else if (h < 2.0 / 6.0) {' +
			'		return vec3(xm, cm, m);' +
			'	} else if (h < 3.0 / 6.0) {' +
			'		return vec3(m, cm, xm);' +
			'	} else if (h < 4.0 / 6.0) {' +
			'		return vec3(m, xm, cm);' +
			'	} else if (h < 5.0 / 6.0) {' +
			'		return vec3(xm, m, cm);' +
			'	} else {' +
			'		return vec3(cm, m, xm);' +
			'	}' +
			'}' +
			'void main()' +
			'{' +
			'   float isInside = ' +
			'       step(u_baseColor.x, v_myPos.x/v_myPos.w)' +
			'       * step(u_baseColor.y, v_myPos.y/v_myPos.w)' +
			'       * step(v_myPos.x/v_myPos.w, u_baseColor.z)' +
			'       * step(v_myPos.y/v_myPos.w, u_baseColor.w);' +
			'	vec4 colorTone = vec4(' + a[0] + ');' +
			'	vec4 blendColor = vec4(' + a[1] + ');' +
			'	float hue = ' + a[2] + ';' +
			'	float brightness = ' + a[3] + ';' +
			'	vec4 sample = texture2D(s_texture0, v_texCoord);' +
			'	float a = sample.a;' +
			'	vec3 hsl = rgbToHsl(sample.rgb);' +
			'	hsl.x = mod(hsl.x + hue / 360.0, 1.0);' +
			'	hsl.y = hsl.y * (1.0 - colorTone.a / 255.0);' +
			'	vec3 rgb = hslToRgb(hsl);' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float r2 = colorTone.r / 255.0;' +
			'	float g2 = colorTone.g / 255.0;' +
			'	float b2 = colorTone.b / 255.0;' +
			'	float r3 = blendColor.r / 255.0;' +
			'	float g3 = blendColor.g / 255.0;' +
			'	float b3 = blendColor.b / 255.0;' +
			'	float i3 = blendColor.a / 255.0;' +
			'	float i1 = 1.0 - i3;' +
			'	r = clamp((r / a + r2) * a, 0.0, 1.0);' +
			'	g = clamp((g / a + g2) * a, 0.0, 1.0);' +
			'	b = clamp((b / a + b2) * a, 0.0, 1.0);' +
			'	r = clamp(r * i1 + r3 * i3 * a, 0.0, 1.0);' +
			'	g = clamp(g * i1 + g3 * i3 * a, 0.0, 1.0);' +
			'	b = clamp(b * i1 + b3 * i3 * a, 0.0, 1.0);' +
			'	r = r * brightness / 255.0;' +
			'	g = g * brightness / 255.0;' +
			'	b = b * brightness / 255.0;' +
			'	gl_FragColor = u_channelFlag * vec4(r, g, b, a).a * isInside;' +
			'}';
			return str;
		}
		Live2DCubismFramework.fragmentShaderSrcPremultipliedAlphaMozaic =  function(name, textureId){
			const a = getTintInfo(name, textureId);
			const str = 'precision mediump float;' +
			'varying vec2       v_texCoord;' +
			'uniform vec4       u_baseColor;' +
			'uniform sampler2D  s_texture0;' +
			'vec3 rgbToHsl(vec3 rgb) {' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float cmin = min(r, min(g, b));' +
			'	float cmax = max(r, max(g, b));' +
			'	float h = 0.0;' +
			'	float s = 0.0;' +
			'	float l = (cmin + cmax) / 2.0;' +
			'	float delta = cmax - cmin;' +
			'	if (delta > 0.0) {' +
			'		if (r == cmax) {' +
			'			h = mod((g - b) / delta + 6.0, 6.0) / 6.0;' +
			'		} else if (g == cmax) {' +
			'			h = ((b - r) / delta + 2.0) / 6.0;' +
			'		} else {' +
			'			h = ((r - g) / delta + 4.0) / 6.0;' +
			'		}' +
			'		if (l < 1.0) {' +
			'			s = delta / (1.0 - abs(2.0 * l - 1.0));' +
			'		}' +
			'	}' +
			'	return vec3(h, s, l);' +
			'}' +
			'	vec3 hslToRgb(vec3 hsl) {' +
			'	float h = hsl.x;' +
			'	float s = hsl.y;' +
			'	float l = hsl.z;' +
			'	float c = (1.0 - abs(2.0 * l - 1.0)) * s;' +
			'	float x = c * (1.0 - abs((mod(h * 6.0, 2.0)) - 1.0));' +
			'	float m = l - c / 2.0;' +
			'	float cm = c + m;' +
			'	float xm = x + m;' +
			'	if (h < 1.0 / 6.0) {' +
			'		return vec3(cm, xm, m);' +
			'	} else if (h < 2.0 / 6.0) {' +
			'		return vec3(xm, cm, m);' +
			'	} else if (h < 3.0 / 6.0) {' +
			'		return vec3(m, cm, xm);' +
			'	} else if (h < 4.0 / 6.0) {' +
			'		return vec3(m, xm, cm);' +
			'	} else if (h < 5.0 / 6.0) {' +
			'		return vec3(xm, m, cm);' +
			'	} else {' +
			'		return vec3(cm, m, xm);' +
			'	}' +
			'}' +
			'void main()' +
			'{' +
			'	vec4 colorTone = vec4(' + a[0] + ');' +
			'	vec4 blendColor = vec4(' + a[1] + ');' +
			'	float hue = ' + a[2] + ';' +
			'	float brightness = ' + a[3] + ';' +
			'	vec4 sample = texture2D(s_texture0, v_texCoord);' +
			'	float a = sample.a;' +
			'	vec3 hsl = rgbToHsl(sample.rgb);' +
			'	hsl.x = mod(hsl.x + hue / 360.0, 1.0);' +
			'	hsl.y = hsl.y * (1.0 - colorTone.a / 255.0);' +
			'	vec3 rgb = hslToRgb(hsl);' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float r2 = colorTone.r / 255.0;' +
			'	float g2 = colorTone.g / 255.0;' +
			'	float b2 = colorTone.b / 255.0;' +
			'	float r3 = blendColor.r / 255.0;' +
			'	float g3 = blendColor.g / 255.0;' +
			'	float b3 = blendColor.b / 255.0;' +
			'	float i3 = blendColor.a / 255.0;' +
			'	float i1 = 1.0 - i3;' +
			'	r = clamp((r / a + r2) * a, 0.0, 1.0);' +
			'	g = clamp((g / a + g2) * a, 0.0, 1.0);' +
			'	b = clamp((b / a + b2) * a, 0.0, 1.0);' +
			'	r = clamp(r * i1 + r3 * i3 * a, 0.0, 1.0);' +
			'	g = clamp(g * i1 + g3 * i3 * a, 0.0, 1.0);' +
			'	b = clamp(b * i1 + b3 * i3 * a, 0.0, 1.0);' +
			'	r = r * brightness / 255.0;' +
			'	g = g * brightness / 255.0;' +
			'	b = b * brightness / 255.0;' +
			'	gl_FragColor = vec4(r, g, b, a) * u_baseColor;' +
			'}';
			return str;
		}
		Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlphaMozaic =  function(name, textureId){
			const a = getTintInfo(name, textureId);
			const str = 'precision mediump float;' +
			'varying vec2      v_texCoord;' +
			'varying vec4      v_clipPos;' +
			'uniform vec4      u_baseColor;' +
			'uniform vec4      u_channelFlag;' +
			'uniform sampler2D s_texture0;' +
			'uniform sampler2D s_texture30;' +
			'vec3 rgbToHsl(vec3 rgb) {' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float cmin = min(r, min(g, b));' +
			'	float cmax = max(r, max(g, b));' +
			'	float h = 0.0;' +
			'	float s = 0.0;' +
			'	float l = (cmin + cmax) / 2.0;' +
			'	float delta = cmax - cmin;' +
			'	if (delta > 0.0) {' +
			'		if (r == cmax) {' +
			'			h = mod((g - b) / delta + 6.0, 6.0) / 6.0;' +
			'		} else if (g == cmax) {' +
			'			h = ((b - r) / delta + 2.0) / 6.0;' +
			'		} else {' +
			'			h = ((r - g) / delta + 4.0) / 6.0;' +
			'		}' +
			'		if (l < 1.0) {' +
			'			s = delta / (1.0 - abs(2.0 * l - 1.0));' +
			'		}' +
			'	}' +
			'	return vec3(h, s, l);' +
			'}' +
			'	vec3 hslToRgb(vec3 hsl) {' +
			'	float h = hsl.x;' +
			'	float s = hsl.y;' +
			'	float l = hsl.z;' +
			'	float c = (1.0 - abs(2.0 * l - 1.0)) * s;' +
			'	float x = c * (1.0 - abs((mod(h * 6.0, 2.0)) - 1.0));' +
			'	float m = l - c / 2.0;' +
			'	float cm = c + m;' +
			'	float xm = x + m;' +
			'	if (h < 1.0 / 6.0) {' +
			'		return vec3(cm, xm, m);' +
			'	} else if (h < 2.0 / 6.0) {' +
			'		return vec3(xm, cm, m);' +
			'	} else if (h < 3.0 / 6.0) {' +
			'		return vec3(m, cm, xm);' +
			'	} else if (h < 4.0 / 6.0) {' +
			'		return vec3(m, xm, cm);' +
			'	} else if (h < 5.0 / 6.0) {' +
			'		return vec3(xm, m, cm);' +
			'	} else {' +
			'		return vec3(cm, m, xm);' +
			'	}' +
			'}' +
			'void main()' +
			'{' +
			'	vec4 colorTone = vec4(' + a[0] + ');' +
			'	vec4 blendColor = vec4(' + a[1] + ');' +
			'	float hue = ' + a[2] + ';' +
			'	float brightness = ' + a[3] + ';' +
			'	vec4 sample = texture2D(s_texture0, v_texCoord);' +
			'	float a = sample.a;' +
			'	vec3 hsl = rgbToHsl(sample.rgb);' +
			'	hsl.x = mod(hsl.x + hue / 360.0, 1.0);' +
			'	hsl.y = hsl.y * (1.0 - colorTone.a / 255.0);' +
			'	vec3 rgb = hslToRgb(hsl);' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float r2 = colorTone.r / 255.0;' +
			'	float g2 = colorTone.g / 255.0;' +
			'	float b2 = colorTone.b / 255.0;' +
			'	float r3 = blendColor.r / 255.0;' +
			'	float g3 = blendColor.g / 255.0;' +
			'	float b3 = blendColor.b / 255.0;' +
			'	float i3 = blendColor.a / 255.0;' +
			'	float i1 = 1.0 - i3;' +
			'	r = clamp((r / a + r2) * a, 0.0, 1.0);' +
			'	g = clamp((g / a + g2) * a, 0.0, 1.0);' +
			'	b = clamp((b / a + b2) * a, 0.0, 1.0);' +
			'	r = clamp(r * i1 + r3 * i3 * a, 0.0, 1.0);' +
			'	g = clamp(g * i1 + g3 * i3 * a, 0.0, 1.0);' +
			'	b = clamp(b * i1 + b3 * i3 * a, 0.0, 1.0);' +
			'	r = r * brightness / 255.0;' +
			'	g = g * brightness / 255.0;' +
			'	b = b * brightness / 255.0;' +
			'   vec4 col_formask = vec4(r, g, b, a) * u_baseColor;' +
			'   vec4 clipMask = (1.0 - texture2D(s_texture30, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
			'   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
			'   col_formask = col_formask * maskVal;' +
			'   gl_FragColor = col_formask;' +
			'}';
			return str;
		}
		Live2DCubismFramework.fragmentShaderSrcMaskInvertedPremultipliedAlphaMozaic =  function(name, textureId){
			const a = getTintInfo(name, textureId);
			const str = 'precision mediump float;' +
			'varying vec2      v_texCoord;' +
			'varying vec4      v_clipPos;' +
			'uniform vec4      u_baseColor;' +
			'uniform vec4      u_channelFlag;' +
			'uniform sampler2D s_texture0;' +
			'uniform sampler2D s_texture30;' +
			'vec3 rgbToHsl(vec3 rgb) {' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float cmin = min(r, min(g, b));' +
			'	float cmax = max(r, max(g, b));' +
			'	float h = 0.0;' +
			'	float s = 0.0;' +
			'	float l = (cmin + cmax) / 2.0;' +
			'	float delta = cmax - cmin;' +
			'	if (delta > 0.0) {' +
			'		if (r == cmax) {' +
			'			h = mod((g - b) / delta + 6.0, 6.0) / 6.0;' +
			'		} else if (g == cmax) {' +
			'			h = ((b - r) / delta + 2.0) / 6.0;' +
			'		} else {' +
			'			h = ((r - g) / delta + 4.0) / 6.0;' +
			'		}' +
			'		if (l < 1.0) {' +
			'			s = delta / (1.0 - abs(2.0 * l - 1.0));' +
			'		}' +
			'	}' +
			'	return vec3(h, s, l);' +
			'}' +
			'	vec3 hslToRgb(vec3 hsl) {' +
			'	float h = hsl.x;' +
			'	float s = hsl.y;' +
			'	float l = hsl.z;' +
			'	float c = (1.0 - abs(2.0 * l - 1.0)) * s;' +
			'	float x = c * (1.0 - abs((mod(h * 6.0, 2.0)) - 1.0));' +
			'	float m = l - c / 2.0;' +
			'	float cm = c + m;' +
			'	float xm = x + m;' +
			'	if (h < 1.0 / 6.0) {' +
			'		return vec3(cm, xm, m);' +
			'	} else if (h < 2.0 / 6.0) {' +
			'		return vec3(xm, cm, m);' +
			'	} else if (h < 3.0 / 6.0) {' +
			'		return vec3(m, cm, xm);' +
			'	} else if (h < 4.0 / 6.0) {' +
			'		return vec3(m, xm, cm);' +
			'	} else if (h < 5.0 / 6.0) {' +
			'		return vec3(xm, m, cm);' +
			'	} else {' +
			'		return vec3(cm, m, xm);' +
			'	}' +
			'}' +
			'void main()' +
			'{' +
			'	vec4 colorTone = vec4(' + a[0] + ');' +
			'	vec4 blendColor = vec4(' + a[1] + ');' +
			'	float hue = ' + a[2] + ';' +
			'	float brightness = ' + a[3] + ';' +
			'	vec4 sample = texture2D(s_texture0, v_texCoord);' +
			'	float a = sample.a;' +
			'	vec3 hsl = rgbToHsl(sample.rgb);' +
			'	hsl.x = mod(hsl.x + hue / 360.0, 1.0);' +
			'	hsl.y = hsl.y * (1.0 - colorTone.a / 255.0);' +
			'	vec3 rgb = hslToRgb(hsl);' +
			'	float r = rgb.r;' +
			'	float g = rgb.g;' +
			'	float b = rgb.b;' +
			'	float r2 = colorTone.r / 255.0;' +
			'	float g2 = colorTone.g / 255.0;' +
			'	float b2 = colorTone.b / 255.0;' +
			'	float r3 = blendColor.r / 255.0;' +
			'	float g3 = blendColor.g / 255.0;' +
			'	float b3 = blendColor.b / 255.0;' +
			'	float i3 = blendColor.a / 255.0;' +
			'	float i1 = 1.0 - i3;' +
			'	r = clamp((r / a + r2) * a, 0.0, 1.0);' +
			'	g = clamp((g / a + g2) * a, 0.0, 1.0);' +
			'	b = clamp((b / a + b2) * a, 0.0, 1.0);' +
			'	r = clamp(r * i1 + r3 * i3 * a, 0.0, 1.0);' +
			'	g = clamp(g * i1 + g3 * i3 * a, 0.0, 1.0);' +
			'	b = clamp(b * i1 + b3 * i3 * a, 0.0, 1.0);' +
			'	r = r * brightness / 255.0;' +
			'	g = g * brightness / 255.0;' +
			'	b = b * brightness / 255.0;' +
			'   vec4 col_formask = vec4(r, g, b, a) * u_baseColor;' +
			'   vec4 clipMask = (1.0 - texture2D(s_texture30, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
			'   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
			'   col_formask = col_formask * (1.0 - maskVal);' +
			'   gl_FragColor = col_formask;' +
			'}';
			return str;
		}
		var CubismRenderer_WebGL = /** @class */ (function (_super) {
			__extends(CubismRenderer_WebGL, _super);
			function CubismRenderer_WebGL() {
				var _this = _super.call(this) || this;
				_this._clippingContextBufferForMask = null;
				_this._clippingContextBufferForDraw = null;
				_this._clippingManager = new CubismClippingManager_WebGL();
				_this.firstDraw = true;
				_this._textures = new csmMap();
				_this._sortedDrawableIndexList = new csmVector();
				_this._bufferData = {
					vertex: WebGLBuffer = null,
					uv: WebGLBuffer = null,
					index: WebGLBuffer = null
				};
				// テクスチャ対応マップの容量を確保しておく
				_this._textures.prepareCapacity(32, true);
				return _this;
			}
			CubismRenderer_WebGL.prototype.initialize = function (model) {
				//村人Ａ追加
				this.mozaicIdArray = [];
				this.tonePartsIdArray = [];
				this.toneTextureIdArray = [];
				
				if (model.isUsingMasking()) {
					this._clippingManager = new CubismClippingManager_WebGL(); // クリッピングマスク・バッファ前処理方式を初期化
					this._clippingManager.initialize(model, model.getDrawableCount(), model.getDrawableMasks(), model.getDrawableMaskCounts());
				}
				this._sortedDrawableIndexList.resize(model.getDrawableCount(), 0);
				_super.prototype.initialize.call(this, model); // 親クラスの処理を呼ぶ
			};
			CubismRenderer_WebGL.prototype.bindTexture = function (modelTextureNo, glTexture) {
				this._textures.setValue(modelTextureNo, glTexture);
			};
			CubismRenderer_WebGL.prototype.getBindedTextures = function () {
				return this._textures;
			};
			CubismRenderer_WebGL.prototype.setClippingMaskBufferSize = function (size) {
				this._clippingManager.release();
				this._clippingManager = void 0;
				this._clippingManager = null;
				this._clippingManager = new CubismClippingManager_WebGL();
				this._clippingManager.setClippingMaskBufferSize(size);
				this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts());
			};
			CubismRenderer_WebGL.prototype.getClippingMaskBufferSize = function () {
				return this._clippingManager.getClippingMaskBufferSize();
			};
			CubismRenderer_WebGL.prototype.release = function () {
				if(!this.gl){
					if($gameLive2d.gl){
						this.gl = $gameLive2d.gl;
					} else {
						throw new Error("Webglの読み込みがうまくいっていない可能性がございます。リセットして再度お試しください。4");
					}
				}
				this._clippingManager.release();
				this._clippingManager = void 0;
				this._clippingManager = null;
				this.gl.deleteBuffer(this._bufferData.vertex);
				this._bufferData.vertex = null;
				this.gl.deleteBuffer(this._bufferData.uv);
				this._bufferData.uv = null;
				this.gl.deleteBuffer(this._bufferData.index);
				this._bufferData.index = null;
				this._bufferData = null;
				this._textures = null;
				this.mozaicIdArray = [];
				this.tonePartsIdArray = [];
				this.toneTextureIdArray = [];
			};
			CubismRenderer_WebGL.prototype.doDrawModel = function () {
				if (this._clippingManager != null) {
					this.preDraw();
					this._clippingManager.setupClippingContext(this.getModel(), this);
				}
				this.preDraw();
				var drawableCount = this.getModel().getDrawableCount();
				var renderOrder = this.getModel().getDrawableRenderOrders();
				var drawableIds = this.getModel()._model.drawables.ids;
				for (var i = 0; i < drawableCount; ++i) {
					var order = renderOrder[i];
					this._sortedDrawableIndexList.set(order, i);
				}
				for (var i = 0; i < drawableCount; ++i) {
					var drawableIndex = this._sortedDrawableIndexList.at(i);
					if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
						continue;
					}
					this.setClippingContextBufferForDraw(this._clippingManager != null
						? this._clippingManager
							.getClippingContextListForDraw()
							.at(drawableIndex)
						: null);
					this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
					const nomalBlend = this.getModel().getDrawableBlendMode(drawableIndex);
					//const blendMode = this.mozaicIdArray.indexOf(drawableIds[drawableIndex]) >= 0 ? 3 : nomalBlend;
					const blendMode = this.tonePartsIdArray.indexOf(drawableIds[drawableIndex]) >= 0 ? 3 : nomalBlend;
					this.drawMesh(this.getModel().getDrawableTextureIndices(drawableIndex), 
					this.getModel().getDrawableVertexIndexCount(drawableIndex), 
					this.getModel().getDrawableVertexCount(drawableIndex), 
					this.getModel().getDrawableVertexIndices(drawableIndex), 
					this.getModel().getDrawableVertices(drawableIndex), 
					this.getModel().getDrawableVertexUvs(drawableIndex), 
					this.getModel().getDrawableOpacity(drawableIndex), 
					blendMode, 
					this.getModel().getDrawableInvertedMaskBit(drawableIndex));
				}
				this.doAfterDrawPros();
			};
			
			CubismRenderer_WebGL.prototype.doAfterDrawPros = function () {
				this.setClippingContextBufferForDraw(null);
				this.setClippingContextBufferForMask(null);
				const one = this.gl.ONE;
				const min = this.gl.ONE_MINUS_SRC_ALPHA;
				this.gl.blendFuncSeparate(one, min, one, min);
			}
			CubismRenderer_WebGL.prototype._testShaderCompile = function () {
				if (this._clippingManager != null) {
					this.preDraw();
					this._clippingManager.setupClippingContext(this.getModel(), this);
				}
				this.preDraw();
				var instance = CubismShader_WebGL.getInstance(this._modelName)
				return instance.testShaderCompile(this._model, 3)
			}
			CubismRenderer_WebGL.prototype.drawMesh = function (textureNo, indexCount, vertexCount, indexArray, vertexArray, uvArray, opacity, colorBlendMode, invertedMask) {
				if(~this.toneTextureIdArray.indexOf(textureNo)){
					colorBlendMode = 3
				}
				if (this.isCulling()) {
					this.gl.enable(this.gl.CULL_FACE);
				}
				else {
					this.gl.disable(this.gl.CULL_FACE);
				}
				this.gl.frontFace(this.gl.CCW);
				var modelColorRGBA = this.getModelColor();
				if (this.getClippingContextBufferForMask() == null) {
					modelColorRGBA.A *= opacity;
					if (this.isPremultipliedAlpha()) {
						modelColorRGBA.R *= modelColorRGBA.A;
						modelColorRGBA.G *= modelColorRGBA.A;
						modelColorRGBA.B *= modelColorRGBA.A;
					}
				}
				var drawtexture;
				if (this._textures.getValue(textureNo) != null) {
					drawtexture = this._textures.getValue(textureNo);
				}
				else {
					drawtexture = null;
				}
				var instance = CubismShader_WebGL.getInstance(this._model._modelName)
				instance.setupShaderProgram(this, drawtexture, vertexCount, vertexArray, indexArray, 
				  uvArray, this._bufferData, opacity, colorBlendMode, modelColorRGBA, this.isPremultipliedAlpha(), 
				  this.getMvpMatrix(), invertedMask, this._model, textureNo);
				this._model._doInitShader = false;
				this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
			};
			CubismRenderer_WebGL.prototype.testGenerateShaders = function (name) {
				return CubismShader_WebGL.getInstance(name)._testGenerateShaders(name);
			}
			CubismRenderer_WebGL.doStaticRelease = function () {
				CubismShader_WebGL.deleteInstance();
			};
			CubismRenderer_WebGL.prototype.setRenderState = function (fbo, viewport, name) {
				s_fbo = fbo;
				s_viewport[name] = viewport;
			};
			CubismRenderer_WebGL.prototype.preDraw = function () {
				if(!this.gl){
					if($gameLive2d.gl){
						this.gl = $gameLive2d.gl;
					} else {
						throw new Error("Webglの読み込みがうまくいっていない可能性がございます。リセットして再度お試しください。5");
					}
				}
				if (this.firstDraw) {
					this.firstDraw = false;
					this._anisortopy =
						this.gl.getExtension('EXT_texture_filter_anisotropic') ||
							this.gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
							this.gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
				}
				this.gl.disable(this.gl.SCISSOR_TEST);
				this.gl.disable(this.gl.STENCIL_TEST);
				this.gl.disable(this.gl.DEPTH_TEST);
				this.gl.frontFace(this.gl.CW);
				this.gl.enable(this.gl.BLEND);
				this.gl.colorMask(true, true, true, true);
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
				this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
			};
			CubismRenderer_WebGL.prototype.setClippingContextBufferForMask = function (clip) {
				this._clippingContextBufferForMask = clip;
			};
			CubismRenderer_WebGL.prototype.getClippingContextBufferForMask = function () {
				return this._clippingContextBufferForMask;
			};
			CubismRenderer_WebGL.prototype.setClippingContextBufferForDraw = function (clip) {
				this._clippingContextBufferForDraw = clip;
			};
			CubismRenderer_WebGL.prototype.getClippingContextBufferForDraw = function () {
				return this._clippingContextBufferForDraw;
			};
			CubismRenderer_WebGL.prototype.startUp = function (gl, name) {
				gl = $gameLive2d.gl;
				this.gl = gl;
				this._clippingManager.setGL(gl);
				CubismShader_WebGL.getInstance(name).setGl(gl);
				this._modelName = name;
			};
			return CubismRenderer_WebGL;
		}(CubismRenderer));
		Live2DCubismFramework.CubismRenderer_WebGL = CubismRenderer_WebGL;
		CubismRenderer.staticRelease = function () {
			CubismRenderer_WebGL.doStaticRelease();
		};
	})(Live2DCubismFramework);
	var LAppPal = (function () {
		function LAppPal() {
		}
		LAppPal.loadFileAsBytes = function (filePath, callback) {
			fetch(filePath)
				.then(function (response) { return response.arrayBuffer(); })
				.then(function (arrayBuffer) { return callback(arrayBuffer, arrayBuffer.byteLength); });
		};
		LAppPal.getDeltaTime = function () {
			return this.s_deltaTime;
		};
		LAppPal.updateTime = function () {
			this.s_currentFrame = Date.now();
			this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1000;
			this.s_lastFrame = this.s_currentFrame;
		};
		LAppPal.printMessage = function (message) {
			console.log(message);
		};
		LAppPal.lastUpdate = Date.now();
		LAppPal.s_currentFrame = 0.0;
		LAppPal.s_lastFrame = 0.0;
		LAppPal.s_deltaTime = 0.0;
		return LAppPal;
	}());
	var CubismRenderer_WebGL = Live2DCubismFramework.CubismRenderer_WebGL;
	var CubismEyeBlink = Live2DCubismFramework.CubismEyeBlink;
	var CubismBreath = Live2DCubismFramework.CubismBreath;
	var Constant = Live2DCubismFramework.Constant;
	var CubismPhysics = Live2DCubismFramework.CubismPhysics;
	var CubismModelUserData = Live2DCubismFramework.CubismModelUserData;
	var CubismPose = Live2DCubismFramework.CubismPose;
	var CubismExpressionMotion = Live2DCubismFramework.CubismExpressionMotion;
	var CubismMotion = Live2DCubismFramework.CubismMotion;
	var CubismMoc = Live2DCubismFramework.CubismMoc;
	var CubismModelMatrix = Live2DCubismFramework.CubismModelMatrix;
	var CubismTargetPoint = Live2DCubismFramework.CubismTargetPoint;
	var CubismMotionManager = Live2DCubismFramework.CubismMotionManager;
	var Live2DCubismFramework;
	(function (Live2DCubismFramework) {
		var CubismUserModel = /** @class */ (function () {
			function CubismUserModel() {
				this.loadMotion = function (buffer, size, name, onFinishedMotionHandler) { return CubismMotion.create(buffer, size, onFinishedMotionHandler); };
				// 各変数初期化
				this._moc = null;
				this._model = null;
				this._motionManager = null;
				this._expressionManager = null;
				this._eyeBlink = null;
				this._breath = null;
				this._modelMatrix = null;
				this._pose = null;
				this._dragManager = null;
				this._physics = null;
				this._modelUserData = null;
				this._initialized = false;
				this._updating = false;
				this._opacity = 1.0;
				this._lipsync = true;
				this._lastLipSyncValue = 0.0;
				this._dragX = 0.0;
				this._dragY = 0.0;
				this._accelerationX = 0.0;
				this._accelerationY = 0.0;
				this._accelerationZ = 0.0;
				this._debugMode = false;
				this._renderer = null;
				this._motionManager = new CubismMotionManager();
				this._motionManager.setEventCallback(CubismUserModel.cubismDefaultMotionEventCallback, this);
				this._expressionManager = new CubismMotionManager();
				this._dragManager = new CubismTargetPoint();
			}
			CubismUserModel.prototype.isInitialized = function () {
				return this._initialized;
			};
			CubismUserModel.prototype.setInitialized = function (v) {
				this._initialized = v;
			};
			CubismUserModel.prototype.isUpdating = function () {
				return this._updating;
			};
			CubismUserModel.prototype.setUpdating = function (v) {
				this._updating = v;
			};
			CubismUserModel.prototype.setDragging = function (x, y) {
				this._dragManager.set(x, y);
			};
			CubismUserModel.prototype.setAcceleration = function (x, y, z) {
				this._accelerationX = x;
				this._accelerationY = y;
				this._accelerationZ = z;
			};
			CubismUserModel.prototype.getModelMatrix = function () {
				return this._modelMatrix;
			};
			CubismUserModel.prototype.setOpacity = function (a) {
				this._opacity = a;
			};
			CubismUserModel.prototype.getOpacity = function () {
				return this._opacity;
			};
			CubismUserModel.prototype.loadModel = function (buffer) {
				this._moc = CubismMoc.create(buffer);
				this._model = this._moc.createModel();
				this._model.saveParameters();
				if (this._moc == null || this._model == null) {
					CubismLogError('Failed to CreateModel().');
					return;
				}
				this._modelMatrix = new CubismModelMatrix(this._model.getCanvasWidth(), this._model.getCanvasHeight());
			};
			CubismUserModel.prototype.loadExpression = function (buffer, size, name) {
				return CubismExpressionMotion.create(buffer, size);
			};
			CubismUserModel.prototype.loadPose = function (buffer, size) {
				this._pose = CubismPose.create(buffer, size);
			};
			CubismUserModel.prototype.loadUserData = function (buffer, size) {
				this._modelUserData = CubismModelUserData.create(buffer, size);
			};
			CubismUserModel.prototype.loadPhysics = function (buffer, size) {
				this._physics = CubismPhysics.create(buffer, size);
			};
			CubismUserModel.prototype.isHit = function (drawableId, pointX, pointY) {
				var drawIndex = this._model.getDrawableIndex(drawableId);
				if (drawIndex < 0) {
					return false;
				}
				const data  = $gameLive2d.data[this._model._modelName];
				if(!data){return}
				var count = this._model.getDrawableVertexCount(drawIndex);
				var vertices = this._model.getDrawableVertices(drawIndex);
				var left = vertices[0];
				var right = vertices[0];
				var top = vertices[1];
				var bottom = vertices[1];
				for (var j = 1; j < count; ++j) {
					var x = vertices[Constant.vertexOffset + j * Constant.vertexStep];
					var y = vertices[Constant.vertexOffset + j * Constant.vertexStep + 1];
					if (x < left) {
						left = x;
					}
					if (x > right) {
						right = x;
					}
					if (y < top) {
						top = y;
					}
					if (y > bottom) {
						bottom = y;
					}
				}
				const pos   = data.position;
				const scale = data.scale / 0.2;
				const sScale = data.ScreenPosScale;
				const sSX = 2*sScale[0]/Graphics.width;
				const sSY = 2*sScale[1]/Graphics.height;
				const prePos = [left, right, top, bottom]
				left = this._model._invertY ? -prePos[1] : prePos[0];
				right = this._model._invertY ? -prePos[0] : prePos[1];
				top = this._model._invertX ? -prePos[3] : prePos[2];
				bottom = this._model._invertX ? -prePos[2] : prePos[3];
				left = left - (left + 1) * (1 - sScale[2]);
				right = right - (right + 1) * (1 - sScale[2]);
				top = top - (top + 1) * (1 - sScale[3]);
				bottom = bottom - (bottom + 1) * (1 - sScale[3]);
				left *= scale;
				right *= scale;
				top *= scale;
				bottom *= scale;
				left += pos[0] + sSX;
				right += pos[0] + sSX;
				top += pos[1] + sSY;
				bottom += pos[1] + sSY;
				let tx = this._modelMatrix.invertTransformX(pointX) / 0.13;
				let ty = -this._modelMatrix.invertTransformY(pointY) / 0.13;
				const deg = this._model._rotation || 0;
				const rad = (deg / 180) * Math.PI;
				const r = (tx**2 + ty**2)**0.5;
				const thetaAdj = tx >= 0 && ty >= 0 ? 0 : ty < 0 && tx > 0 ? Math.PI*2 : Math.PI;
				const theta = Math.atan(ty / tx) + thetaAdj;
				tx = r*Math.cos(theta - rad);
				ty = r*Math.sin(theta - rad);
				return left <= tx && tx <= right && top <= ty && ty <= bottom;
			};
			CubismUserModel.prototype.getModel = function () {
				return this._model;
			};
			CubismUserModel.prototype.getRenderer = function () {
				return this._renderer;
			};
			CubismUserModel.prototype.createRenderer = function (name) {
				if (this._renderer) {
					this.deleteRenderer();
				}
				this._renderer = new CubismRenderer_WebGL();
				this._renderer.initialize(this._model);
			};
			CubismUserModel.prototype.deleteRenderer = function () {
				if (this._renderer != null) {
					this._renderer.release();
					this._renderer = null;
				}
			};
			CubismUserModel.prototype.motionEventFired = function (eventValue) {
				CubismLogInfo('{0}', eventValue.s);
			};
			CubismUserModel.cubismDefaultMotionEventCallback = function (caller, eventValue, customData) {
				var model = customData;
				if (model != null) {
					model.motionEventFired(eventValue);
				}
			};
			CubismUserModel.prototype.release = function () {
				if (this._motionManager != null) {
					this._motionManager.release();
					this._motionManager = null;
				}
				if (this._expressionManager != null) {
					this._expressionManager.release();
					this._expressionManager = null;
				}
				if (this._moc != null) {
					this._moc.deleteModel(this._model);
					this._moc.release();
					this._moc = null;
				}
				this._modelMatrix = null;
				CubismPose.delete(this._pose);
				CubismEyeBlink.delete(this._eyeBlink);
				CubismBreath.delete(this._breath);
				this._dragManager = null;
				CubismPhysics.delete(this._physics);
				CubismModelUserData.delete(this._modelUserData);
				this.deleteRenderer();
			};
			return CubismUserModel;
		}());
		Live2DCubismFramework.CubismUserModel = CubismUserModel;
	})(Live2DCubismFramework);
	var InvalidMotionQueueEntryHandleValue = Live2DCubismFramework.InvalidMotionQueueEntryHandleValue;
	var csmMap = Live2DCubismFramework.csmMap;
	var csmVector = Live2DCubismFramework.csmVector;
	var CubismBreath = Live2DCubismFramework.CubismBreath;
	var BreathParameterData = Live2DCubismFramework.BreathParameterData;
	var CubismEyeBlink = Live2DCubismFramework.CubismEyeBlink;
	var ACubismMotion = Live2DCubismFramework.ACubismMotion;
	var CubismFramework = Live2DCubismFramework.CubismFramework;
	var CubismUserModel = Live2DCubismFramework.CubismUserModel;
	var CubismModelSettingJson = Live2DCubismFramework.CubismModelSettingJson;
	var CubismDefaultParameterId = Live2DCubismFramework;
	var LoadStep;
	(function (LoadStep) {
		LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
		LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
		LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
		LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
		LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
		LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
		LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
		LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
		LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
		LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
		LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
		LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
		LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
		LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
		LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
		LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
		LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
		LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
		LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
		LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
		LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
		LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
		LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
	})(LoadStep || (LoadStep = {}));
	var LAppModel = (function (_super) {
		__extends(LAppModel, _super);
		function LAppModel() {
			var _this = _super.call(this) || this;
			_this._modelSetting = null;
			_this._modelHomeDir = null;
			_this._userTimeSeconds = 0.0;
			_this._eyeBlinkIds = new csmVector();
			_this._lipSyncIds = new csmVector();
			_this._motions = new csmMap();
			_this._expressions = new csmMap();
			_this._hitArea = new csmVector();
			_this._userArea = new csmVector();
			_this._idParamAngleX = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamAngleX);
			_this._idParamAngleY = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamAngleY);
			_this._idParamAngleZ = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamAngleZ);
			_this._idParamEyeBallX = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamEyeBallX);
			_this._idParamEyeBallY = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamEyeBallY);
			_this._idParamBodyAngleX = CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamBodyAngleX);
			_this._state = LoadStep.LoadAssets;
			_this._expressionCount = 0;
			_this._textureCount = 0;
			_this._motionCount = 0;
			_this._allMotionCount = 0;
			return _this;
		}
		LAppModel.prototype.loadAssets = function (dir, fileName, name) {
			var _this = this;
			this._modelHomeDir = dir;
			fetch(this._modelHomeDir + "/" + fileName)
				.then(function (response) { return response.arrayBuffer(); })
				.then(function (arrayBuffer) {
				var setting = new CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);
				_this._state = LoadStep.LoadModel;
				_this.setupModel(setting, name);
			});
		};
		LAppModel.prototype.setupModel = function (setting, name) {
			var _this = this;
			if(!this.visibleModel){this.visibleModel = false};
			this._cMotionDoing = false;
			this.autoEyeBlink  = false;
			this._lipSyncArray = [];
			this._syncMotionNameModelName = [];
			this.hitPartsNameArray = [];
			this.mouseClickingCount = 0;
			this.mouseClickingSwitchId = 0;
			this._lipSyncValue = 0;
			this._lipSyncRate  = 0;
			this._lipSyncCount = 0;
			this._mcParamWaitCount = 0;
			this._lipSyncSpeed = 5;
			this._modelName = name;
			this._updating = true;
			this._initialized = false;
			this.changeTextureName = null;
			this._modelSetting = setting;
			$gameLive2d.data[this._modelName].textureSize = [];
			if (this._modelSetting.getModelFileName() != '') {
				var modelFileName = this._modelSetting.getModelFileName();
				fetch(this._modelHomeDir + "/" + modelFileName)
					.then(function (response) { return response.arrayBuffer(); })
					.then(function (arrayBuffer) {
					_this.loadModel(arrayBuffer);
					_this._state = LoadStep.LoadExpression;
					loadCubismExpression();
				});
				this._state = LoadStep.WaitLoadModel;
			}
			else {
				LAppPal.printMessage('Model data does not exist.');
			}
			var loadCubismExpression = function () {
				_this._expressionCount = 0;
				
				if (_this._modelSetting.getExpressionCount() > 0) {
					var count_1 = _this._modelSetting.getExpressionCount();
					var _loop_1 = function (i) {
						var expressionName = _this._modelSetting.getExpressionName(i);
						var expressionFileName = _this._modelSetting.getExpressionFileName(i);
						fetch(_this._modelHomeDir + "/" + expressionFileName)
							.then(function (response) { return response.arrayBuffer(); })
							.then(function (arrayBuffer) {
							var motion = _this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);
							if (_this._expressions.getValue(expressionName) != null) {
								ACubismMotion.delete(_this._expressions.getValue(expressionName));
								_this._expressions.setValue(expressionName, null);
							}
							_this._expressions.setValue(expressionName, motion);
							_this._expressionCount++;
							if (_this._expressionCount >= count_1) {
								_this._state = LoadStep.LoadPhysics;
								loadCubismPhysics();
							}
						});
					};
					for (var i = 0; i < count_1; i++) {
						_loop_1(i);
					}
					_this._state = LoadStep.WaitLoadExpression;
				}
				else {
					_this._state = LoadStep.LoadPhysics;
					loadCubismPhysics();
				}
			};
			var loadCubismPhysics = function () {
				if (_this._modelSetting.getPhysicsFileName() != '') {
					var physicsFileName = _this._modelSetting.getPhysicsFileName();
					fetch(_this._modelHomeDir + "/" + physicsFileName)
						.then(function (response) { return response.arrayBuffer(); })
						.then(function (arrayBuffer) {
						_this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);
						_this._state = LoadStep.LoadPose;
						loadCubismPose();
					});
					_this._state = LoadStep.WaitLoadPhysics;
				}
				else {
					_this._state = LoadStep.LoadPose;
					loadCubismPose();
				}
			};
			var loadCubismPose = function () {
				if (_this._modelSetting.getPoseFileName() != '') {
					var poseFileName = _this._modelSetting.getPoseFileName();
					fetch(_this._modelHomeDir + "/" + poseFileName)
						.then(function (response) { return response.arrayBuffer(); })
						.then(function (arrayBuffer) {
						_this.loadPose(arrayBuffer, arrayBuffer.byteLength);
						_this._state = LoadStep.SetupEyeBlink;
						setupEyeBlink();
					});
					_this._state = LoadStep.WaitLoadPose;
				}
				else {
					_this._state = LoadStep.SetupEyeBlink;
					setupEyeBlink();
				}
			};
			var setupEyeBlink = function () {
				if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {
					_this._eyeBlink = CubismEyeBlink.create(_this._modelSetting);
					_this._state = LoadStep.SetupBreath;
				}
				setupBreath();
			};
			var setupBreath = function () {
				_this._breath = CubismBreath.create();
				var breathParameters = new csmVector();
				breathParameters.pushBack(new BreathParameterData(_this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
				breathParameters.pushBack(new BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
				breathParameters.pushBack(new BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
				breathParameters.pushBack(new BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
				breathParameters.pushBack(new BreathParameterData(CubismFramework.getIdManager().getId(CubismDefaultParameterId.ParamBreath), 0.0, 0.5, 3.2345, 0.5));
				_this._breath.setParameters(breathParameters);
				_this._state = LoadStep.LoadUserData;
				loadUserData();
			};
			var loadUserData = function () {
				if (_this._modelSetting.getUserDataFile() != '') {
					var userDataFile = _this._modelSetting.getUserDataFile();
					fetch(_this._modelHomeDir + "/" + userDataFile)
						.then(function (response) { return response.arrayBuffer(); })
						.then(function (arrayBuffer) {
						_this.loadUserData(arrayBuffer, arrayBuffer.byteLength);
						_this._state = LoadStep.SetupEyeBlinkIds;
						setupEyeBlinkIds();
					});
					_this._state = LoadStep.WaitLoadUserData;
				}
				else {
					_this._state = LoadStep.SetupEyeBlinkIds;
					setupEyeBlinkIds();
				}
			};
			var setupEyeBlinkIds = function () {
				var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();
				for (var i = 0; i < eyeBlinkIdCount; ++i) {
					_this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));
				}
				_this._state = LoadStep.SetupLipSyncIds;
				setupLipSyncIds();
			};
			var setupLipSyncIds = function () {
				var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();
				for (var i = 0; i < lipSyncIdCount; ++i) {
					_this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));
				}
				_this._state = LoadStep.SetupLayout;
				setupLayout();
			};
			var setupLayout = function () {
				var layout = new csmMap();
				_this._modelSetting.getLayoutMap(layout);
				_this._modelMatrix.setupFromLayout(layout);
				_this._state = LoadStep.LoadMotion;
				loadCubismMotion();
			};
			var loadCubismMotion = function () {
				_this._state = LoadStep.WaitLoadMotion;
				_this._model.saveParameters();
				_this._allMotionCount = 0;
				_this._motionCount = 0;
				var group = [];
				var motionGroupCount = _this._modelSetting.getMotionGroupCount();
				for (var i = 0; i < motionGroupCount; i++) {
					group[i] = _this._modelSetting.getMotionGroupName(i);
					_this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);
				}
				for (var i = 0; i < motionGroupCount; i++) {
					_this.preLoadMotionGroup(group[i]);
				}
				if (motionGroupCount == 0) {
					_this._state = LoadStep.LoadTexture;
					_this._motionManager.stopAllMotions();
					_this._updating = false;
					_this._initialized = true;
					_this.createRenderer(this._modelName);
					_this.setupTextures();
					_this.getRenderer().startUp($gameLive2d.gl, _this._modelName);
				}
			};
		};
		LAppModel.prototype.setupModelCustomBreathParam = function (index, offset, peak, cycle, weight) {
			const obj  = this._breath.getParameters()._ptr[index];
			obj.offset = offset;
			obj.peak   = peak;
			obj.cycle  = cycle;
			obj.weight = weight;
		}
		LAppModel.prototype.setupMozaicDrawablesId = function (id) {
			this._renderer.mozaicIdArray.push(id);
		}
		LAppModel.prototype.setupToneDrawablesId = function (id) {
			this._renderer.tonePartsIdArray.push(id);
		}
		LAppModel.prototype.setupToneTextureId = function (id) {
			this._renderer.toneTextureIdArray.push(id);
		}
		LAppModel.prototype.deleteToneTextureId = function (id) {
			var index = this._renderer.toneTextureIdArray.indexOf(id);
			this._renderer.toneTextureIdArray.splice(index, 1);
		}
		LAppModel.prototype.isAllTextureLoaded = function () {
			return this.textureLoadedCount == this._modelSetting.getTextureCount();
		}
		
		LAppModel.prototype.setupTextures = function () {
			var _this = this;
			var usePremultiply = true;
			if (this._state == LoadStep.LoadTexture) {
				this.textureLoadedCount = 0;
				var textureCount_1 = this._modelSetting.getTextureCount();
				const _renderer = this.getRenderer();
				var _loop_2 = function (modelTextureNumber) {
					if (_this._modelSetting.getTextureFileName(modelTextureNumber) == '') {
						console.log('getTextureFileName null');
						return "continue";
					}
					var texturePath = _this._modelSetting.getTextureFileName(modelTextureNumber);
					if(_this.changeTextureName){
						const pathArr = texturePath.split('/')
						texturePath = _this._modelHomeDir + _this.changeTextureName + pathArr[1];
					} else {
						texturePath = _this._modelHomeDir + texturePath;
					}
					if(Decrypter.hasEncryptedImages){
						const a = texturePath.slice(0, -4);
						texturePath = a + ".rpgmvp";
					}
					var onLoad = function (textureInfo) {
						if(!_renderer._textures){return}
						_renderer.bindTexture(modelTextureNumber, textureInfo.id);
						_this._textureCount++;
						if (_this._textureCount >= textureCount_1) {
							_this._state = LoadStep.CompleteSetup;
						}
					};
					SceneManager._scene._spriteset.live2dSpriteHash[_this._modelName]
					.getTextureManager()
					.createTextureFromPngFile(texturePath, usePremultiply, onLoad, _this);
					_renderer.setIsPremultipliedAlpha(usePremultiply);
				};
				
				this._textureErrorCount = 0;
				const loadCallback = () => {
					for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
						_loop_2(modelTextureNumber);
					}
				}
				
				function load() {
					return new Promise((resolve, reject) => {
						setTimeout(function() {
							resolve();
						}, 100);
					});
				}

				function load_func() {
					if (!!SceneManager._scene._spriteset.live2dSpriteHash[_this._modelName].getTextureManager()._textures && !!_renderer._textures) {
						return Promise.resolve();
					} else {
						_this._textureErrorCount++;
						return load().then(n => {
							return load_func();
						});
					}
				}

				load_func().then(num => {
					loadCallback.call(this);
				});
				
				this._state = LoadStep.WaitLoadTexture;
			}
		};
		LAppModel.prototype.reloadRenderer = function () {
			this.deleteRenderer();
			this.createRenderer(this._modelName);
			this.setupTextures();
		};
		LAppModel.prototype.update = function () {
			if(this._textureErrorCount > 60){throw new Error("テクスチャ読み込みエラーが発生しました。再起動してください。何度も発生する場合はPCのスペックが原因になっている可能性があります。")}
			if (this._state != LoadStep.CompleteSetup)
				return;
			var deltaTimeSeconds = LAppPal.getDeltaTime();
			this._userTimeSeconds += deltaTimeSeconds;
			this._dragManager.update(deltaTimeSeconds);
			this._dragX = this._dragManager.getX();
			this._dragY = this._dragManager.getY();
			var motionUpdated = false;
			this._model.loadParameters();
			if (this._motionManager.isFinished()) {
				this._cMotionDoing = false;
				this.startRandomMotion(MotionGroupIdle, PriorityIdle);
			} else {
				motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds);
			}
			
			if($gameLive2d.data[this._modelName].textureSize.length == 0){
				this._model._modelName = this._modelName
				const texture = SceneManager._scene._spriteset.live2dSpriteHash[this._modelName].getTextureManager();
				$gameLive2d.data[this._modelName].textureSize = [texture._textures._ptr[0].width, texture._textures._ptr[0].height];
			}
			
			this._model.saveParameters();
			/*
			if (!motionUpdated) {
				if (this._eyeBlink != null) {
					this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
				}
			} else if(motionUpdated && this.autoEyeBlink){
				if (this._eyeBlink != null) {
					this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
				}
			}
			*/
			if(this.autoEyeBlink && this._eyeBlink != null){
				this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
			}
			if (this._expressionManager != null) {
				this._expressionManager.updateMotion(this._model, deltaTimeSeconds);
			}
			this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);
			this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
			this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
			this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);
			this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);
			this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
			
			if (this._breath != null) {
				this._breath.updateParameters(this._model, deltaTimeSeconds);
			}
			if (this._physics != null) {
				this._physics.evaluate(this._model, deltaTimeSeconds);
			}
			if (this._lipsync) {
				if(this._lipSyncArray.length != 0){
					this._lipSyncCount++;
					if(this._lipSyncCount % this._lipSyncSpeed == 0){
						this._lipSyncRate = (this._lipSyncArray.shift() - this._lipSyncValue)/this._lipSyncSpeed;
					}
					this._lipSyncValue += this._lipSyncRate
				} else {
					this._lipSyncValue = 0;
				}
				
				for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {
					this._model.addParameterValueById(this._lipSyncIds.at(i), this._lipSyncValue, 0.8);
				}
			}
			
			if (this._pose != null) {
				this._pose.updateParameters(this._model, deltaTimeSeconds);
			}
			
			if(this._byShareMotionModelName){
				const name = this._byShareMotionModelName;
				const targetDiv = 0.001
				Object.keys($gameLive2d.data[name].cParam).forEach((key) => {
					const o = $gameLive2d.data[name].cParam[key];
					this._model.setParameterValueByIndex(key, o[2], 1)
				});
			} else {
				this.cParamSet(this._modelName);
			}
			this._model.update();
		};
		LAppModel.prototype.cParamSet = function (name) {
			const targetDiv = 0.001
			Object.keys($gameLive2d.data[name].cParam).forEach((key) => {
				const o = $gameLive2d.data[name].cParam[key];
				const isMove = o.length >= 7
				if(isMove){
					if(o[2] != o[0]){
						o[2] += o[1];
					} else {
						this._mcParamWaitCount++
						if(this._mcParamWaitCount == o[6]){
							this._mcParamWaitCount = 0;
							let nextTarget;
							if(o[7]){
								nextTarget = 1;//o[0] == o[3] ? o[4] : o[3];
								o[0] = 0;
							} else {
								nextTarget = o[0] == o[3] ? o[4] : o[3];
							}
							const rate = (nextTarget - o[0]) / o[5];
							$gameLive2d.data[this._modelName].cParam[key] = [nextTarget, rate, o[0], o[3], o[4], o[5], o[6], o[7]];
						}
					}
				} else {
					if(o[2] != o[0]){
						o[2] += o[1];
					}
				}
				if(Math.abs(o[2] - o[0]) < targetDiv){o[2] = o[0]}
				this._model.setParameterValueByIndex(key, o[2], 1)
			})
		}
		LAppModel.prototype.setVoiceData = function (obj) {
			this._model.voiceSeData = obj;
		}
		LAppModel.prototype.startMotion = function (group, no, priority, onFinishedMotionHandler) {
			AudioManager.stopSe();
			var _this = this;
			if(this._syncMotionNameModelName.length != 0){
				this._syncMotionNameModelName.forEach(name =>{
					$gameLive2d.getModel(name).startMotion(group, no, 3);
				})
			}
			this._nowMotionData = [group, no];
			if (priority == PriorityForce) {
				this._motionManager.setReservePriority(priority);
			}
			else if (!this._motionManager.reserveMotion(priority)) {
				if (this._debugMode) {
					LAppPal.printMessage("[APP]can't start motion.");
				}
				return InvalidMotionQueueEntryHandleValue;
			}
			var motionFileName = this._modelSetting.getMotionFileName(group, no);
			var name = group + "_" + no;
			var motion = this._motions.getValue(name);
			var autoDelete = false;
			if (motion == null) {
				fetch(this._modelHomeDir + "/" + motionFileName)
					.then(function (response) { return response.arrayBuffer(); })
					.then(function (arrayBuffer) {
					motion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);
					var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);
					if (fadeTime >= 0.0) {
						motion.setFadeInTime(fadeTime);
					}
					fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);
					if (fadeTime >= 0.0) {
						motion.setFadeOutTime(fadeTime);
					}
					motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
					autoDelete = true;
				});
			}
			else {
				motion.setFinishedMotionHandler(onFinishedMotionHandler);
			}
			if(!this._bySyncMotionNameModelName && this._model.voiceSeData && this._model.voiceSeData[group + no]){
				motion._getGroupNoName = group + no
				this._model._getSeGroupNoName = group + no
				motion._seData = JSON.parse(JSON.stringify(this._model.voiceSeData[group + no]));
			};
			if (this._debugMode) {
				LAppPal.printMessage("[APP]start motion: [" + group + "_" + no);
			}
			return this._motionManager.startMotionPriority(motion, autoDelete, priority);
		};
		LAppModel.prototype.startRandomMotion = function (group, priority, onFinishedMotionHandler) {
			if (this._modelSetting.getMotionCount(group) == 0) {
				return InvalidMotionQueueEntryHandleValue;
			}
			var no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
			if(this._bySyncMotionNameModelName){
				var syncMotionInfoArr = $gameLive2d.getModel(this._bySyncMotionNameModelName)._nowMotionData;
				group = syncMotionInfoArr[0];
				no = syncMotionInfoArr[1];
			}
			return this.startMotion(group, no, priority, onFinishedMotionHandler);
		};
		LAppModel.prototype.setExpression = function (expressionId) {
			var motion = this._expressions.getValue(expressionId);
			if (this._debugMode) {
				LAppPal.printMessage("[APP]expression: [" + expressionId + "]");
			}
			if (motion != null) {
				this._expressionManager.startMotionPriority(motion, false, PriorityForce);
			}
			else {
				if (this._debugMode) {
					LAppPal.printMessage("[APP]expression[" + expressionId + "] is null");
				}
			}
		};
		LAppModel.prototype.setRandomExpression = function () {
			if (this._expressions.getSize() == 0) {
				return;
			}
			var no = Math.floor(Math.random() * this._expressions.getSize());
			for (var i = 0; i < this._expressions.getSize(); i++) {
				if (i == no) {
					var name_1 = this._expressions._keyValues[i].first;
					this.setExpression(name_1);
					return;
				}
			}
		};
		LAppModel.prototype.motionEventFired = function (eventValue) {
			CubismLogInfo('{0} is fired on LAppModel!!', eventValue.s);
		};
		LAppModel.prototype.hitTest = function (hitArenaName, x, y) {
			if (this._opacity < 1) {
				return false;
			}
			var count = this._modelSetting.getHitAreasCount();
			for (var i = 0; i < count; i++) {
				if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
					var drawId = this._modelSetting.getHitAreaId(i);
					return this.isHit(drawId, x, y);
				}
			}
			return false;
		};
		LAppModel.prototype.preLoadMotionGroup = function (group) {
			var _this = this;
			var _loop_3 = function (i) {
				var motionFileName = this_2._modelSetting.getMotionFileName(group, i);
				var name_2 = group + "_" + i;
				if (this_2._debugMode) {
					LAppPal.printMessage("[APP]load motion: " + motionFileName + " => [" + name_2 + "]");
				}
				fetch(this_2._modelHomeDir + "/" + motionFileName)
					.then(function (response) { return response.arrayBuffer(); })
					.then(function (arrayBuffer) {
					var tmpMotion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name_2);
					var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);
					if (fadeTime >= 0.0) {
						tmpMotion.setFadeInTime(fadeTime);
					}
					fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);
					if (fadeTime >= 0.0) {
						tmpMotion.setFadeOutTime(fadeTime);
					}
					tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
					if (_this._motions.getValue(name_2) != null) {
						ACubismMotion.delete(_this._motions.getValue(name_2));
					}
					_this._motions.setValue(name_2, tmpMotion);
					_this._motionCount++;
					if (_this._motionCount >= _this._allMotionCount) {
						_this._state = LoadStep.LoadTexture;
						_this._motionManager.stopAllMotions();
						_this._updating = false;
						_this._initialized = true;
						_this.createRenderer(this._modelName);
						_this.setupTextures();
						_this.getRenderer().startUp($gameLive2d.gl, _this._modelName);
					}
				});
			};
			var this_2 = this;
			for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {
				_loop_3(i);
			}
		};
		LAppModel.prototype.releaseMotions = function () {
			this._motions.clear();
		};
		LAppModel.prototype.releaseExpressions = function () {
			this._expressions.clear();
		};
		LAppModel.prototype.m_testShaderCompile = function () {
			if(!this.getRenderer()){return true}
			const info = $gameLive2d.data[this._modelName].ScreenPosScale;
			const xScale = info[2] || 1.0;
			const yScale = info[3] || 1.0;
			let viewport = [info[0], info[1], Graphics.width*xScale, Graphics.height*yScale];
			const frameBuffer = $gameLive2d.gl.getParameter($gameLive2d.gl.FRAMEBUFFER_BINDING);
			this.getRenderer().setRenderState(frameBuffer, viewport, this._modelName);
			return this.getRenderer()._testShaderCompile(this._modelName);
		}
		LAppModel.prototype.doDraw = function () {
			if (this._model == null)
				return;
			if(!this.visibleModel){return}
			const info = $gameLive2d.data[this._modelName].ScreenPosScale;
			const xScale = info[2] || 1.0;
			const yScale = info[3] || 1.0;
			let viewport = [info[0], info[1], Graphics.width*xScale, Graphics.height*yScale];
			const frameBuffer = $gameLive2d.gl.getParameter($gameLive2d.gl.FRAMEBUFFER_BINDING);
			this.getRenderer().setRenderState(frameBuffer, viewport, this._modelName);
			//var instance = CubismShader_WebGL.getInstance(this._model._modelName)
			this.getRenderer().drawModel();
			viewport = [0, 0, Graphics.width, Graphics.height];
			this.getRenderer().setRenderState(frameBuffer, viewport, this._modelName);
			this.getRenderer()._clippingManager.setupClippingContextAfter(this.getRenderer().getModel(), this.getRenderer());
		};
		LAppModel.prototype.draw = function (matrix) {
			if (this._model == null) {
				return;
			}
			if (this._state == LoadStep.CompleteSetup) {
				matrix.multiplyByMatrix(this._modelMatrix);
				this.getRenderer().setMvpMatrix(matrix);
				this.doDraw();
			}
		};
		return LAppModel;
	}(CubismUserModel));
	ViewMaxScale = 2.0;
	ViewMinScale = 0.8;
	ViewLogicalLeft = -1.0;
	ViewLogicalRight = 1.0;
	ViewLogicalMaxLeft = -2.0;
	ViewLogicalMaxRight = 2.0;
	ViewLogicalMaxBottom = -2.0;
	ViewLogicalMaxTop = 2.0;
	ResourcesPath = 'live2dModel/';
	BackImageName = '';
	GearImageName = '';
	PowerImageName = '';
	ModelDir = modelNameArray;
	ModelDirSize = ModelDir.length;
	MotionGroupIdle = 'Idle';
	MotionGroupTapBody = 'TapBody';
	HitAreaNameHead = 'Head';
	HitAreaNameBody = 'Body';
	PriorityNone = 0;
	PriorityIdle = 1;
	PriorityNormal = 2;
	PriorityForce = 3;
	DebugLogEnable = true;
	DebugTouchLogEnable = false;
	CubismLoggingLevel = LogLevel.LogLevel_Verbose;
	RenderTargetWidth = 1900;
	RenderTargetHeight = 1000;
	var __importStar = (this && this.__importStar) || function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
		result["default"] = mod;
		return result;
	};
	
	var Csm_csmVector = Live2DCubismFramework.csmVector;
	var Csm_CubismMatrix44 = Live2DCubismFramework.CubismMatrix44;
	s_instance = null;
	var LAppLive2DManager = (function () {
		function LAppLive2DManager() {
			this._finishedMotion = function (self) {
				LAppPal.printMessage('Motion Finished:');
			};
			this._viewMatrix = new Csm_CubismMatrix44();
			this._models = new Csm_csmVector();
		}
		LAppLive2DManager.prototype.getInstance = function () {
			if (s_instance == null) {
				s_instance = new LAppLive2DManager();
			}
			return s_instance;
		};
		LAppLive2DManager.prototype.releaseInstance = function () {
			if (s_instance != null) {
				s_instance = void 0;
			}
			s_instance = null;
		};
		LAppLive2DManager.prototype.getModel = function (no) {
			if (no < this._models.getSize()) {
				return this._models.at(no);
			}
			return null;
		};
		LAppLive2DManager.prototype.releaseAllModel = function () {
			for (var i = 0; i < this._models.getSize(); i++) {
				if(!this._models.at(i)){continue}
				this._models.at(i).release();
				this._models.set(i, null);
			}
			this._models.clear();
		};
		LAppLive2DManager.prototype.onDrag = function (x, y) {
			for (var i = 0; i < this._models.getSize(); i++) {
				var model = this.getModel(i);
				if (model) {
					model.setDragging(x, y);
				}
			}
		};
		LAppLive2DManager.prototype.onTap = function (x, y) {
			DebugLogEnable = false;
			if (DebugLogEnable) {
				LAppPal.printMessage("[APP]tap point: {x: " + x.toFixed(2) + " y: " + y.toFixed(2) + "}");
			}
			for (var i = 0; i < this._models.getSize(); i++) {
				if(!this._models.at(i) || !this._models.at(i).visibleModel){continue}
				for(let j = 0; j < this._models.at(i).hitPartsNameArray.length; j++){
					const arr = this._models.at(i).hitPartsNameArray[j];
					if (this._models.at(i).hitTest(arr[0], x, y)) {
						this._models.at(i).mouseClickingCount++;
						if(this._models.at(i).mouseClickingCount <= 10){
							this._models.at(i).mouseClickingSwitchId = arr[1];
						} else {
							this._models.at(i).mouseClickingSwitchId = 0;
							$gameSwitches.setValue(arr[2], true);
						}
					}
				}
			}
		};

		LAppLive2DManager.prototype.onUpdate = function (name) {
			const model = $gameLive2d.getModel(name)
			if(!model){return}
			if(!model.visibleModel){return}
			var projection = new Csm_CubismMatrix44();
			var width = Graphics.width, height = Graphics.height;
			if (this._viewMatrix != null) {
				projection.multiplyByMatrix(this._viewMatrix);
			}
			var saveProjection = projection.clone();
			projection  = saveProjection.clone();
			const data  = $gameLive2d.data[name];
			const pos   = data.position;
			const rate  = data.scale;
			projection.translate(pos[0], pos[1]);
			projection.scale(rate, width*rate / height);
			model.update();
			model.draw(projection);
		};
		LAppLive2DManager.prototype.nextScene = function () {
			var no = (this._sceneIndex + 1) % ModelDirSize;
			this.changeScene(no);
		};
		LAppLive2DManager.prototype.changeScene = function (index, posInd, name) {
			this._sceneIndex = index;
			if (DebugLogEnable) {
				LAppPal.printMessage("[APP]model index: " + this._sceneIndex);
			}
			var model = ModelDir[index];
			var modelPath = ResourcesPath + model + '/';
			var modelJsonName = ModelDir[index];
			modelJsonName += '.model3.json';
			this._models.exs = true;
			this._models.pushBlankSpace(new LAppModel());
			this._models.at(posInd).loadAssets(modelPath, modelJsonName, name);
		};
		return LAppLive2DManager;
	}());
	
	var Csm_csmVector = Live2DCubismFramework.csmVector;
	var LAppTextureManager = (function () {
				
		function LAppTextureManager() {
			this._textures = new Csm_csmVector();
		}
		LAppTextureManager.prototype.release = function () {
			var gl = $gameLive2d.gl;
			for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
				gl.deleteTexture(ite.ptr().id);
			}
			this._textures = null;
		};
		LAppTextureManager.prototype.createTextureFromPngFile = function (fileName, usePremultiply, callback, model) {
			var _this = this;
			const deafultFunc = function(_src, fileName, usePremultiply, callback){
				var _loop_1 = function (ite) {
					if (ite.ptr().fileName == fileName &&
						ite.ptr().usePremultply == usePremultiply) {
						ite.ptr().img = new Image();
						ite.ptr().img.onload = function () { return callback(ite.ptr()); };
						ite.ptr().img.src = _src;
						return { value: void 0 };
					}
				};
				for (var ite = _this._textures.begin(); ite.notEqual(_this._textures.end()); ite.preIncrement()) {
					var state_1 = _loop_1(ite);
					if (typeof state_1 === "object")
						return state_1.value;
				}
				const _thisTextures = _this._textures
				var img = new Image();
				var gl = $gameLive2d.gl;
				img.src = _src;
				img.onload = function () {
					model.textureLoadedCount++;
					if(!gl){gl = $gameLive2d.gl}
					var tex = gl.createTexture();
					gl.bindTexture(gl.TEXTURE_2D, tex);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
					if (usePremultiply) {
						gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
					}
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
					gl.generateMipmap(gl.TEXTURE_2D);
					gl.bindTexture(gl.TEXTURE_2D, null);
					var textureInfo = new TextureInfo();
					if (textureInfo != null) {
						textureInfo.fileName = fileName;
						textureInfo.width = img.width;
						textureInfo.height = img.height;
						textureInfo.id = tex;
						textureInfo.img = img;
						textureInfo.usePremultply = usePremultiply;
						_thisTextures.pushBack(textureInfo);
					}
					callback(textureInfo);
				};
				img.onerror = function(){throw new Error("テクスチャ画像の読み込みエラーが発生しました。恐れ入りますが、一度ウィンドウを閉じ再起動してください。何度も発生する場合はPCのスペックが原因になっている可能性があります。")};
			}
			if(Decrypter.hasEncryptedImages) {
				url = fileName;

				var requestFile = new XMLHttpRequest();
				requestFile.open("GET", url);
				requestFile.responseType = "arraybuffer";
				requestFile.send();

				requestFile.onload = function () {
					if(this.status < Decrypter._xhrOk) {
						var arrayBuffer = Decrypter.decryptArrayBuffer(requestFile.response);
						deafultFunc(Decrypter.createBlobUrl(arrayBuffer), fileName, usePremultiply, callback)
					}
				};
			} else {
				deafultFunc(fileName, fileName, usePremultiply, callback)
			}
		};
		LAppTextureManager.prototype.releaseTextures = function () {
			for (var i = 0; i < this._textures.getSize(); i++) {
				this._textures.set(i, null);
			}
			this._textures.clear();
		};
		LAppTextureManager.prototype.releaseTextureByTexture = function (texture) {
			for (var i = 0; i < this._textures.getSize(); i++) {
				if (this._textures.at(i).id != texture) {
					continue;
				}
				this._textures.set(i, null);
				this._textures.remove(i);
				break;
			}
		};
		LAppTextureManager.prototype.releaseTextureByFilePath = function (fileName) {
			for (var i = 0; i < this._textures.getSize(); i++) {
				if (this._textures.at(i).fileName == fileName) {
					this._textures.set(i, null);
					this._textures.remove(i);
					break;
				}
			}
		};
		return LAppTextureManager;
	}());
	
	var TextureInfo = (function () {
		function TextureInfo() {
			this.id = null;
			this.width = 0;
			this.height = 0;
		}
		return TextureInfo;
	}());
	TextureInfo = TextureInfo;
	var TouchManager = (function () {
		function TouchManager() {
			this._startX = 0.0;
			this._startY = 0.0;
			this._lastX = 0.0;
			this._lastY = 0.0;
			this._lastX1 = 0.0;
			this._lastY1 = 0.0;
			this._lastX2 = 0.0;
			this._lastY2 = 0.0;
			this._lastTouchDistance = 0.0;
			this._deltaX = 0.0;
			this._deltaY = 0.0;
			this._scale = 1.0;
			this._touchSingle = false;
			this._flipAvailable = false;
		}
		TouchManager.prototype.getCenterX = function () {
			return this._lastX;
		};
		TouchManager.prototype.getCenterY = function () {
			return this._lastY;
		};
		TouchManager.prototype.getDeltaX = function () {
			return this._deltaX;
		};
		TouchManager.prototype.getDeltaY = function () {
			return this._deltaY;
		};
		TouchManager.prototype.getStartX = function () {
			return this._startX;
		};
		TouchManager.prototype.getStartY = function () {
			return this._startY;
		};
		TouchManager.prototype.getScale = function () {
			return this._scale;
		};
		TouchManager.prototype.getX = function () {
			return this._lastX;
		};
		TouchManager.prototype.getY = function () {
			return this._lastY;
		};
		TouchManager.prototype.getX1 = function () {
			return this._lastX1;
		};
		TouchManager.prototype.getY1 = function () {
			return this._lastY1;
		};
		TouchManager.prototype.getX2 = function () {
			return this._lastX2;
		};
		TouchManager.prototype.getY2 = function () {
			return this._lastY2;
		};
		TouchManager.prototype.isSingleTouch = function () {
			return this._touchSingle;
		};
		TouchManager.prototype.isFlickAvailable = function () {
			return this._flipAvailable;
		};
		TouchManager.prototype.disableFlick = function () {
			this._flipAvailable = false;
		};
		TouchManager.prototype.touchesBegan = function (deviceX, deviceY) {
			this._lastX = deviceX;
			this._lastY = deviceY;
			this._startX = deviceX;
			this._startY = deviceY;
			this._lastTouchDistance = -1.0;
			this._flipAvailable = true;
			this._touchSingle = true;
		};
		TouchManager.prototype.touchesMoved = function (deviceX, deviceY) {
			this._lastX = deviceX;
			this._lastY = deviceY;
			this._lastTouchDistance = -1.0;
			this._touchSingle = true;
		};
		TouchManager.prototype.getFlickDistance = function () {
			return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
		};
		TouchManager.prototype.calculateDistance = function (x1, y1, x2, y2) {
			return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
		};
		TouchManager.prototype.calculateMovingAmount = function (v1, v2) {
			if (v1 > 0.0 != v2 > 0.0) {
				return 0.0;
			}
			var sign = v1 > 0.0 ? 1.0 : -1.0;
			var absoluteValue1 = Math.abs(v1);
			var absoluteValue2 = Math.abs(v2);
			return (sign * (absoluteValue1 < absoluteValue2 ? absoluteValue1 : absoluteValue2));
		};
		return TouchManager;
	}());
	TouchManager = TouchManager;
	var __importStar = (this && this.__importStar) || function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
		result["default"] = mod;
		return result;
	};
	
	function onClickBegan(e) {
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		LAppDelegate.getInstance()._captured = true;
		var posX = e.pageX;
		var posY = e.pageY;
		LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
	}
	function onMouseMoved(e) {
		if (!LAppDelegate.getInstance()._captured) {
			return;
		}
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		var rect = e.target.getBoundingClientRect();
		var posX = e.clientX - rect.left;
		var posY = e.clientY - rect.top;
		LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
	}
	function onClickEnded(e) {
		LAppDelegate.getInstance()._captured = false;
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		var rect = e.target.getBoundingClientRect();
		var posX = e.clientX - rect.left;
		var posY = e.clientY - rect.top;
		LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
	}
	function onTouchBegan(e) {
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		LAppDelegate.getInstance()._captured = true;
		var posX = e.changedTouches[0].pageX;
		var posY = e.changedTouches[0].pageY;
		LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
	}
	function onTouchMoved(e) {
		if (!LAppDelegate.getInstance()._captured) {
			return;
		}
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		var rect = e.target.getBoundingClientRect();
		var posX = e.changedTouches[0].clientX - rect.left;
		var posY = e.changedTouches[0].clientY - rect.top;
		LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
	}
	function onTouchEnded(e) {
		LAppDelegate.getInstance()._captured = false;
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		var rect = e.target.getBoundingClientRect();
		var posX = e.changedTouches[0].clientX - rect.left;
		var posY = e.changedTouches[0].clientY - rect.top;
		LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
	}
	function onTouchCancel(e) {
		LAppDelegate.getInstance()._captured = false;
		if (!LAppDelegate.getInstance()._view) {
			LAppPal.printMessage('view notfound');
			return;
		}
		var rect = e.target.getBoundingClientRect();
		var posX = e.changedTouches[0].clientX - rect.left;
		var posY = e.changedTouches[0].clientY - rect.top;
		LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
	}
}
