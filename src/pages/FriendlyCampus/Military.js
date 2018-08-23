import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class Military extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '兵役緩徵',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.back({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH3 }>1.本校男同學請於入學後7天內將緩徵（儘召）申請表填妥並浮貼身分證【已役畢同學需加附退伍令】正、反面影本交至學務處生活輔導組，免役同學則需附上免役證明，俾利兵役承辦人辦理審查。</Text>
                    <Text style={ ItemTitleH3 }>2.無法如期畢業的同學務必至教務處申請延長修業年限，以利生輔組向兵役科辦理同學的緩徵及儘召事宜之展延，每次僅能辦理延長半年，最多僅能申辦4次。</Text>
                    <Text style={ ItemTitleH3 }>3.未役年滿33歲、已役畢年滿36歲（醫學系37歲、研究所40歲）不得申請緩徵及儘後召集。</Text>
                    <Text style={ ItemTitleH3 }>4.於學期中復學及轉入之男學生，為維護自己權益務必向生輔組提出緩徵或儘召相關申請。</Text>
                    <Text style={ ItemTitleH3 }>5.男同學在學期間如有戶籍異動，請持身分證影本至生輔組辦理變更。</Text>
                    <Text style={ ItemTitleH3 }>6.延長修業同學除戶籍異動外，不必另外申辦。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Military;
