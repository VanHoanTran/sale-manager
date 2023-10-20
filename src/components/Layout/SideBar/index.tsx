import Logo from './Logo';
import NavBarLinks from './NavBarLinks';

const SideBar = () => {
  return (
    <div className="h-full md:block hidden text-slate-800 bg-slate-100 border-r border-slate-300">
      <Logo />
      <NavBarLinks />
    </div>
  );
};

export default SideBar;
