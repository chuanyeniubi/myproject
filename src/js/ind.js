require(['config'], function() {
    require(['common', 'jquery', 'unslider'], function() {

        $(document).ready(function() {
            var chajian = $('#ba').unslider({
                    dots: true
                }),
                data = chajian.data('unslider');

            $('.unslider-arrow').click(function() {
                var fn = this.className.split(' ')[1];
                data[fn]();
            });
        });


        //吸顶菜单
        $(document).scroll(function() {
            if ($(document).scrollTop() > 100) {
                $('.top').fadeIn();

            } else {
                $('.top').fadeOut()

            }

            //按钮top
            $('.icon4').on('click', function() {
                $('body').stop(true).animate({ scrollTop: 0 }, 500)
            })

        })

    })



})
require(['config'], function() {
    require(['jquery'], function($) {
        $.ajax({
            url: 'api/indexs.php',
            dataType: 'json',
            success: function(data) {
                let html = data.map(item => {
                    console.log(item)
                    return `<div class="nei-quan">
					<div class="nei-tu">
						<a href="http://localhost/myproject/src/html/list.html">

							<img src="img/${item.imgurl}"alt="">
                            </a>
					</div>
						<div class="nei-wen">
							<h2>${item.name}</h2>
							<div class="xiang">${item.xiang}</div>
							<p class="price">￥${item.price}.00起</p>
							<p>
								<a href="http://localhost/myproject/src/html/list.html" class="btn btn-primary btn-xs">点击进入</a>
							</p>
						</div>
						</div>
					`
                }).join('');
                $('#neirong').html(html)
            }
        })

    });
});
