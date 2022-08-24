import { useSelect } from '@wordpress/data';
import { DependencyList } from 'react';

export const useCurrentPostId = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getCurrentPostId(), deps);
