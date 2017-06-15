require(['config'], function() {
    require(['common', 'jquery', 'unslider','com'], function() {
        //轮播图插件运用
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

//首页 内容
require(['config'], function() {
    require(['jquery'], function($) {
        $.ajax({
            url: '../api/indexs.php',
            dataType: 'json',
            success: function(data) {
                let html = data.map(item => {
                    console.log(item)
                    return `<div class="nei-quan">
					<div class="nei-tu">
						<a href="http://localhost/myproject/src/html/list.html">

							<img src="../img/${item.imgurl}"alt="">
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

        //点击退出按钮跳转当前页面
        msg.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (target.tagName.toLowerCase() === 'button') {
                var now = new Date('2017-5-9');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'http://localhost/myproject/src/html/index.html';
            }
        }
    });
});
