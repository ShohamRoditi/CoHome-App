import MyExpensesPage from './src/MyExpensesPage/MyExpensesPage'
import SignInPage from './src/SignInPage/SignInPage'
import PayNowPage from './src/PayNowPage/PayNowPage'
import TasksPage from './src/TasksPage/TasksPage'
import RatingPage from './src/RatingPage/RatingPage'
import DeletePage from './src/DeletePage/DeletePage'
import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import PropTypes from 'prop-types'

class NavigationDrawerStructure extends Component {
  toggleDrawer() {
    const { navigationProps } = this.props
    navigationProps.toggleDrawer()
  }
  render() {
    return (
      <View style={styles.burgerNav}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./src/images/hamburgerNav.png')}
            style={styles.hunburgerNavLogo}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  SignInPage: {
    screen: SignInPage,
    navigationOptions: () => ({
      headerTintColor: '#fff',
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require('./src/images/CoHomeLogo.png')}
          style={styles.logo}
        />
      ),
      headerTitleContainerStyle: {
        justifyContent: 'center'
      },
      headerStyle: {
        backgroundColor: '#00000000'
      }
    })
  }
})

const Screen2_StackNavigator = createStackNavigator({
  PayNowPage: {
    screen: PayNowPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00000000'
      },
      headerTintColor: '#fff',
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require('./src/images/CoHomeLogo.png')}
          style={styles.logo}
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: '27%'
      }
    })
  }
})

const Screen3_StackNavigator = createStackNavigator({
  MyExpensesPage: {
    screen: MyExpensesPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00000000'
      },
      headerTintColor: '#fff',
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require('./src/images/CoHomeLogo.png')}
          style={styles.logo}
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: '27%'
      }
    })
  }
})

const Screen4_StackNavigator = createStackNavigator({
  RatingPage: {
    screen: RatingPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00000000'
      },
      headerTintColor: '#fff',
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require('./src/images/CoHomeLogo.png')}
          style={styles.logo}
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: '27%'
      }
    })
  }
})

const Screen5_StackNavigator = createStackNavigator({
  TasksPage: {
    screen: TasksPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00000000'
      },
      headerTintColor: '#fff',
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require('./src/images/CoHomeLogo.png')}
          style={styles.logo}
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: '27%'
      }
    })
  }
})

const Screen6_StackNavigator = createStackNavigator({
  DeletePage: {
    screen: DeletePage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00000000'
      },
      headerTintColor: '#fff',
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require('./src/images/CoHomeLogo.png')}
          style={styles.logo}
        />
      ),
      headerTitleContainerStyle: {
        marginLeft: '27%'
      }
    })
  }
})

const DrawerNavigator = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Pay Now',
      drawerIcon: <Image source={require('./src/images/payNow.png')} style={styles.PayNowIcon} />
    }
  },
  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'My Expenses',
      drawerIcon: (
        <Image source={require('./src/images/myExpensesIcon.png')} style={styles.PayNowIcon} />
      )
    }
  },
  Screen4: {
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Our Rating',
      drawerIcon: (
        <Image source={require('./src/images/ratingIcon.png')} style={styles.PayNowIcon} />
      )
    }
  },
  Screen5: {
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'House Tasks',
      drawerIcon: <Image source={require('./src/images/taskIcon.png')} style={styles.PayNowIcon} />
    }
  },
  screen6: {
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Delete Me',
      drawerIcon: (
        <Image source={require('./src/images/deleteIcon.png')} style={styles.PayNowIcon} />
      )
    }
  }
})

NavigationDrawerStructure.propTypes = {
  navigationProps: PropTypes.object
}

export default createAppContainer(DrawerNavigator)
