$(document).ready(function() {
  $('.product__btn-reduce').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.product__btn-add').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $('.product_right-side__btn').on('click',function (e) {
    e.preventDefault();
    let data=$(this).data();
    let id=$(this).data('id');

    $.ajax({
      url:'/cart/add',
      data:{id:id},
      type:'GET',
      success:function (res) {
        console.log(res)
      },
      error:function () {
        alert('error');
      }
    });
  });
  $(".product_min-sl").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    arrows: true,
    asNavFor: ".product_sl",
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          focusOnSelect: true,
          arrows: false
        }
      },
      {
        breakpoint: 400,

        settings: {
          vertical: false,
          verticalSwiping: false,
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });
  $(".product_sl").slick({
    asNavFor: ".product_min-sl",
    arrows: false
  });
  $(".product_sl__slide-item").loupe({
    width: 100, // ширина лупы
    height: 100, // высота лупы
    loupe: "loupe" // css класс лупы
  });
});

