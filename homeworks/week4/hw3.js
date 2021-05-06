const request = require('request')

const action = process.argv[2]
const APILink3 = 'https://restcountries.eu/rest/v2'

request(`${APILink3}/name/${action}`, (err, res, body) => {
  if (err) return console.log('err: ', err)
  const country = JSON.parse(body)
  const currency = []
  for (let i = 0; i < country.length; i++) {
    for (const money of country[i].currencies) {
      currency.push(money.code)
    }
    console.log(
`============
國家 : ${country[i].name}
首都 : ${country[i].capital}
貨幣 : ${currency[i]}
國碼 : ${country[i].callingCodes}`
    )
  }
})
