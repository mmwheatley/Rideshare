import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { topost } from '../redux/actions/core';
import { Kaede } from 'react-native-textinput-effects';

class Main extends Component {
    
    postRideshare (e) {
        console.log('Pressed!!')
        this.props.toPostPage();
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

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
                    <Button onPress={(e) => this.postRideshare(e)} title="Search Rideshare  "/>
                    <Button onPress={(e) => this.postRideshare(e)} title="  Post New Rideshare"/>
                </View>

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
        toPostPage: () => { dispatch(topost()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);