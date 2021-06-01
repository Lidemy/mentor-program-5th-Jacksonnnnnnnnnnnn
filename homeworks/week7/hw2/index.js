const QABlock = document.querySelectorAll('.Q')
const AnswerBlock = document.querySelectorAll('.A__hidden')

for (let i = 0; i < QABlock.length; i++) {
  QABlock[i].addEventListener('click', (e) => {
    AnswerBlock[i].classList.toggle('A__display')
  })
}
