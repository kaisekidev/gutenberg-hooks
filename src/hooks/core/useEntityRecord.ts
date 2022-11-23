/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelect } from '@wordpress/data';

import { HasFinishedResolution } from './useHasFinishedResolution.js';
import { GetIsResolving } from './useIsResolving.js';

export const enum Status {
  Idle = 'IDLE',
  Resolving = 'RESOLVING',
  Error = 'ERROR',
  Success = 'SUCCESS',
}

export const getStatus = (hasData: boolean, isResolving: boolean, hasResolved: boolean): Status => {
  if (isResolving) {
    return Status.Resolving;
  }
  if (hasResolved) {
    return hasData ? Status.Success : Status.Error;
  }
  return Status.Idle;
};

/**
 * Resolves the specified entity record.
 *
 * @param  kind     Kind of the entity, e.g. `root` or a `postType`.
 * @param  name     Name of the entity, e.g. `plugin` or a `post`.
 * @param  key      Key of the requested entity record.
 * @example
 * ```js
 * import { useEntityRecord, PostOrPage } from '@kaiseki/gutenberg-hooks';
 * import type { Schema } from '@wordpress/core-data';
 *
 * const PageTitleDisplay= (id) => {
 *   const { record, isResolving } = useEntityRecord<PostOrPage>('postType', 'page', id);
 *
 *   if (isResolving) {
 *     return 'Loading...';
 *   }
 *
 *   return record.title;
 * }
 *
 * // Rendered in the application:
 * // <PageTitleDisplay id={ 1 } />
 * ```
 *
 * In the above example, when `PageTitleDisplay` is rendered into an
 * application, the page and the resolution details will be retrieved from
 * the store state using `getEntityRecord()`, or resolved if missing.
 *
 * @return Entity record data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEntityRecord = <T extends Record<string, any>>(
  kind: string,
  name: string,
  key: number | string,
) => {
  const {
    data: record,
    ...rest
  } = useSelect(
    (select) => {
      const args = [kind, name, key];
      const {
        getEntityRecord,
        // @ts-ignore
        hasFinishedResolution,
        // @ts-ignore
        getIsResolving,
      } = select('core');
      // cast key to string due to incorrect type for getEntityRecord in @types/wordpress__core-data
      // TODO: remove this cast when @types/wordpress__core-data is updated
      let data = null;
      try {
        data = (getEntityRecord(kind, name, key as number) as T | undefined) || null;
      } catch (e) {
        return {
          data,
          status: Status.Error,
          isResolving: false,
          hasResolved: false,
        };
      }
      const isResolving = !!(getIsResolving as GetIsResolving)('getEntityRecord', args);
      const hasResolved = !isResolving && (hasFinishedResolution as HasFinishedResolution)('getEntityRecord', args);
      const status = getStatus(!!data, isResolving, hasResolved);

      return {
        data,
        status,
        isResolving,
        hasResolved,
      };
    },
    [kind, name, key],
  );

  return {
    record,
    ...rest,
  };
};
