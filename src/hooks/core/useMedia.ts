import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const useMedia = <T extends Schema.Media<'edit'>>(id: number) =>
  useEntityRecord<T>('root', 'media', id);
