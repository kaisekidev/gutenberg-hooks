import { useSelect } from '@wordpress/data';
import { DependencyList } from 'react';

export const useCurrentPostType = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getCurrentPostType(), deps);
