$(function () {
    $("#slideArea li a").click("click", function () {
        var _this = $(this);
        /*统计*/
        myzjStatistics({
            pageType: "lb",
            targetUrl: _this.attr("href"),
            goodsCount: 0,
            position: _this.parents("li").index() + 1,
            targetIdentity: getSaleId(_this.attr("href"))
        });
    });
    $("#everyDayAreaBox li a").click("click", function () {
        var _this = $(this);
        /*统计*/
        myzjStatistics({
            pageType: "qg",
            targetUrl: _this.attr("href"),
            goodsCount: 0,
            position: _this.parents("li").index() + 1,
            targetIdentity: _this.attr("data-productid")
        });
    });

    $(".ui-ad-content a").click("click", function () {
        var _this = $(this);
        /*统计*/
        myzjStatistics({
            pageType: "zq",
            targetUrl: _this.attr("href"),
            goodsCount: 0,
            position: _this.index() + 1,
            targetIdentity: getSaleId(_this.attr("href"))
        });
    });

    $("#specialProduct .site-hot-item a").click(function () {
        var _this = $(this);
        /*统计*/
        myzjStatistics({
            pageType: "zc",
            targetUrl: _this.attr("href"),
            goodsCount: 0,
            position: _this.parents(".site-hot-item").index(),
            targetIdentity: getSaleId(_this.attr("href"))
        });
    });

    $("#hotProductCon .site-hot-item a").click(function () {
        var _this = $(this);
        var targetType = 23;
        if (_this.attr("href").indexOf("item.muyingzhijia.com") >= 0 || _this.attr("href").indexOf("item.r.muyingzhijia.com") >= 0 || _this.attr("href").indexOf("item.beta.muyingzhijia.com") >= 0) {
            targetType = 21;
        }
        /*统计*/
        myzjStatistics({
            pageType: "bk",
            targetType: targetType,
            targetUrl: _this.attr("href"),
            behaviorType:1,
            goodsCount: 0,
            position: _this.parents(".site-hot-item").index(),
            targetIdentity: _this.attr("data-productid")
        });
    });

    //邮费图片加载并且不是第一次登陆出现
    setTimeout(Module_A02, 1);
    //$(window).scroll(function (event) {
    //    iEResize();
    //});
    guanggao();
    bindEveryPromotionGa();
    //从首页跳转到特卖页面;
    window.PageInits.push(function initPage() {
        var areaId = window.AreaId;
        if (areaId <= 0) {
            areaId = 9;
        }
        //if (areaId == 19 || areaId == 1000019) {
        //    window.location.href = window.WebRoot + "gd";
        //} else if (!((areaId == 9) || (areaId == 10) || (areaId == 11) || (areaId == 1000009) || (areaId == 1000010) || (areaId == 1000011))) {
        //    if ($.cookie && !$.cookie("m_gotm")) {
        //        $.cookie("m_gotm", 1, { expires: 0.25 });
        //        window.location.href = window.HaitaoRoot;
        //    }
        //}

        if (!((areaId == 9) || (areaId == 10) || (areaId == 11) || (areaId == 1000009) || (areaId == 1000010) || (areaId == 1000011))) {
            if ($.cookie && !$.cookie("m_gotm")) {
                $.cookie("m_gotm", 1, { expires: 0.25 });
                window.location.href = window.HaitaoRoot;
            }
        }
    });
    
    $(".fixLeftTop a").click(function () {
        var _this = $(this);
        var targetId = _this.attr("data-id");
        var top = $("#" + targetId + "").offset().top - 50;
        if (targetId == "teMaiAreaBox") {
            if ($("#ui-brand-ul").length <= 0) {
                $("html, body").stop().animate({ scrollTop: top+350 }, 400);
            } else {
                $("html, body").stop().animate({ scrollTop: top }, 400);
            }
        } else {
            $("html, body").stop().animate({ scrollTop: top }, 400);
        }
        
    });


    $("#everyDayAreaBox").scrollLoading({
        callback: getEveryDaySpecial
    });
    
    $("#uiBrandAreaBox").scrollLoading({
        callback: brandDataAjax
    });
    
    $("#indexAutoPlayAreaBox").scrollLoading({
        callback: Module_A101
    });

    $(window).scroll(function () {
        var $mallSearch = $(".ui-top-bar").find("#mallSearch");
        var $header_mallSearch = $("#ui-fixed-top").find("#mallSearch");
        var scroH = $(document).scrollTop();
        if ($(".fixLeftImg").length > 0) {
            if (scroH > 100) {
                $(".fixLeftImg").fadeIn();
            } else {
                $(".fixLeftImg").fadeOut();
            }
        }
       
        if (scroH > 500) {
            $("#ui-fixed-top").fadeIn();
            if ($mallSearch.length != 0 && $header_mallSearch.length == 0) {
                $("#fix-mallSearch-input").append($("#mallSearch").clone(true));
                $(".ui-top-bar #mallSearch").remove();
            }
        } else {
            $("#ui-fixed-top").fadeOut();
            if ($mallSearch.length == 0 && $header_mallSearch.length != 0) {
                $(".ui-top-bar #header-extra").append($("#mallSearch").clone(true));
                $("#fix-mallSearch-input #mallSearch").remove();
            }
        }
    });
    
});

