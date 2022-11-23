import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useIsSavingPost = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').isSavingPost(), deps);
