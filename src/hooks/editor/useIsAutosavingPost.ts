import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useIsAutosavingPost = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').isAutosavingPost(), deps);
