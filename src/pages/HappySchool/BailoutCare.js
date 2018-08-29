import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class BailoutCare extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '紓困關懷',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH1, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                    <Text style={ ItemTitleH1 }>一、因重大災害之學生就學生活濟助</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>1、凡就讀本校具有學籍之學生。</Text>
                    <Text style={ ItemTitleH3 }>2、由（鄉、鎮、市）公所開具家庭受損證明者或由本校查明屬實者。</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>{'\t'}由本校「關懷中心」主動提供慰助，或由學生於受災後二個月內至生活輔導組申請。</Text>
                </View>
                    <Text style={ ItemTitleH1 }>二、學雜費分期付款</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>{'\t'}未獲就學貸款、減免、政府相關單位補助而家庭突遭變故致經濟困頓有證明文件之學生。</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>{'\t'}由導師或系辦專簽會出納組分期付款學雜費。</Text>
                </View>
                    <Text style={ ItemTitleH1 }>三、緊急紓困獎助學金</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>1、家庭年所得114萬元以下，且法定監護人，失業6個月以上，未獲就學補助者。</Text>
                    <Text style={ ItemTitleH3 }>2、家庭原月收入5萬元以內，且法定監護人為非自願無薪假每月達15日連續三個月以上者。</Text>
                    <Text style={ ItemTitleH3 }>3、其他情形特殊經獎學金審查委員會審議通過者。</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>1、每學期審查委員視家庭經濟情況分別補助10,000元、8,000元、5,000元。</Text>
                    <Text style={ ItemTitleH3 }>2、獲紓困之學生應由學務處依50、40、25小時標準安排服務學習</Text>
                </View>
                    <Text style={ ItemTitleH1 }>四、學生急難慰助</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>同學因意外事故而致傷亡</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>1、受傷住院治療且檢具證明：2,000元。</Text>
                    <Text style={ ItemTitleH3 }>2、重傷者：5,000元。</Text>
                    <Text style={ ItemTitleH3 }>3、致殘（檢附殘障手冊）：6,000元。</Text>
                    <Text style={ ItemTitleH3 }>4、死亡：50,000元。</Text>
                </View>
                    <Text style={ ItemTitleH1 }>五、低收入戶免住宿費助學金</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>領有鄉、鎮、市、區公所核發低收入戶證明文件</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>1、每學期免費住宿，於開學後一個月內提出申請。</Text>
                    <Text style={ ItemTitleH3 }>2、需參與生活服務學習，每學期30小時。</Text>
                </View>
                    <Text style={ ItemTitleH1 }>六、弱勢助學金</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>1、家庭年所得未超過70萬元。</Text>
                    <Text style={ ItemTitleH3 }>2、家庭應計列人口利息所得合計未超過新臺幣2萬元。</Text>
                    <Text style={ ItemTitleH3 }>3、家庭應計列人口擁有不動產價值合計未超過650萬元。</Text>
                    <Text style={ ItemTitleH3 }>4、前一學期學業成績平均需達60分以上且操行成績亦達70分以上。</Text>
                    <Text style={ ItemTitleH3 }>5、申請人如為單親家庭、家暴困境、失聯或服刑等者，請提供相關證明文件，專案簽核後方可放寬家庭收入計列範圍。</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>1、每學年度申請一次，於上學期開學日至10月25日前，補助金於下學期註冊通知繳費單扣。</Text>
                    <Text style={ ItemTitleH3 }>2、每學年補助金額由12,000元至35,000元等五級距。</Text>
                </View>
                    <Text style={ ItemTitleH1 }>七、生活學習助學生</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>申請資格：</Text>
                    <Text style={ ItemTitleH3 }>1、家庭年所得未超過70萬元。</Text>
                    <Text style={ ItemTitleH3 }>2、家庭應計列人口利息所得合計未超過新臺幣2萬元。</Text>
                    <Text style={ ItemTitleH3 }>3、家庭應計列人口擁有不動產價值合計未超過650萬元。</Text>
                    <Text style={ ItemTitleH3 }>4、前一學期學業成績平均需達60分以上且操行成績亦達70分以上。</Text>
                    <Text style={ ItemTitleH3 }>5、申請人如為單親家庭、家暴困境、失聯或服刑等者，請提供相關證明文件，專案簽核後方可放寬家庭收入計列範圍。</Text>
                    <Text style={ ItemTitleH2 }>注意事項：</Text>
                    <Text style={ ItemTitleH3 }>符合助學金所定家庭經濟及成績條件之獎助生優先遴選為生活學習助學生(每週至多8小時，每月不超過30小時，薪資6,000元，)每學年度申請一次，於上學期開學後一個月內提出申請。</Text>
                </View>
                    <Text style={ ItemTitleH1 }>八、備考</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>1、本表所列主為家庭遭困或經濟有礙同學之紓困助學方案，其餘獎助學金參考本校學務處生輔組公告。</Text>
                    <Text style={ ItemTitleH2 }>2、上列申請基本條件均需為本校學生(具學籍)其餘資格詳如各申請表。</Text>
                    <Text style={ ItemTitleH2 }>3、所有申請表單及作業方式請逕由生輔組網頁下載參考運用。</Text>
                    <Text style={ ItemTitleH2 }>4、部分補助與政府其餘獎助辦法相互排擠，申請人需自行選擇提出申請項目。</Text>
                    <Text style={ ItemTitleH2 }>5、為方便同學書面申請作業，學務處特成立『紓困關懷服務中心』統一辦理上述各項申請表單之遞送。生輔組分機電話：3211</Text>
                </View>
            </ScrollView>
        );
    }
}

export default BailoutCare;
