import { Observable } from 'rxjs/Observable'
/**
 * fruitsObservable表示数据的生产者
 * next是交付数据信息
 * error是交付错误信息
 * complete是通知没有订阅者没有交付的数据了
 * error和complete这2个只能发生其中一个，不论那个发生，都会中断执行的数据流
 * pull push 表示的数据的提取和推送
 */
const fruitsObservable = Observable.create(observer => {
  observer.next('apple')
  observer.next('orage')
  // observer.error(new Error('someone took my fruit.'))
  setTimeout(() => {
    observer.next('lem')
    observer.complete()
  }, 2000)
})
/*
  数据的使用者
 */
const fruitsObserver = {
  next: data => console.log(data),
  error: error => console.log(error.message),
  complete: () => console.log('done!')
}

console.log('----- before subscribe -----')
/*
  订阅数据
 */
const fruitsSubscription = fruitsObservable.subscribe(fruitsObserver)
console.log('----- after subscribe -----')
/*
  取消订阅数据
 */
setTimeout(() => {
  fruitsSubscription.unsubscribe()
}, 1000)
