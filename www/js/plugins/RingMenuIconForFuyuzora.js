//=============================================================================
// RingMenuIcon.js
//=============================================================================

/*:ja
 * @plugindesc メニューボタンを押すとリング状にメニューアイコンが表示されます。
 * @author 村人A
 *
 * @param メニュー項目
 * @desc リングコマンドに表示するメニューの項目です。
 * @default アイテム,スキル,装備,ステータス,並び替え,オプション,セーブ,ゲーム終了
 *
 * @param リングメニューサイズ
 * @desc リングコマンドの円の大きさを指定します。
 * @default 100
 * @type number
 *
 * @param 選択時アイコン拡大率
 * @desc 選択しているアイコンの拡大率を百分率で指定します。100でそのままの大きさになります。
 * @default 200
 *
 * @param 選択している項目名のプレイヤーからの相対距離
 * @desc アイコンで選択している項目名のプレイヤーからの位置を指定します。値が大きい程上に移動します。
 * @default 100
 * @type number
 *
 * @param 所持金ウィンドウ位置
 * @desc 所持金ウィンドウの位置を半角カンマ,を挟んでx座標,y座標と指定します。
 * @default 550,300
 *
 * @param 任意テキストウィンドウの位置と大きさ
 * @desc 任意テキストウィンドウの位置を半角カンマ,を挟んでx座標,y座標,幅,高さと指定します。
 * @default 500,400,320,220
 *
 * @param 任意テキスト1
 * @desc 任意テキストウィンドウに表示するテキストを記述します。C,I,V等の制御文字が使用できます。
 * @default テスト変数\V[1]\C[2]テスト\C[0]\I[3]
 *
 * @param 任意テキスト2
 * @desc 任意テキストウィンドウに表示するテキストを記述します。C,I,V等の制御文字が使用できます。
 * @default 任意テキスト２
 *
 * @param 任意テキスト3
 * @desc 任意テキストウィンドウに表示するテキストを記述します。C,I,V等の制御文字が使用できます。
 * @default 任意テキスト３
 *
 * @param 任意テキスト4
 * @desc 任意テキストウィンドウに表示するテキストを記述します。C,I,V等の制御文字が使用できます。
 * @default 任意テキスト４
 *
 * @param 任意テキスト5
 * @desc 任意テキストウィンドウに表示するテキストを記述します。C,I,V等の制御文字が使用できます。
 * @default 任意テキスト５
 *
 * @help 
 * --------------------------------------------
 * ◯バージョン管理◯
 * --------------------------------------------
 *　2019/6/21 ver1.3
 *　メニューに所持金ウィンドウと任意テキストウィンドウを追加しました。
 *
 *　2019/3/22 ver1.2
 *　選択中のアイコンの拡大表示と項目名の背景に黒背景を導入
 *
 *　2019/3/19 ver1.1
 *　エンコードやいくつかのバグを修正
 *
 *　2017/7/4 ver1.0
 *　プラグインリリース
 *
 * --------------------------------------------
 * ◯ヘルプ◯
 * --------------------------------------------
 * このプラグインには、プラグインコマンドはありません。
 * 
 * メニュー項目には「,」カンマを挟み「アイテム」,「スキル」,「装備」,
 * 「ステータス」,「並び替え」,「オプション」,「セーブ」,「ゲーム終了」の内必要
 * なものを記述してください。
 * 文字が異なったり、スペースなどを入れると認識されません。
 * また、このプラグインのメニューアイコンは汎用性を持たせるため画像を使用
 * しています。
 * それぞれのアイコンは以下のように名前を付けてください。
 * アイテム     item_icon.png
 * スキル      skill_icon.png
 * 装備  　　　 equip_icon.png
 * ステータス   option_icon.png
 * 並び替え   formation_icon.png
 * オプション   status_icon.png
 * セーブ     save_icon.png
 * ゲーム終了 gameEnd_icon.png
 * 画像はimgフォルダのsystemフォルダ内に保存してください。
 * このプラグインのキャラクターのアイコンはビッグキャラクター（$がつくファイル）には対応しておりません。
 * ご希望の方がいらっしゃればコメントかメールにてお知らせください。
 */

