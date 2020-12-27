import React from "react";
import Son1 from "./son1";
import Son2 from "./son2";

function Father1() {
  return (
    <div className='father1'>
      <Son1 />
      <Son2 />
    </div>
  )
}

export default Father1