import React from "react";
import { connect } from 'react-redux';
import { ScrollView,Text, View } from "react-native";
import { Container, ScrollableTab, Tabs, Tab, Header, Left, Body, Right, Button, Icon, Segment,Title, Content, List, ListItem} from 'native-base';
import { Images, Colors  } from "../Themes";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import TabFour from "./tabFour";
// Styles
import styles from "./Styles/LaunchScreenStyles";

//reducers
import { launchLogin, onRegister } from '../redux/actions/auth';
import { tochatlist,tomain} from '../redux/actions/core';

class Launch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seg: 1
      };
    }

    backToMain (e) {
        console.log('gonna go back to main');
        this.props.goBackToMain(this.props.token);
        e.preventDefault();
    }

    render() {
        return (
            <Container >
              <Header hasTabs>
                <Left>
                  <Button transparent onPress={(e) => this.backToMain(e)}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Segment>
                    <Button
                      first
                      active={this.state.seg === 1 ? true : false}
                      onPress={() => this.setState({ seg: 1 })}
                    >
                      <Text>Driver</Text>
                    </Button>
                    <Button
                      last
                      active={this.state.seg === 2 ? true : false}
                      onPress={() => this.setState({ seg: 2 })}
                    >
                      <Text>Passenger</Text>
                    </Button>
                  </Segment>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name="search" />
                  </Button>
                </Right>
              </Header>

              <Content padder>
                {this.state.seg === 1 &&
                  <Tabs>
                    <Tab heading="Unprocessed">
                      <TabOne />
                    </Tab>
                    <Tab heading="All">
                      <TabTwo />
                    </Tab>
                  </Tabs>}
                {this.state.seg === 2 &&
                  <Tabs>
                    <Tab heading="Unprocessed">
                      <TabThree />
                    </Tab>
                    <Tab heading="All">
                      <TabFour />
                    </Tab>
                  </Tabs>}
            </Content>
            </Container>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.auth.authentication_token
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        goBackToMain: () => {dispatch(tomain())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Launch);