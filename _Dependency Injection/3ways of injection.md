## Injectable Decorator on the service

@Injectable()装饰器，是告诉Angular这是一个可供注入的服务，该注入器主要负责创建服务实例，并把他注入到类中， providedIn: 'root' 表示 HeroService在整个应用程序中都是可见的。

这种注入方式，会告诉Angular在root注入器中注册这个服务,这也是使用CLI生成服务时默认的方式.
这种方式注册,不需要再@NgModule装饰器中写providers,而且在代码编译打包时,可以执行tree shaking优化，会移除所有没在应用中使用过的服务。推荐使用此种方式注册服务.
```
@Injectable({
    providedIn: 'root'
})

```


## Inject on component
如果在component中元数据上定义了providers，那么angular会根据providers为这个组件创建一个注入器，
这个组件的子组件子组件也会共享这个注入器，如果没有定义，那么组件会根据组件树逐级向上逐级向上查找合适的注入器来创建组件的依赖。

这种方式注册,会注册到每个组件实例自己的注入器上。(多个组件会有多个注入器)
```
@Component({ 
 selector: 'app-goods-list',
 providers: [ GoodsListService ]
})
```
其实这种引入方式只是一种简写，不过也是一种常用的写法，真正的完整版本是:
```
@Component({ 
 selector: 'app-goods-list',
 providers: [{ provide: GoodsListService, useClass: GoodsListService } ]
 // 其中provide属性可以理解为这个Provider的唯一标识，用于定位依赖值,也就是应用中使用的服务名
 // 而useClass属性则代表使用哪个服务类来创建实例
})
```

## Inject in module
这种方式注册,可以对服务进行一些额外的配置(服务类中也需要写@Injectable()装饰器)。
在未使用路由懒加载的情况下，这种注入的方式和在服务类中注入的方式是一样的。

虽然在模块中注入的依赖相当于是应用级别的，但是当遇到路由懒加载的时候，会出现一种特殊情况，Angular会对延迟加载模块初始化一个新的执行上下文，并创建一个新的注入器，在该注入器中注入的依赖只在该模块内部可见，这算是一个特殊的模块级作用域。


补充上述原因： 因为Angular在启动程序时会启动一个根模块，并加载它所依赖的其他模块，此时会生成一个全局的根注入器，由该注入器创建的依赖注入对象在整个应用程序级别可见，并共享一个实例。所以说在Angular中并没有模块级别的区域，只有组件级别和应用级别的区域。模块级别的注入就相当于是应用级别。

```
@NgModule ({
  providers: [GoodsListService],
})
export class GoodsListModule { }
```