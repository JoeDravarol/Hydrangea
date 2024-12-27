import type { ButtonProps } from '~/types/component';
import PrimaryGhostButton from '~/components/buttons/primary-ghost-button';
import RedoIcon from '~/components/icons/redo-icon';

export default function RedoButton(props: ButtonProps) {
  return (
    <PrimaryGhostButton
      className="redo-button"
      title="Redo that thing you just undid. Practice decisiveness."
      {...props}
    >
      <RedoIcon />
      Redo
    </PrimaryGhostButton>
  );
}
