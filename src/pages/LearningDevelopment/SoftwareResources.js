import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, Icon, Divider } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class SoftwareResources extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '電子郵件 & 軟體資源',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, MainContentRed, ItemTitleH1, ItemTitleH2, ItemTitleH3, ItemTitleH3Red, DividerLong } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH1 }>學生【Email帳號】相關說明</Text>
                <Text style={ ItemTitleH3 }>{'\t'}本校學生Email已全面結合Microsoft Office 365服務，個人郵件信箱統稱O365信箱，由資訊發展處於開學前完成設置，您必須登入並點選「開通郵件」始可啟動各項服務，校內各項課程及活動通知都會寄到您的O365信箱，請務必時常接收信件。</Text>
                <Text style={ ItemTitleH3 }>{'\t'}O365信箱提供每位同學50 GB的容量空間外，還有1TB (1,000GB)的OneDrive網路儲存空間，更多Office 365相關說明可至本校好用知識庫點選文章分類「Office 365」，本校亦會在開學後利用通識講座向各位詳細介紹。</Text>
                <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='好用知識庫' onPress={ ()=>{ Linking.openURL('http://wow.asia.edu.tw/')}} />
                <Text style={ ItemTitleH3 }>O365帳號、密碼原則及相關說明：</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ MainContent }>1.帳號：“您的學號” + @live.asia.edu.tw。</Text>
                    <Text style={ MainContent }>2.密碼：預設密碼為您的西元出生年月日期共八碼（格式為YYYYMMDD，如19970610）。</Text>
                    <Text style={ MainContent }>3.網路郵局：請點擊按鈕</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='網路郵局' onPress={ ()=>{ Linking.openURL('http://mail.live.asia.edu.tw/')}} />
                    <Text style={ MainContent }>4.更改密碼：O365信箱密碼已與校園入口及學生資訊系統同步，如需更改密碼，可於登入校園入口系統後「變更密碼」功能逕行更改。</Text>
                    <Text style={ MainContent }>5.忘記密碼：O365信箱密碼已與校園入口及學生資訊系統同步，如您忘記密碼，可於校園入口登入頁面中「忘記密碼」功能進行重設動作。或持學生證至資訊大樓二樓資訊發展處聯合服務櫃檯(I200)進行重設。</Text>
                    <Text style={ MainContent }>6.常見問題：可至本校好用知識庫點選文章分類「Office 365」查詢。</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='好用知識庫' onPress={ ()=>{ Linking.openURL('http://wow.asia.edu.tw/')}} />
                </View>
                <Text style={ ItemTitleH3Red }>O365使用注意事項：</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ MainContentRed }>1.使用O365電子信箱須遵守「亞洲大學電子訊息管理辦法」、「台灣學術網路管理規範」及Microsoft Office 365等相關使用規定。</Text>
                    <Text style={ MainContentRed }>2.為維持全校電子訊息傳遞之一致性，校務訊息傳遞皆以O365電子信箱為主，必要時得以其他方式通知使用者，如因使用者疏忽未讀取電子訊息而導致個人權益受損時，由使用者負完全之責任。若O365電子信箱非您的常用信箱，建議參考以下連結，將O365電子信箱設定轉寄至您常用的外部信箱，確保信件不漏失，以維護您的權益。</Text>
                    <Text style={ MainContentRed }>3.O365郵件轉寄至外部信箱：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='O365郵件轉寄至外部信箱' onPress={ ()=>{ Linking.openURL('http://ic.asia.edu.tw/ezfiles/36/1036/img/18/forward_outside.pdf')}} />
                    <Text style={ MainContentRed }>4.O365電子帳號依教務處公告之學生名單由資訊發展處統一建立。</Text>
                    <Text style={ MainContentRed }>5.如有使用上的問題，請洽資訊發展處聯合服務櫃檯（分機3515）。</Text>
                </View>
                <Divider style={ DividerLong } />
                <Text style={ ItemTitleH1 }>軟體資源使用注意事項</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>一、	線上使用</Text>
                    <Text style={ MainContent }>1.本校提供線上使用之軟體平台－數位資源共享站，使用者只要輸入您的ANID（校園入口登入帳號）及密碼即可進入使用。</Text>
                    <Text style={ MainContent }>2.數位資源共享站系統入口：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='數位資源共享站系統入口' onPress={ ()=>{ Linking.openURL('http://swb.asia.edu.tw')}} />
                    <Text style={ MainContent }>3.數位資源共享站使用說明：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='數位資源共享站使用說明' onPress={ ()=>{ Linking.openURL('http://wow.asia.edu.tw/category/swb/')}} />
                    <Text style={ ItemTitleH2 }>二、	下載使用</Text>
                    <Text style={ MainContent }>1.學校已簽訂微軟、Adobe及相關教學軟體授權，同學在家中或宿舍可合法的安裝使用Windows、Office、Adobe、MATLAB、Dr. eye等多項軟體。只要由授權軟體服務網內選擇需要下載的軟體，輸入ANID（校園入口登入帳號）及密碼後即可進入下載。</Text>
                    <Text style={ MainContent }>2.授權軟體服務網系統入口</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='授權軟體服務網系統入口' onPress={ ()=>{ Linking.openURL('http://software.asia.edu.tw')}} />
                </View>
            </ScrollView>
        );
    }
}

export default SoftwareResources;
