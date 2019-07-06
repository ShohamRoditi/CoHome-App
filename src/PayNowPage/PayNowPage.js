import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles'
import { bindActionCreators } from 'redux'
import SignInPageActions from '../SignInPage/SignInPageActions'
import PayNowPageActions from '../PayNowPage/PayNowPageActions'
import PropTypes from 'prop-types'
import SignInPage from '../SignInPage/SignInPage'
import DialogPopUp from '../DialogPopUp/DialogPopUp'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal'

const mapStateToProps = ({ SignInPage, PayNowPage }) => {
  return {
    name: SignInPage.myName,
    address: SignInPage.myAddress,
    apartment: SignInPage.myApartment,
    expenseType: PayNowPage.expenseType,
    dialogState: PayNowPage.dialogState,
    paid: PayNowPage.paid,
    date: PayNowPage.date,
    incorrect: PayNowPage.incorrect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      PayNowPageActions: bindActionCreators(PayNowPageActions, dispatch),
      SignInPageActions: bindActionCreators(SignInPageActions, dispatch)
    }
  }
}

class PayNowPage extends Component {
  constructor(props) {
    super(props)
    this.payNow = this.payNow.bind(this)
  }

  async payNow(type) {
    const { handleUpdateExpenseType, handleDialogState } = this.props.actions.PayNowPageActions
    await handleUpdateExpenseType(type)
    await handleDialogState(true)
  }

  render() {
    const { name, apartment, incorrect } = this.props
    const { handleIncorrectModal } = this.props.actions.PayNowPageActions
    const expensesTypeArr = [
      'water',
      'gas',
      'arnona',
      'electricity',
      'house_committee',
      'shopping',
      'internet'
    ]
    const expensesArr = []
    const expensesStatusArr = []
    expensesTypeArr.forEach(elem => {
      if (apartment.apartment !== null)
        expensesArr.push(apartment.apartment[0].monthly_payment.find(elem2 => elem2.type === elem))
    })
    if (expensesArr.length !== 0)
      expensesArr.forEach(elem => expensesStatusArr.push(elem.status_paid))

    return (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <View style={styles.welcomePayNow}>
            <Text style={styles.welcomePayNowLabel}>{name}, Please record your expenses</Text>
          </View>
          <ScrollView>
            <View style={styles.payNowContainer}>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('water')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1858/1858243.svg'
                  }}
                />
                {expensesStatusArr[0] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>Water</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('gas')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1858/1858036.svg'
                  }}
                />
                {expensesStatusArr[1] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>Gas</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('arnona')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1207/1207187.svg'
                  }}
                />
                {expensesStatusArr[2] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>Arnona</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('electricity')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/993/993392.svg' }}
                />
                {expensesStatusArr[3] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>Electricity</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('house_committee')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/265/265667.svg' }}
                />
                {expensesStatusArr[4] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>House Com</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('shopping')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/859/859270.svg' }}
                />
                {expensesStatusArr[5] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>Shopping</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.payNowButton}
                onPress={() => {
                  this.payNow('internet')
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.payNowIcons}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1022/1022960.svg'
                  }}
                />
                {expensesStatusArr[6] === 'true' ? (
                  <Image
                    resizeMode="contain"
                    style={styles.tickPaid}
                    source={require('../images/tick.png')}
                  />
                ) : null}
                <Text style={styles.payNowLabel}>Internet</Text>
                <DialogPopUp />
              </TouchableOpacity>
              <Modal isVisible={incorrect}>
                <View style={styles.incorrectContainer}>
                  <LinearGradient colors={['#9cff9d', '#ffffff']} style={styles.backgroundGradient}>
                    <Text style={styles.incorrectFormat}>The format is not correct</Text>
                    <Text style={styles.incorrectFormat}>
                      Try again with date format: dd/mm/yyyy (01/01/2000)
                    </Text>
                    <Text style={styles.incorrectFormat}>
                      Try again with amount format: number (123)
                    </Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleIncorrectModal(false)}
                    >
                      <Text style={styles.label}>Try Again</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </Modal>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    )
  }
}

PayNowPage.propTypes = {
  name: PropTypes.string,
  incorrect: PropTypes.bool,
  handleIncorrectModal: PropTypes.func,
  handleUpdateExpenseType: PropTypes.func,
  handleDialogState: PropTypes.func,
  apartment: PropTypes.objectOf(PropTypes.array),
  actions: PropTypes.objectOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayNowPage, SignInPage)
