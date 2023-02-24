const toggleFaqAnswers = (index) => {
  let dropdownIcon = document.getElementById("dropdown-icon-" + index);
  let faqAnswers = document.getElementById("faq-answer-" + index);
  dropdownIcon?.classList?.toggle("tm-feature-rotate-45");
  faqAnswers?.classList?.toggle("hidden");
};
    