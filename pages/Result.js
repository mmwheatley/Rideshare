import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';



class Result extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.data_array);
    }

render() {
  return (

          <Text> item </Text>

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);