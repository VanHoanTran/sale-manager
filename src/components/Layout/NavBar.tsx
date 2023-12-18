import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  BellIcon,
  Cog8ToothIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import AccountButton from '../AccountButton';
import IconButton from '../common/Buttons/IconButton';
import { useLayoutContext } from '../../hooks/useLayoutContext';

const NavBar = () => {
  const { setIsOpenSideNav, isOpenSideNav } = useLayoutContext();
  const menuHandler = () => {
    setIsOpenSideNav(open => !open);
  };
  console.log(isOpenSideNav);
  return (
    <nav className="sticky top-0 z-10 flex h-16 w-full flex-shrink-0 items-center justify-between border-b  border-slate-300 bg-slate-50 pl-1 font-semibold md:pl-3">
      <IconButton
        onClick={menuHandler}
        icon={isOpenSideNav ? <Bars3BottomLeftIcon /> : <Bars3Icon />}

      />

      <div className="flex items-center pr-4 md:pr-6">
        <IconButton onClick={menuHandler} icon={<BellIcon />} />
        <IconButton onClick={menuHandler} icon={<Cog8ToothIcon />} />
        <IconButton
          onClick={menuHandler}
          icon={isOpenSideNav ? <MoonIcon /> : <SunIcon />}
        />
        <AccountButton />
      </div>
    </nav>
  );
};

export default NavBar;
