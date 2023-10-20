import { useState } from 'react';
import IconButton from '../Buttons/IconButton';
import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  BellIcon,
  Cog8ToothIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import AccountButton from '../AccountButton';

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function menuHandler() {
    setIsOpenMenu(open => !open);
  }
  return (
    <nav className="h-16 pl-1 md:pl-3 w-full font-semibold  border-b border-slate-300 flex justify-between items-center">
      <IconButton
        onClick={menuHandler}
        icon={isOpenMenu ? <Bars3BottomLeftIcon /> : <Bars3Icon />}
      />

      <div className="flex items-center pr-4 md:pr-6">
        <IconButton onClick={menuHandler} icon={<BellIcon />} />
        <IconButton onClick={menuHandler} icon={<Cog8ToothIcon />} />
        <IconButton
          onClick={menuHandler}
          icon={isOpenMenu ? <MoonIcon /> : <SunIcon />}
        />
        <AccountButton />
      </div>
    </nav>
  );
};

export default NavBar;
