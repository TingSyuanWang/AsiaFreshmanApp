import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '健康檢查',
        icon: 'child-care',
        page: 'Checkup'
    },
    {
        title: '諮商輔導 & 資源教室服務',
        icon: 'domain',
        page: 'ConsultService'
    },
    {
        title: '愛滋防治宣導',
        icon: 'local-hospital',
        page: 'AIDS'
    },
];

class PhysicalHealth extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '身心保健',
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

export default PhysicalHealth;
