import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tomain } from '../redux/actions/core';
import { Container, Text, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem} from 'native-base';

import { Images, Metrics } from "../Themes";


class userProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver : ''
        };
    }

    backToMain (e) {
        console.log('gonna go back to main')
        this.props.goBackToMain();
        e.preventDefault();
    }

    showPermission(e){
        if (this.props.item.driverPermission){
            this.setState({driver: 'Approved to post ride shares'});
        } else{
            this.setState({driver: 'Not approved to post ride shares yet'});
        }
    }

    componentWillMount(e){
        this.showPermission(e);
    }
    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={(e) => this.backToMain(e)}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Profile</Title>
              </Body>
              <Right>
              </Right>
            </Header>

            <Content>
                <List>
                    <ListItem >
                        <Text>Name: {this.props.item.firstName} {this.props.item.lastName}</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Email: {this.props.item.email}</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Tel Number: {this.props.item.number}</Text>
                    </ListItem>
                    <ListItem >
                        <Text>PayPal link: {this.props.item.payment.paypal}</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Score: {this.props.item.score} </Text>
                    </ListItem>
                    <ListItem >
                        <Text>Driver Permission: {this.state.driver} </Text>
                    </ListItem>
                </List>
                <Button 
                    style={{ marginRight: 60, marginLeft: 60, marginTop: 20, flex: 1, justifyContent: "center" }} 
                    full
                    onPress={(e) => this.askForJoin(e)}>
                    <Text>Modify User Infomation</Text>
                </Button>
                <Button 
                    style={{ marginRight: 60, marginLeft: 60, marginTop: 20, flex: 1, justifyContent: "center" }} 
                    full
                    onPress={(e) => this.askForJoin(e)}>
                    <Text >Change Password</Text>
                </Button>

                {this.props.item.driverPermission === true &&
                    <Button 
                        style={{ marginRight: 60, marginLeft: 60, marginTop: 20, flex: 1, justifyContent: "center" }} 
                        full
                        onPress={(e) => this.askForJoin(e)}>
                        <Text >Update Driver information</Text>
                    </Button>
                }

                {this.props.item.driverPermission === false &&
                    <Button 
                        style={{ marginRight: 60, marginLeft: 60, marginTop: 20, flex: 1, justifyContent: "center" }} 
                        full
                        onPress={(e) => this.askForJoin(e)}>
                        <Text >Apply To Be A Driver</Text>
                    </Button>
                }
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.auth.authentication_token,
        item: state.core.userinfo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        goBackToMain: () => {dispatch(tomain()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);