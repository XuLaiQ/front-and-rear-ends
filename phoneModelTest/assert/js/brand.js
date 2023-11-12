// 获取所有的图片元素
let images = document.getElementsByTagName("img");

// 遍历每个图片元素并添加点击事件监听器
for (let i = 0; i < images.length; i++) {
    let temp_src = "";
    images[i].addEventListener("mouseenter", function(event) {
        temp_src = images[i].src
        images[i].src = "assert/backg.png"
    });
    images[i].addEventListener("mouseleave",function (e) {
        images[i].src = temp_src
    });
}