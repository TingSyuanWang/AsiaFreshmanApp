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
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH2, ItemTitleH2RedLeft, ImageStyle3, ImageStyle7, ImageStyle8, ImageStyle9, ItemTitleH1, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH1 }>豐原-亞洲大學(901、201)</Text>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH3 }>{'\t'}行駛豐原到霧峰的 100 路公車，因路線及行車時間過長，間接影響服務品質。為使司機工時更合理，市府交通局將 100 路拆成兩條路線，調整為 201 路「亞洲大學—新民高中」與 901 路公車「豐原—明德高中」，取代 100 路，原 100 路候車地點、班次均不變。</Text>
                    <Image style={ ImageStyle7 } resizeMode={'stretch'} source={require('../../img/Bus.jpg')} />
                </View>
                <Text style={ ItemTitleH1 }>港尾-南開科大(108)</Text>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }></Text>
                    <Image style={ ImageStyle8 } resizeMode={'stretch'} source={require('../../img/Bus1.gif')} />
                </View>
                <Text style={ ItemTitleH1 }>新市政中心-朝陽科大(151)</Text>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }></Text>
                    <Image style={ ImageStyle9 } resizeMode={'stretch'} source={require('../../img/Bus2.jpg')} />
                </View>
            </ScrollView>
        );
    }
}

export default BusRoute;
