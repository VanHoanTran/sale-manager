import { NavLink } from 'react-router-dom';

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
  return (
    <nav className="min-w-[258px] pt-4 px-2">
      <ul>
        {sections.map(section => (
          <li>
            <NavLink
              className={({ isActive }) =>
                [
                  isActive ? ' focus:bg-slate-300' : '',
                  'block px-4 py-2 rounded-lg mt-1 font-semibold text-slate-500 hover:bg-slate-300',
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
