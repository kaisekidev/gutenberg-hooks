import { useEntityRecord } from './useEntityRecord.js';

import type { BasePost } from '../../types.js';

export const usePost = <T extends BasePost>(id: number, postType = 'post') =>
  useEntityRecord<T>('postType', postType, id);
