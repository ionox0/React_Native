/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Login from './login';

export default class testcoolapp extends Component {

  renderScene(route, navigator){
    return <route.component navigator={navigator} props={route.passProps} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: Login}}
        renderScene={this.renderScene}/>
    );
  }
}



AppRegistry.registerComponent('testcoolapp', () => testcoolapp);
