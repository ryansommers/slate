<?php

/*
Plugin Name: Slate Admin Theme
Plugin URI: https://github.com/ryansommers/slate
Description: A clean, simplified WordPress Admin theme
Author: Ryan Sommers
Version: 1.0.8
Author URI: http://ryansommers.com
*/

function slate_theme_files() {
  wp_enqueue_style( 'slate-admin-theme', plugins_url('slate.css', __FILE__), array(), '1.0.8' );
  wp_enqueue_script( 'slate', plugins_url( "js/slate.js", __FILE__ ), array( 'jquery' ), '1.0.8', true );
}
add_action( 'admin_enqueue_scripts', 'slate_theme_files' );
add_action( 'login_enqueue_scripts', 'slate_theme_files' );

function slate_theme_add_editor_styles() {
    add_editor_style( plugins_url('editor-style.css', __FILE__ ) );
}
add_action( 'after_setup_theme', 'slate_theme_add_editor_styles' );

add_filter('admin_footer_text', 'left_admin_footer_text_output');
function left_admin_footer_text_output($text) {
  $text = 'WordPress Admin Theme <a href="http://wordpress.org/plugins/slate-admin-theme/">Slate</a> by <a href="http://ryansommers.com/">Ryan Sommers</a> at <a href="http://sevenbold.com/">Seven Bold</a>';
  return $text;
}

?>
