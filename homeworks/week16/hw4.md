```js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```
以一般的 function 呼叫換成用 call() 的方式來驗證結果 

```js
obj.inner.hello() // obj.inner.hello.call(obj.inner) => 2
obj2.hello() // obj2.hello.call(obj.inner) => 2
hello() // hello.call() => undefined / window (在非嚴格模式下) 

```