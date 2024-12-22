import LogoIcon from './icons/logo-icon';

export default function CollapsedMenuButton() {
  return (
    <li className="navlink sidebar-nav-menu-collapsed">
      <button className="js-sidebar-nav-menu" type="button">
        <LogoIcon />
      </button>
    </li>
  );
}
