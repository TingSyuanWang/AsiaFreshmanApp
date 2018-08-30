import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class GroupIntroduction extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '社團介紹',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ViewSubContainerNoBorder, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH2 }>{'\t'}本校社團依性質共區分為自治、服務、康樂、學藝、體育、綜合等六大類社團，以培養學生多方面學習與發展，提供學生豐富而多樣化之課餘活動。</Text>
                <Text style={ ItemTitleH2 }>所在地點：</Text>
                <Text style={ ItemTitleH3 }>{'\t'}課服組辦公室位於「行政大樓A118」。學生社團辦公室位於「築夢學苑地下室」。</Text>
                <Text style={ ItemTitleH2 }>自治性</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH3 }>學生會</Text>
                    <Text style={ ItemTitleH3 }>職治系系學會</Text>
                    <Text style={ ItemTitleH3 }>財法系系學會</Text>
                    <Text style={ ItemTitleH3 }>視光系系學會</Text>
                    <Text style={ ItemTitleH3 }>學生議會</Text>
                    <Text style={ ItemTitleH3 }>聽語系系學會</Text>
                    <Text style={ ItemTitleH3 }>商設系系學會</Text>
                    <Text style={ ItemTitleH3 }>財金系系學會</Text>
                    <Text style={ ItemTitleH3 }>畢委會</Text>
                    <Text style={ ItemTitleH3 }>後獸醫系系學會</Text>
                    <Text style={ ItemTitleH3 }>時尚系系學會</Text>
                    <Text style={ ItemTitleH3 }>幼教系系學會</Text>
                    <Text style={ ItemTitleH3 }>生醫系系學會</Text>
                    <Text style={ ItemTitleH3 }>視傳系系學會</Text>
                    <Text style={ ItemTitleH3 }>外文系系學會</Text>
                    <Text style={ ItemTitleH3 }>資工系系學會</Text>
                    <Text style={ ItemTitleH3 }>數媒系系學會</Text>
                    <Text style={ ItemTitleH3 }>社工系系學會</Text>
                    <Text style={ ItemTitleH3 }>商應系系學會</Text>
                    <Text style={ ItemTitleH3 }>室設系系學會</Text>
                    <Text style={ ItemTitleH3 }>心理系系學會</Text>
                    <Text style={ ItemTitleH3 }>光通系系學會</Text>
                    <Text style={ ItemTitleH3 }>設計學院不分系系學會</Text>
                    <Text style={ ItemTitleH3 }>健管系系學會</Text>
                    <Text style={ ItemTitleH3 }>資傳系系學會</Text>
                    <Text style={ ItemTitleH3 }>進修部社工系系學會</Text>
                    <Text style={ ItemTitleH3 }>保健系系學會</Text>
                    <Text style={ ItemTitleH3 }>經管系系學會</Text>
                    <Text style={ ItemTitleH3 }>會資系系學會</Text>
                    <Text style={ ItemTitleH3 }>生科系系學會</Text>
                    <Text style={ ItemTitleH3 }>休憩系系學會</Text>
                    <Text style={ ItemTitleH3 }>護理系系學會</Text>
                </View>
                <Text style={ ItemTitleH2 }>服務性</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH3 }>慈青社</Text>
                    <Text style={ ItemTitleH3 }>法律服務社</Text>
                    <Text style={ ItemTitleH3 }>Sunshine親善志工社</Text>
                    <Text style={ ItemTitleH3 }>健康服務社</Text>
                    <Text style={ ItemTitleH3 }>法研社</Text>
                    <Text style={ ItemTitleH3 }>國際志工社</Text>
                    <Text style={ ItemTitleH3 }>Town.美樂服務團</Text>
                    <Text style={ ItemTitleH3 }>綠油油康輔社</Text>
                    <Text style={ ItemTitleH3 }>ASIA浪浪社</Text>
                    <Text style={ ItemTitleH3 }>崇德青年志工社</Text>
                    <Text style={ ItemTitleH3 }>新移民志工隊</Text>
                    <Text style={ ItemTitleH3 }>亞美Fun社</Text>
                </View>
                <Text style={ ItemTitleH2 }>康樂性</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH3 }>歌唱研習社</Text>
                    <Text style={ ItemTitleH3 }>亞大管樂團</Text>
                    <Text style={ ItemTitleH3 }>翔音擊團</Text>
                    <Text style={ ItemTitleH3 }>D調吉他社</Text>
                    <Text style={ ItemTitleH3 }>熱門音樂社</Text>
                    <Text style={ ItemTitleH3 }>流行音樂社</Text>
                    <Text style={ ItemTitleH3 }>饒舌DJ社</Text>
                </View>
                <Text style={ ItemTitleH2 }>體育性</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH3 }>中東肚皮舞社</Text>
                    <Text style={ ItemTitleH3 }>黑泡泡熱舞社</Text>
                    <Text style={ ItemTitleH3 }>劍道社</Text>
                    <Text style={ ItemTitleH3 }>籃球社</Text>
                    <Text style={ ItemTitleH3 }>藏鋒社</Text>
                    <Text style={ ItemTitleH3 }>歡樂桌球社</Text>
                    <Text style={ ItemTitleH3 }>生存研習社</Text>
                    <Text style={ ItemTitleH3 }>競技羽球社</Text>
                    <Text style={ ItemTitleH3 }>國標社</Text>
                    <Text style={ ItemTitleH3 }>武學研究社</Text>
                    <Text style={ ItemTitleH3 }>羽球社</Text>
                    <Text style={ ItemTitleH3 }>網球社</Text>
                    <Text style={ ItemTitleH3 }>瑜珈社</Text>
                    <Text style={ ItemTitleH3 }>後街滑板社</Text>
                    <Text style={ ItemTitleH3 }>合氣道</Text>
                    <Text style={ ItemTitleH3 }>競技啦啦隊</Text>
                    <Text style={ ItemTitleH3 }>足球社</Text>
                    <Text style={ ItemTitleH3 }>排球社</Text>
                    <Text style={ ItemTitleH3 }>競技撞球社</Text>
                    <Text style={ ItemTitleH3 }>亞洲電競社</Text>
                </View>
                <Text style={ ItemTitleH2 }>學藝性</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH3 }>咖啡研究社</Text>
                    <Text style={ ItemTitleH3 }>ACG動漫研究社</Text>
                    <Text style={ ItemTitleH3 }>新媒體社</Text>
                    <Text style={ ItemTitleH3 }>香草園點心社</Text>
                    <Text style={ ItemTitleH3 }>桌上遊戲社</Text>
                    <Text style={ ItemTitleH3 }>百慕達魔術社</Text>
                    <Text style={ ItemTitleH3 }>3D列印社</Text>
                    <Text style={ ItemTitleH3 }>攝影社</Text>
                    <Text style={ ItemTitleH3 }>創意飲料調製班</Text>
                    <Text style={ ItemTitleH3 }>魔法學院社</Text>
                    <Text style={ ItemTitleH3 }>AI人工智慧研究社</Text>
                    <Text style={ ItemTitleH3 }>程式研習社</Text>
                    <Text style={ ItemTitleH3 }>白帽駭客社</Text>
                    <Text style={ ItemTitleH3 }>韓國語文社</Text>
                    <Text style={ ItemTitleH3 }>國際英語演講社</Text>
                </View>
                <Text style={ ItemTitleH2 }>綜合性</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH3 }>健康團契</Text>
                    <Text style={ ItemTitleH3 }>禪悅佛學社</Text>
                    <Text style={ ItemTitleH3 }>陸生聯誼會</Text>
                    <Text style={ ItemTitleH3 }>印尼學生社</Text>
                    <Text style={ ItemTitleH3 }>國際生聯誼會</Text>
                    <Text style={ ItemTitleH3 }>蒙古學生社</Text>
                    <Text style={ ItemTitleH3 }>原住民青年社</Text>
                    <Text style={ ItemTitleH3 }>僑聯會</Text>
                    <Text style={ ItemTitleH3 }>金友會</Text>
                    <Text style={ ItemTitleH3 }>不學無術丈量社</Text>
                    <Text style={ ItemTitleH3 }>晨星社</Text>
                    <Text style={ ItemTitleH3 }>FunTalk研習服務社</Text>
                    <Text style={ ItemTitleH3 }>馬來西亞同學會</Text>
                    <Text style={ ItemTitleH3 }>RAINBOW百姓社</Text>
                </View>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }>校內各社團粉絲專頁請至課服組網站搜尋</Text>
                    <Text style={ ItemTitleH2 }>步驟：亞洲大學課服組 => 社團專區 => 所有社團資訊 => 挑選自己喜歡的社團 => 完成</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='課服組網站' onPress={ ()=>{ Linking.openURL('http://ecas.asia.edu.tw/bin/home.php')}} />
                </View>
            </ScrollView>
        );
    }
}

export default GroupIntroduction;
