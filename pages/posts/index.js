import Link from "next/link";
import Head from "next/head";
import ArticleItem from 'components/articleItem'

function Post({list}) {
    return (
        <div>
            <Head>
                <script src="/public.js"></script>
            </Head>
          <div>
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
