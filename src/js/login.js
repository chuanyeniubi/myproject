require(['config'], function() {
    require(['jquery'], function($) {
        // $('.yao1').hide();
        // $('.yao2').hide();
        // 传递用户信息到后台
        $('#btnReg').on('click', function() {
            $.ajax({
                url: '../api/login.php',
                // type:"post",
                // datatype:"JSON",
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                success: function(res) {
                    console.log(res);
                    if ($('#username').val() == "") {
                        return false;
                    }
                    if (res === 'OK') {

                        window.location.href = 'http://localhost/myproject/src/html/index.html'
                    }
                    if (res === 'NO') {
                        alert('密码不正确')
                    }
                }
            });
        });


        // $('#username').focus(function(){
        //  if ($('#username').val()=="") {
        //      $('.yao1').show();

        //  }

        // })
        // $('#username').blur(function(){
        //      $('.yao1').hide();

        // })

        //  $('#password').focus(function(){
        //  if ($('#password').val()=="") {
        //      $('.yao2').show();

        //  }

        // })
        // $('#password').blur(function(){
        //      $('.yao2').hide();

        // })
        $('.reg1').on('click', function() {
            window.location.href = 'http://localhost/myproject/src/html/reg.html'
        })


        //七天免登录


        var username = document.getElementById('username');
        var password = document.getElementById('password');
        var btnLogin = document.getElementById('btnReg');
        var check = document.getElementById('check');

        btnLogin.onclick = function() {
            var _username = username.value;
            var _psw = password.value;

            var str1 = 'username=' + _username;
            var str2 = 'password=' + _psw;
            if (check.checked) {
                var now = new Date();
                now.setDate(now.getDate() + 7);

                // 有效期1分钟
                // now.setMinutes(now.getMinutes()+1);

                str1 += ';expires=' + now.toUTCString();
                str2 += ';expires=' + now.toUTCString();
            }

            // 把用户名和密码存入cookie
            // document.cookie = str1+";path=/";

            // document.cookie = str2+";path=/";

            document.cookie = str1;

            document.cookie = str2;
            //location.href = 'http://localhost/myproject/src/index.html';
        }


        // 刷新页面判断登录状态
        // 如果cookie中保存username和密码，直接跳转到欢迎页面
        var cookies = document.cookie;

        if (cookies) {
            var arr = cookies.split('; ');

            arr.forEach(function(item) {
                var temp = item.split('=');
                if (temp[0] === 'username') {
                    location.href = 'http://localhost/myproject/src/html/index.html';
                }
            });
        }
        //七天免登录

        // var msg = document.getElementById('msg');

        // // 读取cookie
        // var cookies = document.cookie;

        // if(cookies){
        //  var arr = cookies.split('; ');

        //  arr.forEach(function(item){
        //      var temp = item.split('=');
        //      if(temp[0] === 'username'){
        //          msg.innerHTML = temp[1] + '<button>退出</button>'
        //      }
        //  });
        // }


        // // 删除cookie
        // // 利用设置有效时间来达到删除的效果
        // msg.onclick = function(e){
        //  e = e || window.event;
        //  var target = e.target || e.srcElement;

        //  if(target.tagName.toLowerCase() === 'button'){
        //      var now = new Date('2017-5-9');

        //      document.cookie = 'username=null;expires=' + now.toUTCString();

        //      location.href = '04七天免登录.html';
        //  }
        // }


    });
});
