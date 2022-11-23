import { useEditedPostAttribute } from './useEditedPostAttribute.js';

import type { PostOrPage } from '../../types.js';
import type { DependencyList } from 'react';

export const usePostMeta = <T extends PostOrPage>(deps: DependencyList = []) =>
  useEditedPostAttribute<'meta'>('meta', deps) as T['meta'];
