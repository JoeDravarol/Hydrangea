import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';

export default function ClockArrowBackIcon({
  width = 14,
  height = 14,
}: BaseIconProps) {
  return (
    <Icon
      width={width}
      height={height}
      fill="none"
    >
      <title>Changes to your assigned amount this month</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17.2 15.3-4.5-2.1A1 1 0 0 1 12 12l.7-7a1 1 0 0 1 .8-.6 1 1 0 0 1 .7.6l.6 6.3L18 14a1 1 0 0 1 0 1l-.8.2M.5 12h2.4A10.5 10.5 0 0 1 24 12c0 5.8-4.7 10.5-10.6 10.5a11 11 0 0 1-6.7-2.4 1 1 0 0 1 0-1.3 1 1 0 0 1 1.3-.1c3.7 3 9.1 2.4 12.1-1.3a8.6 8.6 0 0 0-1.2-12 8.6 8.6 0 0 0-14 6.7h2.3a.5.5 0 0 1 .4.7l-3.4 4.7a.5.5 0 0 1-.8 0L.1 12.8a.5.5 0 0 1 .4-.8"
      />
    </Icon>
  );
}
