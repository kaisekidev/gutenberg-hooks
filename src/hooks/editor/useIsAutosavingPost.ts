import { useSelect } from '@wordpress/data';
import { DependencyList } from 'react';

export const useIsAutosavingPost = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').isAutosavingPost(), deps);
