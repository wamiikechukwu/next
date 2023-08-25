import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script';


export default function FirstPost(){
    return(
    <>  
    <Head>
      <title>This is the page-post</title>
    </Head>
    <Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy="lazyonload"
    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}/>
    <img src="/../public/images/profile.jpg" alt="Your Name"/>
      <h1>First Post</h1>
      <h2><Link href="/">back to home</Link></h2>
    </>
    )
}