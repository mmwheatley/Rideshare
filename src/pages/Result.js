import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { showDetailInfo} from '../redux/actions/core';
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

class Result extends Component {
    constructor(props) {
        super(props);
    }

    backToMain (e) {
        console.log('gonna go back to main');
        this.props.goBackToMain();
        e.preventDefault();
    }

    showDetail(item){
        console.log(item);
        this.props.detail(item);
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
                <Title>Search Result</Title>
              </Body>
              <Right>

              </Right>
            </Header>

            <Content>
              <List>
                <FlatList
                  data={this.props.data_array}
                  renderItem={({ item }) => (
                    <ListItem
                      // roundAvatar
                      title={`${item.driver.firstName} ${item.driver.lastName}    Rate:${item.driver.score}`}
                      subtitle={`price:${item.price}      seats available:${item.totalSeats}`}
                      onPress={ () => this.showDetail(item) }
                    />
                  )}
                  keyExtractor={item => item._id}
                />
              </List>
            </Content>
          </Container>
      );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        data_array : state.core.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        detail: (item) => {dispatch(showDetailInfo(item))},
        goBackToMain: () => {dispatch(tomain()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);