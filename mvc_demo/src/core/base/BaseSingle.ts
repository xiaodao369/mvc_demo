namespace core {
    /**单例基类 */
    export class BaseSingle {
        constructor() {
            if ((<any>this).instance) throw 'create new instance';
        }

        static getInstance<T extends {}>(this: new () => T): T {
            if (!(<any>this).instance) {
                (<any>this).instance = new this();
            }
            return (<any>this).instance;
        }
    }
}