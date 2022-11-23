import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useCurrentPostId = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getCurrentPostId(), deps);
