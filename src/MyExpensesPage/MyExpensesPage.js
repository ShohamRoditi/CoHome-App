import { View, Text, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles'
import PropTypes from 'prop-types'
import Loading from '../Loading/Loading'
import LinearGradient from 'react-native-linear-gradient'

const mapStateToProps = ({ SignInPage }) => {
  return {
    name: SignInPage.myName,
    apartment: SignInPage.myApartment,
    profilePic: SignInPage.profilePic
  }
}

class MyExpensesPage extends Component {
  render() {
    const { name, apartment } = this.props
    let { water, gas, arnona, electricity, houseCommittee, shopping, internet } = 0
    let {
      waterDate,
      gasDate,
      arnonaDate,
      electricityDate,
      houseCommitteeDate,
      shoppingDate,
      internetDate
    } = 0
    let tenant = 0
    if (apartment !== null) {
      if (apartment.apartment !== null) {
        if (
          this.props.apartment.apartment[0].tenants.find(tenant => tenant.name === name) !==
          undefined
        ) {
          tenant = this.props.apartment.apartment[0].tenants.find(tenant => tenant.name === name)
          const { monthly_payment } = this.props.apartment.apartment[0]
          monthly_payment.forEach(element => {
            switch (element.type) {
              case 'water': {
                if (element.paid_by === name) {
                  water = element.paid
                  waterDate = element.date
                }
                break
              }
              case 'gas': {
                if (element.paid_by === name) {
                  gas = element.paid
                  gasDate = element.date
                }
                break
              }
              case 'arnona': {
                if (element.paid_by === name) {
                  arnona = element.paid
                  arnonaDate = element.date
                }
                break
              }
              case 'electricity': {
                if (element.paid_by === name) {
                  electricity = element.paid
                  electricityDate = element.date
                }
                break
              }
              case 'house_committee': {
                if (element.paid_by === name) {
                  houseCommittee = element.paid
                  houseCommitteeDate = element.date
                }
                break
              }
              case 'shopping': {
                if (element.paid_by === name) {
                  shopping = element.paid
                  shoppingDate = element.date
                }
                break
              }
              case 'internet': {
                if (element.paid_by === name) {
                  internet = element.paid
                  internetDate = element.date
                }
                break
              }
            }
          })
        }
      }
    }
    return this.props.apartment !== null ? (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <ScrollView>
            <Text style={styles.welcomeExpenses}>Welcome {name} &#128400;</Text>
            <Image style={styles.expenseProfile} source={{ uri: this.props.profilePic }} />
            <Text style={styles.titleExpenses}>Your Monthly Expenses</Text>
            <View style={styles.expensesTypeContainer}>
              <Text style={styles.labelType}>Type</Text>
              <Text style={styles.labelType}>Amount</Text>
              <Text style={styles.labelType}>Date</Text>
            </View>
            {water !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1858/1858243.svg'
                  }}
                />
                <Text style={styles.expensesLabel}>{water}</Text>
                <Text style={styles.expensesLabel}>{waterDate}</Text>
              </View>
            ) : null}
            {gas !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1858/1858036.svg'
                  }}
                />
                <Text style={styles.expensesLabel}>{gas}</Text>
                <Text style={styles.expensesLabel}>{gasDate}</Text>
              </View>
            ) : null}
            {arnona !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1207/1207187.svg'
                  }}
                />
                <Text style={styles.expensesLabel}>{arnona}</Text>
                <Text style={styles.expensesLabel}>{arnonaDate}</Text>
              </View>
            ) : null}
            {electricity !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/993/993392.svg' }}
                />
                <Text style={styles.expensesLabel}>{electricity}</Text>
                <Text style={styles.expensesLabel}>{electricityDate}</Text>
              </View>
            ) : null}
            {houseCommittee !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/265/265667.svg' }}
                />
                <Text style={styles.expensesLabel}>{houseCommittee}</Text>
                <Text style={styles.expensesLabel}>{houseCommitteeDate}</Text>
              </View>
            ) : null}
            {shopping !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/859/859270.svg' }}
                />
                <Text style={styles.expensesLabel}>{shopping}</Text>
                <Text style={styles.expensesLabel}>{shoppingDate}</Text>
              </View>
            ) : null}
            {internet !== undefined ? (
              <View style={styles.expensesTypeContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.expenseIcon}
                  source={{
                    uri: 'https://www.flaticon.com/premium-icon/icons/svg/1022/1022960.svg'
                  }}
                />
                <Text style={styles.expensesLabel}>{internet}</Text>
                <Text style={styles.expensesLabel}>{internetDate}</Text>
              </View>
            ) : null}
            {tenant.paid_this_month !== undefined ? (
              <Text style={styles.sumExpenses}>sum: {tenant.paid_this_month}</Text>
            ) : null}
            {tenant.paid_this_month === 0 ? (
              <Text style={styles.noWaste}>You have not waste any money for this apartment</Text>
            ) : null}
          </ScrollView>
        </LinearGradient>
      </View>
    ) : (
      <Loading />
    )
  }
}

MyExpensesPage.propTypes = {
  name: PropTypes.string,
  profilePic: PropTypes.string,
  apartment: PropTypes.objectOf(PropTypes.array)
}

export default connect(mapStateToProps)(MyExpensesPage)
