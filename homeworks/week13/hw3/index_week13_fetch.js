/* eslint-env jquery */
const headers = {
  'Client-ID': '6l34r2dkprpnzw5oxk853kxpx8a29s',
  // eslint-disable-next-line
  'Accept': 'application/vnd.twitchtv.v5+json'
}
const APITopGames = 'https://api.twitch.tv/kraken/games/top?limit=5'
const navbarList = document.querySelector('.navbar__list')
const gameStreams = document.querySelector('.games__streams')

fetch(APITopGames, {
  headers: {
    'Client-ID': headers['Client-ID'],
    // eslint-disable-next-line
    'Accept': headers.Accept
  }
}).then((response) => {
  if (response.status >= 200 && response.status < 400) {
    return response.text()
  }
  alert('response status:', response.status)
}).then((result) => {
  const responseText = JSON.parse(result)
  const topGames = responseText.top
  for (let i = 0; i < topGames.length; i++) {
    const list = document.createElement('li')
    list.innerHTML = `
    <a href="#">${topGames[i].game.name}</a>
    `
    navbarList.appendChild(list)
  }

  const firstGame = topGames[0].game.name
  $('.games__name').text(firstGame)

  async function run() {
    try {
      const data = await getLiveStream(firstGame)
      await appendStreams(data)
    } catch (err) {
      console.log(err)
    }
  }
  run()
})
async function getLiveStream(gameName) {
  gameStreams.innerHTML = ''
  const response = await fetch(`https://api.twitch.tv/kraken/streams/?limit=20&game=${gameName}`, {
    headers: {
      'Client-ID': headers['Client-ID'],
      // eslint-disable-next-line
      'Accept': headers.Accept
    }
  })
  const data = await response.json()
  return data
}

async function appendStreams(response) {
  const responseText = response.streams
  for (const data of responseText) {
    const div = document.createElement('div')
    div.classList.add('stream__block')
    div.innerHTML = `
    <div class="stream__pic" style="background-image: url(${data.preview.medium});"></div>
    <div class="stream__data">
      <div class="stream__logo" style="background-image: url(${data.channel.logo});"></div>
      <div class="stream__intro">
        <div class="stream__status">${data.channel.status}</div>
        <div class="stream__player">${data.channel.display_name}</div>
      </div>
    </div>
    `
    gameStreams.appendChild(div)
  }
}
$('.navbar__list').click((e) => {
  const gameName = e.target.innerText
  $('.games__name').text(gameName)
  async function run() {
    try {
      const data = await getLiveStream(gameName)
      await appendStreams(data)
    } catch (err) {
      console.log(err)
    }
  }
  run()
})
