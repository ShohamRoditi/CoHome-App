import {
  INIT_ADDRESS,
  MY_NAME,
  PROFILE_PIC,
  GET_APARTMENT,
  ALL_AVATARS,
  CHANGE_MODAL_STATE
} from './SignInPageActionType'

const initialState = {
  allAvatars: {},
  profilePic: '',
  myName: '',
  myAddress: '',
  myApartment: null,
  modalState: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_ADDRESS:
      return {
        ...state,
        myAddress: action.data
      }
    case MY_NAME:
      return {
        ...state,
        myName: action.data
      }
    case PROFILE_PIC:
      return {
        ...state,
        profilePic: action.data
      }
    case GET_APARTMENT:
      return {
        ...state,
        myApartment: action.data
      }
    case ALL_AVATARS:
      return {
        ...state,
        allAvatars: action.data
      }
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        modalState: action.data.state
      }
    default:
      return state
  }
}
