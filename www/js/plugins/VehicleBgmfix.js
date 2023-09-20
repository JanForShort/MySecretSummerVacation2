//=============================================================================
// VehicleBgmfix.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00 乗り物の厄介の仕様の改変。
 * @author まっつＵＰ
 * 
 * @param switch
 * @desc このIDのスイッチがオフの時
 * 乗り物から降りたときマップBGMを再生します。
 * @default 10
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * デフォルトでは乗り物に乗った時、直前のbgmが保存され
 * 降りるときにそのbgmが再生されます。
 * このプラグインでは特定のスイッチがオフの時
 * 保存のbgmに関係なくマップBGMを再生します。
 * 
 * このプラグインを利用する場合は
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
var parameters = PluginManager.parameters('Vehiclebgmfix');
var VBswitch = Number(parameters['switch'] || 10);

var _Game_System_replayWalkingBgm = Game_System.prototype.replayWalkingBgm;
Game_System.prototype.replayWalkingBgm = function() {
    if(!$gameSwitches.value(VBswitch)){
        $gameMap.autoplay();
        return;
    }
    _Game_System_replayWalkingBgm.call(this);
};
 
})();
