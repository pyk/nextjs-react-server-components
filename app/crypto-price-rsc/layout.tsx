import React from "react";
import type { ReactNode } from "react";

export const config = {
    revalidate: 0,
};

interface LayoutProps {
    children: ReactNode;
}

export default function AppLayout(props: LayoutProps) {
    console.log("DEBUG: layout props", props);
    return (
        <html>
            <head>
                <title>Coin price</title>
            </head>
            <body>
                <header>this is main</header>
                <main>price direct here</main>
                <footer>this is footer</footer>
            </body>
        </html>
    );
}
