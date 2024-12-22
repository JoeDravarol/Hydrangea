import SidebarContent from './sidebar-content';

export default function SidebarNav() {
  return (
    <nav
      id="ember4"
      className="ynab-u sidebar logged-in"
      style={{ width: 260 }}
      role="navigation"
    >
      <div className="sidebar-left">
        <SidebarContent />
      </div>
    </nav>
  );
}
