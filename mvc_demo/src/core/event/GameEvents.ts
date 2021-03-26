module events {
    export class GameEvents {
        /**锁屏 */
        static LOCK_SCENE:string = 'game_lockScene';
        /**解除锁屏 */
        static UNLOCK_SCENE:string = 'game_unlockScene'
        /**舞台大小更新 */
        static RESIZE:string = 'game_resize';
        /**打开界面 */
        static OPEN_VIEW:string = 'game_openView';
        /**关闭界面 */
        static CLOSE_VIEW:string = 'game_closeView';
    }
}
