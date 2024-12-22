import { useLocation } from 'react-router';
import CollapsedMenuButton from './collapsed-menu-button';
import AccountsIcon from './icons/accounts-icon';
import BudgetIcon from './icons/budget-icon';
import ReportsIcon from './icons/reports-icon';
import NavLink from './nav-link';

export default function NavMain() {
  const location = useLocation();
  const activePathname = location.pathname;

  return (
    <ul className="nav-main">
      <CollapsedMenuButton />

      <NavLink
        label="Budget"
        linkTo="/"
        className="navlink-budget"
        isActive={activePathname === '/'}
      >
        <BudgetIcon />
      </NavLink>

      <NavLink
        label="Reflect"
        linkTo="/reflect"
        className="navlink-reports"
        isActive={activePathname === '/reflect'}
      >
        <ReportsIcon />
      </NavLink>

      <NavLink
        label="All Accounts"
        linkTo="/accounts"
        className="navlink-reports"
        isActive={activePathname === '/accounts'}
      >
        <AccountsIcon />
      </NavLink>
    </ul>
  );
}
