import React, { Component } from 'react'
import { Image, BackHandler } from 'react-native'
import { Content, 
  Container, 
  Header, 
  Left, 
  Right, 
  Body, 
  Button,
  Text, 
  Title, 
  Icon, 
  Footer, 
  FooterTab, 
  Card, 
  CardItem, 
  Thumbnail, } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RidesScreenStyle'

class RidesScreen extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }
  render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
							<Icon name="ios-menu" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>My Rides</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Card style={{ flex: 0 }}>
						<CardItem>
							<Image
								style={{ resizeMode: "cover", height: 200, flex: 1 }}
								source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}
							/>
						</CardItem>
						<CardItem>
							<Button transparent>
								<Icon name="logo-github" />
								<Text>41,926 stars</Text>
							</Button>
						</CardItem>
					</Card>
					<Card style={{ flex: 0 }}>
						<CardItem>
							<Image
								style={{ resizeMode: "cover", height: 200, flex: 1 }}
								source={{ uri: "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" }}
							/>
						</CardItem>
						<CardItem>
							<Button transparent>
								<Icon name="logo-github" />
								<Text>15,021 stars</Text>
							</Button>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(RidesScreen)