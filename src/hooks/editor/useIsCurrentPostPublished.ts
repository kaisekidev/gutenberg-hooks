import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useIsCurrentPostPublished = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').isCurrentPostPublished(), deps);
