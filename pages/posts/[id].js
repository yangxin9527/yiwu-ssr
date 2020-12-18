

function Post({ FindData }) {
    return (
        <div>
            <div className="articleItem">
                <div className="userBar-wrap">
                    <div className="user-info">
                        <div className="avatar-wrap" >
                            <img src={FindData.Avatar} alt=""/>

                            <div className="level">10</div>
                        </div>
                        <div className="hydrated">
                            <div className="name">{FindData.Name} <div
                                className="vip-component-wrap vip-0"></div></div>
                            <taro-text-core className="time">{FindData.time}</taro-text-core>
                        </div>
                        <div className="userItem-btn">+ 关注</div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-text">
                        <div className="topic-block-wrap">#{FindData.Topic}#</div>
                        <div className="trans-text">{FindData.Content}
                        </div>
                    </div>
                    <div className="imgList imgList-3">
                    </div>
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

    // 通过 props 参数向页面传递博文的数据
    return { props: { ...data} }
}
export default Post
