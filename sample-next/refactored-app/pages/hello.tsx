import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hello: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hello World Page Title</title>
                <meta property="og:title" content="Hello World" key="title" />
            </Head>
            <div>Hello World!</div>
            <div>
                use the HTML anchor for an <a href="https://nostarch.com">external link</a> and the link 
                compontent for an <Link href="/components/weather">internal page</Link>.
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </div>
        </div>
    );
};

export default Hello;