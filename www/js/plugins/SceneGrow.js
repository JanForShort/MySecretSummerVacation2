//=============================================================================
// SceneGrow.js
//=============================================================================

/*:ja
 * @plugindesc ver1.10 経験値で笑顔を・・・
 * @author まっつＵＰ
 * 
 * @param happytext
 * @desc 残高名称の文字列です。
 * @default 経験値残高:
 * 
 * @param happybox
 * @desc 利用可能な経験値を入れる変数のIDです。
 * @default 5
 * 
 * @param okname
 * @desc レベルアップ決定音のファイル名
 * @default Decision2
 * 
 * @param okvolume
 * @desc レベルアップ決定音のvolume
 * @default 90
 * 
 * @param okpitch
 * @desc レベルアップ決定音のpitch
 * @default 100
 * 
 * @param okpan
 * @desc レベルアップ決定音のpan
 * @default 0
 * 
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。  
 * 機能を使うためにはプラグインコマンドによる方法があります。
 * 
 * command:Growing
 * args:
 * (とりあえずGrowingのみ入れといてください。)
 * 
 * 隊員のそのアクターの次レベルまでの経験値を
 * 可能であればパラメータで設定した値のIDの変数から支払います。
 * 
 * ちなみにoknameには0を入れた場合は通常のSEのまま変わりません。
 * 
 * 下の用意されているウインドウにはこの機能によって
 * そのアクターが習得したスキルを表示します。一回につき最大三つまで表示できます。
 * 
 * ver1.10 習得スキルの表示および大幅なレイアウト変更
 * 
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

//他のプラグインで新規シーンを参照するため(function() {

var parameters = PluginManager.parameters('SceneGrow');
var SGhappytext = String(parameters['happytext'] || '経験値残高:');
var SGhappybox = Number(parameters['happybox'] || 5);
var SGokname = String(parameters['okname'] || 'Decision2');
var SGokvolume = Number(parameters['okvolume'] || 90);
var SGokpitch = Number(parameters['okpitch'] || 100);
var SGokpan = Number(parameters['okpan'] || 0);
var SGplayok = 0; //playok用
var orise = 0; //playok用
var SGlearn = [];

//Game    
var _Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'Growing') {
        SceneManager.push(Scene_Growing);
    }
};

var _Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function (skillId) { //レベルアップした時のスキル取得
    if (!this.isLearnedSkill(skillId)) { //このシーン以外でも処理自体はされるが無害のはず。
        SGlearn.push(skillId);
        //console.log(SGlearn)
    }
    _Game_Actor_learnSkill.call(this, skillId);
};

//Scene
function Scene_Growing() { //以下ほぼ新規
    this.initialize.call(this);
}

Scene_Growing.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Growing.prototype.constructor = Scene_Growing;

Scene_Growing.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.apply(this, arguments);
    if (SGokname != 0) SGplayok = { "name": SGokname, "pan": SGokpan, "pitch": SGokpitch, "volume": SGokvolume };
    orise = $dataSystem.sounds[1]; //playok用のse変更
};

Scene_Growing.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createtinyWindow(); //この順番を変えないでください。
    this.createlearnWindow();
    this.createActorWindow();
};

Scene_Growing.prototype.start = function () {
    Scene_MenuBase.prototype.start.call(this);
    //console.log(this._actor)
};

Scene_Growing.prototype.createtinyWindow = function () {
    this._tinyWindow = new Window_TinyGrow(0, 0); //Base
    this.addWindow(this._tinyWindow);
};

Scene_Growing.prototype.createlearnWindow = function () {
    this._learnWindow = new Window_LearnGrow(0, 0); //Base
    this.addWindow(this._learnWindow);
};

Scene_Growing.prototype.createActorWindow = function () {
    this._actorWindow = new Window_ActorGrow(0, 0, 0, 0); //Selectable
    this._actorWindow.y = this._tinyWindow.height;
    this._actorWindow.width = Graphics.boxWidth;
    this._actorWindow.height = Graphics.boxHeight - this._tinyWindow.height - this._learnWindow.height;
    this._actorWindow.setHandler('ok', this.onLevelOk.bind(this)); //有効状態ならばレベルアップ
    this._actorWindow.setHandler('cancel', this.onCanScene.bind(this)); //キャンセルすれば即終了
    this.addWindow(this._actorWindow);
    this._actorWindow.refresh();
    this._actorWindow.select(0); //描画およびカーソルのセット
};

Scene_Growing.prototype.onLevelOk = function () { //シーン側でほとんどの操作を行う。
    //console.log($dataSystem.sounds[1])
    this.calc();
    this._tinyWindow.refresh();
    this._actorWindow.refresh();
    this._actorWindow.activate(); //これがないとなぜか動かない。
};

Scene_Growing.prototype.onCanScene = function () { //seの原状復帰
    SGplayok = 0;
    $dataSystem.sounds[1] = orise;
    this.popScene();
};

Scene_Growing.prototype.calc = function () { //本処理
    var i = this._actorWindow._index;
    var actor = $gameParty.members()[i]; //指名アクター
    var j = $gameVariables.value(SGhappybox) - actor.nextRequiredExp(); //pay expense
    var exp = actor.currentExp() + actor.nextRequiredExp(); //処理後の現在経験値
    $gameVariables.setValue(SGhappybox, j); //残高を代入
    SGlearn = [];
    actor.changeExp(exp, false) //そのアクターの経験値書き換え
    if (SGlearn.length > 0) { //習得スキルの有無の確認
        this._learnWindow.refresh(actor); //actorの引数が必要なのでこちらに置く。
    }
};

//Window

var _Window_Selectable_playOkSound = Window_Selectable.prototype.playOkSound;
Window_Selectable.prototype.playOkSound = function () { //SE発生の直前にSEの差し替え
    if (SGplayok != 0) $dataSystem.sounds[1] = SGplayok;
    _Window_Selectable_playOkSound.call(this);
};

function Window_TinyGrow() { //以下ほぼ新規
    this.initialize.apply(this, arguments);
}

Window_TinyGrow.prototype = Object.create(Window_Base.prototype);
Window_TinyGrow.prototype.constructor = Window_TinyGrow;

Window_TinyGrow.prototype.initialize = function (x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = Graphics.boxWidth / 2 - width; //少し左に寄せる。
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_TinyGrow.prototype.windowWidth = function () {
    return 280;
};

Window_TinyGrow.prototype.windowHeight = function () {
    return this.fittingHeight(2); //２行
};

Window_TinyGrow.prototype.refresh = function () {
    var x = this.textPadding();
    var width = this.windowWidth();
    this.contents.clear();
    this.changeTextColor(this.systemColor());
    this.drawText(SGhappytext, x, 0, width); //残高名称
    this.resetTextColor();
    this.drawText(this.value(), x, 36, 220, 'right'); //変数の値
};

Window_TinyGrow.prototype.value = function () {
    return $gameVariables.value(SGhappybox);
};

Window_TinyGrow.prototype.open = function () {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

function Window_LearnGrow() { //以下ほぼ新規
    this.initialize.apply(this, arguments);
}

Window_LearnGrow.prototype = Object.create(Window_Base.prototype);
Window_LearnGrow.prototype.constructor = Window_LearnGrow;

Window_LearnGrow.prototype.initialize = function (x, y) {
    var x = 0;
    var y = Graphics.boxHeight - this.windowHeight(); //下から湧いてくる感じ
    var width = Graphics.boxWidth;
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.contents.clear();
    this.open();
};

Window_LearnGrow.prototype.windowHeight = function () {
    return this.fittingHeight(4); //４行
};

Window_LearnGrow.prototype.refresh = function (actor) { //引数が必要。
    this.contents.clear();
    var x = this.textPadding();
    var y = 0;
    this.changeTextColor(this.systemColor());
    this.drawText(actor._name + 'は', x, y);
    this.resetTextColor();
    for (var i = 0; i < SGlearn.length; ++i) {
        if (i >= 3) break; //表示できるスキル数には限りがあると知っているはずだ。
        y += this.lineHeight(); //for文の前の処理の関係で先に加算をする。
        var disskill = $dataSkills[SGlearn[i]]; //スキルを取得
        var disskill2 = '\\i[' + disskill.iconIndex + ']' + disskill.name;
        var text = TextManager.obtainSkill.format(disskill2);
        this.drawTextEx(text, x, y);
    }
};

function Window_ActorGrow() { //以下ほぼ新規
    this.initialize.apply(this, arguments);
}

Window_ActorGrow.prototype = Object.create(Window_Selectable.prototype);
Window_ActorGrow.prototype.constructor = Window_ActorGrow;

Window_ActorGrow.prototype.initialize = function (x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    //位置調整は新しく作った時にしてある。
    //this.refresh();
    this.activate();
};

Window_ActorGrow.prototype.maxItems = function () {
    return $gameParty.size();
};

Window_ActorGrow.prototype.itemHeight = function () {
    return Math.floor(this.height / 7); //Characterを十分に描画するための高さ設定
};

Window_ActorGrow.prototype.isCurrentItemEnabled = function () {
    return this.isEnabled(this._list[this._index]); //indexのactorを取得
};

Window_ActorGrow.prototype.isEnabled = function (actor) { //選択の可否
    return actor.isAlive() && actor.nextRequiredExp() < $gameVariables.value(SGhappybox) && !actor.isMaxLevel();
};

Window_ActorGrow.prototype.drawItem = function (index) {
    //各引数のxを弄る方は頑張って調整してください。
    var rect = this.itemRect(index);
    var actor = this._list[index];
    //console.log(actor.nextRequiredExp())
    this.changePaintOpacity(this.isEnabled(actor)); //真偽値によってこの透明度を変更
    this.drawActorCharacter(actor, rect.x + 48, rect.y + 48);
    this.drawActorName(actor, rect.x + 120, rect.y);
    this.drawActorLevel(actor, rect.x + 330, rect.y);
    this.drawText('EX ' + actor.nextRequiredExp(), rect.x + 400, rect.y, 220, 'right');
    this.changePaintOpacity(1);
};

Window_ActorGrow.prototype.refresh = function () {
    var i, actor;
    this._list = [];
    for (i = 0; i < $gameParty.size(); i++) {
        actor = $gameParty.members()[i]
        this._list.push(actor); //隊員一覧
    }
    //console.log(this._list)
    this.createContents();
    this.drawAllItems(); //このウインドウの本処理
};

//以上 })();
