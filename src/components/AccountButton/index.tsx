import { NavLink } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';

const user: FieldValues = {
  username: 'Carolyn Perkins',
  imgUrl: 'https://picsum.photos/24?random=2',
  role: 'Admin',
};

const AccountButton = () => {
  const { username, imgUrl, role } = user;
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
        <p className="text-sm font-light text-slate-600 ">{role}</p>
        <p>{username}</p>
      </div>
    </NavLink>
  );
};

export default AccountButton;
