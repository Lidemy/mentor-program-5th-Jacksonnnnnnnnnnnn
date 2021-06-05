const headers = {
  'Client-ID': '6l34r2dkprpnzw5oxk853kxpx8a29s',
  // eslint-disable-next-line
  'Accept': 'application/vnd.twitchtv.v5+json'
}
const APITopGames = 'https://api.twitch.tv/kraken/games/top?limit=5'

// top games request
const request = new XMLHttpRequest()
const navbarList = document.querySelector('.navbar__list')

request.open('GET', APITopGames, true)
request.setRequestHeader('Client-ID', headers['Client-ID'])
request.setRequestHeader('Accept', headers.Accept)
request.onerror = function() {
  console.log('error')
}
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const reponseText = JSON.parse(request.responseText)
    const topGames = reponseText.top
    console.log(topGames[0].game.name)
    for (let i = 0; i < topGames.length; i++) {
      const list = document.createElement('li')
      list.innerHTML = `
      <a href="#">${topGames[i].game.name}</a>
      `
      navbarList.appendChild(list)
    }

    const firstGame = topGames[0].game.name
    document.querySelector('.games__name').innerText = firstGame

    getLiveStream(firstGame)
  } else {
    console.log(request.status)
  }
}
request.send()

document.querySelector('.navbar__list').addEventListener('click', (e) => {
  // console.log(e.target.innerText)
  const gameName = e.target.innerText
  document.querySelector('.games__name').innerText = gameName
  getLiveStream(gameName)
})

function getLiveStream(gameName) {
  const gameStrems = document.querySelector('.games__streams')
  gameStrems.innerHTML = ''
  // live streams request
  const streamsRequest = new XMLHttpRequest()
  const APILiveStreams = `https://api.twitch.tv/kraken/streams/?limit=20&game=${gameName}`
  streamsRequest.open('GET', APILiveStreams, true)
  streamsRequest.setRequestHeader('Client-ID', headers['Client-ID'])
  streamsRequest.setRequestHeader('Accept', headers.Accept)
  streamsRequest.onload = () => {
    if (streamsRequest.status >= 200 && streamsRequest.status < 400) {
      const responseText = JSON.parse(streamsRequest.responseText).streams
      for (const data of responseText) {
        // console.log(data)
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
        gameStrems.appendChild(div)
      }
    } else {
      console.log(request.status)
    }
  }
  streamsRequest.send()
}
