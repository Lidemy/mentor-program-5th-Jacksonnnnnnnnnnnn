const form = document.querySelector('.form')
const requiredInput = document.querySelectorAll('.req')

const reminder2 = document.createElement('div')
reminder2.innerText = '請選擇報名類型'
reminder2.classList.add('red')

// submit
form.addEventListener('submit', (e) => {
  const textValue = document.querySelectorAll('.req input')
  const radioValue = document.querySelectorAll('.options input')
  const r1 = radioValue[0].checked
  const r2 = radioValue[1].checked
  const radioQ = document.querySelector('.option')
  let checked = false

  if (r1 === false & r2 === false) {
    checked = true
    radioQ.childNodes[5].classList.remove('hidden')
  } else {
    radioQ.childNodes[5].classList.add('hidden')
  }

  for (let i = 0; i < requiredInput.length; i++) {
    if (textValue[i].value.length < 1) {
      checked = true
      requiredInput[i].childNodes[3].classList.remove('hidden')
      // let cloneReminder = reminder.cloneNode(true)
      // requiredInput[i].appendChild(cloneReminder)
    } else {
      requiredInput[i].childNodes[3].classList.add('hidden')
    }
  }

  if (!checked) {
    const arr = []
    const test = document.querySelectorAll('input')
    for (let i = 0; i < test.length; i++) {
      arr.push(test[i].value)
    }
    alert(
    `
    暱稱: ${arr[0]}
    電子郵件: ${arr[1]}
    手機號碼: ${arr[2]}
    報名類型: ${arr[3]}${arr[4]}
    怎麼知道這個活動: ${arr[5]}
    `
    )
  } else {
    e.preventDefault()
  }
})
