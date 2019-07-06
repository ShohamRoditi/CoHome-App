import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles'
import { bindActionCreators } from 'redux'
import SignInPageActions from './SignInPageActions'
import AsyncStorage from '@react-native-community/async-storage'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

const mapStateToProps = ({ SignInPage }) => {
  return {
    name: SignInPage.myName,
    address: SignInPage.myAddress,
    apartment: SignInPage.myApartment,
    allAvatars: SignInPage.allAvatars,
    modalState: SignInPage.modalState,
    profilePic: SignInPage.profilePic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      SignInPageActions: bindActionCreators(SignInPageActions, dispatch)
    }
  }
}

class SignInPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: ''
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.renderAvatarModal = this.renderAvatarModal.bind(this)
    this.AvatarModal = this.AvatarModal.bind(this)
    this.handleProfilePicture = this.handleProfilePicture.bind(this)
    this.profilePicture = this.profilePicture.bind(this)
  }

  async handleSignIn(name, address) {
    const {
      handleName,
      handleAddress,
      handleApartment,
      updateMyApartment
    } = this.props.actions.SignInPageActions
    const { profilePic } = this.props
    await handleAddress(address)
    await handleName(name)
    await handleApartment(address)
    const { apartment } = this.props
    await updateMyApartment(name, address, apartment)
    await handleApartment(address)
    await AsyncStorage.setItem('name', name)
    await AsyncStorage.setItem('address', address)
    await AsyncStorage.setItem('profile', profilePic)
  }

  async componentDidMount() {
    const { address } = this.props
    const {
      handleAddress,
      handleName,
      handleApartment,
      handlePic
    } = this.props.actions.SignInPageActions
    AsyncStorage.getItem('name').then(async res => {
      if (res !== null) {
        await handleName(res)
      }
    })
    AsyncStorage.getItem('address').then(async res => {
      if (res !== null) {
        await handleAddress(res)
      }
    })
    AsyncStorage.getItem('profile').then(async res => {
      if (res !== null) {
        await handlePic(res)
      }
    })
    await handleApartment(address)
  }

  handleProfilePicture(pic) {
    const { handlePic, handleModalState } = this.props.actions.SignInPageActions
    handlePic(pic)
    handleModalState(false)
  }

  AvatarModal(pic) {
    return (
      <View key={pic._id}>
        <TouchableOpacity onPress={() => this.handleProfilePicture(pic.pic)}>
          <Image resizeMode="contain" source={{ uri: pic.pic }} style={styles.avatarPic} />
        </TouchableOpacity>
      </View>
    )
  }

  renderAvatarModal() {
    const { allAvatars } = this.props
    if (allAvatars.avatars !== undefined)
      return <View style={styles.avatarContainer}>{allAvatars.avatars.map(this.AvatarModal)}</View>
  }

  profilePicture() {
    const { profilePic } = this.props
    if (profilePic !== '') {
      return <Image resizeMode="contain" source={{ uri: profilePic }} style={styles.addPhoto} />
    }
    return (
      <Image
        resizeMode="contain"
        source={require('../images/addPhoto1.png')}
        style={styles.addPhoto}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation
    const { address, modalState, name } = this.props
    const { getAvatars, handleApartment, handleModalState } = this.props.actions.SignInPageActions

    return address === '' ? (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <ScrollView contentContainerStyle={styles.login}>
            <TouchableOpacity
              onPress={async () => {
                await getAvatars()
                await handleModalState(true)
                this.renderAvatarModal()
              }}
            >
              {this.profilePicture()}
            </TouchableOpacity>
            <Text style={styles.label}>How will your associates see you? </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name Here"
              placeholderTextColor="#d3d3d3"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
            <Text style={styles.label}>Where is your apartment?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Address Here"
              placeholderTextColor="#d3d3d3"
              onChangeText={address => {
                this.setState({ address })
              }}
              value={this.state.address}
            />
            <TouchableOpacity
              style={styles.signButton}
              onPress={async () => {
                this.handleSignIn(this.state.name, this.state.address)
                navigate('RatingPage')
              }}
            >
              <Text style={styles.signButtonLabel}>ENTER YOUR APARTMENT</Text>
            </TouchableOpacity>
            <Modal isVisible={modalState}>
              <ScrollView>{this.renderAvatarModal()}</ScrollView>
              <TouchableOpacity onPress={() => handleModalState(false)} style={styles.chooseLater}>
                <Text style={styles.label}>Choose Later</Text>
              </TouchableOpacity>
            </Modal>
          </ScrollView>
        </LinearGradient>
      </View>
    ) : (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <Text style={styles.welcomeBack}> {name}, Welcome Again </Text>
          <Image
            style={styles.welcomeIcon}
            resizeMode="contain"
            source={require('../images/welcome1.png')}
          />
          <TouchableOpacity
            onPress={async () => {
              handleApartment(address)
              navigate('RatingPage')
            }}
          >
            <Text style={styles.continue}> Click to Continue </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="contain"
              source={require('../images/arrow.png')}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }
}

SignInPage.propTypes = {
  name: PropTypes.string,
  handlePic: PropTypes.func,
  profilePic: PropTypes.string,
  handleModalState: PropTypes.func,
  modalState: PropTypes.bool,
  allAvatars: PropTypes.object,
  getAvatars: PropTypes.func,
  address: PropTypes.string,
  handleName: PropTypes.func,
  navigation: PropTypes.object,
  handleAddress: PropTypes.func,
  handleApartment: PropTypes.func,
  apartment: PropTypes.objectOf(PropTypes.array),
  actions: PropTypes.objectOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage)
