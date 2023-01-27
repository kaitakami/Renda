import ThemeSwitch from "../Theme"

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex justify-center w-screen gap-5 p-3 backdrop-blur-md">
      <div className="my-auto">
        <span className="animate-pulse">🦄</span>{' '}
        <a className="text-gray-700 dark:text-gray-200">Made by Kai Takami</a>
      </div>
      <ThemeSwitch />
    </footer>
  )
}

export default Footer
