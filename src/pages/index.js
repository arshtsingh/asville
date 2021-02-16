import Head from 'next/head'
import HomePage from '../components/HomePage/'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>arshville</title>
        <link rel='icon' href='../../public/favicon.ico' />
      </Head>
      <div className="flex flex-wrap items-center">
        <HomePage />
      </div>
    </div>
  )
}