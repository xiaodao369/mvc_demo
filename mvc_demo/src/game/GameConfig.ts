/**游戏平台 */
enum GamePlatform {
    /**网页版 */
    HTML,
    /**微信 */
    WX,
    /**QQ */
    QQ,
    /**头条 */
    TT
}

/**游戏配置类 */
export class GameConfig {
    /**是否debug */
    static readonly debug: boolean = true;
    /**是否本地环境 */
    static readonly dev: boolean = true;
    /**平台 */
    static readonly platform: GamePlatform = GamePlatform.HTML;
    /**版本号 */
    static readonly ver: string = '0.0.1';
    /**远程资源路径 */
    static readonly assetsUrl:string = '';

    /**游戏配置初始化 */
    static init(): void {
        if (!GameConfig.debug) console.warn = console.info = console.log = function () { };
    }
}

