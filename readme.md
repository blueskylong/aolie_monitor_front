## 前端监控展示插件

部署方法请参见说明工程：https://github.com/blueskylong/aolie_illustrate

本插件,主要是实现了首页的接口,从而在首页中展示.
即通过注解:@RegHomeBlock("compName")注册,注册的类,需要继承PageWidget类.

展示的是后台收集的系统状态信息,利用ECharts生成.
