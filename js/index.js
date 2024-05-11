function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}


function toggleMenu(id, arrowSelector) {
    var menu = document.getElementById(id);
    var arrow = document.querySelector(arrowSelector);
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        arrow.style.transform = "rotate(90deg)";
    } else {
        menu.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }

    // 获取div下的所有img元素
    var imgs = menu.querySelectorAll('img');

    for (var i = 0; i < imgs.length; i++) {
        (function (i) {
            var temp = new Image();
            temp.src = imgs[i].getAttribute('data-src'); // 只会请求一次
            // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
            temp.onload = function () {
                // 获取自定义属性data-src，用真图片替换假图片
                imgs[i].src = imgs[i].getAttribute('data-src');
            };
        })(i);
    }
}

window.addEventListener('load', function () {
    // 获取所有菜单项
    var menuItems = document.querySelectorAll(".mulu a");
    // 遍历所有菜单项
    for (var i = 0; i < menuItems.length; i++) {
        var item = menuItems[i];
        // 判断菜单项是否与当前页面匹配
        if (item.textContent === currentPage) {
            // 修改菜单项的样式
            item.parentNode.style.backgroundColor = "rgb(212, 115, 25)";
            item.style.color = "rgb(0, 0, 0)";
            // 添加过渡效果
            item.parentNode.style.transition = "background-color 0.5s ease";
            item.style.transition = "color 0.5s ease";
        }
    }
});


window.addEventListener('load', function () {
    var ad = document.querySelector('.ad');
    var now = new Date();
    var hour = now.getHours();
    if (hour >= 6 && hour < 23) {
        ad.style.display = 'block';
    }
});

function removeStyle() {
    var columns = document.getElementsByClassName("mulu");
    for (var i = 0; i < columns.length; i++) {
        columns[i].removeAttribute("style");
    }
}

function removeLanmuStyle() {
    var columns = document.getElementsByClassName("lanmu");
    for (var i = 0; i < columns.length; i++) {
        columns[i].removeAttribute("style");
    }
}


