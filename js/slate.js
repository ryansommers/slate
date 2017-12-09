jQuery(document).ready(function( $ ) {

	var $body = $( 'body' );

	$body.addClass( 'slate-admin-theme' );

	// Move elements inside #post-body-content
	// WordPress Version 4.0 - 4.2
	if ( $body.is( '.branch-4' ) || $body.is( '.branch-4-0' ) || $body.is( '.branch-4-1' ) || $body.is( '.branch-4-2' ) ) {
		$( '.wrap > h2, #screen-meta-links, #screen-meta' ).prependTo( '#post-body-content' );

		// Move messages
		if ( $( '.wrap > .updated, .wrap > .error' ).length != 0 && $( '#post-body-content' ).length != 0 ) {
			$( '.wrap > .updated, .wrap > .error' ).insertBefore( '#post-body-content h2' );
		}

		// Move elements on Tags/Category pages
		if ( $( '.edit-tags-php #col-right' ).length != 0 ) {
			$( '.wrap > h2, .wrap > #ajax-response, .wrap > .search-form, .wrap > br' ).prependTo( '#col-right' );
		}
	}

	// WordPress Version 4.3
	if ( $body.is( '.branch-4-3' ) ) {
		$( '.wrap > h1, #screen-meta-links, #screen-meta' ).prependTo( '#post-body-content' );

		// Move messages
		var $messages = $( '.wrap > .updated, .wrap > .error, .wrap > .notice, #wpbody-content > .updated, #wpbody-content > .error, #wpbody-content > .notice, #wpbody-content > .update-nag' );
		if ( $messages.length != 0 && $( '#post-body-content' ).length != 0 ) {
			$messages.insertBefore( '#post-body-content h1' );
		}
	}
	if ( $body.is( '.edit-tags-php.branch-4-3' ) ) {
		// Move elements on Tags/Category pages
		$( '.wrap > h1, .wrap > #ajax-response, .wrap > .search-form, .wrap > br, .wrap > .updated, .wrap > .error, .wrap > .notice, #wpbody-content > .updated, #wpbody-content > .error, #wpbody-content > .notice' ).prependTo( '#col-right .col-wrap' );
	}

	// WordPress Version 4.4 or 4.5
	if ( $body.is( '.branch-4-4' ) || $body.is( '.branch-4-5' ) ) {
		// Move Elements
		$( '.wrap > h1, #screen-meta-links, #screen-meta' ).prependTo( '#post-body-content' );
	}
	if ( $body.is( '.edit-tags-php.branch-4-4' ) || $body.is( '.edit-tags-php.branch-4-5' ) ) {
		// Move elements on Tags/Category pages
		$( '.wrap > h1, .wrap > #ajax-response, .wrap > .search-form, .wrap > br, .wrap > .updated, .wrap > .error' ).prependTo( '#col-right .col-wrap' );
	}

	// WordPress Version 4.6
	if ( $body.is( '.branch-4-6' ) ) {
		// Move Elements
		$( '.wrap > h1, #screen-meta-links, #screen-meta' ).prependTo( '#post-body-content' );
	}
	if ( $body.is( '.edit-tags-php.branch-4-6' ) ) {
		// Move elements on Tags/Category pages
		$( '.wrap > h1, .wrap > #ajax-response, .wrap > .search-form, .wrap > br, .wrap > .updated, .wrap > .error' ).prependTo( '#col-right .col-wrap' );
	}

	// WordPress Version 4.7, 4.8, 4.9
	if ( $body.is( '.branch-4-7' ) || $body.is( '.branch-4-8' ) || $body.is( '.branch-4-9' ) ) {
		// Move Elements
		$( '.wrap > h1, #screen-meta-links, #screen-meta' ).prependTo( '#post-body-content' );
		// Move elements on Posts page
		$( '.page-title-action' ).appendTo( '.wp-heading-inline' );
	}
	if ( $body.is( '.edit-tags-php.branch-4-7' ) || $body.is( '.edit-tags-php.branch-4-8' ) || $body.is( '.edit-tags-php.branch-4-9' ) ) {
		// Move elements on Tags/Category pages
		$( '.wrap > h1, .wrap > #ajax-response, .wrap > .search-form, .wrap > br, .wrap > .updated, .wrap > .error' ).prependTo( '#col-right .col-wrap' );
	}
	
	// Add background divs
	if ($('#poststuff #side-sortables').length != 0 && !$('body').is('.index-php')) {
		$('#side-sortables').before('<div id="side-sortablesback"></div>');
	}
	if ($('.edit-tags-php #col-left').length != 0) {
		$('.edit-tags-php #col-left').before('<div id="col-leftback"></div>');
	}
	if ($('.comment-php #submitdiv').length != 0) {
		$('.comment-php #submitdiv').before('<div id="submitdiv-back"></div>');
	}

	// Move Post State span
	if (($('span.post-state').length != 0) && ($('span.post-state').parent().is('td') == false)) {
		$('span.post-state').each(function() {
			$(this).insertBefore($(this).parent());
		});
	}

});
