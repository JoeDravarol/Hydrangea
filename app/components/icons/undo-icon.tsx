import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';

export default function UndoIcon({
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
        d="M12.6 24H3.4a1.1 1.1 0 1 1 0-2.3h9.2a8 8 0 1 0 0-16H6.9v2.9a.6.6 0 0 1-1 .4L.2 5a1 1 0 0 1 0-.9L6 .1a.6.6 0 0 1 1 .5v2.8h5.7a10.3 10.3 0 1 1 0 20.6"
        clipRule="evenodd"
      />
    </Icon>
  );
}
