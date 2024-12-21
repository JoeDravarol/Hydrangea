import type { BaseIconProps } from './icon';
import Icon from './icon';

export function CheckCircleFillIcon({
  width = 16,
  height = 16,
  ...props
}: BaseIconProps) {
  return (
    <Icon
      width={width}
      height={height}
      // aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24M8.7 17.1l-4.3-4.3a1.2 1.2 0 0 1 0-1.7 1.2 1.2 0 0 1 1.7 0l3.5 3.5 8.3-8.3a1 1 0 0 1 1.6 0 1.2 1.2 0 0 1 0 1.7l-9 9.1a1.2 1.2 0 0 1-1.8 0"
      />
    </Icon>
  );
}
