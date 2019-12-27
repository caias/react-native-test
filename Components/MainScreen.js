import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const TabNavigation = createMaterialTopTabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='ios-home' style={{ color: tintColor }} />
    }
  },
  Search: {
    screen: SearchTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='ios-search' style={{ color: tintColor }} />
    }
  },
  AddMedia: {
    screen: AddMediaTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='ios-add-circle' style={{ color: tintColor }} />
    }
  },
  Likes: {
    screen: LikesTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='ios-heart' style={{ color: tintColor }} />
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='person' style={{ color: tintColor }} />
    }
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor: 'white'
    },
    iconStyle: {
      ...Platform.select({
        ios: {
          height: 35,
          marginBottom: 20
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  },
  defaultNavigationOptions: {
    header: null
  }
});

export default createAppContainer(TabNavigation);