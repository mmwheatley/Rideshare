import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { topost, getresult } from '../redux/actions/core';
import { Kaede } from 'react-native-textinput-effects';

class Result extends Component {
    
    postRideshare (e) {
        console.log('Pressed!!')
        this.props.toPostPage();
        e.preventDefault();
    }

    searchRideshare (e) {
        console.log('Pressed!!')
        this.props.toResultPage();
        e.preventDefault();
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Kaede
                    label={'start point'}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
                <Kaede
                    label={'destination'}
                    autoCorrect={false}
                    autoCapitalize='none'
                />


            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toPostPage: () => { dispatch(topost()); },
        toResultPage: () => { dispatch(getresult()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);