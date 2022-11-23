/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelect } from '@wordpress/data';
import { addQueryArgs } from '@wordpress/url';

import { getStatus, Status } from './useEntityRecord.js';
import { HasFinishedResolution } from './useHasFinishedResolution.js';
import { GetIsResolving } from './useIsResolving.js';
/**
 * Resolves the specified entity records.
 *
 * @param  kind      Kind of the entity, e.g. `root` or a `postType`.
 * @param  name      Name of the entity, e.g. `plugin` or a `post`.
 * @param  queryArgs Optional HTTP query description for how to fetch the data, passed to the
 *                   requested API endpoint.
 * @example
 * ```js
 * import { useEntityRecords, PostOrPage } from '@kaiseki/gutenberg-hooks';
 *
 * function getPageTitles() {
 *   const { records, isResolving } = useEntityRecords<PostOrPage>( 'postType', 'page' );
 *
 *   if (isResolving) {
 *     return 'Loading...';
 *   }
 *
 *   return (
 *     <ul>
 *       {records.map((page) => (
 *         <li>{page.title}</li>
 *       ))}
 *     </ul>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <PageTitlesList />
 * ```
 *
 * In the above example, when `PageTitlesList` is rendered into an
 * application, the list of records and the resolution details will be retrieved from
 * the store state using `getEntityRecords()`, or resolved if missing.
 *
 * @return Entity records data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEntityRecords<T extends Record<string, any>>(
  kind: string,
  name: string,
  queryArgs: Record<string, unknown> = {},
) {
  const queryAsString = addQueryArgs('', queryArgs);
  const {
    data: records,
    ...rest
  } = useSelect(
    (select) => {
      const args = [kind, name, queryArgs];
      const {
        getEntityRecords,
        // @ts-ignore
        hasFinishedResolution,
        // @ts-ignore
        getIsResolving,
      } = select('core');
      let data = null;
      try {
        data = (getEntityRecords(kind, name, queryArgs) as T[] | undefined) || null;
      } catch (e) {
        return {
          data,
          status: Status.Error,
          isResolving: false,
          hasResolved: false,
        };
      }
      const isResolving = !!(getIsResolving as GetIsResolving)('getEntityRecords', args);
      const hasResolved = !isResolving && (hasFinishedResolution as HasFinishedResolution)('getEntityRecords', args);
      const status = getStatus(!!data, isResolving, hasResolved);

      return {
        data,
        status,
        isResolving,
        hasResolved,
      };
    },
    [kind, name, queryAsString],
  );

  return {
    records,
    ...rest,
  };
}