function bindBrandPlay() {
    $("img").scrollLoading();
    var len = $("#ui-brand-ul li").length;
    var target = $("#ui-brand-ul");
    target.css("width", len*1090);
    var next = $("#brand-next");
    var pre = $("#brand-pre");
    next.click(function () {
        var page = parseInt(next.attr("data-page"));
        if (page == len) {
            target.animate({
                marginLeft: 0
            }, 400, function () {
                next.attr("data-page", 1);
                pre.attr("data-page", 1);
            });
        } else {
            next.attr("data-page",page+ 1);
            pre.attr("data-page", page + 1);
            page = parseInt($(this).attr("data-page"));
            target.animate({
                marginLeft: -(page - 1) * 1090
            }, 500, function () {

            });
        }
    });

    pre.click(function () {
        var page = parseInt(next.attr("data-page"));
        if (page == 1) {
            target.animate({
                marginLeft: -(len - 1) * 1090
            }, 500, function () {
                next.attr("data-page", len);
                pre.attr("data-page", len);
            });
        } else {
            next.attr("data-page", page-1);
            pre.attr("data-page", page - 1);
            page = parseInt($(this).attr("data-page"));
            target.animate({
                marginLeft: -(page - 1) * 1090
            }, 500);
        }
    });
}

/*
* 绑定天天特价事件
*/
function bindEveryDayFunction() {
    $("img").scrollLoading();
    $(".countDownEveryDay").countTime();
    var everyDayLength = 2;
    $("#arr-left").click(function () {
        var $this = $(this);
        var target = $("#everyDayPromo");
        var currentPage = $this.attr("data-page");
        if (currentPage == 1) {
            return;
        } else {
            $(".ui-arr a").attr("data-page", --currentPage);
            target.stop().animate({ marginLeft: -1104 * (currentPage - 1) }, 500);
            $(".ui-arr a").removeClass("on");
            $("#arr-right").addClass("on");
        }
    });
    $("#arr-right").click(function () {
        var $this = $(this);
        var target = $("#everyDayPromo");
        var currentPage = $this.attr("data-page");
        if (currentPage == everyDayLength) {
            return;
        } else {
            $(".ui-arr a").attr("data-page", ++currentPage);
            target.stop().animate({ marginLeft: -1104 * (currentPage - 1) }, 500);
            $(".ui-arr a").removeClass("on");
            $("#arr-left").addClass("on");
        }
    });

    var autoCurrentPage = 0;
    function autoPlayEveryDay() {
        autoCurrentPage++;
        if (autoCurrentPage > 1) {
            autoCurrentPage = 0;
            $(".ui-arr a").attr("data-page", 1);
            $(".ui-arr a").eq(0).removeClass("on").siblings().addClass("on");
            $("#everyDayPromo").stop().animate({ marginLeft: 0 }, 500);
        } else {
            $(".ui-arr a").attr("data-page", 2);
            $(".ui-arr a").eq(1).removeClass("on").siblings().addClass("on");
            $("#everyDayPromo").stop().animate({ marginLeft: -1104 }, 500);
        }
    }
    var everyDayTimer = setInterval(autoPlayEveryDay, 6000);
    $(".ui-arr a").hover(function () {
        clearInterval(everyDayTimer);
    }, function () {
        clearInterval(everyDayTimer);
        everyDayTimer = setInterval(autoPlayEveryDay, 6000);
    });
}

//获取天天特价数据
function getEveryDaySpecial() {
    var promSysno = $("#hi_promSysno").val();
    //替换倒计时
    getProductSpecialList(promSysno);
}

