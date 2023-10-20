import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="text-slate-500 h-screen flex flex-row">
      <SideBar />
      <main className="relative flex-1 ">
        <NavBar />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
