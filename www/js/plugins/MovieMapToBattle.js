//=============================================================================
// MovieMapToBattle.js
//=============================================================================

/*:
 * @plugindesc フィールドとか戦闘で動画が複数使えるようになるよ
 * (なぜか .webm しか認識しない) あとweb版だとなぜか動かないね…
 * @author １１１
 *
 *
 * @help プラグインコマンドはありません。
 *
 * フィールドならプラグインコマンドから 
 * MovieMap イベントID ファイル名
 * MovieMap 1 ./movies/testVideo.webm
 * って感じで。
 *
 * 戦闘中はスキルのnote欄で 
 * [x,y] ファイル名
 * <movie:[0,100] ./movies/bigbun.webm>
 * みたいに書く。
 */
(function () {
    PIXI.VideoTexture.fromUrl = function (videoSrc, scaleMode) {
        var video = document.createElement('video');
        video.src = videoSrc;
        video.autoPlay = true;
        video.play();
        var obj = PIXI.VideoTexture.textureFromVideo(video, scaleMode);
        obj.video = video;
        return obj;
    };

    //=============================================================================
    // Game_Interpreter - register plugin commands
    //=============================================================================
    var _Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args)
        // フィールド用
        if (command === 'MovieMap') {
            var sprite = new Sprite_Movie(args[1]); // ファイル名
            sprite.charSet(args[0]) // event_id
            SceneManager._scene.addChild(sprite);
        }
    };
    //
    var battleNoteFunc = function (text) {
        var args = text.split(" ");
        var sprite = new Sprite_Movie(args[1]);
        if (args[0].match(/\[.+?\]/)) {
            var ary = eval(args[0]);
            if (Array.isArray(ary)) {
                var x = ary[0];
                var y = ary[1];
            } else {
                throw new Error('noteの記述がおかしい');
            }
        }
        sprite.move(x, y);
        SceneManager._scene.addChild(sprite);
    }

    var _Game_Battler_useItem =
        Game_Battler.prototype.useItem;
    Game_Battler.prototype.useItem = function (item) {
        if (item.meta.movie) battleNoteFunc(item.meta.movie);
        _Game_Battler_useItem.call(this, item);
    };

    // ToDo
    // item.Scope 2,4,5,6,8,10は全体対象なので中央にでも、1,3,7,9,11は個別なので
    // その対象(targets)の座標とか…
    // 
    /*
        var _BattleManager_startAction = BattleManager.startAction;    
        BattleManager.startAction = function() {
            _BattleManager_startAction.call(this);
            var subject = this._subject;
            var action = subject.currentAction();
            var targets = action.makeTargets();
            var item = action.item();
            if(item.meta.movie)
                subject.useItem(item , targets);
        };
    */
    //
    function Sprite_Movie() {
        this.initialize.apply(this, arguments);
    }
    Sprite_Movie.prototype = Object.create(Sprite.prototype);
    Sprite_Movie.prototype.constructor = Sprite_Movie;
    Sprite_Movie.prototype.initialize = function (f_name) {
        var texture = PIXI.VideoTexture.fromUrl(f_name, 1); //
        PIXI.Sprite.call(this, texture);
        // 読み込み終わってからでないと画像の大きさ分からない
        texture.video.addEventListener("loadedmetadata", (function () {
            var width = this._video.videoWidth;
            var height = this._video.videoHeight;
            this._frame = new Rectangle(0, 0, width, height);
            this._realFrame = new Rectangle(0, 0, width, height);
            this._refresh();
        }).bind(this), false);
        //
        this._video = texture.video;
        // this._video.playbackRate = 3.0;
        this._bitmap = ""; //
        this._frame = new Rectangle(0, 0, 1, 1); // 
        this._realFrame = new Rectangle(0, 0, 1, 1); //
        this._offset = new Point();
        this._blendColor = [0, 0, 0, 0];
        this._colorTone = [0, 0, 0, 0];
        this._canvas = null;
        this._context = null;
        this._tintTexture = null;
        this.spriteId = Sprite._counter++;
        this.opaque = false;
        this.loop = false; //
    };
    Sprite_Movie.prototype.stop = function () {
        this._video.pause();
    }
    Sprite_Movie.prototype.play = function () {
        this._video.play();
    }
    Sprite_Movie.prototype.isEnd = function () {
        return this._video.ended;
    }
    Sprite_Movie.prototype.charSet = function (char_id) {
        var event = $gameMap.event(char_id);
        var that = this;
        var _onUpdate = this.onUpdate;
        this.onUpdate = function () { // 既存のfunctionに追加
            _onUpdate();
            that.move(event.screenX() - that.width / 2,
                event.screenY() - that.height / 2);
        }
    }
    Sprite_Movie.prototype.onUpdate = function () { }
    Sprite_Movie.prototype.update = function () {
        this.onUpdate();
        if (this.isEnd()) {
            if (this.loop) { // _video.loop = trueでも出来るみたいだけどね
                this._video.currentTime = 0;
                this._video.play();
            } else {
                var scene = this.parent;
                scene.removeChild(this);
            }
        }
    }
})();