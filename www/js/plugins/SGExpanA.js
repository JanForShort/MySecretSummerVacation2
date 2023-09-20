//=============================================================================
// SGExpanA.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00 笑顔拡張パック(SceneGrow)
 * @author まっつＵＰ
 * 
 * @param comtext
 * @desc 表示するコマンド名。
 * @default HAPPY
 * 
 * @param display
 * @desc この値のIDのスイッチがオンのときコマンドを表示します。
 * @default 10
 * 
 * @param enabled
 * @desc この値のIDの変数が0を超えるときコマンドを有効にします。
 * @default 5
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * SceneGrowより下にこのプラグインを配置して両方をオンにしてください。
 * メニューコマンドにSceneGrowの機能を呼び出すコマンドをバインドします。
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
    var parameters = PluginManager.parameters('SGExpanA');
    var SGcomtext = String(parameters['comtext'] || 'HAPPY');
    var SGdisplay = Number(parameters['display'] || 10);
    var SGenabled = Number(parameters['enabled'] || 5);

    var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
    _Scene_Menu_createCommandWindow.call(this);
    this._commandWindow.setHandler('grow',   this.commandGrow.bind(this)); //追加
    };

    Scene_Menu.prototype.commandGrow = function() { //新規
    SceneManager.push(Scene_Growing); //SceneGrowで新規に作ったシーンに飛ばす。
    };

    var _Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
    Window_MenuCommand.prototype.addOriginalCommands = function() {
    _Window_MenuCommand_addOriginalCommands.call(this);
    if(this.isGrowDisplay()){ //条件により表示する。
     var enabled = this.isGrowEnabled(); //条件により有効状態を変更する。
     this.addCommand(SGcomtext, 'grow', enabled);
    }
    };

    Window_MenuCommand.prototype.isGrowDisplay = function() { //新規
    return $gameSwitches.value(SGdisplay) > 0; //つまりスイッチの真偽を返す。
    };

    Window_MenuCommand.prototype.isGrowEnabled = function() { //新規
    return $gameVariables.value(SGenabled) > 0　&& $gameParty.size() > 0;
    };
        
})();
