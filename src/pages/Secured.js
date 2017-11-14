import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View,Text} from 'react-native';
import { topost, getresult, cleandata, tochatlist, tohistory} from '../redux/actions/core';
import { logout } from '../redux/actions/auth';
import { Kaede } from 'react-native-textinput-effects';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
import {Container,Header,Title,Content,Button,Footer,FooterTab,Text as NBText,Body,Left,Right,Icon,Badge} from "native-base";
import Styles from "./Styles/LoginScreenStyles";


class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            pick_up_location:'459 hazel street, waterloo, ON',
            drop_off_location:'27 King\'s College Circle Toronto, Ontario M5S 1A1 Canada',
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
            this.props.cleanData();
            this.state.departDate = Moment(this.state.departDate).format();
            this.props.toResultPage(this.props.token, this.state.pick_up_location, this.state.drop_off_location,this.state.departDate);
        }
         e.preventDefault();
    }

    logoutAndBackToLoginPage(e){
        console.log('try to log out');
        this.props.logout();

    }

    toChatList (e) {
        console.log('to chat list!!')
        this.props.toChatList();
        e.preventDefault();
    }

    toHistory (e) {
        console.log('to history!!')
        this.props.cleanData();
        this.props.toHistoryPage(this.props.token);
        e.preventDefault();
    }

    render() {
        return (
               <Container>
                <Header>
                  <Left>
                    <Button transparent onPress={(e) => this.logoutAndBackToLoginPage(e)}>
                      <Icon name="body" />
                    </Button>
                  </Left>
                  <Body>
                    <Title>RideShare</Title>
                  </Body>
                  <Right>

                  </Right>
                </Header>

                <Content>
                    <ScrollView >
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

                        <View style={[Styles.loginRow]}>
                            <Button 
                                style={{ flex: 1, justifyContent: "center" }} 
                                full 
                                onPress={(e) => this.searchRideshare(e)}>
                                <NBText style={Styles.loginText}>Search</NBText>
                            </Button>
                            <Button 
                                style={{ flex: 1, justifyContent: "center" }} 
                                full
                                onPress={(e) => this.postRideshare(e)}>
                                
                                <NBText style={Styles.loginText}>Post</NBText>
                            </Button>
                        </View>
                    </ScrollView>
                </Content>

                <Footer>
                  <FooterTab>
                    <Button active={this.state.tab1} onPress={(e) => this.toHistory(e)}>
                      <Icon active={this.state.tab1} name="paper" style={{ color: "brown" }} />
                      <Text>History</Text>
                    </Button>
                    <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                      <Icon active={this.state.tab2} name="person" style={{ color: "brown" }} />
                      <Text>Profile</Text>
                    </Button>
                    <Button  badge vertical onPress={(e) => this.toChatList(e)}>
                      <Badge ><Text>1</Text></Badge>
                      <Icon active={this.state.tab3} name="chatbubbles" style={{ color: "brown" }} />
                      <Text>Chat</Text>
                    </Button>
                    <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
                      <Icon active={this.state.tab4} name="logo-github" style={{ color: "brown" }} />
                      <Text>Help</Text>
                    </Button>
                  </FooterTab>
                </Footer>
              </Container>
            
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
        cleanData: () => {dispatch(cleandata())},
        logout: () => {dispatch(logout())},
        toChatList: () => {dispatch(tochatlist())},
        toHistoryPage: (token) => {dispatch(tohistory(token))},
        toResultPage: (token, pick_up_location,drop_off_location,departDate) => { dispatch(getresult(token, pick_up_location,drop_off_location,departDate)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);