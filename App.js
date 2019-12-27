import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import MainScreen from './Components/MainScreen';

const HomeScreen = () => {
  return (
    <MainScreen />
  );
}

HomeScreen.navigationOptions = {
  headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
  headerTitle: (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Text>Instagurim</Text>
    </View>
  ),
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }} />,
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);