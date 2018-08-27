import React, { Component } from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class Takeoff extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '學生請假',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH2, ItemTitleH2RedLeft, ImageStyle2 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }>1.同學缺曠紀錄可至【學生資訊系統】查詢，缺曠資料依任課老師輸入並更新。</Text>
                    <Text style={ ItemTitleH2 }>2.請同學依學生請假規則辦理請假手續（至學生資訊系統－學生請假系統申請）。</Text>
                    <Text style={ ItemTitleH2 }>3.請假時所呈證明文件如有虛構或偽造情事者，除缺席之時日以曠課論外，並嚴予懲處。</Text>
                    <Text style={ ItemTitleH2 }>4.期勉各位同學能快樂、認真學習成長，準時到校上課，勿遲到、曠課缺席！</Text>
                    <Text style={ ItemTitleH2 }>5.缺曠資料如有誤記情事，需請任課老師修正缺曠資料（確實到班上課者）；受理時間至學期課程結束，逾期不受理。</Text>
                    <Text style={ ItemTitleH2RedLeft }>一般假別：凡請假一週內之事假、病假及生理假皆需申請學生「一般」假別，並一律由該科目任課老師核批。</Text>
                    <Text style={ ItemTitleH2RedLeft }>特殊假別：請假天數超過一週以上，且假別為非一般事假、病假（生理假）及喪假且檢附證明者，皆需申請學生「重大傷病及特殊事假」假別，並由導師及生輔組核批。</Text>
                    <Image style={ ImageStyle2 } resizeMode={'stretch'} source={require('../../img/takeoff.jpg')} />
                </View>
            </ScrollView>
        );
    }
}

export default Takeoff;
