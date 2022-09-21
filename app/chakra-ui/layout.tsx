import type { ReactNode } from "react";
import { SomeBox } from "./chakra";

export const config = {
    revalidate: 0,
};

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <html>
            <head>
                <title>Chakra UI</title>
            </head>
            <body>
                <header>this is main</header>
                <main>
                    <SomeBox />
                </main>
                <footer>this is footer</footer>
            </body>
        </html>
    );
}
