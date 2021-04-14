import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, Viewn } from 'react-native';
import { StackNavigator, } from 'react-navigation';

export const App = StackNavigator({
Home: { screen: HomeScreen },
Profile: { screen: ProfileScreen },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
  title: 'Welcome',
  };
  render() {
  const { navigate } = this.props.navigation;
  return (
  <Button
  title="Go to Jane's profile"
  onPress={() => navigate('Profile', { name: 'Jane' })
  }
  />
  )
}
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
  title: 'Welcome',
  };
  render() {
  const { navigate } = this.props.navigation;
  return (
  <Button
  title="Go to Jane's profile"
  onPress={() => navigate('Home', { name: 'Asd' })
  }
  />
  )
}
}