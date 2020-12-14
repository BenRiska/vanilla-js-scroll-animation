const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {

    // how far youve scrolled down
    let scroll = window.pageYOffset;

    // scroll position values for section
    let sectionY = section.getBoundingClientRect();
    

    // uses html data to calculate individual translate values
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });


    // content opacity
    opacity.forEach(element => {
        // adjust section height to be the same as scroll 
        element.style.opacity = scroll / (sectionY.top + section_height);
    })


    // the + 1 at the end is initial opacity, (- scroll / (header_height / 2)) starts at 0 and goes into minus on scroll untill opacity reaches 0. to re create in a different format just make sure your scroll value starts at the top of the container
    console.log(- scroll / (header_height));
    big_title.style.opacity = - scroll / (header_height / 2) + 1;


    // increases height the more you scroll
    shadow.style.height = `${scroll * 0.5 + 300}px`;


    // using the same method to get a number between 0 and 1 for how much youve scrolled towards the container times by the number you want to use at max value
    console.log(scroll / (section_height + sectionY.top) * 50 - 50)
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;


    // same as above, just inverted values for 50px instead of -50px
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;


    // same as opacity, just multipy by whatever percent you want to get
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})