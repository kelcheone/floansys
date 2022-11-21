import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from "../components/User/SideBar"
import UserProfile from "../components/User/UserProfile"
import LandingPage from "../components/LandingPage"
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <Head>
        <title>Profile| LMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage/>
    </div>
  )
}

export default Home
