<?php
/**
 * Plugin Name:       Visual link preview
 * Description:       Blocco per mostrare preview dei link del centro studi nei media.
 * Version:           0.1.0
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Emilio Dalla Torre
 * Author URI:        https://emiliodallatorre.it
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       europeanmigration-visuallinkpreview-wordpress
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_europeanmigration_visuallinkpreview_wordpress_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_europeanmigration_visuallinkpreview_wordpress_block_init' );
