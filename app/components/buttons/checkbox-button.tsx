import CheckboxIcon from '~/components/icons/checkbox-icon';
import useCheckboxToggle from '~/hooks/use-checkbox-toggle';
import { cn } from '~/utils/cn';

export interface CheckboxButtonProps {
  label?: string;
}

export default function CheckboxButton({
  label,
}: CheckboxButtonProps) {
  const [isChecked, toggleIsChecked] = useCheckboxToggle(false);

  return (
    <button
      className={cn('ynab-checkbox ynab-checkbox-button', {
        'is-checked': isChecked,
      })}
      aria-checked={isChecked}
      aria-label={label}
      onClick={toggleIsChecked}
      role="checkbox"
      type="button"
    >
      <CheckboxIcon isChecked={isChecked} />
    </button>
  );
}
