import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import LayoutProvider from '../../contexts/LayoutProvider';

const Layout = () => {
  return (
    <LayoutProvider>
      <div className="relative flex h-screen flex-auto flex-row text-slate-500 ">
        <SideBar />
        <main className="relative flex h-full w-full flex-auto flex-col justify-between overflow-auto ">
          <NavBar />
          <div className="flex-grow p-4 md:p-6">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </LayoutProvider>
  );
};

export default Layout;
