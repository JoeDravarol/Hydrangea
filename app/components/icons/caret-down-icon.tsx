import type { BaseIconProps } from './icon';
import Icon from './icon';

export function CaretDownIcon({
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
        d="M11 19.5.2 6.1C-.4 5.2.3 4 1.3 4h21.4c1 0 1.7 1.2 1 2L13.1 19.6a1.4 1.4 0 0 1-2.2 0"
      />
    </Icon>
  );
}
