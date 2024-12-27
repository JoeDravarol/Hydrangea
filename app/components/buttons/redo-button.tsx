import type { ButtonProps } from '~/types/component';
import PrimaryGhostButton from '~/components/buttons/primary-ghost-button';
import UndoIcon from '~/components/icons/undo-icon';

export default function UndoButton(props: ButtonProps) {
  return (
    <PrimaryGhostButton
      className="undo-button"
      title="Undo the last thing you did (in YNAB, not in life)."
      {...props}
    >
      <UndoIcon />
      Undo
    </PrimaryGhostButton>
  );
}