function getProductSpecialList(promSysNo) {
    var dataParameter = {
        "ProductId": '',
        "PromSysNo": promSysNo,
        "UserId": '',
        "Guid": '',
        "DisplayLabel": displayLabel(),
        "SourceTypeSysNo": window.SourceTypeSysNo,
        "AreaSysNo": 100,
        "ChannelID": 102,
        "Ckid": 21,
        "ExtensionSysNo": $.cookie("ExtensionSysNo") || ''
    };
    $.ajax({
        url: window.BuyApiRoot + 'QueryProductByPromAndProd',
        async: true,
        type: "GET",
        cache: false,
        data: dataParameter,
        dataType: 'jsonp',
        jsonp: "callback",
        success: function (response) {
            if (response.DoFlag == true && response.PromModel != null) {
                $("p.countDownEveryDay").attr("data-time", response.PromModel.PromTime);
                bindEveryDayFunction();
                bindEveryPromotionGa();
            } else {
                $("#everyDayAreaBox").remove();
            }
        }
    });
}
//品牌专栏数据调用
function brandDataAjax() {
    var data = {ApplyPlace:1,FloorId:1};
    $.ajax({
        url: window.GoodsApi + 'json/reply/QueryNewHomePageAdOrBrand',
        type: "GET",
        cache: false,
        data: data,
        dataType: 'jsonp',
        jsonp: "callback",
        success: function (response) {
            if (response.DoFlag == true) {
                var result3 = TrimPath.processDOMTemplate("uiBrandArea", response);
                document.getElementById("uiBrandAreaBox").innerHTML = result3;
                //品牌专场轮播
                bindBrandPlay();
                bindBrandGa();
                guanggao();
            } else {
                $("#uiBrandAreaBox").remove();
            }
        }
    });
}



//首页 广告轮播
function Module_A101() {

    //LoadModuleData("A-101", function (result) {
    //    if (result.DataList.length > 0) {
    //        var result4 = TrimPath.processDOMTemplate("indexAutoPlayArea", result);
    //        document.getElementById("indexAutoPlayAreaBox").innerHTML = result4;
            bindAutoPlay();
            bindNewGa();
    //    }
    //    return;        
    //});
}


function bindAutoPlay() {
    function autoplay() {
        if ($dian > ($slideimg - 1)) {
            $dian = 0;
            $("#slideArea").animate({ left: 0 }, 100);
        }
        $("#slideArea").stop().animate({ left: -$dian * 1090 }, 500);
        $("#slide_btnArea>span").eq($dian).addClass('bannercur').siblings().removeClass('bannercur');
        $dian++;
    }
    //轮播;
    var $dian = 0;
    var timelunbo = setInterval(autoplay, 3000);
    var $slideimg = $("#slideArea").find(".main-banner").length;
    var $dianwidth = 23 * $slideimg;
    $("#slideArea").css("width", 1090 * $slideimg + "px");
    $("#slide_btnArea").css({ "width": $dianwidth + "px", "marginLeft": "-" + ($dianwidth + 10) / 2 + "px" });

    $("#slide_btnArea>span").hover(function (e) {
        $dian = $(this).index();
        $("#slideArea").stop().animate({ left: -$dian * 1090 }, 500);
        $("#slide_btnArea>span").eq($dian).addClass('bannercur').siblings().removeClass('bannercur');
    });
    $("#slideBox").hover(function () {
        clearInterval(timelunbo);
    }, function () {
        clearInterval(timelunbo);
        timelunbo = setInterval(autoplay, 3000);
    });
}


function iEResize() {
    var windowWidth = $(window).width();
    var target = $("#slideArea");
    if (windowWidth > 1240) {
        target.css({ marginLeft: -340 });
    } else {
        target.css({ marginLeft: -460 });

    }

}


