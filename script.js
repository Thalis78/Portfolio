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
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links.md\\:hidden");

nav.innerHTML = `
  <li><a href="#home" class="hover:text-blue-400 block py-2">Home</a></li>
  <li><a href="#sobre" class="hover:text-blue-400 block py-2">Sobre</a></li>
  <li><a href="#projetos" class="hover:text-blue-400 block py-2">Projetos</a></li>
  <li><a href="#contato" class="hover:text-blue-400 block py-2">Contato</a></li>

`;

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});
