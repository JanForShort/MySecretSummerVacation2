
//=============================================================================
// CompressionNumberByHundred.js
// Copyright (c) 2022- 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc １０進数・１００進数コンバータプラグインです。
 * @author 村人Ａ
 *
 * @help
 * ＊このプラグインは冬空様専用に作られたプラグインです。
 * ＊その他の方の無断の使用を禁止します。
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * バージョン情報
 * 
 * 22/06/04 バージョン1.3　ギリシャ文字の位置の修正、最大文字数の際の動作の修正
 * 22/06/03 バージョン1.2　パスワード入力画面を追加
 * 22/05/08 バージョン1.1　百進数にする10進数の最大桁数を指定
 * 22/05/07 バージョン1.0　試作品リリース
 * 
 * _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
 * 
 * ========================================
 * 以下ヘルプ
 * ========================================
 * 
 * 22/06/03 追記
 * 
 * モデルのパスワード出力関係を実装しました。
 * 
 * モデルに使用している変数を100進数に変換し、テキストファイルに出力する場合
 * 
 * プラグインコマンド
 * 
 * パスワードをテキストファイルに出力 変数１ 変数２ 変数３…
 * 
 * と記述してください。
 * 変数はモデルに使用している変数のIDをそれぞれ半角数字で指定してください。
 * 
 * 例えば変数181,182,183,184をモデルの変数に使用している場合
 * 
 * パスワードをテキストファイルに出力 181 182 183 184
 * 
 * と記述します。
 * 
 * また、モデルのパスワードを打ち込む画面へ移動する場合
 * 
 * プラグインコマンド
 * 
 * 百進数パス入力画面へ スイッチ番号 変数１ 変数２ 変数３…
 * 
 * と記述します。
 * 変数は打ち込んだパスワードを十進数に変換し、指定の桁数ごとに代入する変数IDとなります。
 * スイッチはパスワードが入力されればON、キャンセルされればOFFとなります。
 * 
 * パスワード打ち込み画面の右下には「PASTE」ボタンがあります。
 * このボタンを押下すると別ウィンドウが出てきてペーストすることができます。
 * そのウィンドウでOKを押下すると画面にその文字が打ち込まれます。
 * 指定文字以外の文字を打ち込むとエラーが表示されます。
 * 
 * 
 * ===================================
 * 
 * 
 * 指定した変数をまとめてから百進数に変換し、指定した変数に代入します。
 * プラグインコマンドにて以下のように指定します。
 * 
 * 百進数変換 代入する変数ID 変換する変数のID1 変換する変数のID2 変換する変数のID3…
 * 
 * 例）ID4,5,6,7の変数を百進数に変換した文字列を代入するIDを3とする場合
 * 
 * 百進数変換 3 4 5 6 7
 * 
 * となります。
 * 変換する変数は任意の数指定できます。
 * 十進数に変換する際に同じ数だけ変数を指定する必要があることにご留意ください。
 * 
 * 百進数にした変数を十進数に変換するプラグインコマンドは以下のようになります。
 * 
 * 十進数変換 変換する変数ID 代入する変数のID1 代入する変数のID2 代入する変数のID3…
 * 
 * 例）変数4つ分の百進数が入っている変数3を変数4,5,6,7にそれぞれ代入する
 * 
 * 十進数変換 3 4 5 6 7
 * 
 * 変数にはjavascriptが取り扱える最大の桁数である１５桁以下にしてください。
 * 
 * 
 * 
 *
 * @param digit
 * @text 桁数
 * @desc 百進数に変換する十進数の最大桁数を指定します。
 * @default 2
 * @type Number
 *
 * @param passDigit
 * @text パスワード文字数
 * @desc 百進数パスワードの文字数を指定します。
 * @default 2
 * @type Number
 *
 * @param passChars
 * @text パスワード文字
 * @desc 百進数パスワードの文字種を指定します。
 * @default １２３４５６７８９ＡＢＣＤＥＦＧＨＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｌｋｍｎｐｑｒｓｔｕｖｗｘｙｚαβ₣δεζηθ∂λμ∏ξπ∑ςσ∞═φΩψ☆★●◎◇◆□■△▲▽▼∞＋−÷＝＃＆
 * @type String
 *
 * @param fontFace
 * @text パスワード入力画面フォント
 * @desc fonts/フォルダに配置した拡張子込みのファイル名または、フォント名(font-family名)を指定します。
 * @default GameFont
 * @type String
 *
 * @param okBtnStyle
 * @text OKボタン設定
 * @default {"text":"ok","textColor":"0","textBackground":"","textBorderColor":"","textBorderSize":"","image":"","imageX":"","imageY":""}
 * @type struct<BtnStyle>
 * @desc OKボタンの表示を変更します。画像が指定されていれば文字より画像が優先されます。
 *
 * @param pasteBtnStyle
 * @text ペーストボタン設定
 * @default {"text":"paste","textColor":"0","textBackground":"","textBorderColor":"","textBorderSize":"","image":"","imageX":"","imageY":""}
 * @type struct<BtnStyle>
 * @desc pasteボタンの表示を変更します。画像が指定されていれば文字より画像が優先されます。
 *
 * @param cancelBtnStyle
 * @text キャンセルボタン設定
 * @default {"text":"cancel","textColor":"0","textBackground":"","textBorderColor":"","textBorderSize":"","image":"","imageX":"","imageY":""}
 * @type struct<BtnStyle>
 * @desc キャンセルボタンの表示を変更します。画像が指定されていれば文字より画像が優先されます。
 */

