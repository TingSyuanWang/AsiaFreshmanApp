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
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='粉絲專頁' onPress={ ()=>{ Linking.openURL('https://m.facebook.com/%E5%AD%B8%E6%B6%AF%E4%B8%AD%E5%BF%83%E7%B2%89%E7%B5%B2%E9%A0%81-122291928558/')}} />
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='FB' onPress={ ()=>{ Linking.openURL('https://m.facebook.com/asiacareer')}} />
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>一、競取專業證照，備足就業競爭力：</Text>
                    <Text style={ ItemTitleH2 }>(一)	考選部舉辦之國家公務人員考試。</Text>
                    <Text style={ ItemTitleH2 }>(二)	考選部舉辦之專門職業及技術人員考試。</Text>
                    <Text style={ ItemTitleH2 }>(三)	各學系國際專業證照。</Text>
                    <Text style={ ItemTitleH2 }>(四)	各學系專業暨進階證照。</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='證照輔導與獎助辦法' onPress={ ()=>{ Linking.openURL('http://silgs.asia.edu.tw/%E8%AD%89%E7%85%A7%E8%A3%9C%E5%8A%A9/')}} />
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>二、品牌企業實習服務：為使品牌企業實習學生能夠順利銜接職場實習，規定如下：</Text>
                    <Text style={ ItemTitleH2 }>(一)	培訓期間：</Text>
                    <Text style={ ItemTitleH3 }>1.大學部：自大一開始至大四止。</Text>
                    <Text style={ ItemTitleH3 }>2.碩士班：自碩一開始至碩二止。</Text>
                    <Text style={ ItemTitleH2 }>(一)	前往品牌企業實習前，完成下列課程與條件：</Text>
                    <Text style={ ItemTitleH3 }>1.英文能力：多益成績達700分或托福IBT66分、ITP515分或全民英檢中級複試。</Text>
                    <Text style={ ItemTitleH3 }>2.職場講座：「品牌企業探索講座」至少2場；「品牌企業實務講座」至少2場，請洽各學系、院。「職場禮儀講座」至少1場，請洽教務處學生實務學習與輔導組。</Text>
                    <Text style={ ItemTitleH3 }>3.品牌企業課程：每學年「實務協同課程」至少1門，請洽各學系，建議大二、大三。(碩士班可免)</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='其他相關規定參考網址 ' onPress={ ()=>{ Linking.openURL('http://silgs.asia.edu.tw')}} />
                </View>
            </ScrollView>
        );
    }
}

export default CareerDevelopment;
