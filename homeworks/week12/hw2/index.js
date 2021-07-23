/* eslint-env jquery */
const itemBlock = document.querySelector('.item-block')
let id = 1
let totalTODO = 0
let totalUnfinished = 0

const template = `
<div class="item">
  <input class="check" type="checkbox"/>
  <div class="item__content"><span class="item__span" id="todo-{id}">{inputValue}</span><input class="hidden" value={inputValue}></div>
  <button class="delete">Delete</button>
</div>
`

$('.create').click(() => {
  addItem()
})

$('.input-TODO').keydown((e) => {
  if (e.key === 'Enter') {
    addItem()
  }
})

$('.item-block').on('click', '.delete', (e) => {
  const element = $(e.target)
  element.parent().remove()
  totalTODO -= 1
  const isChecked = element.parent().find('.check').is(':checked')
  console.log(isChecked)
  if (!isChecked) {
    totalUnfinished -= 1
  }
  stats()
})

$('.item-block').on('change', '.check', (e) => {
  const element = $(e.target)
  const isChecked = element.is(':checked')
  if (isChecked) {
    element.parents('.item').addClass('checked')
    totalUnfinished -= 1
  } else {
    totalUnfinished += 1
    element.parents('.item').removeClass('checked')
  }
  stats()
})

$('.delFinished').click(() => {
  $('.item.checked').each((i, el) => {
    totalTODO -= 1
    el.remove()
  })
})

$('.options').on('click', 'div', (e) => {
  const filter = $(e.target).attr('data-filter')
  $('.options div.active').removeClass('active')
  $(e.target).addClass('active')
  if (filter === 'all') {
    $('.item').each((i, el) => {
      $(el).removeClass('hidden')
    })
  } else if (filter === 'unfinished') {
    $('.item').each((i, el) => {
      if ($(el).hasClass('checked')) {
        $(el).addClass('hidden')
      } else {
        $(el).removeClass('hidden')
      }
    })
  } else {
    $('.item').each((i, el) => {
      if (!$(el).hasClass('checked')) {
        $(el).addClass('hidden')
      } else {
        $(el).removeClass('hidden')
      }
    })
  }
})

function addItem() {
  const value = $('.input-TODO').val()
  if (!value) return
  $('.item-block').append(
    template
      .replace(/{inputValue}/g, escapeHtml(value))
      .replace(/{id}/g, id)
  )
  id += 1
  // eslint-disable-next-line
  totalTODO += 1
  totalUnfinished += 1
  stats()
  $('.input-TODO').val('')
}

function stats() {
  $('.unfinished').text(totalUnfinished)
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

itemBlock.addEventListener('click', (e) => {
  const element = e.target
  // check button
  if (element.classList.contains('check')) {
    element.parentNode.classList.toggle('done')
  }
})

$(itemBlock).dblclick((e) => {
  const element = e.target
  const spanClass = element.parentNode.firstChild.classList
  const inputClass = element.parentNode.lastChild.classList

  if (element.classList.contains('item__span')) {
    spanClass.add('hidden')
    inputClass.remove('hidden')
  }
  $(itemBlock).keypress((e) => {
    const element = e.target
    const spanClass = element.parentNode.firstChild.classList
    const inputClass = element.parentNode.lastChild.classList
    if (e.keyCode === 13) {
      spanClass.remove('hidden')
      inputClass.add('hidden')
      element.parentNode.firstChild.innerHTML = element.value
    }
  })
})
