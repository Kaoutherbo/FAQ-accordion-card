const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const arrowIcon = faq.querySelector('.arrow-icon');

  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });

  arrowIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    faq.classList.toggle("active");
  });
});
