import { useSelect } from '@wordpress/data';

export type GetIsResolving = (selectorName: string, args?: unknown[]) => boolean;

export const useIsResolving: GetIsResolving = (selectorName, args) =>
  useSelect(
    (select) => {
      const { getIsResolving } = select('core/data');
      return (getIsResolving as GetIsResolving)(selectorName, args);
    },
    [selectorName, ...(args || [])],
  );
