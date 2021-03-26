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
var BaseFuiView_1 = require("../../core/base/BaseFuiView");
/**登录界面 */
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    // protected _fui: fui.login.UI_loginView;
    function LoginView() {
        return _super.call(this, ViewType.POPUP, "login") || this;
    }
    LoginView.prototype.init = function () {
        // this._fui = fui.login.UI_loginView.createInstance();
        // this.addChild(this._fui.displayObject);
        _super.prototype.init.call(this);
    };
    LoginView.prototype.show = function (showData) {
    };
    LoginView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return LoginView;
}(BaseFuiView_1.BaseFuiView));
exports.LoginView = LoginView;
__reflect(LoginView.prototype, "\"E:/egret/test/src/game/login/LoginView\".LoginView");
//# sourceMappingURL=LoginView.js.map