/*~struct~BtnStyle:
 * @param text
 * @text ボタン文字列
 * @type string
 * @desc ボタンの文字列を指定します。
 *
 * @param textColor
 * @text ボタン文字色
 * @type number
 * @desc ボタン文字列の色を指定します。ツクールの色番号もしくは、テキストタブからHTMLカラーコードを指定できます。
 *
 * @param textBackground
 * @text 文字ボタン背景色
 * @type number
 * @desc ツクールの色番号もしくは、テキストタブからHTMLカラーコードを指定できます。空にすると透過します。
 *
 * @param textBorderColor
 * @text 文字ボタン枠色
 * @type number
 * @desc ツクールの色番号もしくは、テキストタブからHTMLカラーコードを指定できます。空にすると透過します。
 *
 * @param textBorderSize
 * @text 文字ボタン枠の太さ
 * @type number
 * @min 0
 * @max 3
 * @desc 文字ボタンの枠線の太さを指定します。0または空で枠線なしとなります。
 *
 * @param image
 * @text ボタン画像
 * @type file
 * @dir img/
 * @desc ボタン画像を指定します。
 *
 * @param imageX
 * @text ボタン画像X座標
 * @type number
 * @min 0
 * @desc 画面左上を原点としてボタン左上のX座標を指定します。
 *
 * @param imageY
 * @text ボタン画像Y座標
 * @type number
 * @min 0
 * @desc 画面左上を原点としてボタン左上のY座標を指定します。
 */

