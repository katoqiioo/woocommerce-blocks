/**
 * External dependencies
 */
import { InnerBlockTemplate, registerBlockVariation } from '@wordpress/blocks';

interface VariationDetails {
	blockDescription: string;
	blockIcon?: JSX.Element;
	blockTitle: string;
	variationName: string;
	innerBlocks?: InnerBlockTemplate[];
}

export function registerElementVariation(
	coreName: string,
	{
		blockDescription,
		blockIcon,
		blockTitle,
		variationName,
		innerBlocks,
	}: VariationDetails
) {
	registerBlockVariation( coreName, {
		description: blockDescription,
		name: variationName,
		title: blockTitle,
		isActive: ( blockAttributes ) =>
			blockAttributes.__woocommerceNamespace === variationName,
		attributes: {
			__woocommerceNamespace: variationName,
		},
		scope: [ 'block', 'inserter' ],
		...( blockIcon && {
			icon: blockIcon,
		} ),
		...( innerBlocks && {
			innerBlocks,
		} ),
	} );
}
