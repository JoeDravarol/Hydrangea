import type { BaseIconProps } from './icon';
import Icon from './icon';

export default function ChevronLeftCircleIcon({
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
        d="M12 24a12 12 0 0 0 12-12c0-6.6-5.5-12-12-12A12 12 0 0 0 0 12a12 12 0 0 0 12 12m0-2A10 10 0 0 1 2 12a10 10 0 1 1 10 10m2.3-4.2a1 1 0 0 0 0-1.2L9.5 12l4.8-4.5a1 1 0 0 0 0-1.3 1 1 0 0 0-1.2 0L8 11c-.6.6-.6 1.7 0 2.3l5 4.6c.3.3 1 .3 1.2 0"
      />
    </Icon>
  );
}
