import { GameConfig } from "../game/GameConfig";

/**资源加载工具类 */
export class ResUtils {

    /**资源加载工具类 */
    static loadFui(key: string): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            let existPkg = fairygui.UIPackage.getByName(key);
            if (existPkg) {//已加载
                resolve();
                return;
            }

            function loadGroup() {
                RES.loadGroup(key).then(() => {
                    fairygui.UIPackage.addPackage(key);
                    resolve();
                }).catch(() => {
                    reject()
                })
            }

            if (RES.getGroupByName(key).length === 0) {//远程加载
                let assetsUrl = GameConfig.assetsUrl + '/fui/' + key + '.zip';
                RES.getResByUrl(assetsUrl, (data) => {
                    if (data) {
                        fairygui.UIPackage.loadPackage(data).then(pkg => {

                        }).catch(() => {
                            console.error('fui buffer 解析失败');
                        })
                    }
                }, this, RES.ResourceItem.TYPE_BIN);
            } else {//本地加载
                loadGroup();
            }
        })
    }
}
