import { Link, NavLink } from 'react-router';

import Logo from './images/logo.svg';
import BasketIcon from './images/basket.svg';

import s from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
  const navLinks = [
    { name: 'Main Page', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'All Products', path: '/products' },
    { name: 'All Sales', path: '/sales' },
  ];

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link className={s.link} to={'/'}>
          <Logo className={s.logo} />
        </Link>
      </div>
      <nav className={s.menu}>
        <ul className={s.list}>
          {navLinks.map((navLink) => (
            <li className={s.item} key={navLink.path}>
              <NavLink
                to={navLink.path}
                className={({ isActive }) =>
                  clsx(s.link, {
                    [s.active]: isActive,
                  })
                }
              >
                {navLink.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s.basket}>
        <Link className={s.link} to={'/basket'}>
          <BasketIcon className={s.basketIcon} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
