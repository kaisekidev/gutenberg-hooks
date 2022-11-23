import { useSelect } from '@wordpress/data';

import type { PostOrPage } from '../../types';
import type { DependencyList } from 'react';

export const useCurrentPost = <T extends PostOrPage>(deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getCurrentPost() as unknown as T, deps);
