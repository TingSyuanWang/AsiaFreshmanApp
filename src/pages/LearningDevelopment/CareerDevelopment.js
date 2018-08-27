import React, { Component } from 'react';
import { Text, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class CareerDevelopment extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '生涯發展與就業輔導',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ItemTitleH1, ItemTitleH2, ItemTitleH3, ItemTitleH3Red } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>一、大學職涯發展，建議在各年段依序完成：</Text>
                    <Text style={ ItemTitleH2 }>(一)	大一學生能完成生涯探索，建立正向自我形象和積極上進心。</Text>
                    <Text style={ ItemTitleH2 }>(二)	大二學生能完成職涯定錨，規劃與啟動職涯發展計畫。</Text>
                    <Text style={ ItemTitleH2 }>(三)	大三學生能培養工作職能，競取專業證照。</Text>
                    <Text style={ ItemTitleH2 }>(四)	大四學生能擁有最新產業訊息、就業基本技巧，提升就業率。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>二、生涯探索：利用UCAN大專校院就業職能診斷，以協助學生瞭解自我的興趣偏好、職涯發展方向，作為未來職業發展的參考方向，且能有目標、有動機的強化相關職能。</Text>
                    <Text style={ ItemTitleH2 }>(一)	登入網站</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='UCAN大專校院就業職能診斷平台' onPress={ ()=>{ Linking.openURL('https://ucan.moe.edu.tw/')}} />
                    <Text style={ ItemTitleH2 }>(二)	帳號：1048 +學號  ex：1048 100020140</Text>
                    <Text style={ ItemTitleH2 }>(三)	密碼：學號前8碼 (學號共9碼，請去掉第1碼)</Text>
                    <Text style={ ItemTitleH3Red }>登入後請點選</Text>
                    <Text style={ ItemTitleH3Red }>1.「職業興趣探索」</Text>
                    <Text style={ ItemTitleH3Red }>2.「職場共通職能診斷」即可開始進行施測。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>三、	職涯探索、定錨未來：結合職業興趣探索及職能診斷，以提高個人職場競爭力。</Text>
                    <Text style={ ItemTitleH2 }>(一)	PODA職場潛力測驗：了解自我特質取向、個性優缺點、職場優弱勢，並配合學科專業進行自我成長規劃，協助受測者找尋未來職業志向，以二年級學生為主。</Text>
                    <Text style={ ItemTitleH2 }>(二)	CPAS職業適性診斷：用於診測個人的職業適性，亦是人格特質測驗，歡迎全校學生施測。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>四、	職涯發展諮詢與輔導【預約】(含職業性向、履歷健診)：</Text>
                    <Text style={ ItemTitleH2 }>為了讓同學提早了解職場生態並適性發展，學涯中心敦聘職涯輔導專長之諮商師，為同學提供完善諮詢服務。</Text>
                    <Text style={ ItemTitleH3 }>預約電話：04-23323456轉3235</Text>
                </View>
            </ScrollView>
        );
    }
}

export default CareerDevelopment;
