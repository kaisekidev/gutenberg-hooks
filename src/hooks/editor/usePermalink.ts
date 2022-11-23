import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const usePermalink = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getPermalink(), deps);
