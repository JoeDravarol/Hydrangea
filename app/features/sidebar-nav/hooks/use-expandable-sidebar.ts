import { useEventListener, useLocalStorage } from 'usehooks-ts';

const STORAGE_KEY = 'isSidebarExpanded';

export default function useExpandableSidebar() {
  const [isExpanded, setIsExpanded] = useLocalStorage<boolean>(STORAGE_KEY, true);

  function onKeydown(event: KeyboardEvent) {
    if (event.key === '>') {
      handleToggleExpand();
    }
  }

  function handleToggleExpand() {
    setIsExpanded(prevState => !prevState);
  }

  useEventListener('keydown', onKeydown);

  return [isExpanded, handleToggleExpand] as const;
}
