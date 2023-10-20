import { NavLink } from 'react-router-dom';
import { User } from '../../constants/User';

const user: User = {
  name: 'Carolyn Perkins',
  imgUrl: 'https://picsum.photos/24?random=2',
  role: 'Admin',
};

const AccountButton = () => {
  const { name, imgUrl, role } = user;
  return (
    <NavLink to={'account/:id'} className="flex items-center ">
      <img
        className="rounded-full"
        width="32px"
        height="32px"
        src={imgUrl}
        alt="person"
      />

      <div className="ml-2 hidden md:block">
        <p className="font-light text-sm text-slate-600 ">{role}</p>
        <p>{name}</p>
      </div>
    </NavLink>
  );
};

export default AccountButton;
