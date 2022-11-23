import { useEntityRecord } from './useEntityRecord.js';

import type { BaseTaxonomy } from '../../types.js';

export const useTaxonomy = <T extends BaseTaxonomy>(slug: string) =>
  useEntityRecord<T>('root', 'taxonomy', slug);
