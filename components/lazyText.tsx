import React, {useState} from "react";

export default function LazyTest() {
    const [nowTime,setTime] = useState<number|string>(Date.now());
    const changeTime=async()=>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return <div>
        <button onClick={()=>{changeTime()}}>{nowTime}</button>
    </div>
}
