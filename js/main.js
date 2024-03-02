console.log("Script loaded successfully!");

function scrollHeader() {
  const nav = document.getElementById("header");
  if (window.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// ------------------------- new popup Modal -----------------------------------
let preveiwContainer = document.querySelector(".services-preview");
let previewBox = preveiwContainer.querySelectorAll(".service");

document.querySelectorAll(".see-more").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".uil-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});
