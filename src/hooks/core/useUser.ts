import { useEntityRecord } from './useEntityRecord.js';

import type { User } from '../../types.js';

export const useUser = <T extends User>(id: number) => useEntityRecord<T>('root', 'user', id);
