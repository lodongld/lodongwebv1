const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 300 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("activeLink"));
  li[len].classList.add("activeLink");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
