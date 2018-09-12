let pic = document.getElementsByClassName('pic-menu')[0];
console.log(pic);
pic.onclick = function (event) {
    let target = event.target;
    target.classList.add('active-work');
    let picItem = document.getElementsByClassName('pic-menu-item');
    for (let i = 0; i < picItem.length; i++) {
        if (picItem[i] !== target) {
            picItem[i].classList.remove('active-work')
        }
    }
};

let picItems = document.getElementsByClassName('pic-item');

for (let i = 0; i < picItems.length; i++) {
    picItems[i].style.background = `url('img/work/graphic-design${i + 1}.jpg')`;
}

let picturesDiv = document.getElementsByClassName('pictures')[0];

let selectedPic = document.getElementsByClassName('pic-menu-item');
selectedPic[0].addEventListener('click', function () {
    while (picItems.length > 12){
        picturesDiv.removeChild(picItems[picItems.length-1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        if (i < 3) {
            picItems[i].style.background = `url('img/work/graphic-design${i + 1}.jpg')`;
        }
        if (i > 2 && i < 6) {
            picItems[i].style.background = `url('img/work/landing-page${i + 1}.jpg')`;
        }
        if (i > 5 && i < 9) {
            picItems[i].style.background = `url('img/work/web-design${i + 1}.jpg')`;
        }
        if (i > 8 && i < 12) {
            picItems[i].style.background = `url('img/work/wordpress${i + 1}.jpg')`;
        }
    }
});

selectedPic[1].addEventListener('click', function () {
    while (picItems.length > 12){
        picturesDiv.removeChild(picItems[picItems.length-1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/graphic-design${i + 1}.jpg')`;
    }
});

selectedPic[2].addEventListener('click', function () {
    while (picItems.length > 12){
        picturesDiv.removeChild(picItems[picItems.length-1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/web-design${i + 1}.jpg')`;
    }
});

selectedPic[3].addEventListener('click', function () {
    while (picItems.length > 12){
        picturesDiv.removeChild(picItems[picItems.length-1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/landing-page${i + 1}.jpg')`;
    }
});

selectedPic[4].addEventListener('click', function () {
    while (picItems.length > 12){
        picturesDiv.removeChild(picItems[picItems.length-1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/wordpress${i + 1}.jpg')`;
    }
});

let load = document.getElementsByName('load')[0];

load.addEventListener('click', function (event) {
    let cont = document.getElementsByClassName('pictures')[0];
    for (let i = 1; i < 13; i++) {
        let link = document.createElement("a")
        link.className = "pic-item";
        link.style.background = `url('img/work/graphic-design${i}.jpg')`;
        cont.appendChild(link);
    }
});