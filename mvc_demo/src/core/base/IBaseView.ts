/**基础界面 接口 */
interface IBaseView {
    /**界面类型 */
    type: ViewType;
    /**显示 */
    show(): void
    /**锁定 */
    lock(): void;
    /**解除锁定 */
    unlock(): void;
    /**关闭 */
    close(): void
}

/**弹窗类型 */
enum ViewType {
    /**场景 */
    SCENE,
    /**弹窗 */
    POPUP
}