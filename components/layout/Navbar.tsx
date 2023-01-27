import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='backdrop-blur-md w-screen'>
      <div className='flex justify-between max-w-lg md:max-w-2xl lg:max-w-4xl m-auto p-5'>
        <Link className='text-brand-400 text-3xl font-bold flex' href="/">
          <h1 className='hidden sm:block'>Renda</h1>
          <svg width="40" height="40" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M86.6667 96.6667C105.076 96.6667 120 81.7428 120 63.3333C120 44.9238 105.076 30 86.6667 30H40V96.6667H86.6667Z" fill="#F38744" />
            <path d="M40 30L120 130H66.6667L40 96.6667V30Z" fill="#2E90FA" />
            <path d="M92.8721 96.0901C90.8615 96.4687 88.7872 96.6667 86.6667 96.6667H40V30L92.8721 96.0901Z" fill="#53B1FD" />
          </svg>
        </Link>
        <div className='flex gap-3 my-auto'>
          <Link className='px-6 py-2.5 bg-transparent text-gray-700 dark:text-white font-bold text-xs leading-tight rounded capitalize shadow-md hover:bg-brand-400 hover:shadow-lg focus:bg-brand-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-brand-800 border border-opacity-60 border-brand-500 active:shadow-lg transition duration-150 ease-in-out my-auto' href="/">
            Sign in
          </Link>
          <Link className='px-6 py-2.5 bg-transparent text-gray-700 dark:text-white font-bold text-xs leading-tight capitalize rounded shadow-md hover:bg-brand-400 hover:shadow-lg focus:bg-brand-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-brand-800 border border-opacity-60 border-brand-500 active:shadow-lg transition duration-150 ease-in-out my-auto' href="/">
            Login
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
