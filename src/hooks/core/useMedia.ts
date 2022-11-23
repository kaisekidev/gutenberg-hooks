import { useEntityRecord } from './useEntityRecord.js';

import type { Media } from '../../types.js';

export const useMedia = <T extends Media>(id: number) => useEntityRecord<T>('root', 'media', id);
