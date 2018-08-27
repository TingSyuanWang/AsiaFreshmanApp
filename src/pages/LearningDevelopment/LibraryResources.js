import React, { Component } from 'react';
import { Text, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class LibraryResources extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '圖書資源',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ItemTitleH1, ItemTitleH2, ItemTitleH3, ImageStyle } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>一、開放時間</Text>
                    <Text style={ ItemTitleH2 }>圖書館平時於週一至週五08:00～22:00；週六日09:30～17:30開放進館閱覽，國定及校定假日不開放，寒暑假開館時間為週一至週五08:00～17:10。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>二、借還書服務</Text>
                    <Text style={ ItemTitleH2 }>身份：研究生、準研究生、創意領導學程學員</Text>
                    <Text style={ ItemTitleH3 }>圖書：30冊、6週</Text>
                    <Text style={ ItemTitleH3 }>視聽資料：2件、1週</Text>
                    <Text style={ ItemTitleH3 }>教授指定用書：5冊、2天</Text>
                    <Text style={ ItemTitleH2 }>身份：大學生、準大學生及推廣班學員</Text>
                    <Text style={ ItemTitleH3 }>圖書：20冊、3週</Text>
                    <Text style={ ItemTitleH3 }>視聽資料：2件、1週</Text>
                    <Text style={ ItemTitleH3 }>教授指定用書：5冊、2天</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>三、推廣活動</Text>

                    <Text style={ ItemTitleH2 }>(一)	新鮮人的第一堂課－如何善用圖書館</Text>
                    <Text style={ ItemTitleH3 }>參加對象為各學制新生及轉學生，協助亞洲新鮮人了解圖書館環境、各項資源及服務。</Text>

                    <Text style={ ItemTitleH2 }>(二)	搜索達人練武功－電子資源利用講習及團體利用指導</Text>
                    <Text style={ ItemTitleH3 }>定期舉辦或配合教師課程需要帶班預約，指導學生如何使用館藏資料、資源蒐集方法及檢索技巧，有機會獲得通識認證或隨課小獎品。</Text>

                    <Text style={ ItemTitleH2 }>(三)	圖書館週及書香校園週</Text>
                    <Text style={ ItemTitleH3 }>每學年上學期12月舉辦圖書館週、下學期4月舉辦書香校園週活動，藉由活潑的遊戲方式，增進學生對圖書館各項資源及服務的了解，還有機會抽獎獲得精美獎品。</Text>

                    <Text style={ ItemTitleH2 }>(四)	熊愛讀冊－漂書計畫</Text>
                    <Text style={ ItemTitleH3 }>以熊愛讀冊「Library is everywhere」的概念，於霧峰地區和亞大校園設置漂書站，推廣閱讀活動。亞大校園漂書站包含：亞洲驛站、管理學院7-11廣場、資訊大樓學涯走廊、圖書館圓形廣場、感恩學苑(一宿)、惜福學苑(二宿)及築夢學苑(三宿)。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>四、圖書期刊推薦</Text>
                    <Text style={ ItemTitleH2 }>(一)  推薦管道：系所專業圖書資料（含期刊）：每學期舉辦圖書館推展委員會決定各系所單位之圖書資料經費/數量，各系所單位可自行提供書目，或由圖書館提供書目予各系所單位勾選，推薦書目請寄lib@asia.edu.tw。</Text>
                    <Text style={ ItemTitleH2 }>(二)	個人推薦：列入圖書館專用購書經費計算。</Text>
                    <Text style={ ItemTitleH2 }>(三)	線上推薦：於圖書館自動化系統填寫書目資料。</Text>
                    <Text style={ ItemTitleH2 }>(四)	Email推薦：lib@asia.edu.tw</Text>
                    <Text style={ ItemTitleH2 }>(五)	紙本推薦單：圖書館櫃台。</Text>
                    <Text style={ ItemTitleH2 }>(六)	採購：圖書館彙整推薦書目、查核複本、奉核請購、轉請總務處採購、圖書進館點/驗收、分類、編目建檔、加工、上架典藏展覽、提供外借。</Text>
                    <Text style={ ItemTitleH2 }>(七)	購書時程：中文書約需45-60工作天，外文書約需60-90工作天。</Text>
                    <Text style={ ItemTitleH2 }>(八)	同學們如有需求，歡迎您推薦圖書館採購，謝謝～</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>五、特色空間</Text>
                    <Text style={ ItemTitleH2 }>(一)	討論室：共3間，每間提供投影設備一組，3人以上可借用，借用期限為3小時，若無人預約得續借一次。</Text>
                    <Text style={ ItemTitleH2 }>(二)	研究小間：共6間，借用期限為1日，若無人預約得續借一次。</Text>
                    <Text style={ ItemTitleH2 }>(三)	咖啡閱讀區：提供師生良好的授課、討論及互動空間，並配合推廣閱讀、借書享有喝咖啡折價活動，內設性別平等教育專區、藝文采風坊、通識中心設立之悅讀驛站中文書寫中心。</Text>
                    <Image style={{ width: 320, height: 238 }} resizeMode={'stretch'} source={require('../../img/LearningDevelopment/LibraryResources_figure1.png')} />
                    <Text style={ ItemTitleH3 }>討論室內部實景</Text>
                    <Image style={{ width: 320, height: 242 }} resizeMode={'stretch'} source={require('../../img/LearningDevelopment/LibraryResources_figure2.png')} />
                    <Text style={ ItemTitleH3 }>挑高區閱覽席</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>六、聯絡資訊</Text>
                    <Text style={ ItemTitleH2 }>電話：(04)2332-3456分機 3415</Text>
                    <Text style={ ItemTitleH2 }>e-mail：lib@asia.edu.tw</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='圖書館網址' onPress={ ()=>{ Linking.openURL('http://library.asia.edu.tw/')}} />
                </View>
            </ScrollView>
        );
    }
}

export default LibraryResources;
