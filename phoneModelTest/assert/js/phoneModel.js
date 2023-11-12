// 获取开机和关机按钮以及图片元素
let powerOnButton = document.getElementById('powerOnButton');
let powerOffButton = document.getElementById('powerOffButton');
let powerOnImage = document.getElementById('powerOnImage');
let powerOffImage = document.getElementById('powerOffImage');

// 为开机按钮添加点击事件监听器
powerOnButton.addEventListener('click', function() {
    // alert('请手动开机');
    powerOnImage.style.display = 'block';
    powerOffImage.style.display = 'none';
});

// 为关机按钮添加点击事件监听器
powerOffButton.addEventListener('click', function() {
    // alert('请手动关机');
    powerOffImage.style.display = 'block';
    powerOnImage.style.display = 'none';
});