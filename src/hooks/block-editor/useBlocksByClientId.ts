import { useSelect } from '@wordpress/data';

export const useBlocksByClientId = (clientIds: string | string[]) =>
  useSelect((select) => select('core/block-editor').getBlocksByClientId(clientIds), [clientIds]);
