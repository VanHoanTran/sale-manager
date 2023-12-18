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
      className={`z-30 origin-left ${
        isOpenSideNav
          ? 'animate-slide-to-right absolute transition-all lg:sticky'
          : 'animate-slide-to-left absolute'
      } h-full border-r border-slate-300 bg-slate-50 text-slate-800`}
    >
      <div className="flex w-full items-center justify-between">
        <Logo />
        {
          <div className="lg:hidden">
            <IconButton
              icon={<XMarkIcon />}
              onClick={closeSideNav}
            ></IconButton>
          </div>
        }
      </div>
      <NavBarLinks />
    </div>
  );
};

export default SideBar;
