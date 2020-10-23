const questions = document.querySelectorAll('.faq-item-header')

questions.forEach(question => {
  question.parentElement.addEventListener('click',()=>{
    const img = question.lastElementChild
    const answer = question.nextElementSibling
    if (img.classList.contains('flip')) {
      img.classList.remove('flip')
      answer.classList.remove('hide')
      question.classList.add('active')
    } else {
      img.classList.add('flip')
      answer.classList.add('hide')
      question.classList.remove('active')
    }
  })
});

