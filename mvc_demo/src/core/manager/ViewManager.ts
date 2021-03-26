import { ResUtils } from "../../utils/ResUtils";
import { BaseFuiView } from "../base/BaseFuiView";
import { EventManager } from "./EventManager";
import { LayerManager } from "./LayerManager";

/**弹窗界面控制类 */
export class ViewManager extends core.BaseSingle {

    private _layerManager: LayerManager;
    private _eventManager: EventManager;
    private _viewMap: Map<number, BaseFuiView>;

    constructor() {
        super();
        this._viewMap = new Map();
        this._layerManager = LayerManager.getInstance();
        this._eventManager = EventManager.getInstance();
        this._eventManager.on(events.GameEvents.OPEN_VIEW, this.open, this);
        this._eventManager.on(events.GameEvents.CLOSE_VIEW, this.close, this);
    }

    /**打开界面 */
    private open(viewClass: any, showData?: any, callFun?: Function): void {
        let view: BaseFuiView = this._viewMap.get(viewClass.name);
        if (view) {//已打开
            if (showData) view.show(showData);
            if (callFun) callFun(true);
        } else {
            let self = this;
            view = new viewClass() as BaseFuiView;
            ResUtils.loadFui(view.fuiName).then(() => {
                // view = new viewClass() as BaseFuiView;
                view.alpha = 0;
                if (view.type == ViewType.POPUP) {
                    LayerManager.getInstance().popupLayer.addChild(view);
                    egret.Tween.get(view).to({ alpha: 1 }, 300, egret.Ease.quadOut).call(() => {
                        view.show();
                    })
                } else if (view.type == ViewType.SCENE) {
                    LayerManager.getInstance().sceneLayer.addChild(view);
                    egret.Tween.get(view).to({ alpha: 1 }, 300).call(() => {
                        view.show();
                    })
                }
            }).catch(() => {
                console.log(view.fuiName + ' UI资源加载失败');
                view = null;
            })
        }
    }

    /**关闭界面 */
    private close(view: any): void {
        if (view && view.hashCode) {
            view.lock();
            if (view.type == ViewType.POPUP) {
                this._layerManager.popupLayer.removeChild(view)
            } else if (view.type == ViewType.SCENE) {
                this._layerManager.sceneLayer.removeChild(view)
            }
            this._viewMap.delete(view.name);
        }
    }
}
