import { cn } from '~/utils/cn';
import SidebarCloseIcon from './icons/sidebar-close-icon';
import SidebarOpenIcon from './icons/sidebar-open-icon';

interface SidebarBottomProps {
  isExpanded?: boolean;
  handleToggleExpand: () => void;
}

export default function SidebarBottom({ isExpanded, handleToggleExpand }: SidebarBottomProps) {
  return (
    <div className="sidebar-bottom">
      <button
        className={cn('tooltip-relative-container', {
          'sidebar-collapse': isExpanded,
          'sidebar-expand': !isExpanded,
        })}
        aria-label="Expand/Collapse Sidebar"
        aria-describedby="sidebar-expand-tooltip"
        type="button"
        onClick={handleToggleExpand}
      >
        {isExpanded ? <SidebarCloseIcon /> : <SidebarOpenIcon />}

        <Tooltip />
      </button>
    </div>
  );
}

function Tooltip({ isExpanded }: Omit<SidebarBottomProps, 'handleToggleExpand'>) {
  return (
    <span
      role="tooltip"
      id="sidebar-expand-tooltip"
      className={cn('tooltip-content tooltip-above', {
        'tooltip-center': isExpanded,
        'tooltip-left': !isExpanded,
      })}
    >
      <div className="shortcut-tooltip">
        <div className="shortcut-description">Expand/Collapse Sidebar</div>
        <div className="shortcut-keys">
          <div className="shortcut-key ">shift</div>
          <div className="shortcut-key ">.</div>
        </div>
      </div>
    </span>
  );
}
