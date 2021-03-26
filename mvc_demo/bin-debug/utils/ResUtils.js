"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("../game/GameConfig");
/**资源加载工具类 */
var ResUtils = (function () {
    function ResUtils() {
    }
    /**资源加载工具类 */
    ResUtils.loadFui = function (key) {
        return new Promise(function (resolve, reject) {
            var existPkg = fairygui.UIPackage.getByName(key);
            if (existPkg) {
                resolve();
                return;
            }
            function loadGroup() {
                // RES.loadGroup(key).then(() => {
                //     resolve();
                // }).catch(() => {
                //     reject()
                // })
            }
            if (RES.getGroupByName(key).length === 0) {
                var assetsUrl = GameConfig_1.GameConfig.assetsUrl + '/fui/' + key + '.zip';
                // RES.getResByUrl(assetsUrl, (data) => {
                //     if (data) {
                //         fairygui.UIPackage.loadPackage(data).then(pkg => {
                //         }).catch(() => {
                //             console.error('fui buffer 解析失败');
                //         })
                //     }
                // }, this, RES.ResourceItem.TYPE_BIN);
            }
            else {
                loadGroup();
            }
        });
    };
    return ResUtils;
}());
exports.ResUtils = ResUtils;
__reflect(ResUtils.prototype, "\"E:/egret/test/src/utils/ResUtils\".ResUtils");
//# sourceMappingURL=ResUtils.js.map