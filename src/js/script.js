/*menu*/

const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

/* changement langue*/

const lang = document.getElementsByTagName("HTML")[0].getAttribute("lang");
const barrefr = document.querySelector(".batonfr");
const barreen = document.querySelector(".batonen");
const langtouch = document.querySelector(".header__lang");

if (lang == "fr"){
  barrefr.ariaHidden = "false";
  barreen.ariaHidden = "true";
}
else {
  barrefr.ariaHidden ="true";
  barreen.ariaHidden = "false";
}


/*carroussel*/

const carousel = document.querySelector(".carroussel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

const premierItem = document.querySelector(".carroussel__item");
const scrollAmount = premierItem.clientWidth;

if (carousel){
    prevButton.addEventListener("click", () =>{
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth"});
    });
    nextButton.addEventListener("click", () =>{
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth"});
    });
}