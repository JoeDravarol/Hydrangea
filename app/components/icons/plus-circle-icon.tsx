import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';

export default function PlusCircleIcon({
  width = 14,
  height = 14,
  ...props
}: BaseIconProps) {
  return (
    <Icon
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      {/**/}
      <path
        fill="currentColor"
        d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m4.8 13.2h-3.6v3.6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-3.6H7.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h3.6V7.2c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v3.6h3.6c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2"
      />
    </Icon>
  );
}
