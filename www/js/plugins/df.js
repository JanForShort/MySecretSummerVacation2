//=============================================================================
// df.js
//=============================================================================

/*:
 * @plugindesc Complete protection
 * @author karakasr_dool
 *
 * @param NO_GUARD
 * @desc Eliminate the defense command
 * @default false
 *
 * @param PROBABILITY
 * @desc Probability of complete protection (0~100)
 * @default 25
 * 
 * @help 
 *
 *
 */

/*:ja
 * @plugindesc 完全防御
 * @author karakasr_dool
 *
 * @param NO_GUARD
 * @desc 防御など不要!!
 * @default false
 * 
 *
 * @param PROBABILITY
 * @desc 完全防御の確率 (0~100)
 * @default 25
 * @help 
 *

 */

(function () {
	var parameters = PluginManager.parameters('df');
	var flag = parameters['NO_GUARD'] === "true";
	var n = parseInt(parameters['PROBABILITY'] || 25);

	if (flag) {
		Window_ActorCommand.prototype.addGuardCommand = function () {
			//this.addCommand(TextManager.guard, 'guard', this._actor.canGuard());
		};
	}


	Game_Action.prototype.applyGuard = function (damage, target) {
		var flag = target.isGuard();
		if (flag) {
			var rand = Math.floor(Math.random() * 100);
			if (rand < n) {
				return 0;
			}
		}
		return damage / (damage > 0 && flag ? 2 * target.grd : 1);
	};

})();

