import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '紓困關懷',
        icon: 'wb-incandescent',
        page: 'BailoutCare'
    },
    {
        title: '就學優待減免',
        icon: 'mood',
        page: 'SchoolTuitionReduction'
    },
    {
        title: '就學貸款',
        icon: 'monetization-on',
        page: 'SchoolLoan'
    },
    {
        title: '起飛計畫',
        icon: 'flight-takeoff',
        page: 'TakeoffPlan'
    }
];

class HappySchool extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '安心就學',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                                onPress={() => navigate(item.page)}
                            />
                        ))
                    }
                </List>
            </ScrollView>
        );
    }
}

export default HappySchool;
