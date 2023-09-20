//=============================================================================
// ThrowMovingObject.js
//=============================================================================

/*:ja
 * @plugindesc プレイヤーから投擲物を射出します。
 * @author 村人A
 * 
 * @help
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * バージョン情報
 * 
 * 23/01/08 バージョン1.1　 速度設定追加
 * 20/12/18 バージョン1.0　 試作品リリース
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * 
 * 
 * 
 * 
 * @param n1
 * @text 速度設定
 * @desc 投擲物の速度を設定します。数値は移動ルートの「速度の変更」と同等です。
 * @type number
 * @default 4
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

	String.prototype.toNumArray = function(){
		return this.split(',').map(str => Number(str));
	}
	
    const param = PluginManager.parameters('ThrowMovingObject');
	let _ = {};
	Object.keys(param).forEach(key => {
		if(key[0] == "n" && key[1] == "a"){
			_[key] = param[key].toNumArray();
		} else if(key[0] == "n"){
			_[key] = Number(param[key]);
		} else if(key[0] == "s" && key[1] == "a" && key[2] == "a"){
			_[key] = JSON.parse(param[key]).map(str => str.split(','));
		} else if(key[0] == "s" && key[1] == "a"){
			_[key] = JSON.parse(param[key]);
		} else if(key[0] == "s"){
			_[key] = param[key];
		} else if(key[0] == "a"){
			_[key] = param[key].toAudioParam();
		}
	})
	
	//-----------------------------------------------------------------------------
	// Game_CharacterBase
	//
	
	Game_CharacterBase.prototype.getTowardPosition = function() {
		const x = this.x;
		const y = this.y;
		const d = this.direction();
		const x2 = $gameMap.roundXWithDirection(x, d);
		const y2 = $gameMap.roundYWithDirection(y, d);
		return [x2, y2];
	}

	//-----------------------------------------------------------------------------
	// Game_Map
	//
	
	const _alias_Game_Map_initialize = Game_Map.prototype.initialize;
	Game_Map.prototype.initialize = function() {
		_alias_Game_Map_initialize.call(this);
		this.createThrowObject();
	}

	Game_Map.prototype.createThrowObject = function() {
		this._movingObjects = [];
		//23/01/08 追記
		for(let i = 0; i < 10; i++){
			this._movingObjects.push(new Game_MovingObject());
		}
	}
	
	Game_Map.prototype.movingObjects = function() {
		return this._movingObjects;
	};
	
	Game_Map.prototype.setMovingObjects = function(image, distance) {
		for(let obj of this._movingObjects){
			if(obj.isActivated){continue}
			obj.setImage(image[0], Number(image[1]))
			obj.setPosition(...$gamePlayer.getTowardPosition())
			let route = [{code:26, indent:null}, {code:40, indent:null}]
			for(let i = 0; i < distance; i++){
				route.push({code:12, indent:null})
			}
			route.push({code:39, indent:null})
			//23/01/08 追記
			route.push({code:45, parameters:['this.isActivated = false'], indent:null})
			route.push({code:0})
			const rounteObj = {list:route, repeat:false, skippable:true, wait:false};
			obj.forceMoveRoute(rounteObj);
			obj.setMoveSpeed(_.n1);
			obj.isActivated = true;
			break
		}
	}
	
	const _alias_Game_Map_update = Game_Map.prototype.update;
	Game_Map.prototype.update = function(sceneActive) {
		_alias_Game_Map_update.call(this, sceneActive);
		this.updateMovingObjects();
	}

	Game_Map.prototype.updateMovingObjects = function() {
		this._movingObjects.forEach(obj => obj.update());
	}
	
	//-----------------------------------------------------------------------------
	// Game_MovingObject
	//
	
	function Game_MovingObject() {
		this.initialize.apply(this, arguments);
	}

	Game_MovingObject.prototype = Object.create(Game_Character.prototype);
	Game_MovingObject.prototype.constructor = Game_MovingObject;

	Game_MovingObject.prototype.initialize = function() {
		Game_Character.prototype.initialize.call(this);
		this._mapId = 0;
		this.isActivated = false;
	};

	Game_MovingObject.prototype.isCollidedWithEventsAfter = function(d) {
		const x2 = $gameMap.roundXWithDirection(this.x, d);
		const y2 = $gameMap.roundYWithDirection(this.y, d);
		//const onEvent = this.isMoving() ? $gameMap.eventsXyNt(...this.preXy) : [];
		//23/01/04 修正
		const onEvent = $gameMap.eventsXyNt(...this.preXy);
		const forwardEvent = !this.isMoving() ? $gameMap.eventsXyNt(x2, y2) : [];
		const eventArray = onEvent.concat(forwardEvent);
		return eventArray.length > 0 && eventArray[0].isNormalPriority() ? eventArray[0] : false;
	};

	Game_MovingObject.prototype.moveStraight = function(d) {
		this.preXy = [this.x, this.y];
		Game_CharacterBase.prototype.moveStraight.call(this, d)
		const event = this.isCollidedWithEventsAfter(d);
		if (event) {
			const symb = $gamePlayer.gatheringAction().fetchCurrentModel().symbol;
			if(event.event().meta[symb]){
				//23/01/04 修正
				this.setTransparent(true)
				this._moveRouteIndex = this._moveRoute.list.length-3;
				$gamePlayer._gatheringAction._fireSelfSwitchEvent(event)
			}
		}
	}

	//-----------------------------------------------------------------------------
	// Spriteset_Map
	//
	
	const _alias_Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
	Spriteset_Map.prototype.createCharacters = function() {
		_alias_Spriteset_Map_createCharacters.call(this);
		$gameMap.movingObjects().forEach(obj => {
			const sprite = new Sprite_Character(obj);
			this._characterSprites.push(sprite);
			this._tilemap.addChild(sprite);
		})
	};
}