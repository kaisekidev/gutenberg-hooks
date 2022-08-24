import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const usePostType = <T extends Schema.Type<'edit'>>(slug: string) =>
  useEntityRecord<T>('root', 'postType', slug);
