/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { ExperimentalOrderMeta } from '@woocommerce/blocks-checkout';
import { getSetting } from '@woocommerce/settings';
/**
 * Internal dependencies
 */
import './style.scss';

const exampleDataFromSettings = getSetting( '{{extension_slug}}_data' )
	.exampleData;

/**
 * Internal dependencies
 */
import { registerFilters } from './filters';
import { ExampleComponent } from './ExampleComponent';

const render = () => {
	return (
		<>
			<ExperimentalOrderMeta>
				<ExampleComponent data={ exampleDataFromSettings } />
			</ExperimentalOrderMeta>
		</>
	);
};

registerPlugin( '{{extension_slug}}', {
	render,
	scope: 'woocommerce-checkout',
} );

registerFilters();
