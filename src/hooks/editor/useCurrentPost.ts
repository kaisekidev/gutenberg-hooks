import { Schema } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useCurrentPost = <T extends Schema.PostOrPage<'edit'>>(deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getCurrentPost() as unknown as T, deps);
