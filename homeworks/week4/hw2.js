const request = require('request')

const APILink = 'https://lidemy-book-store.herokuapp.com'
const action = process.argv[2]
const param = process.argv[3]
const param2 = process.argv[4]

switch (action) {
  case 'list':
    list()
    break
  case 'read':
    read()
    break
  case 'delete':
    del()
    break
  case 'create':
    create()
    break
  case 'update':
    update()
    break
  default:
    console.log('Wrong command 8888')
}
function list() {
  request(`${APILink}/books?_limit=20`, (err, res, body) => {
    const books = JSON.parse(body)
    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  })
}
function read() {
  request(`${APILink}/books/${param}`, (err, res, body) => {
    const books = JSON.parse(body)
    console.log(books.name)
  })
}
function del() {
  request.del(`${APILink}/books/${param}`, (err, res, body) => {
    if (err) return console.log('err: ', err)
    console.log(res.statusCode)
  })
}
function create() {
  request.post(`${APILink}/books/`, {
    form: { name: `${param}` }
  }, (err, res, body) => {
    if (err) return console.log('err: ', err)
    console.log(res.statusCode, res.body)
  })
}

function update() {
  request.patch(`${APILink}/books/${param}`, {
    form: { name: `${param2}` }
  }, (err, res, body) => {
    if (err) return console.log('err: ', err)
    console.log(res.statusCode, res.body)
  })
}
