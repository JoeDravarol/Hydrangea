import type { ButtonProps } from '~/types/component';
import PrimaryGhostButton from '~/components/buttons/primary-ghost-button';
import PlusCircleIcon from '~/components/icons/plus-circle-icon';

export default function AddCategoryGroupButton(props: ButtonProps) {
  return (
    <PrimaryGhostButton
      className="budget-toolbar-add-category"
      title="Add Category Group"
      {...props}
    >
      <PlusCircleIcon width={16} height={16} />
      Category Group
    </PrimaryGhostButton>
  );
}
