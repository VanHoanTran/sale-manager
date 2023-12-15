import { XMarkIcon } from '@heroicons/react/24/outline';
import { useLayoutContext } from '../../../hooks/useLayoutContext';
import IconButton from '../../common/Buttons/IconButton';
import Logo from './Logo';
import NavBarLinks from './NavBarLinks';

const SideBar = () => {
  const { isOpenSideNav, setIsOpenSideNav } = useLayoutContext();
  const closeSideNav = () => setIsOpenSideNav(false);
  return (
    <div
      className={`absolute z-30 ${
        isOpenSideNav
          ? 'animate-slide-to-right block origin-left transition-all'
          : 'animate-slide-to-left origin-left'
      } h-full border-r border-slate-300 bg-slate-50 text-slate-800 `}
    >
      <div className="flex w-full items-center justify-end">
        <Logo />
        <IconButton icon={<XMarkIcon />} onClick={closeSideNav}></IconButton>
      </div>
      <NavBarLinks />
    </div>
  );
};

export default SideBar;