{
	'use strict'

	const param = PluginManager.parameters('CompressionNumberByHundred');
	const digit = Number(param.digit);
	const passDigit = Number(param.passDigit);

	const hundredCodes = param.passChars || "１２３４５６７８９ＡＢＣＤＥＦＧＨＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｌｋｍｎｐｑｒｓｔｕｖｗｘｙｚαβ₣δεζηθ∂λμ∏ξπ∑ςσ∞═φΩψ☆★●◎◇◆□■△▲▽▼∞＋−÷＝＃＆";
	const hundredCodesArray = hundredCodes.split("");

	const hundredToTen = (args, val) => {
		const hArr = Array.from(val);
		let resStr = String();
		for (const s of hArr) {
			resStr += String(hundredCodes.indexOf(s)).padZero(2);
		}
		const reg = new RegExp('.{' + digit + '}', 'g');
		const sepStr = resStr.match(reg);
		if (sepStr.length != args.length) { throw new Error("指定した代入する変数の数が合っていません。") }
		for (let i = 0, n = sepStr.length; i < n; i++) {
			$gameVariables.setValue(Number(args[i]), Number(sepStr[i]))
		}
	}

	const tenToHundred = (args) => {
		let joinStr = String();
		for (const id of args) {
			if (String($gameVariables.value(id)).length > 15) { throw new Error("javascriptでは15桁より多い桁は扱えません") }
			if (String($gameVariables.value(id)).length > digit) { throw new Error("変数" + id + "の桁数が" + digit + "桁より多くなっています") }
			joinStr += String($gameVariables.value(id)).padZero(digit)
		}
		const reg = new RegExp('.{' + digit + '}', 'g');
		const sepStr = joinStr.match(reg);
		let resultStr = String();
		for (const s of sepStr) {
			resultStr += hundredCodes.charAt(Number(s))
		}
		return resultStr;
	}

	const _alias_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_alias_Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === '百進数パス入力画面へ') {
			if (isNaN(Number(args[0]))) { throw new Error("プラグインコマンド「百進数パス入力画面へ」の引数が半角数字を入力してください。") }
			$gameTemp.tenNumberResultSwitchNumber = Number(args[0]);
			$gameTemp.tenNumberPasswordValId = args.slice(1).map(str => Number(str))
			SceneManager.push(Scene_InputHundredNumberPassword)
		}

		if (command === 'パスワードをテキストファイルに出力') {
			const fs = require('fs');
			const path = require('path');
			const base = path.dirname(process.mainModule.filename);
			const filePath = path.join(base, '');
			fs.writeFileSync(filePath + "\\modelPass.txt", tenToHundred(args));
			window.alert("ゲーム実行ファイルがあるフォルダにパスワードテキストファイル「modelPass.txt」を出力しました。");
		}

		if (command === '百進数変換') {
			const subId = Number(args.shift());
			$gameVariables.setValue(subId, tenToHundred(args))
		}

		if (command === '十進数変換') {
			const refId = Number(args.shift());
			hundredToTen(args, $gameVariables.value(refId))
		}
	}

	//-----------------------------------------------------------------------------
	// Scene_InputHundredNumberPassword
	//

	function Scene_InputHundredNumberPassword() {
		this.initialize.apply(this, arguments);
	}

	Scene_InputHundredNumberPassword.prototype = Object.create(Scene_Name.prototype);
	Scene_InputHundredNumberPassword.prototype.constructor = Scene_InputHundredNumberPassword;

	Scene_InputHundredNumberPassword.prototype.initialize = function () {
		Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_InputHundredNumberPassword.prototype.prepare = function () {
	};

	Scene_InputHundredNumberPassword.prototype.createEditWindow = function () {
		this._editWindow = new Window_InputHundredNumberEdit(this._actor, this._maxLength);
		this.addWindow(this._editWindow);
	};

	Scene_InputHundredNumberPassword.prototype.createInputWindow = function () {
		this._inputWindow = new Window_InputHundredNumber(this._editWindow);
		this._inputWindow.setHandler('ok', this.onInputOk.bind(this));
		this._inputWindow.setHandler('cancel', this.onInputCancel.bind(this));
		this.addWindow(this._inputWindow);
	};

	Scene_InputHundredNumberPassword.prototype.onInputOk = function () {
		$gameSwitches.setValue($gameTemp.tenNumberResultSwitchNumber, 1);
		hundredToTen($gameTemp.tenNumberPasswordValId, this._editWindow._name)
		SceneManager.pop();
	}

	Scene_InputHundredNumberPassword.prototype.onInputCancel = function () {
		$gameSwitches.setValue($gameTemp.tenNumberResultSwitchNumber, 0);
		SceneManager.pop();
	}

	//-----------------------------------------------------------------------------
	// Window_InputHundredNumberEdit
	//

	function Window_InputHundredNumberEdit() {
		this.initialize.apply(this, arguments);
	}

	Window_InputHundredNumberEdit.prototype = Object.create(Window_NameEdit.prototype);
	Window_InputHundredNumberEdit.prototype.constructor = Window_InputHundredNumberEdit;

	Window_InputHundredNumberEdit.prototype.initialize = function () {
		var width = this.windowWidth();
		var height = this.windowHeight();
		var x = (Graphics.boxWidth - width) / 2;
		var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this._maxLength = passDigit;
		this._index = 0;
		this._name = "";
		this._defaultName = "";
		this.deactivate();
		this.refresh();
	}

	Window_InputHundredNumberEdit.prototype.windowWidth = function () {
		return 720;
	};

	Window_InputHundredNumberEdit.prototype.maxCols = function () {
		return Math.floor(this.contentsWidth() / this.charWidth());
	}

	Window_InputHundredNumberEdit.prototype.itemRect = function (index) {
		const iniY = (this.contentsHeight() - this.lineHeight() * Math.ceil(this._maxLength / this.maxCols())) / 2;
		return {
			x: (index % this.maxCols()) * this.charWidth(),
			y: iniY + Math.floor(index / this.maxCols()) * this.lineHeight(),
			width: this.charWidth(),
			height: this.lineHeight()
		};
	};

	Window_InputHundredNumberEdit.prototype.drawChar = function (index) {
		var rect = this.itemRect(index);
		this.resetTextColor();
		this.drawText(this._name[index] || '', rect.x, rect.y, this.charWidth(), "center");
	};

	Window_InputHundredNumberEdit.prototype.paste = function () {
		user = window.prompt("パスワードをペーストしてください", "");
		if (user) {
			const splitStr = user.split("");
			if (splitStr.some(str => hundredCodesArray.indexOf(str) < 0)) {
				window.alert("パスワードで使用される文字を入力して下さい。");
				return
			}
			this._name = user;
			this._index = this._name.length;
			this.refresh();
		}
	}

	Window_InputHundredNumberEdit.prototype.refresh = function () {
		this.contents.clear();
		for (var i = 0; i < this._maxLength; i++) {
			this.drawUnderline(i);
		}
		for (var j = 0; j < this._name.length; j++) {
			this.drawChar(j);
		}
		var rect = this.itemRect(this._index);
		this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
	};

	//-----------------------------------------------------------------------------
	// Window_InputHundredNumber - BtnStyle
	//

	function Button_StringStyle() {
		this.initialize.apply(this, arguments);
	}

	Button_StringStyle.prototype.initialize = function (btnStyle) {
		this.text = btnStyle.text;
		this.textColor = btnStyle.textColor;
		this.background = btnStyle.textBackground;
		this.borderColor = btnStyle.textBorderColor;
		this.borderSize = Number(btnStyle.textBorderSize);
		this.colorCached = false;
	}

	Button_StringStyle.prototype.initializeColor = function (windowInputHundredNumber) {
		if (this.colorCached) {
			return;
		}
		if (!isNaN(this.textColor)) {
			this.textColor = windowInputHundredNumber.textColor(this.textColor);
		}
		if (typeof this.borderColor === "string" && this.borderColor.length > 0 && !isNaN(this.borderColor)) {
			this.borderColor = windowInputHundredNumber.textColor(this.borderColor || 0);
		}
		if (typeof this.background === "string" && this.background.length > 0 && !isNaN(this.background)) {
			this.background = windowInputHundredNumber.textColor(this.background || 0);
		}
		this.colorCached = true;
	}

	Button_StringStyle.prototype.itemRect = function (windowInputHundredNumber, index) {
		let maxCols = windowInputHundredNumber.maxCols();
		let lineHeight = windowInputHundredNumber.lineHeight();
		return {
			x: index % maxCols * 42 + Math.floor(index % maxCols / 5) * 24,
			y: Math.floor(index / maxCols) * lineHeight,
			width: 42,
			height: lineHeight
		};
	}

	Button_StringStyle.prototype.drawItem = function (windowInputHundredNumber, index, tableKey) {
		const rect = this.itemRect(windowInputHundredNumber, index);
		rect.x += 3;
		rect.width -= 6;
		this.initializeColor(windowInputHundredNumber);
		windowInputHundredNumber.changeTextColor(this.textColor);
		if (this.borderSize && this.borderColor) {
			windowInputHundredNumber.contents.fillRect(rect.x, rect.y, rect.width + this.borderSize, rect.height + this.borderSize, this.borderColor);
			if (this.background) {
				windowInputHundredNumber.contents.fillRect(rect.x + this.borderSize, rect.y + this.borderSize, rect.width - this.borderSize, rect.height - this.borderSize, this.background);
			} else {
				windowInputHundredNumber.contents.clearRect(rect.x + this.borderSize, rect.y + this.borderSize, rect.width - this.borderSize, rect.height - this.borderSize);
			}
		} else if (this.background) {
			windowInputHundredNumber.contents.fillRect(rect.x, rect.y, rect.width, rect.height, this.background);
		}
		windowInputHundredNumber.drawText(this.text || tableKey, rect.x, rect.y, rect.width, 'center');
	}

	function Button_ImageStyle() {
		this.initialize.apply(this, arguments);
	}

	Button_ImageStyle.prototype.initialize = function (btnStyle) {
		this.image = btnStyle.image;
		this.x = btnStyle.imageX;
		this.y = btnStyle.imageY;
		this.imageLoaded = false;
		this.bitmap = null;
	}

	Button_ImageStyle.prototype.initializeImage = function () {
		if (!this.imageLoaded) {
			const path = this.image.split("/", 2);
			this.bitmap = ImageManager.loadBitmap("img/" + path[0] + "/", path[1], null, true);
			this.imageLoaded = true;
		}
	}

	Button_ImageStyle.prototype.itemRect = function (windowInputHundredNumber, index) {
		this.initializeImage();
		return {
			x: this.x - windowInputHundredNumber.x,
			y: this.y - windowInputHundredNumber.y,
			width: this.bitmap.width,
			height: this.bitmap.height
		};
	}

	Button_ImageStyle.prototype.drawItem = function (windowInputHundredNumber, index) {
		const rect = this.itemRect(windowInputHundredNumber, index);
		this.bitmap.addLoadListener(() => {
			windowInputHundredNumber.contents.bltImage(this.bitmap, 0, 0, this.bitmap.width, this.bitmap.height, rect.x, rect.y, rect.width, rect.height);
		});
	}

	function createBtnStyle(paramStruct) {
		if (!paramStruct) {
			return normalButton;
		}
		const btnStyle = JSON.parse(paramStruct);
		if (btnStyle.image && btnStyle.image.includes("/")) {
			return new Button_ImageStyle(btnStyle);
		}
		return new Button_StringStyle(btnStyle);
	}

	const normalButton = new Button_StringStyle({ textColor: 0 })
	const okButtonStyle = createBtnStyle(param.okBtnStyle)
	const pasteBtnStyle = createBtnStyle(param.pasteBtnStyle)
	const cancelBtnStyle = createBtnStyle(param.cancelBtnStyle)

	function getBtnStyle(index, maxItems) {
		if (index < maxItems - 3) {
			return normalButton;
		}
		if (index === maxItems - 3) {
			return cancelBtnStyle;
		}
		if (index === maxItems - 2) {
			return pasteBtnStyle;
		}
		if (index === maxItems - 1) {
			return okButtonStyle;
		}
		return normalButton;
	}

	//-----------------------------------------------------------------------------
	// Window_InputHundredNumber
	//

	function Window_InputHundredNumber() {
		this.initialize.apply(this, arguments);
	}

	Window_InputHundredNumber.prototype = Object.create(Window_NameInput.prototype);
	Window_InputHundredNumber.prototype.constructor = Window_InputHundredNumber;

	Window_InputHundredNumber.prototype.initialize = function (editWindow) {
		const width = 720;
		const height = this.windowHeight();
		const x = (Graphics.width - width) / 2;
		const y = editWindow.y + editWindow.height + 8;
		Window_Selectable.prototype.initialize.call(this, x, y, width, height);
		this._editWindow = editWindow;
		this._index = 0;
		this._page = 0;
		this.refresh();
		this.updateCursor();
		this.activate();
	}

	Window_InputHundredNumber.prototype.table = function () {
		let keys = hundredCodesArray.concat();
		keys.push("cancel")
		keys.push("paste")
		keys.push("ok")
		return keys;
	};

	Window_InputHundredNumber.prototype.maxCols = function () {
		return 15;
	};

	Window_InputHundredNumber.prototype.maxItems = function () {
		return hundredCodes.length + 3;
	};

	Window_InputHundredNumber.prototype.character = function () {
		return this._index < this.maxItems() ? this.table()[this._index] : '';
	};

	Window_InputHundredNumber.prototype.isPageChange = function () {
		return false;
	};

	Window_InputHundredNumber.prototype.isCancel = function () {
		return this._index === this.maxItems() - 3;
	};

	Window_InputHundredNumber.prototype.isPaste = function () {
		return this._index === this.maxItems() - 2;
	};

	Window_InputHundredNumber.prototype.isOk = function () {
		return this._index === this.maxItems() - 1;
	};

	Window_InputHundredNumber.prototype.processOk = function () {
		if (this.isPaste()) {
			this.onPasteOk();
		} else if (this.isOk()) {
			this.onNameOk();
		} else if (this.isCancel()) {
			this.processBack();
		} else if (this.character()) {
			this.onNameAdd();
		}
	};

	Window_InputHundredNumber.prototype.onPasteOk = function () {
		this._editWindow.paste();
		SoundManager.playOk();
	};

	Window_InputHundredNumber.prototype.onNameOk = function () {
		if (this._editWindow.name().length == passDigit) {
			SoundManager.playOk();
			this.callOkHandler();
		} else {
			SoundManager.playBuzzer();
		}
	};

	Window_InputHundredNumber.prototype.onNameAdd = function () {
		if (this._editWindow.add(this.character())) {
			SoundManager.playOk();
		} else {
			SoundManager.playBuzzer();
		}
	};

	Window_InputHundredNumber.prototype.itemRect = function (index) {
		return getBtnStyle(index, this.maxItems()).itemRect(this, index);
	};

	Window_InputHundredNumber.prototype.refresh = function () {
		var table = this.table();
		this.contents.clear();
		this.resetTextColor();
		const maxItems = this.maxItems();
		for (var i = 0; i < maxItems; i++) {
			getBtnStyle(i, maxItems).drawItem(this, i, table[i]);
		}
	};

	Window_InputHundredNumber.prototype.cursorRight = function (wrap) {
		if (this._index > this.maxItems() - 2) { return }
		this._index++;
	};

	Window_InputHundredNumber.prototype.cursorLeft = function (wrap) {
		if (this._index == 0) { return }
		this._index--;
	};

	Window_InputHundredNumber.prototype.cursorDown = function (wrap) {
		const newIndex = (this._index + 15) % this.maxItems();
		if (this._index > newIndex) { return; }
		this._index = newIndex;
	};

	Window_InputHundredNumber.prototype.cursorUp = function (wrap) {
		const newIndex = (this._index - 15) % this.maxItems();
		if (this._index < newIndex || newIndex < 0) { return; }
		this._index = newIndex;
	};

	Window_InputHundredNumber.prototype.processJump = function () {
	}


	Window_InputHundredNumber.prototype.isCancelEnabled = function () {
		return true;
	};

	Window_InputHundredNumber.prototype.processBack = function () {
		SoundManager.playCancel();
		if (this._editWindow.back()) {
			return;
		}
		this.callHandler('cancel');
	}

	function fontLoad() {
		if (!param.fontFace || param.fontFace === "GameFont") {
			return;
		}
		if (param.fontFace.match("\\.[a-zA-Z]+$")) {
			Graphics.loadFont("CNBFont", "./fonts/" + param.fontFace);
			Window_InputHundredNumberEdit.prototype.standardFontFace =
				Window_InputHundredNumber.prototype.standardFontFace = function () {
					return "CNBFont";
				}
			return;
		}

		document.fonts.load("10px " + param.fontFace).then(() => {
			Window_InputHundredNumberEdit.prototype.standardFontFace =
				Window_InputHundredNumber.prototype.standardFontFace = function () {
					return param.fontFace;
				}
		});
	}

	fontLoad();
}