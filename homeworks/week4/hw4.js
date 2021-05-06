const request = require('request')

const APILink4 = 'https://api.twitch.tv/kraken/games/top'
const options = {
  url: `${APILink4}`,
  headers: {
    'Client-ID': '6l34r2dkprpnzw5oxk853kxpx8a29s',
    // eslint-disable-next-line
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}
request(options, (err, res, body) => {
  if (err) return console.log('err: ', err)
  const games = JSON.parse(body)
  for (let i = 0; i < 10; i++) {
    console.log(`${games.top[i].viewers} ${games.top[i].game.name}`)
  }
})
