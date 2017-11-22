import React, { Component } from "react";
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { tomain } from '../redux/actions/core';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Subtitle
} from "native-base";


class Chat extends Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    console.log(this.props.chatterID, this.props.chatterFirstName, this.props.chatterLastName, this.props.userID);
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello, can I book a seat from Waterloo to Markham tomorrow?',
          createdAt: new Date(),
          user: {
            _id: this.props.chatterID,
            name: `${this.props.chatterFirstName} ${this.props.chatterLastName}`,
          },
        },
      ],
    });
  }

  backToMain (e) {
      console.log('gonna go back to main');
      this.props.goBackToMain();
      e.preventDefault();
  }

  onSend(message = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }),()=> {console.log(this.state.messages)});
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
              <Title>{this.props.chatterFirstName} {this.props.chatterLastName}</Title>
            </Body>
            <Right>

            </Right>
          </Header>

           <GiftedChat
            messages={this.state.messages}
            onSend={(message) => this.onSend(message)}
            user={{
              _id: this.props.userID,
              name: 'Boyuan Zhu'
            }}
          />

        </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.auth.authentication_token,
        userID : state.core.userID,
        chatterID : state.core.chatterID,
        chatterFirstName : state.core.chatterFirstName,
        chatterLastName : state.core.chatterLastName,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        detail: (item) => {dispatch(showDetailInfo(item))},
        goBackToMain: () => {dispatch(tomain()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);