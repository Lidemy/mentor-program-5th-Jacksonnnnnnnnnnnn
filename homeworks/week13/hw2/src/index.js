/* eslint-env jquery */
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery'
import { getComments, addComments } from './api'
import { appendCommentToDOM, appendStyle } from './utils'
import { css, getLoadMoreButton, getForm } from './templates'

let minID = null
let noMoreData = false
let siteKey = ''
let apiUrl = ''
let containerElement = null
let commentDOM = null
let loadMoreClassName
let commentsClassName
let commentsSelector
let formClassName
let formSelector
// eslint-disable-next-line
export function init(options) {
  siteKey = options.siteKey
  apiUrl = options.apiUrl
  loadMoreClassName = `${siteKey}-load`
  commentsClassName = `${siteKey}-comments`
  formClassName = `${siteKey}-add-comment-form`
  // eslint-disable-next-line
  commentsSelector = '.' + commentsSelector
  // eslint-disable-next-line
  formSelector = '.' + formClassName

  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName))
  appendStyle(css)

  commentDOM = $(commentsSelector)
  getCommentsWithButton()
  // eslint-disable-next-line
  $(commentsSelector).on('click', '.' + loadMoreClassName, () => {
    getCommentsWithButton()
  })

  $(formSelector).submit((e) => {
    e.preventDefault()
    const nickNameDOM = $(`${formSelector} input[name=nickname]`)
    const contentDOM = $(`${formSelector} textarea[name=content]`)
    const newComment = {
      site_key: siteKey,
      nickname: nickNameDOM.val(),
      content: contentDOM.val()
    }
    addComments(apiUrl, siteKey, newComment, (data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      nickNameDOM.val('')
      contentDOM.val('')
      appendCommentToDOM(commentDOM, newComment, true)
    })
  })
}

function getCommentsWithButton() {
  const commentDOM = $(commentsSelector)
  // eslint-disable-next-line
  $('.' + loadMoreClassName).hide()
  if (noMoreData) {
    return
  }
  getComments(apiUrl, siteKey, minID, (data) => {
    if (!data.ok) {
      alert(data.message)
      return
    }

    const comments = data.discussions
    for (const comment of comments) {
      appendCommentToDOM(commentDOM, comment)
    }

    const noMoreDataHTML = '<p class="text-center text-white bg-danger"><strong>見底啦</strong></p>'
    if (comments.length === 0) {
      noMoreData = true
      // eslint-disable-next-line
      $('.' + loadMoreClassName).hide()
      $(commentsSelector).append(noMoreDataHTML)
    } else {
      minID = comments[comments.length - 1].id
      const appendButtonHTML = getLoadMoreButton(loadMoreClassName)
      $(commentsSelector).append(appendButtonHTML)
    }
  })
}
