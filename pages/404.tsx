import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout"
import bgImage from "../public/error-404-bg.jpg"
import logoImage from "../public/renda.svg"

export default function Custom404() {
  return (
    <Layout>
      <main className="absolute w-11/12 max-w-4xl text-white transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-lg md:w-3/4 top-1/2 sm:top-1/3 left-1/2">
        <div className="relative flex justify-center h-full">
          <Image className="object-cover bg-black rounded-lg lg:object-center -z-10 opacity-40" src={bgImage} fill alt="Background Image, Subaru" />
          <div className="grid grid-cols-1 py-20 mx-2 sm:py-12 sm:p-10 lg:grid-cols-2">
            <div className="py-12 m-auto text-6xl text-center md:text-9xl drop-shadow-2xl">
              <Image src={logoImage} alt="Renda logo" />
            </div>
            <div className="flex flex-col gap-3 my-auto text-center lg:text-left">
              <div className="flex justify-between px-5 py-3 text-gray-700 bg-white rounded-sm opacity-90">
                <p className="">/404</p>
                <p className="my-auto font-mono text-sm text-red-400">Doesn&apos;t exist</p>
              </div>
              <p className="text-sm text-gray-300 md:text-base md:font-bold drop-shadow-2xl">We could not find the page you were looking for.</p>
              <Link href="/" className="font-semibold text-brand-500 dark:text-brand-300 hover:underline drop-shadow-2xl">Go Home</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout >
  )
}
