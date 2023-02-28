// ----------------MOBILE MENU------------------------
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.createElement("img");
const logo = document.getElementById("logo");

closeIcon.alt = "close-menu-icon";
closeIcon.src = "./images/icon-close.svg";

const hamburgerIcon = document.createElement("img");
hamburgerIcon.alt = "open-menu-icon";
hamburgerIcon.src = "./images/icon-hamburger.svg";

function setIcon(icon) {
  hamburger.innerHTML = "";
  hamburger.appendChild(icon);
}

function handleHamburgerClick(e) {
  if (mobileMenu.classList.contains("close")) {
    setIcon(closeIcon);
    logo.style.visibility = "hidden";
    mobileMenu.classList.remove("close");
  } else {
    mobileMenu.classList.add("close");
    setIcon(hamburgerIcon);
    logo.style.visibility = "visible";
  }
}

hamburger.addEventListener("click", handleHamburgerClick);

// ----------------TABS-------------------------------
const btn = document.querySelectorAll("[data-tab-button]");
const tabs = document.querySelectorAll("[data-tab-content]");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    tabs.forEach((content) => {
      content.classList.remove("current");
    });
    btn.forEach((b) => {
      b.classList.remove("active");
    });

    const element = document.getElementById(e.target.dataset.tabButton);
    element.classList.add("current");
    button.classList.add("active");
  });
});

// -----------------FAQ-Hover-------------------------
const collapseTabs = document.querySelectorAll(".collapse-element");

collapseTabs.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    e.target.childNodes[3].firstElementChild.style.color = "hsl(0, 94%, 66%)";
  });
  element.addEventListener("mouseleave", (e) => {
    e.target.childNodes[3].firstElementChild.style.color = "hsl(229, 31%, 21%)";
  });
});
