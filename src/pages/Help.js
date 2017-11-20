import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Text, Title, H1, H2, H3 } from 'native-base';

import { tomain} from '../redux/actions/core';

class Help extends Component {

    backToMain (e) {
        console.log('gonna go back to main');
        this.props.goBackToMain();
        e.preventDefault();
    }

    render() {
        return (
            <Container>

                <Header>
                    <Left>
                        <Button transparent 
                        onPress={(e) => this.backToMain(e)}>
                        <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>BOOM BOOM!</Title>
                    </Body>
                </Header>
                <Content padder>
                    <H1>
                        SREAGNI!
                    </H1>
                    <H2>
                        SREAGNI!
                    </H2>
                    <H3>
                        SREAGNI!
                    </H3>
                    <Text>
                        Write the help page pls
                    </Text>
                </Content >
            </Container>
        );
    }
}
//make this component available to the app
const mapStateToProps = (state) => {
    return {
     
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        goBackToMain: () => {dispatch(tomain())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Help);
