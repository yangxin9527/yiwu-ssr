import Head from 'next/head'
import Link from 'next/link';
import {Button} from 'antd-mobile'
import "../styles.less"

export default function Home() {


  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>

      </Head>

      <main>
        <h1 className='link' >red</h1>
          <Button>test</Button>

          <div className="example">Hello World!<h1 className='green' >red</h1></div>
        <Link href={'/posts'}>   Welcome !!!</Link>


      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .link{
          color:red;
        }
      `}</style>

      <style jsx global>{`
     
      `}</style>
    </div>
  )
}
