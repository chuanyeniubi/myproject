require(['config'], function() {
    require(['jquery', 'common', 'fly','com'], function($) {
       
        //ajax分页
        let $goodslist = $('.goodslist');
        let pageNo = 1;
        let qty = 10;
        $.ajax({
            url: '../api/lists.php',
            dataType: 'json',
            data: {
                page: pageNo,
                qty: qty,

            },
            success: function(res) {
                show(res);

                // 显示分页
                var pageQty = Math.ceil(res.total / res.qty);

                var page_str = '';
                for (var i = 1; i <= pageQty; i++) {
                    page_str += `<li ${res.pageNo==i?'class="active"':''} ><a href="#">${i}</a></li>`
                }

                $('.pagination').html(page_str);
            }
        });
        // 点击分页切换
        $('.pagination').on('click', 'a', function() {
            $(this).parent().addClass('active').siblings().removeClass();
            pageNo = $(this).text();

            $.ajax({
                url: '../api/lists.php',
                dataType: 'json',
                data: {
                    page: pageNo,
                    qty: qty,
                },
                success: function(res) {
                    show(res);
                }
            });

            return false;
        });


        // 处理数据拼接
        function show(res) {
            let html = res.data.map(item => {
                return `
					<!-- console.log(item) -->
							<!-- 	<div class="list-img">
									<img src="../img/${item.imgurl}" alt="">
								</div>
								<div class="list-nei">
									<h4>${item.name}</h4>
									<p class="dis">${item.dis}折</p>
									<p class="price">￥${item.price}</p>
										</div> -->

								<div class="col-sm-3 col-md-4" style="width: 30.33333333%;">
									<div class="thumbnail" data-guid= '${item.id}' >
									<div class="aaa">	
									<img src="../img/${item.imgurl}" alt="..." id="${item.id}" style="cursor:pointer;"></div>
									<div class="caption" >
									<h3>${item.name}</h3>
									<p class="price">${item.price}</p>
									<p class="dis">${item.dis}折</p>
									<a href="javascript:;" class="btn btn-primary btn-xs" target="_self">添加购物车</a>
									<button class="btn1 btn-primary btn-xs" target="_self" style="background-color: #FF5c00;border:1px solid #FF5c00">去付款</button>

							
							</div>
						</div>
					</div>
				        `
            }).join('');
            $goodslist.html(html);
            //点击‘去付款’跳转购物车界面
            $('.btn1').on('click', function() {
                window.location.href = 'http://localhost/myproject/src/html/gwc.html'

            })
        }
        //获取id   传入详情页
        $('.goodslist').on('click', 'img', function() {
            console.log(this)
            $(location).attr('href', '../html/Pages.html?id=' + this.id);


        })





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

        // 	//飞入购物车
        $(function() {
            /*
                购买商品飞入购物车的效果
                    1）给按钮绑定点击事件
                        1>复制当前商品图片(用于实现动画效果)
                            把复制的图片写入页面，并设置样式
                            动画效果
                        2>复制当前商品所有信息(用于往购物车添加)
                    2)删除购物车中的“添加到购物车”按钮
                    3)在购物车列表中添加移除按钮
                    	点击按钮时，删除购物车中对应的商品
                    4)删除用于动画的图片
             */

            // 1）给按钮绑定点击事件
            var $goodsList = $('.thumbnail');
            var $icon2 = $('.icon2');

            $('.goodslist').on('click', 'div a', function() {
                // console.log(this);
                // var $currentLi = $('.goods-img')

                // 当前商品图片
                var $img = $(this).parent().prev().children('img')
                    // console.log($img)
                    // 把复制的图片写入页面，并设置样式
                var $cloneImg = $img.clone();
                // console.log( $cloneImg)

                $cloneImg.css({
                    position: 'absolute',
                    left: $img.offset().left,
                    top: $img.offset().top,
                    width: $img.outerWidth(),
                    height: $img.outerHeight()
                }).appendTo('body');

                // 图片飞入动画效果
                // 动画完成后，把复制li写入购物车列表
                $cloneImg.animate({
                    left: $icon2.offset().left,
                    top: $icon2.offset().top,
                    width: 10,
                    height: 10
                }, 1000, function() {

                    // 删除动画图片
                    $cloneImg.remove();
                });

            });


        });

        //cookie 传入购物车信息
        var goods = document.getElementsByClassName('goodslist')[0]
        var goodslist = getCookie('goodslist')
        goodslist = goodslist ? JSON.parse(goodslist) : [];
        console.log(goodslist)

        goods.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.tagName.toLowerCase() === 'a') {
                console.log(target)
                    // 获取当前li
                var currentLi = target.parentNode.parentNode;
                // 获取当前商品的guid
                var guid = currentLi.getAttribute('data-guid');
                // console.log(guid)

                // 关键：判断当前商品是否存在cookie
                for (var i = 0; i < goodslist.length; i++) {
                    if (goodslist[i].guid === guid) {
                        goodslist[i].qty++;
                        break;
                    }
                }

                // 商品不存cookie中
                if (i === goodslist.length) {
                    // 获取<当前>商品的信息
                    var goods = {
                        guid: guid,
                        imgurl: currentLi.children[0].children[0].src,
                        name: currentLi.children[1].children[0].innerText,
                        price: currentLi.children[1].children[1].innerText,
                        qty: 1
                    };

                    // 往数组中添加当前商品
                    goodslist.push(goods);
                }



                // 设置cookie
                // cookie保存的是字符串
                // JSON.stringify()：把对象/数组转成json字符串
                setCookie('goodslist', JSON.stringify(goodslist));
            }
        }



        var $num = 0;
        $('.goodslist').on('click', 'div a', function() {
            var $input = $('.gwc')

            $num++;
            $input.val($num) * 1

            // var $input = $(this).parent().parent().parent().parent().siblings('.right').children('.icon2').children('input');
            console.log($num)

            // $('.gwc')

        });

        msg.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (target.tagName.toLowerCase() === 'button') {
                var now = new Date('2017-5-9');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'http://localhost/myproject/src/html/list.html';
            }
        }

    });
});
