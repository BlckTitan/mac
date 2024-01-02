import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='relative w-full h-screen'>
      <nav className="fixed top-0 z-10 w-full h-fit p-4 xl:py-6 px-12 bg-blue-500 xl:text-xl xl:font text-white">
        <ul className="flex flex-col xl:flex-row xl:justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <main className="absolute w-full h-full pt-24 flex flex-col items-center">
        <div className="w-full xl:w-4/6">
            <Outlet />
        </div>

      </main>
      
    </div>
  )
};

export default Layout;