function replaceContent(value) {
    var targetDiv = document.getElementById("xiazai"); // 获取目标<div>元素的引用

    var xhr = new XMLHttpRequest(); // 创建XMLHttpRequest对象
    if (value === 'Adobe') {
        removeStyle();
        document.getElementById("rj").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/rj.html'); // 设置请求类型、地址等信息
    }
    if (value === 'JetBrains') {
        removeStyle();
        document.getElementById("kf").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/kf.html'); // 设置请求类型、地址等信息
    }
    if (value === '软件开发') {
        removeStyle();
        document.getElementById("rjkf").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/rjkf.html'); // 设置请求类型、地址等信息
    }
    if (value === 'Autodesk') {
        removeStyle();
        document.getElementById("jm").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/jm.html'); // 设置请求类型、地址等信息
    }
    if (value === '电路设计') {
        removeStyle();
        document.getElementById("zdh").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/zdh.html'); // 设置请求类型、地址等信息
    }
    if (value === '办公软件') {
        removeStyle();
        document.getElementById("bg").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/bg.html'); // 设置请求类型、地址等信息
    }
    if (value === '平面设计') {
        removeStyle();
        document.getElementById("pm").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/pm.html'); // 设置请求类型、地址等信息
    }
    if (value === '三维设计') {
        removeStyle();
        document.getElementById("sw").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/sw.html'); // 设置请求类型、地址等信息
    }
    if (value === '建筑设计') {
        removeStyle();
        document.getElementById("jz").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/jz.html'); // 设置请求类型、地址等信息
    }
    if (value === 'topaz') {
        removeStyle();
        document.getElementById("topaz").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/topaz.html'); // 设置请求类型、地址等信息
    }
    if (value === 'like') {
        removeStyle();
        document.getElementById("like").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/like.html'); // 设置请求类型、地址等信息
    }
    if (value === 'ai') {
        removeStyle();
        document.getElementById("ai").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/ai.html'); // 设置请求类型、地址等信息
    }
    if (value === '渲染器') {
        removeStyle();
        document.getElementById("xrq").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/xrq.html'); // 设置请求类型、地址等信息
    }
    if (value === 'xuanranqi') {
        removeStyle();
        document.getElementById("xuanranqi").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/xuanranqi.html'); // 设置请求类型、地址等信息
    }
    if (value === 'shengmi') {
        removeStyle();
        document.getElementById("shengmi").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/shengmi.html'); // 设置请求类型、地址等信息
    }
    if (value === '解压工具和下载教程') {
        removeStyle();
        document.getElementById("jieyagj").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/jieyagj.html'); // 设置请求类型、地址等信息
    }
    if (value === '系统') {
        removeStyle();
        document.getElementById("xitong").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/xitong.html'); // 设置请求类型、地址等信息
    }

    // 视屏
    if (value === 'dianshi') {
        removeStyle();
        document.getElementById("dianshi").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'shiping/dianshi.html'); // 设置请求类型、地址等信息
    }
    if (value === 'dianyin') {
        removeStyle();
        document.getElementById("dianyin").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'shiping/dianyin.html'); // 设置请求类型、地址等信息
    }
    if (value === 'dongman') {
        removeStyle();
        document.getElementById("dongman").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'shiping/dongman.html'); // 设置请求类型、地址等信息
    }
    if (value === 'duanju') {
        removeStyle();
        document.getElementById("duanju").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'shiping/duanju.html'); // 设置请求类型、地址等信息
    }
    if (value === 'zongyi') {
        removeStyle();
        document.getElementById("zongyi").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'shiping/zongyi.html'); // 设置请求类型、地址等信息
    }

    //音频
    if (value === 'douyin') {
        removeStyle();
        document.getElementById("douyin").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'yinpin/douyin.html'); // 设置请求类型、地址等信息
    }
    if (value === 'jingdian') {
        removeStyle();
        document.getElementById("jingdian").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'yinpin/jingdian.html'); // 设置请求类型、地址等信息
    }
    if (value === 'yueyu') {
        removeStyle();
        document.getElementById("yueyu").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'yinpin/yueyu.html'); // 设置请求类型、地址等信息
    }
    if (value === 'zhuanji') {
        removeStyle();
        document.getElementById("zhuanji").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'yinpin/zhuanji.html'); // 设置请求类型、地址等信息
    }
    //资料
    if (value === 'kaogong') {
        removeStyle();
        document.getElementById("kaogong").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/kaogong.html'); // 设置请求类型、地址等信息
    }
    if (value === 'kaoyan') {
        removeStyle();
        document.getElementById("kaoyan").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/kaoyan.html'); // 设置请求类型、地址等信息
    }
    if (value === 'yinyu') {
        removeStyle();
        document.getElementById("yinyu").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/yinyu.html'); // 设置请求类型、地址等信息
    }
    if (value === 'gaokao') {
        removeStyle();
        document.getElementById("gaokao").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/gaokao.html'); // 设置请求类型、地址等信息
    }
    if (value === 'zhongkao') {
        removeStyle();
        document.getElementById("zhongkao").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/zhongkao.html'); // 设置请求类型、地址等信息
    }
    if (value === 'aoshu') {
        removeStyle();
        document.getElementById("aoshu").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/aoshu.html'); // 设置请求类型、地址等信息
    }
    if (value === 'xiaoxue') {
        removeStyle();
        document.getElementById("xiaoxue").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/xiaoxue.html'); // 设置请求类型、地址等信息
    }
    if (value === 'chuzhong') {
        removeStyle();
        document.getElementById("chuzhong").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/chuzhong.html'); // 设置请求类型、地址等信息
    }
    if (value === 'gaozhong') {
        removeStyle();
        document.getElementById("gaozhong").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/gaozhong.html'); // 设置请求类型、地址等信息
    }
    if (value === 'zhuanye') {
        removeStyle();
        document.getElementById("zhuanye").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/zhuanye.html'); // 设置请求类型、地址等信息
    }
    if (value === 'xiaoshuo1') {
        removeStyle();
        document.getElementById("xiaoshuo1").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/xiaoshuo1.html'); // 设置请求类型、地址等信息
    }
    if (value === 'gushi') {
        removeStyle();
        document.getElementById("gushi").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/gushi.html'); // 设置请求类型、地址等信息
    }
    if (value === 'mianshi') {
        removeStyle();
        document.getElementById("mianshi").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/mianshi.html'); // 设置请求类型、地址等信息
    }


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // 当请求状态变为4且HTTP状态码为200时表示请求已经完成并成功
            targetDiv.innerHTML = xhr.responseText; // 将新页面的内容赋值给目标<div>元素的innerHTML属性
        }
    };
    xhr.send(); // 发送请求
}

function replaceContentLanmu(value) {
    var targetDiv = document.getElementById("ruanjian"); // 获取目标<div>元素的引用

    var xhr = new XMLHttpRequest(); // 创建XMLHttpRequest对象
    if (value === 'lanmurj') {
        removeLanmuStyle();
        document.getElementById("lanmurj").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'ruanjian/ruanjian.html'); // 设置请求类型、地址等信息
    }
    if (value === 'lanmusp') {
        removeLanmuStyle();
        document.getElementById("lanmusp").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'shiping/shiping.html'); // 设置请求类型、地址等信息
    }
    if (value === 'lanmuyp') {
        removeLanmuStyle();
        document.getElementById("lanmuyp").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'yinpin/yinpin.html'); // 设置请求类型、地址等信息
    }
    if (value === 'lanmuxs') {
        removeLanmuStyle();
        document.getElementById("lanmuxs").style = "background-color: rgb(212, 115, 25); transition: background-color 0.5s ease 0s;";
        xhr.open('GET', 'xiaoshuo/xiaoshuo.html'); // 设置请求类型、地址等信息
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // 当请求状态变为4且HTTP状态码为200时表示请求已经完成并成功
            targetDiv.innerHTML = xhr.responseText; // 将新页面的内容赋值给目标<div>元素的innerHTML属性
        }
    };
    xhr.send(); // 发送请求
}

// window.onload = function(){ // 当页面完全加载时执行该函数
//     document.getElementById("myButton").click(); // 获取到指定id的元素，然后调用click()函数模拟点击事件
// };




