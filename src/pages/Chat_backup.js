import React, { Component } from "react";
import { connect } from 'react-redux';
import { ScrollView,Text, View } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem} from 'native-base';

import { Images, Colors  } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

//reducers
import { tochatlist } from '../redux/actions/core';

class Chat extends Component {
    toChatList (e) {
        console.log('to chat list!!')
        this.props.toChatList();
        e.preventDefault();
    }

    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={(e) => this.toChatList(e)}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Chat Page</Title>
              </Body>
              <Right>
              </Right>
            </Header>

            <Content>
                <ScrollView style={styles.container}>

                    <View style={styles.section}>
                        <Text style={styles.title}>
                            RideShare Chat Page
                            
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
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toChatList: () => {dispatch(tochatlist())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);