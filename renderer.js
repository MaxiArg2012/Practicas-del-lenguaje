const navButtons = document.querySelectorAll('.main-nav button');
const sections = document.querySelectorAll('.content-section');

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-section');

    navButtons.forEach((navButton) => {
      navButton.classList.remove('active');
    });

    sections.forEach((section) => {
      section.classList.remove('active');
    });

    button.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
  });
});

const tacticsCarousel = document.querySelector('.tactics-carousel');
const tacticSlides = document.querySelectorAll('.tactics-carousel .tactics-period');
const prevTacticsButton = document.getElementById('tactics-prev');
const nextTacticsButton = document.getElementById('tactics-next');
const tacticsDotsContainer = document.getElementById('tactics-dots');

const tacticsCarouselInner = document.createElement('div');
tacticsCarouselInner.classList.add('tactics-carousel-inner');

tacticSlides.forEach((slide) => {
  tacticsCarouselInner.appendChild(slide);
});

tacticsCarousel.appendChild(tacticsCarouselInner);

let currentTacticSlide = 0;

function updateTacticsCarousel() {
  tacticsCarouselInner.style.transform = `translateX(-${currentTacticSlide * 100}%)`;

  const dots = document.querySelectorAll('.carousel-dot');

  dots.forEach((dot, index) => {
    if (index === currentTacticSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

tacticSlides.forEach((slide, index) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  dot.setAttribute('aria-label', `Ver período ${index + 1}`);

  dot.addEventListener('click', () => {
    currentTacticSlide = index;
    updateTacticsCarousel();
  });

  tacticsDotsContainer.appendChild(dot);
});

prevTacticsButton.addEventListener('click', () => {
  currentTacticSlide -= 1;

  if (currentTacticSlide < 0) {
    currentTacticSlide = tacticSlides.length - 1;
  }

  updateTacticsCarousel();
});

nextTacticsButton.addEventListener('click', () => {
  currentTacticSlide += 1;

  if (currentTacticSlide >= tacticSlides.length) {
    currentTacticSlide = 0;
  }

  updateTacticsCarousel();
});

updateTacticsCarousel();
