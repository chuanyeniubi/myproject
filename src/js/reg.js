require(['config'], function() {
    require(['jquery'], function($) {

        //表单验证
        var btn = document.getElementById('btnReg');
        var pars = document.querySelector('.pars')
        var span = pars.getElementsByTagName('span');
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        var yao1 = document.querySelector('.yao1')
        var yao2 = document.querySelector('.yao2')
        var qiang = document.querySelector('.qiang')



        username.onfocus = function() {
            yao1.style.display = 'block'
        }
        password.onfocus = function() {
            yao2.style.display = 'block'
            qiang.style.display = 'block'


        }

        btn.onclick = function(e) {
            e = e || window.event;
            // 表单验证
            // 登录名
            // 必填
            // 数字或字母组合
            // 不能少于3位;
            var denglu = document.getElementById('username').value;
            if (!/^[\da-zA-Z]{3,}$/.test(denglu)) {
                alert('用户名不合法');
                return false;
            } else {

                // 必填
                // 至少6位
                // 显示密码强度
                // 弱：只有数字
                // 一般：数字字母组合
                // 强：数字字母特殊字符组合
                mima = password.value;
                if (!/^.{6,}$/.test(mima) || /\s+/.test(mima)) {
                    alert('密码不合法');
                    return false;

                }
                // 传递用户信息到后台


                $.ajax({
                    url: '../api/reg.php',
                    data: {
                        username: $('#username').val(),
                        password: $('#password').val()
                    },
                    success: function(res) {
                        console.log(res);
                        if (res === 'ok') {
                            alert('注册成功')
                            window.location.href = 'http://localhost/myproject/src/html/login.html'
                            return false;
                        }
                        if (res === 'no') {} {
                            alert('用户名存在')
                        }

                    }
                });
                // 密码

            }


        }


        //跳转
        $('.reg2').on('click', function() {
            window.location.href = 'http://localhost/myproject/src/html/login.html'
        })


        // 显示密码强度
        // 弱：只有数字
        // 一般：数字字母组合
        // 强：数字字母特殊字符组合;
        var mima = document.getElementById('password');
        mima.oninput = function() {
            // 纯数字或者纯字母 密码强调弱
            if (/^\d{6,}$/.test(mima.value) || /^[a-zA-Z]{6,}$/.test(mima.value)) {
                span[0].style.background = 'red';
                span[0].innerHTML = '弱';
                span[1].style.background = '';
                span[1].innerHTML = '';
                span[2].style.background = '';
                span[2].innerHTML = '';

            } else if (/^[0-9a-zA-Z]{6,}$/.test(mima.value)) {
                span[0].style.background = 'yellow';
                span[0].innerHTML = '';
                span[1].style.background = 'yellow';
                span[1].innerHTML = '中';
                span[2].style.background = '';
                span[2].innerHTML = '';

            } else if (/^.{6,}$/.test(mima.value) && /[\d]+/.test(mima.value) && /[a-zA-Z]+/.test(mima.value)) {
                span[0].style.background = 'green';
                span[0].innerHTML = '';
                span[1].style.background = 'green';
                span[1].innerHTML = '';
                span[2].style.background = 'green';
                span[2].innerHTML = '强';
            } else {
                span[0].style.background = '';
                span[0].innerHTML = '';
                span[1].style.background = '';
                span[1].innerHTML = '';
                span[2].style.background = '';
                span[2].innerHTML = '';
            }
        }



    });
});
