import { useSelect } from '@wordpress/data';

import type { DependencyList } from 'react';

export const useEditorSettings = (deps: DependencyList = []) =>
  useSelect((select) => select('core/editor').getEditorSettings(), deps);
