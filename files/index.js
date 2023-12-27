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
}

window.addEventListener('load', function() {
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


window.addEventListener('load', function() {
    var ad = document.querySelector('.ad');
    var now = new Date();
    var hour = now.getHours();
    if (hour >= 6 && hour < 23) {
        ad.style.display = 'block';
    } 
});





