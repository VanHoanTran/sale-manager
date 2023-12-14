import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="text-slate-500 h-screen flex flex-row">
      <SideBar />
      <main className="relative h-full overflow-auto flex flex-grow flex-col justify-between ">
        <NavBar />
        <div className="p-4 md:p-6 flex-grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
