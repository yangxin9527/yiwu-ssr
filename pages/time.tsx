import React,{useState} from "react";
import dynamic from "next/dynamic";

const LazyTest = dynamic(import('components/lazyText'))

function Time() {
    const [nowTime,setTime] = useState<number|string>(Date.now());
    const [show,setShow] = useState<boolean>(false);
    const changeTime=async()=>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return <div>
        {nowTime}
        <button onClick={()=>{changeTime()}}>change time format</button>
        <br/>
        <button onClick={()=>{setShow(!show)}}>set show</button>

        {show&&<LazyTest/>}


    </div>
}
export default Time
