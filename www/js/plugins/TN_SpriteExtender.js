//=============================================================================
// TN_SpriteExtender.js
//=============================================================================
//v1.04 New function: The body rate can be manually changed if it is named like "filename_x###.png" (#:number)
//v1.03a Fix a bug: When an extended event changed to non-extended one by event page refresh, it was not shown correctly.
//v1.02a Fix a bug: The lowerbody of the non-extended sprites are not transparent when they are on bush.
//v1.01 Resolve the plugin confliction with the color tone function of CharacterGraphicExtend.js
//v1.00 Released
/*:
 * @plugindesc 【有償ライセンス】任意の比率で歩行グラフィックの胴体を引き伸ばし、頭身を上げます。
 * @author terunon / AA series
 * @version 1.04
 * @target MZ
 * @url https://terunon.booth.pm/
 *
 * @param 胴体の引き伸ばし率
 * @desc 1でデフォルトと同じ頭身になります。高いほど頭身が上がります。
 * @default 1.42
 * 
 * @param 頭の範囲
 * @desc 歩行グラフィック上端を0とし、ここに指定した値までは引き伸ばしを行いません。
 * @default 14
 *
 * @param 除外ファイル（部分一致）
 * @desc 画像ファイル名に特定の文字列が含まれる場合、頭身引き伸ばしを行いません。【スペース無しのカンマ区切りで複数指定可】
 * @default !,Damage
 *
 * @param 除外ファイル（完全一致）
 * @desc ここに記載された画像ファイルは、頭身引き伸ばしを行いません。【スペース無しのカンマ区切りで複数指定可】
 * @default Nature,Monster,Vehicle
 *
 * @param 茂みタイルの高さを統一
 * @desc 茂み属性タイルに入った時、頭身を上げていないキャラも上げたキャラと同じ高さだけ身体が隠れるようにします。
 * @type boolean
 * @on 統一する
 * @off 統一しない
 * @default true
 *
 * @help
 * 頭身をお好きな比率に調節することができます。
 * 微妙な数値変更で、胴体のどのドットが引き伸ばされるか変わるため
 * 引き伸ばし方が気に入らない場合は、0.1～0.01単位で各値を調節してみてください。
 * 数値によっては、ホコグラの上端に別のホコグラ由来の線が見えることがありますが、
 * 0.01ほど数値を調整すれば消失します。
 *
 * v1.04新機能: 引き伸ばし比率の個別設定
 * イベント画像（characterフォルダ）のファイル名を 「ファイル名_x小数点を省いた比率.png」 にすると、
 * そのキャラクターのみ、プラグインパラメータの設定値ではなくファイル名で指定した比率で引き伸ばしを行います。
 *  （例: AbsentedAge_x120.png → 比率1.20、 Karen_x080 または Karen_x80 → 比率0.80）
 * 
 * 再定義を含むため、プラグインリストの上の方への適用が望ましいです。
 * -----------------------------------------------------------
 * 【！】 有償ライセンスプラグイン
 * 本プラグインは、ライセンス付与者様名簿
 * （https://ch.nicovideo.jp/terunon/blomaga/ar1083931）に作者名（サークル名）を
 * 記載された方が、公開ゲームへ組み込んでご使用いただけます。
 *
 * BOOTHから有償ライセンス付き本プラグインをご購入できます。
 * 購入後、通常1～2日、最長5日以内に
 * BOOTHのメッセージ機能でお名前をお伺いし、ライセンス名簿に追加いたします。
 * 詳細は上記ライセンスページをご覧ください。
 * 
 * This plugin can be used only by the users who have added the license roster below:
 *   https://ch.nicovideo.jp/terunon/blomaga/ar1083931
 *
 * When you buy this plugin, the license register form
 * will be post to your BOOTH account.
 *
 * [!] If you find a product without registering the license roster,
 * please report to me or the owner of the website.
 */

