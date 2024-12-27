import { useBoolean } from 'usehooks-ts';

export default function useCheckboxToggle(initialState: boolean) {
  const { value, toggle } = useBoolean(initialState);

  return [value, toggle] as const;
}
