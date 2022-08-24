import { Schema } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { DependencyList } from 'react';

export const useEditedPostAttribute = <T extends keyof Schema.PostOrPage<'edit'>>(
  attributeName: T,
  deps: DependencyList = [],
) => useSelect((select) => select('core/editor').getEditedPostAttribute(attributeName), deps);
