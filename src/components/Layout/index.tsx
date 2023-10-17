import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-screen bg-slate-200 text-red-400">
      <div>This is layout part</div>
      <Outlet />
    </div>
  );
};

export default Layout;
