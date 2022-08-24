import { useSelect } from '@wordpress/data';
import { DependencyList } from 'react';

export const useIsSavingPost = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').isSavingPost(), deps);
