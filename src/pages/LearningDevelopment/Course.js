import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const list = [
    {
        title: '本校課程分類表',
        icon: 'format-list-numbered',
        page: 'Category'
    },
    {
        title: '本校選課說明',
        icon: 'format-list-numbered',
        page: 'Selection'
    },
    {
        title: '新生時程說明及注意事項',
        icon: 'format-list-numbered',
        page: 'Timetable'
    },
    {
        title: '校定畢業門檻',
        icon: 'format-list-numbered',
        page: 'GeneralCourse'
    },
    {
        title: '校定必修課程注意事項',
        icon: 'format-list-numbered',
        page: 'RequiredCourses'
    }
];

class Course extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '選課',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
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

export default Course;