(function () {
	'use strict';

	String.prototype.toNumberArray = function () {
		return this.split(",").map(function (str) { return Number(str) });
	}

	const parameters = PluginManager.parameters('RingMenuIconForFuyuzora');
	const menuList = String(parameters['メニュー項目'] || 'アイテム,スキル,装備,ステータス,並び替え,オプション,セーブ,ゲーム終了').split(",");
	const ringMenuRadius = Number(parameters['リングメニューサイズ']);
	const choosenIconZoomRate = Number(parameters['選択時アイコン拡大率']);
	const iconTitleNameDistance = Number(parameters['選択している項目名のプレイヤーからの相対距離']);
	const goldWindowPos = parameters['所持金ウィンドウ位置'].toNumberArray();
	const optionalTextWindowPosSize = parameters['任意テキストウィンドウの位置と大きさ'].toNumberArray();

	//-----------------------------------------------------------------------------
	// Scene_Map
	//

	Scene_Map.prototype.callMenu = function () {
		SoundManager.playOk();
		SceneManager.push(Scene_RingMenuChoice);
		$gameTemp.clearDestination();
		this._mapNameWindow.hide();
		this._waitCount = 2;
	};

	const _alias_Scene_Map_terminate = Scene_Map.prototype.terminate;
	Scene_Map.prototype.terminate = function () {
		if (!SceneManager.isNextScene(Scene_Battle)) {
			SceneManager.snapForNoBlueBackground();
		}
		_alias_Scene_Map_terminate.call(this);
	};

	//-----------------------------------------------------------------------------
	// Scene_RingMenuChoice
	//
	// The scene class of the ring menu.

	function Scene_RingMenuChoice() {
		this.initialize.apply(this, arguments);
	}

	Scene_RingMenuChoice.prototype = Object.create(Scene_Base.prototype);
	Scene_RingMenuChoice.prototype.constructor = Scene_RingMenuChoice;

	Scene_RingMenuChoice.prototype.initialize = function () {
		Scene_Base.prototype.initialize.call(this);
		this.ringMeunArray = []
		this.iconSpriteArray = [];
		this._rmcSprites = []
		this.followerIconArray = []
		this.startIconMenu = false;
		this.ringMenuCancel = false;
		this.openChooseRing = false;
		this.touchRound = false;
		this.ringCharaMenuCancel = false;
		this.chooseCharaMode = false;
		this.touchMoveScene = false;
		this.statusNeedScene = ""
		this.on_turn = [false, false];
		this.menuStartFrame = 10;
		this.menuIconRoundRadius = ringMenuRadius;
		this.turnFrame = 10;
		this.nowTurnCount = 0;
		this.preturnIndex = 0;
		this.preChoiceIndex = 0;
		this.nowChoiceIndex = 0;
		this.pw = 0;
		this.ph = 0;
		this.turnIndex = 0;
		this.waitcount = 5;
		this.nomalIconSize = new Point(1, 1)
		const rate = choosenIconZoomRate / 100;
		this.choosenIconSize = new Point(rate, rate)
		const followerName = $gameParty.members()[0]._characterName;
		this.charaSampleSprite = new Sprite();
		this.charaSampleSprite.bitmap = ImageManager.loadCharacter(followerName);
		menuList.forEach(function (str) {
			switch (str) {
				case "アイテム":
					this.ringMeunArray.push(["item", "アイテム"]);
					break;
				case "スキル":
					this.ringMeunArray.push(["skill", "スキル"]);
					break;
				case "装備":
					this.ringMeunArray.push(["equip", "装備"]);
					break;
				case "ステータス":
					this.ringMeunArray.push(["status", "ステータス"]);
					break;
				case "並び替え":
					this.ringMeunArray.push(["formation", "並び替え"]);
					break;
				case "オプション":
					this.ringMeunArray.push(["option", "オプション"]);
					break;
				case "セーブ":
					this.ringMeunArray.push(["save", "セーブ"]);
					break;
				case "ゲーム終了":
					this.ringMeunArray.push(["gameEnd", "ゲーム終了"]);
					break;
			}
		}.bind(this));
		if (this.iconSpriteArray.length != 0) {
			this.iconSpriteArray.forEach(function (sprite) {
				sprite.opacity = 0;
			});
		}
	};

	Scene_RingMenuChoice.prototype.create = function () {
		Scene_Base.prototype.create.call(this);
		this.createBackground();
		this.createMenuIcon();
		this.createActorsIcon();
		this.createGoldWindow();
		this.createOptionalTextWindow();
		this.startIconMenu = true;
	};

	Scene_RingMenuChoice.prototype.createOptionalTextWindow = function () {
		const p = optionalTextWindowPosSize;
		this._optionalTextWindow = new Window_Base(p[0], p[1], p[2], p[3]);
		this._optionalTextWindow.openness = 0;
		for (let i = 1; i <= 5; i++) {
			const textName = '任意テキスト' + i;
			const y = this._optionalTextWindow.lineHeight() * (i - 1);
			this._optionalTextWindow.drawTextEx(parameters[textName], 0, y);
		}
		this.addChild(this._optionalTextWindow);
		this._optionalTextWindow.open();
	}

	Scene_RingMenuChoice.prototype.createGoldWindow = function () {
		this._goldWindow = new Window_Gold(goldWindowPos[0], goldWindowPos[1]);
		this._goldWindow.openness = 0;
		this.addChild(this._goldWindow);
		this._goldWindow.open();
	}

	Scene_RingMenuChoice.prototype.createActorsIcon = function () {
		this.pw = this.charaSampleSprite.bitmap.width / 12;
		this.ph = this.charaSampleSprite.bitmap.height / 8;
		const folloerLength = $gameParty.members().length;
		for (let i = 0; i < folloerLength; i++) {
			const followerName = $gameParty.members()[i]._characterName;
			const followerIndex = $gameParty.members()[i].characterIndex()
			const sprite = new Sprite();
			sprite.bitmap = ImageManager.loadCharacter(followerName);
			const sx = (followerIndex % 4 * 3 + 1) * this.pw;
			const sy = (Math.floor(followerIndex / 4) * 4 + 0) * this.ph;
			sprite.setFrame(sx, sy, this.pw, this.ph);
			sprite.x = $gamePlayer.screenX();
			sprite.y = $gamePlayer.screenY();
			sprite.anchor.x = 0.5;
			sprite.anchor.y = 1;
			sprite.opacity = 0;
			this.addChild(sprite);
			this.followerIconArray.push(sprite);
		}
		this.iconSpriteArray[0].scale = this.choosenIconSize;
	}

	Scene_RingMenuChoice.prototype.createMenuIcon = function () {
		if (this.iconSpriteArray.length == 0) {
			this.ringMeunArray.forEach(function (name) {
				const sprite = new Sprite();
				sprite.bitmap = ImageManager.loadSystem(name[0] + "_icon");
				sprite.x = $gamePlayer.screenX();
				sprite.y = $gamePlayer.screenY();
				sprite.anchor.x = 0.5;
				sprite.anchor.y = 1;
				sprite.opacity = 0;
				this.iconSpriteArray.push(sprite);
				this.addChild(sprite);
			}, this);
		}
	}

	Scene_RingMenuChoice.prototype.start = function () {
		Scene_MenuBase.prototype.start.call(this);
		this.iconWidth = this.iconSpriteArray[0].bitmap.width;
		this.iconHeight = this.iconSpriteArray[0].bitmap.height;
	}

	Scene_RingMenuChoice.prototype.createBackground = function () {
		this._backgroundSprite = new Sprite();
		this._backgroundSprite.bitmap = SceneManager.noblurbackgroundBitmap();
		this.addChild(this._backgroundSprite);
	};

	Scene_RingMenuChoice.prototype.isCanceled = function () {
		return Input.isTriggered('menu') || Input.isTriggered('cancel') || TouchInput.isCancelled();
	};

	Scene_RingMenuChoice.prototype.update = function () {
		Scene_Base.prototype.update.call(this);
		if (this.waitcount > 0) {
			this.waitcount--;
			return;
		}
		this.updateIconContraction();
		if (this.chooseCharaMode) {
			this.updateCharaIconContraction();
			this.updateCharaIconExpansion();
			this.updateRoundCharaIcon();
			return
		}
		this.updateIconExpansion();
		this.updateRoundIcon();
	};

	//メニューアイコン操作＆アイコン回転
	Scene_RingMenuChoice.prototype.updateRoundIcon = function () {
		if (this.on_turn[0]) {
			this.RoundIcon(this.on_turn[1], this.iconSpriteArray);
			return;
		}

		if (TouchInput.isTriggered()) {
			this.touchControll(this.iconSpriteArray);
		}

		if (Input.isRepeated('ok') || this.touchMoveScene) {
			SoundManager.playOk();
			this.iconSpriteArray[this.nowChoiceIndex].scale = this.nomalIconSize;
			this.followerIconArray[0].scale = this.choosenIconSize;
			let command_num = this.ringMeunArray.length - this.turnIndex
			if (this.turnIndex == 0) { command_num = 0 }
			switch (this.ringMeunArray[command_num][0]) {
				case "item":
					SceneManager.goto(Scene_Item);
					break;
				case "equip":
					this.toChooseCharaMode(command_num);
					break;
				case "status":
					this.toChooseCharaMode(command_num);
					break;
				case "formation":
					SceneManager.goto(Scene_Formation_Menu);
					break;
				case "option":
					SceneManager.goto(Scene_Options);
					break;
				case "save":
					SceneManager.goto(Scene_Save);
					break;
				case "skill":
					this.toChooseCharaMode(command_num);
					break;
				case "gameEnd":
					SceneManager.goto(Scene_GameEnd);
					break;
			}
			this.touchMoveScene = false;
		}
		if (Input.isRepeated('right') && !this.ringMenuCancel && !this.startIconMenu) {
			this.preRingRoundPros(true, true);
			this.on_turn = [true, true];
		}
		if (Input.isRepeated('left') && !this.ringMenuCancel && !this.startIconMenu) {
			this.preRingRoundPros(false, true);
			this.on_turn = [true, false];
		}
	}

	Scene_RingMenuChoice.prototype.preRingRoundPros = function (isRight, isIcon) {
		SoundManager.playCursor();
		this.preChoiceIndex = this.nowChoiceIndex;
		const maxIndex = isIcon ? menuList.length : this.followerIconArray.length;
		if (isRight) {
			this.nowChoiceIndex = this.nowChoiceIndex == 0 ? maxIndex - 1 : this.nowChoiceIndex - 1;
		} else {
			this.nowChoiceIndex = (this.nowChoiceIndex + 1) % maxIndex;
		}
		if (isIcon) {
			this.iconSpriteArray[this.preChoiceIndex].scale = this.nomalIconSize;
			this.iconSpriteArray[this.nowChoiceIndex].scale = this.choosenIconSize;
		} else {
			this.followerIconArray[this.preChoiceIndex].scale = this.nomalIconSize;
			this.followerIconArray[this.nowChoiceIndex].scale = this.choosenIconSize;
		}
	}

	Scene_RingMenuChoice.prototype.touchControll = function (array) {
		array.forEach(function (sprite, ind, arr) {
			const angle = 360 * (ind / arr.length) - 90
			const radius = this.menuIconRoundRadius
			const x = $gamePlayer.screenX() + radius * Math.cos(angle * (Math.PI / 180))
			const y = $gamePlayer.screenY() + radius * Math.sin(angle * (Math.PI / 180))
			if (TouchInput.x < x + this.iconWidth / 2 && x - this.iconWidth / 2 < TouchInput.x) {
				if (TouchInput.y < y && y - this.iconHeight < TouchInput.y) {
					if (this.turnIndex != 0) {
						this.preturnIndex = this.turnIndex;
					};
					if (ind == 0) {
						this.touchMoveScene = true;
						return;
					}
					if (this.chooseCharaMode) {
						this.followerIconArray[this.nowChoiceIndex].scale = this.nomalIconSize;
						this.followerIconArray[ind].scale = this.choosenIconSize;
					} else {
						this.iconSpriteArray[this.nowChoiceIndex].scale = this.nomalIconSize;
						this.iconSpriteArray[ind].scale = this.choosenIconSize;
					}
					this.nowChoiceIndex = ind;
					this.turnIndex = array.length - ind;
					this.touchRound = true;
					this.on_turn = [true, true];
				}
			}
		}.bind(this));
	}

	Scene_RingMenuChoice.prototype.toChooseCharaMode = function (num) {
		this.iconWidth = this.pw;
		this.iconHeight = this.ph;
		this.ringMenuCancel = true;
		this.openChooseRing = true;
		this.chooseCharaMode = true;
		this.preturnIndex = 0;
		this.turnIndex = 0;
		this.statusNeedScene = this.ringMeunArray[num][0]
		this.nowChoiceIndex = this.preChoiceIndex = 0;
	}

	//キャラクターアイコン操作＆アイコン回転
	Scene_RingMenuChoice.prototype.updateRoundCharaIcon = function () {
		if (this.updateCharaChooseRing) {
			if (this.on_turn[0]) {
				this.RoundIcon(this.on_turn[1], this.followerIconArray);
				return;
			}

			if (TouchInput.isTriggered()) {
				this.touchControll(this.followerIconArray);
			}

			if (Input.isRepeated('ok') || this.touchMoveScene) {
				this.updateCharaChooseRing = false;
				SoundManager.playOk();
				let num = this.followerIconArray.length - this.turnIndex
				if (num == this.followerIconArray.length) { num = 0 }
				$gameParty.setMenuActor($gameParty.allMembers()[num]);
				switch (this.statusNeedScene) {
					case "equip":
						SceneManager.goto(Scene_Equip);
						break;
					case "skill":
						SceneManager.goto(Scene_Skill);
						break;
					case "status":
						SceneManager.goto(Scene_Status);
						break;
				}
			}
			if (Input.isRepeated('right') && !this.ringMenuCancel && !this.startIconMenu) {
				this.preRingRoundPros(true, false);
				this.on_turn = [true, true];
			}
			if (Input.isRepeated('left') && !this.ringMenuCancel && !this.startIconMenu) {
				this.preRingRoundPros(false, false);
				this.on_turn = [true, false];
			}
		}
	}

	//アイコン回転共通処理
	Scene_RingMenuChoice.prototype.RoundIcon = function (is_right, array) {
		let skipIconNum = 1;
		let nowPositionNum;
		if (this.touchRound) {
			skipIconNum = this.turnIndex;
			nowPositionNum = this.preturnIndex;
		} else {
			nowPositionNum = this.turnIndex;
		}
		array.forEach(function (sprite, ind, arr) {
			let turnRadius = (360 / arr.length) * skipIconNum * (this.nowTurnCount / this.turnFrame);
			if (!is_right) { turnRadius = -turnRadius; }
			const angle = 360 * ((ind + nowPositionNum) / arr.length) - 90 + turnRadius;
			const radius = this.menuIconRoundRadius;
			sprite.x = radius * Math.cos(angle * (Math.PI / 180)) + $gamePlayer.screenX();
			sprite.y = radius * Math.sin(angle * (Math.PI / 180)) + $gamePlayer.screenY();
		}.bind(this));

		this.nowTurnCount++;

		if (this.nowTurnCount > this.turnFrame) {
			this.on_turn = [false, false];
			this.nowTurnCount = 0
			if (this.touchRound) {
				this.touchRound = false;
				this.touchMoveScene = true;
				this.waitcount = 20;
				const num = array.length - this.turnIndex - this.preturnIndex
				if (num < 0) { num = array.length + num }
				if (this.updateCharaChooseRing) {
					this._ring_nemu_text_window.redraw($gameParty.allMembers()[num].name());//$gameActors.actor(num+1).name()
				} else {
					this._ring_nemu_text_window.redraw(this.ringMeunArray[num][1]);
				}
				this.turnIndex = this.turnIndex + this.preturnIndex;
				if (this.turnIndex >= array.length) { this.turnIndex -= array.length }
				return
			}
			is_right ? this.turnIndex++ : this.turnIndex--;
			if (this.turnIndex == array.length) {
				this.turnIndex = 0;
			} else if (this.turnIndex < 0) {
				this.turnIndex = array.length - 1;
			}
			let num = array.length - this.turnIndex
			if (this.turnIndex == 0) { num = 0 }
			if (this.updateCharaChooseRing) {
				this._ring_nemu_text_window.redraw($gameParty.allMembers()[num].name());//$gameActors.actor(num+1).name()
			} else {
				this._ring_nemu_text_window.redraw(this.ringMeunArray[num][1]);
			}
		}
	}

	//メニューアイコンを閉じる
	Scene_RingMenuChoice.prototype.updateIconContraction = function () {
		if (this.isCanceled() && !this.ringMenuCancel && !this.startIconMenu) {
			SoundManager.playCancel();
			this.ringMenuCancel = true;
			if (!this.chooseCharaMode) {
				this._ring_nemu_text_window.close()
				this._goldWindow.close();
				this._optionalTextWindow.close();
			}
		}

		if (this.ringMenuCancel) {
			this._ring_nemu_text_window.fadeTextOn();
			this.updateContraction(this.iconSpriteArray);

			if (this.iconSpriteArray[0].opacity <= 0) {
				this.ringMenuCancel = false;
				this.iconSpriteArray.forEach(function (sprite) {
					sprite.x = $gamePlayer.screenX();
					sprite.y = $gamePlayer.screenY();
				});
				if (!this.chooseCharaMode) {
					SceneManager.push(Scene_Map)
				};
			}
		}
	}

	//キャラクター選択アイコンを閉じる
	Scene_RingMenuChoice.prototype.updateCharaIconContraction = function () {
		if (this.isCanceled() && !this.ringCharaMenuCancel && !this.openChooseRing && this.chooseCharaMode) {
			SoundManager.playCancel();
			this.ringCharaMenuCancel = true;
			this.iconSpriteArray[0].scale = this.choosenIconSize;
			this.followerIconArray[this.nowChoiceIndex].scale = this.nomalIconSize;
			this.nowChoiceIndex = this.preChoiceIndex = 0;
		}

		if (this.ringCharaMenuCancel) {
			this._ring_nemu_text_window.fadeTextOn();
			this.updateContraction(this.followerIconArray);

			if (this.followerIconArray[0].opacity <= 0) {
				this.iconWidth = this.iconSpriteArray[0].bitmap.width;
				this.iconHeight = this.iconSpriteArray[0].bitmap.height;
				this.ringCharaMenuCancel = false;
				this.updateCharaChooseRing = false;
				this.startIconMenu = true;
				this.chooseCharaMode = false;
				this.turnIndex = 0
			}
		}
	}

	//アイコンを閉じる共通処理
	Scene_RingMenuChoice.prototype.updateContraction = function (array) {
		array.forEach(function (sprite, ind, arr) {
			const angle = 360 * ((ind + this.turnIndex) / arr.length) - 90
			const radius = this.menuIconRoundRadius / this.menuStartFrame
			sprite.x -= radius * Math.cos(angle * (Math.PI / 180));
			sprite.y -= radius * Math.sin(angle * (Math.PI / 180));
			sprite.opacity -= 255 / this.menuStartFrame;
		}.bind(this));
	}

	//メニューアイコンを開く
	Scene_RingMenuChoice.prototype.updateIconExpansion = function () {
		if (this.startIconMenu) {
			this.IconExpansion(this.iconSpriteArray);
			if (this.iconSpriteArray[0].opacity >= 255) {
				this.startIconMenu = false
				if (typeof (this._ring_nemu_text_window) == 'undefined') {
					this._ring_nemu_text_window = new Window_RingMenuText($gamePlayer.screenX(), $gamePlayer.screenY() - this.menuIconRoundRadius);
					this.addChild(this._ring_nemu_text_window);
				}
				this._ring_nemu_text_window.redraw(this.ringMeunArray[0][1]);
				this._ring_nemu_text_window.fadeInTextOn();
			}
		}
	}

	//キャラ選択アイコンを開く
	Scene_RingMenuChoice.prototype.updateCharaIconExpansion = function () {
		if (this.openChooseRing) {
			this.IconExpansion(this.followerIconArray);
			if (this.followerIconArray[0].opacity >= 255) {
				this._ring_nemu_text_window.redraw($gameParty.allMembers()[0].name());
				this._ring_nemu_text_window.fadeInTextOn();
				this.openChooseRing = false;
				this.updateCharaChooseRing = true;
			}
		}
	}

	//アイコンを開く共通処理
	Scene_RingMenuChoice.prototype.IconExpansion = function (array) {
		array.forEach(function (sprite, ind, arr) {
			const angle = 360 * (ind / arr.length) - 90
			const radius = this.menuIconRoundRadius / this.menuStartFrame
			sprite.x += radius * Math.cos(angle * (Math.PI / 180));
			sprite.y += radius * Math.sin(angle * (Math.PI / 180));
			sprite.opacity += 255 / this.menuStartFrame;
		}.bind(this));
	}

	Scene_RingMenuChoice.prototype.terminate = function () {
		this.update();
		for (let i = 0, n = this.iconSpriteArray.length; i < n; i++) {
			const sprite = this.iconSpriteArray[i];
			this.removeChild(sprite);
		}
		for (let i = 0, n = this.followerIconArray.length; i < n; i++) {
			const sprite = this.followerIconArray[i];
			this.removeChild(sprite);
		}
		this.removeChild(this._backgroundSprite);
		this.removeChild(this.charaSampleSprite);
	}

	//-----------------------------------------------------------------------------
	// Scene_Formation_Menu
	//
	// The scene class of the menu screen.

	function Scene_Formation_Menu() {
		this.initialize.apply(this, arguments);
	}

	Scene_Formation_Menu.prototype = Object.create(Scene_Menu.prototype);
	Scene_Formation_Menu.prototype.constructor = Scene_Formation_Menu;

	Scene_Formation_Menu.prototype.initialize = function () {
		Scene_Menu.prototype.initialize.call(this);
	};
	Scene_Formation_Menu.prototype.createStatusWindow = function () {
		this._statusWindow = new Window_MenuStatus(50, 0);
		this._statusWindow.x = (Graphics.width - this._statusWindow.width) / 2
		this.addWindow(this._statusWindow);
	};

	Scene_Formation_Menu.prototype.commandFormation = function () {
		this._statusWindow.setFormationMode(true);
		this._statusWindow.selectLast();
		this._statusWindow.activate();
		this._statusWindow.setHandler('ok', this.onFormationOk.bind(this));
		this._statusWindow.setHandler('cancel', this.onFormationCancel.bind(this));
	};

	//-----------------------------------------------------------------------------
	// SceneManager
	//
	// The static class that manages scene transitions.

	SceneManager.snapForNoBlueBackground = function () {
		this._noblurbackgroundBitmap = this.snap();
	};

	SceneManager.noblurbackgroundBitmap = function () {
		return this._noblurbackgroundBitmap;
	};

	//-----------------------------------------------------------------------------
	// Scene_Menu
	//
	// The static class that manages scene transitions.

	Scene_Menu.prototype.onFormationCancel = function () {
		if (this._statusWindow.pendingIndex() >= 0) {
			this._statusWindow.setPendingIndex(-1);
			this._statusWindow.activate();
		} else {
			SceneManager.push(Scene_Map)
		}
	};

	Scene_Menu.prototype.create = function () {
		Scene_MenuBase.prototype.create.call(this);
		this.createStatusWindow();
		this.commandFormation();
	};

	Scene_Menu.prototype.commandFormation = function () {
		this._statusWindow.setFormationMode(true);
		this._statusWindow.selectLast();
		this._statusWindow.activate();
		this._statusWindow.setHandler('ok', this.onFormationOk.bind(this));
		this._statusWindow.setHandler('cancel', this.onFormationCancel.bind(this));
	};

	//-----------------------------------------------------------------------------
	// Window_RingMenuText
	//
	// The window class with ring menu.

	function Window_RingMenuText() {
		this.initialize.apply(this, arguments);
	}

	Window_RingMenuText.prototype = Object.create(Window_Base.prototype);
	Window_RingMenuText.prototype.constructor = Window_RingMenuText;

	Window_RingMenuText.prototype.initialize = function (x, y) {
		Window_Base.prototype.initialize.call(this, x - 5, y - iconTitleNameDistance, 130, 46);
		this.fade_text_on = false;
		this.fadein_text_on = true;
		this.openness = 255;
		this.opacity = 0;
		this.contentsOpacity = 0;
		this.contents.fontSize = 25
		this.x -= this.contentsWidth() / 2;
		this.drawText("アイテム", 0, 0, 120, "center");
		this.setBackgroundType(1)
	};

	Window_RingMenuText.prototype.standardPadding = function () {
		return 5;
	};

	Window_RingMenuText.prototype.update = function () {
		Window_Base.prototype.update.call(this);
		if (this.fade_text_on) {
			this.contentsOpacity -= 30;
			if (this.contentsOpacity <= 0) { this.fade_text_on = false; }
			return
		}
		if (this.fadein_text_on) {
			this.contentsOpacity += 30;
			if (this.contentsOpacity >= 255) { this.fadein_text_on = false }
		}
	}

	Window_RingMenuText.prototype.fadeTextOn = function () {
		this.fade_text_on = true;
	}

	Window_RingMenuText.prototype.fadeInTextOn = function () {
		this.fadein_text_on = true;
	}

	Window_RingMenuText.prototype.redraw = function (text) {
		this.contents.clear();
		this.drawText(text, 0, 0, 120, "center");
	};
})();