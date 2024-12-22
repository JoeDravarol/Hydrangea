import { cn } from '~/utils/cn';
import useExpandableSidebar from '../hooks/use-expandable-sidebar';
import SidebarBottom from './sidebar-bottom';
import SidebarContent from './sidebar-content';

export default function SidebarNav() {
  const [isExpanded, handleToggleExpand] = useExpandableSidebar();

  return (
    <nav
      id="ember4"
      className={cn('ynab-u sidebar logged-in', {
        'sidebar-resized-collapsed': !isExpanded,
      })}
      style={{ width: isExpanded ? 260 : 56 }}
      role="navigation"
    >
      <div className="sidebar-left">
        <SidebarContent />
        <SidebarBottom
          isExpanded={isExpanded}
          handleToggleExpand={handleToggleExpand}
        />
      </div>
    </nav>
  );
}
