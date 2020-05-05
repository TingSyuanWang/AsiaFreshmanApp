import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '校長的話',
        icon: 'accessibility',
        page: 'Principal'
    },
    {
        title: '校歌',
        icon: 'music-note',
        page: 'AsiaSong'
    }
];

class AboutAsia extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '關於亞大',
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
                                leftIcon={{name: item.icon, type: 'MaterialCommunityIcons'}}
                                onPress={() => navigate(item.page)}
                            />
                        ))
                    }
                </List>
            </ScrollView>
        );
    }
}

export default AboutAsia;
