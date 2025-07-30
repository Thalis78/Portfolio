const template = document.getElementById("icons").content;

const row1 = document.getElementById("icon-row-1");
const row2 = document.getElementById("icon-row-2");

for (let i = 0; i < 5; i++) {
  row1.appendChild(template.cloneNode(true));
}
for (let i = 0; i < 5; i++) {
  row2.appendChild(template.cloneNode(true));
}

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.remove("animated-click");
    img.classList.add("animated-click");
  });
});
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  const isActive = menuToggle.classList.toggle("active");

  if (isActive) {
    mobileMenu.classList.add("scale-y-100", "opacity-100");
    mobileMenu.classList.remove("scale-y-0", "opacity-0");
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    mobileMenu.classList.remove("scale-y-100", "opacity-100");
    mobileMenu.classList.add("scale-y-0", "opacity-0");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
