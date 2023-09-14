import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script';
import Image from 'next/image'
import Layout from '../../component/layout';


export default function FirstPost() {
  return (
    <>
      <Layout>

        <Head>
          <title>This is the page-post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyonload"
          onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} />
        <Image
          src="/images/profile.jpg"
          width={144}
          height={144}
          alt='am image' />
        <h1>First Post</h1>
        <h2><Link href="/">back to home</Link></h2>
      </Layout>
    </>
  )
}