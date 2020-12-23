import Link from "next/link";
import Head from "next/head";
import ArticleItem from 'components/articleItem'
import Header from 'components/header'
import Router from "next/router";
import Btn from 'components/btn'
function historyPush(){
    Router.push({
        pathname:'c',
        query:{
            name:'仓'
        }
    })
}

function Post({list}) {
    return (
        <div>
            <Head>
                <script src="/public.js"></script>
            </Head>
            <div>
                <Header>头</Header>
                <Btn>按钮</Btn>
                <Link  href={{pathname:'/c',query:{name:'bbbbbbbbb'}}}>去b</Link>
                <Link  href={{pathname:'/time'}}>去time</Link>
                <button onClick={()=>{historyPush()}}>test</button>
                {list.map((item, i) => (
                    <Link href={'/posts/' + item.FindCode} key={i}>
                        <div>
                            <ArticleItem
                                ellipsis
                                item={item}
                                enableClick
                            />

                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}


export async function getStaticProps({params}) {
    const res = await fetch('https://www.xsdyiwu.com/api/find/FindList', {
        method: 'POST'
    })
    const data = await res.json()
    let list = []
    if (data && data.code === '200') {
        list = data.data.list
    }
    console.log('列表', 'getStaticProps')
    // 通过 props 参数向页面传递博文的数据
    return {
        props: {
            list
        }
    }
}

export default Post
