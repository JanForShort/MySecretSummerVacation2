//=============================================================================
// BestFriend.js
//=============================================================================

/*:ja
 * @plugindesc ver1.01 隊員の未来に・・・笑顔を・・・
 * @author まっつＵＰ
 * 
 * @param selectA
 * @desc このIDの変数を利用します。要ヘルプ参照。
 * @default 10
 * 
 * @param selectB
 * @desc このIDの変数を利用します。要ヘルプ参照。
 * @default 11
 * 
 * @param comtextA
 * @desc 表示するコマンド名1。
 * @default Swap
 * 
 * @param comtextB
 * @desc 表示するコマンド名2。
 * @default Call
 * 
 * @param comtextC
 * @desc 表示するコマンド名3。
 * @default Back
 * 
 * @param comtextD
 * @desc 表示するコマンド名4。
 * @default Keep
 * 
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * 並び替えのためにメニューシーンに新たなウインドウおよびコマンドを加えます。
 * 
 * このウインドウはメニューコマンドの「並び替え」を選択すると表示されます。
 * メニューコマンドの「並び替え」の表示条件は変更しておりません。
 * 
 * このウインドウではパラメータや変数の状態によって以下のコマンドが表示・選択できます。
 * また、コマンドの名前はパラメータのcomtextA～Dで変更できます。
 * 
 * Swap・・・本来メニューコマンドで選択できる隊員の並び替えです。
 * 表示・選択効果ともに基本的に常時有効。
 * Call・・・登録した隊員を呼び出します。
 * 「selectA」が0以外のときに表示、選択効果常時有効。
 * Back・・・変数の配列に従って隊員を呼び出します。
 * 「selectB」が0以外のときに表示、選択効果はこのIDの変数が0以外の時有効。
 * Keep・・・「selectA」のIDの変数に現在の隊員を登録します。
 * コマンド「Call」と同じ条件。
 * 
 * パラメータ「selectA」「selectB」について
 * 「selectA」はプレイヤーが変更することのできる配列です。
 * 「selectB」はプレイヤーからは変更できない配列です。
 * 
 * 「selectA」のIDの変数が0の時、このウインドウが開かれた時に
 * 仮登録としてコマンド「Keep」の処理を実行します。
 * 
 * この二つのパラメータに要素数が1以下の配列が入っていると
 * 不自然な挙動を起こす可能性があるので注意してください。
 * 
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 * 
 * ver1.01 配列が書き換えられるのを阻止する処理を追加。
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
    var parameters = PluginManager.parameters('BestFriend');
    var BFselectA = Number(parameters['selectA'] || 10);
    var BFselectB = Number(parameters['selectB'] || 11);
    var BFcomtextA = String(parameters['comtextA'] || 'Swap');
    var BFcomtextB = String(parameters['comtextB'] || 'Call');
    var BFcomtextC = String(parameters['comtextC'] || 'Back');
    var BFcomtextD = String(parameters['comtextD'] || 'Keep');

//Scene    
    var _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
    _Scene_Menu_create.call(this);
    this.createBestFriendWindow(); //新たに専用のウインドウを加える。(command)
    };

    Scene_Menu.prototype.createBestFriendWindow = function() { //新規
    var y = this._commandWindow.height; //メニューコマンドの下
    this._bestfriendWindow = new Window_BestFriend(0, y);
    this._bestfriendWindow.setHandler('formA', this.commandSwap.bind(this));
    this._bestfriendWindow.setHandler('formB', this.commandCall.bind(this));
    this._bestfriendWindow.setHandler('formC', this.commandBack.bind(this));
    this._bestfriendWindow.setHandler('formD', this.commandKeep.bind(this));
    this._bestfriendWindow.setHandler('cancel', this.onBestFriendcancel.bind(this));
    this.addWindow(this._bestfriendWindow);
    };
    
    Scene_Menu.prototype.commandFormation = function() { //大幅に改変
    this._commandWindow.deactivate();
    this.BestFriendfirst(); //仮登録
    this._bestfriendWindow.show();
    this._bestfriendWindow.activate();
    this._bestfriendWindow.select(0);
    };

    Scene_Menu.prototype.commandSwap = function() { //新規、commandFormationの処理
    this._statusWindow.setFormationMode(true);
    this._statusWindow.selectLast();
    this._statusWindow.activate();
    this._statusWindow.setHandler('ok',     this.onFormationOk.bind(this));
    this._statusWindow.setHandler('cancel', this.onFormationCancel.bind(this));
    };

    Scene_Menu.prototype.commandCall = function() { //新規
    //console.log($gameParty._actors)
    //console.log($gameVariables.value(BFselectA))
    $gameParty._actors = $gameVariables.value(BFselectA);
    var cl = $gameParty._actors.clone();
    $gameVariables.setValue(BFselectA,cl); //動的にしないためにローカル変数を代入
    this.callandback();
    };

    Scene_Menu.prototype.commandBack = function() { //新規
    $gameParty._actors = $gameVariables.value(BFselectB);
    var cl = $gameParty._actors.clone();
    $gameVariables.setValue(BFselectB,cl); //動的にしないためにローカル変数を代入
    this.callandback();
    };

    Scene_Menu.prototype.commandKeep = function() { //新規
    //console.log($gameParty._actors)
    var cl = $gameParty._actors.clone();
    $gameVariables.setValue(BFselectA,cl); //動的にしないためにローカル変数を代入
    this._bestfriendWindow.activate();
    };

    Scene_Menu.prototype.BestFriendfirst = function() { //新規
    //初実行の際に必ず仮登録をする。
    if(BFselectA != 0 && $gameVariables.value(BFselectA) == 0) this.commandKeep();
    };

    Scene_Menu.prototype.callandback = function() { //新規
    $gamePlayer.refresh(); //隊員を変えたときの処理
    $gameMap.requestRefresh();
    this._statusWindow.refresh();
    this._bestfriendWindow.activate();
    };

    Scene_Menu.prototype.onFormationCancel = function() {
    if (this._statusWindow.pendingIndex() >= 0) {
        this._statusWindow.setPendingIndex(-1);
        this._statusWindow.activate();
    } else {
        this._statusWindow.deselect();
        this._bestfriendWindow.activate(); //追加
        //this._commandWindow.activate();
    }
    };

    Scene_Menu.prototype.onBestFriendcancel = function() { //新規
    this._bestfriendWindow.hide();
    this._bestfriendWindow.deactivate();
    this._commandWindow.activate();
    };

//Window
    function Window_BestFriend() { //以下新規のウインドウとその処理
    this.initialize.apply(this, arguments);
    }

    Window_BestFriend.prototype = Object.create(Window_Command.prototype);
    Window_BestFriend.prototype.constructor = Window_BestFriend;

    Window_BestFriend.prototype.initialize = function(x, y) {
    Window_Command.prototype.initialize.call(this, x, y);
    this.hide();
    };

    Window_BestFriend.prototype.windowWidth = function() {
    return 240; //メニューコマンドと同様
    };

    Window_BestFriend.prototype.numVisibleRows = function() {
    return this.maxItems(); //表示しない分は列を詰める
    };

    Window_BestFriend.prototype.makeCommandList = function() {
    this.addformdefCommand();
    this.addfriendCommand();
    this.addselectfriendCommand();
    this.addbookkeepCommand();
    };

    Window_BestFriend.prototype.addformdefCommand = function() {
    var enabled = this.isformdefEnabled();
    this.addCommand(BFcomtextA, 'formA', enabled); //本来の並び替えの処理
    };

    Window_BestFriend.prototype.addfriendCommand = function() {
    if(BFselectA != 0){
     var enabled = this.isfriendEnabled();
     this.addCommand(BFcomtextB, 'formB', enabled);
    }
    };

    Window_BestFriend.prototype.addselectfriendCommand = function() {
    if(BFselectB != 0){
     var enabled = this.isselectfriendEnabled();
     this.addCommand(BFcomtextC, 'formC', enabled);
    }
    };

    Window_BestFriend.prototype.addbookkeepCommand = function() {
    if(BFselectA != 0){
     var enabled = this.isfriendEnabled(); //条件はaddfriendCommandと同様
     this.addCommand(BFcomtextD, 'formD', enabled);
    }
    }; 

    Window_BestFriend.prototype.isformdefEnabled = function() {
    //この条件を設定しないとステータスウインドウが不自然なアクティブを起こすことがある。
    return $gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
    };

    Window_BestFriend.prototype.isfriendEnabled = function() {
    return true;
    };

    Window_BestFriend.prototype.isselectfriendEnabled = function() {
    return $gameVariables.value(BFselectB) != 0;
    };
      
})();
