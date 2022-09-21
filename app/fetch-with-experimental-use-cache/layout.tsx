// TODO: replace use/cache with react imports when available
import { experimental_use as use, ReactNode } from "react";

export const config = {
    revalidate: 0,
};

// @ts-ignore
const cache = (cb, ...args) => cb(...args);

async function fetchData() {
    const ethUrl =
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD";
    const res = await fetch(ethUrl);
    const value = await res.json();
    console.log("DEBUG: fetchData: value", value);
    return value.ethereum.usd;
}

export default function Layout() {
    const dataPromise = cache(fetchData);
    const data: ReactNode = use(dataPromise);

    return (
        <html>
            <head>
                <title>OK</title>
            </head>
            <body>
                <header>test</header>
                <main>{data}</main>
                <footer>test</footer>
            </body>
        </html>
    );
}
