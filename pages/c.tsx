import {useState} from 'react'
import Link from "next/link";
import {withRouter} from 'next/router'
import axios from 'axios'


function PagesC({router,data}) {
const [color,setColor] = useState('blue')
    return <div>
        <Link href={'/'}>go home</Link>
            <h3>{router.query.name}</h3>
        <h1>
            当前页：{data.total}
        </h1>
        <button onClick={()=>{setColor(color==='blue'?'yellow':'blue')}}>CHANGE COLOR</button>
        <Link href={{
            pathname:'/c',
            query:{
                name:333333
            }
        }
        }>去 333333</Link>
        <br/>
        <Link href={{
            pathname:'/c',
            query:{
                name:222
            }
        }
        }>去 222</Link>
        <style jsx>
            {`
        div{color:${color};}
    `}
        </style>
    </div>
}
export async function getStaticProps(){
    const promise =new Promise((resolve)=>{
        axios({
            method:'post',
            url:'https://www.xsdyiwu.com/api/find/FindList',
            data:{}
        }).then((res)=>{
            if(res.status===200)
            resolve(res.data)
        }).catch((err)=>{
            console.log('err')
        })
    })
    const data:any = await promise;

    return {
        props:{
            data:data?.code==='200'?data?.data:[]
        }
    }
}

export default withRouter(PagesC)
