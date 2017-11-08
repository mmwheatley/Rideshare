import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { topost, getresult } from '../redux/actions/core';
import { Kaede } from 'react-native-textinput-effects';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            pick_up_location:'459 hazel street, waterloo, ON',
            drop_off_location:'11 younge street, toronto, ON',
            departDate:''
        };
    }

    postRideshare (e) {
        console.log('Pressed!!')
        this.props.toPostPage();
        e.preventDefault();
    }

    searchRideshare (e) {
        console.log('Pressed!!')
        if (!this.state.departDate){
            alert("please input departure time");
        }
        else{
            this.state.departDate = Moment(this.state.departDate).format();
            this.props.toResultPage(this.props.token, this.state.pick_up_location, this.state.drop_off_location,this.state.departDate);
        }
         e.preventDefault();
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Kaede
                    label={'Pick Up'}
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={this.state.pick_up_location} 
                    onChangeText={(text) => this.setState({ pick_up_location: text })}
                />
                <Kaede
                    label={'Drop Off'}
                    style = {{marginTop: 4}}
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={this.state.drop_off_location} 
                    onChangeText={(text) => this.setState({ drop_off_location: text })}
                />
                <DatePicker
                    style={{width: 320, marginTop: 4}}
                    date={this.state.departDate}

                    mode="datetime"
                    placeholder="select departure time"
                    format='YYYY-MM-DD HH:mm'
                    minDate="2017-11-01"
                    maxDate="2018-11-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => {this.setState({departDate: date})}}
                  />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
                    <Button onPress={(e) => this.searchRideshare(e)} title="Search Rideshare  "/>
                    <Button onPress={(e) => this.postRideshare(e)} title="  Post New Rideshare"/>
                </View>

            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        token: state.auth.authentication_token
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toPostPage: () => { dispatch(topost()); },
        toResultPage: (token, pick_up_location,drop_off_location,departDate) => { dispatch(getresult(token, pick_up_location,drop_off_location,departDate)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);