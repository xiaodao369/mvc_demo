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
var ResUtils_1 = require("../../utils/ResUtils");
var EventManager_1 = require("./EventManager");
var LayerManager_1 = require("./LayerManager");
/**弹窗界面控制类 */
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this) || this;
        _this._viewMap = new Map();
        _this._layerManager = LayerManager_1.LayerManager.getInstance();
        _this._eventManager = EventManager_1.EventManager.getInstance();
        _this._eventManager.on(events.GameEvents.OPEN_VIEW, _this.open, _this);
        _this._eventManager.on(events.GameEvents.CLOSE_VIEW, _this.close, _this);
        return _this;
    }
    /**打开界面 */
    ViewManager.prototype.open = function (viewClass, showData, callFun) {
        var view = this._viewMap.get(viewClass.name);
        if (view) {
            if (showData)
                view.show(showData);
            if (callFun)
                callFun(true);
        }
        else {
            var self_1 = this;
            ResUtils_1.ResUtils.loadFui(viewClass.fuiName).then(function (isLoad) {
                view = new viewClass();
                view.alpha = 0;
                if (view.type == ViewType.POPUP) {
                    self_1._layerManager.popupLayer.addChild(view);
                    egret.Tween.get(view).to({ alpha: 1 }, 300, egret.Ease.quadOut).call(function () {
                        view.show();
                    });
                }
                else if (view.type == ViewType.SCENE) {
                    self_1._layerManager.sceneLayer.addChild(view);
                    egret.Tween.get(view).to({ alpha: 1 }, 300).call(function () {
                        view.show();
                    });
                }
            }).catch(function () {
                console.log(viewClass.fuiName + ' FGUI 资源加载失败');
            });
        }
    };
    /**关闭界面 */
    ViewManager.prototype.close = function (view) {
        if (view && view.hashCode) {
            view.lock();
            if (view.type == ViewType.POPUP) {
                this._layerManager.popupLayer.removeChild(view);
            }
            else if (view.type == ViewType.SCENE) {
                this._layerManager.sceneLayer.removeChild(view);
            }
            this._viewMap.delete(view.name);
        }
    };
    return ViewManager;
}(core.BaseSingle));
exports.ViewManager = ViewManager;
__reflect(ViewManager.prototype, "\"E:/egret/test/src/core/manager/ViewManager\".ViewManager");
//# sourceMappingURL=ViewManager.js.map