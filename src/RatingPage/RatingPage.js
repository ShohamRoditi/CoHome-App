import { View, Text, Image, ScrollView, Picker } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles'
import { bindActionCreators } from 'redux'
import SignInPageActions from '../SignInPage/SignInPageActions'
import RatingPageActions from './RatingPageActions'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import Loading from '../Loading/Loading'

const mapStateToProps = ({ SignInPage, RatingPage }) => {
  return {
    name: SignInPage.myName,
    address: SignInPage.myAddress,
    apartment: SignInPage.myApartment,
    tenants: RatingPage.tenants,
    highestScore: RatingPage.highestScore,
    Prize: RatingPage.prize
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

class RatingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tenants: null,
      prize: ''
    }
    this.renderTenantRating = this.renderTenantRating.bind(this)
    this.renderTenants = this.renderTenants.bind(this)
    this.updateApartmentDelay = this.updateApartmentDelay.bind(this)
    this.handlePrize = this.handlePrize.bind(this)
    this.mostWantedPrize = this.mostWantedPrize.bind(this)
    this.prizeIcon = this.prizeIcon.bind(this)
  }

  prizeIcon(mostWantedPrize) {
    switch (mostWantedPrize) {
      case 'Beer':
        return require('../images/beer.png')
      case 'Pizza':
        return require('../images/pizza.png')
      case 'Thai':
        return require('../images/thai.png')
      case 'Sushi':
        return require('../images/sushi.png')
      case 'Hamburger':
        return require('../images/hamburger.png')
      case 'Cake':
        return require('../images/cake.png')
      case 'Cookies':
        return require('../images/cookies.png')
      case 'Ice-Cream':
        return require('../images/ice-cream.png')
      case 'Movie':
        return require('../images/movie.png')
      case 'Surprise':
        return require('../images/surprise.png')
    }
  }

  mostWantedPrize(tenants) {
    const prizes = [
      'Beer',
      'Pizza',
      'Thai',
      'Sushi',
      'Hamburger',
      'Cake',
      'Cookies',
      'Ice-Cream',
      'Movie',
      'Surprise'
    ]
    const wantedPrizes = new Array(10).fill(0)
    tenants.forEach(elem => {
      prizes.forEach((prize, index) => {
        if (elem.prize === prize) {
          wantedPrizes[index]++
        }
      })
    })
    let max = 0
    let maxIndex = 0

    wantedPrizes.forEach((elem, index) => {
      if (elem > max) {
        max = elem
        maxIndex = index
      }
    })
    return prizes[maxIndex]
  }

  handlePrize(selectedPrize) {
    const { handleUpdatePrize, handleWantedPrize } = this.props.actions.RatingPageActions
    const { address, name } = this.props
    handleWantedPrize(selectedPrize)
    handleUpdatePrize(address, selectedPrize, name)
  }

  renderTenantRating(tenant) {
    const { highestScore } = this.props
    let URL
    if (tenant.rating !== 0)
      if (tenant.rating === highestScore)
        URL = 'https://www.flaticon.com/premium-icon/icons/svg/1074/1074653.svg'
      else URL = 'https://www.flaticon.com/premium-icon/icons/svg/411/411830.svg'
    else URL = 'https://www.flaticon.com/premium-icon/icons/svg/1527/1527478.svg'
    return (
      <View key={tenant.name} style={styles.tenantBox}>
        <Image resizeMode="contain" style={styles.rankingMedal} source={{ uri: URL }} />
        <Text style={styles.tenantLabel}>Tenant: {tenant.name}</Text>
        <Text style={styles.tenantLabel}>Rating: {tenant.rating}</Text>
      </View>
    )
  }

  renderTenants() {
    const { tenants } = this.props
    const { handleBestScore } = this.props.actions.RatingPageActions
    handleBestScore(tenants[0].rating)
    return this.state.tenants === null ? null : (
      <View style={styles.tenantsContainer}>
        <ScrollView>{tenants.map(this.renderTenantRating)}</ScrollView>
      </View>
    )
  }

  componentWillMount() {
    const { handleApartment } = this.props.actions.SignInPageActions
    const { address } = this.props
    handleApartment(address)
    const { handleWantedPrize } = this.props.actions.RatingPageActions
    const { apartment, name } = this.props
    let tenant
    if (apartment.apartment !== null)
      tenant = apartment.apartment[0].tenants.find(elem => elem.name === name)
    if (tenant !== undefined) handleWantedPrize(tenant.prize)
  }

  updateApartmentDelay() {
    const { address } = this.props
    const { handleApartment } = this.props.actions.SignInPageActions
    setTimeout(() => {
      handleApartment(address)
    }, 5000)
  }

  async componentWillUpdate(props) {
    const { handleTenants } = this.props.actions.RatingPageActions
    const { address } = this.props
    const { handleApartment } = this.props.actions.SignInPageActions
    if (props.apartment.apartment !== null) {
      const tenants = props.apartment.apartment[0].tenants
      tenants.sort((a, b) => {
        return b.rating - a.rating
      })
      this.updateApartmentDelay()
      if (JSON.stringify(tenants) !== JSON.stringify(this.state.tenants)) {
        this.setState({ tenants })
        await handleTenants(tenants)
        await handleApartment(address)
      }
    }
  }

  render() {
    const { tenants, Prize } = this.props
    const mostWanted = this.mostWantedPrize(tenants)
    return tenants.length === 0 ? (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <Loading />
        </LinearGradient>
      </View>
    ) : (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          {this.renderTenants()}
          <ScrollView>
            <Text style={styles.prizeLabel}>
              {tenants[tenants.length - 1].name} has the lowest score
            </Text>
            <Text style={styles.prizeLabel}>Choose what should they bring you next month</Text>
            <Picker selectedValue={Prize} onValueChange={prize => this.handlePrize(prize)}>
              <Picker.Item label="Choose Prize" />
              <Picker.Item label="Beer" value="Beer" />
              <Picker.Item label="Pizza" value="Pizza" />
              <Picker.Item label="Thai" value="Thai" />
              <Picker.Item label="Sushi" value="Sushi" />
              <Picker.Item label="Hamburger" value="Hamburger" />
              <Picker.Item label="Cake" value="Cake" />
              <Picker.Item label="Cookies" value="Cookies" />
              <Picker.Item label="Ice-Cream" value="Ice-Cream" />
              <Picker.Item label="Movie" value="Movie" />
              <Picker.Item label="Surprise" value="Surprise" />
            </Picker>
            <View style={styles.mostWantedPrize}>
              <Text style={styles.mostPrizeLabel}>Most of the tenants wants {mostWanted}</Text>
              <Image
                style={styles.prizeIcon}
                source={this.prizeIcon(mostWanted)}
                resizeMode="contain"
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    )
  }
}

RatingPage.propTypes = {
  address: PropTypes.string,
  name: PropTypes.string,
  Prize: PropTypes.string,
  handleUpdatePrize: PropTypes.func,
  handleTenants: PropTypes.func,
  tenants: PropTypes.array,
  handleApartment: PropTypes.func,
  highestScore: PropTypes.number,
  handleBestScore: PropTypes.func,
  handleWantedPrize: PropTypes.func,
  apartment: PropTypes.objectOf(PropTypes.array),
  actions: PropTypes.objectOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingPage)
