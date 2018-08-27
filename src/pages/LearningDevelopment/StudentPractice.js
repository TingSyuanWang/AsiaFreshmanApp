import React, { Component } from 'react';
import { Text, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class CareerDevelopment extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '學生實務學習與輔導',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, ItemTitleH1, ItemTitleH2, ItemTitleH3, ItemTitleH3Red } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
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
