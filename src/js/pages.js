/*
  详情
 */

// baseUrl:js/config.js
require(['config'], function() {
    // 只要common定义成符合标准的模块，就可以在回调函数中使用模块
    require(['jquery', 'common', 'gdszoom', 'lanjiaz', 'com', 'fly'], function($, a, gdsz) {
        // com.ajax();

        //懒加载
        $('img').lazyload()
            // console.log($('img'))


        // 传入id给数据库
        var a = location.search.split('=')[1];
        // console.log(a)
        $.ajax({
            url: '../api/id.php',
            data: {
                id: a
            },
            //处理接收数据 
            success: function(res) {
                var data = JSON.parse(res);
                // console.log(JSON.parse(res));
                let html = data.map(item => {
                    return `<div data-guid= '${item.id}'><div class="goods-tu">
                    <a href="../html/list.html" class="list-a" style="color: #ff5c00;">商品列表</a>> 内衣
          <div class="goods-tu-big">
              <img src="../img/${item.imgurl}" alt="" data-big="../img/${item.imgurl}">
          </div>
          <div class="goods-tu-sm">
              <ul class="smallList">
                <li><img src="../img/${item.imgurl}" alt=""></li>
                <li><img src="../img/lists/10.jpg" alt=""></li>
                <li><img src="../img/lists/16.jpg" alt=""></li>
              </ul>
          </div>
      </div>

      <div class="goods-xiang">
          <div class="goods-tou">
            <h3>${item.name}</h3>
            <p>十月妈咪孕妇装特价</p>
          </div>
          <div class="goods-body">
            <div class="goods-body-attr1">
                <span>促销价</span>
                <strong class="price">${item.price}</strong>
            </div>
            <div class="goods-body-attr2">
                <span>规&nbsp;&nbsp;&nbsp;格</span>
                <div class="bb">
                  <ul class="size_num" id="size_num"><li><a data-type="spec" href="javascript:;" target="_self">75B</a></li><li><a data-type="spec" href="javascript:;" target="_self">75C</a></li><li><a data-type="spec" href="javascript:;" target="_self">75D</a></li><li><a data-type="spec" href="javascript:;" target="_self">80B</a></li><li><a data-type="spec" href="javascript:;" target="_self">80C</a></li>
                  </ul>
                </div>
            </div>
              <div class="goods-body-attr3">
                <span>颜&nbsp;&nbsp;&nbsp;色</span>
                <div class="bb">
                  <ul class="size_num" id="size_num"><li><a data-type="spec" href="javascript:;" target="_self">白色</a></li><li><a data-type="spec" href="javascript:;" target="_self">黑色</a></li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="goods-floor">
              <div class="goods-floor-btn">
              <input type="button" value="+" style="height: 40px" class="addgoods">
                  <input type="text" value="1" maxlength="2" id="txtqyt">
              <input type="button" value="-" style="height: 40px" class="removegoods">
              
              </div>
              <div class="goods-floor-show">
                <input type="submit" name="search_btn" id="btn" class="btn1" value="加入购物车">
                <a href="http://localhost/myproject/src/html/gwc.html"><input type="submit" name="search_btn" id="btn" value="去付款" style="background: #fff;color:#FF5c00 "></a>
              </div>
              <div class="Details">
                 <a href=""><img src="../img/z.jpg" alt=""></a>
              </div>
          </div>
      </div>
      </div>
      `
                }).join('');

                //放大镜
                $('#pages').html(html)
                $('.goods-tu-big').gdszoom({
                    width: 400,
                    height: 400,
                    position: 'right'
                });
                $('.smallList img').click(function() {
                    $('.goods-tu-big img').attr({
                        'src': this.src,
                        'data-big': this.src
                    });
                })

                //数量++
                $('.addgoods').on('click', function() {
                        // console.log(this);
                        var a = $(this).next().html() * 1;

                        var $input = $(this).next('input');

                        var $num = $input.val() * 1;
                        $num++;
                        $input.val($num);
                    })
                    //数量--
                $('.removegoods').on('click', function() {
                    // console.log(this);
                    var a = $(this).prev().html() * 1;

                    var $input = $(this).prev('input');

                    var $num = $input.val() * 1;
                    $num--
                    $input.val($num);
                    if ($num <= 1) {
                        $input.val(1);

                    }
                })

                // 右边菜单总数
                $('.btn1').on('click', function() {
                    var $shu = $('.addgoods').next()
                    var $shuV = $shu.val() * 1
                    var $gwc = $('.gwc').val() * 1

                    // console.log($shuV)
                    $('.gwc').val($shuV + $gwc)
                })



                // $(function() {
                //     var offset = $(".icon2").offset();
                //     $("#btn").click(function(event) {
                //         var addcar = $(this);
                //         var img = addcar.parents('.goods-xiang').prev().children('.goods-tu-big').find('img').attr('src');
                //         console.log(img)
                //         var flyer = $('<img class="u-flyer" src="' + img + '">');
                //         flyer.fly({
                //             start: {
                //                 left: event.pageX,
                //                 top: event.pageY
                //             },
                //             end: {
                //                 left: offset.left + 10,
                //                 top: offset.top + 10,
                //                 width: 10,
                //                 height: 10
                //             },
                //             onEnd: function() {
                //                 ////成功加入购物车动画效果 
                //                 this.destory(); //销毁抛物体 
                //             }

                //         });
                //     });
                // });


            }

        });


        //按钮top 返回顶部
        $('.icon4').on('click', function() {
            $('body').stop(true).animate({ scrollTop: 0 }, 500)
        })

        //  //飞入购物车
        $(function() {


            // 1）给按钮绑定点击事件
            var $goodsList = $('.thumbnail');
            var $icon2 = $('.icon2');


            $('#pages').on('click', '.btn1', function() {
                // console.log(this);
                // var $currentLi = $('.goods-img')

                // 当前商品图片
                var $img = $('.goods-tu-big').children('img')
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
                }, 700, function() {

                    // 删除动画图片
                    $cloneImg.remove();
                });

            });


        });

        //点击退出登录 返回当前页面
        msg.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (target.tagName.toLowerCase() === 'button') {
                var now = new Date('2017-5-9');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'http://localhost/myproject/src/html/Pages.html';
            }
        }


        //cookie
        var goods = document.querySelector('#pages')
        var goodslist = getCookie('goodslist')
        goodslist = goodslist ? JSON.parse(goodslist) : [];
        // console.log(goodslist)

        goods.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.className === 'btn1') {
                // 获取当前li
                var currentLi = target.parentNode.parentNode.parentNode.parentNode;
                console.log(currentLi)
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
                        imgurl: currentLi.children[0].children[1].children[0].src,
                        name: currentLi.children[1].children[0].children[0].innerText,
                        price: currentLi.children[1].children[1].children[0].children[1].innerText,
                        qty: currentLi.children[1].children[2].children[0].children[1].value
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



    });
})
