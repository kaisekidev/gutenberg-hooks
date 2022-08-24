import { useSelect } from '@wordpress/data';
import { DependencyList } from 'react';

export const useIsCurrentPostPublished = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').isCurrentPostPublished(), deps);
