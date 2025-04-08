const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    nemuBtenicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content .section_description",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header_form form",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".about_card",{
    ...scrollRevealOption,
    interval: 500,
});

const tabs = document.querySelector(".deals_tabs");

tabs.addEventListener("click", (e) => {
    const tabContents = document.querySelectorAll(".deals_container .tab_content");
    Array.from(tabs.children).forEach((item) => {
        if (item.dataset.id === e.target.dataset.id) {
            item.classList.add("active");
        }else {
            item.classList.remove("active");
        }
    });
tabContents.forEach(item => {
    if(item.id === e.target.dataset.id){

        item.classList.add("active");
        }else {
            item.classList.remove("active");
        }
});
});

ScrollReveal().reveal(".choose_image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".choose_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".choose_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".choose_card", {
    duration: 1000,
    delay: 1500,
    interval: 500,
  });

  ScrollReveal().reveal(".subscribe__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".subscribe__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".subscribe__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".subscribe__content form", {
    ...scrollRevealOption,
    delay: 1500,
  });

  const swiper = new Swiper(".swiper", {
    slidesPreview: 3,
    spaceBetween: 20,
    loop: true,
  });