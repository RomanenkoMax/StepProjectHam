let pic = document.getElementsByClassName('pic-menu')[0];
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
    while (picItems.length > 12) {
        picturesDiv.removeChild(picItems[picItems.length - 1]);
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
    let link = document.querySelector('a[name=load]');
    link.style.display = 'inline-block';
    a = 0;
});

selectedPic[1].addEventListener('click', function () {
    while (picItems.length > 12) {
        picturesDiv.removeChild(picItems[picItems.length - 1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/graphic-design${i + 1}.jpg')`;
    }
    let link = document.querySelector('a[name=load]');
    link.style.display = 'inline-block';
    a = 0;
});

selectedPic[2].addEventListener('click', function () {
    while (picItems.length > 12) {
        picturesDiv.removeChild(picItems[picItems.length - 1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/web-design${i + 1}.jpg')`;
    }
    let link = document.querySelector('a[name=load]');
    link.style.display = 'inline-block';
    a = 0;
});

selectedPic[3].addEventListener('click', function () {
    while (picItems.length > 12) {
        picturesDiv.removeChild(picItems[picItems.length - 1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/landing-page${i + 1}.jpg')`;
    }
    let link = document.querySelector('a[name=load]');
    link.style.display = 'inline-block';
    a = 0;
});

selectedPic[4].addEventListener('click', function () {
    while (picItems.length > 12) {
        picturesDiv.removeChild(picItems[picItems.length - 1]);
    }
    for (let i = 0; i < picItems.length; i++) {
        picItems[i].style.background = `url('img/work/wordpress${i + 1}.jpg')`;
    }
    let link = document.querySelector('a[name=load]');
    link.style.display = 'inline-block';
    a = 0;
});

let load = document.getElementsByName('load')[0];
let a = 0;
load.addEventListener('click', function (event) {
    let elem = this;
    startLoad(elem);
    setTimeout(function () {
        stopLoad(elem);
        addPic1();
    }, 3000);
});

function addPic1() {
    a++;
    let cont = document.getElementsByClassName('pictures')[0];
    for (let i = 1; i < 13; i++) {
        let link = document.createElement("a")
        link.className = "pic-item";
        link.style.background = `url('img/work/graphic-design${i}.jpg')`;
        cont.appendChild(link);
    }
    if (a >= 2) {
        let link = document.querySelector('a[name=load]');
        console.log(link);
        link.style.display = 'none';
    }
}

let load1 = document.getElementsByName('load1')[0];
let msnry;
let grid = document.querySelector('div.best-pic');
msnry = new Masonry(grid, {
    itemSelector: '.best-item',
    columnWidth: '.best-sizer',
    percentPosition: true,
    // gutter: 1,
    stagger: 30,
});
let i = 0;

function addPic2 () {
    i++;
    let sniped = document.createDocumentFragment();
    let elem0 = document.createElement('img');
    elem0.setAttribute('src', 'img/masonry/5.jpg');
    let elem1 = document.createElement('img');
    elem1.setAttribute('src', 'img/masonry/6.jpg');
    let elem2 = document.createElement('img');
    elem2.setAttribute('src', 'img/masonry/7.jpg');
    let elem3 = document.createElement('img');
    elem3.setAttribute('src', 'img/masonry/3.jpg');
    let elem4 = document.createElement('img');
    elem4.setAttribute('src', 'img/masonry/1.jpg');

    let cont = document.createElement('div');
    cont.setAttribute('class', 'best-item');
    cont.appendChild(elem0);

    let cont1 = document.createElement('div');
    cont1.setAttribute('class', 'best-item');
    cont1.appendChild(elem1);

    let cont2 = document.createElement('div');
    cont2.setAttribute('class', 'best-item');
    cont2.appendChild(elem2);

    let cont3 = document.createElement('div');
    cont3.setAttribute('class', 'best-item');
    cont3.appendChild(elem3);

    let cont4 = document.createElement('div');
    cont4.setAttribute('class', 'best-item');
    cont4.appendChild(elem4);

    sniped.appendChild(cont);
    sniped.appendChild(cont1);
    sniped.appendChild(cont2);
    sniped.appendChild(cont3);
    sniped.appendChild(cont4);

    let bestPic = document.querySelector('div.best-pic');
    bestPic.appendChild(sniped);

    msnry = new Masonry(bestPic, {
        itemSelector: '.best-item',
        columnWidth: '.best-sizer',
        percentPosition: true,
        // gutter: 10,
        stagger: 30,
    });
    msnry.layout();
    if (i >= 2) {
        let link = document.querySelector('a[name=load1]');
        console.log(link);
        link.style.display = 'none';
    }
};

load1.addEventListener('click', function (event) {
    event.preventDefault();
    let elem = this;
    startLoad(elem);
    setTimeout(function () {
        stopLoad(elem);
        addPic2();
    }, 3000);
});

grid.addEventListener('click', function (event) {
    msnry = new Masonry(grid, {
        itemSelector: '.best-item',
        columnWidth: '.best-sizer',
        percentPosition: true,
        // gutter: 1,
        stagger: 30,
    });

    if (!matchesSelector(event.target.parentElement, '.best-item')) {
        return;
    }

    if (matchesSelector(event.target.parentElement, '.best-item-9')) {
        event.target.parentElement.classList.toggle('grid-item--gigante-9');
        msnry.layout();
    } else {
        event.target.parentElement.classList.toggle('grid-item--gigante');

        msnry.layout();
    }
});

function startLoad(elem) {
    // console.log(elem);
    // console.log(elem.previousElementSibling);
    elem.previousElementSibling.style.display = 'inline-block';
    // console.log(elem.previousElementSibling);
}

function stopLoad(elem) {
    console.log(elem);
    console.log(elem.previousElementSibling);
    elem.previousElementSibling.style.display = 'none';
    console.log(elem.previousElementSibling);
}
