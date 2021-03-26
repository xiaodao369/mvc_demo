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
var LayerManager_1 = require("./LayerManager");
/**警示弹窗控制类 */
var AlertManager = (function (_super) {
    __extends(AlertManager, _super);
    function AlertManager() {
        var _this = _super.call(this) || this;
        _this._layer = LayerManager_1.LayerManager.getInstance().alertLayer;
        return _this;
    }
    return AlertManager;
}(core.BaseSingle));
exports.AlertManager = AlertManager;
__reflect(AlertManager.prototype, "\"E:/egret/test/src/core/manager/AlertManager\".AlertManager");
//# sourceMappingURL=AlertManager.js.map