import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from "../components/SideBar"
import UserProfile from "../components/UserProfile"
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>Profile| LMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProfile/>
    </div>
  )
}

export default Home
