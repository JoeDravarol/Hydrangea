import type { BaseIconProps } from '~/components/icons/icon';
import Icon from '~/components/icons/icon';
import { cn } from '~/utils/cn';

interface CheckboxIconProps extends BaseIconProps {
  isChecked?: boolean;
}

export default function CheckboxIcon({
  isChecked,
  width = 13,
  height = 13,
}: CheckboxIconProps) {
  return (
    <Icon
      className={cn('ynab-new-icon ynab-checkbox-button-square', {
        'is-checked': isChecked,
      })}
      width={width}
      height={height}
      fill="none"
    >
      <path fill="currentColor" d="M9 11.5L4.5 7 3 8.5l6 6 12-12-1.5-1.5L9 11.5z" />
    </Icon>
  );
}
