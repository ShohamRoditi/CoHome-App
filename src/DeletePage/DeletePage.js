import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles'
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-community/async-storage'
import { bindActionCreators } from 'redux'
import SignInPageActions from '../SignInPage/SignInPageActions'
import RatingPageActions from '../RatingPage/RatingPageActions'
import LinearGradient from 'react-native-linear-gradient'

const mapStateToProps = ({ SignInPage }) => {
  return {
    name: SignInPage.myName,
    address: SignInPage.myAddress,
    apartment: SignInPage.myApartment,
    profilePic: SignInPage.profilePic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      SignInPageActions: bindActionCreators(SignInPageActions, dispatch),
      RatingPageActions: bindActionCreators(RatingPageActions, dispatch)
    }
  }
}

class DeletePage extends Component {
  constructor(props) {
    super(props)
    this.deleteTenant = this.deleteTenant.bind(this)
  }

  async deleteTenant() {
    const { navigate } = this.props.navigation
    const { handleApartment, handleAddress, handleName } = this.props.actions.SignInPageActions
    const {
      handleTenants,
      handleBestScore,
      handleWantedPrize
    } = this.props.actions.RatingPageActions
    const { name, address } = this.props
    const tenant = JSON.stringify({
      address,
      tenants: {
        name
      }
    })

    await fetch('https://co-home-household-app.herokuapp.com/deleteTenant', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: tenant
    })

    const keys = ['name', 'address', 'profile']
    await AsyncStorage.multiRemove(keys)
    await handleApartment()
    await handleAddress('')
    await handleName('')
    await handleTenants([])
    await handleBestScore(0)
    await handleWantedPrize('')
    navigate('SignInPage')
  }

  render() {
    const { navigate } = this.props.navigation
    const { name } = this.props
    return (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <ScrollView>
            <Text style={styles.Qdelete}> {name} , are you sure to leave the apartment?</Text>
            <Image
              style={styles.questionImage}
              resizeMode="contain"
              source={require('../images/sure.png')}
            />
            <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteTenant()}>
              <Text style={styles.deleting}>Sorry, I want to leave</Text>
              <Image
                style={styles.removeUser}
                resizeMode="contain"
                source={require('../images/removeUser.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => navigate('RatingPage')}>
              <Text style={styles.refuseDeleting}>Never Mind, I&apos;ll Stay</Text>
              <Image
                style={styles.tenantStay}
                resizeMode="contain"
                source={require('../images/tenant.png')}
              />
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </View>
    )
  }
}

DeletePage.propTypes = {
  navigation: PropTypes.object,
  name: PropTypes.string,
  address: PropTypes.string,
  handleTenants: PropTypes.func,
  handleBestScore: PropTypes.func,
  handleWantedPrize: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePage)
