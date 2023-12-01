
export default function PUBGNavbar() {

    return (
        <header class="bg-white dark:bg-white">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="md:flex md:items-center md:gap-12">
                        <a class="block text-yellow-400" href="/">
                            <span class="sr-only">Home</span>
                            <img src="https://imgeucdn.gamespress.com/cdn/files/Krafton/2021/06/30085219-74e212f6-1df2-4ee9-9b45-5250ec318c73/PUBG_BG_Full_Flat_Black_2048_png_jpgcopy.jpg?otf=y&lightbox=y&ex=2024-01-01+03%3A00%3A00&sky=219920e57ed72c05c3200dae6948659783d351b1694daf90958766c5c10c787e&w=1024&maxheight=4096&mode=pad&format=jpg" class="w-32" alt="" />
                        </a>
                    </div>

                    <div class="hidden md:block">
                        <nav aria-label="Global">
                            <ul class="flex items-center gap-6 text-base font-medium">
                                <li>
                                    <a
                                        class="text-gray-700/100 transition hover:text-yellow-400"
                                        href="/"
                                    >
                                        
                                    </a>
                                </li>

                                {/* <li>
                                    <a
                                        class="text-gray-700/100 transition hover:text-yellow-400"
                                        href="/"
                                    >
                                        KRAFTON
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-700/100 transition hover:text-yellow-400"
                                        href="/"
                                    >
                                        LIVE Events
                                    </a>
                                </li> */}

                                {/* <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >

                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >

                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >

                                    </a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <div class="mt-1 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>

                            </div>
                            {/* <a
                                class="rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium text-white shadow"
                                href="/"
                            >
                                Login
                            </a> */}

                            <div class="hidden sm:flex">
                                <a
                                    class="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:text-zinc-50 hover:bg-gray-900"
                                    href="/"
                                >
                                    Update Now
                                </a>
                            </div>
                        </div>

                        <div class="block md:hidden">
                            <button
                                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};
