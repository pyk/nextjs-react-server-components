async function fetchData(): Promise<Array<number>> {
    const eth =
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD";
    const btc =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD";
    const [ethRes, btcRes] = await Promise.all([fetch(eth), fetch(btc)]);
    if (ethRes.status !== 200) {
        throw new Error(`Status ${ethRes.status}`);
    }
    if (btcRes.status !== 200) {
        throw new Error(`Status ${btcRes.status}`);
    }
    const ethJson = await ethRes.json();
    const btcJson = await btcRes.json();

    return [ethJson.ethereum.usd, btcJson.bitcoin.usd];
}

function Price() {
    return <>price</>;
}

export default function Page() {
    return <p>ok</p>;
}
