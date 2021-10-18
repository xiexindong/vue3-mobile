// vue3.0 响应式原理

// const { trigger } = require("vant/lib/utils");

// 1) 2.0 默认会递归 2). 数组改变 length 是无效的 3) 对象不存在的属性不能被拦截
let toProxy = new WeakMap() // 若引用数据表 放置的是 源对象：代理过得对象
let toRaw =  new WeakMap() // 代理过得对象:源对象


function isObject(val){
    return typeof val === 'object' && val !== null;
}

function reactive(target){
  
    //创建响应式对象
    return createReactiveObject(target)
}

function hasOwn(target,key){
    return target.hasOwnProperty(key)
}

// 创建响应式对象
function createReactiveObject(target){
    if(!isObject(target)){
        return target
    }
    // 在创建proxy 之前，有没有被代理过,如果代理过了,放回来
    let proxy = toProxy.get(target)
    if(proxy){
        return proxy
    }

    if(toRaw.has(target)){
        return target
    }

    const baseHandler = {
        get(target,key,receiver){
            debugger
            // proxy + reflect 反射
            // console.log('获取-target',target)
            // console.log('获取-key',key)

            //收集依赖 订阅  把当前的key 和 这个effect 对应起来

            track(target,key);// 如果目标上的这个key 发生变化执行

            let result = Reflect.get(target,key,receiver)
            return isObject(result)? reactive(result): result  // 是个递归
        },
        set(target,key,value,receiver){
            // console.log('target',target)
            // console.log('key',key)
            // console.log('value',value)
            // console.log(receiver)
            debugger
            let hadkey = hasOwn(target,key)
            let oldValue = target[key]
            let res = Reflect.set(target,key,value,receiver) // 设置是否成功 有返回值
            if(!hadkey){
                trigger(target,'add',key)
                console.log('新增属性')
            }else if(oldValue !== value){ // 未来屏蔽无意义的修改
                trigger(target,'set',key)
                console.log('修改属性')
            }
            // 如果设置没有成功, 如果这个对象不可以被修改，writable
            return res
        },
        deleteProperty(target,key){
            let res = Reflect.deleteProperty(target,key)
            return res
        }
    }


    let observed = new Proxy(target,baseHandler) //se6
    toProxy.set(target, observed) // 原对象: 代理后的对象
    toRaw.set(observed,target) //代理过得对象:源对象
    return observed

}

// let object = { name:{ n: 'z'} }

// let proxy = reactive(object) // 多层代理

// reactive(object)   // 这种方式是每次都要返回 一个new proxy  代理的是同一个对象，如果对象是代理过得，就不需要new
// reactive(object)
// reactive(object)

// reactive(proxy)
// reactive(proxy)  // 对代理过得对象进行处理  特意生命了两个对象：toRaw, toProxy


// let arr  = [1,2,3]

// let proxy = reactive(arr)



// proxy.push(4)

// proxy.length = 100

function trigger( target, type, key){
    let deppsMap = targetsMap.get(target)

    if(deppsMap){
        let deps = deppsMap.get(key)
        if(deps){
            deps.forEach(effect => {
                effect()
            });
        }
    }
}


// 响应式， 副作用
function effect(fn){
    // 需要把fn这个函数编程响应式的函数
    let effect = createReactiveEffect(fn)
    effect()

}


// 栈 先进先出
let activeEffectStacks = [] 

// {
//     target:{
//         key:[fn,fn]
//     }
// }
let targetsMap  = new WeakMap();

function track(target,key){//如果这个target里面的key 变化,就执行数组里面的方法
    let effect = activeEffectStacks(activeEffectStacks.length - 1)

    if(effect){
        // 有对应关系，才创建关联
        let deppsMap = targetSMap.get(target)
        if(!deppsMap){
            targetSMap.set(target,deppsMap = new Map)
        }

        let deps =  deppsMap.get(key)
        if(!deps){
            deppsMap.set(key,  deps =  new Set())
        }

        if(!deps.has(effect)){
            deps.add(effect) 
        }

        // 动态创建依赖
    }
}


function createReactiveEffect(fn) {
    debugger
    let effect  = function(){  // 这个就是要创建的响应式effect
        
        return run(effect,fn) // 让 fn 执行, 把 effect 存放在栈中

    }

    return effect
}

function run(effect,fn){ // 运行fn , 并将effect 存起来
    try {
        activeEffectStacks.push(effect)
        fn() 
    } catch (error) {
        activeEffectStacks.pop()

    }    

   
}


// 依赖收集  发布订阅、、、

let obj = reactive({name:'zhangsan'})


effect(()=>{
    console.log(1111,obj.name)
})


obj.name = 'js'