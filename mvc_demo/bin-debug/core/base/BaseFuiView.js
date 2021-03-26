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
var EventManager_1 = require("../manager/EventManager");
var LayerManager_1 = require("../manager/LayerManager");
/**基础fui显示类 */
var BaseFuiView = (function (_super) {
    __extends(BaseFuiView, _super);
    function BaseFuiView(type, fuiName) {
        var _this = _super.call(this) || this;
        _this.lock();
        _this._eventManager = EventManager_1.EventManager.getInstance();
        _this.fuiName = fuiName;
        _this.type = type;
        _this._isExist = true;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.destroy, _this);
        _this._eventManager.on(events.GameEvents.RESIZE, _this.resize, _this);
        return _this;
    }
    /**初始化 */
    BaseFuiView.prototype.init = function () {
    };
    /**显示 */
    BaseFuiView.prototype.show = function (showData) {
        if (this._fui['btnClose']) {
            this._fui.addClickListener(this.close, this);
        }
        this.unlock();
    };
    /**锁定 */
    BaseFuiView.prototype.lock = function () {
        this.touchEnabled = this.touchChildren = true;
    };
    /**解锁 */
    BaseFuiView.prototype.unlock = function () {
        this.touchEnabled = this.touchChildren = false;
    };
    /**关闭 */
    BaseFuiView.prototype.close = function () {
        if (!this._isExist)
            return;
        this._isExist = false;
        this._eventManager.dispatchEvent(events.GameEvents.CLOSE_VIEW, this);
    };
    BaseFuiView.prototype.resize = function () {
        if (this._fui) {
            var layerManager = LayerManager_1.LayerManager.getInstance();
            this._fui.width = layerManager.stageWidth;
            this._fui.height = layerManager.stageHeight;
        }
    };
    /**销毁 */
    BaseFuiView.prototype.destroy = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._eventManager.off(events.GameEvents.RESIZE, this.resize, this);
        this._eventManager = null;
        while (this.numChildren > 0) {
            this.removeChildAt(0);
        }
        this._fui.dispose();
        this._fui = null;
    };
    return BaseFuiView;
}(egret.DisplayObjectContainer));
exports.BaseFuiView = BaseFuiView;
__reflect(BaseFuiView.prototype, "\"E:/egret/test/src/core/base/BaseFuiView\".BaseFuiView", ["IBaseView"]);
//# sourceMappingURL=BaseFuiView.js.map