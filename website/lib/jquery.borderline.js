//
// plugin name: borderline
// by: @gnlnx
// public clone url: git://github.com/gnlnx/borderline.git
//
// Use borderline when debugging your layout.  It will
// add a default gray one pixel line to selected elements.
//
// usage: jQuery( elements ).borderline( options );
// options: { width, type, color }
//
//
// Copyright (c) 2009 Omar A Rodriguez
// Licensed under the MIT license
// http://www.opensource.org/licenses/mit-license.php
//
( function( $ ) {
	$.fn.borderline = function( options ) {
		//
		// default settings
		//
		settings = $.extend({
			width: "1px",
			type: "solid",
			color: "#999"
		}, options );

		//
		// apply border to elements
		//
		this.each( function( i ) {
			var _border_ = settings.width + " "
				   + settings.type  + " "
				   + settings.color;
			$( this ).css( "border", _border_ ); 
		});
	}
})( jQuery );
