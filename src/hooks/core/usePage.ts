import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const usePage = <T extends Schema.BasePost<'edit'>>(id: number) =>
  useEntityRecord<T>('postType', 'page', id);
