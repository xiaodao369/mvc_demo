import { EventManager } from "./core/manager/EventManager";
import { LayerManager } from "./core/manager/LayerManager";
import { ViewManager } from "./core/manager/ViewManager";
import { GameConfig } from "./game/GameConfig";
import { LoginView } from "./game/login/LoginView";

export class Game extends core.BaseSingle {

    /**游戏初始化 */
    init(stage: egret.Stage): void {
        GameConfig.init();
        stage.addChild(fairygui.GRoot.inst.displayObject);
        LayerManager.getInstance().init(stage);
        ViewManager.getInstance();
        //打开登录界面
        EventManager.getInstance().dispatchEvent(events.GameEvents.OPEN_VIEW, LoginView);
    }
}