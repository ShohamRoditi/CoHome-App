import {
  INIT_ADDRESS,
  MY_NAME,
  PROFILE_PIC,
  GET_APARTMENT,
  ALL_AVATARS,
  CHANGE_MODAL_STATE
} from './SignInPageActionType'

const myName = name => ({ type: MY_NAME, data: name })

const handleName = name => async dispatch => {
  await dispatch(myName(name))
}

const myAddress = address => ({ type: INIT_ADDRESS, data: address })

const handleAddress = address => async dispatch => {
  await dispatch(myAddress(address))
}

const myApartment = apartment => ({ type: GET_APARTMENT, data: { apartment } })

const handleApartment = address => async dispatch => {
  if (address === undefined || address === '') {
    dispatch(myApartment(null))
    return
  }
  await fetch(`https://co-home-household-app.herokuapp.com/getYourApartment?address=${address}`)
    .then(async res => await res.json())
    .then(async json => {
      if (json.length) await dispatch(myApartment(json))
    })
}

const updateMyApartment = (name, address, apartment) => async () => {
  if (apartment !== null && apartment.apartment !== null) {
    if (apartment.apartment[0].tenants.find(tenant => tenant.name === name)) return
  }
  const newTenant = JSON.stringify({
    address,
    owner: 'Lord Dizengoff',
    phone: '051-147-8235',
    monthly_payment: [
      {
        type: 'water',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      },
      {
        type: 'gas',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      },
      {
        type: 'arnona',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      },
      {
        type: 'electricity',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      },
      {
        type: 'house_committee',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      },
      {
        type: 'shopping',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      },
      {
        type: 'internet',
        status_paid: 'false',
        paid: 0,
        date: '',
        paid_by: ''
      }
    ],
    tenants: {
      name,
      paid_this_month: 0,
      prize: '',
      rating: 0
    }
  })
  await fetch('https://co-home-household-app.herokuapp.com/addApartment', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: newTenant
  })
}

const myPic = pic => ({ type: PROFILE_PIC, data: pic })

const handlePic = pic => async dispatch => {
  dispatch(myPic(pic))
}

const modalState = state => ({ type: CHANGE_MODAL_STATE, data: { state } })

const handleModalState = state => async dispatch => {
  dispatch(modalState(state))
}

const allAvatars = avatars => ({ type: ALL_AVATARS, data: { avatars } })

const getAvatars = () => async dispatch => {
  await fetch(`https://co-home-household-app.herokuapp.com/getUsersPic`)
    .then(res => res.json())
    .then(async avatars => {
      await dispatch(allAvatars(avatars))
    })
    .catch(err => {
      throw new Error(`"error": ${err}`)
    })
}

export default {
  handleName,
  handleAddress,
  myAddress,
  myName,
  handlePic,
  myPic,
  handleApartment,
  myApartment,
  updateMyApartment,
  getAvatars,
  allAvatars,
  handleModalState,
  modalState
}
