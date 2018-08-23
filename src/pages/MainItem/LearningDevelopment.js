import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '選課',
        icon: 'av-timer',
        page: 'Course'
    },
    {
        title: '學生請假',
        icon: 'announcement',
        page: 'Takeoff'
    },
    {
        title: '服務與學習',
        icon: 'people',
        page: 'ServiceLearning'
    },
    {
        title: '電子郵件 & 軟體資源',
        icon: 'cloud-download',
        page: 'SoftwareResources'
    },
    {
        title: '圖書資源',
        icon: 'important-devices',
        page: 'LibraryResources'
    },
    {
        title: '生涯發展與就業輔導',
        icon: 'trending-up',
        page: 'CareerDevelopment'
    }
];

class LearningDevelopment extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '學習發展',
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

export default LearningDevelopment;
