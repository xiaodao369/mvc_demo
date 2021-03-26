"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**游戏平台 */
var GamePlatform;
(function (GamePlatform) {
    /**网页版 */
    GamePlatform[GamePlatform["HTML"] = 0] = "HTML";
    /**微信 */
    GamePlatform[GamePlatform["WX"] = 1] = "WX";
    /**QQ */
    GamePlatform[GamePlatform["QQ"] = 2] = "QQ";
    /**头条 */
    GamePlatform[GamePlatform["TT"] = 3] = "TT";
})(GamePlatform || (GamePlatform = {}));
/**游戏配置类 */
var GameConfig = (function () {
    function GameConfig() {
    }
    /**游戏配置初始化 */
    GameConfig.init = function () {
        if (!GameConfig.debug)
            console.warn = console.info = console.log = function () { };
    };
    /**是否debug */
    GameConfig.debug = true;
    /**是否本地环境 */
    GameConfig.dev = true;
    /**平台 */
    GameConfig.platform = GamePlatform.HTML;
    /**版本号 */
    GameConfig.ver = '0.0.1';
    /**远程资源路径 */
    GameConfig.assetsUrl = '';
    return GameConfig;
}());
exports.GameConfig = GameConfig;
__reflect(GameConfig.prototype, "\"E:/egret/test/src/game/GameConfig\".GameConfig");
//# sourceMappingURL=GameConfig.js.map