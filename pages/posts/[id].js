import Head from "next/head";
import ArticleItem from "../../components/articleItem";
import Link from "next/link";

function Post({ FindData,HobbiesFindList }) {
    const {Name,Content,time,Avatar,Image}= FindData;
    return (
        <div>
            <Head>
                <title>{Name}</title>
                <meta name="description" content={Content}/>
            </Head>

            <div className="antialiased">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                    <header className="flex justify-between items-center py-1">
                        <div><a aria-label="Tailwind CSS Blog" href="/">
                            <img className='w-16' src="/logo.png" alt=""/>
                        </a></div>
                        <div className="text-base leading-5">
                            <Link href="/" >
                                <a className="font-medium text-gray-500 hover:text-gray-700">
                                    返回首页 →
                                </a>
                            </Link>
                        </div>
                    </header>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                    <main>
                        <article className="xl:divide-y xl:divide-gray-200">
                            <header className="pt-6 xl:pb-10">
                                <div className="space-y-1 text-center">
                                    <dl className="space-y-10">
                                        <div>
                                            <dt className="sr-only">发布于</dt>
                                            <dd className="text-base leading-6 font-medium text-gray-500">
                                                {time}
                                            </dd>
                                        </div>
                                    </dl>
                                    <div><h1
                                        className="text-2xl leading-6 font-extrabold text-gray-900 tracking-tight sm:leading-4">今天天气很好正好盘串</h1></div>
                                </div>
                            </header>
                            <div
                                className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20">
                                <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                                    <dd>
                                        <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                                            <li className="flex items-center space-x-2"><img src={Avatar}
                                                alt="" className="w-10 h-10 rounded-full" />
                                                <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                                                    <dt className="sr-only">作者</dt>
                                                    <dd className="text-gray-900">{Name}</dd>
                                                </dl>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">

                                    <div className="prose max-w-none p-6">
                                        {Content}
                                        <img className='w-3/4  m-auto mt-4 h-auto'  src={Image[0]} alt=""/>
                                    </div>
                                </div>
                                <footer
                                    className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
                                    <div className="space-y-8 py-8">
                                        <div><h2 className="text-xs tracking-wide uppercase text-gray-500">上一篇帖子</h2>
                                            <div className="text-teal-500 hover:text-teal-600">
                                                <Link href="/" >周五盘串</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-8 py-8">
                                        <div><h2 className="text-xs tracking-wide uppercase text-gray-500">下一篇帖子</h2>
                                            <div className="text-teal-500 hover:text-teal-600">
                                                <Link href="/" >周一打卡</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8">
                                        <Link href="/" >
                                            <a className="text-teal-500 hover:text-teal-600" >← 返回首页</a>
                                        </Link>
                                    </div>
                                </footer>
                            </div>
                        </article>
                    </main>
                </div>
            </div>

        </div>
    )
}


export async function getStaticPaths() {
    // 调用外部 API 获取博文列表
    const res = await fetch('https://www.xsdyiwu.com/api/find/FindList',{
        method:'POST'
    })
    const data = await res.json()
    let paths = []
    if(data&&data.code==='200'){
        let list = data.data.list
        paths = list.map((post) => `/posts/${post.FindCode}`)
    }
    console.log('[id] 详情','getStaticPaths')
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
// 在构建时也会被调用
export async function getStaticProps({ params }) {
    let  res = await fetch('https://www.xsdyiwu.com/api/find/FindDetail',{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            FindCode: params.id
        })
    })
    res = await res.json();
    let data=null;
    console.log('[id] 列表','getStaticProps')
    if(res&&res.code==='200'){
        data = res.data;
    }
console.log(res.data)
    // 通过 props 参数向页面传递博文的数据
    return { props: { ...data} }
}
export default Post
