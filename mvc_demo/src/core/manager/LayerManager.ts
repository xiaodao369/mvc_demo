import { EventManager } from "./EventManager";

/**层级控制类 */
export class LayerManager extends core.BaseSingle {

    private _isInit: boolean;
    private _stage: egret.Stage;
    /**场景层 */
    private _scene: egret.DisplayObjectContainer;
    /**ui层 */
    private _ui: egret.DisplayObjectContainer;
    /**弹窗层 */
    private _popup: egret.DisplayObjectContainer;
    /**告警层 */
    private _alert: egret.DisplayObjectContainer;
    /**加载层 */
    private _loading: egret.DisplayObjectContainer;
    /**屏幕锁 */
    private _lock: egret.DisplayObjectContainer;

    private _eventManager: EventManager;

    constructor() {
        super();
        this._eventManager = EventManager.getInstance();
        this._eventManager.on(events.GameEvents.LOCK_SCENE, this.lockScene, this);
        this._eventManager.on(events.GameEvents.UNLOCK_SCENE, this.unlockScene, this);
    }

    init(target: egret.Stage): void {
        if (this._isInit) return;
        this._isInit = true;
        this._stage = target;
        this._scene = new egret.DisplayObjectContainer();
        this._ui = new egret.DisplayObjectContainer();
        this._popup = new egret.DisplayObjectContainer();
        this._alert = new egret.DisplayObjectContainer();
        this._loading = new egret.DisplayObjectContainer();
        this._lock = new egret.DisplayObjectContainer();
        this._lock.touchChildren = false;
        this._lock.visible = false;

        target.addChild(this._scene);
        target.addChild(this._ui);
        target.addChild(this._popup);
        target.addChild(this._alert);
        target.addChild(this._loading);
        target.addChild(this._lock);

        this._stage.addEventListener(egret.Event.RESIZE, this.resize, this);
    }

    /**场景层 */
    get sceneLayer(): egret.DisplayObjectContainer {
        return this._scene;
    }

    /**ui层 */
    get uiLayer(): egret.DisplayObjectContainer {
        return this._ui;
    }

     /**弹窗层 */
     get popupLayer(): egret.DisplayObjectContainer {
        return this._popup;
    }

    /**告警层 */
    get alertLayer(): egret.DisplayObjectContainer {
        return this._alert;
    }

    /**加载层 */
    get loadingLayer(): egret.DisplayObjectContainer {
        return this._loading;
    }

    /**舞台的当前宽度 */
    get stageWidth(): number {
        return this._stage.stageWidth;
    }

    /**舞台的当前高度 */
    get stageHeight(): number {
        return this._stage.stageHeight;
    }

    /**舞台大小更新 */
    private resize(): void {
        this._eventManager.dispatchEvent(events.GameEvents.RESIZE);
    }

    /**锁屏 */
    private lockScene(): void {
        this._lock.visible = true;
    }

    /**解除锁屏 */
    private unlockScene(): void {
        this._lock.visible = false;
    }
}