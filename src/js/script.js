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

langtouch.addEventListener("click", () => {
  if (lang == "fr"){
    barrefr.ariaHidden = "true";
    barreen.ariaHidden = "false";
  }
  else {
    barrefr.ariaHidden ="false";
    barreen.ariaHidden = "true";
  }
});
