/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
class ToastMessage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const backgroundColor =
        this.props.type === 'success'
          ? 'green'
          : this.props.type === 'warning'
          ? 'yellow'
          : 'red';
  
      const textColor = this.props.type === 'warning' ? 'black' : 'white';
  
      return (
        <View
          style={{
            position: 'absolute',
            bottom: 20, // Adjust this value as needed
            alignSelf: 'center',
          }}>
          <View
            style={{
              backgroundColor,
              width: width * 0.5,
              height: height / 20,
              borderRadius: 20,
              top: height*0.2,
              justifyContent:'center'
            }}>
            <Text style={{ color: textColor, textAlign: 'center', fontSize:height*0.02}}>
              {this.props.message}
            </Text>
          </View>
        </View>
      );
    }
  }
  
  export default ToastMessage;
  