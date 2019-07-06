import { MY_TENANTS, HIGHEST_SCORE, WANTED_PRIZE } from './RatingPageActionType'

const myTenants = myTenants => ({ type: MY_TENANTS, data: myTenants })

const handleTenants = tenants => dispatch => {
  dispatch(myTenants(tenants))
}

const highestScore = score => ({ type: HIGHEST_SCORE, data: score })

const handleBestScore = bestScore => dispatch => {
  dispatch(highestScore(parseInt(bestScore)))
}

const wantedPrize = prize => ({ type: WANTED_PRIZE, data: prize })

const handleWantedPrize = prize => dispatch => {
  dispatch(wantedPrize(prize))
}

const handleUpdatePrize = (address, prize, name) => async () => {
  const wantedPrize = JSON.stringify({
    address,
    tenants: {
      name,
      prize
    }
  })
  await fetch(`https://co-home-household-app.herokuapp.com/updatePrize`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: wantedPrize
  })
}

export default {
  myTenants,
  handleTenants,
  highestScore,
  handleBestScore,
  handleUpdatePrize,
  handleWantedPrize,
  wantedPrize
}
