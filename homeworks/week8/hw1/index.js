const bg = document.querySelector('.content__block')
const contentBox = document.querySelector('.content__box')
const prizeNone = document.querySelector('.content__none')
const prizeThird = document.querySelector('.content__third')
const prizeSecond = document.querySelector('.content__second')
const prizeFirst = document.querySelector('.content__first')
// eslint-disable-next-line
function newRequest() {
  // reset CSS
  const ContentBox = document.querySelector('.content__box__new').childNodes
  for (let i = 0; i < ContentBox.length; i++) {
    if (ContentBox[i].classList !== undefined) {
      if (!ContentBox[i].classList.contains('hidden')) {
        // bg.classList[1] === type of bg img
        bg.classList.remove(bg.classList[1])
        ContentBox[i].classList.add('hidden')
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
      prizeType = JSON.parse(request.responseText).prize
      if (prizeType === 'NONE') {
        console.log('銘謝惠顧')
        contentBox.classList.add('hidden')
        prizeNone.classList.remove('hidden')
        bg.classList.add('none')
      } else if (prizeType === 'THIRD') {
        console.log('三獎！')
        contentBox.classList.add('hidden')
        prizeThird.classList.remove('hidden')
        bg.classList.add('third')
      } else if (prizeType === 'SECOND') {
        console.log('二獎！')
        contentBox.classList.add('hidden')
        prizeSecond.classList.remove('hidden')
        bg.classList.add('second')
      } else {
        console.log('頭獎！！！')
        contentBox.classList.add('hidden')
        prizeFirst.classList.remove('hidden')
        bg.classList.add('first')
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
