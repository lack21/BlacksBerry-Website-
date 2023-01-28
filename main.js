// lear
// BlacksBerry

window.addEventListener("DOMContentLoaded", () => {
  // Removing Blurred Style From Body
  document.body.classList.remove("blurred");

  const switchBtn = document.querySelector(".switch-btn");
  let switchMode = false;

  const navLinks = document.querySelector(".nav-links");
  const hideLinksBtn = document.querySelector(".hide-links-btn");
  const showLinksBtn = document.querySelector(".show-links-btn");

  const offerBtn = document.querySelector(".offer-btn");
  const hiddenOffers = document.querySelectorAll(".hidden-offer");
  let offerMode = false;

  const itemsBtn = document.querySelector(".item-btn");
  const hiddenItems = document.querySelectorAll(".hidden-item");
  let itemMode = false;

  const container = document.querySelector(".container");
  const sliderBtns = document.querySelectorAll(".slider-btn");

  const navBar = document.querySelector(".nav-bar");
  const backBtn = document.querySelector(".back-btn");

  // Switching Body's Background
  switchBtn.addEventListener("click", () => {
    switchMode = !switchMode;

    if (switchMode) {
      document.body.classList.add("dark-body");
      switchBtn.innerHTML = 'Dark <i class="fa fa-moon-o"></i>';
    } else {
      document.body.classList.remove("dark-body");
      switchBtn.innerHTML = 'Light <i class="fa fa-sun-o"></i>';
    }
  });

  // Show Navigation Links
  showLinksBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
  });

  // Hide Navigation Links
  hideLinksBtn.addEventListener("click", () => {
    navLinks.style.right = "-160px";
  });

  // Show / Hide Offers
  offerBtn.addEventListener("click", () => {
    offerMode = !offerMode;

    if (offerMode) {
      offerBtn.innerHTML = "SHOW LESS!";

      hiddenOffers.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      offerBtn.innerHTML = "SHOW MORE!";

      hiddenOffers.forEach((item) => {
        item.style.display = "none";
      });
    }
  });

  // Show / Hide Items
  itemsBtn.addEventListener("click", () => {
    itemMode = !itemMode;

    if (itemMode) {
      itemsBtn.innerHTML = "SHOW LESS!";

      hiddenItems.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      itemsBtn.innerHTML = "SHOW MORE!";

      hiddenItems.forEach((item) => {
        item.style.display = "none";
      });
    }
  });

  // Sliding through testimonials
  sliderBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      container.style.transform = `translateX(-${index * 100}vw)`;

      sliderBtns.forEach((item) => item.classList.remove("active"));

      item.classList.add("active");
    });
  });

  // Show / Hide Navigation on scrolling
  // Show / Hide Back Button on scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      backBtn.style.display = "block";
      navBar.style.padding = "1rem 5%";
      navBar.style.backgroundColor = "#f69636";
    } else {
      backBtn.style.display = "none";
      navBar.style.padding = "3% 5%";
      navBar.style.backgroundColor = "transparent";
    }
  });
});
