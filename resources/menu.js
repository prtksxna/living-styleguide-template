$( function () {
	$( '.navbar-header' ).click( function ( e ) {
		e.preventDefault();
		$( '#site-wrap' ).toggleClass( 'site-shift' );
	} );

	$( '#site-wrap' ).click( function( e ) {
		if ( ! $( e.target ).is( '.navbar-header, .navbar-header *' ) ) {
			$( '#site-wrap' ).removeClass( 'site-shift' );
		}
	} );
} );
