import Head from "next/head"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

interface Props {
  children: JSX.Element
}


const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Renda</title>
      </Head>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
