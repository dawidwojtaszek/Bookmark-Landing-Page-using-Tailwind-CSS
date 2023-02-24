const btn = document.querySelectorAll("[data-tab-button]");
const tabs = document.querySelectorAll("[data-tab-content]");
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    tabs.forEach((content) => {
      content.classList.remove("current");
    });

    const element = document.getElementById(e.target.dataset.tabButton);
    element.classList.add("current");
  });
});
