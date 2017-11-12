import React from "react";
import { connect } from 'react-redux';
import { ScrollView,Text, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem} from 'native-base';

import { Images, Colors  } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

//reducers
import { launchLogin, onRegister } from '../redux/actions/auth';
import { tomain } from '../redux/actions/core';

class Launch extends React.Component {
    backToMain (e) {
        console.log('gonna go back to main')
        this.props.goBackToMain();
        e.preventDefault();
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
                <Title>ChatList</Title>
              </Body>
              <Right>
              </Right>
            </Header>

            <Content>
                <ScrollView style={styles.container}>

                    <View style={styles.section}>
                        <Text style={styles.title}>
                            RideShare Chat List
                            
                        </Text>
                    </View >
                </ScrollView>
            </Content>
          </Container>
        );

	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        sysAlert: state.auth.sysAlert,
        errorFlag: state.auth.errorFlag
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: () => {dispatch(onRegister()); },
        launchLogin: () => {dispatch(launchLogin()); },
        goBackToMain: () => {dispatch(tomain()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Launch);