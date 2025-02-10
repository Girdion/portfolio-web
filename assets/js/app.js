const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "freelancer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const roleContainer = document.querySelector(".role-container");

document.querySelector(".burger-menu").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
});
