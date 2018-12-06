
import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';

class HomeScreen extends Component {

    state = {
      counter: 0
    }

    handleCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    render() {
      return (
        <ImageBackground
          source={require('../../assets/background.png')}
          imageStyle={{ resizeMode: 'stretch' }}
          style={styles.background}>
            <View style={styles.wrapperLogoTripPlanner}>
              <Image source={require('../../assets/logo-tripplanner.png')} />
            </View>
            <View style={styles.wrapperLogoDevPleno}>
              <Image source={require('../../assets/logo-devpleno.png')} />
            </View>
            <TouchableWithoutFeedback onPress={ this.handleCounter }>
              <View style={styles.buttonBackground}>
                <Text style={styles.buttonText}>Come on now, touch me, babe! { this.state.counter }</Text>
              </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
      );
    }
}
export default HomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  wrapperLogoTripPlanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapperLogoDevPleno: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 28
  },
  buttonBackground: {
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingTop: 16
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18
  }
})