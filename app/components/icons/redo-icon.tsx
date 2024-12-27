import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';

export default function RedoIcon({
  width = 12,
  height = 12,
  ...props
}: BaseIconProps) {
  return (
    <Icon
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 21.7h9.2a1.1 1.1 0 1 1 0 2.3H11a10.3 10.3 0 1 1 0-20.6h5.8V.6a.6.6 0 0 1 .9-.5l5.7 4a.6.6 0 0 1 0 1l-5.7 4a.6.6 0 0 1-1-.5V5.7H11a8 8 0 0 0-8 8 8 8 0 0 0 8 8"
        clipRule="evenodd"
      />
    </Icon>
  );
}
