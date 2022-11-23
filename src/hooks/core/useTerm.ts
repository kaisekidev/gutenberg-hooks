import { useEntityRecord } from './useEntityRecord.js';

import type { BaseTag } from '../../types.js';

export const useTerm = <T extends BaseTag>(taxonomy: string, id: number) =>
  useEntityRecord<T>('taxonomy', taxonomy, id);
