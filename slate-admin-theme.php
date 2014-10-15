<?php

/*
Plugin Name: Slate Admin Theme
Plugin URI: https://github.com/ryansommers/slate
Description: A clean, simplified WordPress Admin theme
Author: Ryan Sommers
Version: 1.0.5
Author URI: http://ryansommers.com
*/

function slate_theme_files() {
  wp_enqueue_style( 'slate-admin-theme', plugins_url('slate.css', __FILE__) );
  wp_enqueue_script( 'slate', plugins_url( "js/slate.js", __FILE__ ), array( 'jquery' ), '1.0.0', true );
}
add_action( 'admin_enqueue_scripts', 'slate_theme_files' );
add_action( 'login_enqueue_scripts', 'slate_theme_files' );

function my_theme_add_editor_styles() {
    add_editor_style( plugins_url('editor-style.css', __FILE__ ) );
}
add_action( 'after_setup_theme', 'my_theme_add_editor_styles' );

add_filter('admin_footer_text', 'left_admin_footer_text_output');
function left_admin_footer_text_output($text) {
  $text = 'WP Admin Theme <a href="http://wordpress.org/plugins/slate-admin-theme/">Slate</a> by <a href="http://ryansommers.com/">Ryan Sommers</a>';
  return $text;
}

?>
