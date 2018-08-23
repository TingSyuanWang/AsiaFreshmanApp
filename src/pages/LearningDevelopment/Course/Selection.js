import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../../assets/customStyle';


class Selection extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '本校選課說明',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ViewSubContainerNoMargin, MainContent, ItemTitleH2Red, IconStyle } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoMargin }>
                    <Text style={ ItemTitleH2Red }>【查詢】</Text>
                    <Text style={ MainContent }>1.至所屬學系網頁查詢「107學年課程規劃表」查得「一上」應修科目。(轉學生請依所屬「課程規劃表」及「學期」選課。)</Text>
                    <Text style={ MainContent }>2.「基礎教育」及「通識博雅課程」請至「課程查詢系統」查詢可修讀課程名稱(實際開課仍以「選課系統」為準」)</Text>
                </View>
                <Icon iconStyle={ IconStyle } name='arrow-downward' />
                <View style={ ViewSubContainerNoMargin }>
                    <Text style={ ItemTitleH2Red }>【進入選課系統】</Text>
                    <Text style={ MainContent }>進入亞洲大學首頁→點選右方資訊捷徑「學生資訊系統」→進入「選課系統」。</Text>
                </View>
                <Icon iconStyle={ IconStyle } name='arrow-downward' />
                <View style={ ViewSubContainerNoMargin }>
                    <Text style={ ItemTitleH2Red }>【輸入帳號/密碼】</Text>
                    <Text style={ MainContent }>帳號為學號，預設密碼為西元出生年月日。</Text>
                </View>
                <Icon iconStyle={ IconStyle } name='arrow-downward' />
                <View style={ ViewSubContainerNoMargin }>
                    <Text style={ ItemTitleH2Red }>【選課】</Text>
                    <Text style={ MainContent }>1.依公告時間或系所年級查詢課程並進行選課。</Text>
                    <Text style={ MainContent }>2.依當學期應修科目加選(部分必修課以加選)。</Text>
                </View>
                <Icon iconStyle={ IconStyle } name='arrow-downward' />
                <View style={ ViewSubContainerNoMargin }>
                    <Text style={ ItemTitleH2Red }>【選課完成】</Text>
                </View>
                <Icon iconStyle={ IconStyle } name='arrow-downward' />
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2Red }>【至學生資訊系統確認個人課表】</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Selection;
