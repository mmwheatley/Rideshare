import React, { Component } from 'react'
import { BackHandler, Dimensions, View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Content, Container, Header, Left, Right, Body, Button, Text, Title, Icon, Footer, FooterTab } from 'native-base'
import { connect } from 'react-redux'
//import Locator from '../Components/Locator'
import SearchBar from '../Components/SearchBar'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  //Detect hardware button presses for back navigation
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }
  render () {
    const { width, height } = Dimensions.get('window');
    const ratio = width / height;
    const coordinates = {
      latitude: 43.469750,
      longitude: -80.542353,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * ratio,
    };

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            
          </Body>
          <Right />

        </Header>

        <View style={styles.container}>
            <MapView
              style={styles.map}
              initialRegion={coordinates}
            />
        </View>
        

      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)