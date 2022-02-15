import { useEffect, useState } from "react"
import { useMoralisSolanaApi } from "react-moralis"

export default function Dashboard({logout, user}) {

    const walletAddress = user.get('solAddress')

    const SolanaApi = useMoralisSolanaApi()

    const [solBalance, setSolBalance] = useState('')
    const [splTokens, setSplTokens] = useState([{}])
    const [nfts, setNfts] = useState([{}])

    const [isMounted, setIsMounted] = useState(false)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await SolanaApi.account.balance({
                    network: 'devnet',
                    address: walletAddress
                })
                setSolBalance(result.solana)
            } catch (error) {
                console.log(error)
            }

            try {
                const result = await SolanaApi.account.getSPL({
                    network: 'devnet',
                    address: walletAddress
                })
                setSplTokens(result)
            } catch (error) {
                console.log(error)
            }

            try {
                const result = await SolanaApi.account.getNFTs({
                    network: 'devnet',
                    address: walletAddress
                })
                setNfts(result)
            } catch (error) {
                console.log(error)
            }
            setIsMounted(true)
        }
        fetchData()
    }, [])

    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center py-10 px-4 bg-black overflow-auto">
            <button className="text-white self-end" onClick={logout}>logout</button>
            <p className="text-white font-bold text-xl md:text-3xl">wallet address</p>
            <p className="text-white mt-2 mb-8 text-[0.6rem] md:text-lg">{walletAddress}</p>
            <div className="w-full h-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-pink rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <p className="text-2xl md:text-4xl">solana balance</p>
                    {isMounted && <p className="mt-4 md:mt-10 text-3xl md:text-6xl">{solBalance.slice(0, 6)} <span>SOL</span></p>} 
                </div>
                <div className="bg-green rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <p className="text-2xl md:text-4xl">spl tokens {isMounted ? splTokens.length : ''}</p>
                    <ul className="list-disc ml-8 mt-4 md:mt-10 text-md md:text-lg">
                        {splTokens.length > 0 && isMounted && splTokens.map((token, i) => (
                            <li key={i}>{token.associatedTokenAddress.slice(0, 12)}... {''} {token.amount}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-cyan md:col-span-2 rounded-2xl drop-shadow-md px-2 py-2 md:px-4 md:py-4 md:text-lg">
                    <p className="text-2xl md:text-4xl">nfts {isMounted ? nfts.length : ''}</p>
                    <ul className="list-disc px-4 mt-4 md:mt-10 text-md md:text-lg">
                        {nfts.length > 0 && isMounted && nfts.map((nft, i) => (
                          <li className="text-ellipsis overflow-hidden" key={i}>{nft.associatedTokenAddress}</li>  
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}