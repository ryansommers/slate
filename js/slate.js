(function($) {
	$(document).ready(function() {
		if ($('body').is('.post-type-post') || $('body').is('.post-type-page')) {

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

		}
	});
}(jQuery));
