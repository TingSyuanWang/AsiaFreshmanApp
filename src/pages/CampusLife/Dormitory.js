import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class Dormitory extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '住宿',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH2 }>誠摯歡迎各位加入學生宿舍這個「大家庭」，學生宿舍秉持「賓至如歸、以客為尊」的服務態度，創造「家在亞洲、溫馨和樂」的學習與住宿環境。</Text>
                <Text style={ ItemTitleH2 }>為紓解住宿學生課業壓力並導正正當休閒娛樂價值觀，宿舍定期辦理多元特色主題活動、以型塑大家庭情誼。</Text>
                <Text style={ ItemTitleH2 }>為維護良好的住宿環境，請同學務必確實遵守「亞洲大學學生宿舍住宿申請及管理要點」，並配合遵守新生活運動規範，凡違反581（無品~吾不要）之任一項規定者將處以記過或扣點方式累積20點，需勒令退宿（住宿費不退還）。</Text>
                <Text style={ ItemTitleH2 }>亞洲大學學生宿舍住宿新生活運動規範：</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>無品~吾不要-581</Text>
                    <Text style={ ItemTitleH3 }>不要在宿舍養寵物</Text>
                    <Text style={ ItemTitleH3 }>不要在宿舍打麻將</Text>
                    <Text style={ ItemTitleH3 }>不要在宿舍內吸菸</Text>
                    <Text style={ ItemTitleH3 }>不要進入異性住宿區域</Text>
                    <Text style={ ItemTitleH3 }>不要在寢室使用電器（電腦、電扇、吹風機及充電器除外）</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>良品~吾要要-511</Text>
                    <Text style={ ItemTitleH3 }>出寢室要整肅服裝儀容</Text>
                    <Text style={ ItemTitleH3 }>騎乘機車要帶好安全帽</Text>
                    <Text style={ ItemTitleH3 }>見到他人要能禮貌問候</Text>
                    <Text style={ ItemTitleH3 }>住宿生活要能互相體諒</Text>
                    <Text style={ ItemTitleH3 }>夜間活動要安全快樂歸（夜間活動記得在點名前歸）</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>宿舍重要規範</Text>
                    <Text style={ ItemTitleH3 }>1.學生宿舍寢室、床位之分配由書院與住宿服務組視學生宿舍實際狀況後編排之。寢室、床位未經核准，不得擅自遷移、調換或變更，如有需求請至書院與住宿服務組申請。</Text>
                    <Text style={ ItemTitleH3 }>2.學生寒、暑假離校時，其私有物品應自行處理，或由學校提供場所集中存放，惟學校不負保管責任。</Text>
                    <Text style={ ItemTitleH3 }>3.寒、暑假期間，如因特殊原因必須申請住校者，應於公告期間內辦理申請，床位另行分配，以集中住宿為原則。</Text>
                    <Text style={ ItemTitleH3 }>4.住宿學生於進住宿舍時，應自行檢查寢室內各項設備設施，發現設施設備損壞故障時，應自行上網填寫修繕單，由總務處修護；於住宿期間如發現有不當人為破壞情形，應負復原或賠償之責，並視情節議處。</Text>
                    <Text style={ ItemTitleH3 }>5.宿舍大門早上5：30打開，晚上11：30關閉，平時持學生證刷卡自由進出，門禁時間由管理員管控。</Text>
                    <Text style={ ItemTitleH3 }>6.學生宿舍每週日至週四晚上11：30實施點名，住宿同學應返回寢室；如於門禁管制時間需外出或外宿者，應由管理員聯絡家長或法定監護人同意後並簽署切結書，完成請假手續後始得外出。</Text>
                    <Text style={ ItemTitleH3 }>請假:學生資訊系統→應用系統→學生請假系統→住宿請假申請。</Text>
                    <Text style={ ItemTitleH3 }>申請整學期不參加晚點名:線上申請，須附證明文件，宿舍管理員連絡家長確認。</Text>
                    <Text style={ ItemTitleH3 }>臨時請假:當天晚上9:30以前線上申請。</Text>
                    <Text style={ ItemTitleH3 }>早出晚歸(晚歸證或校外打工):須至書院與住宿服務組網頁下載表單，填寫完成印出紙本送至書院與住宿服務組。</Text>
                    <Text style={ ItemTitleH3 }>7.學生宿舍每學年實施防災疏散演習乙次，由學生事務處書院與住宿服務組策訂計畫並請軍訓室教官指導演習，住宿生依規定必須參加，不得無故缺席。</Text>
                    <Text style={ ItemTitleH3 }>8.為維護團體生活安全與品質，住宿學生務必遵守宿舍生活準則，違規者將依管理要點扣點。（「學生宿舍住宿申請及管理要點」第廿點）。
                    </Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>聯絡方式</Text>
                    <Text style={ ItemTitleH3 }>學校總機：04-23323456</Text>
                    <Text style={ ItemTitleH3 }>書院與住宿服務組分機：3260-3261、3263、3278(書院)、3279(賃居)</Text>
                    <Text style={ ItemTitleH3 }>感恩學苑 櫃檯分機：6524 專線電話:04-23399516</Text>
                    <Text style={ ItemTitleH3 }>寢室分機：47+寢號後3碼 ex：1101房 寢室分機：47101</Text>
                    <Text style={ ItemTitleH3 }>惜福學苑 櫃檯分機：6527 專線電話:04-23398261</Text>
                    <Text style={ ItemTitleH3 }>寢室分機：4+寢號 ex：8101房　寢室分機：48101</Text>
                    <Text style={ ItemTitleH3 }>築夢學苑 櫃檯分機：6528 專線電話:04-23397593</Text>
                    <Text style={ ItemTitleH3 }>寢室分機：4+寢號 ex：9101房 寢室分機：49101</Text>
                    <Text style={ ItemTitleH3 }>登峰學苑 櫃檯分機：6525 專線電話:04-23393167</Text>
                    <Text style={ ItemTitleH3 }>寢室分機：4+寢號 ex：6101房 寢室分機：46101</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='書院與住宿服務組網站' onPress={ ()=>{ Linking.openURL('http://ds.asia.edu.tw/bin/home.php')}} />
                </View>
            </ScrollView>
        );
    }
}

export default Dormitory;
