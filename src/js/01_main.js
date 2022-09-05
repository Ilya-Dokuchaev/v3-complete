const roomCarousel = new Carousel(document.querySelector("#roomCarousel"), {
  Dots: false,
});
const thumbRoomCarousel = new Carousel(
  document.querySelector("#thumbRoomCarousel"),
  {
    Sync: {
      target: roomCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
  }
);
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        roomCarousel.slideTo(roomCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});

const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});

let accordion = document.querySelector(".accordion");
let items = accordion.querySelectorAll(".accordion__item");
let title = accordion.querySelectorAll(".accordion__title");
function toggleAccordion() {
  let thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle("active");
      return;
    }
    // otherwise, remove the open class
    item.classList.remove("active");
  });
}

title.forEach((question) =>
  question.addEventListener("click", toggleAccordion)
);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-active");
    } else {
      reveals[i].classList.remove("reveal-active");
    }
  }
}

window.addEventListener("scroll", reveal);
