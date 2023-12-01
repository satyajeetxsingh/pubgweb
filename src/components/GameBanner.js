
export default function GameBanner(params) {
    return (

        <section class="mt-12">

            <div class="mt-20">
                <h2 class="text-2xl text-slate-700 font-extrabold sm:text-3xl sm:mx-10 mx-10">FEATURED</h2>
            </div>

            <div class="relative bg-[url(https://imgeucdn.gamespress.com/cdn/files/Krafton/2022/08/030943-b52f7d71/2022_PUBG_BATTLEGROUNDS_19.1_FoldedShield-2.jpg?otf=y&lightbox=y&ex=2024-01-01+03%3A00%3A00&sky=a56853dc47338835f47815258f9e6ceb58645fc96570e689c6ba4d79bec58c0c&w=1024&maxheight=4096&mode=pad&format=jpg)] bg-cover bg-center bg-no-repeat mt-16">
                <div
                    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center items-center"
                >
                    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                            See you in

                            <strong class="block font-extrabold text-red-600">
                                BATTLEGROUNDS.
                            </strong>
                        </h1>

                        {/* <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                        
                    </p> */}

                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                class="block w-full rounded bg-red-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto"
                            >
                                Join the CLAN
                            </a>

                            <a
                                href="#"
                                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-zinc-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                PLAY NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-12"/>
        </section>
    )

};
