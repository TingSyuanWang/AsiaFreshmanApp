import React, { Component } from 'react';
import {Text, ScrollView, View, Linking} from 'react-native';
import {Button, Divider, Icon} from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../../assets/customStyle';


class GeneralCourse extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校定畢業門檻',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, MainContentRed, ItemTitleH1, ItemTitleH2, ItemTitleH3, DividerShort, DividerLong } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>（一）畢業前需完成校定核心能力（中文、英文、資訊）及基本素養（健康、關懷、創新、卓越）之畢業門檻。</Text>
                    <Text style={ ItemTitleH2 }>中文力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢國文類通識課程4學分且及格。</Text>
                    <Text style={ MainContent }>2. 通過本校中文能力測驗。</Text>
                    <Text style={ ItemTitleH2 }>英文力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢英文類通識課程8學分且及格。</Text>
                    <Text style={ MainContent }>2. 非外文系學生：多益測驗(TOEIC)達500分（含）以上，或托福紙筆測驗(TOEFL ITP)達440分（含）以上，或網路托福測驗(TOEFL iBT)達42分（含）以上，或通過全民英語能力分級檢定測驗(GEPT)中級初試，或雅思(IELTS)達3.5（含）以上，或通過全球英檢測驗(GET) A2聽力閱讀測驗或口說寫作測驗，以上其中之一項。</Text>
                    <Text style={ ItemTitleH2 }>資訊力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢資訊、科技類通識課程2學分且及格。</Text>
                    <Text style={ MainContent }>2. 通過本校資訊能力測驗。。</Text>
                    <Text style={ ItemTitleH2 }>健康力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢健康保健類通識課程2學分且及格。</Text>
                    <Text style={ MainContent }>2. 參加與健康力相關之通識涵養教育活動至少2次。</Text>
                    <Text style={ MainContent }>3. 五項體適能測驗中至少一項達體委會標準。若未達成，輔導處理措施—至少參與通過健康力認證之運動性競賽、活動一項（例如：新生盃、校慶運動會、環校路跑等…活動）。</Text>
                    <Text style={ ItemTitleH2 }>關懷力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢與關懷力高度相關以上通識課程2學分且及格。</Text>
                    <Text style={ MainContent }>2. 參加與關懷力相關之通識涵養教育活動至少2次。</Text>
                    <Text style={ MainContent }>3. 修畢且通過「服務與學習-實作課」服務工作60小時及「服務與學習-講授課」志工培訓課程24小時。</Text>
                    <Text style={ ItemTitleH2 }>創新力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢與創新力高度相關以上通識課程2學分且及格。</Text>
                    <Text style={ MainContent }>2. 參加與創新力相關之通識涵養教育活動至少2次。</Text>
                    <Text style={ ItemTitleH2 }>卓越力</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 修畢與卓越力高度相關以上通識課程2學分且及格。</Text>
                    <Text style={ MainContent }>2. 參加與卓越力相關之通識涵養教育活動至少2次。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>（二）畢業前需參加「通識涵養教育」活動之總場次至少8次，健康力、關懷力、創新力、卓越力之累積次數各2次。</Text>
                    <Text style={ ItemTitleH2 }>本校「書苑日」活動以及有通識認證的「通識講座」活動皆屬之。</Text>
                    <Button buttonStyle={{ marginTop: 20, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='書苑日' onPress={ ()=>{ Linking.openURL('https://webs.asia.edu.tw/character/')}} />
                    <Button buttonStyle={{ marginTop: 20, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='通識講座' onPress={ ()=>{ Linking.openURL('http://ged.asia.edu.tw/activites.htm')}} />
                </View>
            </ScrollView>
        );
    }
}

export default GeneralCourse;
