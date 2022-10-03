const arrSlider = [
    {
    url: "images/projects.jpg",
    city: "Rostov-on-Don LCD admiral",
    time: "3.5 months",
    area: "81 m2",
    },
    {
    url: "images/Sochi.jpg",
    city: "Sochi Thieves",
    time: "4 months",
    area: "105 m2",
    },
    {
    url: "images/patriotic.jpg",
    city: "Rostov-on-Don Patriotic",
    time: "3 months",
    area: "93 m2",
    },
];




let arrSliderIndex = 0;

function changeSlider(index) {
    let city = document.querySelector(".slider_city");
    let time = document.querySelector(".slider_time");
    let area = document.querySelector(".slider_area");
    let img = document.querySelector(".slider_img");
    let dots = document.querySelectorAll(".slider_dots .circle");
    let lastActiveDot = document.querySelector(".slider_dots .circle_active");
    let links = document.querySelectorAll(".slider a")
    let lastActiveLink = document.querySelector(".slider a.active");


    lastActiveDot.classList.remove("circle_active");
    dots[index].classList.add("circle_active");
    lastActiveLink.classList.remove("active");
    links[index].classList.add("active");
    city.innerText = arrSlider[index].city;
    time.innerText = arrSlider[index].time;
    area.innerText = arrSlider[index].area;
    img.src = arrSlider[index].url;
};


const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider_dots .circle");
const links = document.querySelectorAll(".slider a");

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        let thisEl = e.target;
        dots.forEach((el, i) => {
            if (thisEl == el) {
                arrSliderIndex = i
                changeSlider(i)
            }
        })
    })
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let thisEl = e.target;
        links.forEach((el, i) => {
            if (thisEl == el) {
                arrSliderIndex = i
                changeSlider(i)
            }
        })
    })
});

prev.addEventListener('click',()=>{
    if (arrSliderIndex == 0) {
        arrSliderIndex = arrSlider.length-1
    } else {
        arrSliderIndex -= 1;
    }
    changeSlider(arrSliderIndex)
});

next.addEventListener('click',()=>{
    if (arrSliderIndex == arrSlider.length-1) {
        arrSliderIndex = 0
    } else {
        arrSliderIndex += 1;
    }
    changeSlider(arrSliderIndex)
});

    changeSlider(arrSliderIndex)