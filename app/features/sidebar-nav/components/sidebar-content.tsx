import MenuButton from './menu-button';
import NavMain from './nav-main';

export default function SidebarContent() {
  return (
    <div className="sidebar-contents">
      <div className="sidebar-nav">
        <MenuButton />
        <NavMain />
      </div>
    </div>
  );
}
