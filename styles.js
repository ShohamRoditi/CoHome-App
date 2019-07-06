import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundGradient: {
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 100
  },
  burgerNav: {
    flexDirection: 'row'
  },
  popupContainer: {
    width: 150,
    height: 150
  },
  hunburgerNavLogo: {
    width: 70,
    height: 70,
    marginLeft: 5
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
  input: {
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: '#74d14c',
    justifyContent: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 40
  },
  signButton: {
    marginTop: 70,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#74d14c',
    backgroundColor: '#74d14c',
    marginLeft: 65,
    marginRight: 65,
    padding: 8,
    marginBottom: 30
  },
  signButtonLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000'
  },
  addPhoto: {
    width: 80,
    height: 80,
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'center',
    marginLeft: '38%'
  },
  avatarPic: {
    width: 95,
    height: 95,
    marginTop: 20
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  chooseLater: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#74d14c',
    backgroundColor: '#74d14c',
    marginLeft: 65,
    marginRight: 65,
    padding: 8,
    marginBottom: 30
  },
  tenantsContainer: {
    marginTop: 10,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    height: '70%'
  },
  tenantBox: {
    width: 400,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  tenantLabel: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginRight: 30
  },
  rankingMedal: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 10
  },
  payNowButton: {
    width: 110,
    height: 125,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#71cb4a'
  },
  payNowIcons: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 10
  },
  payNowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  welcomePayNow: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30,
    marginTop: 20
  },
  welcomeExpenses: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#74d14c',
    marginBottom: 30,
    marginTop: 20
  },
  payNowLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5
  },
  welcomePayNowLabel: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#74d14c',
    marginLeft: 30
  },
  tickPaid: {
    position: 'absolute',
    height: 70,
    width: 70,
    alignSelf: 'center',
    top: 15
  },
  PayNowIcon: {
    height: 40,
    width: 40
  },
  expensesLabel: {
    marginTop: 40,
    fontSize: 17,
    alignSelf: 'center'
  },
  expensesTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  sumExpenses: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40
  },
  titleExpenses: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#74d14c'
  },
  noWaste: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 20
  },
  expenseIcon: {
    height: 40,
    width: 40,
    marginTop: 30
  },
  labelType: {
    fontSize: 20,
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginRight: 10
  },
  loading: {
    height: 220,
    width: 220,
    marginTop: 125,
    alignSelf: 'center'
  },
  expenseProfile: {
    height: 55,
    width: 55,
    alignSelf: 'center',
    marginBottom: 22,
    resizeMode: 'contain'
  },
  prizeLabel: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  mostWantedPrize: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  prizeIcon: {
    width: 50,
    height: 50
  },
  mostPrizeLabel: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    color: '#dc143c'
  },
  removeUser: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginLeft: 20
  },
  deleteButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginLeft: 70,
    marginRight: 70,
    padding: 8,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: 40
  },
  deleting: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#dc143c'
  },
  refuseDeleting: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#419a1c'
  },
  Qdelete: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    color: '#74d14c'
  },
  questionImage: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 25
  },
  tenantStay: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginLeft: 30
  },
  welcomeBack: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#74d14c',
    marginTop: 30,
    marginBottom: 40
  },
  welcomeIcon: {
    height: 120,
    width: 120,
    alignSelf: 'center'
  },
  continue: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#74d14c',
    marginTop: 30
  },
  arrowIcon: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 50
  },
  taskButton: {
    alignSelf: 'center',
    fontSize: 20
  },
  taskButtonAccept: {
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },
  taskAccept: {
    fontSize: 16,
    justifyContent: 'center',
    top: 3
  },
  taskButtonPoints: {
    alignSelf: 'flex-end',
    fontSize: 16,
    top: 3
  },
  titleTasks: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#74d14c',
    marginTop: 15,
    marginBottom: 10
  },
  swipeableBox: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center'
  },
  taskIcon: {
    height: 30,
    width: 30,
    marginLeft: 7
  },
  sliderTask: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  incorrectFormat: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  incorrectContainer: {
    height: 230,
    width: '100%'
  }
})
export default styles
