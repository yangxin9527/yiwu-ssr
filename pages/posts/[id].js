import Head from "next/head";
import ArticleItem from "../../components/articleItem";

function Post({ FindData }) {
    return (
        <div>
            <Head>
                <title>{FindData.Name}</title>
                <meta name="description" content={FindData.Content}/>
            </Head>
            <ArticleItem
                item={FindData}
            />

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

    // 通过 props 参数向页面传递博文的数据
    return { props: { ...data} }
}
export default Post
