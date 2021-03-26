import { LayerManager } from "./LayerManager";

/**警示弹窗控制类 */
export class AlertManager extends core.BaseSingle {
    
    private _layer: egret.DisplayObjectContainer;

    constructor() {
        super();
        this._layer = LayerManager.getInstance().alertLayer
    }

}