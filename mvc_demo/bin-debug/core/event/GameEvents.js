var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var events;
(function (events) {
    var GameEvents = (function () {
        function GameEvents() {
        }
        /**锁屏 */
        GameEvents.LOCK_SCENE = 'game_lockScene';
        /**解除锁屏 */
        GameEvents.UNLOCK_SCENE = 'game_unlockScene';
        /**舞台大小更新 */
        GameEvents.RESIZE = 'game_resize';
        /**打开界面 */
        GameEvents.OPEN_VIEW = 'game_openView';
        /**关闭界面 */
        GameEvents.CLOSE_VIEW = 'game_closeView';
        return GameEvents;
    }());
    events.GameEvents = GameEvents;
    __reflect(GameEvents.prototype, "events.GameEvents");
})(events || (events = {}));
//# sourceMappingURL=GameEvents.js.map