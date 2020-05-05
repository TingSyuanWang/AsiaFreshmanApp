import React, { Component } from 'react';
import {Text, ScrollView, View, Linking} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class CampusSecurity extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校園安全',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ItemTitleH1, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH2 }>歡迎各位來到亞大這個大家庭，雖然高中生的規律生活與大學生的自治，有著些許差異，但是在生活教育上還是一樣的。</Text>
                <Text style={ ItemTitleH3 }>一、	本校是一個全校無菸環境的清新校園，不要把香菸帶入學校，更是不可以在學校吃檳榔，保持學校環境清潔美觀是我們每一個人的責任。</Text>
                <Text style={ ItemTitleH3 }>二、	學校的軍訓課程是必修課程，既可以求得有關國防方面的知識，更可以減免服役天數，軍訓成績不及格可是沒有辦法畢業的歐。</Text>
                <Text style={ ItemTitleH3 }>三、	當前社會詐騙謀術千百種，小心謹慎最重要，操作ATM要當心，危險陷阱在身邊。</Text>
                <Text style={ ItemTitleH2 }>若同學發生交通意外，不要慌張，記得要做到以下三件事情：</Text>
                <Text style={ ItemTitleH3 }>一、	保留事故現場。</Text>
                <Text style={ ItemTitleH3 }>二、	打電話報警。</Text>
                <Text style={ ItemTitleH3 }>三、	通知教官協助處理。</Text>
                <Text style={ ItemTitleH3 }>最新的訊息與可以幫助你的資料，都可以在軍訓室網頁中找到，我們24小時都會熱誠地為大家服務。</Text>
                <Text style={ ItemTitleH3 }>軍訓室專線：(04)2332-1053</Text>
                <Text style={ ItemTitleH3 }>校安中心專線：0919-555-445</Text>
                <Text style={ ItemTitleH3 }>網址：</Text>
                <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='軍訓室' onPress={ ()=>{ Linking.openURL('http://dmte.asia.edu.tw/bin/home.php')}} />
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>安全小語</Text>
                    <Text style={ ItemTitleH3 }>◎上路有保障：騎機車戴安全帽與開車繫安全帶。</Text>
                    <Text style={ ItemTitleH3 }>◎遵守交通規則：不超速、不蛇行、不夜遊。</Text>
                    <Text style={ ItemTitleH3 }>◎支持春暉行動：反菸、反毒、預防愛滋、不酗酒、不吃檳榔。</Text>
                    <Text style={ ItemTitleH3 }>◎遠離詐騙：「冷靜」、「查證」、「報警」三要領。</Text>
                    <Text style={ ItemTitleH3 }>◎快樂工讀：慎選工讀環境、小心色情陷阱、預防職災傷害。</Text>
                    <Text style={ ItemTitleH3 }>◎安全賃居：事前勘查住宿環境消防與逃生設施、謹慎簽約。</Text>
                    <Text style={ ItemTitleH3 }>◎尊重智財：不盜印、盜版、抄襲。</Text>
                    <Text style={ ItemTitleH3 }>◎友善校園：關心周遭人事物，共同維護亞大。</Text>
                    <Text style={ ItemTitleH3 }>◎性別平等：只要性別『齊』視，不要性別『歧』視。</Text>
                    <Text style={ ItemTitleH3 }>◎尊重人權：權利和義務不可分離，個人在享受權利時，應依法尊重他人的權利。</Text>
                    <Text style={ ItemTitleH3 }>◎反對霸凌：用愛搭起友情，用尊重禮貌表達關懷，遠離霸凌你我有責。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>守護專線</Text>
                    <Text style={ ItemTitleH2 }>內政部反詐騙專線 165</Text>
                    <Text style={ ItemTitleH2 }>校安中心	04-23321053、0919-555-445</Text>
                    <Text style={ ItemTitleH2 }>申訴專線	04-23323456 分機3202</Text>
                    <Text style={ ItemTitleH2 }>性平專線	04-23323456 分機1057</Text>
                    <Text style={ ItemTitleH2 }>交通事件輔導專線 04-23323456 分機3223</Text>
                    <Text style={ ItemTitleH2 }>愛護生命專線 04-23323456 分機6267、6269、6285、1748、1768</Text>
                </View>
            </ScrollView>
        );
    }
}

export default CampusSecurity;
