import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';

export default function ChevronDownIcon({
  width = 10,
  height = 10,
  ...props
}: BaseIconProps) {
  return (
    <Icon
      width={width}
      height={height}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 18.7a1.4 1.4 0 0 1-2 0L.4 7.4a2 2 0 0 1 0-2 1.4 1.4 0 0 1 2 0l9.6 10 9.6-10.2a1.4 1.4 0 0 1 2 0 2 2 0 0 1 0 2.1z"
        clipRule="evenodd"
      />
    </Icon>
  );
}
