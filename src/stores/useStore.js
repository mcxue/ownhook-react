import {useState,createContext} from "react";

const store = {
  allTime:100
}

function useStore(){
  let [restTime, setRestTime] = useState(store.allTime)
  const minusTime = (time)=>{
    if(restTime<=0){
      alert('时间用完了')
      return
    }else if(time>restTime){
      alert('时间不够了')
      return
    }
    setRestTime(restTime-time)
  }
  return {restTime,minusTime}
}
const StoreContext = createContext(null)
export {useStore,StoreContext}
