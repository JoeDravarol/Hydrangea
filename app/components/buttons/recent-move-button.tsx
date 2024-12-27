import type { ButtonProps } from '~/types/component';
import PrimaryGhostButton from '~/components/buttons/primary-ghost-button';
import ClockArrowBackIcon from '~/components/icons/clock-arrow-back-icon';

export default function RecentMoveButton(props: ButtonProps) {
  return (
    <PrimaryGhostButton
      className="budget-toolbar-open-recent-moves"
      title="Previous 34 days of assigning and moving money (Rule Three is a thing!)"
      {...props}
    >
      <ClockArrowBackIcon width={16} height={16} />
      <div id="js-recent-moves-title">Recent Moves</div>
    </PrimaryGhostButton>
  );
}
