import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/debounceTime'
/*
  发生事件
  .throttleTime(1000)可以让发生事件间隔1秒交付数据
  .debounceTime(1000)是数据一个接一个的流过来时，只要间隔不超过1秒，如果超过设置的1秒，就会发生事件，交付数据
 */
const observable = Observable.fromEvent(
  document.getElementById('search'),
  'keyup'
).debounceTime(1000)
/*
 订阅observable
 */
observable.subscribe(data => console.log('searching...'))
