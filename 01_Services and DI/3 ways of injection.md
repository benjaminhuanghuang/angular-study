# 3 Ways of Injection

## Injectable Decorator on the service

When you provide the service at the root level, Angular creates a single, shared instance of service and injects it into any class that asks for it.
Registering the provider in the @Injectable() metadata also allows Angular to optimize an app by removing the service from the compiled application if it isn't used, a process known as tree-shaking.

@Injectable()装饰器，是告诉Angular这是一个可供注入的服务，该注入器主要负责创建服务实例，并把他注入到类中， providedIn: 'root' 表示 HeroService在整个应用程序中都是可见的。

这种注入方式，会告诉Angular在root注入器中注册这个服务,这也是使用CLI生成服务时默认的方式.

这种方式注册,不需要再@NgModule装饰器中写providers

```ts
@Injectable({
    providedIn: 'root'
})

```

## Inject on component

When you register a provider at the component level, you get a new instance of the service with `each new instance of that component`.

```ts
@Component({ 
 selector: 'app-goods-list',
 providers: [ GoodsListService ]
})
```
这种方式注册,会注册到每个组件实例自己的注入器上。(多个组件会有多个注入器)
When we provide a service on multiple components, each component get its own instance of that service.

如果在component上定义了providers，那么angular会根据providers为这个组件创建一个注入器，
如果这个组件的子组件, 孙子组件没有定义provider， 那么这些子孙组件会共享这个注入器，，组件会根据组件树逐级向上逐级向上查找合适的注入器来创建组件的依赖。

这种引入方式只是一种简写，真正的完整版本是:

```ts
@Component({ 
 selector: 'app-goods-list',
 providers: [{ provide: GoodsListService, useClass: GoodsListService } ]
 // 其中provide属性可以理解为这个Provider的唯一标识，用于定位依赖值,也就是应用中使用的服务名
 // 而useClass属性则代表使用哪个服务类来创建实例
})
```

## Inject in module

When you register a provider with a specific NgModule, the same instance of a service is `available to all components in that NgModule`.
To register at this level, use the providers property of the @NgModule() decorator.

```ts
@NgModule ({
  providers: [GoodsListService],
})
export class GoodsListModule { }
```

这种方式注册,可以对服务进行一些额外的配置(服务类中也需要写@Injectable()装饰器)。
在未使用路由懒加载的情况下，这种注入的方式和在服务类中注入的方式是一样的。

虽然在模块中注入的依赖相当于是应用级别的，但是当遇到路由懒加载的时候，会出现一种特殊情况，Angular会对延迟加载模块初始化一个新的执行上下文，并创建一个新的注入器，在该注入器中注入的依赖只在该模块内部可见，这算是一个特殊的模块级作用域。

补充上述原因： 因为Angular在启动程序时会启动一个根模块，并加载它所依赖的其他模块，此时会生成一个全局的根注入器，由该注入器创建的依赖注入对象在整个应用程序级别可见，并共享一个实例。所以说在Angular中并没有模块级别的区域，只有组件级别和应用级别的区域。模块级别的注入就相当于是应用级别。


## form Erik Sommer
[2:56 PM] Erik Sommer
When you provide inside a component, that service is "scoped" to the component.  So anything in the DOM that's a child of that component will be able to access it.  
Anything above the component in the DOM will not be able to.  That's how our scoped services work.

[2:57 PM] Erik Sommer
Providing services in the module is `generally only used for lazy loading`.  If you're not lazy loading, you should either be providing the service in the root (`providedIn: 'root'`) or as a scoped service (provided at the component level)


[3:21 PM] Erik Sommer
Lazy loading is a filled with special cases   If ComponentA is lazy loaded, and it and its children are the only thing that need access to ServiceA, then you can provide the service inside of ComponentA.  That will keep it all packaged up and self-contained.
 
If things outside of ComponentA need to access the ServiceA, you generally want to use our lazy-loading systems to register the service and provide it lazily.  For those, you technically provide the service in the lazy module, but nobody references it directly.  Instead, when you register it with our lazy load logic, the lazy load logic handles loading
It's a bit complicated



## Reference

[Introduction to services and dependency injection](https://angular.io/guide/architecture-services)
