import Link from "next/link";
import ArticleItem from 'components/articleItem'


function Post({list}) {
    console.log(list)
    return (
        <div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <header className="flex justify-between items-center py-1">
                    <div><a aria-label="Tailwind CSS Blog" href="/">
                        <img className='w-16' src="/logo.png" alt=""/>
                    </a></div>
                    <div className="text-base leading-5">
                    <span className="font-medium text-gray-500 hover:text-gray-700">
                            一物文玩
                        </span>
                    </div>
                </header>
                <div className="border-t border-gray-200 pt-8 grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-5">
                    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 md:grid-cols-4 lg:col-span-4">

                        {list.map((item, i) => (
                            <Link href={'/posts/' + item.FindCode} key={i}>
                                <a className="block group">
                                    <figure>
                                        <div className="relative rounded h-72 md:h-32 overflow-hidden transition transform duration-150 ease-in-ouit ">
                                            <img className="w-full h-auto"
                                                 src={item.Image[0]} alt="" />
                                        </div>
                                        <figcaption className="m-4">
                                            <p className="text-sm font-medium w-full text-gray-900 truncate ">{item.Content}</p>
                                            <p className="mt-3 flex justify-between  text-sm text-gray-500"><img src={item.Avatar} className='w-6 h-6' alt=""/><span>{item.Name}</span></p>
                                        </figcaption>
                                    </figure>
                                </a>
                            </Link>
                        ))}

                    </div>
                </div>
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
