import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useCurrentPostType = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getCurrentPostType(), deps);
