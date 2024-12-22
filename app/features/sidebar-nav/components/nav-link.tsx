import { NavLink as Link } from 'react-router';
import { cn } from '~/utils/cn';

interface NavLinkProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  label: string;
  linkTo: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export default function NavLink({
  label,
  linkTo,
  isActive,
  className,
  children,
}: NavLinkProps) {
  return (
    <li
      className={cn('navlink', className, {
        active: isActive,
      })}
    >
      <Link
        to={linkTo}
        className="ember-view"
      >
        {children}
        <div
          className="navlink-label"
        >
          {label}
        </div>
      </Link>
    </li>
  );
}
