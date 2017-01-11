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
  Image,
  TouchableHighlight,
} from 'react-native';

import Register from './Register';


export default class Login extends Component {
  // How to go to a page
  linker(comp){
    this.props.navigator.push({
      component: comp
    })
  }

  render() {
    return (
      <Image source={require("./images/lin.png")} style={styles.container} >
        <Image source={require('./images/logo.png')} style={styles.logoh} resizeMode={'contain'} />
        <View style={styles.underline}></View>
        <TouchableHighlight onPress={this.linker.bind(this, Register)} underlayColor={'transparent'} >
          <View style={styles.bigbutt} ></View>
        </TouchableHighlight >
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  underline: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 300,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    height: null,
    width: null, alignItems: "center"
  },
  bigbutt: {
    backgroundColor: "rgb(0,235,194)",
    height: 60,
    width: 300,
  },
  logoh: {
    width: 100,
  }
})