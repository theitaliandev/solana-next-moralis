import Head from "next/head";
import { useMoralis } from "react-moralis";

import Auth from "../components/Auth";
import Dashboard from '../components/Dashboard'

export default function Home() {

  const {
    isAuthenticated,
    authenticate,
    logout,
    user
  } = useMoralis()

  if(!isAuthenticated) {
    return(
      <>
        <Head>
          <title>Auth | solDashboard</title>
        </Head>
        <Auth authenticate={authenticate}/>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>solDashboard</title>
      </Head>
      <Dashboard logout={logout} user={user}/>
    </>
  )
}
