import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const useTerm = <T extends Schema.BaseTag>(taxonomy: string, id: number) =>
  useEntityRecord<T>('taxonomy', taxonomy, id);
