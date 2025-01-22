// Show modal
const btnsDemo = document.querySelectorAll(".btn__demo");

btnsDemo.forEach((btn) => btn.addEventListener("click", showModalDemo));

function showModalDemo() {
  const modalDemo = document.querySelector(".modal__demo");

  modalDemo.classList.add("modal_show");
  modalDemo.addEventListener("click", (e) => {
    e.target.classList.contains("modal_show") &&
      e.target.classList.remove("modal_show");
  });
}

// box shadow for menu
const headerContainer = document.querySelector(".header__container");
window.addEventListener("scroll", () => {
  window.scrollY >= 10
    ? headerContainer.classList.add("header__container_scroll")
    : headerContainer.classList.remove("header__container_scroll");
});

// Open menu
document.querySelector(".header__icon").addEventListener("click", openMenu);

function openMenu() {
  const headerContainer = document.querySelector(".header__container");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");
  const menuLinks = document.querySelectorAll(".menu__link");

  if (this.classList.contains("header__icon_active")) {
    this.classList.remove("header__icon_active");
    headerContainer.classList.remove("header__container_active");
    overlay.classList.remove("overlay_show");
    menu.classList.remove("menu_show");
  } else {
    this.classList.add("header__icon_active");
    headerContainer.classList.add("header__container_active");
    overlay.classList.add("overlay_show");
    menu.classList.add("menu_show");

    overlay.addEventListener("click", () => {
      this.classList.remove("header__icon_active");
      headerContainer.classList.remove("header__container_active");
      overlay.classList.remove("overlay_show");
      menu.classList.remove("menu_show");
    });

    menuLinks.forEach((link) =>
      link.addEventListener("click", (e) => {
        this.classList.remove("header__icon_active");
        headerContainer.classList.remove("header__container_active");
        overlay.classList.remove("overlay_show");
        menu.classList.remove("menu_show");
      })
    );
  }
}

// Initial sliders
// Trust
new Splide(".trust__splide-1", {
  perPage: 7,
  rewind: true,
  arrows: false,
  pagination: false,
  type: "loop",
  drag: "free",
  gap: "20px",
  autoScroll: {
    pauseOnHover: false,
    speed: 0.5,
  },
  breakpoints: {
    540: {
      perPage: 3,
    },
  },
}).mount(window.splide.Extensions);

new Splide(".trust__splide-2", {
  perPage: 7,
  rewind: true,
  arrows: false,
  pagination: false,
  type: "loop",
  drag: "free",
  gap: "20px",
  autoScroll: {
    pauseOnHover: false,
    speed: -0.5,
  },
  breakpoints: {
    540: {
      perPage: 3,
    },
  },
}).mount(window.splide.Extensions);

new Splide(".solution__steps", {
  perPage: 4,
  rewind: true,
  arrows: false,
  pagination: false,
  gap: "30px",
  breakpoints: {
    1300: {
      perPage: 3,
      pagination: true,
    },
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
    },
  },
}).mount();

new Splide(".reviews__splide", {
  perPage: 4,
  rewind: true,
  arrows: false,
  pagination: false,
  type: "loop",
  padding: "20px",
  gap: "20px",
  autoScroll: {
    pauseOnHover: false,
    speed: 0.4,
  },
  breakpoints: {
    1300: {
      perPage: 3,
      pagination: true,
    },
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
    },
  },
}).mount(window.splide.Extensions);

new Splide(".plans__splide", {
  perPage: 3,
  rewind: true,
  arrows: false,
  pagination: false,
  gap: "20px",
  breakpoints: {
    1300: {
      perPage: 2,
      pagination: true,
    },
    768: {
      perPage: 1,
    },
  },
}).mount();
