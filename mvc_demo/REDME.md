egret + fairyGui 项目框架
egret：5.3.10
fairyGui:免费版 2020 4.0

项目采用MVC设计模式 达到视图、数据、逻辑分离，降低耦合。

编码规范：
    1.包名全部小写
    2.类文件名及类名以大写驼峰命名法命名，类文件名与类名必须保持一致
    3.变量与函数命名采用小写驼峰命名法命名
    4.私有变量统一采用下划线"_"开始
    5.类名中间尽量不要夹杂下划线
    6.除特殊情况下尽量不使用any来做变量类型声明
    7.常量名全部大写由数字、字母、下划线组成
    8.不要使用拼音+英文命名方式(vscode 插件 code spell checker，防止英文单词拼写错误)，
    9.类名需写明功能注释，不易读懂的函数尽量也写明功能注释
    10.有需要用到除法的地方如果可以的话用乘法代替、数组声明采用 =[]
    11.代码应该简洁易懂，逻辑清晰
    12.模块与模块之间交互使用事件来触发，避免代码直接调用

代码说明：
    Game 游戏逻辑主入口
    GameConfig 游戏配置
    core/ 框架核心代码
    game/ 游戏逻辑代码
    utils/ 游戏内工具类
    EventManager 事件控制类
    ViewManager 界面窗口控制类