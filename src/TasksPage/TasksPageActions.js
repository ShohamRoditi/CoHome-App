import ADD_RATING from './TasksPageActionType'

const updateRate = rate => ({ type: ADD_RATING, data: rate })

const handleUpdateRate = rate => dispatch => {
  dispatch(updateRate(rate))
}

const updateMyRating = (address, name, rating) => async () => {
  const rateJson = JSON.stringify({
    address,
    tenants: {
      name,
      rating
    }
  })
  await fetch(`https://co-home-household-app.herokuapp.com/updateRating`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: rateJson
  })
}

export default { handleUpdateRate, updateRate, updateMyRating }
