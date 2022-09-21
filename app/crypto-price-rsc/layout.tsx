import React from "react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

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
    return value.ethereum.usd;
}

const cache = {};

export default function AppLayout(props: LayoutProps) {
    const price = cache["price"];
    fetchData().then((data) => {
        console.log("DEBUG: data", data);
        cache["price"] = data;
    });
    return (
        <html>
            <head>
                <title>Coin price</title>
            </head>
            <body>
                <header>this is main</header>
                <main>{price}</main>
                <footer>this is footer</footer>
            </body>
        </html>
    );
}
