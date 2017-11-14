//passenger unprocessed
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image } from 'react-native';
import { showDetailInfo} from '../redux/actions/core';
import { tomain } from '../redux/actions/core';
import Moment from 'moment';
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
             <Content>
              <List
                dataArray={this.props.data_array}
                renderRow={data =>
                  <ListItem avatar onPress={ () => this.showDetail(data) }>
                    <Left>

                    </Left>
                    <Body>
                      <Text>{`${Moment(data.departDate.from).format('lll')} `}</Text>
                      <Text numberOfLines={2} note>{`From: ${data.pickUpLoc.formattedAddress}`}</Text>
                      <Text numberOfLines={2} note>{`To: ${data.dropOffLoc.formattedAddress}`}</Text>
                      
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
        data_array : state.core.unpassenger
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        detail: (item) => {dispatch(showDetailInfo(item))},
        goBackToMain: () => {dispatch(tomain()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);