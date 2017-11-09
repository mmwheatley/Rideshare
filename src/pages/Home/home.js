import React, { Component } from 'react';
import { BackHandler, Dimensions, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Content, Container, Header, Left, Right, Body, Button, Text, Title, Icon, Footer, FooterTab } from 'native-base'
import { connect } from 'react-redux';
import Locator from '../Locator';
// import SearchBar from '..'

// Styles
import styles from '../Styles/locatorStyles'

export default class HomeScreen extends Component {
  //Detect hardware button presses for back navigation
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }
  render (){
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              //onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            
          </Body>
          <Right />
        </Header>

        <Locator/>

      </Container>
    );
  }
}
