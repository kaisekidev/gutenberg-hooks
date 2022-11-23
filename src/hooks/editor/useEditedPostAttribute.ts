import { useSelect } from '@wordpress/data';

import type { PostOrPage } from '../../types';
import type { DependencyList } from 'react';

export const useEditedPostAttribute = <T extends keyof PostOrPage>(
  attributeName: T,
  deps: DependencyList = [],
) => useSelect((select) => select('core/editor').getEditedPostAttribute(attributeName), deps);
