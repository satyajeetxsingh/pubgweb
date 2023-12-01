
export default function GameSection(params) {
    return (
        <section class="bg-white">
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 mt-10">
                <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="House"
                                src="https://imgeucdn.gamespress.com/cdn/files/Krafton/2023/11/142029-03b1cb35/2023_PUBGBattlegrounds_RondoReveal_Image_png_jpgcopy.jpg?otf=y&lightbox=y&ex=2024-01-01+03%3A00%3A00&sky=1940615ba24389903707e4357164b1d71fee2da59f094cd6aa51931b6d7f0a3a&w=1024&maxheight=4096&mode=pad&format=jpg"
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div class="relative flex items-center bg-gray-100">
                        <span
                            class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div class="p-8 sm:p-16 lg:p-24">
                            <h2 class="text-2xl font-bold sm:text-4xl">
                                <span class="text-zinc-600 text-4xl">DECEMBER 14.</span>
                                <br/>
                                {/* <hr class="border-2 border-yellow-400 border-dashed w-[90%] sm:w-[55%]"/> */}
                                <span class="text-zinc-600">Creators will rewrite the history.</span>
                            </h2>

                            <p class="mt-4 text-normal text-zinc-600 font-medium">
                                Get a hand on brand new PUBG, bring your squad and GET READY for a big change in #BATTLEGROUNDS.
                            </p>

                            <a
                                href="/#"
                                class="mt-8 inline-block rounded border border-white bg-yellow-400 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-zinc-700 active:text-yellow-500"
                            >
                                Avilable soon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    )
};
