import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const useUser = <T extends Schema.User<'edit'>>(id: number) =>
  useEntityRecord<T>('root', 'user', id);
