import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Icon, Divider, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class AIDS extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '愛滋防治宣導',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH1, ItemTitleH2, ItemTitleH2Red, ItemTitleH3, DividerShort, DividerLong } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH1 }>愛對的人，做對的事</Text>
                    <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>Q. 愛滋病的傳染途徑？</Text>
                    <Text style={ ItemTitleH2 }>A. 愛滋病最主要是透過血液與血液，體液與體液的交換而感染，換言之，與愛滋感染者進行性行為(體液交換)、共用針具、稀釋液(血液交換)或是透過母子垂直感染(血液交換)都會被感染。</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>Q. 預防愛滋病的方法？</Text>
                    <Text style={ ItemTitleH2 }>A. 愛滋病的病毒會透過血液與體液的交換而進入人體，但是只要做好自我防護像是「安全性行為」、「不共用針具、稀釋液」等就能截斷愛滋病毒傳染源、避免愛滋上身。</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>Q. 什麼時候才需要戴保險套？</Text>
                    <Text style={ ItemTitleH2 }>A. 當陰莖勃起且還沒接觸對方身體時就應該戴上保險套，並且以手指腹部輕輕擠掉保險套儲精囊的空氣才往下套到根部，以避免保險套裡因存有空氣而破裂，在與性伴侶發生性行為時，為避免感染愛滋病毒或性病，應全程使用合格的保險套及水性潤滑液。</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>Q. 哪些人需要檢驗愛滋？</Text>
                    <Text style={ ItemTitleH2 }>A. 曾經有不安全的行為(無套性行為、共用針具、稀釋液)建議至少要檢驗1次，若持續有上述情形者，建議增加篩檢頻率，至少每年1次。</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>Q. 我有愛滋方面的疑惑可以找誰協助？</Text>
                    <Text style={ ItemTitleH2 }>A. 您可以撥免付費愛滋防治專線0800-888995、台中市各衛生所電話詢問或逕上衛生局的網站</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='衛生局' onPress={ ()=>{ Linking.openURL('http://www.health.taichung.gov.tw')}} />
                    <Text style={ ItemTitleH3 }>資料來源：衛福部疾管署、臺中市政府衛生局</Text>
                    </View>
            </ScrollView>
        );
    }
}

export default AIDS;