(function(){var parameters=PluginManager.parameters("TN_SpriteExtender");var bodyRate=Number(parameters["\u80f4\u4f53\u306e\u5f15\u304d\u4f38\u3070\u3057\u7387"]);var bodyMargin=Number(parameters["\u982d\u306e\u7bc4\u56f2"]);var disableKeys=String(parameters["\u9664\u5916\u30d5\u30a1\u30a4\u30eb\uff08\u90e8\u5206\u4e00\u81f4\uff09"]).split(",");var disableFiles=String(parameters["\u9664\u5916\u30d5\u30a1\u30a4\u30eb\uff08\u5b8c\u5168\u4e00\u81f4\uff09"]).split(",");var disableKeysL=disableKeys.length;
var disableFilesL=disableFiles.length;var bushHeight=parameters["\u8302\u307f\u30bf\u30a4\u30eb\u306e\u9ad8\u3055\u3092\u7d71\u4e00"]==="true";Sprite_Character.prototype.updateBitmap=function(){if(this.isImageChanged()){this._tilesetId=$gameMap.tilesetId();this._tileId=this._character.tileId();this._characterName=this._character.characterName();this._characterIndex=this._character.characterIndex();this._isSeperated=this.isSeperated();this._bodyRate=this.bodyRate()||bodyRate;this.removeChild(this._upperBody);
this.removeChild(this._lowerBody);this._upperBody=null;this._lowerBody=null;if(this._tileId>0)this.setTileBitmap();else this.setCharacterBitmap()}};var TN_dn=172;Sprite_Character.prototype.isSeperated=function(){for(var i=0;i<disableKeysL;i++)if(this._characterName.contains(disableKeys[i]))return false;for(var i$0=0;i$0<disableFilesL;i$0++)if(this._characterName===disableFiles[i$0])return false;return true};Sprite_Character.prototype.bodyRate=function(){var seeds=this._characterName.split("_x");var seed=
seeds[seeds.length-1];if(!seed)return bodyRate;return+seed/100};Sprite_Character.prototype.updateCharacterFrameDef=Sprite_Character.prototype.updateCharacterFrame;Sprite_Character.prototype.updateCharacterFrameSep=function(){var pw=this.patternWidth();var ph=this.patternHeight();var sx=(this.characterBlockX()+this.characterPatternX())*pw;var sy=(this.characterBlockY()+this.characterPatternY())*ph;this.createHalfBodySprites();if(this._bushDepth>0)this._lowerBody.opacity=128;else this._lowerBody.opacity=
255;this._upperBody.bitmap=this.bitmap;this._upperBody.visible=true;this._lowerBody.bitmap=this.bitmap;this._lowerBody.visible=true;this._upperBody.y=-bodyMargin*this._bodyRate;this._lowerBody.scale.y=this._bodyRate;this._upperBody.setFrame(sx,sy,pw,ph-bodyMargin);this._lowerBody.setFrame(sx,sy+ph-bodyMargin,pw,bodyMargin);this.setFrame(sx,sy,0,ph);var tone=this._character._tone;if(tone){this._upperBody.setColorTone(tone);this._lowerBody.setColorTone(tone)}};Sprite_Character.prototype.updateCharacterFrame=
function(){if(this.isSeperated())this.updateCharacterFrameSep();else this.updateCharacterFrameDef()};if(bushHeight)Sprite_Character.prototype.updateCharacterFrameDef=function(){var pw=this.patternWidth();var ph=this.patternHeight();var sx=(this.characterBlockX()+this.characterPatternX())*pw;var sy=(this.characterBlockY()+this.characterPatternY())*ph;this.createHalfBodySprites();if(this._bushDepth>0)this._lowerBody.opacity=128;else this._lowerBody.opacity=255;this._upperBody.bitmap=this.bitmap;this._upperBody.visible=
true;this._lowerBody.bitmap=this.bitmap;this._lowerBody.visible=true;this._upperBody.y=-bodyMargin*this._bodyRate;this._upperBody.setFrame(sx,sy,pw,ph-bodyMargin*this._bodyRate);this._lowerBody.setFrame(sx,sy+ph-bodyMargin*this._bodyRate,pw,bodyMargin*this._bodyRate);this.setFrame(sx,sy,pw,ph);var tone=this._character._tone;if(tone){this._upperBody.setColorTone(tone);this._lowerBody.setColorTone(tone)}}})();