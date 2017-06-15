
		    var msg = document.getElementById('msg');

		    // 读取cookie
		    var cookies = document.cookie;

		    if (cookies) {
		        var arr = cookies.split('; ');

		        arr.forEach(function(item) {
		            var temp = item.split('=');
		            if (temp[0] === 'username') {
		                msg.innerHTML = '欢迎' + temp[1] + '<button class="btn1 btn-primary btn-xs" target="_self" style="background-color: #FF5c00;border:1px solid #FF5c00">退出</button>'
		            }
		        });
		    }


		    // 删除cookie
		    // 利用设置有效时间来达到删除的效果
		    // msg.onclick = function(e){
		    // 	e = e || window.event;
		    // 	var target = e.target || e.srcElement;

		    // 	if(target.tagName.toLowerCase() === 'button'){
		    // 		var now = new Date('2017-5-9');

		    // 		document.cookie = 'username=null;expires=' + now.toUTCString();

		    // 		location.href = 'http://localhost/myproject/src/html/list.html';
		    // 	}
		    // }
		    var msg1 = document.querySelector('.icon1');

		    // 读取cookie
		    var cookies = document.cookie;

		    if (cookies) {
		        var arr = cookies.split('; ');

		        arr.forEach(function(item) {
		            var temp = item.split('=');
		            if (temp[0] === 'username') {
		                msg1.innerHTML = '欢迎' + temp[1]
		            }
		        });
		    }

