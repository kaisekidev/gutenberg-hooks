import { Schema } from '@wordpress/core-data';

import { useEntityRecord } from './useEntityRecord.js';

export const useTaxonomy = <T extends Schema.BaseTaxonomy<'edit'>>(slug: string) =>
  useEntityRecord<T>('root', 'taxonomy', slug);
