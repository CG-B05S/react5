import React, { useState } from "react";

function HigherOrderComponent() {
    let [count,setCount]=useState(0);
    return(
        <>
        <h1 className="update">Counter Update:{count}</h1>
        <button className='Click' onClick={()=>setCount(count+1)}>Click Me</button>
        </>
    );
}
export default HigherOrderComponent;