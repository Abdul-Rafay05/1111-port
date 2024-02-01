var typed = new Typed(".text_fur", {
    strings: ["Fronted Developer. ", "Graphic Designer. ", "Web Developer. "],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("header").addClass("change_header");
    }
    else {
        $("header").removeClass("change_header");
    }
})
const toggle = document.getElementById("toggle-btn");
const ul = document.querySelector("ul");
toggle.addEventListener('click', () => {
    ul.classList.toggle("toggle_style")
})