import { Game } from "./Game";

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            // context.onUpdate = () => {
            // }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        Game.getInstance().init(this.stage);
        // const result = await RES.getResAsync("description_json")
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("login", 0, loadingView);
            this.stage.removeChild(loadingView);
        } catch (e) {
            console.error(e);
        }
    }
}
