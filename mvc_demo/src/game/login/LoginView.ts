import { BaseFuiView } from "../../core/base/BaseFuiView";

/**登录界面 */
export class LoginView extends BaseFuiView {

    protected _fui: login.UI_loginView;

    constructor() {
        super(ViewType.POPUP, "login");
    }

    protected init(): void {
        this._fui = login.UI_loginView.createInstance();
        this.addChild(this._fui.displayObject);
        super.init();
    }

    show(showData?): void {
        super.show();
    }

    protected destroy():void{
        super.destroy();
    }
}