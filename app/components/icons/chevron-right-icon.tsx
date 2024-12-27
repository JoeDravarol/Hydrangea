import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';

export default function ChevronRightIcon({
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
        d="M7.4 23.6a1.5 1.5 0 0 1-2 0 1.4 1.4 0 0 1 0-2l10-9.6-10-9.6a1.4 1.4 0 0 1 0-2 1.5 1.5 0 0 1 2 0L18.6 11c.5.6.5 1.4 0 2z"
        clipRule="evenodd"
      />
    </Icon>
  );
}
