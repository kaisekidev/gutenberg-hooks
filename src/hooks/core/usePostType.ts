import { useEntityRecord } from './useEntityRecord.js';

import type { PostType } from '../../types.js';

export const usePostType = <T extends PostType>(slug: string) =>
  useEntityRecord<T>('root', 'postType', slug);
