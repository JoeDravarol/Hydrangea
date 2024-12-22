import CaretDownIcon from '~/components/icons/caret-down-icon';
import LogoIcon from './icons/logo-icon';

export default function MenuButton() {
  return (
    <button
      className="sidebar-nav-menu sidebar-nav-menu-budget js-sidebar-nav-menu user-data"
      type="button"
    >
      <LogoIcon />

      <div className="sidebar-nav-budget-email">
        <span className="sidebar-nav-budget-email-budget">John's Budget</span>
        <span className="sidebar-nav-budget-email-email button-truncate">
          johndoe@email.com
        </span>
      </div>

      <CaretDownIcon className="sidebar-nav-arrow" width="12" height="12" />
    </button>
  );
}
