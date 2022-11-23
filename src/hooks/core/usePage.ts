import { useEntityRecord } from './useEntityRecord.js';

import type { BasePage } from '../../types.js';

export const usePage = <T extends BasePage>(id: number) =>
  useEntityRecord<T>('postType', 'page', id);
