
export default function HomepageGrid(params) {
    return (
        <section class="bg-white">
            <div class="mt-20 bg-white dark:bg-white">
                <h2 class="text-2xl text-slate-700 font-extrabold sm:text-3xl sm:mx-10 mx-8">UPDATES</h2>
            </div>
            <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 mt-6">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div class="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 class="text-xl font-bold text-zinc-700 sm:text-3xl">In GAME</h2>

                                <p class="mt-4 text-zinc-600">
                                    Check out the latest in game events, prizes and rewards!
                                </p>
                            </header>

                            <a
                                href="/#"
                                class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                            >
                                Sneak Peek
                            </a>
                        </div>
                    </div>

                    <div class="lg:col-span-2 lg:py-8">
                        <ul class="grid grid-cols-2 gap-4">
                            <li>
                                <a href="/#" class="block group">
                                    <img
                                        src="https://imgeucdn.gamespress.com/cdn/files/Krafton/2023/07/120906-66fd97f9/PUBG_Survivor_Summerfest_Bluebomb_Rush_Mode.jpg?otf=y&lightbox=y&ex=2024-01-01+03%3A00%3A00&sky=fd1f464f0dbc8f061b9922938425fa125c6fc1962b1b9aaceb00fab0efbd6857&w=1024&maxheight=4096&mode=pad&format=jpg"
                                        alt=""
                                        class="object-cover w-full rounded aspect-square"
                                    />

                                    <div class="mt-3">
                                        <h3
                                            class="font-medium text-zinc-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Something new is dropping.
                                        </h3>

                                        <p class="mt-1 text-sm text-zinc-600">Game mode</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="/#" class="block group">
                                    <img
                                        src="https://imgeucdn.gamespress.com/cdn/files/Krafton/2023/07/120906-66fd97f9/PUBG_Survivor_Summerfest_Key_Image.jpg?otf=y&lightbox=y&ex=2024-01-01+03%3A00%3A00&sky=5a79014bd3ad0368d4b9c08bc7f16bde87ccaecef9e7c9581e7a342bd5dc6c6c&w=1024&maxheight=4096&mode=pad&format=jpg"
                                        alt=""
                                        class="object-cover w-full rounded aspect-square"
                                    />

                                    <div class="mt-3">
                                        <h3
                                            class="font-medium text-zinc-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            PUBG: Survivor Summerfest
                                        </h3>

                                        <p class="mt-1 text-sm text-zinc-600">Event</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    )
};
