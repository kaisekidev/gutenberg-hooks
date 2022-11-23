/* eslint-disable indent, operator-linebreak, @typescript-eslint/indent, @typescript-eslint/no-explicit-any */
import { PostOrPage } from '../types';

/**
 * @param editPost pass 'useDispatch('core/editor').editPost'
 */
export const createPostMetaSetterFactory =
  <T extends PostOrPage>(editPost: (edits: Record<string, any>) => void) =>
  <K extends keyof T['meta']>(key: K) =>
  (value: T['meta'][K]) => {
    editPost({
      meta: {
        [key]: value,
      },
    });
  };
