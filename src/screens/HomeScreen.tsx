
import React, { Component } from 'react';
import {Text, View, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';

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
          style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between'
            }}>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={require('../../assets/logo-tripplanner.png')} />
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: 28
            }}>
              <Image source={require('../../assets/logo-devpleno.png')} />
            </View>
            <TouchableWithoutFeedback onPress={ this.handleCounter }>
              <View style={{
                backgroundColor: 'white',
                paddingBottom: 16,
                paddingTop: 16
              }}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Come on now, touch me, babe! { this.state.counter }</Text>
              </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
      );
    }
}
export default HomeScreen
