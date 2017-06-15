require(['config'], function() {
    require(['jquery', 'common','com'], function($) {

        var carList = document.querySelector('.goodslist');
        var btnClear = document.getElementById('deleteCheckbox');
        var subPrice = document.querySelector('.balance_left_total i')
            // console.log(subPrice)
            // 获取cookie商品信息
        var goodslist = getCookie('goodslist');
        // 把json字符串转换成数组/对象
        // JSON.parse(json)
        goodslist = goodslist ? JSON.parse(goodslist) : [];
        // console.log(goodslist)

        render();

        function render() {
            // 总价
            var totalPrice = 0;

            var ul = document.createElement('ul');
            ul.className = 'catGoods'
            ul.innerHTML = goodslist.map(function(goods) {
                // 计算总价
                // console.log(goods)
                totalPrice += goods.price * goods.qty;

                /*'<li data-guid="'+goods.guid+'"><img src="'+goods.imgurl+'"><h4>'+goods.name+'</h4><p class="price">'+goods.price+'&times;'+goods.qty+'</p><span class="btn-close">&times;</span></li>' */
                return `		<li class="catlist" data-guid="${goods.guid}">
							<span class="s1"><input name="checkAll" storetype="" checked="true" type="checkbox"></span>
							<span class="s2">
								<div class="catImg"><img src="${goods.imgurl}" alt=""></div>
								<div class="cattite">
								<h4>${goods.name}</h4>
									
								</div>
							</span>
							<span class="s3">
								<p>尺码：(S:155/80A)</p>
							</span>
							<span class="s4">
								<p>${goods.price}</p>
							</span>
							<span class="s5">
								<i class="addgoods">+</i>
								<input type="text" value="${goods.qty}" >
								<i class="removegoods">-</i>
							</span>
							<span class="s6">
								<a href="javasctipt:;"><p class="btn-close">删除</p></a>
							</span>
						</li>`
            }).join('');

            carList.innerHTML = '';
            carList.appendChild(ul);
            subPrice.innerText = totalPrice.toFixed(2);
            var $num
            var $input
                // 按钮数量++
            $('.s5').on('click', '.addgoods', function() {

                    // console.log(this);
                    var a = $(this).parent().prev().children('p').html() * 1;
                    console.log(a);

                    $input = $(this).next('input');
                    $num = $input.val() * 1;
                    $num++;
                    $input.val($num);
                    totalPrice += a;
                    $('.balance_left_total i').html(totalPrice)
                })
                // 按钮数量--
            $('.s5').on('click', '.removegoods', function() {
                var a = $(this).parent().prev().children('p').html() * 1;
                var $input = $(this).prev('input');
                $num = $input.val() * 1;
                if ($num <= 1) {
                    // $input.val(1);
                    return
                }

                $num--;
                $input.val($num);
                totalPrice -= a;
                $('.balance_left_total i').html(totalPrice)

                // console.log(this);

            })

        }


        // 清空购物车
        btnClear.onclick = function(e) {
            removeCookie('goodslist');

            // 清空DOM节点
            carList.innerHTML = '';
            subPrice.innerHTML = '';

            e.preventDefault();
        }


        // 删除单个商品
        carList.onclick = function(e) {

                e = e || window.event;
                var target = e.target || e.srcElement;

                if (target.className === 'btn-close') {
                    var currentLi = target.parentNode.parentNode.parentNode;
                    var guid = currentLi.getAttribute('data-guid');
                    console.log(target)

                    for (var i = 0; i < goodslist.length; i++) {
                        if (goodslist[i].guid === guid) {
                            console.log('111')
                                // 删除数组中对应的商品
                            goodslist.splice(i, 1);

                            // 重新写入cookie
                            setCookie('goodslist', JSON.stringify(goodslist));

                            break;
                        }
                    }


                    // 删除DOM节点
                    // removeChild
                    // currentLi.parentNode.removeChild(currentLi);
                    render();
                }
            }
            // 退出登录跳转当前页面
        msg.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (target.tagName.toLowerCase() === 'button') {
                var now = new Date('2017-5-9');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'http://localhost/myproject/src/html/gwc.html';
            }
        }


        //全选按钮

        var $all = $('#all');
        var hobby = $("input[name='checkAll']")
        $all.on('click', function() {
            for (var i = 0; i < hobby.length; i++) {
                hobby[i].checked = all.checked;
            }
        })
        console.log(hobby.length)
            // $('.balance_left_have').children('em').html(hobby.length)

    });
});
