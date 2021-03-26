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
/**事件控制类 */
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        var _this = _super.call(this) || this;
        _this._eventMap = new Map();
        _this._eventGroupMap = new Map();
        return _this;
    }
    /**注册监听
     * @eventKey 事件key
     * @callFunc 回调方法
     * @thisObject this目标
     */
    EventManager.prototype.on = function (eventKey, callFun, thisObject, group) {
        this.register(eventKey, callFun, thisObject);
        if (group && group != '') {
            var groupArr = this._eventGroupMap.get(group);
            if (!groupArr)
                groupArr = [];
            groupArr.push({ eventKey: eventKey, callFun: callFun, thisObject: thisObject });
            this._eventGroupMap.set(group, groupArr);
        }
    };
    /**只监听一次事件
     * @eventKey 事件key
     * @callFunc 回调方法
     * @thisObject this目标
     */
    EventManager.prototype.once = function (eventKey, callFun, thisObject) {
        this.register(eventKey, callFun, thisObject, 1);
    };
    /**移除事件
     * @eventKey 事件key
     * @callFunc 回调方法
     * @thisObject this目标
     */
    EventManager.prototype.off = function (eventKey, callFunc, thisObject) {
        var funMap = this._eventMap.get(eventKey);
        var value = funMap.get(callFunc);
        if (value && value.thisObj === thisObject) {
            funMap.delete(callFunc);
            this._eventMap.set(eventKey, funMap);
        }
    };
    /**根据组移除事件
     * @groupKey 组key
     */
    EventManager.prototype.offToGroup = function (groupKey) {
        var _this = this;
        var groupArr = this._eventGroupMap.get(groupKey);
        if (groupArr) {
            groupArr.forEach(function (value) {
                _this.off(value.eventKey, value.callFun, value.thisObject);
            });
            groupArr.length = 0;
            this._eventGroupMap.delete(groupKey);
        }
    };
    /**派发事件
     * @eventKey 事件key
     */
    EventManager.prototype.dispatchEvent = function (eventKey) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var funMap = this._eventMap.get(eventKey);
        funMap && funMap.forEach(function (value, callFunc) {
            callFunc.call.apply(callFunc, [value.thisObj].concat(args));
            if (value.type)
                _this.off(eventKey, callFunc, value.thisObj);
        });
    };
    EventManager.prototype.register = function (eventKey, callFun, thisObj, type) {
        var funMap = this._eventMap.get(eventKey);
        if (!funMap)
            funMap = new Map();
        var registerData = funMap.get(callFun);
        if (registerData && registerData.thisObj === thisObj) {
            throw '重复注册事件' + eventKey + thisObj.name + '.' + callFun.name;
        }
        else {
            funMap.set(callFun, { thisObj: thisObj, type: type });
            this._eventMap.set(eventKey, funMap);
        }
    };
    return EventManager;
}(core.BaseSingle));
exports.EventManager = EventManager;
__reflect(EventManager.prototype, "\"E:/egret/test/src/core/manager/EventManager\".EventManager");
//# sourceMappingURL=EventManager.js.map