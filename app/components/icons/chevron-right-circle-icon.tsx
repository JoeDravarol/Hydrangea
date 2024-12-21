import type { BaseIconProps } from './icon';
import Icon from './icon';

export default function ChevronRightCircleIcon({
  width = 30,
  height = 30,
}: BaseIconProps) {
  return (
    <Icon
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M12 .4A12 12 0 0 0 0 12.2a12 12 0 0 0 24 0A12 12 0 0 0 12 .4m0 2A9.8 9.8 0 1 1 12 22a10 10 0 0 1-10-9.8c0-5.5 4.5-9.8 10-9.8m-2.3 4a1 1 0 0 0 0 1.3l4.8 4.5-4.8 4.4a1 1 0 0 0 0 1.3c.3.3.9.3 1.2 0l5-4.6c.6-.6.6-1.7 0-2.3l-5-4.5c-.3-.3-1-.3-1.2 0"
      />
    </Icon>
  );
}
