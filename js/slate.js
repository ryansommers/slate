jQuery(document).ready(function( $ ) {

	$('body').addClass('slate-admin-theme');

	// Move elements inside #post-body-content
	$('.wrap > h2, #screen-meta-links, #screen-meta').prependTo('#post-body-content');

	// Move messages
	if ($('.wrap > .updated, .wrap > .error').length != 0) {
		$('.wrap > .updated, .wrap > .error').insertBefore('#post-body-content h2');
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

	// Move elements on Tags/Category pages
	if ($('.edit-tags-php #col-right').length != 0) {
		$('.wrap > h2, .wrap > #ajax-response, .wrap > .search-form, .wrap > br').prependTo('#col-right');
	}

	// Move Post State span
	if (($('span.post-state').length != 0) && ($('span.post-state').parent().is('td') == false)) {
		$('span.post-state').each(function() {
			$(this).insertBefore($(this).parent());
		});
	}

});
