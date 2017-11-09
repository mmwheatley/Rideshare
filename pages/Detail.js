import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image, Text } from 'react-native';

class Result extends Component {
    constructor(props) {
        super(props);
    }




    render() {
      return (
        <View>
            <Text> detail </Text>
        </View>
      );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);