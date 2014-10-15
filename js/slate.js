jQuery(document).ready(function( $ ) {

	$('body').addClass('slate-admin-theme');

	if ($('body').is('.post-type-post') || $('body').is('.post-type-page') || $('body').is('.comment-php')) {

		// Move elements inside #post-body-content
		$('.wrap > h2, #screen-meta-links, #screen-meta').prependTo('#post-body-content');

		// Move messages
		if ($('.wrap > .updated, .wrap > .error').length != 0) {
			$('.wrap > .updated, .wrap > .error').insertBefore('#post-body-content h2');
		}
		
		// Add background divs
		if ($('#side-sortables').length != 0) {
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
		
	}

});
