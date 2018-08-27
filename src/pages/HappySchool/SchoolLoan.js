import React, { Component } from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class SchoolLoan extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '就學貸款',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH1, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH2 }>1.就貸辦理期間：第一學期為每年8月1日開始辦理；第二學期為每年1月15日開始辦理；受理時間至規定註冊繳費日止，逾期不受理。</Text>
                <Text style={ ItemTitleH2 }>2.第一階段：請同學於每學期註冊繳費日前將台灣銀行申請撥款通知書（第二聯學校存執聯）親自或以掛號郵寄回生輔組；請同學依相關規定辦理，以免影響就學貸款權益。就學貸款流程圖：</Text>
                <Image style={ ImageStyle3 } resizeMode={'stretch'} source={require('../../img/flowchart.png')} />
                <Text style={ ItemTitleH2 }>3.第二階段：財稅中心查核年收入需繳回相關資料時間；第一學期每年約10月底；第二學期每年約4月。</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>類別A：</Text>
                    <Text style={ ItemTitleH2 }>家庭年收入所得總額：114萬元以下</Text>
                    <Text style={ ItemTitleH2 }>貸款利息：由政府全額補助</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>類別B：</Text>
                    <Text style={ ItemTitleH2 }>家庭年收入所得總額：114萬元至120萬元(含)</Text>
                    <Text style={ ItemTitleH2 }>貸款利息：由政府提供半額利息補助，另半額利息由借款人自行負擔。（利息按教育部與銀行協議訂定之利率浮動計算）</Text>
                    <Text style={ ItemTitleH2 }>如需辦理規定：收到第二階段簡訊通知後，請盡速至生輔組辦理；如需放棄也請至生輔組辦理。</Text>
                    <Text style={ ItemTitleH2 }>備註：每月請自行至臺灣銀行繳付利息。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>類別C：</Text>
                    <Text style={ ItemTitleH2 }>家庭年收入所得總額：120萬元以上</Text>
                    <Text style={ ItemTitleH2 }>貸款利息：貸款利息需全額自付，自臺灣銀行撥款日次月起於每月第一個營業日繳付利息。（利息按教育部與銀行協議訂定之利率浮動計算）</Text>
                    <Text style={ ItemTitleH2 }>如需辦理規定</Text>
                    <Text style={ ItemTitleH2 }>1.學生本人需有第二位兄弟姊妹就讀高級中等以上學校。</Text>
                    <Text style={ ItemTitleH2 }>2.備妥兄弟姊妹該學期就學相關證明。</Text>
                    <Text style={ ItemTitleH2 }>3.收到第二階段簡訊通知後，請盡速至生輔組辦理；如需放棄也請至生輔組辦理。</Text>
                    <Text style={ ItemTitleH2 }>備註：每月請自行至臺灣銀行繳付利息。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default SchoolLoan;
