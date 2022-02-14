export default function Dashboard() {
    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center py-10 px-4 bg-black overflow-auto">
            <button className="text-white self-end">logout</button>
            <p className="text-white font-bold text-xl md:text-3xl">wallet address</p>
            <p className="text-white mt-2 mb-8 text-[0.6rem] md:text-lg">F1o6ykG8yM4kWAg2gCszxjkREd5S7JJnhetCqZszyoSr</p>
            <div className="w-full h-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-pink rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <p className="text-2xl md:text-4xl">solana balance</p>
                    <p className="mt-4 md:mt-10 text-3xl md:text-6xl">1.2356 <span>SOL</span></p>
                </div>
                <div className="bg-green rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <p className="text-2xl md:text-4xl">spl tokens 2</p>
                    <ul className="list-disc ml-8 mt-4 md:mt-10 text-md md:text-lg">
                        <li>Gh9ZwEm... {''} 1000</li>
                        <li>Gh9ZwEm... {''} 1000</li>
                    </ul>
                </div>
                <div className="bg-cyan md:col-span-2 rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <p className="text-2xl md:text-4xl">nfts 1</p>
                    <ul className="list-disc px-4 mt-4 md:mt-10 text-md md:text-lg">
                        <li>Gh9ZwEmwe8rewrew...</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}