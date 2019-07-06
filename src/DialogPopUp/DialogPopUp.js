import Dialog from 'react-native-dialog'
import { View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignInPageActions from '../SignInPage/SignInPageActions'
import PayNowPageActions from '../PayNowPage/PayNowPageActions'
import PropTypes from 'prop-types'

const mapStateToProps = ({ SignInPage, PayNowPage }) => {
  return {
    name: SignInPage.myName,
    address: SignInPage.myAddress,
    apartment: SignInPage.myApartment,
    expenseType: PayNowPage.expenseType,
    dialogState: PayNowPage.dialogState,
    paid: PayNowPage.paid,
    date: PayNowPage.date
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

class DialogPopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paidAmount: 0,
      date: ''
    }
    this.Payment = this.Payment.bind(this)
  }
  async Payment() {
    const {
      handlePayment,
      handleUpdateDate,
      handleUpdatePaid,
      handleDialogState,
      handleIncorrectModal
    } = this.props.actions.PayNowPageActions
    const { handleApartment } = this.props.actions.SignInPageActions
    const dateValidate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
    if (
      this.state.date.match(dateValidate) &&
      !isNaN(this.state.paidAmount) &&
      this.state.paidAmount > 0
    ) {
      await handleUpdateDate(this.state.date)
      await handleUpdatePaid(this.state.paidAmount)
      const { address, name, expenseType, paid, date } = this.props
      await handlePayment(address, expenseType, paid, date, name)
      handleApartment(address)
      this.setState({ paidAmount: 0, date: '' })
      handleDialogState(false)
    } else {
      await handleDialogState(false)
      this.setState({ paidAmount: 0, date: '' })
      await handleIncorrectModal(true)
    }
  }

  render() {
    const { dialogState, expenseType } = this.props
    const { handleDialogState } = this.props.actions.PayNowPageActions
    return (
      <View>
        <Dialog.Container visible={dialogState}>
          <Dialog.Title>{expenseType}</Dialog.Title>
          <Dialog.Description>{`Do You Want to pay for ${expenseType}`}</Dialog.Description>
          <Dialog.Input
            label="Amount"
            onChangeText={amount => this.setState({ paidAmount: parseInt(amount) })}
          />
          <Dialog.Input
            placeholder="dd/mm/yyyy"
            label="Date"
            onChangeText={date => this.setState({ date })}
          />
          <Dialog.Button label="Pay Now!" onPress={() => this.Payment()} />
          <Dialog.Button label="Cancel" onPress={() => handleDialogState(false)} />
        </Dialog.Container>
      </View>
    )
  }
}

DialogPopUp.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  dialogState: PropTypes.bool,
  date: PropTypes.string,
  paid: PropTypes.number,
  handlePayment: PropTypes.func,
  expenseType: PropTypes.string,
  handleDialogState: PropTypes.func,
  handleIncorrectModal: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogPopUp)
