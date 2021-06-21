// lottery.html
const bg = document.querySelector('.content__block')
const contentBox = document.querySelector('.content__box')
// eslint-disable-next-line
function newRequest() {
  // reset CSS
  const contentBox = document.querySelector('.content__box__new').childNodes
  for (let i = 0; i < contentBox.length; i++) {
    if (contentBox[i].classList !== undefined) {
      if (!contentBox[i].classList.contains('hidden')) {
        // bg.classList[1] === type of bg img
        bg.classList.remove(bg.classList[1])
        contentBox[i].classList.add('hidden')
      }
    }
  }
  request()
}

function request() {
  const request = new XMLHttpRequest()
  let prizeType = ''
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // if (request.responseText)
      prizeType = JSON.parse(request.responseText).prize

      if (prizeType) {
        const node = document.querySelector(`.content__${prizeType.toLowerCase()}`)
        node.classList.remove('hidden')
        bg.classList.add(prizeType.toLowerCase())
        contentBox.classList.add('hidden')
      } else {
        alert('系統不穩定，請再試一次')
        window.location.reload()
      }
    } else {
      console.log(request.status)
      alert('系統不穩定，請再試一次')
      window.location.reload()
    }
  }
  request.onerror = () => {
    console.log('error')
    alert('系統不穩定，請再試一次')
  }
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
  request.send()
}

// QA.html
const qaBlock = document.querySelectorAll('.QA')
const answerBlock = document.querySelectorAll('.A__hidden')

for (let i = 0; i < qaBlock.length; i++) {
  qaBlock[i].addEventListener('click', (e) => {
    answerBlock[i].classList.toggle('A__display')
  })
}
