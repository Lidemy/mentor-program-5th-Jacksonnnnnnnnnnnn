/* eslint-env jquery */
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery'

export function getComments(apiUrl, siteKey, beforeID, callback) {
  let url = `${apiUrl}/api_comments.php?site_key=${siteKey}`
  if (beforeID) {
    // eslint-disable-next-line
    url += '&beforeID=' + beforeID
  }
  $.ajax({
    url
  }).done((data) => {
    callback(data)
  })
}

export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/add_comments.php`,
    data
  }).done((data) => {
    cb(data)
  })
}
