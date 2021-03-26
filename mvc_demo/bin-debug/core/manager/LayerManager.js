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
var EventManager_1 = require("./EventManager");
/**层级控制类 */
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        var _this = _super.call(this) || this;
        _this._eventManager = EventManager_1.EventManager.getInstance();
        _this._eventManager.on(events.GameEvents.LOCK_SCENE, _this.lockScene, _this);
        _this._eventManager.on(events.GameEvents.UNLOCK_SCENE, _this.unlockScene, _this);
        return _this;
    }
    LayerManager.prototype.init = function (target) {
        if (this._isInit)
            return;
        this._isInit = true;
        this._stage = target;
        this._scene = new egret.DisplayObjectContainer();
        this._ui = new egret.DisplayObjectContainer();
        this._popup = new egret.DisplayObjectContainer();
        this._alert = new egret.DisplayObjectContainer();
        this._loading = new egret.DisplayObjectContainer();
        this._lock = new egret.DisplayObjectContainer();
        this._lock.touchChildren = false;
        this._lock.visible = false;
        target.addChild(this._scene);
        target.addChild(this._ui);
        target.addChild(this._popup);
        target.addChild(this._alert);
        target.addChild(this._loading);
        target.addChild(this._lock);
        this._stage.addEventListener(egret.Event.RESIZE, this.resize, this);
    };
    Object.defineProperty(LayerManager.prototype, "sceneLayer", {
        /**场景层 */
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "uiLayer", {
        /**ui层 */
        get: function () {
            return this._ui;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "popupLayer", {
        /**弹窗层 */
        get: function () {
            return this._popup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "alertLayer", {
        /**告警层 */
        get: function () {
            return this._alert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "loadingLayer", {
        /**加载层 */
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "stageWidth", {
        /**舞台的当前宽度 */
        get: function () {
            return this._stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerManager.prototype, "stageHeight", {
        /**舞台的当前高度 */
        get: function () {
            return this._stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**舞台大小更新 */
    LayerManager.prototype.resize = function () {
        this._eventManager.dispatchEvent(events.GameEvents.RESIZE);
    };
    /**锁屏 */
    LayerManager.prototype.lockScene = function () {
        this._lock.visible = true;
    };
    /**解除锁屏 */
    LayerManager.prototype.unlockScene = function () {
        this._lock.visible = false;
    };
    return LayerManager;
}(core.BaseSingle));
exports.LayerManager = LayerManager;
__reflect(LayerManager.prototype, "\"E:/egret/test/src/core/manager/LayerManager\".LayerManager");
//# sourceMappingURL=LayerManager.js.map