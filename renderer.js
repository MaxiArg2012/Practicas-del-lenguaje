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