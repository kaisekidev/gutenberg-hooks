import { Schema } from '@wordpress/core-data';

import { useEditedPostAttribute } from './useEditedPostAttribute.js';

import type { DependencyList } from 'react';

export const usePostMeta = <T extends Schema.PostOrPage<'edit'>>(deps: DependencyList = []) =>
  useEditedPostAttribute<'meta'>('meta', deps) as T['meta'];
