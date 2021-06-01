const itemBlock = document.querySelector('.item-block')
const createButton = document.querySelector('.create')

createButton.addEventListener('click', () => {
  const input = document.querySelector('input')
  if (!input.value) return
  const div = document.createElement('div')
  div.classList.add('item')
  div.innerHTML = `
  <button class="check">Check</button>
  <div class="item__content">${escapeHtml(input.value)}</div>
  <button class="delete">Delete</button>
  `
  itemBlock.insertBefore(div, itemBlock.childNodes[0])
  input.value = ''
})

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
  // delete button
  if (element.classList.contains('delete')) {
    element.parentNode.remove()
  }
  // check button
  if (element.classList.contains('check')) {
    console.log(element.parentNode)
    element.parentNode.classList.toggle('item__content__PlusLine')
  }
})
