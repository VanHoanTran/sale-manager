import { NavLink } from 'react-router-dom';
import { useLayoutContext } from '../../../hooks/useLayoutContext';

const sections = [
  {
    title: 'Dashboard',
    page: '/dashboard',
  },
  {
    title: 'Product List',
    page: '/productList',
  },
  {
    title: 'New Product',
    page: '/createProduct',
  },
  {
    title: 'Order List  ',
    page: '/orderList',
  },
  {
    title: 'User Settings',
    page: '/account/:id',
  },
];

const NavBarLinks = () => {
  const { setIsOpenSideNav } = useLayoutContext();
  return (
    <nav className="min-w-[258px] px-2 pt-4">
      <ul>
        {sections.map(section => (
          <li key={section.title}>
            <NavLink
              onClick={() => setIsOpenSideNav(false)}
              className={({ isActive }) =>
                [
                  isActive ? ' focus:bg-slate-300' : '',
                  'mt-1 block rounded-lg px-4 py-2 font-semibold text-slate-500 hover:bg-slate-300',
                ].join(' ')
              }
              key={section.page}
              to={section.page}
            >
              {section.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarLinks;
