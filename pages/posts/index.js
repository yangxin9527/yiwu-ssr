import Link from "next/link";

function Post({ list }) {
    console.log(list)
    return (
        <ol>
            {list.map((post,i) => (
                <li key={i}>
                    <Link href={'/posts/'+post.FindCode}>
                        <div>
                            <h3>{post.Name}-{post.Title}</h3>
                            <div>{post.Content}</div>
                            <br/>
                        </div>
                    </Link>

                </li>
            ))}
        </ol>
    )
}


export async function getStaticProps({ params }) {
    const res = await fetch('https://www.xsdyiwu.com/api/find/FindList',{
        method:'POST'
    })
    const data = await res.json()
    let list = []
    if(data&&data.code==='200'){
        list = data.data.list
    }
    console.log('列表','getStaticProps')
    // 通过 props 参数向页面传递博文的数据
    return { props: {
            list
        } }
}
export default Post
