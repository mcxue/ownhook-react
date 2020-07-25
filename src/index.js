import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


let model
const getModel = () => {
  if (!model) {
    model = 100
  }
  return model
}

const useStore = () => {
  let [restTime, setRestTime] = useState(getModel())
  const handleData = (time) => {
    if (restTime.restTime <= 0) { alert('时间用完啦'); return }
    if (time > restTime.restTime) { alert('时间不够用哦'); return }
    model -= time
    setRestTime(model)
  }
  return { restTime, handleData }
}


function App() {
  return (
    <div className='app'>
      <p className='describe'>
        有一户人家，他们有一张游乐园卡，这张卡限定总共可以玩 100 个小时，家中有四个孩子，他们可以任意使用这张卡。
        <br />
        <br />
        我们现在用 自定义Hook 来实现一个孩子去游玩后，每个孩子都能得到剩余的游玩时间。
        <br />
        <br />
        源码链接：<a href='https://github.com/mcx2020/ownhook-react/blob/master/src/index.js'>https://github.com/mcx2020/ownhook-react/blob/master/src/index.js</a>
      </p>
      <main>
        <Father1 />
        <Father2 />
      </main>
    </div>
  )
}

function Father1() {
  return (
    <div className='father1'>
      <Son1 />
      <Son2 />
    </div>
  )
}

function Father2() {
  return (
    <div className='father2'>
      <Son3 />
      <Son4 />
    </div>
  )
}

function Son1() {
  const { restTime, handleData } = useStore()
  return (
    <div className='son1'>
      <div>我是Son1</div>
      <div>剩余时间：{restTime} h</div>
      <button onClick={handleData.bind(null, 1)}>玩了 1 个小时</button>
      <button onClick={handleData.bind(null, 2)}>玩了 2 个小时</button>
      <button onClick={handleData.bind(null, 3)}>玩了 3 个小时</button>
    </div>
  )
}

function Son2() {
  const { restTime, handleData } = useStore()
  return (
    <div className='son2'>
      <div>我是Son2</div>
      <div>剩余时间：{restTime} h</div>
      <button onClick={handleData.bind(null, 1)}>玩了 1 个小时</button>
      <button onClick={handleData.bind(null, 2)}>玩了 2 个小时</button>
      <button onClick={handleData.bind(null, 3)}>玩了 3 个小时</button>
    </div>
  )
}

function Son3() {
  const { restTime, handleData } = useStore()
  return (
    <div className='son3'>
      <div>我是Son3</div>
      <div>剩余时间：{restTime} h</div>
      <button onClick={handleData.bind(null, 1)}>玩了 1 个小时</button>
      <button onClick={handleData.bind(null, 2)}>玩了 2 个小时</button>
      <button onClick={handleData.bind(null, 3)}>玩了 3 个小时</button>
    </div>
  )
}

function Son4() {
  const { restTime, handleData } = useStore()
  return (
    <div className='son4'>
      <div>我是Son4</div>
      <div>剩余时间：{restTime} h</div>
      <button onClick={handleData.bind(null, 1)}>玩了 1 个小时</button>
      <button onClick={handleData.bind(null, 2)}>玩了 2 个小时</button>
      <button onClick={handleData.bind(null, 3)}>玩了 3 个小时</button>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
