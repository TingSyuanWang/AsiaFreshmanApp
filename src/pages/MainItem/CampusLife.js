import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '住宿',
        icon: 'account-balance',
        page: 'Dormitory'
    },
    {
        title: '社團介紹',
        icon: 'group',
        page: 'GroupIntroduction'
    },
    {
        title: '總務須知',
        icon: 'info',
        page: 'GeneralInformation'
    }
];

class CampusLife extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校園生活',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.back({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
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

export default CampusLife;
