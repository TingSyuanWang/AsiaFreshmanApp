import React, { Component } from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class Takeoff extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校歌',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH2, ItemTitleH2RedLeft, ImageStyle3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }>連綿的山峰　海闊天空</Text>
                    <Text style={ ItemTitleH2 }>自然的美景　巍巍台中</Text>
                    <Text style={ ItemTitleH2 }>智慧的純真　誠摯善良</Text>
                    <Text style={ ItemTitleH2 }>智慧的純真　誠摯善良</Text>
                    <Text style={ ItemTitleH2 }>清新的學風　和諧健康</Text>
                    <Text style={ ItemTitleH2 }>喜悅的心　飛躍的情</Text>
                    <Text style={ ItemTitleH2 }>教學研究　服務管理</Text>
                    <Text style={ ItemTitleH2 }>擁抱一切希望　實現終生理想</Text>
                    <Text style={ ItemTitleH2 }>都在這裡　都在這裡</Text>
                    <Text style={ ItemTitleH2 }>追求卓越　邁向國際</Text>
                    <Text style={ ItemTitleH2 }>昂首跨步　向前行　向前行</Text>
                    <Image style={ ImageStyle3 } resizeMode={'stretch'} source={require('../../img/AsiaSong.png')} />
                </View>
            </ScrollView>
        );
    }
}

export default Takeoff;
