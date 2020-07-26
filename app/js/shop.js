$(function() {
  $(".collection-sl").slick({
    dots: true,
    arrows: false
  });
  $( "#price__range" ).slider({
    range: true,
    min: 0,
    max: 100000,
    step: 10,
    values: [ 0, 100000 ],
    slide: function( event, ui ) {
      $( "#productfilter-min_price" ).val( ui.values[ 0 ] );
      $( "#productfilter-max_price" ).val( ui.values[ 1 ] );
    }
  });
  $( "#productfilter-min_price" ).val( $( "#price__range" ).slider( "values", 0 ));
  $( "#productfilter-max_price" ).val( $( "#price__range" ).slider( "values", 1 ));
});
