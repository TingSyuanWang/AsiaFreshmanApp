import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class GenderEquality extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '性別平等教育',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ItemTitleH1, ItemTitleH2, ItemTitleH3, ImageStyle } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewContainer }>
                    <Text style={ ItemTitleH1 }> 一、性別平等：</Text>
                    <Text style={ ItemTitleH2 }>【性騷擾的應對模式】當遭遇到性騷擾時，若採取消極應對模式，如隱忍不說、不予理會(如假裝聽不見或聽不懂)、逃避(如轉學/班、搬家等)，通常不會發生制止的效用，且可能讓騷擾者食髓知味。請勇敢堅定拒絕對方不當言語或肢體行為的性騷擾。</Text>
                    <Text style={ ItemTitleH2 }>若不幸遭遇性騷擾、性侵害或性霸凌時，你可以採取以下求助</Text>
                    <Text style={ ItemTitleH3 }>校內申訴單位：學生事務處(04)23323456分機3202或申訴信箱（student@asia.edu.tw）。</Text>
                    <Text style={ ItemTitleH3 }>心理諮商輔導管道：諮商輔導組(04)23323456分機6265~6269、1748。</Text>
                    <Text style={ ItemTitleH2 }>名詞定義</Text>
                    <Text style={ ItemTitleH3 }>*性侵害：指性侵害犯罪防治法所稱性侵害犯罪之行為。</Text>
                    <Text style={ ItemTitleH3 }>*性騷擾：以明示或暗示之方式，從事不受歡迎且具有性意味或性別歧視之言詞或行為，致影響他人之人格尊嚴、學習、或工作之機會或表現者；以性或性別有關之行為，作為自己或他人獲得、喪失或減損其學習或工作有關權益之條件者。符合以上情形之一，且未達性侵害之程度者。</Text>
                    <Text style={ ItemTitleH3 }>*性霸凌：指透過語言、肢體或其他暴力，對於他人之性別特徵、性別特質、性傾向或性別認同進行貶抑、攻擊或威脅之行為且非屬性騷擾者。</Text>
                    <Text style={ ItemTitleH3 }>*性別認同：指個人對自我歸屬性別的自我認知與接受。</Text>
                </View>
                <View style={ ViewContainer }>
                    <Text style={ ItemTitleH1 }>二、	消除對婦女一切形式歧視公約 (CEDAW)：</Text>
                    <Text style={ ItemTitleH2 }>內容詳列各項性別平等權利，包含參與政治及公共事務權、參與國際組織權、國籍權、教育權、就業權、農村婦女權、健康權、社會及經濟權、法律權、婚姻及家庭權等。</Text>
                </View>
                <View style={ ViewContainer }>
                    <Text style={ ItemTitleH1 }>三、	校外資源：</Text>
                    <Text style={ ItemTitleH2 }>台中市家庭暴力及性侵害防治中心04-22289111。</Text>
                    <Text style={ ItemTitleH2 }>全國性騷擾防治諮詢專線113。</Text>
                    <Text style={ ItemTitleH2 }>相關性別平等教育法規：</Text>
                    <Text style={ ItemTitleH3 }>性別平等教育法</Text>
                    <Text style={ ItemTitleH3 }>校園性侵害性騷擾或性霸凌防治準則</Text>
                    <Text style={ ItemTitleH3 }>亞洲大學校園性侵害性騷擾或性霸凌防治要點</Text>
                    <Text style={ ItemTitleH3 }>亞洲大學學生懷孕事件處理要點</Text>
                    <Text style={ ItemTitleH3 }>亞洲大學性別平等教育工作實施要點</Text>
                    <Text style={ ItemTitleH2 }>相關性別平等教育網站：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='教育部性別平等教育全球資訊網' onPress={ ()=>{ Linking.openURL('https://www.gender.edu.tw/web/index.php/home/index')}} />
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='內政部關懷E起來' onPress={ ()=>{ Linking.openURL('https://ecare.mohw.gov.tw/')}} />
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='亞洲大學性別平等教育委員會' onPress={ ()=>{ Linking.openURL('http://geec.asia.edu.tw/bin/home.php')}} />
                </View>
            </ScrollView>
        );
    }
}

export default GenderEquality;
