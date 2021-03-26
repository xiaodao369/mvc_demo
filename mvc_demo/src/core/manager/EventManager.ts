/**事件控制类 */
export class EventManager extends core.BaseSingle {

    private _eventMap: Map<string, Map<Function, { thisObj: any, type: number }>>;
    private _eventGroupMap: Map<string, { eventKey: string, callFun: Function, thisObject: any }[]>

    constructor() {
        super();
        this._eventMap = new Map();
        this._eventGroupMap = new Map();
    }

    /**注册监听
     * @eventKey 事件key
     * @callFunc 回调方法
     * @thisObject this目标
     */
    on(eventKey: string, callFun: Function, thisObject: any, group?: string): void {
        this.register(eventKey, callFun, thisObject);
        if (group && group != '') {
            let groupArr = this._eventGroupMap.get(group);
            if (!groupArr) groupArr = [];
            groupArr.push({ eventKey, callFun, thisObject });
            this._eventGroupMap.set(group, groupArr);
        }
    }

    /**只监听一次事件
     * @eventKey 事件key
     * @callFunc 回调方法
     * @thisObject this目标
     */
    once(eventKey: string, callFun: Function, thisObject: any): void {
        this.register(eventKey, callFun, thisObject, 1);
    }

    /**移除事件
     * @eventKey 事件key
     * @callFunc 回调方法
     * @thisObject this目标
     */
    off(eventKey: string, callFunc: Function, thisObject: any): void {
        let funMap = this._eventMap.get(eventKey);
        let value = funMap.get(callFunc);
        if (value && value.thisObj === thisObject) {
            funMap.delete(callFunc);
            this._eventMap.set(eventKey, funMap)
        }
    }

    /**根据组移除事件
     * @groupKey 组key
     */
    offToGroup(groupKey: string): void {
        let groupArr = this._eventGroupMap.get(groupKey);
        if (groupArr) {
            groupArr.forEach((value) => {
                this.off(value.eventKey, value.callFun, value.thisObject);
            })
            groupArr.length = 0;
            this._eventGroupMap.delete(groupKey);
        }
    }


    /**派发事件
     * @eventKey 事件key
     */
    dispatchEvent(eventKey: string, ...args): void {
        let funMap = this._eventMap.get(eventKey);
        funMap && funMap.forEach((value, callFunc) => {
            callFunc.call(value.thisObj, ...args);
            if (value.type) this.off(eventKey, callFunc, value.thisObj);
        })
    }

    private register(eventKey: string, callFun: Function, thisObj: any, type?: number): void {
        let funMap: Map<Function, { thisObj: any, type: number }> = this._eventMap.get(eventKey);
        if (!funMap) funMap = new Map();
        let registerData = funMap.get(callFun);
        if (registerData && registerData.thisObj === thisObj) {
            throw '重复注册事件' + eventKey + thisObj.name + '.' + callFun.name;
        } else {
            funMap.set(callFun, { thisObj, type });
            this._eventMap.set(eventKey, funMap);
        }
    }
}