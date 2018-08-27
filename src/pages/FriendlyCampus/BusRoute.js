import React, { Component } from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class BusRoute extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '公車路線',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH2, ItemTitleH2RedLeft, ImageStyle3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Image style={ ImageStyle3 } resizeMode={'stretch'} source={require('../../img/Bus.jpg')} />
                    <Image style={ ImageStyle3 } resizeMode={'stretch'} source={require('../../img/Bus1.gif')} />
                    <Image style={ ImageStyle3 } resizeMode={'stretch'} source={require('../../img/Bus2.jpg')} />
                </View>
            </ScrollView>
        );
    }
}

export default BusRoute;
