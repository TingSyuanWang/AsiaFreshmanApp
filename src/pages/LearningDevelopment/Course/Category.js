import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../../assets/customStyle';


class Category extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '本校課程分類表',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, MainContentRed, ItemTitleH1, ItemTitleH2, ItemTitleH3, DividerShort, DividerLong } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ MainContent }>{'\t'}本校大學部各系應修之課程請依各系課程規劃表修習，主要共分為六大類，分別為校定必修、以院為教學核心課程、系核心課程、系專業學程、他系專長學程（亦或跨領域學程）及系自由選修課程，應修足畢業學分128學分（請依各系課程規劃表）始可畢業。</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>校定必修 (30學分)</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH2 }>基礎教育【含語文課程及核心通識課程】</Text>
                    <Text style={ ItemTitleH3 }>大學日間部(24學分)</Text>
                    <Text style={ MainContent }>{'\t'}語文通識(中文類、英文類及程式類)、核心通識(含健康類、歷史類、法律類及藝術類)、體育、全民國防軍事訓練及服務與學習(服務教育實施時間暫定晨間七時三十分至八時、或午間十二時十分至十二時四十分、或傍晚十七時十分至十七時四十分)等課程。</Text>
                    <Text style={ ItemTitleH3 }>進修學士班（20學分）</Text>
                    <Text style={ MainContent }>{'\t'}國文類、英文類、歷史與文化、健康與生活、資訊與科技、法律與生活、美學素養及體育等課程。</Text>
                    <Text style={ MainContentRed }>備註：均須修畢始能畢業。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH2 }>通識博雅課程(6至10學分)</Text>
                    <Text style={ ItemTitleH3 }>大學日間部(6學分)</Text>
                    <Text style={ MainContent }>107學年度起，大一新生修習規定如下：</Text>
                    <Text style={ MainContent }>人文類-1：人社學院免修</Text>
                    <Text style={ MainContent }>社會類-2：管理學院免修</Text>
                    <Text style={ MainContent }>自然類-3：醫健學院及資電學院免修</Text>
                    <Text style={ MainContent }>生活類-4：創意學院免修</Text>
                    <Text style={ MainContent }>本課程每學分皆須上滿18週，須於畢業前修習完畢</Text>
                    <Text style={ ItemTitleH3 }>進修學士班（10學分)</Text>
                    <Text style={ MainContent }>本校通識博雅課程分為人文科學、社會科學、自然科學及應用科學等四大領域。每一領域至少修習一次。</Text>
                    <Text style={ MainContentRed }>備註：</Text>
                    <Text style={ MainContentRed }>1. 107學年度大學日間部學生通識博雅課程學分須按前述規範修習。</Text>
                    <Text style={ MainContentRed }>2. 進修學士班學生通識博雅課程每一類至少需修2學分，修滿10學分。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH2 }>通識教育講座(適用大學日間部學生)</Text>
                    <Text style={ MainContent }>{'\t'}本校「通識教育講座」為通識教育必修，本校大學日間部須於在學期間至少參與8次大型演講，成績以P/F(通過/不通過)計分，通過者以一學分計；惟不納入通識教育及最低畢業學分。</Text>
                    <Text style={ MainContentRed }>備註：符合健康力2次、關懷力2次、創新力2次及卓越力2次。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>專業必選修課程(98學分)</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH2 }>以院為教學核心課程</Text>
                    <Text style={ MainContent }>{'\t'}依各學院規定開設，可參考各系網頁公告之課程規劃。(進修學士班各系目前無以院為教學核心課程)</Text>
                    <Text style={ ItemTitleH2 }>系核心課程</Text>
                    <Text style={ MainContent }>{'\t'}依各學系規定開設，可參考各系網頁公告之課程規劃。(進修學士班名稱為系定必修課程)</Text>
                    <Text style={ ItemTitleH2 }>系專業學程</Text>
                    <Text style={ MainContent }>{'\t'}依各學系規定開設，可參考各系網頁公告之課程規劃。(進修學士班各系目前無系專業學程)</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>專業必選修課程(98學分)</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH2 }>他系專長學程</Text>
                    <Text style={ MainContent }>{'\t'}依各學系規定開設，可參考各系網頁公告之課程規劃。(進修學士班各系目前無他系專長學程)</Text>
                    <Text style={ ItemTitleH2 }>跨領域學程</Text>
                    <Text style={ MainContent }>{'\t'}分為「院級」及「校級」跨領域學程，學生得自行選擇修習。(進修學士班各系目前無跨領域學程)</Text>
                    <Text style={ ItemTitleH2 }>系自由選修課程</Text>
                    <Text style={ MainContent }>{'\t'}依各學系規定開設，可參考各系網頁公告之課程規劃。(進修學士班名稱為自由選修課程或學程選修課程)</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Category;
