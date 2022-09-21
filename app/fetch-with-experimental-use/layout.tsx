import React from "react";
import type { ReactNode } from "react";

// NOTE: we can use this but it will get rendered multiple times
import { experimental_use as use } from "react";

export const config = {
    revalidate: 0,
};

interface LayoutProps {
    children: ReactNode;
}

async function fetchData() {
    const ethUrl =
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD";
    const res = await fetch(ethUrl);
    const value = await res.json();
    console.log("DEBUG: fetchData", value);
    return value.ethereum.usd;
}

const cache = {};

export default function AppLayout(props: LayoutProps) {
    const ethPrice = use(fetchData());
    const btcPrice = use(fetchData());
    return (
        <html>
            <head>
                <title>Coin price</title>
            </head>
            <body>
                <header>this is main</header>
                <main>
                    {ethPrice} {btcPrice}
                </main>
                <footer>this is footer</footer>
            </body>
        </html>
    );
}
