/**
 * External dependencies
 */
import type { Block } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { isWpVersion } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { CORE_NAME as PRODUCT_TITLE_CORE_NAME } from './variations/elements/product-title';
import { CORE_NAME as PRODUCT_SUMMARY_CORE_NAME } from './variations/elements/product-summary';
import { CORE_NAME as PRODUCT_TEMPLATE_CORE_NAME } from './variations/elements/product-template';
import { CORE_NAME as ADD_TO_CART_BUTTON_CORE_NAME } from './variations/elements/add-to-cart-button';
import './inspector-controls';
import './style.scss';
import './variations/product-query';

const EXTENDED_CORE_ELEMENTS = [
	PRODUCT_SUMMARY_CORE_NAME,
	PRODUCT_TEMPLATE_CORE_NAME,
	PRODUCT_TITLE_CORE_NAME,
	ADD_TO_CART_BUTTON_CORE_NAME,
];

function registerProductQueryElementsNamespace(
	props: Block,
	blockName: string
) {
	if ( EXTENDED_CORE_ELEMENTS.includes( blockName ) ) {
		// Gracefully handle if settings.attributes is undefined.
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore -- We need this because `attributes` is marked as `readonly`
		props.attributes = {
			...props.attributes,
			__woocommerceNamespace: {
				type: 'string',
			},
		};
	}

	return props;
}

if ( isWpVersion( '6.1', '>=' ) ) {
	addFilter(
		'blocks.registerBlockType',
		'core/custom-class-name/attribute',
		registerProductQueryElementsNamespace
	);
}
