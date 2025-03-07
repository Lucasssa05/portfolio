document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.querySelector("header").offsetHeight;

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - headerHeight - 10; // Ajuste para não cobrir a seção
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });
});
