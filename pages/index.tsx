import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/nav/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Boilerplate for next app with tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className="min-h-screen">
        <p>The rest of the code goes here</p>
      </main>

      <footer className={`footer`}>
        <p>The footer</p>
      </footer>
    </div>
  )
}