function Module_A02() {

    if (typeof ($.cookie('isshowpoppic')) == "undefined") {

        LoadModuleData("A-02", function (result) {

            if (result.DataList != null && result.DataList.length > 0) {
                var item = result.DataList[0];
                var smallPic = item.SmallPic;
                var bigPic = item.BigPic;
                var closeImgPosi = parseInt(item.Tip);//定位按钮位置;
                var imgSizeSplit = ($(item.Content).text() || item.Content || "").split("x");
                if (imgSizeSplit.length < 2) {
                    return;
                }
                if (closeImgPosi.length < 0) {
                    return;
                }

                var popImgWidth = parseInt(imgSizeSplit[0]);
                var popImgHeight = parseInt(imgSizeSplit[1]);

                if (bigPic && popImgWidth > 0 && popImgHeight > 0) {
                    //弹出图片的路径        
                    var popupContainer = $("#popup_container");
                    var arr = [];
                    arr.push('<a href="' + item.LinkUrl + '" target="_blank" data-index="index-zmm-overlay-link" class="first-big-img">');
                    arr.push('<img src="' + bigPic + '" /></a>');
                    arr.push('<span href="javascript:;" class="close"><img src="' + smallPic + '"/></span>');
                    arr = arr.join('');
                    popupContainer.html(arr);
                    popupContainer.css({ "width": popImgWidth + "px", "height": popImgHeight + "px", "position": "relative" });
                    popupContainer.find(".close").css({ "right": closeImgPosi + "px", "top": closeImgPosi + "px" });//定位关闭的按钮;

                    guanggao();


                    $("#popup_container a").click(function () {
                        _gaq.push(['_trackEvent', window.location.href, $(this).attr("data-index"), $(this).attr("href")]);
                    });
                    popupContainer.find("span.close").click(function () {
                        $("#easyDialogBox").remove();
                        $("#overlay").remove();
                    });

                    easyDialog.open({
                        container: 'popup_container',
                        isOverlay: true
                    });
                    $("#overlay").css({
                        "background": "#000",
                        "opacity": 0.8
                    });

                    $.cookie('isshowpoppic', 'express_cookie_value', { expires: 1 });
                }
            }
        });
    }
}

function bindEveryPromotionGa() {
    
}

function bindBrandGa() {
    $("#uiBrandAreaBox .brandStats").unbind().bind("click", function () {
        var _this = $(this);
        var href = _this.attr("href");
        /*统计*/
        myzjStatistics({
            pageType: "pz",
            targetUrl: _this.attr("href"),
            goodsCount: 0,
            position: _this.index() + 1,
            targetIdentity: getQueryHrefString2(decodeURIComponent(href), "condition") || getQueryHrefString2(href, "sbjId") || ""
        });
    });
    

}
function guanggao() {
    var adContainer = [{
        "parentNode": "#slideArea li",//首页轮播
        "relative": "relative",
        "bottom": "10px",
        "right": "10px"
    }, {
        "parentNode": "#js_ads_banner_top a",//顶部广告条
        "position": "absolute",
        "top": "10px",
        "right": "200px"
    },  {
        "parentNode": ".js_ads_banner_top_slide a",//顶部第一次打开页面广告图
        "position": "absolute",
        "bottom": "10px",
        "right": "10px"
    }, {
        "parentNode": ".fixLeftAd",//左边浮动广告
        "position": "absolute",
        "bottom": "-15px",
        "right": "9px"
    },  {
        "parentNode": ".first-big-img",//首页弹出大图
        "position": "absolute",
        "top": "650px",
        "right": "-700px"
    }
    //, {
    //    "parentNode": ".ui-ad-content a",//首页快捷入口
    //    "relative": "relative",
    //    "bottom": "10px",
    //    "right": "10px"
    //}, {
    //    "parentNode": ".site-hot-item-fl",//首页专场爆款
    //    "position": "absolute",
    //    "bottom": "10px",
    //    "right": "10px",
    //}, {
    //    "parentNode": ".big",//首页品牌专栏
    //    "relative": "relative",
    //    "bottom": "10px",
    //    "right": "10px"
    //}
    //{
    //    "parentNode": ".js_ads_banner_main a",
    //    "relative": "relative",
    //    "bottom": "10px",
    //    "right": "10px"
    //}, {
    //    "parentNode": ".first-big-img a",
    //    "relative": "relative",
    //    "bottom": "10px",
    //    "right": "10px"
    //}
    ];
    $(".fixLeftAd_close").click(function () {
        $(".fixLeftAd").css("display","none")
    })
    $.each(adContainer, function (i, list) {
        var html = [];
        var imgUrl = "http://static.boodoll.cn/mall/v16/images/myzj_law2_small.png";
        html.push('<img style="width:auto; height:auto;z-index:2;position: absolute;border-radius:0; bottom:' + list.bottom + ';top:' + list.top + '; right:' + list.right + '" src="' + imgUrl + '">');
        $.each($(list.parentNode), function (j, item) {
            $(item).css("position", list.relative);
            $(item).append(html.join(""));
        });

    });
}
