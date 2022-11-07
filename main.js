function createGame(player1, hour, player2) {
  return `
              <li>
              <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}" />
            </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =

  createCard('20/11', 'domingo', createGame('qatar', '13:00', 'equador')) +
  createCard('21/11',
    'segunda',
    createGame('inglaterra', '10:00', 'iran') + createGame("portugal", '13:00', "holanda") + createGame("eua", '16:00', 'gales')
  ) +
  createCard('22/11', 'terça', createGame('argentina', '16:00', 'arabia'))
