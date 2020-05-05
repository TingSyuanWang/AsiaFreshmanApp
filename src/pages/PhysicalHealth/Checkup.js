import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class Checkup extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '健康檢查',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH1, ItemTitleH2, ItemTitleH3, ImageStyle, ItemTitleH2Yellow } = customStyles;

        return (
            <ScrollView style={ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }>健康中心於管理大樓一樓(M111)提供衛生保健服務，主要是維護及促進學生的健康，提供學生簡易外傷處理、緊急醫療救護、醫療保健諮詢、衛生教育宣導、簡便醫療用品借用及餐飲衛生檢查督導等；亦辦理健康主題講座、有氧瑜珈、健走活動、急救教育訓練等多元健康促進活動，以幫助學生建立正確的保健觀念、良好的衛生習慣、健全的身心健康為目標。</Text>
                    <Text style={ ItemTitleH1 }>【新生健康檢查宣導】</Text>
                    <Text style={ ItemTitleH2 }>一、健康中心為服務同學，於<Text style={ ItemTitleH2Yellow }> 107 年 9 月 10 日(一)至 9 月 15 日(六)</Text>安排合格特約醫院到校內進行健康檢查(詳細健檢時間及注意事項將於開學後另行通知並公告於健康中心網頁)，健檢費用為新台幣600元整，請於健檢當天現場繳費。</Text>
                    <Text style={ ItemTitleH2 }>二、選擇在校內做健康檢查之注意事項：請撕下入學前收到之新生入學手冊之附件一「學生健康檢查資料卡」(粉紅色)，填妥資料卡上正面自填所有欄位，並貼上2吋照片1張，於健檢當日攜帶該卡至健檢現場。</Text>
                    <Text style={ ItemTitleH2 }>三、選擇在校外做健康檢查之注意事項：</Text>
                    <Text style={ ItemTitleH3 }>(一)請撕下新生入學手冊之附件一「學生健康檢查資料卡」，填妥資料卡上正面自填所有欄位，並貼上2吋照片1張，攜帶該卡至各公立醫院、醫學中心、區域醫院或地區醫院辦理健康檢查。【學校認可醫院請至學務處衛生保健組網頁查詢】</Text>
                    <Text style={ ItemTitleH3 }>(二)請健檢單位依「學生健康檢查資料卡」上之項目進行檢查，由健檢單位將檢查結果載入「學生健康檢查資料卡」上並蓋上醫院章。</Text>
                    <Text style={ ItemTitleH3 }>(三)本校僅接受開學日前3個月內至上述(一)所列醫院施做之健康檢查資料。若繳交之檢查結果不完整，健康中心將拒收並視同未做檢查。</Text>
                    <Text style={ ItemTitleH3 }>(四)須於開學後一個月內<Text style={ ItemTitleH2Yellow }> 107 年 10 月 9 日</Text>將檢查後醫院蓋章之「學生健康檢查資料卡」繳交至健康中心(管理大樓，M111室)。醫院檢查結果通常需一星期工作天，故請盡早完成健康檢查，以利於規定期限內繳交。</Text>
                    <Text style={ ItemTitleH2 }>四、校內轉系轉學生，請至「健康中心」提供原就讀學系和學號等資料，經確認已做過健康檢查者可直接資料轉移；校外轉入轉學生可向原大學申請「健康檢查資料卡」，檢查項目需符合亞洲大學「學生健康檢查資料卡」上規定項目【請撕下新生入學手冊之附件「學生健康檢查資料卡」，填妥資料卡上正面自填所有欄位，貼上2吋照片1張，連同原大學之「健康檢查資料卡」一同繳交至健康中心】。</Text>
                    <Text style={ ItemTitleH2 }>五、聯絡方式</Text>
                    <Text style={ ItemTitleH3 }>位置：管理大樓1樓（M111室）</Text>
                    <Text style={ ItemTitleH3 }>電話：04-23323456 # 3250、3251、3253</Text>
                    <Text style={ ItemTitleH3 }>網站：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='健康中心' onPress={ ()=>{ Linking.openURL('http://healthyau.asia.edu.tw')}} />
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='衛生保健' onPress={ ()=>{ Linking.openURL('http://shs.asia.edu.tw/bin/home.php')}} />
                </View>
            </ScrollView>
        );
    }
}

export default Checkup;
