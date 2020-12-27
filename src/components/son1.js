import React, {useContext} from "react";
import {StoreContext} from "../stores/useStore";

function Son1() {
  const { restTime,minusTime} = useContext(StoreContext)
  return (
    <div className='son1'>
      <div>我是Son1</div>
      <div>剩余时间：{restTime} h</div>
      <button onClick={minusTime.bind(null, 1)}>玩了 1 个小时</button>
      <button onClick={minusTime.bind(null, 2)}>玩了 2 个小时</button>
      <button onClick={minusTime.bind(null, 3)}>玩了 3 个小时</button>
    </div>
  )
}

export default Son1