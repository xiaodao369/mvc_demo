var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    /**单例基类 */
    var BaseSingle = (function () {
        function BaseSingle() {
            if (this.instance)
                throw 'create new instance';
        }
        BaseSingle.getInstance = function () {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        return BaseSingle;
    }());
    core.BaseSingle = BaseSingle;
    __reflect(BaseSingle.prototype, "core.BaseSingle");
})(core || (core = {}));
//# sourceMappingURL=BaseSingle.js.map