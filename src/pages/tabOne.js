//driver unprocessed
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image } from 'react-native';
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
  ListItem,
  List,
  Text,
  Subtitle
} from "native-base";

class Result extends Component {
    constructor(props) {
        super(props);
    }

    showDetail(item){
        console.log(item);
        this.props.detail(item);
    }

    render() {
      return (
        
          <Container>
             <Content>
              <List
                dataArray={this.props.data_array}
                renderRow={data =>
                  <ListItem avatar onPress={ () => this.showDetail(data) }>
                    <Left>

                    </Left>
                    <Body>
                      <Text>{`${data.driver.firstName} ${data.driver.lastName} `}</Text>
                      <Text numberOfLines={1} note>{`price:${data.price}   seats available:${data.totalSeats}`}</Text>
                      
                    </Body>
                    <Right>
                      <Text note>{`Rate:${data.driver.score}`}</Text>
                    </Right>
                  </ListItem>}
              />
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
        detail: (item) => {dispatch(showDetailInfo(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);