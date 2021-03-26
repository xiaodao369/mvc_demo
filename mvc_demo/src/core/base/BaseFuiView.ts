import { EventManager } from "../manager/EventManager";
import { LayerManager } from "../manager/LayerManager";

/**基础fui显示类 */
export class BaseFuiView extends egret.DisplayObjectContainer implements IBaseView {
    /**弹窗类型 */
    type: ViewType;
    fuiName: string;

    private _isExist: boolean;
    

    protected _fui: fairygui.GObject;

    protected _eventManager: EventManager;

    constructor(type: ViewType, fuiName: string) {
        super();
        this.fuiName = fuiName;
        this.type = type;
        this._isExist = true;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    /**初始化 */
    protected init(): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        this.lock();
        this._eventManager = EventManager.getInstance();
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._eventManager.on(events.GameEvents.RESIZE, this.resize, this);
    }

    /**显示 */
    show(showData?): void {
        if (this._fui['btn_close']) {
            this._fui.addClickListener(this.close, this);
        }
        this.resize();
        this.unlock();
    }

    /**锁定 */
    lock(): void {
       this.touchChildren = false;
    }

    /**解锁 */
    unlock(): void {
       this.touchChildren = true;
    }


    /**关闭 */
    close(): void {
        if (!this._isExist) return;
        this._isExist = false;
        this._eventManager.dispatchEvent(events.GameEvents.CLOSE_VIEW, this);
    }

    private resize(): void {
        if (this._fui) {
            let layerManager = LayerManager.getInstance();
            this._fui.width = layerManager.stageWidth;
            this._fui.height = layerManager.stageHeight;
        }
    }

    /**销毁 */
    protected destroy(): void {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._eventManager.off(events.GameEvents.RESIZE, this.resize, this);
        this._eventManager = null;
        while (this.numChildren > 0) {
            this.removeChildAt(0);
        }
        this._fui.dispose();
        this._fui = null;
    }

}

