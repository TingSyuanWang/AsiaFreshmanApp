import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class TakeoffPlan extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '起飛計畫',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent,ItemTitleH1, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH2 }>「亞大一起飛」為推廣起飛計畫辦理學生學習增能、課業輔導、服務學習、職涯就業等全方位關懷照顧與多元實踐自我機會。</Text>
                <Text style={ ItemTitleH2 }>誠心歡迎加入亞大一起飛社團，提供最優質、最優惠與超新資訊與你分享。</Text>
                <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='亞大一起飛' onPress={ ()=>{ Linking.openURL('https://www.facebook.com/groups/asiaeo/')}} />
                <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='亞洲大學起飛計畫網站' onPress={ ()=>{ Linking.openURL('http://eo.asia.edu.tw')}} />
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>協助對象：</Text>
                    <Text style={ ItemTitleH2 }>具本校學籍並符合相關弱勢身分學生，包括：</Text>
                    <Text style={ ItemTitleH2 }>1.低收入戶學生</Text>
                    <Text style={ ItemTitleH2 }>2.中低收入戶學生</Text>
                    <Text style={ ItemTitleH2 }>3.身心障礙學生及身心障礙人士子女</Text>
                    <Text style={ ItemTitleH2 }>4.特殊境遇家庭子女孫子女學生</Text>
                    <Text style={ ItemTitleH2 }>5.原住民學生學雜費減免資格</Text>
                    <Text style={ ItemTitleH2 }>6.獲教育部弱勢學生助學計畫補助學生</Text>
                    <Text style={ ItemTitleH2 }>7.不同教育資歷且入大學機會較少之弱勢學生（三代家庭第1位上大學者、新住民）
                    </Text>
                </View>
             </ScrollView>
        );
    }
}

export default TakeoffPlan;
