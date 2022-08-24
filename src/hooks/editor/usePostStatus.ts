import { useEditedPostAttribute } from './useEditedPostAttribute.js';

import type { DependencyList } from 'react';

export const usePostStatus = (deps: DependencyList = []) =>
  useEditedPostAttribute<'status'>('status', deps);
