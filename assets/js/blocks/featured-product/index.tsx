/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { getSetting } from '@woocommerce/settings';
import { isFeaturePluginBuild } from '@woocommerce/block-settings';
import { Icon, starEmpty } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.scss';
import { example } from './example';
import { Edit } from './edit';
import metadata from './block.json';

/**
 * Register and run the "Featured Product" block.
 */
registerBlockType( metadata, {
	icon: {
		src: (
			<Icon
				icon={ starEmpty }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
	attributes: {
		...metadata.attributes,
		/**
		 * A minimum height for the block.
		 *
		 * Note: if padding is increased, this way the inner content will never
		 * overflow, but instead will resize the container.
		 *
		 * It was decided to change this to make this block more in line with
		 * the “Cover” block.
		 */
		minHeight: {
			type: 'number',
			default: getSetting( 'default_height', 500 ),
		},
	},
	supports: {
		...metadata.supports,
		color: {
			background: false,
			text: true,
			...( isFeaturePluginBuild() && {
				__experimentalDuotone:
					'.wc-block-featured-product__background-image',
			} ),
		},
		spacing: {
			padding: true,
			...( isFeaturePluginBuild() && {
				__experimentalDefaultControls: {
					padding: true,
				},
				__experimentalSkipSerialization: true,
			} ),
		},
		...( isFeaturePluginBuild() && {
			__experimentalBorder: {
				color: true,
				radius: true,
				width: true,
				__experimentalSkipSerialization: true,
			},
		} ),
	},
	example,

	/**
	 * Renders and manages the block.
	 *
	 * @param {Object} props Props to pass to block.
	 */
	edit: Edit,

	/**
	 * Block content is rendered in PHP, not via save function.
	 */
	save: () => {
		return <InnerBlocks.Content />;
	},
} );
