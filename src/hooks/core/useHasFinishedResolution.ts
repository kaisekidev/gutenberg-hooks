import { useSelect } from '@wordpress/data';

export type HasFinishedResolution = (selectorName: string, args?: unknown[]) => boolean;

export const useHasFinishedResolution: HasFinishedResolution = (selectorName, args) =>
  useSelect(
    (select) => {
      const { hasFinishedResolution } = select('core/data');
      return (hasFinishedResolution as HasFinishedResolution)(selectorName, args);
    },
    [selectorName, ...(args || [])],
  );
