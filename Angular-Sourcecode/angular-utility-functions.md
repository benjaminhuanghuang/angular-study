在 angular 的 API 文档中，在最前面就是讲的就是 angular 的工具函数

angular.bind //用户将函数和对象绑定在一起，返回一个新的函数
angular.bootstrap //angular 启动函数，一般不用，除了 e2e 测试

angular.copy //对象拷贝
angular.element //jQlite，作用类似于 jQuery
angular.equals //对象比较。用 == 对两个对象进行比较，除非他们是同一个对象的引用，否则都不会相等。
angular.extend //对象扩展，将两个对象的属性求并集
angular.forEach //功能类似于 jQuery 中 each 函数，

angular.noop //一个空函数
angular.identity //这个函数可以返回它的第一个函数

angular.injector //用来创建一个注入器，可以用来给其他函数注入所依赖的对象
angular.module //两个参数，注册模块；一个参数，返回模块。太常用了。

angular.fromJson //将 json 转成对象
angular.toJson //将对象转成 json

angular.uppercase //小写转大写
angular.lowercase //大写转小写

//类型检查
angular.isArray
angular.isDate
angular.isDefined
angular.isElement
angular.isFunction
angular.isNumber
angular.isObject
angular.isString
angular.isUndefined
