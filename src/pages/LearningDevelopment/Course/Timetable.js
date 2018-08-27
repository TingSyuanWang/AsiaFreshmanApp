import React, { Component } from 'react';
import { Text, ScrollView, Image, WebView, Linking, View } from 'react-native';
import { Divider, Icon, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../../assets/customStyle';

class Timetable extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '新生時程說明及注意事項',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH1, ItemTitleH2, ImageStyle } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH1 }>本校學生選課區分二階段：</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>一、第一階段預選</Text>
                    <Text style={ ItemTitleH2 }>107年8月20日(一)上午10:00至107年8月24日(五)中午12:00止及107年8月27日(一)上午8:00至107年8月27日(一)中午12:00止)
                    </Text>
                    <Text style={ MainContent }>如果同學錯過預選階段，請別緊張，您仍可於開學時參加第二階段「加退選」。</Text>
                    <Text style={ MainContent }>(一) 選課方式：一律採網路選課（各課程採「先選先上」方式辦理）。</Text>
                    <Text style={ MainContent }>(二) 請點下面按鈕進入選課系統網站，「選課系統」或由學校首頁 => 右方資訊捷徑「學生資訊系統」=>「選課系統」</Text>
                    <Button buttonStyle={{ marginTop: 20, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='亞洲大學選課系統' onPress={ ()=>{ Linking.openURL('http://course.asia.edu.tw/')}} />
                    <Text style={ MainContent }>(三) 登入學號、密碼(密碼為西元出生年月日)密碼請同學定期更新，以免帳號被盜用</Text>
                    <Text style={ MainContent }>(四) 說明：</Text>
                    <Text style={ MainContent }>{'\t'}(1) 所有「必修」課程由選課系統先行帶入學生個人課程(部份大學部基礎教育課程除外)，並不得退選原班必修課程及加選他班必修課程。</Text>
                    <Text style={ MainContent }>{'\t'}(2) 預選期間所有課程不得跨學制選課，通識課程四個領域合計限選1門課程。</Text>
                    <Text style={ MainContent }>{'\t'}(3) 預選期間新生應選課程含「基礎課程」、「通識課程」及「各學系專業課程」，選課時應依107學年度所屬學制課程規劃表選課(轉學新生請比照本學年當年級之課程規劃表年度)。</Text>
                    <Text style={ MainContent }>{'\t'}(4) 大學日間部新生加選「通識課程」，請於選課系統之「系所」欄位選擇「通識課程」;加選「基礎課程」者，「系所」欄位選擇「基礎課程」；或直接點選通識課程及基礎課程。</Text>
                    <Text style={ MainContent }>{'\t'}(5) 進修學士班新生加選「通識課程」，請於選課系統之「系所」欄位選擇「通識課程(夜)」，或直接點選通識課程。</Text>
                    <Text style={ MainContent }>{'\t'}(6) 各學制新生加選「各學系專業課程」，請於選課系統之「系所」欄位依同學「系所」、「年級」查詢後，加選之。</Text>
                    <Text style={ MainContent }>(五）為保障選課權益，請於選課結束後，登入「學生資訊系統」進行確認並列印個人課程留存。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>二、第二階段→加退選</Text>
                    <Text style={ ItemTitleH2 }>(預計107年09月10日至107年09月19日，詳細日期以學校正式公告時間為準)</Text>
                    <Text style={ MainContent }>(一) 選課方式: 一律採網路選課(各課程採「先選先上」方式辦理)。</Text>
                    <Text style={ MainContent }>(二)	選課系統網站網址: http://course.asia.edu.tw/「選課系統」或由學校首頁右方資訊捷徑「選課與查詢」「選課系統」。
                    </Text>
                    <Button buttonStyle={{ marginTop: 20, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='亞洲大學選課系統' onPress={ ()=>{ Linking.openURL('http://course.asia.edu.tw/')}} />
                    <Text style={ MainContent }>(三)	登入學號、密碼(密碼為西元出生年月日) => 密碼請同學定期更新，以免帳號被盜用</Text>
                    <Text style={ MainContent }>(四)	各學制每學期應修學分上、下限，如下表：</Text>
                    <Image style={ ImageStyle } resizeMode={'stretch'} source={require('../../../img/LearningDevelopment/course_timetable_figure1.png')} />
                    <Text style={ MainContent }>(五)	其他相關注意事項，請至教務處網站查詢，同學若有課程問題請洽各系辦、通識教育中心或教務處; 若有選課系統操作問題請洽資訊發展處。</Text>
                    <Button buttonStyle={{ marginTop: 20, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='教務處網站' onPress={ ()=>{ Linking.openURL('http://ac.asia.edu.tw/')}} />
                    <Text style={ MainContent }>(六)	各學系「107學年度各學制課程規劃表」請至各學系網頁下載。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Timetable;
