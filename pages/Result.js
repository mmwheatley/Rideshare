import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { showDetailInfo} from '../redux/actions/core';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     console.log(this.props.data_array);
    // }

    showDetail(item){
        console.log(item);
        this.props.detail(item);
    }

    render() {
      return (
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