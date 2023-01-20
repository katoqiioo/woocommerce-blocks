/**
 * External dependencies
 */
import { isFeaturePluginBuild } from '@woocommerce/block-settings';
import {
	BLOCK_DESCRIPTION,
	BLOCK_ICON,
	BLOCK_TITLE,
} from '@woocommerce/atomic-blocks/product-elements/button/constants';

/**
 * Internal dependencies
 */
import { registerElementVariation } from './utils';

export const CORE_NAME = 'core/buttons';
export const VARIATION_NAME = 'woocommerce/product-add-to-cart-button';

if ( isFeaturePluginBuild() ) {
	registerElementVariation( CORE_NAME, {
		blockDescription: BLOCK_DESCRIPTION,
		blockIcon: BLOCK_ICON,
		blockTitle: BLOCK_TITLE,
		variationName: VARIATION_NAME,
	} );
}