import type { BaseIconProps } from './icon';
import Icon from './icon';

export default function InfoCircleIcon({
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
      red
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24m.8-16A1.6 1.6 0 0 1 11 6.5 1.6 1.6 0 0 1 12.8 5a1.6 1.6 0 0 1 1.7 1.5A1.6 1.6 0 0 1 12.8 8m.7 3.4L12 16.6c-.2.5.1 1 .6 1.3l.3.4v.2l-.5.5H11a1.5 1.5 0 0 1-1.5-1.9L11 12a1 1 0 0 0-.6-1.3l-.3-.4V10l.5-.5H12a1.5 1.5 0 0 1 1.5 1.9"
      />
    </Icon>
  );
}
