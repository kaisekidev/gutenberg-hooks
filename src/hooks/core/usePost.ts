import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const usePost = <T extends Schema.BasePost<'edit'>>(id: number, postType = 'post') =>
  useEntityRecord<T>('postType', postType, id);
