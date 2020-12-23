import Link from "next/link";

export default function posts() {
    return <div>
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
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 md:grid-cols-3 lg:col-span-3">
                    <a href="/components/application-ui/application-shells/stacked" className="block group">
                        <figure>
                            <div
                                className="relative rounded overflow-hidden transition transform duration-150 ease-in-out">
                                <img className="w-full h-auto"
                                     src="/img/category-thumbnails/application-shells-stacked.svg" alt="" />
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-center rounded-md border-gray-900 opacity-15 border transition ease-in-out duration-150"></div>
                                <div
                                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                            </div>
                            <figcaption className="mt-3">
                                <p className="text-sm font-medium text-gray-900">Stacked Layouts</p>
                                <p className="text-sm text-gray-500">8 components</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a href="/components/application-ui/application-shells/sidebar" className="block group">
                        <figure>
                            <div
                                className="relative rounded overflow-hidden transition transform duration-150 ease-in-out">
                                <img className="w-full h-auto"
                                     src="/img/category-thumbnails/application-shells-sidebar.svg" alt="" />
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-center rounded-md border-gray-900 opacity-15 border transition ease-in-out duration-150"></div>
                                <div
                                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                            </div>
                            <figcaption className="mt-3">
                                <p className="text-sm font-medium text-gray-900">
                                    Sidebar Layouts
                                </p>
                                <p className="text-sm text-gray-500">8 components</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a href="/components/application-ui/application-shells/multi-column" className="block group">
                        <figure>
                            <div
                                className="relative rounded overflow-hidden transition transform duration-150 ease-in-out">
                                <img className="w-full h-auto"
                                     src="/img/category-thumbnails/application-shells-multi-column.svg" alt="" />
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-center rounded-md border-gray-900 opacity-15 border transition ease-in-out duration-150"></div>
                                <div
                                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150"></div>
                            </div>
                            <figcaption className="mt-3">
                                <p className="text-sm font-medium text-gray-900">
                                    Multi-Column Layouts
                                </p>
                                <p className="text-sm text-gray-500">3 components</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>

    </div>
}
