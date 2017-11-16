import React, { Component } from "react";
import { connect } from 'react-redux';
import { ScrollView,Text, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem} from 'native-base';

import { Images, Colors  } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

//reducers
import { toprofilepage } from '../redux/actions/core';

class changeWord extends Component {
    toProfile (e) {
        console.log('change password!')
        this.props.toProfilePage(this.props.token);
        e.preventDefault();
    }

    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={(e) => this.toProfile(e)}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Change password</Title>
              </Body>
              <Right>
              </Right>
            </Header>

            <Content>
                <ScrollView style={styles.container}>
                    <View style={styles.section}>
                        <Text style={styles.title}>
                            change password
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
        token: state.auth.authentication_token
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toProfilePage: (token) => { dispatch(toprofilepage(token)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(changeWord);