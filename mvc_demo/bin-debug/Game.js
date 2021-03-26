"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager_1 = require("./core/manager/EventManager");
var LayerManager_1 = require("./core/manager/LayerManager");
var ViewManager_1 = require("./core/manager/ViewManager");
var GameConfig_1 = require("./game/GameConfig");
var LoginView_1 = require("./game/login/LoginView");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**游戏初始化 */
    Game.prototype.init = function (stage) {
        GameConfig_1.GameConfig.init();
        LayerManager_1.LayerManager.getInstance().init(stage);
        ViewManager_1.ViewManager.getInstance();
        EventManager_1.EventManager.getInstance().dispatchEvent(events.GameEvents.OPEN_VIEW, LoginView_1.LoginView);
    };
    return Game;
}(core.BaseSingle));
exports.Game = Game;
__reflect(Game.prototype, "\"E:/egret/test/src/Game\".Game");
//# sourceMappingURL=Game.js.map