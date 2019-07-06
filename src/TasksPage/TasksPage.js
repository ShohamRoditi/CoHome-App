import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles'
import { bindActionCreators } from 'redux'
import SignInPageActions from '../SignInPage/SignInPageActions'
import PayNowPageActions from '../PayNowPage/PayNowPageActions'
import TasksPageActions from '../TasksPage/TasksPageActions'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import Swipeable from 'react-native-swipeable'

const mapStateToProps = ({ TasksPage, SignInPage }) => {
  return {
    name: SignInPage.myName,
    address: SignInPage.myAddress,
    apartment: SignInPage.myApartment,
    rate: TasksPage.rate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      PayNowPageActions: bindActionCreators(PayNowPageActions, dispatch),
      SignInPageActions: bindActionCreators(SignInPageActions, dispatch),
      TasksPageActions: bindActionCreators(TasksPageActions, dispatch)
    }
  }
}

class TasksPage extends Component {
  constructor(props) {
    super(props)
    this.handleTask = this.handleTask.bind(this)
  }

  async handleTask(rating) {
    const { handleUpdateRate, updateMyRating } = this.props.actions.TasksPageActions
    const { name, address } = this.props
    const { navigate } = this.props.navigation
    await handleUpdateRate(rating)
    const { rate } = this.props
    await updateMyRating(address, name, rate)
    navigate('RatingPage')
  }

  render() {
    return (
      <View>
        <LinearGradient colors={['#ffffff', '#9cff9d']} style={styles.backgroundGradient}>
          <Text style={styles.titleTasks}>Slide Right to see the points &#128073;</Text>
          <Text style={styles.titleTasks}>&#128072; Slide Left to accept your task</Text>
          <ScrollView>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>10 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(10)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <Text style={styles.taskButton}>Empty Bin &#128465;</Text>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>20 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(20)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <View style={styles.sliderTask}>
                  <Text style={styles.taskButton}>Clean Dishes</Text>
                  <Image
                    style={styles.taskIcon}
                    resizeMode="contain"
                    source={require('../images/cleandishes.png')}
                  />
                </View>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>25 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(25)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <View style={styles.sliderTask}>
                  <Text style={styles.taskButton}>Clean Windows</Text>
                  <Image
                    style={styles.taskIcon}
                    resizeMode="contain"
                    source={require('../images/cleanwindow.png')}
                  />
                </View>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>15 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(15)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <View style={styles.sliderTask}>
                  <Text style={styles.taskButton}>Vacum</Text>
                  <Image
                    style={styles.taskIcon}
                    resizeMode="contain"
                    source={require('../images/vacuum.png')}
                  />
                </View>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>30 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(30)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <View style={styles.sliderTask}>
                  <Text style={styles.taskButton}>Mop the Floor</Text>
                  <Image
                    style={styles.taskIcon}
                    resizeMode="contain"
                    source={require('../images/mopfloor.png')}
                  />
                </View>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>40 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(40)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <Text style={styles.taskButton}>Toilet Cleaning &#128701;</Text>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>10 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(10)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <Text style={styles.taskButton}>Dust Cleaning &#129529;</Text>
              </Swipeable>
            </View>
            <View style={styles.swipeableBox}>
              <Swipeable
                leftContent={<Text style={styles.taskButtonPoints}>5 points</Text>}
                rightButtons={[
                  <TouchableOpacity
                    style={styles.taskButtonAccept}
                    onPress={() => this.handleTask(5)}
                    key={1}
                  >
                    <Text style={styles.taskAccept}>Accept</Text>
                  </TouchableOpacity>
                ]}
              >
                <Text style={styles.taskButton}>Plastic Recycle &#9851;</Text>
              </Swipeable>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    )
  }
}

TasksPage.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  handleUpdateRate: PropTypes.func,
  rate: PropTypes.number,
  updateMyRating: PropTypes.func,
  navigation: PropTypes.object,
  actions: PropTypes.objectOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage)
