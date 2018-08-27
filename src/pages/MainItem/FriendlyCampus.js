import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '兵役緩徵',
        icon: 'content-paste',
        page: 'Military'
    },
    {
        title: '校園安全',
        icon: 'security',
        page: 'CampusSecurity'
    },
    {
        title: '性別平等教育',
        icon: 'wc',
        page: 'GenderEquality'
    },
    {
        title: '校園法律宣導',
        icon: 'school',
        page: 'CampusLaw'
    },
    {
        title: '學生申訴',
        icon: 'face',
        page: 'StudentsAppeals'
    },
    {
        title: '交通安全',
        icon: 'traffic',
        page: 'TrafficSafety'
    },
    {
        title: '公車路線',
        icon: 'directions-bus',
        page: 'BusRoute'
    }
];

class FriendlyCampus extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '友善校園',
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

export default FriendlyCampus;
